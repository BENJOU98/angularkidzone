import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enfant } from './enfant';
import { EnfantService } from './enfant.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgToastService } from 'ng-angular-popup';
import { GoogleChartComponent,ChartType } from 'angular-google-charts';


/**
 * @title Paginator
 */
@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
  providers: [DatePipe]
})
export class EnfantComponent implements OnInit {
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
  type = 'PieChart' as ChartType;

  columnNames = ['Browser', 'Percentage'];
  options = {   colors: ['#0275d8', '#5bc0de'], is3D: true};
  width = 500;
  height = 300;
  dataRec=[] as any;
  cloture:number=0;
  noncloture:number=0;
  constructor(private enfantService:EnfantService,private router:Router,private toast: NgToastService) { }


    ngOnInit(): void {

      // for (let i = 1; i <= 15; i++) {
      //   this.elements.push({ nom: i, Age: 'Age ' + i, Date: 'Date de naissance ' + i, Sexe: 'Sexe ' + i });
      // }
this.getEnfantList();
this.getEnfantNb();
this.getEnfantNbG();
this.getEnfantNbF();
// this.data = [
//   ['Vaccin', this.nbEnfant],
//   ['Rappel', this.nbF]];


  let resp=this.enfantService.getEnfantList().subscribe((data)=>
    {this.enfants=data

      for( let a of this.enfants )
      {if(a.sexe=="Fille"){
        this.cloture+=1;
      }else this.noncloture+=1;

      }

      this.dataRec = [
        ['Fille' , this.cloture],
        ['Garçon', this.noncloture],

      ];
    });
  }



private getEnfantList(){
  this.enfantService.getEnfantList().subscribe(data=> {
    this.enfants=data;

    console.log(data);
    console.log(this.enfants);
  })
}
private getEnfantNb(){
  this.enfantService.getEnfantNb().subscribe(data=> {
    this.nbEnfant = data;
    console.log(data);

  })
}
private getEnfantNbG(){
  this.enfantService.getEnfantNbG().subscribe(data=> {
    this.nbG = data;
    console.log(this.nbG);

  })
}
private getEnfantNbF(){
  this.enfantService.getEnfantNbF().subscribe(data=> {
    this.nbF = data;
    console.log(this.nbF);

  })
}

updateEnfant(id:number){
this.router.navigate(['update-enfant',id]);
}

getEnfantId(id:number){
  this.router.navigate(['enfant-detail',id]);
  }


deleteEnfant(id:number){
  if (window.confirm("Are you sure you want to delete?") == true) {

  this.enfantService.DeleteEnfant(id).subscribe(data=>{
console.log(data);
    this.getEnfantList();
  })
  }
}

key= 'nom';
reverse: boolean = false;
sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;

}


exportpdf(){
  this.enfantService.getEnfantPDF;

  }
}


