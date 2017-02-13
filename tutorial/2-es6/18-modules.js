// named exports
import { pie, helloworld } from './mods';

// everything
import * as lib from './mods';

helloworld();
console.log(pie);
var h = new lib.Hello();

// node 18-modules.js (FAILS)
// must run babel-node 18-modules.js
