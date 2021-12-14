// Components
import ProductCardComponent from '../components/productCard'

export default function ProductsView(){
  return(
    <div>
      <h1>Produtos</h1>

      <ProductCardComponent productName='Cenora'/>
      <ProductCardComponent productName='Banana'/>
    </div>
  );
}
