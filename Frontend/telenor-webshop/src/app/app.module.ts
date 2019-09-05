import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
// import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "./Services/auth.service";
import { AuthenticationInterceptor } from "./Au.interceptor";
import { AuthGuard } from './Guards/auth.guard';
import { DialogComponent } from './Components/dialog/dialog.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule
} from "@angular/material";
import { LoginDialogComponent } from './Components/login-dialog/login-dialog.component';
import { CartDialogComponent } from './Components/cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    // SearchBarComponent,
    NavbarComponent,
    DialogComponent,
    LoginDialogComponent,
    CartDialogComponent,
  ],

  imports: [
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule
  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSelectModule,
    LoginDialogComponent,
    CartDialogComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,
    LoginDialogComponent,
    CartDialogComponent]
})
export class AppModule { }
