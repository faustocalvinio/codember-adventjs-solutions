function cyberReindeer(road, time) {
    // Code here
    let posicionSanta = road.indexOf("S");
    let respuestaFinal = [road];

    for (let index = 1; index < time; index++) {
        const posicionNueva = [...respuestaFinal.at(-1)];

        if (index >= 5 || road[posicionSanta + 1] === '.') {
            posicionNueva[posicionSanta] = index === 1 ? '.' : road[posicionSanta]
            posicionSanta++
            posicionNueva[posicionSanta] = 'S'
        }
        const nuevoPaso = index < 5 ? posicionNueva.join('') : posicionNueva.join('').replaceAll('|', '*')
        respuestaFinal.push(nuevoPaso)
    }
    return respuestaFinal;
}