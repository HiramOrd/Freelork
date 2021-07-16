import {Component, OnInit} from '@angular/core';
import {CloudinaryService} from '../../../services/cloudinary.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  public uploader;
  public hasBaseDropZoneOver = false;
  public previewImg = [];

  constructor(public cloudinaryService: CloudinaryService, public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.uploader = this.cloudinaryService.createUploader('test_cloudinary');

    this.uploader.onAfterAddingFile = (file) => {
      this.previewImg.push(this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file))));
      console.log(this.previewImg);
    };
  }

  test(): void {
    console.log(this.uploader.queue);
  }
}
