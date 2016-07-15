console.log("Loading <header.ts>...");

/* Framework */
import "reflect-metadata";
import {Component} from "@angular/core";
import { LoginButtons } from 'angular2-meteor-accounts-ui';

@Component({
  selector: "my-header",
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container" style="color: white; text-align: right;">
            <login-buttons></login-buttons>
      </div>
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Avelon's Place</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/top5">Top5</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  directives: [LoginButtons]
})

export class MyHeader { }
