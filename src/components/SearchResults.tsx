import { ProductItem } from "./ProductItem";
import { useMemo } from "react"

type searchResultsProps = {
  results: Array<{
    id: number;
    title: string;
    price: number;
  }>
}

export function SearchResults({ results }: searchResultsProps) {

  //use memo memoriza um calculo

  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results]) // ultimo parametro é um array de dependencias

  //exemplo quero que o calculo seja refeito sempre que results mudar


  /*
  APLICAÇÃO USE MEMO
  
  calculos pesados
  igualdade referncial (passar informação a um componente filho)
  */


  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
} 