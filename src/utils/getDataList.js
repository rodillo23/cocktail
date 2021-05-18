const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

const getDataList = async()=>{
  try {
    const response = await fetch(API)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error al hacer fetch', error);
  }
}

export default getDataList