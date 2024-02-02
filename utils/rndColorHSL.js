import {getRandomNumber} from "";

export function getRandomHSLcolor(){
    const h = getRandomNumber(300);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);

    return `${h}, ${s}%, ${l}%`;
}