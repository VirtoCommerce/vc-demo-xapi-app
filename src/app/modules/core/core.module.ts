import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImageUploaderComponent,
  ],
  exports: [
    ImageUploaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class CoreModule { }
