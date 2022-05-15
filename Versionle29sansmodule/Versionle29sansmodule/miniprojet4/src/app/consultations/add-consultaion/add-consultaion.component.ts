import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enfant } from 'src/app/enfant/enfant';
import { Consultaions } from '../consultaions';
import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-add-consultaion',
  templateUrl: './add-consultaion.component.html',
  styleUrls: ['./add-consultaion.component.css']
})
export class AddConsultaionComponent implements OnInit {

  consultation: Consultaions = new Consultaions;
  enfants :Enfant[]=[];
  constructor(private ConsultationService:ConsultationsService,private router: Router) { }

  ngOnInit(): void {
    this.ConsultationService.getEnfantList()
    .subscribe(response => this.enfants = response)
  }

  saveCons(){
    this.ConsultationService.addCons(this.consultation).subscribe (data => {
      console.log(data);
      this.goToCons();
  },
  error => console.log(error));
}

goToCons(){
  this.router.navigate(['/consultations']);
}


  onSubmit(){
  console.log(this.consultation);
  this.saveCons();

  }

}
