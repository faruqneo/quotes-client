import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from '../quotes/quote';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {

  quote: Quote = {
    title: "",
    author: ""
  }
  id: string;

  constructor(private quoteService: QuotesService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);
    if (this.id) {
      this.quoteService.getQuote(this.id).subscribe(data => this.quote = data)
    }
  }

  onSave(from) {
    // console.log(from)
    const data = from.value;
    if (this.id) this.quoteService.updateQuotes(data, this.id).subscribe(data => {
      this.snackBar.open('Quote Updated')
      console.log(data);
    });
    else this.quoteService.createQuotes(data).subscribe(data => {
      this.snackBar.open('Quote Created')
      console.log(data);
    });
    this.router.navigateByUrl('/quotes');
  }

}
