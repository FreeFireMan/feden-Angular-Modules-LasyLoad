import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private router: Router, activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe(() => {
      this.post = router.getCurrentNavigation().extras.state as Post;
    });
  }

  ngOnInit(): void { }

  closePost(): void {
    this.post = null;
  }
}
