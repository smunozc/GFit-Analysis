import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {

  constructor() { }

  processStepData(dataBucket: any): any{

    let processedData = {};
    let monday: Date = null;
    let totalStepsWeek: number = 0;

    for (let day of dataBucket){

      let date: Date = new Date();
      date.setTime(day.startTimeMillis);

      // console.log('Fecha completa: ' + date.toUTCString() + '\n' + 'Dia de la semana: ' + date.getDay());
      // console.log(day);

      if(date.getDay() === 1){

        monday = date;

        if(day.dataset[0].point.length > 0){
          processedData['monday'] = day.dataset[0].point[0].value[0].intVal;
          totalStepsWeek += day.dataset[0].point[0].value[0].intVal;

        } else {
          processedData['monday'] = 0;
        }

      } else if(monday !== null){

        if(date > monday){

          switch (date.getDay()){

            case 2: 

              if(day.dataset[0].point.length > 0){
                processedData['tuesday'] = day.dataset[0].point[0].value[0].intVal;
                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
              } else {
                processedData['tuesday'] = 0;
              }
              break;

            case 3:

              if(day.dataset[0].point.length > 0){
                processedData['wednesday'] = day.dataset[0].point[0].value[0].intVal;
                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
              } else {
                processedData['wednesday'] = 0;
              }
              break;

            case 4: 

              if(day.dataset[0].point.length > 0){
                processedData['thursday'] = day.dataset[0].point[0].value[0].intVal;
                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
              } else {
                processedData['thursday'] = 0;
              }
              break;

            case 5: 
              
              if(day.dataset[0].point.length > 0){
                processedData['friday'] = day.dataset[0].point[0].value[0].intVal;
                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
              } else {
                processedData['friday'] = 0;
              }
              break;

            case 6:

              if(day.dataset[0].point.length > 0){
                processedData['saturday'] = day.dataset[0].point[0].value[0].intVal;
                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
              } else {
                processedData['saturday'] = 0;
              }
              break;

            case 0:

              if(day.dataset[0].point.length > 0){
                processedData['sunday'] = day.dataset[0].point[0].value[0].intVal;
                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
              } else {
                processedData['sunday'] = 0;
              }
              break;

          }
        }
      }
    }
    localStorage.setItem('totalStepsWeek', totalStepsWeek.toString());
    return processedData;
  }
}
