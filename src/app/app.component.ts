import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentNavElement: string = "Recipes";

  public onNavClicked(textContent: string): void {
    if(textContent === "Recipes"){
      this.currentNavElement = textContent;
      // console.log(this.currentNavElement);
    }
    else if(textContent === "Shopping List"){
      this.currentNavElement = textContent;
      // console.log(this.currentNavElement);
    }
  }
}
