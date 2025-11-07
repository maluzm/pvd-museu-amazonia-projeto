import { AppRoutes } from "./routes";
import { CartProvider } from "./context/CartContext";

export function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}


