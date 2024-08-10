export const dayColors: { [key: string]: string } = {
  monday: "blue",
  tuesday: "red",
  wednesday: "orange",
  thursday: "purple",
  friday: "hotpink",
  saturday: "brown",
  sunday: "green",
};

export const getColorForDay = (day: string) =>
  dayColors[day.toLowerCase()] || "black";
