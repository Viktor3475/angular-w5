import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FaviconApiService{
    // REST API
    // - HTTP
    // GET / POST / PUT / DELETE

    // GET    - взимаме данни
    // POST   - създаваме нова информация
    // PUT    - актуализираме съществуващи данни
    // DELETE - изтриваме
    private http = inject(HttpClient)
    public link: string = '';
  public getFaviconByPageName(name: string): Observable<Object> {
    this.link = `https://icon.horse/icon/${name}`;
    return this.http.get(this.link);
  }
}