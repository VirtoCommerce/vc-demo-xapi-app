import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: [
    './image-uploader.component.scss',
  ],
})
export class ImageUploaderComponent implements OnInit {
  @Input()
  imagePath: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){

  }

  removeAsset(){

  }
}
