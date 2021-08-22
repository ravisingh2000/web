import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApperService } from '../service/apper.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLogged: boolean=false;
  

  constructor(private service: ApperService, private router: Router) { 
    this.service.userStatus.subscribe(
      (status:boolean)=>{
      // console.log("ddbbbbbbbbbbbbbbbddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk")
        this.userLogged=status;
      }
    )
    

  }

  ngOnInit(): void {
  this.userLogged=this.service.isLogged;
  //console.log("taste")
  }
  logoutUser(){
    this.service.logoutUserApi()
    .subscribe({
      next:data=>{
      //   console.log("ddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk")
      
      //  console.log("Logged out user")
      //   //console.log(data)
        this.userLogged=false;
        this.service.isLogged=false;
        this.service.userStatus.emit(false);
       // this.service.userStatus.emit(false);
       // this.dataService.userStatus.emit(false);
        this.router.navigate(['/home'])
      },
      error:err => {
        console.log(err)
      }
    })
  }
}
 