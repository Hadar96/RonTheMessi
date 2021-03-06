import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../modules/posts/models/post';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() posts: Post[];

  constructor() { }

  ngOnInit(): void {
    //lets merge PRs-NO
    //lets mergeeeeee--NOOOOOOOOO
    // new change in branch - SQUASHED
    // new change in branch - MERGED
    // new change in branch - REBASED
  }

}
