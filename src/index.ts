import angular from "angular";
import toUTC from "./lib/to-utc";

const ngDateUtils = angular.module("ngDateUtils", []);

ngDateUtils.filter("toUTC", toUTC);

export { ngDateUtils };
