import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostService} from './services/post.service';
import {PostResolveService} from './services/resolve/post-resolve.service';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {ChosenPostComponent} from './components/chosen-post/chosen-post.component';


@NgModule({
  declarations: [PostComponent, PostsComponent, ChosenPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [PostService, PostResolveService]
})
export class PostModule { }
