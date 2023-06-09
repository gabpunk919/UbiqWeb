import { Component, OnInit,ElementRef, ViewChild   } from '@angular/core';
import { ServiceEvenementService } from '../service/service-evenement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/modele/User';
import { ServiceUserService } from '../service/service-user.service';
import { DataServiceService } from '../data-service.service';
import { Reservation } from 'src/modele/Reservation';
import { Disponibilite } from 'src/modele/Disponibilite';
import { Evenement } from 'src/modele/Evenement';
import { userConnected } from 'src/DataSource/UserConnected';
import { Router } from '@angular/router';
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user:User=new User(1,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,"")));
  public connexionForm: FormGroup;
  public inscriptionForm: FormGroup;
  Accueil =false;
  nom!: string;
  prenom!: string;
  telephone!: string;
  email!: string;
  submitted = false;
  inscrit=true;
  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;
  
  constructor(private userService:ServiceUserService ,private userConnected:userConnected ,private  router:Router) { 
    this.inscriptionForm = new FormGroup({
      mdp: new FormControl('', [
        Validators.required,
        
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      nom: new FormControl('', [
        Validators.required
      ]),
      prenom: new FormControl('', [
        Validators.required
      ]),
      telephone: new FormControl('', [
        Validators.required
      ]),
      mdp2: new FormControl('', [
        Validators.required
      ])
      
      
      
    });
    this.connexionForm = new FormGroup({
      mdp: new FormControl('', [
        Validators.required,
        
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
      
    });
    
  }

  ngOnInit(): void {
  
    
  }
  inscrire(oui:boolean){
    this.inscrit=oui;
  }
  get f() { return this.connexionForm.controls; }


  onFormSubmitInscription(){
   if (this.inscriptionForm.invalid) {
   
      return;

  }
  alert(this.inscriptionForm.controls['email'].value);
  this.userService.getDataUserEmail(this.inscriptionForm.controls['email'].value).subscribe((response: any) => {
    
    if(  this.userService.fromJsonEmail(response).email==this.inscriptionForm.controls['email'].value){
      alert("Email déjà utilisé");
      return ;
    }else{
     
      let email=this.inscriptionForm.controls['email'].value
      let mdp=this.inscriptionForm.controls['mdp'].value
      let nom=this.inscriptionForm.controls['nom'].value
      let prenom=this.inscriptionForm.controls['prenom'].value
      let telephone=this.inscriptionForm.controls['telephone'].value
      let reservation :Reservation=new  Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,""));
      let user : User=new User(0,nom,prenom,telephone,email,mdp,reservation);
     
       this.userService.postData(user).subscribe(data => {
        data.id;
        if( data.id!=0){
          return console.log(true);
        }
    });
    }
   
  });
  }
  onFormSubmitConnexion(){
    if (this.connexionForm.invalid) {
      return;
  }
  alert('Vous êtes connecté! ' );
  
  
  this.userService.getDataUser(this.connexionForm.controls['email'].value,this.connexionForm.controls['mdp'].value).subscribe((response: any) => {
    this.userConnected.setUser(this.userService.fromJson(response));
    console.log(this.userConnected.getUser());
    localStorage.setItem('user',this.userConnected.getUser().Id.toString())
  });
  this.router.navigate(['']);
  }

}

