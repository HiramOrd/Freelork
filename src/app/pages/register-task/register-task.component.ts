import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {
  @ViewChild('newPhoto') newPhoto: ElementRef;
  file:any;
  imageShow:any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  chargePhoto(){
    this.newPhoto.nativeElement.click();
  }

  onFileChanged(event) {
  this.file = event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
    this.imageShow = (<FileReader>event.target).result;
    }
  }
  
}
