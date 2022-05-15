import { Component, OnInit } from '@angular/core';
import { Jardin } from '../jardin';
import { JardinService } from 'src/app/services/jardin.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-jardin-details',
  templateUrl: './jardin-details.component.html',
  styleUrls: ['./jardin-details.component.css']
})
export class JardinDetailsComponent implements OnInit {

  id : number
  jardin : Jardin
  constructor(private route: ActivatedRoute, private jardinService : JardinService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.jardin = new Jardin();
    this.jardinService.getJardinById(this.id).subscribe(data => {
      this.jardin = data;
    })
  }

}
