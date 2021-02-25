import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/all-data/services/users.service';
import { PostsService } from 'src/app/modules/all-data/services/posts.service';
import { PhotosService } from 'src/app/modules/all-data/services/photos.service';
import { Photo } from 'src/app/modules/shared/models/photo';
import { Post } from 'src/app/modules/shared/models/post';
import { User } from 'src/app/modules/shared/models/user';

@Component({
  selector: 'app-all-activated',
  templateUrl: './all-activated.component.html',
  styleUrls: ['./all-activated.component.scss'],
})
export class AllActivatedComponent implements OnInit {
  activatedPhotos: Photo[];
  activatedPosts: Post[];
  activatedUsers: User[];

  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
    private photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.getAcivatedUsers();
    this.getAcivatedPosts();
    this.getAcivatedPhotos();
  }

  getAcivatedUsers(): void {
    let allUsers = this.usersService.getUsersDuringSession() || [];
    this.activatedUsers = allUsers.filter(
      (user: User) => user.activated === true
    );
  }

  getAcivatedPosts(): void {
    let allPosts = this.postsService.getPostsDuringSession() || [];
    this.activatedPosts = allPosts.filter(
      (post: Post) => post.activated === true
    );
  }

  getAcivatedPhotos(): void {
    let allPhotos = this.photosService.getPhotosDuringSession() || [];
    this.activatedPhotos = allPhotos.filter(
      (photo: Photo) => photo.activated === true
    );
  }
}
