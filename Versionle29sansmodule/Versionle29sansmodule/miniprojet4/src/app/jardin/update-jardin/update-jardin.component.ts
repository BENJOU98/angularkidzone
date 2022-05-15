import { Component, OnInit } from '@angular/core';
import { JardinService } from 'src/app/services/jardin.service';
import { Jardin } from '../jardin';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-jardin',
  templateUrl: './update-jardin.component.html',
  styleUrls: ['./update-jardin.component.css']
})
export class UpdateJardinComponent implements OnInit {



  id: number;
  jardin : Jardin = new Jardin();
  name : string;
  adresse: string;
  capacite : number;
  email : string;
  responsable_garderie : number;
  constructor(private jardinService : JardinService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.jardinService.getJardinById(this.id).subscribe(data =>{
      this.jardin = data;
      console.log(data);
  },  error => console.log(error));
  }

  saveJardin(){

    this.jardinService.updateJardin(this.jardin).subscribe (data => {
      console.log(data);
      this.goToJardin();
  },
  error => console.log(error));
  }

  goToJardin(){
    this.router.navigate(['/jardins']);
    }

    onSubmit(){
      this.saveJardin();
      console.log(this.jardin);


      }

}
