import _ from "lodash";
import { sayHi } from "./util";

import "../scss/index.scss";

console.log("Hi from index.js");

sayHi();

const foo = (name) => {
	return console.log(`Hi ${name}!`);
};

foo("Rakko");
