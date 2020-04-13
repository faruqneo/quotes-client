import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Quote } from './quote';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  constructor(private quoteService: QuotesService, private snackBar: MatSnackBar) { }

  qutoes: Observable<Quote[]>;

  getData() {
    this.qutoes = this.quoteService.getQuotes();
  }

  ngOnInit(): void {
    // this.subscribe = this.quoteService.getData().subscribe((data) => {
    //   // console.log(data);
    //   this.qutoes = data;
    // })
    this.getData();
  }

  getRamdomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)]

    return { background: color }
  }

  onDelete(id) {
    console.log(id);
    // this.snackBar.open('Please Contact With Admin')
    this.quoteService.deleteQuotes(id).subscribe(data => {
      this.getData();
      console.log('Quote Deleted.')
    })
  }
}
