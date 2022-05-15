import { Component, OnInit } from '@angular/core';
import { Jardin } from '../jardin';
import { JardinService } from 'src/app/services/jardin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jardin',
  templateUrl: './add-jardin.component.html',
  styleUrls: ['./add-jardin.component.css']
})
export class AddJardinComponent implements OnInit {


  jardin : Jardin = new Jardin();
  constructor(private jardinService: JardinService,
    private router : Router) { }

    ngOnInit(): void {
    }
  saveJardin(){
    this.jardinService.createJardin(this.jardin).subscribe (data => {
      console.log(data);
      this.goToJardin();
  },
  error => console.log(error));
}

goToJardin(){
  this.router.navigate(['/jardin']);
}

   onSubmit(){
    this.saveJardin();
    console.log(this.jardin);


    }
}
