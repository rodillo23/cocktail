import getDataList from '../utils/getDataList'

const Search = async()=>{
  const options = await getDataList()
  console.log(options.drinks);
  const view = `
    <select name="drink">
      <option>Select a category</option>
      ${options.drinks.map(drink => `
        <option>${drink.strCategory}</option>
      `)}
    </select>
  `
  return view
}

export default Search