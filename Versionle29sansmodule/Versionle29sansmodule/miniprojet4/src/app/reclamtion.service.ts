import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from './reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamtionService {

  private baseURL = "http://localhost:8081/SpringMVC/retrieve-all-Reclamation";

  constructor(private httpClient: HttpClient) { }

  public getRecList(){
    return this.httpClient.get(`${this.baseURL}`);
  }
  public ajouterReclamation (r:Reclamation): Observable<Object>{
    return this.httpClient.post("http://localhost:8081/SpringMVC/add-Reclamation",r);

  }
  public updateReclamation(r:Reclamation): Observable<Object>{
    return this.httpClient.put("http://localhost:8081/SpringMVC/modify-operateur",r);
  }
  getReclamationById(id: number): Observable<Reclamation>{
    return this.httpClient.get<Reclamation>("http://localhost:8081/SpringMVC/retrieve-Reclamation/"+id);
  }
  deleteReclamation(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8081/SpringMVC/remove-Reclamation/"+id);
  }

}
