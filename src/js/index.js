import _ from "lodash";

import "../scss/index.scss";

// import "./css/main.css";

import { sayHi } from "./util";

sayHi();
console.log(_.join(["Index", "module", "loaded!"]));
