console.log("Loading <main.ts>...");

/* Framework */
import {startupMain} from './startup-main.ts';
import {Meteor} from 'meteor/meteor';

/* Stuff */
import "./top5-publish.ts";
import "/collections/methods.ts";

Meteor.startup(startupMain);

