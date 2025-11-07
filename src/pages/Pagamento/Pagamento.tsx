import { useCart } from '../../context/CartContext';
import './Pagamento.css';
import { useNavigate } from 'react-router-dom';

export const Pagamento = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // 1. (Futuro) Enviar dados do formulário e do carrinho para o Backend
    // 2. (Futuro) Se o backend retornar sucesso...
    
    // 3. (Agora) Limpar o carrinho
    clearCart();
    
    // 4. (Agora) Redirecionar para a página de sucesso
    navigate('/pagamento/sucesso');
  };

  return (
    <div className="payment-container">
      <div className="payment-form-side">
        <h2>Finalizar Compra</h2>
        <form onSubmit={handlePayment} className="payment-form">
          <label htmlFor="card-name">Nome no Cartão</label>
          <input type="text" id="card-name" required />

          <label htmlFor="card-number">Número do Cartão</label>
          <input type="text" id="card-number" placeholder="0000 0000 0000 0000" required />
          
          <div className="form-row">
            <div>
              <label htmlFor="card-validity">Validade</label>
              <input type="text" id="card-validity" placeholder="MM/AA" required />
            </div>
            <div>
              <label htmlFor="card-cvv">CVV</label>
              <input type="text" id="card-cvv" placeholder="123" required />
            </div>
          </div>
          
          <button type="submit" className="payment-submit-btn">
            Finalizar pagamento (R$ {total.toFixed(2)})
          </button>
        </form>
      </div>

      <div className="payment-summary-side">
        <h3>Resumo do Pedido</h3>
        {cartItems.map(item => (
          <div className="summary-item" key={item.id}>
            <span>{item.quantity}x {item.name}</span>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="summary-total">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <p>Métodos de pagamentos aceitos:</p>
        {/* Adicionar ícones de cartões aqui */}
      </div>
    </div>
  );
};