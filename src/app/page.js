import styles from './page.module.css';

const livros = [
  { id: 1, titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", disponivel: true },
  { id: 2, titulo: "Código Limpo", autor: "Robert C. Martin", disponivel: false },
  { id: 3, titulo: "Entendendo Algoritmos", autor: "Aditya Bhargava", disponivel: true },
  { id: 4, titulo: "Projeto de Algoritmos", autor: "Nivio Ziviani", disponivel: true },
  { id: 5, titulo: "O Programador Pragmático", autor: "Andrew Hunt e David Thomas", disponivel: true },
];

export default function Home() {
  return (
    <div>
      <main>
        <h1>Prova 1 - Programação Web</h1>
      </main>
    </div>
  );
}
