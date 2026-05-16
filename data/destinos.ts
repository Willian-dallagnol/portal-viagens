export interface Destino {
  id: string
  nome: string
  estado: string
  imagem: string
  descricao: string
  mapa: string
  clima: string
  dicas: string
  link: string
  video: string
}

export const destinos: Destino[] = [
  {
    id: '1',
    nome: 'Rio de Janeiro',
    estado: 'RJ',
    imagem: '/Rio.jpg',
    descricao: 'O Rio de Janeiro é um dos destinos mais icônicos do Brasil, famoso por suas praias exuberantes como Copacabana e Ipanema, o majestoso Cristo Redentor e o animado Carnaval. Desfrute de paisagens deslumbrantes, trilhas, cultura vibrante e uma vida noturna inesquecível.',
    mapa: 'https://maps.google.com/?q=Rio+de+Janeiro,+RJ',
    clima: 'Tropical, quente e úmido. Média anual: 24°C',
    dicas: 'Visite o Pão de Açúcar, Copacabana e o Jardim Botânico.',
    link: 'https://visit.rio/',
    video: 'https://www.youtube.com/embed/j7916wLorrs',
  },
  {
    id: '2',
    nome: 'Foz do Iguaçu',
    estado: 'PR',
    imagem: '/foz-do-iguacu-aerea.jpg',
    descricao: 'Foz do Iguaçu é um espetáculo da natureza, lar das impressionantes Cataratas do Iguaçu, uma das maiores quedas d\'água do mundo. Viva aventuras no Parque Nacional, conheça a tríplice fronteira e descubra a grandiosidade da Usina de Itaipu.',
    mapa: 'https://maps.google.com/?q=Foz+do+Iguaçu,+PR',
    clima: 'Subtropical, quente no verão e ameno no inverno.',
    dicas: 'Não perca o Parque Nacional e a Usina de Itaipu.',
    link: 'https://www.cataratasdoiguacu.com.br/',
    video: 'https://www.youtube.com/embed/ZwsKLgbll48',
  },
  {
    id: '3',
    nome: 'Salvador',
    estado: 'BA',
    imagem: '/salvador.jpg',
    descricao: 'Salvador é pura energia! Mergulhe na história do Pelourinho, sinta o axé nas festas populares e relaxe nas praias paradisíacas. Experimente sabores únicos da culinária baiana e se encante com a cultura afro-brasileira.',
    mapa: 'https://maps.google.com/?q=Salvador,+BA',
    clima: 'Tropical, quente e úmido. Média anual: 26°C',
    dicas: 'Experimente a culinária baiana e visite o Farol da Barra.',
    link: 'https://www.salvador.ba.gov.br/',
    video: 'https://www.youtube.com/embed/5kVDDtgZS8s',
  },
  {
    id: '4',
    nome: 'Florianópolis',
    estado: 'SC',
    imagem: '/Floripa.jpg',
    descricao: 'Florianópolis, a Ilha da Magia, conquista visitantes com suas mais de 40 praias, dunas, trilhas e esportes aquáticos. Descubra vilarejos charmosos, gastronomia típica e um centro histórico acolhedor.',
    mapa: 'https://maps.google.com/?q=Florianópolis,+SC',
    clima: 'Subtropical, verão quente e inverno ameno.',
    dicas: 'Explore as praias do leste e o centro histórico.',
    link: 'https://turismo.sc.gov.br/',
    video: 'https://www.youtube.com/embed/W0Rx9rpHqFE',
  },
]
