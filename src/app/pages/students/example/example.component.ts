import {Component, OnInit} from '@angular/core';
import {CloudinaryService} from '../../../services/cloudinary.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  public uploader;
  public hasBaseDropZoneOver = false;

  constructor(public cloudinaryService: CloudinaryService) {}

  ngOnInit(): void {
    this.uploader = this.cloudinaryService.createUploader('test_cloudinary');
  }
}
