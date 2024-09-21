import { DotCoordinateInfo } from "./DotCoordinateInfo";
import { random } from "./random";
import { Coordinate } from "./Coordinate";
import { distance } from "./distance";
import { Dot } from "../public/Dot";

export function getDotCoordinateInfos(dots: Dot[], coordinates: Coordinate[]) {
    const dotCoordinateInfos: DotCoordinateInfo[] = [];
    for (const dot of dots) {
        const radius = dot.radius;
        const eligableCoordinates = coordinates.filter(x => x.distance > radius);
        if (eligableCoordinates.length == 0) {
            throw "The area is too small (or the size of the dots too big).";
        }
        const chosenCoordinate = random(eligableCoordinates);
        dotCoordinateInfos.push(new DotCoordinateInfo(dot, chosenCoordinate));

        for (const coordinate of coordinates) {
            const d = Math.max(0, distance(coordinate, chosenCoordinate) - dot.radius);
            if (coordinate.distance > d) {
                coordinate.distance = d;
            }
        }
    }
    return dotCoordinateInfos;
}
