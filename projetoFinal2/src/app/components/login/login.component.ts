import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: GeneralService
    ,private pservice: PlayerService,router: Router) {this.router = router; }

  ngOnInit(): void {
  }
  router: Router;
  login()
  {
    this.loginService.login(this.nome,this.pass).subscribe((x:any)=> {
      console.log(x);
      this.idplayer=x['data'];
      console.log(this.idplayer);
      this.pservice.playerID=this.idplayer;

      if (x['code'] <= 200){
        window.alert("Login sucessful");
        this.router.navigate(['/character']);
        this.pservice.username=this.nome;
        this.pservice.password=this.pass;

      }
      else{
        window.alert("Login Failed")
      }
    }
    )
    ;

  }

  nome :string = "";
  pass :string  = "";
  idplayer:any;
}
