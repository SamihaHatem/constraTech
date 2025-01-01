import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ExhibitorService {

  constructor(private http: HttpClient) { }

  addExhibitor(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + '', reqBody)
  }
}
