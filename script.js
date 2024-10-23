 // Armazenar os dados 
  let dados = [];

  // Gerar ID aleatório com 5 dígitos 
  function gerarld(){ 
    return Marth.floor(10000 + Math.random() *90000);
  }

  // Adicionar dado à tabela
  document.getElementByld('form').addEventListener('submit' function(event) {
    event.preventDefault();

    const descricao = document.getElementByld('descricao').value;
    const valor = parseFloat(document.getElementByld('valor').value.replace(',','.')); // Aceita centavos 
    const tipo = document.getElementByld('tipo').value;