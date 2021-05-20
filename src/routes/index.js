import Header from '../templates/Header'
import Search from '../templates/Search'
import Home from '../pages/Home'
import Content from '../pages/Content'
import Drink from '../pages/Drink'
import resolveRoutes from '../utils/resolveRoutes'
import getHash from '../utils/getHash'

const routes = {
  '/': Home,
  '/drinks': Content,
  '/:id': Drink 
}

var route
const content = null || document.getElementById('content')

const router = async () => {  

  let endpoint
  const header = null || document.getElementById('header')

  header.innerHTML = await Header()
  Search()

  const form = document.getElementById('form')
  
  form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    endpoint = `c=${e.target[0].value}`
    route = await resolveRoutes(endpoint)
    console.log(route);
    let render = routes[route] && routes[route]    
  
    content.innerHTML = await render(endpoint)
  })

  
} 

export const hashChanged= async()=>{
  const hash = getHash()
  console.log(hash);
  route = await resolveRoutes(parseInt(hash))
  console.log(route);

  const render = routes[route]
  content.innerHTML = await render(hash)
}
 





export default router