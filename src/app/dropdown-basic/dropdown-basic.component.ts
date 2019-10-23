import { Component, OnInit } from '@angular/core';
import {BsDropdownConfig} from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class DropdownBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
