import { Component, OnInit } from '@angular/core';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { ServicePartenaireService } from '../service/service-partenaire.service';
import { Partenaire } from 'src/modele/Partenaire';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-devenez-chauffeur',
  templateUrl: './devenez-chauffeur.component.html',
  styleUrls: ['./devenez-chauffeur.component.css']
})

export class DevenezChauffeurComponent implements OnInit {
  
  public partenaireForm: FormGroup;
  Accueil =false;
  nom!: string;
  prenom!: string;
  telephone!: string;
  email!: string;
  submitted = false;
  constructor(private partenaireService : ServicePartenaireService) {
    this.partenaireForm = new FormGroup({
      'nom': new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
      ,
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9 ]{12}")
      ])
      ,
      'prenom': new FormControl('', [
        Validators.required
      ])
    });
   }
   get f() { return this.partenaireForm.controls; }
  onFormSubmit() {
    this.submitted = true;
    if (this.partenaireForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.partenaireForm.value, null, 4));
    const partenaire = new Partenaire(0, this.partenaireForm.controls['nom'].value, this.partenaireForm.controls['prenom'].value,
     this.partenaireForm.controls['telephone'].value, this.partenaireForm.controls['email'].value);
    
    this.partenaireService.postData(partenaire).subscribe((response: any) => {
      console.log(response);
    });
  }
  onReset() {
    this.submitted = false;
    this.partenaireForm.reset();
}
   


  ngOnInit(): void {
   
   
  }

}
