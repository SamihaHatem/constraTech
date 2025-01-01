import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  addSpeaker(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'speakers/newSpeaker/', reqBody)
  }
}