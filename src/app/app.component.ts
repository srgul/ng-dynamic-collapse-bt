import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dCollapse';
  data = [
    {id: 1, name: "deneme1"},
    {id: 2, name: "deneme2"},
    {id: 3, name: "deneme3"}
  ]

}
