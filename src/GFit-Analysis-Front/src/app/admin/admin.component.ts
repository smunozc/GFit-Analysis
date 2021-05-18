import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Array<any>;
  userLoaded: boolean = false;
  hasBackend: boolean = false;

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('user') !== null){
      this.hasBackend = true;

      this.dataApi.getAllUsers().subscribe(users => {
        this.userList = users;
        this.userLoaded = true;
      });
    }
    
  }

  deleteUser(user:any){
    this.dataApi.deleteUser(user).subscribe(isDeleted =>{
      if(isDeleted){
        for (let i = 0; i < this.userList.length; i++){
          if(this.userList[i].email === user.email){
            this.userList.splice(i,1);
          }
        }
        alert("The user has been successfully deleted");
      } else {
        alert("Couldn't delete the user");
      }
    });
  }

}
