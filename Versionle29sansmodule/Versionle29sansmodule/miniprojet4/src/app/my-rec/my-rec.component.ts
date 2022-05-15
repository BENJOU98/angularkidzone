import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { ReclamtionService } from '../reclamtion.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-my-rec',
  templateUrl: './my-rec.component.html',
  styleUrls: ['./my-rec.component.css']
})
export class MyRecComponent implements OnInit {


  p:number =1;
  nbEnfant:any;
  nbF:any;
  nbG:any;

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
  Rec: any;
   constructor(private recs: ReclamtionService,
    private router: Router, private postService: PostService,private session:SessionService) { }


     ngOnInit(): void {
      if (this.session.getUser() == null){
        this.router.navigate(['/users/connexion'])
      }

       // for (let i = 1; i <= 15; i++) {
       //   this.elements.push({ nom: i, Age: 'Age ' + i, Date: 'Date de naissance ' + i, Sexe: 'Sexe ' + i });
       // }
 this.getRecs();

 //   ['Vaccin', this.nbEnfant],
 //   ['Rappel', this.nbF]];


     }






     private getRecs(){
      this.id=this.session.getUser().idUser;
      this.recs.getRecList().subscribe((data) =>{
        this.Rec = data ;
        console.log(data);
      })
 }

}
