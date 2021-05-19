import getData from '../utils/getData'

const Content = async (route)=>{
  const drinks = await getData(route)
  console.log(drinks);
  const view = `
    <div class="container drinksContainer">
    ${drinks.drinks.map(drink => `
      <article>
        <img src="${drink.strDrinkThumb}" alt"${drink.strDrink}" width="250"/>
        <p>${drink.strDrink}</p>
      </article>
    `).join('')}
    </div>
  `
  return view
}

export default Content