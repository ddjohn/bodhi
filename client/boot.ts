console.log("Loading <boot.ts>...");

/* Framework */
import {bootstrap} from "angular2-meteor-auto-bootstrap";
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

/* Stuff */
import {Application} from "./app.ts";
import {APP_ROUTER_PROVIDERS} from "./routes.ts";

bootstrap(Application, [
	APP_ROUTER_PROVIDERS, 
	provide(APP_BASE_HREF, {useValue: '/'})
]);
