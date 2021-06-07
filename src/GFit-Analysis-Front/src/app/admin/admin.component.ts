import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Array<any>;
  rewardList: Array<any>;
  userLoaded: boolean = false;
  hasBackend: boolean = false;
  isUserManager: boolean = true;

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {

    if (localStorage.getItem('user') !== null) {
      this.hasBackend = true;

      this.dataApi.getAllUsers().subscribe(users => {
        this.userList = users;
        this.userLoaded = true;
      });

      this.dataApi.getAllRewards().subscribe(rewards => {
        this.rewardList = rewards;
      });
    }

  }

  delete(object: any) {


    // Toast for object successfully deleted
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    if (this.isUserManager) {

      Swal.fire({

        title: 'Do you want to delete:',
        icon: 'info',
        html: '<b>' + object.email + '</b>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Yes',
        confirmButtonAriaLabel: 'Yes',
        cancelButtonText: 'No',
        cancelButtonAriaLabel: 'No'

      }).then((result) => {

        if (result.isConfirmed) {

          this.dataApi.deleteUser(object).subscribe(isDeleted => {

            if (isDeleted) {
              for (let i = 0; i < this.userList.length; i++) {
                if (this.userList[i].email === object.email) {
                  this.userList.splice(i, 1);
                }
              }

              Toast.fire({
                icon: 'success',
                title: 'The user has been successfully deleted'
              });

            } else {

              Toast.fire({
                icon: 'error',
                title: 'The user could not be deleted'
              });

            }

          });

        }

      });

    } else {

      Swal.fire({

        title: 'Do you want to delete:',
        icon: 'info',
        html: '<b>' + object.name + '</b>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Yes',
        confirmButtonAriaLabel: 'Yes',
        cancelButtonText: 'No',
        cancelButtonAriaLabel: 'No'

      }).then((result) => {

        if (result.isConfirmed) {

          this.dataApi.deleteReward(object).subscribe(isDeleted => {

            if (isDeleted) {
              for (let i = 0; i < this.rewardList.length; i++) {
                if (this.rewardList[i].name === object.name) {
                  this.rewardList.splice(i, 1);
                }
              }

              Toast.fire({
                icon: 'success',
                title: 'The reward has been successfully deleted'
              });

            } else {

              Toast.fire({
                icon: 'error',
                title: 'The reward could not be deleted'
              });

            }

          });

        }

      });

    }

  }

  async addReward() {

    let conditionNum: number;
    let errors: string = "Errors: \n";

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    const { value: formValues } = await Swal.fire({
      title: 'Create reward',
      html:
        '<input id="name" class="swal2-input" placeholder="Name (unique)">' +

        '<input id="description" class="swal2-input" placeholder="Description">' +

        '<br><br>' +

        '<select class="form-select" id="badgeType">' +
        '<option default value="default">Badge Type</option>' +
        '<option value="GOLD">GOLD</option>' +
        '<option value="SILVER">SILVER</option>' +
        '<option value="BRONZE">BRONZE</option>' +
        '</select>' +

        '<br>' +

        '<select class="form-select" id="dataType">' +
        '<option default value="default">Data Type</option>' +
        '<option value="CALORIES">CALORIES</option>' +
        '<option value="STEPS">STEPS</option>' +
        '</select>' +

        '<input type="number" id="conditionNum" class="swal2-input" placeholder="Goal" min="1" max="10000000">',
      focusConfirm: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Create',
      confirmButtonAriaLabel: 'Create',
      cancelButtonText: 'Cancel',
      cancelButtonAriaLabel: 'Cancel',
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('name')).value,
          (<HTMLInputElement>document.getElementById('description')).value,
          (<HTMLInputElement>document.getElementById('badgeType')).value,
          (<HTMLInputElement>document.getElementById('dataType')).value,
          (<HTMLInputElement>document.getElementById('conditionNum')).value,
        ]
      }
    });

    if (formValues) {

      let nameOK: boolean = false;
      let descriptionOK: boolean = false;
      let badgeTypeOK: boolean = false;
      let dataTypeOK: boolean = false;
      let conditionNumOK: boolean = false;

      if (formValues[0] != "") {
        nameOK = true;
      } else {
        errors += " - Name is empty.\n";
      }

      if (formValues[1] != "") {
        descriptionOK = true;
      } else {
        errors += " - Description is empty.\n";
      }

      if (formValues[2] != "" && formValues[2] != "default") {
        badgeTypeOK = true;
      } else {
        errors += " - Select a badge type.\n";
      }

      if (formValues[3] != "" && formValues[3] != "default") {
        dataTypeOK = true;
      } else {
        errors += " - Select a data type.\n";
      }

      if (formValues[4] != "") {

        let goal: number = parseInt(formValues[4]);

        if (goal > 0 && goal < 10000000) {
          conditionNumOK = true;
          conditionNum = goal;
        } else {
          errors += " - Goal must be between 1 and 10000000.\n";
        }

      } else {
        errors += " - Goal is empty.\n";
      }

      if (nameOK && descriptionOK && badgeTypeOK && dataTypeOK && conditionNumOK) {

        let badgeImg: string;

        switch (formValues[2]) {
          case "GOLD":
            badgeImg = "https://drive.google.com/uc?id=1wcP9F3CFin2j2vJVGhGiGGYo1Ad-LznY";
            break;
        
          case "SILVER":
            badgeImg = "https://drive.google.com/uc?id=13JnIy2Hx5woceGRyC0bSpgSv6gV71wGR";
            break;
          
          case "BRONZE":
            badgeImg = "https://drive.google.com/uc?id=1-8KiZsf_0lCJG4AIQShgksyCESUZss0s";

          default:
            break;
        }

        let reward: any = {
          "name": formValues[0],
          "description": formValues[1],
          "badgeType": formValues[2],
          "dataType": formValues[3],
          "conditionNum": conditionNum,
          "badgeImg": badgeImg
        };

        this.dataApi.saveReward(reward).subscribe((savedReward) => {
          if (savedReward != null) {

            this.rewardList.push(savedReward);

            Toast.fire({
              icon: 'success',
              title: 'The reward has been successfully saved'
            });
          }
        });

      } else {
        Toast.fire({
          icon: 'error',
          title: errors
        });
      }

    }
  }

  changeManagementScreen(e) {

    if (e.target.value === 'userManage') {
      this.isUserManager = true;
    } else if (e.target.value === 'rewardManage') {
      this.isUserManager = false;
    }

  }

}
