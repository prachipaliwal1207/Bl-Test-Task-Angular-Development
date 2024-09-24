import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  covid19(){
    return this.http.get("https://api.rootnet.in/covid19-in/stats/latest")
  }

  covid19_Stat_Testing(){
    return this.http.get("https://api.rootnet.in/covid19-in/stats/testing/history")
  }

}
