console.log("Loading <top5-list.ts>...");

import "reflect-metadata";
import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {Mongo} from "meteor/mongo";

import {Top5} from "/collections/top5.ts"; 
import {Top5Form} from "./top5-form.ts"; 

@Component({
  selector: "top5-list",
  template: `

  <top5-form></top5-form>

  <hr>

  <h2>Top5 - List</h2>
  <table class="table table-hover">
    <tr><th>Category</th><th>Name</th><th>Actions</th></tr>
    <tr *ngFor="let i of top5">
      <td>{{i.category}}</td>
      <td><a [routerLink]="['/top5', i._id]">{{i.name}}</a></td>
      <td><button (click)="remove(i)">X</button></td>
    </tr>
  </table>
  `,
  directives: [Top5Form, ROUTER_DIRECTIVES],
})

export class Top5List { 
   top5: Mongo.Cursor<Top5>;

   constructor() {
     console.log("main::constructor");
     this.top5 = Top5.find();
   }

  remove(i) {
    Top5.remove(i._id);
  }
}
