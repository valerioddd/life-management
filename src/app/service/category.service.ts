import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryResult } from '../model/category';

@Injectable({ providedIn: "root" })
export class CategoryService {
  
  MAIN_PATH = "/categories";
  GET_ALL = this.MAIN_PATH + "/rows";
  
  constructor(private httpClient: HttpClient) {}

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Cassandra-Token': environment.databaseTokenValue
    }), 
  };

  public getCategories(): Observable<CategoryResult> {
    return this.httpClient
      .get<CategoryResult>(
        environment.databaseServer + this.GET_ALL, this.requestOptions)
      .pipe(map((d) => d));
  }
}