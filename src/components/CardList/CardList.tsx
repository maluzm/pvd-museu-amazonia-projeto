import './CardList.css';

// --- PREPARAÇÃO PARA O BACKEND ---
// Vamos simular os dados que o backend enviará.
// No futuro, você receberá isso de uma API.
const DADOS_DOS_CARDS = [
  { 
    id: 1, 
    title: 'Cores da Amazônia', 
    image: '/caminho/para/imagem1.jpg' // Troque pelo caminho real (pode importar como o Hero)
  },
  { 
    id: 2, 
    title: 'Manaus Antiga', 
    image: '/caminho/para/imagem2.jpg' 
  },
  { 
    id: 3, 
    title: 'Arte Indígena', 
    image: '/caminho/para/imagem3.jpg' 
  },
  { 
    id: 4, 
    title: 'Som da Floresta', 
    image: '/caminho/para/imagem4.jpg' 
  },
];

export const CardList = () => {
  return (
    <section className="card-list-section">
      <div className="card-grid">
        {/* Aqui, usamos .map() para criar um <div className="card">
          para cada item nos nossos DADOS_DOS_CARDS.
          É assim que o React lida com listas.
        */}
        {DADOS_DOS_CARDS.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}