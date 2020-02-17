import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/Posts';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public singlePost: Posts;

  public comentarios: Posts;

  postId;

  constructor(private service: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');


    this.service.getPostById(+this.postId).subscribe((data: Posts)=> {
      this.singlePost = data;
    });

    
  }

  // navigateToComment(id: number) {
  //   this.router.navigate([
  //     `posts/${id}/comments`
  //   ])
  // }

  mostrarComentarios() {
    this.service.getPostById(+this.postId).subscribe((data: Posts)=> {
      this.comentarios = data;
    });
  }

  navigateToHome() {
    this.router.navigate([
      '../'
    ]);
  }



}
