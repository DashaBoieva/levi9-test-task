import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PhotosService } from 'src/app/modules/all-data/services/photos.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent implements OnInit {
  @Input() photoData: Photo;

  activated: boolean | undefined;

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.activated = this.photoData.activated;
  }

  activate(photoData: Photo): void {
    this.activated = !this.activated;

    this.photosService.activatePhoto(photoData, this.activated);
  }
}
