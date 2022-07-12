export interface AddProductToWishListProps {
  onAddToWichList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({ onAddToWichList, onRequestClose }: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWichList}>sim</button>
      <button onClick={onRequestClose}>não</button>
    </span>
  )
}