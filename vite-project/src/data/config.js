export const config = {
  storage: {
    label: "Digital Storage",
    units: [
      {
        label: "GigaByte -> MegaByte",
        operator: "*",
        conversionRate: 1024,
      },
      {
        label: "MegaByte -> KiloByte",
        operator: "*",
        conversionRate: 1024,
      },
      {
        label: "MegaByte -> GigaByte",
        operator: "/",
        conversionRate: 1024,
      },
      {
        label: "KiloByte -> MegaByte",
        operator: "/",
        conversionRate: 1024,
      },
    ],
  },
  length: {
    label: "Length",
    units: [
      {
        label: "Kilometre -> Meter",
        operator: "*",
        conversionRate: 1000,
      },
      {
        label: "Meter -> Centimeter",
        operator: "*",
        conversionRate: 100,
      },
      {
        label: "Centimeter -> Millimetre",
        operator: "*",
        conversionRate: 1000,
      },
    ],
  },
  mass: {
    label: "Mass",
    units: [
      {
        label: "Kilogram -> Gram",
        operator: "*",
        conversionRate: 1000,
      },
      {
        label: "Gram -> Milligram",
        operator: "*",
        conversionRate: 1000,
      },
    ],
  },
};
