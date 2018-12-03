import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
})
export class AvisComponent implements OnInit {

  @Output() vote: EventEmitter<Avis> = new EventEmitter<Avis>();
  constructor() { }

  aimer(event) {
    this.vote.emit(Avis.AIMER)
    event
  }

  detester() {
    this.vote.emit(Avis.DETESTER)
  }

  ngOnInit() {

  }
}


