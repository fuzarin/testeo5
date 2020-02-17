import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/Posts';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private urlBase = 'http://jsonplaceholder.typicode.com/';

    constructor (private http: HttpClient) {}

    getPosts() {
        return this.http.get<Posts[]>(this.urlBase + 'posts');
    };

    getPostById(id: number) {
        return this.http.get(this.urlBase + 'posts/' + id);
    }

    getPostByComment(id: number) {
        return this.http.get(this.urlBase + `posts/${id}/comments`);
    }

}