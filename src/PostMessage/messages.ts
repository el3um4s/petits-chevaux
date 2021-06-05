import match from "../Utility/match"
import { loaderLayoutComplete, canSpin } from "../store/settings"
import { resultsBoule } from "../store/results";


export function typeStatus(content:string) {
    match(content)
        .on(c => c.toLowerCase() === "loader layout complete", () => loaderLayoutComplete.setTrue())
        .on(c => c.toLowerCase() === "playing", () => canSpin.setFalse())
        .on(c => c.toLowerCase() === "no play", () => canSpin.setTrue())
        .otherwise(c => () => 0);
}

export function typeWin(content:string){
    const num: string = content[0];
    const distance: number = parseInt(content.slice(content.indexOf(":")+1, content.length).trim());
    resultsBoule.addResult({num, distance});
}