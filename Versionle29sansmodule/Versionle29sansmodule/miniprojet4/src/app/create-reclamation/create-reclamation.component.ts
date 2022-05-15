import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from '../reclamation';
import { ReclamtionService } from '../reclamtion.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent implements OnInit {

  rec: Reclamation = new Reclamation();
  constructor(private recs: ReclamtionService, private router: Router,private session:SessionService) { }

  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
  }
  saveReclamtion(){
    this.rec.user=this.session.getUser();
    this.recs.ajouterReclamation(this.rec).subscribe( data =>{
      this.goToReclamtionList();
    },
    error => console.log(error));

  }
  goToReclamtionList(){
    this.router.navigate(['/myRec']);
  }

  onSubmit(){
    console.log(this.rec);
    this.saveReclamtion();
  }

}
