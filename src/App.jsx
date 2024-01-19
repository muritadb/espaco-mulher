import { useState } from 'react';
import logo from './images/logo-espaco-mulher.png';

const App = () => {
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { quantity, text } = e.target.elements

    //TODO: não to sabendo adicionar no array
    setItems(() => ([{ q: quantity, t: text }]))

    console.log('submetido', quantity.value, text.value)
    console.log('items= ', items)
  }


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
            <input className='input '
              type="number"
              name="quantity"
            />
            <input className='input'
              type="text" name="text" />
            <button className='bg-pink-500 text-white p-1 px-3 rounded'>
              Adicionar
            </button>
          </form>
        </section>
      </main>
      <div className='flex flex-col h-[694px]'>
        <ul className='flex-1 bg-orange-200'>
          {items.map(({ q, t }, i) => {
            return (
              <li
                key={i}
              >
                {q.value} - {t.value}
              </li>)
          })}
        </ul>

        <footer className='h-36 bg-blue-900 m-0'>
          <p>Você tem 3 itens na lista </p>
        </footer>
      </div>
    </>
  )
}

export { App }
