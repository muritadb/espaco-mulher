import { useState } from 'react';
import logo from './images/logo-espaco-mulher.png';

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const FormAddItem = ({ onHandleSubmit }) => (
  <form onSubmit={onHandleSubmit}>
    <select name="quantity" className='input'>
      {ids.map((id, index) => (
        <option key={id} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
    <input
      placeholder='Adicione itens'
      className='input'
      type="text"
      name="text"
    />
    <button className='bg-pink-500 text-white p-1 px-3 rounded'>
      Adicionar
    </button>
  </form>)

const App = () => {
  const [items, setItems] = useState([])
  const [orderBy, setOrderBy] = useState('newest')

  const handleSubmit = (e) => {
    e.preventDefault()
    const { quantity, text } = e.target.elements

    //setItems((e) => [...e, { q: quantity.value, t: text.value }])
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        quantity: +quantity.value,
        name: text.value,
        stored: false
      }
    ])
  }

  const handleChangeOrder = (e) => setOrderBy(e.target.value)

  const sortedItems = orderBy === "stored" ? items.filter(item => item.stored) : items

  const handleClickDelete = (id) =>
    setItems((prev) => prev.filter((item) => item.id != id))

  const handleClickCheck = (id) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stored: !item.stored } : item,
      ),
    )

  // const itemsLength = items.length - 1
  // console.log(itemsLength)
  let totalStored = items.reduce((acc, item) => {
    if (item.stored) {
      acc++
    }
    return acc
  }, 0)

  let percentItems = totalStored / items.length * 100
  console.log(totalStored)
  return (
    <>
      <header
        className="flex justify-center content-center items-center py-2 bg-blue-950">
        <img src={logo} alt="logo" />
        <h1 className='px-2 text-orange-300 text-3xl capitalize'>espaco mulher</h1>
      </header>
      <main>
        <section className='bg-blue-900 flex items-center justify-center py-2'>
          <p className='text-white pr-2'>o que você precisa guardar?</p>
          <FormAddItem onHandleSubmit={handleSubmit} />

        </section>
      </main>
      <div className='flex flex-col h-[694px] justify-around'>
        <section className='flex flex-1 bg-orange-200 justify-center'>
          <ul className='flex gap-5 flex-wrap justify-around w-[720px]'>
            {sortedItems.map((item) => (
              <li
                className='min-w-6 px-3 justify-start '
                key={item.id}
              >
                <input
                  type="checkbox"
                  checked={item.stored}
                  onChange={() => handleClickCheck(item.id)}
                  name="item"
                  className='mx-2'
                />
                <span className={item.stored ? 'line-through' : ''}>
                  {item.quantity} {item.name}
                </span>
                <button onClick={() => handleClickDelete(item.id)} >
                  ❌
                </button>
              </li>
            ))
            }
          </ul>
        </section>
        <footer className=' bg-blue-900 text-center m-0 py-4'>
          <h3 className=' text-white pb-3'>
            {items.length === 0 ?
              <p>
                Você tem 0 items na lista
              </p>
              : <p>
                Você tem {items.length} itens na lista e ja guardou {totalStored} ({percentItems.toFixed(0)}%)
              </p>
            }
          </h3>
          <select name="order-select" className='input' value={orderBy} onChange={handleChangeOrder}>
            <option value="alfabeto">Alfabeto</option>
            <option value="newest">ordenar por mais Recentes</option>
            <option value="stored">Mostrar guardados</option>
          </select>
          <button className='text-white bg-orange-600 p-1 rounded '>Limpar lista</button>
        </footer>
      </div>
    </>
  )
}

export { App }
