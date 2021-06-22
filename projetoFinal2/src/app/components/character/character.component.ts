import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private pService:PlayerService,

  private gService: GeneralService ,
  router: Router) { this.router = router;}


  router: Router;
  ngOnInit(): void {


    if(this.pService.playerID <= 0){
      this.router.navigate(['/login']);
      window.alert('Please Login First');
    }
    else{
      this.getChar();

      this.changeTxt2();
    }



  }

  points :any;

  getChar()
  {
    this.gService.getcharacter(this.pService.playerID).subscribe((x:any) => {

        console.log(x);
        this.pService.player.name = x['data'].Personagens[0].Nome;
        this.pService.player.id = x['data'].Personagens[0].ID;
        this.pService.player.atk = x['data'].Personagens[0].Atk;
        this.pService.player.isMonset = x['data'].Personagens[0].IsMonset;
        this.pService.player.int = x['data'].Personagens[0].Int;
        this.pService.player.life = x['data'].Personagens[0].Vida;
        this.pService.player.idPlayer = x['data'].Personagens[0].ID_Player;
        this.changeTxt();
    });
  }

  changeTxt()
  {
    let name2:any = document.getElementById('name');
    name2.innerText = this.pService.player.name;

    let name3:any = document.getElementById('life');
    name3.innerText = this.pService.player.life;

    let name4:any = document.getElementById('atk');
    name4.innerText = this.pService.player.atk;

    let name5:any = document.getElementById('int');
    name5.innerText = this.pService.player.int;
  }

  changeTxt2()
  {
    let name6:any = document.getElementById('points');
    name6.innerText = this.pService.pointsEvolve;

  }
  moreStatsAtk()
  {
    if(this.pService.pointsEvolve > 0){


  this.pService.pointsEvolve=Number(this.pService.pointsEvolve)-1;
  this.newATK=Number(this.pService.player.atk)+1;
  this. name  = this.pService.player.name;
  this.isMonster  =this.pService.player.isMonset;
  this.int  = this.pService.player.int;
  this.life  =  this.pService.player.life;
  this.attack  =  this.newATK;
  this.user =this.pService.username;
  this.pass =this.pService.password;
  this.gService.CriarPersonagem2(this.user,this.name,this.pass,this.isMonster,this.int,this.life,this.attack).subscribe(data => {
    console.log
    (data);
    this.changeTxt2();
    this.getChar();
  });



}else{window.alert("No more Points!");}

  }


  moreStatsHP()
  {

    if(this.pService.pointsEvolve > 0){


  this.pService.pointsEvolve=Number(this.pService.pointsEvolve)-1;
  this.newHP=Number(this.pService.player.life)+1;
  this.name  = this.pService.player.name;
  this.isMonster  =this.pService.player.isMonset;
  this.int  = this.pService.player.int;
  this.life  = this.newHP;
  this.attack  =  this.pService.player.atk;
  this.user =this.pService.username;
  this.pass =this.pService.password;
  this.gService.CriarPersonagem2(this.user,this.name,this.pass,this.isMonster,this.int,this.life,this.attack).subscribe(data => {
    console.log
    (data);
    this.changeTxt2();
    this.getChar();
  });



}else{window.alert("No more Points!");}

  }

  moreStatsInt()
  {



    if(this.pService.pointsEvolve > 0){

  this.pService.pointsEvolve=Number(this.pService.pointsEvolve)-1;
  this.newINT=Number(this.pService.player.int)+1;
  this. name  = this.pService.player.name;
  this.isMonster  =this.pService.player.isMonset;
  this.int  = this.newINT;
  this.life  = this.pService.player.life;
  this.attack  =  this.pService.player.atk;
  this.user =this.pService.username;
  this.pass =this.pService.password;
  this.gService.CriarPersonagem2(this.user,this.name,this.pass,this.isMonster,this.int,this.life,this.attack).subscribe(data => {
    console.log
    (data);
    this.changeTxt2();
    this.getChar();
  });



}else{window.alert("No more Points!");}


  }
  newATK : any;
  newHP : any;
  newINT : any;
  user : string = "";
  name : string = "";
  pass : string  =  "";
  isMonster : string = "";
  int : string = "";
  life : string = "";
  attack : string = "";

}
