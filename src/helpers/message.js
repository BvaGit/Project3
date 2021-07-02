import moment from "moment-timezone";

export function getTime() {
  const ukraine = moment(new Date()).tz("Europe/Kiev");
  return ukraine.format();
}
