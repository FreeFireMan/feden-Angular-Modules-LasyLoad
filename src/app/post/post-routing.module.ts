import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostResolveService} from './services/resolve/post-resolve.service';
import {ChosenPostComponent} from './components/chosen-post/chosen-post.component';

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {postData: PostResolveService}, children: [
      {path: ':id', component: ChosenPostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
