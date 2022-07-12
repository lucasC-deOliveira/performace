import { ProductItem } from "./ProductItem";


type searchResultsProps = {
  results: Array<{
    id: number;
    title: string;
    price: number;
  }>
}

export function SearchResults({ results }: searchResultsProps) {
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