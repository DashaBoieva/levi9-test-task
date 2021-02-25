import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../shared/models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  photosDuringSession: Photo[];

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    const url: string = 'https://jsonplaceholder.typicode.com/photos';

    return this.http.get(url);
  }

  storeToPhotoServise(photos: Photo[]) {
    this.photosDuringSession = photos;
  }

  activatePhoto(photo: Photo, activated: boolean) {
    let indexOfSelectedPhoto = this.photosDuringSession.findIndex(
      (photoDuringSession: Photo) => photoDuringSession.id == photo.id
    );

    this.photosDuringSession[indexOfSelectedPhoto].activated = activated;
  }

  getPhotosDuringSession(): Photo[] {
    return this.photosDuringSession;
  }
}
