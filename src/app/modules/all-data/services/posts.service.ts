import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../shared/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsDuringSession: Post[];

  constructor(private http: HttpClient) {}

  getAllPosts() {
    const url: string = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get(url);
  }

  storeToPostServise(posts: Post[]): void {
    this.postsDuringSession = posts;
  }

  activatePost(post: Post, activated: boolean): void {
    let indexOfSelectedPost = this.postsDuringSession.findIndex(
      (postDuringSession: Post) => postDuringSession.id == post.id
    );

    this.postsDuringSession[indexOfSelectedPost].activated = activated;
  }

  getPostsDuringSession(): Post[] {
    return this.postsDuringSession;
  }
}
