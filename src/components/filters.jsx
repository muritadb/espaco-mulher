
const Filters = ({ orderBy, onChangeOrder }) => (
  <select name="order-select" className='input' value={orderBy} onChange={onChangeOrder}>
    <option value="newest">ordenar por mais Recentes</option>
    <option value="stored">Mostrar guardados</option>
    <option value="alphabetically">Ordem alfabetica</option>
  </select>
)

export { Filters }