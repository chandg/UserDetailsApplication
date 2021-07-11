import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailslListComponent } from './user-detailsl-list/user-detailsl-list.component';
import { UserDetailsService } from './user-details.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserDetailsComponent } from './create-user-details/create-user-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailslListComponent,
    CreateUserDetailsComponent,
    UpdateUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
