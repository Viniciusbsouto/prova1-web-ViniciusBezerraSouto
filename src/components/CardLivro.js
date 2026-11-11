import styles from './CardLivro.module.css';

export default function CardLivro({ livro, reservado, limiteAtingido, onReservar }) {
  return (
    <article className={styles.card}>
      <h3>{livro.titulo}</h3>
      <p>{livro.autor}</p>
      {!livro.disponivel ? (
        <p>Emprestado</p>
      ) : reservado ? (
        <p>Reservado</p>
      ) : (
        <button disabled={limiteAtingido} onClick={() => onReservar(livro)}>
          Reservar
        </button>
      )}
    </article>
  );
}
