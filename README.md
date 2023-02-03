# ng-date-utils

AngularJS filter to show dates always in UTC

## Usage

- `toUTC` filter is wrapper around AngularJs date filter. It always show the date in UTC. This is nice to show things like birthday dates without being affected by browser timezones.

You can pass one optionnal parameter

- customFormat: by default `'longDate'`. To customize it [see here](https://docs.angularjs.org/api/ng/filter/date)

### Example

```sh
npm add ng-date-utils
```

```ts
import { ngDateUtils } from "ng-date-utils";

angular.module("myApp", ngDateUtils.name).controller("controller", ($scope) => {
	$scope.birthday = "1984-03-11";
	// It can accepts Dates too or complete isodate strings
	$scope.birthday = new Date();
});
```

```html
<p>Showing date { birthday | toUTC }</p>
// This will show March 11, 1984
```
