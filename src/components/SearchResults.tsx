import { ProductItem } from "./ProductItem";

import { List, ListRowRenderer } from 'react-virtualized'

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

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div style={style}>
        <ProductItem key={key} product={results[index]} onAddToWishList={onAddToWishList} />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
        )
      })} */}
    </div>
  )
} 