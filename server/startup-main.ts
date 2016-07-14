console.log("Loading <startup-main.ts>...");

import { Top5 } from "../collections/top5.ts";
 
export function startupMain() {
  if (Top5.find().count() === 0) {

    var top5 = [
      {
        category: "Band",
        name: "Led Zeppelin",
      },
      {
        category: "Band",
        name: "Pink Floyd",
      },
    ];

    for (var i = 0; i < top5.length; i++) {
      Top5.insert(top5[i]);
    }
  }
}

