import { config } from "../data/config";

export function converter(category, index, from) {
  const unitCofig = config[category].units[index];

  if (unitCofig.operator === "*") {
    return Number.parseInt(from) * unitCofig.conversionRate;
  }

  if (unitCofig.operator === "/") {
    return Number.parseInt(from) / unitCofig.conversionRate;
  }
}
