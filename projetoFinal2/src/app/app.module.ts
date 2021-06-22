import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CharacterComponent } from './components/character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { CreateWeaponComponent } from './components/create-weapon/create-weapon.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PvpComponent } from './components/pvp/pvp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    CharacterComponent,
    CreateCharacterComponent,
    WeaponComponent,
    CreateWeaponComponent,
    PvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
