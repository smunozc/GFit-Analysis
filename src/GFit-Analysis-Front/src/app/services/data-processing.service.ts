import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {

  constructor() { }

  processData(dataBucket: any, dataType: string): any{

    let processedData = {};
    let monday: Date = null;
    let totalStepsWeek: number = 0;
    let totalCaloriesWeek: number = 0;

    for (let day of dataBucket){

      let date: Date = new Date();
      date.setTime(day.startTimeMillis);

      // console.log('Fecha completa: ' + date.toUTCString() + '\n' + 'Dia de la semana: ' + date.getDay());
      // console.log(day);

      if(date.getDay() === 1){

        monday = date;

        if(day.dataset[0].point.length > 0){
          
          if(dataType === 'steps'){
            processedData['monday'] = day.dataset[0].point[0].value[0].intVal;
            totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
          } else if(dataType === 'calories') {
            processedData['monday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
            totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
          }

        } else {
          processedData['monday'] = 0;
        }

      } else if(monday !== null){

        if(date > monday){

          switch (date.getDay()){

            case 2: 

              if(day.dataset[0].point.length > 0){
                
                if(dataType === 'steps'){
                  processedData['tuesday'] = day.dataset[0].point[0].value[0].intVal;
                  totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                } else if(dataType === 'calories') {
                  processedData['tuesday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                  totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                }

              } else {
                processedData['tuesday'] = 0;
              }
              break;

            case 3:

              if(day.dataset[0].point.length > 0){
                
                if(dataType === 'steps'){
                  processedData['wednesday'] = day.dataset[0].point[0].value[0].intVal;
                  totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                } else if(dataType === 'calories') {
                  processedData['wednesday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                  totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                }
                
              } else {
                processedData['wednesday'] = 0;
              }
              break;

            case 4: 

              if(day.dataset[0].point.length > 0){
                
                if(dataType === 'steps'){
                  processedData['thursday'] = day.dataset[0].point[0].value[0].intVal;
                  totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                } else if(dataType === 'calories') {
                  processedData['thursday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                  totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                }

              } else {
                processedData['thursday'] = 0;
              }
              break;

            case 5: 
              
              if(day.dataset[0].point.length > 0){
                
                if(dataType === 'steps'){
                  processedData['friday'] = day.dataset[0].point[0].value[0].intVal;
                  totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                } else if(dataType === 'calories') {
                  processedData['friday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                  totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                }

              } else {
                processedData['friday'] = 0;
              }
              break;

            case 6:

              if(day.dataset[0].point.length > 0){
                
                if(dataType === 'steps'){
                  processedData['saturday'] = day.dataset[0].point[0].value[0].intVal;
                  totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                } else if(dataType === 'calories') {
                  processedData['saturday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                  totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                }

              } else {
                processedData['saturday'] = 0;
              }
              break;

            case 0:

              if(day.dataset[0].point.length > 0){
                
                if(dataType === 'steps'){
                  processedData['sunday'] = day.dataset[0].point[0].value[0].intVal;
                  totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                } else if(dataType === 'calories') {
                  processedData['sunday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                  totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                }

              } else {
                processedData['sunday'] = 0;
              }
              break;

          }
        }
      }
    }

    console.log("total, calories|steps: "  + totalCaloriesWeek + " | " + totalStepsWeek + '\n' +
                "arrayData: " + processedData);

    localStorage.setItem('totalStepsWeek', totalStepsWeek.toString());
    localStorage.setItem('totalCaloriesWeek', totalCaloriesWeek.toString());
    
    return processedData;
  }
}
