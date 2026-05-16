'use client'

import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import CardDestino from '../../components/CardDestino'
import Link from 'next/link'
import { fetchDestinos } from '../../data/api'
import type { Destino } from '../../data/destinos'

export default function Destinos() {
  const [busca, setBusca] = useState('')
  const [destinos, setDestinos] = useState<Destino[]>([])
  const [favoritos, setFavoritos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDestinos().then(data => {
      setDestinos(data)
      setLoading(false)
    })
    try {
      const fav = localStorage.getItem('favoritos')
      setFavoritos(fav ? JSON.parse(fav) : [])
    } catch {
      setFavoritos([])
    }
  }, [])

  function toggleFavorito(id: string) {
    const novos = favoritos.includes(id)
      ? favoritos.filter(f => f !== id)
      : [...favoritos, id]
    setFavoritos(novos)
    localStorage.setItem('favoritos', JSON.stringify(novos))
  }

  const destinosFiltrados = destinos.filter(d =>
    d.nome.toLowerCase().includes(busca.toLowerCase()) ||
    d.estado.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <Layout>
      <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 24 }}>
        Destinos Turísticos
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <input
          type="search"
          placeholder="Buscar destino ou estado..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          aria-label="Buscar destino"
          style={{
            padding: '10px 16px',
            borderRadius: 10,
            border: '1.5px solid #1976d2',
            width: 300,
            fontSize: '1rem',
            outline: 'none',
          }}
        />
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{
            display: 'inline-block',
            width: 36,
            height: 36,
            border: '3px solid #e3eaf5',
            borderTopColor: '#1976d2',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} aria-label="Carregando" />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      ) : destinosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Nenhum destino encontrado.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {destinosFiltrados.map(destino => (
            <Link key={destino.id} href={`/destinos/${destino.id}`} style={{ textDecoration: 'none' }}>
              <CardDestino
                nome={destino.nome}
                imagem={destino.imagem}
                estado={destino.estado}
                favorito={favoritos.includes(destino.id)}
                onToggleFavorito={() => toggleFavorito(destino.id)}
              />
            </Link>
          ))}
        </div>
      )}
    </Layout>
  )
}
