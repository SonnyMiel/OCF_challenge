const SEASONS = ["WINTER", "SPRING", "SUMMER", "FALL"];

export const getSeason = (date: Date): [string, number] => {
  let seasonIndex = 0;
  if (3 <= date.getMonth() && date.getMonth() <= 5)
    seasonIndex = 1;

  if (6 <= date.getMonth() && date.getMonth() <= 8)
    seasonIndex = 2;

  if (9 <= date.getMonth() && date.getMonth() <= 11)
    seasonIndex = 3;

  return [SEASONS[seasonIndex], seasonIndex];
};

export const getNextSeason = (index: number) => {
  if (index === SEASONS.length) return SEASONS[0];

  return SEASONS[index + 1];
}