import { User } from "../Model/user";

export class Enfant {
id:number;
nom:string;
prenom:string;
age:number;
dateN:Date;
sexe:string;
urlpicture:string;
taille:number;
maladie:string;
user:User;


// constructor(id: number, nom: string,prenom: string, age: number, dateN: Date, sexe: string ,urlpicture: string, taille:number,maladie:string) {
//   this.id = id;
//   this.nom = nom;
//   this.prenom = prenom;
//   this.age = age;
//   if (urlpicture!="" && !urlpicture.includes("/assets/img/"))
//   { this.urlpicture = "/assets/img/EnfantPic/" +urlpicture;}
//   else { this.urlpicture = urlpicture}
//   this.dateN = dateN;
//   this.sexe = sexe ;
//   this.taille = taille;
//   this.maladie = maladie;
// }
}
