import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { MealsComponent } from './meals-component/meals-component.component';
import { DrinksComponent } from './drinks-component/drinks-component.component';
import { DessertsComponent } from './desserts-component/desserts-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealsComponent,
    DrinksComponent,
    DessertsComponent,
    HeaderComponent,
    ItemComponent,
    ItemCartComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
