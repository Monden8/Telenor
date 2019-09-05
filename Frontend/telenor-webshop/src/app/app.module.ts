import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./Components/homepage/homepage.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { RegisterComponent } from "./Components/register/register.component";
import { LoginComponent } from "./Components/login/login.component";
import { DialogComponent } from "./Components/dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
