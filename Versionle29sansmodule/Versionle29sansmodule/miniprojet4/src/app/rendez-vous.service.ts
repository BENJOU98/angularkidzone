import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from './rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private baseURL = "http://localhost:8081/SpringMVC/retrieve-all-Rendez_vous";

  constructor(private httpClient: HttpClient) { }

  public getRdvList(){
    return this.httpClient.get(`${this.baseURL}`);
  }
  public ajouterRendezVous (r:RendezVous): Observable<Object>{
    return this.httpClient.post("http://localhost:8081/SpringMVC/add-Rendez_vous",r);

  }
  public updateRendezVous(r:RendezVous): Observable<Object>{
    return this.httpClient.put("http://localhost:8081/SpringMVC/modify-Rendez_vous/",r);
  }
  getRendezVousById(id: number): Observable<RendezVous>{
    return this.httpClient.get<RendezVous>("http://localhost:8081/SpringMVC/retrieve-Rendez_vous/"+id);
  }
  deleteRendezVous(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8081/SpringMVC/remove-Rendez_vous/"+id);
  }

}
