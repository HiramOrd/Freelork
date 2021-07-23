import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './sortable.directive';

interface SearchResult {
  arrayTable: any[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

interface ColumnsTable {
  type: string;
  data: any;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(arrayTable: any[], column: SortColumn, direction: string): any[] {
  if (direction === '' || column === '') {
    return arrayTable;
  } else {
    return [...arrayTable].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(data: any, term: string, pipe: PipeTransform) {
  let verify = false;

  // tslint:disable-next-line:forin
  for (const property in data) {
    if (typeof(data[property]) === 'string') {
      verify = data[property].toLowerCase().includes(term.toLowerCase());
    } else if ( typeof(data[property]) === 'number') {
      verify = pipe.transform(data[property]).includes(term);
    }
    if (verify === true) {
      break;
    }
  }
  return verify;
}

@Injectable({providedIn: 'root'})
export class TableService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _arrayTable$ = new BehaviorSubject<any[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
  }


  initService(array: any[]) {
    this._state.page = 1;
    this._state.sortColumn = '';
    this._state.sortDirection = '';
    this._search$ = new Subject<void>();
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search(array)),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._arrayTable$.next(result.arrayTable);
      this._total$.next(result.total);
    });
    this._search$.next();
  }

  get arrayTable$() { return this._arrayTable$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(array: any[]): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let arrayTable = sort(array, sortColumn, sortDirection);

    // 2. filter
    arrayTable = arrayTable.filter(data => matches(data, searchTerm, this.pipe));
    const total = arrayTable.length;

    // 3. paginate
    arrayTable = arrayTable.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({arrayTable: arrayTable, total});
  }
}
