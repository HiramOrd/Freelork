import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteGroupComponent } from './modal-delete-group/modal-delete-group.component';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
 groupCode = '3333333333';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteGroup(){
    const modalRef = this.modalService.open(ModalDeleteGroupComponent);
    modalRef.componentInstance.name = 'World';
  }

  copyCode(groupCode: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = groupCode;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.CopiedCode();
  }
  CopiedCode(){
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado";
  }

}
