console.log("Loading <top5-details.ts>...");

import "reflect-metadata";
import {Component, NgZone } from '@angular/core';
import {Mongo} from "meteor/mongo";
import { ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MeteorComponent } from 'angular2-meteor';


import {Top5} from "/collections/top5.ts"; 

@Component({
  selector: "top5-details",
  template: `
  <h2>Top5 - Details</h2>
<!-- form #f="ngForm" (submit)="save(top5)" [ngFormModel]="top5Form" *ngIf="top5" -->
<form #f="ngForm" (submit)="save(top5)" *ngIf="top5">
  <label>Category</label>
  <input class="form-control" type="text" [(ngModel)]="top5.category">
 
  <label>Name</label>
  <input class="form-control" type="text" [(ngModel)]="top5.name">
 
  <p>&nbsp;</p>

  <button class="btn btn-default" type="submit">Save</button>
  <button class="btn btn-default" [routerLink]="['/top5']">Cancel</button>
</form>
  `,
  directives: [ROUTER_DIRECTIVES],
})

export class Top5Details extends MeteorComponent { 
  id: string;
  top5: Top5;
 
  constructor(private route: ActivatedRoute, private ngZone: NgZone) {
    super();
  }
 
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.subscribe('top5', () => {
        Tracker.autorun(() => {
          this.ngZone.run(() => {
             this.top5 = Top5.findOne(this.id);
          }, true);
        });
      });
    });
  }

  save(top5) {
    Top5.update(top5._id, {
      $set: {
        category: top5.category,
        name: top5.name,
      }
    });
  }
}
