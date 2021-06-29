export function getTime() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes()]
    .map((x) => {
      return x < 10 ? `0${x}` : x;
    })
    .join(":");
  return time;
}
