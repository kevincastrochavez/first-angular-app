import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  display = true;
  clicksList = [];

  toggleDisplay() {
    this.display = !this.display;
    this.clicksList.push(new Date());
  }
}
