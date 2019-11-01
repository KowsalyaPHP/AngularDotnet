import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'innovate';
  public static urlPath = "http://localhost:3875/MVCwithWebApi/";
}
