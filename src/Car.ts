interface CarPrices {
  km:     number;
  minute: number;
  hour:   number;
  day:    number;
}

enum CarType {
  small = 'Small',
  cargo = 'Cargo',
  hatchbacks = 'Hatchbacks',
  crossover = 'Crossover',
  suv = 'SUV',
}

interface Car {
  name: string;
  type: string;
  price: CarPrices
}

export { CarType };
export type { Car };