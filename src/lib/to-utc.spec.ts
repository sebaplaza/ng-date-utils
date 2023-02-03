import angular, { IFilterFunction } from "angular";
import { describe, it, expect, beforeEach } from "vitest";
import toUTC from "./to-utc";

describe("toUTC", () => {
	let $filter: IFilterFunction;
	let filter: Function;
	beforeEach(async () => {
		const inject = angular.injector(["ng"]).invoke;
		inject((_$filter_) => {
			$filter = _$filter_;
			filter = toUTC($filter);
		});
	});

	it("should accept empty date", () => {
		const result = filter();
		expect(result).toBe("");
	});

	it("should set default", () => {
		const result = filter("2022-03-11");
		expect(result).toBe("March 11, 2022");
	});

	it("should accept hours too", () => {
		const result = filter("2022-03-11T23:30:30");
		expect(result).toBe("March 11, 2022");
	});

	it("should change date to UTC", () => {
		const result = filter("2022-03-11T23:30:30-03:00");
		expect(result).toBe("March 12, 2022");
	});

	it("should accept a Date object", () => {
		const result = filter(new Date("2022-03-11"));
		expect(result).toBe("March 11, 2022");
	});

	it("should accept a Date object with a different format", () => {
		const result = filter(new Date("2022-03-11"), "yyyy MMM dd");
		expect(result).toBe("2022 Mar 11");
	});
});
