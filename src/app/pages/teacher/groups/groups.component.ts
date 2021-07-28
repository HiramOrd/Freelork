import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteGroupComponent } from './modal-delete-group/modal-delete-group.component';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
import {HttpClientService} from '../../../services/http-client.service';
import {ToastService} from '../../../utilities/toast.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  serviceData;
  constructor(
    private modalService: NgbModal,
    private clipboardApi: ClipboardService,
    private  httpClientService: HttpClientService,
    private toastService: ToastService,
    ) {}

  ngOnInit(): void {
    this.getAllGroups ();
  }
  /* API for GET All Groups in Dashboard Groups Teacher */
  getAllGroups () {
    this.httpClientService.getAllGroups(9).subscribe( response => {
      this.serviceData = response;
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  openTooltipHover(tooltip, greeting: string) {
    tooltip.close();
    tooltip.open({ greeting });
  }
  openTooltipClick(tooltip, greeting: string, i) {
    tooltip.close();
    tooltip.open({ greeting });
    this.clipboardApi.copyFromContent(this.serviceData[i].code);
  }
  closeTooltip(tooltip) {
    tooltip.close();
  }

  deleteGroup(id: number) {
    const modalRef = this.modalService.open(ModalDeleteGroupComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then( response => {
      if (response === 200) {
        this.serviceData = this.serviceData.filter(row => row.id !== id);
      }
    } ).catch();
  }
}
