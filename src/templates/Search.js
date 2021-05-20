import getDataList from '../utils/getDataList'
import resolveRoutes from '../utils/resolveRoutes'

/* const Search = async()=>{
  const options = await getDataList()
  let value
  const handle = ()=>{
    console.log('hola');
  }
  const view = `
    <form>
      <select name="c">
        <option>Select a category</option>
        ${options.drinks.map(drink => `
          <option value="${drink.strCategory}">${drink.strCategory}</option>
        `)}
      </select>
      <button>Buscar</button>
    </form>
    
  `
  return view
}

*/

const content = document.getElementById('search')

const Search = async()=>{ 
  
  const categories = await getDataList()
  

  const form = document.getElementById('form')
  const select = document.createElement('select')
  const input = document.createElement('input')

  select.setAttribute('id', 'select')
  select.setAttribute('name', 'c')

  input.setAttribute('type', 'submit')
  input.setAttribute('value', 'Buscar')
  input.classList.add('button')


  categories.drinks.map(drink => {
    const option = document.createElement('option')
    option.textContent = drink.strCategory
    option.setAttribute('value', drink.strCategory)
    select.appendChild(option)
  })

  form.appendChild(select)
  form.appendChild(input)
  content.appendChild(form)

  
}

export default Search