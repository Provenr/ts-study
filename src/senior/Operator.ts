// ==========================================
// keyof

type Person = {
  name: string;
  age: number;
}
type PersonKey = keyof Person;

let a: PersonKey

function getValue(p: Person, k: keyof Person){
  return p[k]
}

enum Vehicles {
  Bike, Plane
}
interface Vehicle {
  speed: number;
  type: Vehicles;
}