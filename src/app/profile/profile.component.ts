import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { AppComponent } from '../app.component';
import { ApperService } from '../service/apper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstname = "";
  lastname = "";
  password = "";
  email = "";
  college = "";
  phone = "";
  password_confirmation: any;
  usa="fffff";
  constructor(private service: ApperService, private router: Router) {

  }

  ngOnInit(): void {
    this.reloadUser()
    console.log("ghghghghghhghhghh")
  }
  updateUser(data: any) {
    this.service.updateApi({
      data: data.value
    }).subscribe({
      next: data => {
        console.log("data recieved REGISTERing")
        this.firstname = data.body.data.FirstName;
        this.lastname = data.body.data.LastName;
        this.email = data.body.data.email;
        this.college = data.body.data.College;
      },
      error: err => {
        console.log('error occured in Regsitering User')
      }
    })
  }

  reloadUser() {
    const result = this.service.reloadApi();
    //console.log("resonse");
    if (result != undefined) {
      this.firstname = result.FirstName;
      this.lastname = result.LastName;
      this.email = result.email;
      this.college = result.body.College;
    }
    else {
      this.service.getTokenApi().subscribe((result: any) => {
        if (result.name == true) {
          this.service.userStatus.emit(true);
          // this.service.isLogged=true
          this.firstname = result.data.FirstName;
          this.lastname = result.data.LastName;
          this.email = result.data.email;
          this.college = result.data.College;

        }
        else {
          this.router.navigate(['/home'])
        }


      }, (error: any) => {
        //       console.log(error)
      })
    }




  }
}
