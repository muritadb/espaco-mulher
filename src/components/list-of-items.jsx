
const ListOfItems = ({ orderBy, items, onClickCheck, onClickDelete }) => {
  const sortedItems = orderBy === "stored"
    ? items.filter((item) => item.stored)
    : orderBy === "alphabetically"
      ? items.toSorted((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
      : items

  return (
    <ul className='flex gap-5 flex-wrap justify-around w-[720px]'>
      {sortedItems.map((item) => (
        <li
          className='min-w-6 px-3 justify-start '
          key={item.id}
        >
          <input
            type="checkbox"
            checked={item.stored}
            onChange={() => onClickCheck(item.id)}
            name="item"
            className='mx-2'
          />
          <span className={item.stored ? 'line-through' : ''}>
            {item.quantity} {item.name}
          </span>
          <button onClick={() => onClickDelete(item.id)} >
            ❌
          </button>
        </li>
      ))
      }
    </ul>
  )
}

export { ListOfItems }