import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry, map } from 'rxjs/operators';

import { DataProcessingService } from './data-processing.service';

// Unused imports
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private dataProcessing: DataProcessingService) { }

  getWeekDailyStepCount() {

    const credential: JSON = JSON.parse(localStorage.getItem('credential'));
    // console.log('credential: ' + JSON.stringify(credential));
    // console.log('token: ' + JSON.stringify(credential['oauthAccessToken']));

    if (credential != null) {
      const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';

      // Obtain last 7 days in miliseconds
      let todayDateMilis = Date.now();
      let firstWeekDayMilis = todayDateMilis - 604800000;


      // Body of the POST request
      const body: any = {
        "aggregateBy": [{
          "dataTypeName": "com.google.step_count.delta",
          "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        }],
        "bucketByTime": { "durationMillis": 86400000 },
        "startTimeMillis": firstWeekDayMilis,
        "endTimeMillis": todayDateMilis
      };

      // Headers for Authorization
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken']);
      
      // console.log('Authorization: ' + headers.get('Authorization'));

      // POST request with HttpClient Object
      return this.http.post<any>(url, body, { headers: headers }).pipe(map(response => response));

      /*this.http.post<any>(url, body, { headers: headers }).subscribe(
        (response) => {
          // console.log(response.bucket);
          localStorage.setItem('dailyStepCount' ,this.dataProcessing.processStepData(response.bucket));
        }
      );*/
    } else {
      console.log('La credencial es nula');
    }
  }
}
