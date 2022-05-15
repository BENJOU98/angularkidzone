import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';
import { NgToastService } from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { User } from 'src/app/Model/user';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.css']
})

export class AddEnfantComponent implements OnInit {
public imagePath: any;
FormEnfant: FormGroup;
enfant : Enfant = new Enfant();
  File: any;
  public message: string;
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private httpClient: HttpClient,private fb: FormBuilder,private enfantService:EnfantService,private router: Router,private toast: NgToastService,private session:SessionService) { }

  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
  }

  saveEnfant(){
    this.enfant.user=this.session.getUser();
    this.enfantService.addEnfant(this.enfant).subscribe (data => {
      console.log(data);
      this.goToEnfant();
  },
  error => console.log(error));
}

goToEnfant(){
  this.router.navigate(['/myenf']);
}


  onSubmit(){
  console.log(this.enfant);
  this.saveEnfant();

  }

//   public selectedFile;
//   public event1;
//   imgURL: any;
//   InputImage: string = "";
//   receivedImageData: any;
//   base64Data: any;
//   convertedImage: any;



//   ngOnInit(): void {

//     // this.FormEnfant = this.fb.group(
//     //   {
//     //     'nom': [this.enfant.nom, [Validators.required]],
//     //      'prenom': [this.enfant.prenom, [Validators.required]],
//     //      'age': [this.enfant.age, [Validators.required]],
//     //      'taille': [this.enfant.taille, [Validators.required]],
//     //      'InputImage': [this.enfant.urlpicture],
//     //   }
//     // )
//   }


//   uploadFiles( event:any ) {
//     if(event.target.files.length>0)
//     {
//       const file=event.target.files[0];
//       this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
//       //this.InputImageext=files.target.files[0].name.split('.')[1];
//       this.File=file;
//       var reader = new FileReader();
//       this.imagePath=file;
//       reader.readAsDataURL(file);
//       reader.onload=(_event) =>{this.imgURL=reader.result}
//     }
//   }

//   // saveEnfant(form:FormGroup){
//   //   if(this.InputImage!=""){
//   //     const formdata=new FormData();
//   //     formdata.append('file',this.File,this.InputImage);
//   //     this.enfantService.Image(formdata).subscribe();
//   //   }

//   //   this.enfant=new Enfant(form.value.id,form.value.nom,form.value.prenom,form.value.age,form.value.urlpicture,form.value.dateN,form.value.sexe,form.value.taille,form.value.taille);

//   //   this.enfantService.addEnfant(this.enfant).subscribe( data =>{
//   //     console.log(data);
//   //   },
//   //   error => console.log(error));
//   // }
//     // this.enfant.nom = form.value.nom;
//     // this.enfant.prenom = form.value.prenom;
//     // this.enfant.urlpicture = form.value.InputImage;
//     // if(form.value.InputImage!=""){
//     //   const formdata=new FormData();
//     //   formdata.append('file',this.File,this.InputImage);
//     //   this.enfantService.Image(formdata).subscribe();
//     // }




//   // saveRec(form:FormGroup){

//   //   if(this.InputImage!=""){
//   //     const formdata=new FormData();
//   //     formdata.append('file',this.userFile,this.InputImage);
//   //     this.publicationservice.postFileRec(formdata).subscribe();
//   //   }
//   //   this.pub=new Publication(form.value.idReclamation,form.value.objet,form.value.messageReclamation,
//   //     this.InputImage,new Date(Date.now()));
//   //     this.publicationservice.createforum(this.pub).subscribe( data =>{
//   //       console.log(data);
//   //     },
//   //     error => console.log(error));
//   //   }



//   goToEnfant(){
//     this.router.navigate(['/enfants']);
//   }


//   saveEnfant(){
//     this.enfantService.addEnfant(this.enfant).subscribe(data=>{
//       console.log(data);
//       this.toast.success({detail:"SUCCESS",summary:'Un enfant a été ajouter',duration: 5000});
//       this.goToEnfant();
//     },
//     error=>console.log(error));
//   }











// //   saveEnfant(form:FormGroup){

// //     if(this.InputImage!=""){
// //       const formdata=new FormData();
// //       formdata.append('file',this.userFile,this.InputImage);
// //       this.enfantService.Image(formdata).subscribe();
// //     }
// //     this.enfant=new Enfant(form.value.id,form.value.nom,form.value.age,form.value.urlpicture,form.value.dateN,form.value.sexe,form.value.taille,form.value.taille);
// // //    this.enfant=new Enfant(form.value.id,form.value.objet,form.value.messageReclamation,this.InputImage,new Date(Date.now()));
// //       this.enfantService.addEnfant(this.enfant).subscribe( data =>{
// //         console.log(data);
// //       },
// //       error => console.log(error));
// //     }

//     onSubmit(){

//       console.log(this.enfant);

//       // let response = this.enfantService.addEnfant(this.enfant);
//       // response.subscribe();
//       // console.log(this.enfant);
//       this.goToEnfant();

//         }
// }
}
