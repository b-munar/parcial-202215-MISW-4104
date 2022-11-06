import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
