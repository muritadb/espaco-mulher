import { useState } from 'react'

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const FormAddItem = ({ onSubmitItem }) => {
  const [inputValue, setInputValeu] = useState('')
  const [selectValue, setSelectValue] = useState('1')

  const handleChangeInput = (e) => setInputValeu(e.target.value)
  const handleChangeSelect = (e) => setSelectValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmitItem({
      id: crypto.randomUUID(),
      quantity: +selectValue,
      name: inputValue,
      stored: false
    })

    setInputValeu('')
    setSelectValue('1')
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectValue}
        onChange={handleChangeSelect}
        className='input'
      >
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
        value={inputValue}
        onChange={handleChangeInput}
        autoFocus
      />
      <button className='bg-pink-500 text-white p-1 px-3 rounded'>
        Adicionar
      </button>
    </form>
  )
}

export { FormAddItem }