import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
//   data= {FirstName:"",
//             LastName:"",
//   Password:"",
// cnpassword:"",
//   email:"",
//   answer:"",
//   college:"",
// txtEmpPhone:""
//     };
isLogged:boolean=false;
  userStatus=new EventEmitter<boolean>();
constructor(){
       
}

// data:any;
//   constructor(private http :HttpClient) { }
//   getData():Observable<any>{
//      return this.http.get("/api/getdata");
//      // return this.http.get("http://localhost:3000/getdata")
//   }
//  getthem(){
   
//    return this.data;
//  }
//  logoutUser():Observable<any>{

//   return this.http.get('/api/signout')
// }
//   userStatus(){
//        return this.http.get('/api/valid')
//   }
//   get(data:any){
//     console.log("hhhhgfygugiuhij")
    
//       this.data=data;
//     // return this.http.get("http://localhost:3000/getdata")
//  }
//   gettest(body:object):Observable<any>{
//        console.log(body)
//     return this.http.post('/api/register',body,{observe:'response',withCredentials: true})
//   }
//   gettest1(body:object):Observable<any>{
//     console.log(body)
//     return this.http.post('/api/home',body,{observe:'response',withCredentials: true})
// }

  
}
