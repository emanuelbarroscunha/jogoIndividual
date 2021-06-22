import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registarServico: GeneralService) { }

  ngOnInit(): void {
  }

  registar()
  {
    this.registarServico.registar(this.nome,this.pass).subscribe(data => console.log(data));
  }

  nome :string = "";
  pass :string  =  "";

}
