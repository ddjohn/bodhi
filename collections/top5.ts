console.log("Loading <top5>...");

import {Mongo} from "meteor/mongo";

export const Top5 = new Mongo.Collection<Top5>("top5");
