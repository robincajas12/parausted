const resultado = [];

function y(x)
{
    const dividendo = (4 * Math.pow(x, 2));
    console.log(dividendo)
    const divisor = Math.pow(x, 2) - 9;
    console.log(divisor)
    const result = dividendo / divisor;
    return result;
}

for(let i = -20 ; i < 20; i++)
{
    console.log('x', i % 10)
    // if(i % 5 !== 0) continue;
    resultado.push(`x: ${i} | y: ` + y(i)); 
}

console.table(resultado);