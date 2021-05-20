const resolveRoutes = (route)=>{
  if(route.length >= 1){
    if(route === '/'){
      return route
    } else{
      return '/drinks'
    }
  }else{
    return '/:id'
  }
}

export default resolveRoutes