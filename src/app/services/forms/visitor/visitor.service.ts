import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  addVisitor(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'visitors/newVisitor', reqBody)
  }
}
