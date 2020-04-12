import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quotes/quote';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${baseUrl}/quotes`)
      .pipe(tap(data => console.log(data, "Quote Serivce")));
  }

  getQuote(id: string): Observable<Quote> {
    return this.http.get<Quote>(`${baseUrl}/quotes/${id}`)
      .pipe(tap(data => console.log(data, "Quote Serivce")));
  }

  createQuotes(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(`${baseUrl}/quotes`, quote);
  }

  updateQuotes(quote: Quote, id: string): Observable<Quote> {
    return this.http.put<Quote>(`${baseUrl}/quotes/${id}`, quote);
  }

  deleteQuotes(id: string): Observable<Quote> {
    return this.http.delete<Quote>(`${baseUrl}/quotes/${id}`);
  }
}
