export function converter(unit, from) {
  if (unit === "*") {
    return Number.parseInt(from) * 1024;
  }

  if (unit === "/") {
    return Number.parseInt(from) / 1024;
  }
}
