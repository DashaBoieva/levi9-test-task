import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PostsService } from 'src/app/modules/all-data/services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent implements OnInit {
  @Input() postData: Post;

  activated: boolean | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.activated = this.postData.activated;
  }

  activate(postData: Post): void {
    this.activated = !this.activated;

    this.postsService.activatePost(postData, this.activated);
  }
}
