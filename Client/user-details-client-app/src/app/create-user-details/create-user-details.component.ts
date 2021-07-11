import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-create-user-details',
  templateUrl: './create-user-details.component.html',
  styleUrls: ['./create-user-details.component.css']
})
export class CreateUserDetailsComponent implements OnInit {
   userDetails : UserDetails = new UserDetails();
  constructor(private userDetailsService : UserDetailsService,private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.userDetailsService.createUserDetails(this.userDetails).subscribe( data =>{
      console.log(data);
      this.goToUserdetailsList();
    },
    error => console.log(error));
  }
  goToUserdetailsList(){
    this.router.navigate(['/userDetails']);
  }
  onSubmit(){
    console.log(this.userDetails);
    this.saveEmployee();
  }

}
