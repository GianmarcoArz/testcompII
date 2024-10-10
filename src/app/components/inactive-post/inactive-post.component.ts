import { Component } from '@angular/core';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  posts: Post[] = [];
  postInac: Post[] = [];
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
        for (let i = 4; i < this.posts.length; i++) {
          this.postInac.push(this.posts[i]);
        }
      })
      .catch((err) => console.log(err));
  }
}
