import { Injectable } from '@angular/core';
import {ModalViewRegisterStudentComponent} from './register/modal-view-register-student/modal-view-register-student.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private modalService: NgbModal) { }

  viewRegister(id, origin?): any {
    const modalRef = this.modalService.open(ModalViewRegisterStudentComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.origin = origin ?? undefined;
    return modalRef.result.then( result => {
        return result;
    }).catch( error => {
      return -1;
    } );
  }
}
