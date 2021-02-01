import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostService} from './services/post.service';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';


@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [PostService]
})
export class PostModule { }
