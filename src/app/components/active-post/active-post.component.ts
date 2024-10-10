import { Component } from '@angular/core';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  posts: Post[] = [];
  postAct: Post[] = [];
  numeroArticolo: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        this.posts = result.posts;
        console.log(this.posts);
        this.numeroArticolo = Math.floor(Math.random() * 30);
        for (let i = 0; i < 4; i++) {
          this.postAct.push(this.posts[i]);
        }
      })
      .catch((err) => console.log(err));
  }
}
