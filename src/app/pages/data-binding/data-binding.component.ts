import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  text = 'Ivonaldo Soares';
  imgUrl = 'https://picsum.photos/300/300';
  buttonText = 'Clique no botão';
  textRed = false;
  bgColor = 'green';
  textInput = '';

  constructor() {}

  ngOnInit(): void {}

  retornaNome() {
    return this.text;
  }

  clicou() {
    this.textRed = true;
    this.text = 'Paulo Santos';
    console.log('Clicou aqui');
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }
}
