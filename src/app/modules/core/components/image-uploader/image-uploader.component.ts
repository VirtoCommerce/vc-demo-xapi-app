import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

interface uploadResponse {
  name: string;
  url: string;
}

type fnType = (_: string | null) => void;

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
export class ImageUploaderComponent implements ControlValueAccessor {
  uploadUrl = `${environment.variables.platformUrl}/api/platform/assets?folderUrl=images&forceFileOverwrite=true`;

  @Input()
  imageUrl: string | null = null;

  @Output()
  imageUrlChange = new EventEmitter<string | null>();

  constructor(private readonly http: HttpClient) {
  }

  propagateChange = (_: string | null): void => {
    return;
  };

  writeValue(obj: string | null): void {
    if (obj !== undefined) {
      this.imageUrl = obj as string;
    }
  }

  registerOnChange(fn: fnType): void {
    this.propagateChange = fn;
  }

  registerOnTouched(_: fnType): void {
    return;
  }

  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!!files && files.length > 0) {
      const file:File = files[0];

      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        this.http.post<uploadResponse[]>(this.uploadUrl, formData).subscribe(items => {
          if (items.length > 0) {
            const url = items[0].url;
            this.imageUrl = url;
            this.propagateChange(this.imageUrl);
            this.imageUrlChange.emit(this.imageUrl);
          }
        });
      }
    }
  }

  removeAsset(): void {
    this.imageUrl = null;
    this.propagateChange(this.imageUrl);
    this.imageUrlChange.emit(this.imageUrl);
  }
}
