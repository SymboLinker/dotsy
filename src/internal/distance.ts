import { Coordinate } from "./Coordinate";

export function distance(a : Coordinate, b : Coordinate) : number {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}