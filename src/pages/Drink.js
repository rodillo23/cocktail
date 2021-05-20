import getData from '../utils/getData'

const Drink = async(id)=>{

  const {drinks} = await getData(id)
  const data = drinks[0]

  const view = `
    <div class="drinkContainer container">
      <article class="drinkImageContainer">
        <img src="${data.strDrinkThumb}" alt=""/>
      </article>

      <article class="drinkDetailsContainer">
        <p class="drinkTitle">${data.strDrink}</p>
        <p class="drinkCategory">${data.strCategory}</p>
        <p class="drinkIngredient">${data.strIngredient1}: <span>${data.strMeasure1}</span></p>
        <p class="drinkIngredient">${data.strIngredient2}: <span>${data.strMeasure2}</span></p>
        <p class="drinkIngredient">${data.strIngredient3}: <span>${data.strMeasure3}</span></p>
        <p class="drinkInstructions">${data.strInstructions}</p>
        </article>

    </div>
  `
  return view
}

export default Drink