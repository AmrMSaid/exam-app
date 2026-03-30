export function slugify(str: string) {
  return str
    .split(" ")
    .map((i) => i.toLowerCase())
    .join("-");
}
