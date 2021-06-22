import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.css']
})
export class CreateWeaponComponent implements OnInit {

  constructor(private criarWea: GeneralService) { }

  ngOnInit(): void {
  }
  registar(){
    this.criarWea.CriarArma(this.nome,this.atk,this.durabilidade,this.vida,this.username,this.password,this.idPersonagem,this.tipoPersonagem).subscribe(data => console.log
      (data));
      console.log(this.nome,this.atk,this.durabilidade,this.vida,this.username,this.password,this.idPersonagem,this.tipoPersonagem)
  }
  nome : string = "";
  atk : string = "10";
  durabilidade : string  =  "1000";
  vida : string = "10";
  username : string = "";
  password : string = "";
  idPersonagem : string = "";
  tipoPersonagem : string ="";


}
