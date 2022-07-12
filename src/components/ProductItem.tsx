import { memo, useState } from "react"
import { AddProductToWishListProps } from "./AddProductToWishList";

import dynamic from 'next/dynamic' //no react lazzy

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import("./AddProductToWishList").then(mod => mod.AddProductToWishList)
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  },
  onAddToWishList: (id: number) => void
}


function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {

  const [isAddingToWishList, setIsAddingToWishList] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>

      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWichList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}

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