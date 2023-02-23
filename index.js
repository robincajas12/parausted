const resultado = [];

function y(x)
{
    const dividendo = 1;
    console.log(dividendo)
    const divisor = Math.pow(x,2) - (4*x) - 4
    console.log(divisor)
    const result = dividendo / divisor;
    console.log(`${dividendo} / ${divisor}`)
    return result +  ` | ${dividendo} / ${divisor}`;
}

for(let i = -20 ; i < 20; i++)
{
    console.log('x', i % 10)
    // if(i % 5 !== 0) continue;
    resultado.push(`x: ${i} | y: ` + y(i)); 
}

console.log(resultado);