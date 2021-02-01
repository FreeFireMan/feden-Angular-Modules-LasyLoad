import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post;

  chosenPost: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

  getBodyFromChosenPost(post): void {
    this.router.navigate([post.id], {relativeTo: this.activatedRoute, state: post});
  }

  closePost(): void {
    this.chosenPost = null;
  }
}
