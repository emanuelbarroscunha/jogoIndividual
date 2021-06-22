import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.css']
})
export class PvpComponent implements OnInit {

  constructor(private pService: PlayerService,
    private gsService: GeneralService ,router: Router) { this.router = router;}
router:Router;
  ngOnInit(): void {

    if(this.pService.playerID <= 0){
      this.router.navigate(['/login']);
      window.alert('Please Login First');
    }else{

    this.getChar();
    this.getChar2();
    }


  }


  vida:any="";
  ataque:any="";

  vidaE:any="";
  ataqueE:any="";

  percentagemVida:any="";
  percentagemVidaE:any="";

  setInitialValue(){
    this.vida=Number(this.pService.player.life)*10;
    this.ataque=Number(this.pService.player.atk);

    this.vidaE=Number(this.pService.enemy.life)*10;
    this.ataqueE=Number(this.pService.enemy.atk);
  }

  getvida(){

    let name55:any = document.getElementById('c');
    name55.innerText =  this.vida+"/"+Number(this.pService.player.life*10);

    let name22:any = document.getElementById('e');
    name22.innerText =  this.vidaE+"/"+Number(this.pService.enemy.life*10);

    this.percentagemVida=(this.vida/Number(this.pService.player.life*10)*100);
    this.percentagemVidaE=(this.vidaE/Number(this.pService.enemy.life*10)*100);


    let name2:any = document.getElementById('hpC2');
    name2.style.width =this.percentagemVida+"%";
    let name222:any = document.getElementById('hpE2');
    name222.style.width =this.percentagemVidaE+"%";

    if(this.vida<=0 || this.vidaE<=0)
    {
      this.final();
      this.router.navigate(['/character']);
    }

  }
  final(){
    if(this.vida<this.vidaE)
    window.alert("acabou o pvp , ganhou o inimigo!");
    else
    window.alert("acabou o pvp , ganhou!");

  }

  fight()
  {
    if(this.vida>0 &&  this.vidaE>0){
      this.vida=this.vida-this.ataqueE;
      this.vidaE=this.vidaE-this.ataque;
      this.getvida();
    }
    else{
      if(this.vida<this.vidaE)
      window.alert("acabou o pvp , ganhou o inimigo!");
      else
      window.alert("acabou o pvp , ganhou!");

    }

  }

  getChar()
  {
    this.gsService.getcharacter(this.pService.playerID).subscribe((x:any) => {

        console.log(x);
        this.pService.player.name = x['data'].Personagens[0].Nome;
        this.pService.player.id = x['data'].Personagens[0].ID;
        this.pService.player.atk = x['data'].Personagens[0].Atk;
        this.pService.player.isMonset = x['data'].Personagens[0].IsMonset;
        this.pService.player.int = x['data'].Personagens[0].Int;
        this.pService.player.life = x['data'].Personagens[0].Vida;
        this.pService.player.idPlayer = x['data'].Personagens[0].ID_Player;
        this.changetxt();
    });
  }

  getChar2()
  {
    this.gsService.getenemy().subscribe((x:any) => {

        console.log(x);
        this.pService.enemy.name = x['data'].Nome;
        this.pService.enemy.id = x['data'].ID;
        this.pService.enemy.atk = x['data'].Atk;
        this.pService.enemy.isMonset = x['data'].IsMonset;
        this.pService.enemy.int = x['data'].Int;
        this.pService.enemy.life = x['data'].Vida;
        this.pService.enemy.idPlayer = x['data'].ID_Player;
        this.changetxt2();
    });
  }

  changetxt(){
    let name2:any = document.getElementById('atk');
    name2.innerText =  this.pService.player.atk;

    let name21:any = document.getElementById('vida');
    name21.innerText =  this.pService.player.life;

    let name22:any = document.getElementById('int');
    name22.innerText =  this.pService.player.int;

    let name222:any = document.getElementById('cName');
    name222.innerText =  this.pService.player.name;

  }

  changetxt2(){
    let name2:any = document.getElementById('atk2');
    name2.innerText =  this.pService.enemy.atk;

    let name21:any = document.getElementById('vida2');
    name21.innerText =  this.pService.enemy.life;

    let name22:any = document.getElementById('int2');
    name22.innerText =  this.pService.enemy.int;

    let name222:any = document.getElementById('eName');
    name222.innerText =  this.pService.enemy.name;


    this.setInitialValue();
    this.getvida();
  }
}
