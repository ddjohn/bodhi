console.log("Loading <main.ts>...");

import {startupMain} from './startup-main.ts';
import {Meteor} from 'meteor/meteor';

Meteor.startup(startupMain);

