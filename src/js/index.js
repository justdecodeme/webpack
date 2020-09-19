import _ from "lodash";

import "../scss/index.scss";
import "../css/test.css";

import { sayHi } from "./util";

sayHi();
console.log(_.join(["Index", "module", "loaded!"]));

const foo = (name) => {
	return console.log(`Hi ${name}!`);
};

foo("Rakko");
