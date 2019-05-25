import { Component, OnInit } from '@angular/core';
import { Snippet } from '../../models/snippet';
import { Languages } from '../../models/temp-languages.enum';

@Component({
  selector: 'app-home-controller',
  templateUrl: './home-controller.component.html',
  styleUrls: ['./home-controller.component.scss']
})
export class HomeControllerComponent implements OnInit {

  snippets = [
    new Snippet('my snippet', 'this is a test', 'let this is this;', Languages.typescript),
    new Snippet('my snippet', 'this is a test', 'let this is this;', Languages.typescript),
    new Snippet('my snippet', 'this is a test', 'let this is this;', Languages.typescript),
    new Snippet('my snippet', 'this is a test', 'let this is this;', Languages.typescript),
    new Snippet('my snippet', 'this is a test', 'let this is this;', Languages.typescript),
    new Snippet('my snippet', 'this is a test', 'let this is this;', Languages.typescript)
  ];

  constructor() { }

  ngOnInit() {
  }



}
