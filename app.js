function mostrarResultados() {
    const pessoas = parseInt(document.getElementById('pessoas').value);
    const horas = parseInt(document.getElementById('horas').value);
    
    if (!pessoas || !horas) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    const resultados = calcularConsumo(pessoas, horas);
    
    document.getElementById('resultados').innerHTML = `
        <h3>Resultados para ${pessoas} pessoas e ${horas} horas de festa:</h3>
        <ul>
            <li><strong>Carne:</strong> ${resultados.carne} kg</li>
            <li><strong>Bebidas Alcoólicas:</strong> ${resultados.bebidas} latas/copos</li>
            <li><strong>Refrigerantes:</strong> ${resultados.refrigerantes} litros</li>
            <li><strong>Água:</strong> ${resultados.agua} litros</li>
            <li><strong>Arroz:</strong> ${resultados.arroz} kg</li>
            <li><strong>Farofa:</strong> ${resultados.farofa} kg</li>
            <li><strong>Vinagrete:</strong> ${resultados.vinagrete} kg</li>
            <li><strong>Salada:</strong> ${resultados.salada} kg</li>
            <li><strong>Doces Típicos:</strong> ${resultados.doces} unidades</li>
            <li><strong>Salgados Típicos:</strong> ${resultados.salgados} unidades</li>
            <li><strong>Mesas Necessárias:</strong> ${resultados.mesas} mesas</li>
            <li><strong>Cadeiras Necessárias:</strong> ${resultados.cadeiras} cadeiras</li>
        </ul>
    `;
}

function calcularConsumo(pessoas, horas) {
    const carne = (dados.alimentos.carne.quantidadePorPessoa * pessoas).toFixed(2);
    const bebidas = (dados.alimentos.bebidas.quantidadePorPessoa * pessoas * horas).toFixed(2);
    const refrigerantes = (dados.alimentos.refrigerantes.quantidadePorPessoa * pessoas).toFixed(2);
    const agua = (dados.alimentos.agua.quantidadePorPessoa * pessoas).toFixed(2);
    const arroz = (dados.alimentos.arroz.quantidadePorPessoa * pessoas).toFixed(2);
    const farofa = (dados.alimentos.farofa.quantidadePorPessoa * pessoas).toFixed(2);
    const vinagrete = (dados.alimentos.vinagrete.quantidadePorPessoa * pessoas).toFixed(2);
    const salada = (dados.alimentos.salada.quantidadePorPessoa * pessoas).toFixed(2);
    const doces = (dados.alimentos.doces.quantidadePorPessoa * pessoas).toFixed(0);
    const salgados = (dados.alimentos.salgados.quantidadePorPessoa * pessoas).toFixed(0);

    const mesas = Math.ceil(dados.organizacao.mesas.quantidadePorPessoa * pessoas);
    const cadeiras = Math.ceil(dados.organizacao.cadeiras.quantidadePorPessoa * pessoas);

    return {
        carne, bebidas, refrigerantes, agua, arroz, farofa, vinagrete, salada, doces, salgados, mesas, cadeiras
    };
}
