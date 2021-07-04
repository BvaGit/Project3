import moment from "moment-timezone";

export function getTime() {
  const ukraine = moment(new Date()).tz("Europe/Kiev");
  return ukraine.format();
}
export const sortByDateCreate = (messages) => messages.sort((a, b) => {
    return moment(moment(a.date_create)).diff(moment(b.date_create));
  });
