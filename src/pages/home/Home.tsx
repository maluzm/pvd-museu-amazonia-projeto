
import './home.css';

// 1. Importar os componentes que criamos
import { Hero } from '../../components/Hero/Hero';
import { CardList } from '../../components/CardList/CardList';

export const Home = () => {
  return (
    // <main> é uma boa tag para o conteúdo principal
    <main>
      <Hero />

      {/* Vamos adicionar as outras seções aqui */}
      <div className="home-content-wrapper">
        <CardList />
        
        {/* A próxima seção "Exposições em destaque" é outro CardList,
          mas com dados diferentes! Você pode reutilizar o componente.
        */}
      </div>
    </main>
  );
}