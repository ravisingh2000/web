import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApperService } from '../service/apper.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  email = "";
  password = "";

  constructor(private service: ApperService, private router: Router) { }

  ngOnInit(): void {
    // console.log("ghghghghghhghhghh")
  }
  loginUser(da: any) {
    // console.log("hello")
    this.service.loginApi({
      data: da.value
    }).subscribe({
      next: result => {
        //console.log("data recieved REGISTER")
        if (result.body.bcrypt == true) {
          this.service.reloadApii(result.body.data);
          this.service.userStatus.emit(true);
          this.router.navigate(['/sign'])

        }

      },
      error: err => {
        console.log(err)

      }
    })


  }

}
