import _ from "lodash";
import "../scss/main.scss";
import { sayHi } from "./util";

sayHi();
console.log(_.join(["Index", "module", "loaded!"], " "));
