import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent implements OnInit {
  id: number;
  userDetails : UserDetails = new UserDetails();
  constructor(private userDetailsService : UserDetailsService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userDetailsService.getUserDetailsById(this.id).subscribe(data => {
      this.userDetails = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userDetailsService.updateUser(this.userDetails).subscribe( data =>{
      this.goToUserdetailsList();
    }
    , error => console.log(error));
  }

  goToUserdetailsList(){
    this.router.navigate(['/userDetails']);
  }

}
