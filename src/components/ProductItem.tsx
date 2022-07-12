import { memo } from "react"


interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }

}


function ProductItemComponent({ product }: ProductItemProps) {

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )

}

//memo evita que o componente seja renderizado novamente quando passar por essa função

/* 
CASOS DE APLICAÇÃO

Pure Functional Components
Renders too often
Re-renders with same props
Medium to Big size Components
*/
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})