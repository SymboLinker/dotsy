export function random<T>(array : T[]) {
    return array[getRandomInt(array.length)];
}

function getRandomInt(exclusiveMax : number) {
    return Math.floor(Math.random() * exclusiveMax);
  }