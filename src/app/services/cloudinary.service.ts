import { Injectable } from '@angular/core';
import {FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {Cloudinary} from '@cloudinary/angular-5.x';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(private cloudinary: Cloudinary) { }

  createUploader(uploadPreset: string): any {
    let uploader;
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/image/upload`,
      autoUpload: false,
      isHTML5: true,
      removeAfterUpload: true, // Calcule el progreso de forma independiente para cada archivo cargado
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    uploader = new FileUploader(uploaderOptions);
    uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      form.append('upload_preset', uploadPreset);
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

    const upsertResponse = fileItem => {
      // Check if HTTP request was successful
      if (fileItem.status !== 200) {
        console.log('Upload to cloudinary Failed');
        console.log(fileItem);
        return false;
      }
      console.log(fileItem);
      console.log(fileItem.data.url);
      // TODO: Aqui mando a la base de datos
    };

    uploader.onCompleteItem = (item: any, response: string, status: number) =>
      upsertResponse(
        {
          file: item.file, status,
          data: JSON.parse(response),
        }
      );
    return uploader;
  }
}
