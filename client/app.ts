console.log("Loading <app.ts>...");

/* Framework */
import "reflect-metadata";
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES } from '@angular/router';
import {LoginButtons} from 'angular2-meteor-accounts-ui';


/* Stuff */
import {MyHeader} from "./imports/header.ts";
import {MyFooter} from "./imports/footer.ts";

@Component({
  selector: "app",
  template: `
	<my-header></my-header>

	<div class="container">
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<router-outlet></router-outlet>
	</div>

	<my-footer></my-footer>`,
  directives: [MyHeader, MyFooter, ROUTER_DIRECTIVES],
})

export class Application { }

