import { getCoordinates } from "./internal/getCoordinates";
import { Settings } from "./Settings";

export function getHtml(settings : Settings) : String {
    let coordinates = getCoordinates(settings);

    let dotHtml = '';

    let dots = settings.dots;
    for (let dot of dots) {
        let radius = dot.radius;

    }

    return '<div class="dots">' + dotHtml + '</div>';
}


