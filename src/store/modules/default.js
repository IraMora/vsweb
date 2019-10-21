export default {
    namespaced: true,
    state: { 
        home: {
          title: 'La Vampire Secta',
          subtitle: 'Vampire Knight',
          subtitle2: 'Esperando nuestro despertar desde 2008'
        }
      },
    getters:{
          get_home(state){
            return state.home
          }
    }
 
}