// Lista simulando um banco de dados de heróis para utilizarmos um laço de repetição
const herois = [
    { nome: "Aria", xp: 850 },     // Teste Ferro
    { nome: "Kael", xp: 4500 },    // Teste Prata
    { nome: "Lira", xp: 8500 },    // Teste Ascendente
    { nome: "Thal", xp: 12000 }    // Teste Radiante
];

// Laço de repetição (for...of) para passar por cada herói da matriz
for (let heroi of herois) {
    
    // Variáveis recebendo os valores
    let nome = heroi.nome;
    let xp = heroi.xp;
    let nivel = "";
    
    // Estruturas de decisões (if/else if) e Operadores lógicos (&&, <=, >=)
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }
    
    // Saída utilizando Template Literals (crases) para embutir as variáveis na string
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}
