function decode(message) {
    const stack = [];
    let resultado = '';
  
    for (const char of message) {
      if (char === '(') {
        stack.push('');
      } else if (char === ')') {
        if (stack.length > 0) {
          const contenido = stack.pop().split('').reverse().join('');
          if (stack.length > 0) {
            stack[stack.length - 1] += contenido;
          } else {
            resultado += contenido;
          }
        }
      } else {
        if (stack.length > 0) {
          stack[stack.length - 1] += char;
        } else {
          resultado += char;
        }
      }
    }
  
    return resultado;
}
  
