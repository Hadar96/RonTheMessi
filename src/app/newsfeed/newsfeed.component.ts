import { Component, OnInit } from '@angular/core';
import { Post } from '../modules/posts/models/post';
import { PostStore } from '../modules/posts/store/post.store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  posts$: Observable<Array<Post>>;
  postsCount: number = 0;

  constructor(private postStore: PostStore) {
    this.posts$ = this.postStore.getPosts();

    this.checkPostsAmount();
  }

  ngOnInit(): void { }

  checkPostsAmount() {
    this.posts$.subscribe(posts => {
      this.postsCount = posts.length;
    });
  }

}
