import { Component } from '@angular/core';
import {  OnInit, Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inout';
  public name="Adhithya";
  public message="";
}
