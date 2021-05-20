import getData from '../utils/getData'

const Content = async (route)=>{
  const drinks = await getData(route)
  console.log(drinks);

  const view = `
    <div class="container drinksContainer">
    ${drinks.drinks.map(drink => `
      <a href="/#/${drink.idDrink}">
        <article class="card">
          <img src="${drink.strDrinkThumb}" alt"${drink.strDrink}"/>
          <p>${drink.strDrink}</p>
        </article>
      </a>
    `).join('')}
    </div>
  `
  return view
}

export default Content