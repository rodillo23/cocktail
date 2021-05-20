
const getData = async(endpoint)=>{
  const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/'
  var API
  if(endpoint.includes('=')){
    API = `${API_BASE}filter.php?${endpoint}`
  }else{
    API = `${API_BASE}lookup.php?i=${endpoint}`
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