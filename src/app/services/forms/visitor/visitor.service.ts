import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/baseUrl';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  addVisitor(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'visitors/newVisitor', reqBody)
  }

  linkedinAuth() {
    return this.http.get(baseUrl.apiUrl + 'visitors/linkedin/auth')
  }

  shareToLinkedIn(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'visitors/linkedin/share', reqBody)
  }

  facebookInit() {
    FB.init({
      appId: '1291942738744571',
      cookie: true,
      xfbml: true,
      version: 'v14.0'
    });
  }

  paymentUrl() {
    return this.http.get(baseUrl.apiUrl + 'payment-webhook/payment_link')
  }

  shareTextAndPhoto(message: string, photoUrl: string): void {
    FB.ui({
      method: 'share',
      // hashtag: '#constratech25',
      // href: 'https://new.constratech.org/',
      // quote: message,
      // picture: "https://new.constratech.org/assets/images/Linkedin%20post.jpg"

      link: 'https://constratech.org/',
      picture: "https://constratech.org/assets/images/Linkedin_post.jpg",
      name: 'ConstraTech 2025',  // Title of the post
      caption: 'Join me at ConstraTech 2025!',  // This is the caption text below the image
      description: message,  // This is the message text you want to share
      hashtag: '#constratech25',  // Your hashtag

    }, function (response: any) {
      console.log(response)
      if (response && !response.error_message) {
        console.log('Post shared successfully');
      } else {
        console.log('Error sharing the post');
      }
    });
  }
}
