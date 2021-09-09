import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImageUploaderComponent } from './image-uploader.component';
import { environment } from 'src/environments/environment';
import { EnvironmentVariables } from 'src/environments/environment.variables';

describe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async () => {
    environment.variables = new EnvironmentVariables('');
    await TestBed.configureTestingModule({
      declarations: [
        ImageUploaderComponent,
      ],
      imports: [
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
