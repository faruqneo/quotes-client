import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../quotes/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: Observable<Quote>
  constructor(private quoteServies: QuotesService) { }

  ngOnInit(): void {
    this.quote = this.quoteServies.getQuote('5e92b9f470de8c0017ac53df');
  }

}
