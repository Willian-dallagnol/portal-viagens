import React from 'react'
import styles from '../styles/CardDestino.module.css'

interface CardDestinoProps {
  nome: string
  imagem: string
  estado: string
  favorito?: boolean
  onToggleFavorito?: () => void
}

const CardDestino: React.FC<CardDestinoProps> = ({
  nome,
  imagem,
  estado,
  favorito,
  onToggleFavorito,
}) => (
  <div className={styles.card}>
    <div className={styles.imagemWrapper}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      {onToggleFavorito && (
        <button
          className={`${styles.favBtn} ${favorito ? styles.favAtivo : ''}`}
          onClick={e => { e.preventDefault(); onToggleFavorito() }}
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-pressed={favorito}
        >
          ★
        </button>
      )}
    </div>
    <div className={styles.corpo}>
      <h2 className={styles.nome}>{nome}</h2>
      <span className={styles.estado}>{estado}</span>
    </div>
  </div>
)

export default CardDestino
