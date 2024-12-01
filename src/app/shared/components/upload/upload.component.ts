import { Component } from '@angular/core';
import { UploadService } from '../../service/amazon/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  fileObj!: any;
  fileUrl!: string;
  errorMsg: boolean
  constructor(private fileUploadService: UploadService) {
    this.errorMsg = false
  }

  onFilePicked(event: any): void {

    this.fileObj = event.target.files[0];


  }
  onFileUpload() {
    console.log(this.fileObj)
    if (!this.fileObj) {
      this.errorMsg = true
      return
    }
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.fileUploadService.fileUpload(fileForm).subscribe(res => {
      console.log(res)
    });
  }
}
