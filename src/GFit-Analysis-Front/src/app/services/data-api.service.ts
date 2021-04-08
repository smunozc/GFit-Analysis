import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getWeekDailyStepCount() {

    const credential: JSON = JSON.parse(localStorage.getItem('credential'));
    console.log('credential: ' + JSON.stringify(credential));
    console.log('token: ' + JSON.stringify(credential['oauthAccessToken']));

    if (credential != null) {
      const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';

      // Obtain last week in miliseconds
      let todayDateMilis = Date.now();
      let firstWeekDayMilis = todayDateMilis - 604800000;

      const body: any = {
        "aggregateBy": [{
          "dataTypeName": "com.google.step_count.delta",
          "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        }],
        "bucketByTime": { "durationMillis": 86400000 },
        "startTimeMillis": firstWeekDayMilis,
        "endTimeMillis": todayDateMilis
      };

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken']/*tokenLiteral*/);
      console.log('Authorization: ' + headers.get('Authorization'));

      this.http.post(url, body, { headers: headers }).subscribe(
        (response) => {
          console.log(response);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured: ' + err.error.message);
          } else {
            console.log('Server-side error occured: ' + err.error.message);
          }
        }
      );
    }
  }
}
