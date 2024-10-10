import { Component } from '@angular/core';
import { Post } from '../../interface/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  constructor(private route: ActivatedRoute) {}
  postdel!: Post;
  postdeath: Post[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((dati) => {
        this.postdeath = dati.posts;
        console.log(this.postdeath);

        this.route.params.subscribe((params: any) => {
          const postcard = this.postdeath.find(
            (single) => single.id == params.id
          );
          if (postcard) {
            this.postdel = postcard;
            console.log(this.postdel);
          }
        });
      });
  }
}
