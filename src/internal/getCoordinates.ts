import { Coordinate } from "./Coordinate";
import { diff } from "../helpers/diff";
import { min } from "../helpers/min";
import { Settings } from "../Settings";

export function getCoordinates(settings: Settings): Coordinate[] {
    let coordinates = [];
    for (let x = 0; x < settings.width; x++) {
        for (let y = 0; y < settings.height; y++) {
            let initialDistance = min(
                min(x + 1, diff(x, settings.width)),
                min(y + 1, diff(y, settings.height))
            );

            coordinates.push(new Coordinate(x, y, initialDistance));
        }
    }
    return coordinates;
}
