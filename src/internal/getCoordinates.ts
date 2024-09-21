import { Coordinate } from "./Coordinate";
import { difference } from "./difference";
import { Settings } from "../public/Settings";

export function getCoordinates(settings: Settings) : Coordinate[] {
    const coordinates = [];
    for (let x = 0; x < settings.width; x++) {
        for (let y = 0; y < settings.height; y++) {
            const initialDistance = Math.min(
                x + 1, difference(x, settings.width),
                y + 1, difference(y, settings.height)
            );

            coordinates.push(new Coordinate(x, y, initialDistance));
        }
    }
    return coordinates;
}
