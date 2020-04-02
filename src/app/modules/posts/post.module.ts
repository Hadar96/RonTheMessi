import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostStore } from './store/post.store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PostStore]
})
export class PostStoreModule { }
