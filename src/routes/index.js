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
  const header = null || document.getElementById('header')
  const search = null || document.getElementById('search')
  const content = null || document.getElementById('content')

  let render

  const endpoint = getSearch()
  if(endpoint){
    console.log('endpoint:', endpoint);
    const route = await resolveRoutes(endpoint)
    render = routes[route] && routes[route] 
  }else{
    render = routes['/']
  } 

  header.innerHTML = await Header()
  search.innerHTML = await Search()
  content.innerHTML = await render()
}

export default router