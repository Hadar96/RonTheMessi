import { Component, OnInit } from '@angular/core';

export class Post {
  author: string;
  text: string;

  constructor(text, author = 'Anonymous') {
    this.author = author;
    this.text = text;
  }
}

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  postList: Post[] = [];

  constructor() {
    // this.postList.push(new Post("this is post No.1"));
    // this.postList.push(new Post("this is post No.2", 'hadar'));
  }

  ngOnInit(): void {
  }

}
