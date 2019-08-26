import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {Category} from '../models/category';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CategoryService {
  url = {
    list: environment.apiUrl + 'blog/category/all',
    save: environment.apiUrl + 'blog/category/save',
    delete: environment.apiUrl + 'blog/category/delete',
    getId: environment.apiUrl + 'blog/category/getById',
    menu: environment.apiUrl + 'blog/menu/all',
    count: environment.apiUrl + 'blog/category/count'
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url.list);
  }



  save(data: Category): Observable<any> {
    return this.http.post(this.url.save, data, httpOptions);
  }

  delete(data: Category): Observable<any> {
    return this.http.post(this.url.delete, data, httpOptions);
  }

  getById(id: string): Observable<any> {
    return this.http.post(this.url.getId,{id: id}, httpOptions);
  }

  countCategory(): Observable<number> {
    return this.http.get<number>(this.url.count);
  }
}