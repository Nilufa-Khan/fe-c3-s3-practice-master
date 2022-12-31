import { Component, OnInit } from '@angular/core';
import { Contact } from '../module/contact';
import { CONTACTS } from '../module/contacts';
@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
  contacts:Contact[] =CONTACTS;

  public item:Contact = {};
  constructor() { }

  ngOnInit(): void {
  }

}
