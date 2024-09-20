import { Coordinate } from "./Coordinate";
import { Dot } from "../public/Dot";

export class DotCoordinateInfo {
    dot: Dot;
    coordinate: Coordinate;
    constructor(dot: Dot, coordinate: Coordinate) {
        this.dot = dot;
        this.coordinate = coordinate;
    }
}
