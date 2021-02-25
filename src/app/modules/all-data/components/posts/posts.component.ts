import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/modules/shared/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;
  postsAreFromBackEnd: boolean;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    let posts: Post[] = this.postsService.getPostsDuringSession();
    posts ? this.getPostsFromSession() : this.getAllPosts();
  }

  getPostsFromSession(): void {
    this.posts = this.postsService.getPostsDuringSession();
  }

  getAllPosts(): void {
    this.postsSubscription = this.postsService.getAllPosts().subscribe(
      (receivedPosts) => {
        const allReceivedUsers = Object.values(receivedPosts);

        this.posts = allReceivedUsers.slice(0, 10);
        this.postsService.storeToPostServise(this.posts);

        this.postsAreFromBackEnd = true;
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    // Unsubscribe only from existing observable
    if (this.postsAreFromBackEnd) {
      this.postsSubscription.unsubscribe();
    }
  }
}
