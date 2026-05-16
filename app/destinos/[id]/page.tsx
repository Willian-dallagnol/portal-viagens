'use client'

import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { destinos } from '../../../data/destinos'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

interface Comentario {
  nome: string
  texto: string
}

export default function DestinoDetalhe({ params }: PageProps) {
  const { id } = React.use(params)
  const destino = destinos.find(d => d.id === id)

  const [comentarios, setComentarios] = useState<Comentario[]>([])
  const [nome, setNome] = useState('')
  const [texto, setTexto] = useState('')

  if (!destino) return notFound()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (nome.trim() && texto.trim()) {
      setComentarios(prev => [...prev, { nome: nome.trim(), texto: texto.trim() }])
      setNome('')
      setTexto('')
    }
  }

  return (
    <Layout>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{ color: '#1976d2', marginBottom: 4 }}>
          {destino.nome}{' '}
          <span style={{ fontSize: '1rem', color: '#888', fontWeight: 400 }}>({destino.estado})</span>
        </h2>

        <img
          src={destino.imagem}
          alt={destino.nome}
          style={{
            width: '100%',
            maxHeight: 320,
            objectFit: 'cover',
            borderRadius: 14,
            margin: '16px 0 24px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        />

        <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7, marginBottom: 24 }}>
          {destino.descricao}
        </p>

        <div style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <InfoRow label="🌤 Clima" value={destino.clima} />
          <InfoRow label="💡 Dicas" value={destino.dicas} />
          <InfoRow
            label="🌐 Site oficial"
            value={<a href={destino.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>{destino.link}</a>}
          />
          <InfoRow
            label="📍 Localização"
            value={<a href={destino.mapa} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>Ver no Google Maps</a>}
          />
        </div>

        <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 32 }}>
          <iframe
            width="100%"
            height="220"
            src={destino.video}
            title={`Vídeo de ${destino.nome}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 style={{ color: '#1976d2', marginBottom: 16 }}>Deixe sua avaliação</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              aria-label="Nome"
              style={{ padding: '10px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: '0.95rem' }}
            />
            <textarea
              placeholder="Compartilhe sua experiência..."
              value={texto}
              onChange={e => setTexto(e.target.value)}
              required
              rows={3}
              aria-label="Comentário"
              style={{ padding: '10px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: '0.95rem', resize: 'vertical' }}
            />
            <button
              type="submit"
              style={{
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '10px 0',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
            >
              Enviar avaliação
            </button>
          </form>

          {comentarios.length > 0 && (
            <div style={{ marginTop: 24 }}>
              <h4 style={{ color: '#1976d2', marginBottom: 12 }}>
                {comentarios.length} {comentarios.length === 1 ? 'avaliação' : 'avaliações'}
              </h4>
              {comentarios.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: '#f5f7fa',
                    borderRadius: 8,
                    padding: '12px 16px',
                    marginBottom: 10,
                    borderLeft: '3px solid #1976d2',
                  }}
                >
                  <strong style={{ color: '#1976d2' }}>{c.nome}</strong>
                  <p style={{ margin: '4px 0 0', color: '#444', fontSize: '0.95rem' }}>{c.texto}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
      <span style={{ fontWeight: 600, color: '#333', minWidth: 120 }}>{label}</span>
      <span style={{ color: '#555' }}>{value}</span>
    </div>
  )
}
