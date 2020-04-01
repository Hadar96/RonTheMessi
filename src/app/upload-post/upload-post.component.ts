import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss']
})
export class UploadPostComponent implements OnInit {
  // postData: FormGroup;
  postData = new FormGroup({
    text: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    // this.postData = new FormGroup({
    //   newPostText: new FormControl('sdsde')
    // });
  }

  uploadPost() {
    console.log(this.postData);

    if (!this.postData.value.text || this.postData.value.text.trim() == '') return;
    
    alert(`Post uploaded!! Content: ${this.postData.value.text}`);
  }
}
