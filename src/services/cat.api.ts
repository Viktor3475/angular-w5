import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CatApiService{
    // REST API
    // - HTTP
    // GET / POST / PUT / DELETE

    // GET    - взимаме данни
    // POST   - създаваме нова информация
    // PUT    - актуализираме съществуващи данни
    // DELETE - изтриваме
    private http = inject(HttpClient)
    public link: string = '';
  public getCatByCode(code: string): Observable<Object> {
    this.link = `https://http.cat/${code}`;
    return this.http.get(this.link);
  }
}