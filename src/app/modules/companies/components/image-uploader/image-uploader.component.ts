import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

// Const URL = '/api/';
const UPLOAD_URL =
      `${environment.variables.platformUrl}/api/platform/assets?folderUrl=images&forceFileOverwrite=true`;


interface uploadResponse{
  url: string
}

@Component({
  selector: 'vc-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: [
    './image-uploader.component.scss',
  ],
})
export class ImageUploaderComponent implements OnInit {
  @Input()
  imageUrl: string | null = null;

  @Output()
  imageUrlChange = new EventEmitter<string>();

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      this.http.post<uploadResponse>(UPLOAD_URL, formData).subscribe((response) => {
        const url = response.url;
        this.imageUrl = url;
        this.imageUrlChange.emit(url);
        console.log(response);
      });
    }
  }

  removeAsset() {

  }
}
