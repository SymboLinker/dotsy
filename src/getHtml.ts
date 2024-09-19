import { getDotCoordinateInfos } from "./internal/getDotCoordinateInfos";
import { getCoordinates as getCoordinates } from "./internal/getCoordinates";
import { Settings } from "./Settings";
import { DotCoordinateInfo } from "./internal/DotCoordinateInfo";
import { Coordinate } from "./internal/Coordinate";

export function getHtml(settings : Settings) : String {
    let coordinates : Coordinate[] = getCoordinates(settings);
    let dotCoordinateInfo: DotCoordinateInfo[] = getDotCoordinateInfos(settings.dots, coordinates);

    let unit = 'px';
    let dotHtml = '';
    for (let info of dotCoordinateInfo) {
        let dot = info.dot;
        let coordinate = info.coordinate;
        let left = coordinate.x - dot.radius;
        let top = coordinate.y - dot.radius;
        dotHtml += `<div style="display: block; width:${2 * dot.radius}${unit}; height: ${2 * dot.radius}${unit}; border-radius: 50%; border: 1${unit} solid ${dot.borderColor}; background-color: ${dot.backgroundColor}; position: absolute; left: ${left}${unit}; top: ${top}${unit}"></div>`;
    }

    return `<div class="dots" style="position: relative; width: ${settings.width}${unit}; height:${settings.height}${unit}">` 
            + dotHtml 
            + `</div>`;
}