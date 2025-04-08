export const getFormattedDateTime = (time: Date | number | undefined) => {
  const timeObject = typeof time === "number" ? new Date(time) : time;
  if (!timeObject) return { time: "", date: "" };
  const zPad = (num: number) => num.toString().padStart(2, "0");
  return {
    time: `${zPad(timeObject.getHours())}:${zPad(timeObject.getMinutes())}`,
    date: `${timeObject.getFullYear()}-${zPad(timeObject.getMonth())}-${zPad(timeObject.getDate())}`,
  };
};
