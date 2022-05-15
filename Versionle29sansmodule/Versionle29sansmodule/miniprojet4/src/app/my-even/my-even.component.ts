import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Evenement } from '../evenement/Evenement';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-my-even',
  templateUrl: './my-even.component.html',
  styleUrls: ['./my-even.component.css']
})
export class MyEvenComponent implements OnInit {

  searchValue : string;
  p: number = 1;
  evenements : Evenement[];

  constructor(private evenmentService : EvenementService,
    private router : Router) { }


  ngOnInit(): void {
    this.getEvenements();


  }

  private getEvenements(){
    this.evenmentService.getevenementList().subscribe(data=> {
      console.log(data);
      data.forEach(element => {
        element.date_event = moment(element.date_event).toDate()
        element.heure_event = moment(element.heure_event).toDate()
      });
      this.evenements = data;

    });
  }
}
