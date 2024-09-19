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
        let leftDistance = coordinate.x - dot.radius;
        let bottomDistance = coordinate.y - dot.radius;
        dotHtml += `<div style="display: block; border-radius: 50%; border: 1${unit} solid ${dot.borderColor}; backgroundColor: ${dot.backgroundColor}; position: relative; left: ${leftDistance}${unit}; bottom: ${bottomDistance}${unit}"></div>`;
    }

    return `<div class="dots" style="width: ${settings.width}${unit}; height:${settings.height}${unit}>` 
            + dotHtml 
            + `</div>`;
}