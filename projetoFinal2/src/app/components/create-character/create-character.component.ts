import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor(private criarCharServico: GeneralService) { }

  ngOnInit(): void {
  }

  registar()
  {
    this.criarCharServico.CriarPersonagem(this.user,this.name,this.pass,this.isMonster,this.int,this.life,this.attack).subscribe(data => console.log
(data));
  }
    user : string = "";
    name : string = "";
    pass : string  =  "";
    isMonster : string = "";
    int : string = "10";
    life : string = "10";
    attack : string = "10";


}
