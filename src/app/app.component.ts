import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppServiceService } from './app-service.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ApperService } from './service/apper.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  static card: any;
  carder: any;

  userLogged: boolean=false;
  youtube= this.mp()
  mp(){
    let data:any
    this.service.userStatusApi().subscribe(
      (status:any)=>{
      console.log("ddddddddddddddddddddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk",status.value)
     return data=status.value
      }
    )
    return !data;
  }
  ngOnInit(): void {
    console.log("helljjjjjjjjjjjjjjjjjjo")
    
  }
  ngOnChanges():void{
    // this.service.userStatusApi().subscribe(
    //   (status:any)=>{
    //      console.log("ddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk")
    //     this.userLogged=status.value;
    //   }
    // )
  }
  selectedTab:string='';
  onNavigate(feature:string){
    console.log(feature);
    this.selectedTab=feature;
  }

  logoutUser(){
    this.service.logoutUserApi()
    .subscribe({
      next:data=>{
      //  console.log("Logged out user")
        //console.log(data)
        this.service.userStatusApi().subscribe(
          (status:any)=>{
            // console.log("ddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk")
            this.userLogged=status.value;
          }
        )
        
        this.router.navigate(['/home'])
      },
      error:err => {
        console.log(err)
      }
    })}

  constructor(private service: ApperService, private router: Router) { 
    


    this.carder=AppComponent.card; 
    console.log("hello")
    // this.service.userStatus().subscribe(
    //   (status:any)=>{
    //     console.log("ddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk")
    //     if(status.name==true){
    //         this.sem.userLogged=true;
    
    //     }
    //     else{
    //           this.sem.u
    //     }
    //   }
    // )
  }
  title = 'meanstack';
  
  //  carder=AppComponent.card;
  mar(cardering: any){
    this.carder=cardering;
  }
  get(){
    console.log("hhhmmmmmmmmmmmmmmmmmmmmmmmmm")
  }

  
  
}

