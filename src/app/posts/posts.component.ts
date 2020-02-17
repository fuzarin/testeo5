import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/Posts';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public postagens : Posts[];

  constructor(private service: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe((data: Posts[])=>{
      this.postagens = data;
    });
  }

  navigateToPost(id: number) {
    this.router.navigate([
      'posts/' + id
    ])
  }

}
