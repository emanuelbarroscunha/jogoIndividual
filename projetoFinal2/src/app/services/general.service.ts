import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient) { }


  linkLogin="http://moreiramoises.pt/server/apis/login.php";
  linkRegistar="http://moreiramoises.pt/server/apis/signup.php";
  linkCriarChar = "http://moreiramoises.pt/server/apis/createChart.php";
  linkGetChar="http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=";
  linkGetArma="http://moreiramoises.pt/server/apis/createArma.php";
  linkMostrarArma="http://moreiramoises.pt/server/apis/get/getRandomArma.php";
  linkUpdateChar="http://moreiramoises.pt/server/apis/updateChart.php";
  linkEnemy="http://moreiramoises.pt/server/apis/get/getRandomChar.php?";
  login(nome:string, pass:string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("username", nome);
    dataToSend.append("password", pass);
    return this.http.post(this.linkLogin,dataToSend);
  }

 registar(nome:string, pass:string)
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("username", nome);
  dataToSend.append("password", pass);
  return this.http.post(this.linkRegistar,dataToSend);
 }

 CriarPersonagem(user:string,name:string, pass:string, isMonster:string,int:string,life:string ,attack:string )
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("name", name);
  dataToSend.append("atk", attack);
  dataToSend.append("isMonster", "false");
  dataToSend.append("int", int);
  dataToSend.append("vida", life);
  dataToSend.append("username", user);
  dataToSend.append("password", pass);
  return this.http.post(this.linkCriarChar,dataToSend);
 }

 CriarPersonagem2(user:string,name:string, pass:string, isMonster:string,int:string,life:string ,attack:string , idChar:string )
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("idChar", idChar);
  dataToSend.append("name", name);
  dataToSend.append("atk", attack);
  dataToSend.append("isMonster", "false");
  dataToSend.append("int", int);
  dataToSend.append("vida", life);
  dataToSend.append("username", user);
  dataToSend.append("password", pass);
  return this.http.post(this.linkUpdateChar,dataToSend);
 }

 CriarArma(name:string,attack:string,durabilidade:string,life:string,user:string,pass:string,idPerso:string,tipoPerso:string)
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("name",name);
  dataToSend.append("atk", attack);
  dataToSend.append("durabilidade", durabilidade);
  dataToSend.append("vida", life);
  dataToSend.append("username", user);
  dataToSend.append("password", pass);
  dataToSend.append("idPersonagem", idPerso);
  dataToSend.append("tipoDeArma", tipoPerso);

  return this.http.post(this.linkGetArma,dataToSend);



 }

 getcharacter(id :String)
 {
    return this.http.get(this.linkGetChar +id);
 }

 getenemy()
 {
    return this.http.get(this.linkEnemy);
 }


 getWeapon(id :String)
 {
    return this.http.get(this.linkMostrarArma);
 }
}
