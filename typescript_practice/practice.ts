import { DateTime } from "luxon";

const date: DateTime = DateTime.fromJSDate(new Date("2022-04-10")).startOf(
  "day"
);

console.log(date.toRelative());
