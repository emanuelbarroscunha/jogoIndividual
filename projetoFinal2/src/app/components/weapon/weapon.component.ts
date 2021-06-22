import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  constructor( private gService: GeneralService,
    private pService: PlayerService, router: Router) { this.router = router;}
  router: Router;


  ngOnInit(): void {


    if(this.pService.playerID <= 0){
      this.router.navigate(['/login']);
      window.alert('Please Login First');
    }
    this.getChar();

  }

  getChar()
  {
    this.gService.getWeapon(this.pService.playerID).subscribe((x:any) => {

        console.log(x);
        this.pService.weapon.nome = x['data'].nome;
        this.pService.weapon.atk = x['data'].Atk;
        this.pService.weapon.vida = x['data'].Durabilidade;
        this.changetext();
    });
  }

  changetext()
  {

    let name2:any = document.getElementById('name');
    name2.innerText = this.pService.weapon.nome;

    let name3:any = document.getElementById('life');
    name3.innerText = this.pService.weapon.vida;

    let name4:any = document.getElementById('atk');
    name4.innerText = this.pService.weapon.atk;

  }



}
