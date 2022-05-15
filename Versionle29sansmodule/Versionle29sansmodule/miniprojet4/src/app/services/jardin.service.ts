import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jardin } from '../jardin/jardin';

@Injectable({
  providedIn: 'root'
})
export class JardinService {
  private baseURLGetN ="http://localhost:8081/SpringMVC/Jardin/NombreJardin";
  private baseURL="http://localhost:8081/SpringMVC/Jardin";
  constructor( private httpClient : HttpClient ) { }

  getjardinList(): Observable<Jardin[]>{
    return this.httpClient.get<Jardin[]>(`${this.baseURL}/retrieve-all-jardin`);

  }
  getJardinNb(){

    return this.httpClient.get(`${this.baseURLGetN}`);

    }
  createJardin(jardin: Jardin): Observable<object>{
    console.log("jardin: ");
    console.log(jardin);
    return this.httpClient.post(`${this.baseURL}/ajouterJardin`,jardin);
  }

  updateJardin(jardin: Jardin): Observable<object>{
    console.log("jardin: ");
    console.log(jardin);
    return this.httpClient.put(`${this.baseURL}/updateJardin`,jardin);
  }

  getJardinById(id: number): Observable<Jardin>{
  return this.httpClient.get<Jardin>((`${this.baseURL}/retrieve-EventById?idjard=${id}`));
}

deleteJardin(id: number): Observable<Jardin>{
  return this.httpClient.delete<Jardin>((`${this.baseURL}/remove-jardin/${id}`));
}

}
