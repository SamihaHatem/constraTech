import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }

  // -------------------------------------------------------------------
  // ---------------------------- GALLLERY  ----------------------------
  // -------------------------------------------------------------------
  addNewPhoto(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'gallery/upload', reqBody)
  }

  getAllImages() {
    return this.http.get(baseUrl.apiUrl + 'gallery/allFiles')
  }

  updateImageStatus(reqBody: any) {
    return this.http.patch(`${baseUrl.apiUrl}gallery/update/${reqBody._id}`, reqBody)
  }

  getActiveImages() {
    return this.http.get(baseUrl.apiUrl + 'gallery/allActive')
  }


  // -------------------------------------------------------------------
  // --------------------------- Exhibitors  ---------------------------
  // -------------------------------------------------------------------
  getAllExhibitors() {
    return this.http.get(baseUrl.apiUrl + 'exhibitors/all')
  }

  getExhibitorStatus() {
    return ["Pending", "Confirmed", "Rejected"]
  }

  getExhibitorClassifications() {
    return ["Silver", "Gold", "Platinum"]
  }

  updateExhibitor(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'exhibitors/confirmExhibitor', reqBody)
  }

  getConfirmedExhibitors() {
    return this.http.get(baseUrl.apiUrl + 'exhibitors/Confirmed')
  }


  // -------------------------------------------------------------------
  // ---------------------------- Speakers  ----------------------------
  // -------------------------------------------------------------------
  getAllSpeakers() {
    return this.http.get(baseUrl.apiUrl + 'speakers/all')
  }

  getSpeakersStatus() {
    return ["Pending", "Confirmed", "Rejected"]
  }

  updateSpeaker(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'speakers/confirmSpeaker', reqBody)
  }

  getActiveSpeakers(){
    return this.http.get(baseUrl.apiUrl + 'speakers/Confirmed')
  }


  // -------------------------------------------------------------------
  // ---------------------------- Workshops  ---------------------------
  // -------------------------------------------------------------------
  getAllworkshops() {
    return this.http.get(baseUrl.apiUrl + 'workshops/allWorkshops')
  }

  getworkshopsStatus() {
    return ["Active", "Inactive"]
  }

  updateworkshop(reqBody: any) {
    return this.http.patch(baseUrl.apiUrl + 'workshops/update/' + reqBody._id, reqBody)
  }

  addNewWorkshop(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'workshops/addNew', reqBody)
  }

  getActiveWorkshops() {
    return this.http.get(baseUrl.apiUrl + 'workshops/allActive')
  }
}
