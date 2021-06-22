import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { CreateWeaponComponent } from './components/create-weapon/create-weapon.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PvpComponent } from './components/pvp/pvp.component';
import { RegisterComponent } from './components/register/register.component';
import { WeaponComponent } from './components/weapon/weapon.component';

const routes: Routes = [
  {path:"character",component:CharacterComponent},
  {path:"createCharacter",component:CreateCharacterComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"weapon",component:WeaponComponent},
  {path:"createWeapon",component:CreateWeaponComponent},
  {path:"navBar",component:NavBarComponent},
  {path:"playervp",component:PvpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
