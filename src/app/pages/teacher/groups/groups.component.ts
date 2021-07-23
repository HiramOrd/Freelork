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

  constructor(private modalService: NgbModal,  private clipboardApi: ClipboardService) {
   }

  ngOnInit(): void {
    console.log(this.groups[2].code);
  }

  openTooltipHover(tooltip, greeting: string) {
    tooltip.close();
    tooltip.open({ greeting });
  }
  openTooltipClick(tooltip, greeting: string, i) {
    tooltip.close();
    tooltip.open({ greeting });
    this.clipboardApi.copyFromContent(this.groups[i].code)
  }
  closeTooltip(tooltip) {
    tooltip.close();
  }
  deleteGroup(){
    const modalRef = this.modalService.open(ModalDeleteGroupComponent);
    modalRef.componentInstance.name = 'World';
  }

    groups: any[] = [
      {
        "name": "IS61 SOFTWARE",
        "date": "12/06/2021",
        "career": "Ingeniería en Software ",
        "students": 23,
        "code": "333333",
        "status": "Activo"
      },
      {
        "name": "IS31 TERAPIA",
        "date": "05/07/2021",
        "career": "Terapia Fisica",
        "students": 20,
        "code": "77777",
        "status": "Activo"
      },
      {
        "name": "IS41 BIOTECNOLOGIA",
        "date": "01/08/2021",
        "career": "Ingeniería en Biotecnologia",
        "students": 15,
        "code": "555555",
        "status": "Activo"
      },
      {
        "name": "IS81 SOFTWARE",
        "date": "13/06/2021",
        "career": "Ingeniería en Software ",
        "students": 17,
        "code": "444444",
        "status": "Activo"
      }
    ];
  


}
