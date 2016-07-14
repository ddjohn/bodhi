console.log("Loading <header.ts>...");

import "reflect-metadata";
import {Component} from "@angular/core";

@Component({
  selector: "my-header",
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Avelon's Place</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/top5">Top5</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  `,
})

export class MyHeader { }
