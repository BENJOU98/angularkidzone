import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Consultaions } from './consultaions';
import { ConsultationsService } from './consultations.service';
import { NgToastService } from 'ng-angular-popup';
import { GoogleChartComponent,ChartType } from 'angular-google-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css'],
  providers: [DatePipe]
})
export class ConsultationsComponent implements OnInit {
  consultations : Consultaions[];
  searchValue: string;
  p:number =1;
  //title = 'googlechart';
  // type = 'PieChart';
  type = 'PieChart' as ChartType;
  cloture:number=0;
  noncloture:number=0;

  columnNames = ['Browser', 'Percentage'];
  options = {   colors: ['#0275d8', '#5bc0de'], is3D: true};
  width = 500;
  height = 300;
  dataRec=[] as any;
  constructor(private router:Router,private consultationservice:ConsultationsService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.getConsList();

    let resp=this.consultationservice.getConsultaionsList().subscribe((data)=>
    {this.consultations=data

      for( let a of this.consultations )
      {if(a.typecons=="Vaccin"){
        this.cloture+=1;
      }else this.noncloture+=1;

      }

      this.dataRec = [
        ['Vaccin' , this.cloture],
        ['Rappel', this.noncloture],

      ];
    });

  }

  key= 'nom';
reverse: boolean = false;
sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;

}
  private getConsList(){
    this.consultationservice.getConsultaionsList().subscribe(data=> {
      this.consultations=data;

      console.log(data);
      console.log(this.consultations);
    })
  }

  deleteCons(id:number){
    if (window.confirm("Are you sure you want to Cancel this consultation?") == true) {

    this.consultationservice.DeleteConsultation(id).subscribe(data=>{
  console.log(data);
      this.getConsList();
    })
    }
  }

  getConsId(id:number){
    this.router.navigate(['cons-detail',id]);
    }



}
