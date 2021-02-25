import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [PhotoCardComponent, UserCardComponent, PostCardComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [
    PhotoCardComponent,
    UserCardComponent,
    PostCardComponent,
    MatButtonModule,
    MatIconModule
  ],
})
export class SharedModule {}
