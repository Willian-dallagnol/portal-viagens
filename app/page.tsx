import Layout from '../components/Layout'
import Link from 'next/link'
import { destinos } from '../data/destinos'

const destaques = destinos.slice(0, 2)

const stats = [
  { valor: '+100', label: 'Destinos cadastrados' },
  { valor: '+500', label: 'Avaliações de viajantes' },
  { valor: '+1.000', label: 'Fotos compartilhadas' },
]

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <img
          src="/agente-de-viagens.jpg"
          alt="Banner Portal de Viagens"
          style={{
            width: '100%',
            maxHeight: 320,
            objectFit: 'cover',
            borderRadius: 18,
            marginBottom: 28,
            boxShadow: '0 4px 24px rgba(25, 118, 210, 0.12)',
          }}
        />

        <h2 style={{ fontSize: '2rem', color: '#1976d2', marginBottom: 10 }}>
          Viaje pelo Brasil sem sair do lugar!
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 28 }}>
          Descubra paisagens, culturas e experiências únicas. Seu próximo destino começa aqui!
        </p>

        <Link href="/destinos" className="btn-animado">
          Ver destinos
        </Link>

        <section style={{ marginTop: 48 }}>
          <h3 style={{ color: '#1976d2', fontSize: '1.2rem', marginBottom: 20 }}>
            Destinos em destaque
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {destaques.map(destino => (
              <Link
                key={destino.id}
                href={`/destinos/${destino.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 12,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                    padding: 16,
                    width: 220,
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                  }}
                >
                  <img
                    src={destino.imagem}
                    alt={destino.nome}
                    style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }}
                  />
                  <h4 style={{ color: '#1976d2', margin: '0 0 4px' }}>{destino.nome}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#888' }}>{destino.estado}</span>
                  <p style={{ fontSize: '0.9rem', color: '#555', marginTop: 6 }}>{destino.descricao.slice(0, 80)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 48, marginBottom: 12 }}>
          <h3 style={{ color: '#1976d2', fontSize: '1.1rem', marginBottom: 16 }}>Portal em números</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div
                key={s.label}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '16px 24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  minWidth: 140,
                }}
              >
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1976d2', margin: 0 }}>{s.valor}</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '4px 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
