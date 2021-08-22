import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavComponent } from '../nav/nav.component';

@Injectable({
  providedIn: 'root'
})
export class ApperService {
   isLogged:boolean=false;
  userStatus=new EventEmitter<boolean>();
  data: any;
  constructor(private http: HttpClient) {
    // this.userStatusApi().subscribe(
    //   (status:any)=>{
    //     // console.log("ddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvmjkkfkkkkkkkkkk")
    //     this.isLogged=status.value;
    //   }
    // )
    this.userStatusApi().subscribe((result: any) => {
          this.isLogged=result.value;  
          console.log(result.value)
          console.log("Ppppppppppppppppppppp")
    })
    this.userStatus.subscribe(
      (status:boolean)=>{
        this.isLogged=true;
      }
    )
   }

  getTokenApi(): Observable<any> {
    return this.http.get("/api/getdata");
  }
  registerApi(body: object): Observable<any> {
    return this.http.post('/api/register', body, { observe: 'response', withCredentials: true })
  }

  loginApi(body: object): Observable<any> {
    console.log(body)
    return this.http.post('/api/home', body, { observe: 'response', withCredentials: true })
  }

  updateApi(body: object): Observable<any> {
    return this.http.post('/api/update', body, { observe: 'response', withCredentials: true })
  }

  reloadApi() {
    
    return this.data;
  }

  logoutUserApi(): Observable<any> {
    return this.http.get('/api/signout')
  }

  userStatusApi() {
    return this.http.get('/api/valid')
  }

  reloadApii(data: any) {
    this.data = data;
  }

}
