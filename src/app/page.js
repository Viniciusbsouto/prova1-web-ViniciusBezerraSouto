'use client';

import { useState } from 'react';
import CardLivro from '../components/CardLivro';
import styles from './page.module.css';

const livros = [
  { id: 1, titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", disponivel: true },
  { id: 2, titulo: "Código Limpo", autor: "Robert C. Martin", disponivel: false },
  { id: 3, titulo: "Entendendo Algoritmos", autor: "Aditya Bhargava", disponivel: true },
  { id: 4, titulo: "Projeto de Algoritmos", autor: "Nivio Ziviani", disponivel: true },
  { id: 5, titulo: "O Programador Pragmático", autor: "Andrew Hunt e David Thomas", disponivel: true },
];

export default function Home() {
  const [reservas, setReservas] = useState([]);
  const limiteAtingido = reservas.length >= 3;

  function reservar(livro) {
    setReservas((atuais) => {
      if (!livro.disponivel || atuais.length >= 3 || atuais.some((reserva) => reserva.id === livro.id)) {
        return atuais;
      }

      return [...atuais, livro];
    });
  }

  function cancelar(id) {
    setReservas((atuais) => atuais.filter((livro) => livro.id !== id));
  }

  return (
    <main className={styles.pagina}>
      <h1>Biblioteca do Campus</h1>

      <section className={styles.reservas}>
        <h2>Reservas ({reservas.length}/3)</h2>
        {limiteAtingido && <p>Limite de 3 reservas atingido</p>}
        <ul className={styles.listaReservas}>
          {reservas.map((livro) => (
            <li key={livro.id}>
              {livro.titulo}{' '}
              <button onClick={() => cancelar(livro.id)}>Cancelar</button>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.livros}>
        {livros.map((livro) => (
          <CardLivro
            key={livro.id}
            livro={livro}
            reservado={reservas.some((reserva) => reserva.id === livro.id)}
            limiteAtingido={limiteAtingido}
            onReservar={reservar}
          />
        ))}
      </div>
    </main>
  );
}
