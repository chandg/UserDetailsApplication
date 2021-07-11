import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserDetailsComponent } from './create-user-details/create-user-details.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UserDetailslListComponent } from './user-detailsl-list/user-detailsl-list.component';

const routes: Routes = [
  {path:'userDetails', component : UserDetailslListComponent },
  {path:'creat-userDetails', component: CreateUserDetailsComponent},
  {path: '', redirectTo:'userDetails', pathMatch:'full' },
  {path: 'update-userDetails/:id', component: UpdateUserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
