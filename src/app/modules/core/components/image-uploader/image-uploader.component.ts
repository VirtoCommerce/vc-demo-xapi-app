import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

// Const URL = '/api/';
const UPLOAD_URL =
      `${environment.variables.platformUrl}/api/platform/assets?folderUrl=images&forceFileOverwrite=true`;

interface uploadResponse {
  name: string;
  url: string;
}

@Component({
  selector: 'vc-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: [
    './image-uploader.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploaderComponent),
      multi: true,
    },
  ],
})
export class ImageUploaderComponent implements ControlValueAccessor  {
  @Input()
  imageUrl: string | null = null;

  @Output()
  imageUrlChange = new EventEmitter<string | null>();

  constructor(private readonly http: HttpClient) {
  }

  propagateChange = (_: any) => {};

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.imageUrl = obj as string;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void
  {}

  onFileSelected(event: any): void {
    const file:File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.http.post<uploadResponse[]>(UPLOAD_URL, formData).subscribe(items => {
        if (items.length > 0) {
          const url = items[0].url;
          this.imageUrl = url;
          console.log(this.imageUrl);
          this.imageUrlChange.emit(url);
          this.propagateChange(this.imageUrl);
        }
      });
    }
  }

  removeAsset(): void {
    this.imageUrl = null;
    this.imageUrlChange.emit(null);
    this.propagateChange(this.imageUrl);
  }
}
