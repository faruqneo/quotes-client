import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: Quote[];

  constructor(private quoteServies: QuotesService) { }

  ngOnInit(): void {
    // this.quote = this.quoteServies.getQuote('5e8f07da9029af47335bfb87');
    this.quoteServies.getQuotes().subscribe(data => this.quote = data);
  }

}
