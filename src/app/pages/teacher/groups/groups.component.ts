import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteGroupComponent } from './modal-delete-group/modal-delete-group.component';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupCode = '3333333333';

  constructor(private modalService: NgbModal,  private clipboardApi: ClipboardService) {
   }

  ngOnInit(): void {
  }

  openTooltipHover(tooltip, greeting: string) {
    tooltip.close();
    tooltip.open({ greeting });
  }
  openTooltipClick(tooltip, greeting: string) {
    tooltip.close();
    tooltip.open({ greeting });
    this.clipboardApi.copyFromContent(this.groupCode)
  }
  closeTooltip(tooltip) {
    tooltip.close();
  }
  deleteGroup(){
    const modalRef = this.modalService.open(ModalDeleteGroupComponent);
    modalRef.componentInstance.name = 'World';
  }


}
