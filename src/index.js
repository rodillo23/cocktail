import router, {hashChanged} from './routes'

window.addEventListener('load', router)
window.addEventListener('hashchange', hashChanged)
