import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})

export class EntryComponent {
  title: string = 'My First Photo';
  photo: string = "https://tinyurl.com/yax4uw3k";
  description: string =" A description of my first photo";
}
