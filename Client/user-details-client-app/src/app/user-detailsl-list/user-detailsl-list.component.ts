import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-detailsl-list',
  templateUrl: './user-detailsl-list.component.html',
  styleUrls: ['./user-detailsl-list.component.css']
})
export class UserDetailslListComponent implements OnInit {
  usersList: UserDetails[];
  countUserList :number;
  constructor(private userdetailService : UserDetailsService, private router :Router) { }

  ngOnInit(): void {
    this.getUsersDetails();
  }

  private getUsersDetails() {
    this.userdetailService.getUserDetailsList().subscribe(data => {
      this.usersList=data;
      this.countUserList = this.usersList.length;
    });
   }

   updateUser(id:number){
     this.router.navigate(['update-userDetails', id]);

   }
 
   deleteUser(id: number){
    this.userdetailService.deleteUserDetail(id).subscribe( data => {
      console.log(data);
      this.getUsersDetails();
    })
  }

  deleteUserAddress(id: number){
    this.userdetailService.deleteUserAddress(id).subscribe( data => {
      console.log(data);
      this.getUsersDetails();
    })
  }

}
