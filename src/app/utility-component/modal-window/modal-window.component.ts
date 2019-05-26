import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input() header: string;
  @Input() showing = false;
  @Output() showingChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close = () => {
    this.showingChange.emit(false);
  }

}
