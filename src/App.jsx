import logo from './images/logo-espaco-mulher.png';

const App = () => {
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
          <form>
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
        <section className=''>
          <article className='flex-1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cumque culpa recusandae fugit at impedit suscipit cupiditate minima neque! Consectetur amet asperiores temporibus omnis eos nemo quaerat dolorum impedit voluptates?
          </article>
        </section>
      </main>
      <footer>
        <p>Você tem 3 itens na lista </p>
      </footer>
    </>
  )
}

export { App }
