
const Stats = ({ items }) => {
  let storedItems = items.reduce((acc, item) => item.stored ? acc + 1 : acc, 0)
  let storedPercentage = items.length === 0 ? 0 : ((storedItems / items.length) * 100).toFixed(0)
  const singularPlural = items.length === 1 ? "item" : "itens"

  return (
    <h3 className=' text-white pb-3'>
      {<p>
        {`Você tem ${items.length} ${singularPlural} na lista`}
        {items.length > 0 && <span> e ja guardou {storedItems} ({storedPercentage}%)</span>}
      </p>
      }
    </h3>
  )
}

export { Stats }