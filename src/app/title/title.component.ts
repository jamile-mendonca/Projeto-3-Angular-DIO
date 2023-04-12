import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';
  constructor() {
    console.log(`${this.nome}`);
  }

  ngOnChanges(): void {
    console.log('OnChange');
  }

  ngOnInit(): void {
    this.nome = `Olá ${this.nome}`;
  }
}
