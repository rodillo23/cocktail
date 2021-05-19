import Header from '../templates/Header'
import Search from '../templates/Search'
import Home from '../pages/Home'
import Content from '../pages/Content'
import getSearch from '../utils/getSearch'
import resolveRoutes from '../utils/resolveRoutes'


const routes = {
  '/': Home,
  '/drinks': Content 
}

const router = async () => {
  let endpoint
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()
  Search()

  const form = document.getElementById('form')
  
  form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    endpoint = `c=${e.target[0].value}`
    const route = await resolveRoutes(endpoint)
    console.log(route);
    let render = routes[route] && routes[route]    
  
    content.innerHTML = await render(endpoint)
  })

  
}

export default router