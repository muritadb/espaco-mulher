import logo from './images/logo-espaco-mulher.png'

import { useItems } from './hooks/use-items'

import { FormAddItem } from './components/form-add-item'
import { ListOfItems } from './components/list-of-items'
import { Filters } from './components/filters'
import { Stats } from './components/stats'

const App = () => {
  const state = useItems()

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
          <FormAddItem onSubmitItem={state.handleSubmitForm} />
        </section>
      </main>
      <div className='flex flex-col h-[694px] justify-around'>
        <section className='flex flex-1 bg-orange-200 justify-center'>
          <ListOfItems
            orderBy={state.orderBy}
            items={state.items}
            onClickCheck={state.handleClickCheck}
            onClickDelete={state.handleClickDelete}
          />
        </section>
        <footer className=' bg-blue-900 text-center m-0 py-4'>
          <Filters
            orderBy={state.orderBy}
            onChangeOrder={state.handleChangeOrder}
          />
          <Stats items={state.items} />
          <button
            onClick={state.handleClickClearBtn}
            className='text-white bg-orange-600 p-1 rounded '
          >Limpar lista
          </button>
        </footer>
      </div>
    </>
  )
}

export { App }
