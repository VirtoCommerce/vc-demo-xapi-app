import { HttpClient } from '@angular/common/http';
import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UploadResponse } from '../../models/upload-response';

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
  private readonly uploadUrl =
    `${environment.variables.platformUrl}/api/platform/assets?folderUrl=images&forceFileOverwrite=true`;

  private _value: string | null = null;

  get value(): string | null {
    return this._value;
  }

  set value(value: string | null) {
    if (value !== undefined && this._value !== value) {
      this._value = value;
      this.onChange(value);
      this.onTouched(value);
      this.changeDetectorRef.markForCheck();
    }
  }

  onChange = (_: string | null): void => {
    return;
  };

  onTouched = (_: string | null): void => {
    return;
  }

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly http: HttpClient
  ) {
  }

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: fnType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: fnType): void {
    this.onTouched = fn;
  }

  onUpload(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!!files && files.length > 0) {
      const file = files[0];

      const formData = new FormData();
      formData.append('file', file);

      this.http.post<UploadResponse[]>(this.uploadUrl, formData).subscribe(items => {
        if (items.length > 0) {
          const url = items[0].url;
          this.value = url;
        }
      });
    }
  }

  onDelete(): void {
    this.value = null;
  }
}
