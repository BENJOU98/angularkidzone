import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consultaions } from '../consultaions';
import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-details-consultaion',
  templateUrl: './details-consultaion.component.html',
  styleUrls: ['./details-consultaion.component.css']
})
export class DetailsConsultaionComponent implements OnInit {

  id:number;
consultation:Consultaions;
  constructor(private route:ActivatedRoute,private consultationsService:ConsultationsService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.consultation = new Consultaions();
    this.consultationsService.getConsultaionById(this.id).subscribe(data=> {
      this.consultation = data;
    })

  }

}
