import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [];
const  routes:Routes=[
  {  path:'',component:HomeComponent
}
,{
  path:'home',component:HomeworkComponent
},
{
  path:'sign',component:ProfileComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
