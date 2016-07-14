console.log("Loading <footer.ts>...");

import "reflect-metadata";
import {Component} from "@angular/core";

@Component({
  selector: "my-footer",
  template: `
    <footer class="footer">
      <div class="container">
        <p class="text-muted">Copyright ddjohn@gmail.com 2016 - using Angular2, Meteor, MongoDB</p>
      </div>
    </footer>
  `,
//Hmmm  styleUrl: "./footer.css",
})

export class MyFooter { }
