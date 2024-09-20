import { DotCoordinateInfo } from "./DotCoordinateInfo";
import { random } from "./random";
import { Coordinate } from "./Coordinate";
import { distance } from "./distance";
import { Dot } from "../public/Dot";

export function getDotCoordinateInfos(dots: Dot[], coordinates: Coordinate[]) {
    let dotCoordinateInfo: DotCoordinateInfo[] = [];
    for (let dot of dots) {
        let radius = dot.radius;
        let eligableCoordinates = coordinates.filter(x => x.distance > radius);
        if (eligableCoordinates.length == 0) {
            throw "The area is too small (or the size of the dots too big).";
        }
        let chosenCoordinate = random(eligableCoordinates);
        dotCoordinateInfo.push(new DotCoordinateInfo(dot, chosenCoordinate));

        for (let coordinate of coordinates) {
            let d = Math.max(0, distance(coordinate, chosenCoordinate) - dot.radius);
            if (coordinate.distance > d) {
                coordinate.distance = d;
            }
        }
    }
    return dotCoordinateInfo;
}
