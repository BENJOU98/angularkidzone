import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Enfant } from '../enfant/enfant';
import { EnfantService } from '../enfant/enfant.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-myenf',
  templateUrl: './myenf.component.html',
  styleUrls: ['./myenf.component.css']
})
export class MyenfComponent implements OnInit {

 // elements: any = [];
  // headElements = ['nom','Age','Date de naissance','Sexe','Image','Taille'];

  p:number =1;
  nbEnfant:any;
  nbF:any;
  nbG:any;
   enfants:Enfant[];
   searchValue: string;
   // title = 'googlechart';
   // type = 'PieChart';


   columnNames = ['Browser', 'Percentage'];
   options = {   colors: ['#0275d8', '#5bc0de'], is3D: true};
   width = 500;
   height = 300;
   dataRec=[] as any;
   cloture:number=0;
   noncloture:number=0;
  id: any;
   constructor(private enfantService:EnfantService,private router:Router,private toast: NgToastService,private session:SessionService) { }


     ngOnInit(): void {
      if (this.session.getUser() == null){
        this.router.navigate(['/users/connexion'])
      }

       // for (let i = 1; i <= 15; i++) {
       //   this.elements.push({ nom: i, Age: 'Age ' + i, Date: 'Date de naissance ' + i, Sexe: 'Sexe ' + i });
       // }
 this.getEnfantList();

 //   ['Vaccin', this.nbEnfant],
 //   ['Rappel', this.nbF]];


     }



 private getEnfantList(){

     this.id=this.session.getUser().idUser;
     this.enfantService.getuserList( this.id).subscribe(data => {
       this.enfants = data;
     console.log(data);
     console.log(this.enfants);
   })
 }


}
