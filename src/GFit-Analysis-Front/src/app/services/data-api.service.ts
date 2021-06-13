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
      sunday.setHours(23, 59, 59, 999);

      // Print for testing purposes
      // console.log("Lunes: " + monday.getTime());
      // console.log("Domingo: " + sunday.getTime());

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
      // console.log(credential);
      const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';

      // Obtain monday of this week at 00:00 of my timezone
      let monday = this.getMonday(new Date());
      monday.setHours(0, 0, 0, 0);

      // Obtain sunday of this week at 23:59 of my timezone
      let sunday = new Date(monday);
      sunday.setDate(sunday.getDate() + 6);
      sunday.setHours(23, 59, 59, 999);

      // Get Scoreboard and save it in localStorage
      let mondayString = monday.getFullYear() + "/" + ("0" + (monday.getMonth() + 1)).slice(-2) + "/" + ("0" + (monday.getDate())).slice(-2);
      let sundayString = sunday.getFullYear() + "/" + ("0" + (sunday.getMonth() + 1)).slice(-2) + "/" + ("0" + (sunday.getDate())).slice(-2);

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

    let diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  postUserData(exercise: Array<any>, user: any): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/user/save';

    // Request body

    let body: any = {
      "email": user.email,
      "displayName": user.displayName,
      "photoURL": user.photoURL,
      "role": user.role,
      "exercise": exercise,
      "userRewards": null
    }

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.post<any>(url, JSON.stringify(body), { headers: headers }).pipe(map(response => response));
  }

  deleteUser(user: any): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/user/delete';

    // Request body

    let body: any = {
      "email": user.email,
      "displayName": user.displayName,
      "photoURL": user.photoURL,
      "role": user.role
    }

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.post<any>(url, JSON.stringify(body), { headers: headers }).pipe(map(response => response));
  }

  getAllUsers(): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/user/getAllUsers';

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.get<any>(url, { headers: headers }).pipe(map(response => response));
  }

  getAllRewards(): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/reward/getAllRewards';

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.get<any>(url, { headers: headers }).pipe(map(response => response));
  }

  saveReward(reward: any): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/reward/save';

    // Request body

    let body: any = {
      "name": reward.name,
      "description": reward.description,
      "badgeType": reward.badgeType,
      "dataType": reward.dataType,
      "conditionNum": reward.conditionNum,
      "badgeImg": reward.badgeImg
    }

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.post<any>(url, JSON.stringify(body), { headers: headers }).pipe(map(response => response));
  }

  deleteReward(reward: any): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/reward/delete';

    // Request body

    let body: any = {
      "name": reward.name,
      "description": reward.description,
      "badgeType": reward.badgeType,
      "dataType": reward.dataType,
      "conditionNum": reward.conditionNum,
      "badgeImg": reward.badgeImg
    }

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.post<any>(url, JSON.stringify(body), { headers: headers }).pipe(map(response => response));
  }

  getScoreboard(dateStart: string, dateEnd: string): any {
    const url = 'https://gfitanalysis-back.herokuapp.com/scoreboard/getStepsScoreboard?dateStart=' + dateStart + '&dateEnd=' + dateEnd;

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.get<any>(url, { headers: headers }).pipe(map(response => response));
  }

  getUnachievedBadges(user: any) {
    const url = 'https://gfitanalysis-back.herokuapp.com/reward/getUnachieved';

    // Request body

    let body: any = {
      "email": user.email,
      "displayName": user.displayName,
      "photoURL": user.photoURL,
      "role": user.role
    }

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.post<any>(url, JSON.stringify(body), { headers: headers }).pipe(map(response => response));
  }

  getProgress(user: any) {
    const url = 'https://gfitanalysis-back.herokuapp.com/user/getProgress';

    // Request body

    let body: any = {
      "email": user.email,
      "displayName": user.displayName,
      "photoURL": user.photoURL,
      "role": user.role
    }

    // Headers
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    // POST request with HttpClient Object
    return this.http.post<any>(url, JSON.stringify(body), { headers: headers }).pipe(map(response => response));
  }

}
