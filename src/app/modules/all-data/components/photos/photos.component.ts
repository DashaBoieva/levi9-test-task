import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from 'src/app/modules/shared/models/photo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit, OnDestroy {
  photos: Photo[];
  photosSubscription: Subscription;
  photosAreFromBackEnd: boolean;

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    let photos = this.photosService.getPhotosDuringSession();
    photos ? this.getPhotosFromSession() : this.getAllPhotos();
  }

  getPhotosFromSession(): void {
    this.photos = this.photosService.getPhotosDuringSession();
  }

  getAllPhotos(): void {
    this.photosSubscription = this.photosService.getAllPhotos().subscribe(
      (receivedPhotos) => {
        const allReceivedPhotos = Object.values(receivedPhotos);

        this.photos = allReceivedPhotos.slice(0, 10);
        this.photosService.storeToPhotoServise(this.photos);

        this.photosAreFromBackEnd = true;
      },
      (error) => console.log(error)
    );
  }
  ngOnDestroy() {
    // Unsubscribe only from existing observable
    if (this.photosAreFromBackEnd) {
      this.photosSubscription.unsubscribe();
    }
  }
}
