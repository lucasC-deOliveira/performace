import { ProductItem } from "./ProductItem";
import { useMemo } from "react"

type searchResultsProps = {
  results: Array<{
    id: number;
    title: string;
    price: number;
  }>
  totalPrice: number;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishList }: searchResultsProps) {

  //use memo memoriza um calculo

  // ultimo parametro é um array de dependencias

  //exemplo quero que o calculo seja refeito sempre que results mudar


  /*
  APLICAÇÃO USE MEMO
  
  calculos pesados
  igualdade referncial (passar informação a um componente filho)
  */


  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
        )
      })}
    </div>
  )
} 