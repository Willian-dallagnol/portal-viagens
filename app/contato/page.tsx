'use client'

import React, { useState } from 'react'
import Layout from '../../components/Layout'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <Layout>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <h2 style={{ color: '#1976d2', textAlign: 'center', marginBottom: 8 }}>Contato & Sugestão</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: 28, fontSize: '0.95rem' }}>
          Tem uma sugestão de destino ou quer entrar em contato? Envie sua mensagem!
        </p>

        {enviado ? (
          <div style={{
            background: '#e8f5e9',
            border: '1.5px solid #a5d6a7',
            borderRadius: 12,
            padding: '28px 24px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '2rem', marginBottom: 8 }}>✅</p>
            <h3 style={{ color: '#2e7d32', marginBottom: 4 }}>Mensagem enviada!</h3>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>Agradecemos seu contato. Em breve retornaremos.</p>
            <button
              onClick={() => setEnviado(false)}
              style={{ marginTop: 16, background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '28px 24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div>
              <label htmlFor="nome" style={{ display: 'block', fontWeight: 600, color: '#333', marginBottom: 6, fontSize: '0.9rem' }}>
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Seu nome completo"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: '0.95rem' }}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', fontWeight: 600, color: '#333', marginBottom: 6, fontSize: '0.9rem' }}>
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: '0.95rem' }}
              />
            </div>
            <div>
              <label htmlFor="mensagem" style={{ display: 'block', fontWeight: 600, color: '#333', marginBottom: 6, fontSize: '0.9rem' }}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                placeholder="Sua sugestão ou mensagem..."
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 0',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </Layout>
  )
}
