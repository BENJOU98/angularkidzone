import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfant } from '../enfant/enfant';
import { Consultaions } from './consultaions';


@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {
  private baseURLGet ="http://localhost:8081/SpringMVC/Consultation/retrieveAllConsultation";
  private baseURLGetCById ="http://localhost:8081/SpringMVC/Consultation/retrieve-Consultation";
  private baseURLPost ="http://localhost:8081/SpringMVC/Consultation/add-consultation";
  private baseURLDelete ="http://localhost:8081/SpringMVC/Consultation/remove-Consultation";
  private baseURLUpdate ="http://localhost:8081/SpringMVC/Consultation/modify-Consultation";
  private baseURLNb ="http://localhost:8081/SpringMVC/Consultation/NbreConsultation";
  private baseURLRecherche ="http://localhost:8081/SpringMVC/Consultation/Recherche/{maladie}";
  private baseURLGetE ="http://localhost:8081/SpringMVC/enfant/retrieveAllEnfant";
  constructor(private httpClient: HttpClient) { }

  getConsultaionsList(): Observable<Consultaions[]>{

    return this.httpClient.get<Consultaions[]>(`${this.baseURLGet}`);

    }
    getEnfantList(): Observable<Enfant[]>{

      return this.httpClient.get<Enfant[]>(`${this.baseURLGetE}`);

      }

  getConsultaionById(id:number): Observable<Consultaions>{

    return this.httpClient.get<Consultaions>(`${this.baseURLGetCById}/${id}`);

    }

    DeleteConsultation(id:number): Observable<Object>{

      return this.httpClient.delete<Consultaions>(`${this.baseURLDelete}/${id}`);

      }



      addCons(consultaion: Consultaions): Observable<Consultaions>{
        console.log(consultaion);
        return this.httpClient.post<Consultaions>(`${this.baseURLPost}`, consultaion);
      }
}
