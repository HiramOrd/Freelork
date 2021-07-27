import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  ondrag = false;
  @Input() file: FormControl;
  @Input() imageShow;
  @Output() result: EventEmitter<any>;
  @Output() deleteEdit: EventEmitter<any>;

  constructor() {
    this.result = new EventEmitter();
    this.deleteEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.getImage(event.target.files);
  }

  getImage(files) {
    if (files.length > 0) {
      const file = files[0];
      this.file.setValue(file);
      this.result.emit(this.file);
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageShow = reader.result;
    };
    reader.readAsDataURL(this.file.value);
  }

  dropHandler(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].type.includes('image')) {
          const file = ev.dataTransfer.items[i].getAsFile();
          this.getImage([file]);
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        this.getImage([ev.dataTransfer.files[i]]);
      }
    }
    this.ondrag = false;
    if (ev.dataTransfer.items) {
      ev.dataTransfer.items.clear();
    } else {
      ev.dataTransfer.clearData();
    }
  }

  dragExit() {
    this.ondrag = false;
  }

  dragOverHandler(ev) {
    this.ondrag = true;
    ev.preventDefault();
  }

  deletePhoto(): void {
    this.imageShow = undefined;
    this.file.setValue(null);
    this.result.emit(undefined);
    this.deleteEdit.emit(null);
  }

}
