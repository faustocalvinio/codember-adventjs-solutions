function adjustLights(lights) {
    let cambiosNecesarios = 0;  
    for (let i = 1; i < lights.length; i++) {
      if (lights[i] === lights[i - 1]) {
        lights[i] = lights[i - 1] === '🔴' ? '🟢' : '🔴';
        cambiosNecesarios++;
      }
    }  
    return cambiosNecesarios;
}

  