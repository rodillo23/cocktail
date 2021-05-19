const resolveRoutes = (route)=>{
  if(route.length >= 1){
    let validRoute
    if(route === '/'){
      validRoute = route
      return
    } else if(route.includes('=')){
      validRoute = '/drinks'
      return
    }

    validRoute = `/${route}`

  }
}

export default resolveRoutes