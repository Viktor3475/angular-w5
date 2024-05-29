import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FindMyIPApiService{
    // REST API
    // - HTTP
    // GET / POST / PUT / DELETE

    // GET    - взимаме данни
    // POST   - създаваме нова информация
    // PUT    - актуализираме съществуващи данни
    // DELETE - изтриваме
    private http = inject(HttpClient)

  public getMyIP() {
    return this.http.get(`https://api.ipify.org/`,{responseType: 'text'});
  }
}