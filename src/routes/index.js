import Header from '../templates/Header'
import Search from '../templates/Search'

const routes = {
  
}

const router = async () => {
  const header = null || document.getElementById('header')
  const search = null || document.getElementById('search')

  header.innerHTML = await Header()
  search.innerHTML = await Search()
}

export default router