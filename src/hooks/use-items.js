import { useState } from "react"

const useItems = () => {
  const [items, setItems] = useState([])
  const [orderBy, setOrderBy] = useState('newest')

  const handleSubmitForm = (newItem) => setItems((prev) => [...prev, newItem])
  const handleClickClearBtn = () => setItems([])
  const handleChangeOrder = (e) => setOrderBy(e.target.value)

  const handleClickDelete = (id) =>
    setItems((prev) => prev.filter((item) => item.id != id))

  const handleClickCheck = (id) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stored: !item.stored } : item,
      ),
    )
  return {
    items,
    orderBy,
    handleSubmitForm,
    handleChangeOrder,
    handleClickCheck,
    handleClickDelete,
    handleClickClearBtn
  }
}

export { useItems }