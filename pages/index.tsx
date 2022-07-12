import type { NextPage } from 'next'
import { FormEvent, useCallback, useMemo, useState } from 'react'
import { SearchResults } from '../src/components/SearchResults'



type Results = {
  totalPrice: number;
  data: any[];
}


const Home: NextPage = () => {
  const [search, setSearch] = useState('')

  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    const response = await fetch(`http://localhost:3334/products?q=${search}`)

    const data = await response.json()

    const formater = new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    })

    const products = data.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formater.format(product.price)
      }
    })

    const totalPrice = data.reduce((total, product) => {
      return total + product.price
    }, 0)


    setResults({ totalPrice, data:products })
  }

  //utilizado para passar funções para components filhos sem recriar a função na memoria
  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])



  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type='submit'>Buscar</button>
      </form>

      <SearchResults results={results.data} totalPrice={results.totalPrice} onAddToWishList={addToWishList} />

    </div>
  )
}

export default Home
