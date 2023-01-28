export const range = (start: number, stop: number) =>
  Array(stop - start + 1)
    .fill((x: number) => x)
    .map((_, i) => start + i);
