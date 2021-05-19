import getDataList from '../utils/getDataList'

const Search = async()=>{
  const options = await getDataList()

  const view = `
    <select name="c">
      <option>Select a category</option>
      ${options.drinks.map(drink => `
        <option>${drink.strCategory}</option>
      `)}
    </select>
    <a href="" class="button">Buscar</a>
    

  `
  return view
}

export default Search