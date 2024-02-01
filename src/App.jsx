import { useState } from 'react';
import logo from './images/logo-espaco-mulher.png';

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const App = () => {
  const [items, setItems] = useState([])

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
          <form onSubmit={handleSubmit}>
            <select name="quantity" className='input'>
              {ids.map((id, index) => (
                <option key={id} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <input
              className='input'
              type="text"
              name="text"
            />
            <button className='bg-pink-500 text-white p-1 px-3 rounded'>
              Adicionar
            </button>
          </form>
        </section>
      </main>
      <div className='flex flex-col h-[694px] justify-around'>
        <section className='flex-1 bg-orange-200'>
          <ul className='flex gap-5 flex-wrap justify-around'>
            {items.map((item) => (
              <li
                className='min-w-6 px-3'
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
                <button
                  onClick={() => handleClickDelete(item.id)}
                >
                  ❌
                </button>
              </li>
            ))
            }
          </ul>
        </section>
        <footer className='h-36 bg-blue-900 m-0'>
          <p>Você tem 3 itens na lista </p>
        </footer>
      </div>
    </>
  )
}

export { App }
