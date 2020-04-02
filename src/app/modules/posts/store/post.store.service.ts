import { Post } from '../models/post';
import { Injectable } from '@angular/core';
import { Store } from '../../core/store/store';
import { UiStoreService } from '../../root-store/store/ui.store.service';
import { Observable } from 'rxjs';

export class PostsData {
  posts: Post[];
}

const INIT_POSTS_DATA: PostsData = {
  posts: new Array<Post>(
    // new Post('test - post 1', 'store')
  )
};

const STORE_NAME: string = "Post";

@Injectable()
export class PostStore extends Store<PostsData> {

  constructor(private u: UiStoreService) {
    super(STORE_NAME, INIT_POSTS_DATA);
  }

  uploadPost(text, author?) {
    let newPost: Post = new Post(text, author);

    this.setState(`[${STORE_NAME}] ADD`,
      s => ({
        ...s, posts: [...s.posts, newPost]
      }));
  }

  getPosts(): Observable<Array<Post>> {
    return this.select(state => state.posts);
  }

}