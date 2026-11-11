const formulario = document.querySelector('#form-conta');
const campoTotal = document.querySelector('#total');
const campoPessoas = document.querySelector('#pessoas');
const campoGorjeta = document.querySelector('#gorjeta');
const erro = document.querySelector('#erro');
const resultado = document.querySelector('#resultado');

function calcularDivisao(total, pessoas, percentual) {
  const gorjeta = total * percentual / 100;
  const totalComGorjeta = total + gorjeta;
  const porPessoa = totalComGorjeta / pessoas;

  return { gorjeta, totalComGorjeta, porPessoa };
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const total = Number(campoTotal.value);
  const pessoas = Number(campoPessoas.value);
  const percentual = Number(campoGorjeta.value);

  if (campoTotal.value.trim() === '' || !Number.isFinite(total) || total <= 0) {
    erro.textContent = 'Informe um valor da conta maior que zero.';
    resultado.textContent = '';
    return;
  }

  if (!Number.isInteger(pessoas) || pessoas < 1) {
    erro.textContent = 'Informe um número inteiro de pessoas maior ou igual a 1.';
    resultado.textContent = '';
    return;
  }

  erro.textContent = '';

  const { gorjeta, totalComGorjeta, porPessoa } = calcularDivisao(total, pessoas, percentual);
  const formatar = (valor) => valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  resultado.textContent = `Gorjeta: R$ ${formatar(gorjeta)} - Total: R$ ${formatar(totalComGorjeta)} - Por pessoa: R$ ${formatar(porPessoa)}`;
});
