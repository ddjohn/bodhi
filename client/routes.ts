console.log("Loading <app.ts>...");

/* Framework */
import "reflect-metadata";
import {provideRouter, RouterConfig} from '@angular/router';

/* Stuff */
import {Top5List} from "./imports/top5-list.ts";
import {Top5Details} from "./imports/top5-details.ts";

const routes: RouterConfig = [
  {path: "",            component: Top5List},
  {path: "top5",	component: Top5List},
  {path: "top5/:id",	component: Top5Details},
];
 
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]; 
