import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostStore } from '../modules/posts/store/post.store.service';

@Component({
  selector: 'upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss']
})
export class UploadPostComponent implements OnInit {
  postData: FormGroup;
  // postData = new FormGroup({
  //   text: new FormControl()
  // });

  constructor(private postStore: PostStore) { }

  ngOnInit(): void {
    this.postData = new FormGroup({
      text: new FormControl(null, Validators.required)
    });
  }

  uploadPost() {
    console.log(this.postData);

    if (!this.postData.value.text || this.postData.value.text.trim() == '') return;
    
    this.postStore.uploadPost(this.postData.value.text, 'Hadar');

    //alert(`Post uploaded!! Content: ${this.postData.value.text}`);
  }
}
