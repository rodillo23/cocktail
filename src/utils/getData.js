
const getData = async(endpoint)=>{
  const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/'

  if(endpoint.includes('=')){
    var API = `${API_BASE}filter.php?${endpoint}`
  }

  try {
    const response = await fetch(API)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error en la solicitud', error);
  }
  
}

export default getData