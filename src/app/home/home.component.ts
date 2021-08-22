
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Router } from "@angular/router";

import { ApperService } from '../service/apper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dats: any;
  ngOnInit(): void {
    this.getDataFromAPI()
    // console.log("ghghghghghhghhghh")
  }
  constructor(private service: ApperService, private router: Router) {

  }
  firstname: string = "";
  lastname: string = "";
  password: string = "";
  cnpassword: string = "";
  email: string = "";
  answer: string = "";
  txtEmpPhone = ""
  data: any;
  getDataFromAPI() {
    this.service.getTokenApi().subscribe((result: any) => {
      if (result.name == true) {
        this.service.reloadApii(result.data);
        this.router.navigate(['/sign'])
      }
    }, (error: any) => {
      console.log(error)
    })
  }
  getter(data: any) {
    console.log(data);
    this.service.registerApi({
      data: data.value
    }
    ).subscribe({
      next: data => {
        //  console.log("data recieved REGISTER")
        if (data.body.nmae == true) {
          this.router.navigate(['/home'])
        }
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
