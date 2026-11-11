Questão 1
  <header>
  <nav>
  <article>
  Os benefícios em utilizar essas tags estão principalmente associados a facilidade de interpretação dos leitores de tela ao acessarem a página e relacionado também ao SEO(Search Engine Optimization) que serve para buscadores como o google a compreender melhor a organização e a função dos conteúdos o que contribui para sua interpretação e indexação.

Questão 2
  Em relação ao escopo, let e const possuem a mesma regra, só podem ser acessados dentro do bloco que foram declarados.
  Já em relação a reatribuição let permite alterar o valor da variável, enquanto const não permite reatribuir um novo valor após sua inicialização.
  E no exemplo citado: `const lista = []` `lista.push(1)` Isso se torna possível porque conts impede a reatribuição de uma variável mas não a modificação de um array ou objeto.

Questão 3
  Utiliza-se useState porque ele permite que o React atualize a interface automaticamente quando o estado muda, já uma variável do tipo let não provoca uma nova renderização quando seu valor é alterado.
  E não devemos usar itens.push(novo) seguido de setItens(itens) porque o push modifica diretamente o array original, manetendo a mesma referência na memória, como o react compara referências dos estados, ele pode acabar não detectando as mudança e não atualizar a página.
  A maneira correta de fazer isso é da seguinte forma:

  //Declarando o useState
  const [itens, setItens] = useState([]);
  
  //Repassar os dados já existentes fazendo um spread e adicionando o novo
  setItens(anteriores => [...anteriores, novo]);