import { getDotCoordinateInfos } from "../internal/getDotCoordinateInfos";
import { getCoordinates as getCoordinates } from "../internal/getCoordinates";
import { Settings } from "./Settings";
import { DotCoordinateInfo } from "../internal/DotCoordinateInfo";
import { Coordinate } from "../internal/Coordinate";

export function getHtml(settings : Settings) : string {
    const coordinates : Coordinate[] = getCoordinates(settings);
    const dotCoordinateInfos: DotCoordinateInfo[] = getDotCoordinateInfos(settings.dots, coordinates);
    const unit = settings.unit;
    let dotHtml = '';
    for (const info of dotCoordinateInfos) {
        const dot = info.dot;
        const coordinate = info.coordinate;
        const left = coordinate.x - dot.radius;
        const top = coordinate.y - dot.radius;
        dotHtml += `<div style="position: absolute; left: ${left}${unit}; top: ${top}${unit}; display: block; width:${2 * dot.radius}${unit}; height: ${2 * dot.radius}${unit}; border-radius: 50%; background-color: ${dot.color}"></div>`;
    }
    return `<div class="dotsy" style="position: relative; width: ${settings.width}${unit}; height:${settings.height}${unit}">` 
            + dotHtml
            + `</div>`;
}