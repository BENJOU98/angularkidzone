import { Reclamation } from "./Reclamation";
import { ReponseReclamation } from "./ReponseReclamation";

export class User{
    idUser: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    email: string;
    password: string;
    urlpicture: string;
    token : string;
    badge: string;
    numero: string;
    promoActive: boolean;
    reponses: ReponseReclamation[];
    reclamations: Reclamation[];

    constructor(email:string="",password:string="",badge:string="",numero:string=""){
      this.email = email;
      this.password = password;
      this.badge = badge;
      this.numero=numero;
    }
  }
  