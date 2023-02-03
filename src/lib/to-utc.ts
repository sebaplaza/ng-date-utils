import type { FilterFactory } from "angular";

const toUTC: FilterFactory = ($filter: Function) => {
	return (dateValue: string | Date, customFormat: string) => {
		let oneDate;

		// Empty param
		if (dateValue === undefined || dateValue === null || dateValue === "") {
			return "";
		}
		// Sometimes the given parameter is a Date instance, we convert it to ISOstring before applying filter
		else if (dateValue instanceof Date) {
			oneDate = dateValue.toISOString();
		} else {
			// Handles previous values where there were only the date format in dateValue
			oneDate = new Date(dateValue).toISOString();
		}

		// We filter the date in UTC 0
		const dateFormat = customFormat ?? "longDate";
		const filteredDate = $filter("date")(oneDate, dateFormat, "UTC");
		return filteredDate;
	};
};

toUTC.$inject = ["$filter"];

export default toUTC;
