import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

// Unused imports
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getWeekDailyStepCount() {

    const credential: JSON = JSON.parse(localStorage.getItem('credential'));

    if (credential != null) {
      const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';

      // Obtain monday of this week at 00:00 of my timezone
      let monday = this.getMonday(new Date());
      monday.setHours(0, 0, 0, 0);

      // Obtain sunday of this week at 23:59 of my timezone
      let sunday = new Date(monday);
      sunday.setDate(sunday.getDate() + 6);
      sunday.setHours(23,59,59,999);
      
      // This variables obtain the last 7 days
      // let todayDateMilis = Date.now(); //TODO wrong, have to obtain the monday and sunday of current week
      // let firstWeekDayMilis = todayDateMilis - 604800000;

      // Body of the POST request
      const body: any = {
        "aggregateBy": [{
          "dataTypeName": "com.google.step_count.delta",
          "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        }],
        "bucketByTime": { "durationMillis": 86400000 },
        "startTimeMillis": monday.getTime(),
        "endTimeMillis": sunday.getTime()
      };

      // Headers for Authorization
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken']);

      // POST request with HttpClient Object
      return this.http.post<any>(url, body, { headers: headers }).pipe(map(response => response));

      /*this.http.post<any>(url, body, { headers: headers }).subscribe(
        (response) => {
          // console.log(response.bucket);
          localStorage.setItem('dailyStepCount' ,this.dataProcessing.processStepData(response.bucket));
        }
      );*/
    } else {
      console.log('data-api.service | Credential is null');
    }
  }

  getWeekDailyCaloriesCount() {

    const credential: JSON = JSON.parse(localStorage.getItem('credential'));

    if (credential != null) {
      const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';

      // Obtain monday of this week at 00:00 of my timezone
      let monday = this.getMonday(new Date());
      monday.setHours(0, 0, 0, 0);

      // Obtain sunday of this week at 23:59 of my timezone
      let sunday = new Date(monday);
      sunday.setDate(sunday.getDate() + 6);
      sunday.setHours(23,59,59,999);

      // Body of the POST request
      const body: any = {
        "aggregateBy": [{
          "dataTypeName": "com.google.calories.expended",
          "dataSourceId": "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
        }],
        "bucketByTime": { "durationMillis": 86400000 },
        "startTimeMillis": monday.getTime(),
        "endTimeMillis": sunday.getTime()
      };

      // Headers for Authorization
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken']);

      // POST request with HttpClient Object
      return this.http.post<any>(url, body, { headers: headers }).pipe(map(response => response));

    } else {
      console.log('data-api.service | Credential is null');
    }
  }

  getMonday(d: Date): Date {
    d = new Date(d);
    let day = d.getDay();

    let diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

}
