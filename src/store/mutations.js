export default {
    increment (state) {
        // 变更状态
        state.count++
      },
      saveUsername(state,username){
        state.userName=username
      },
      saveCartCount(state,count){
        state.cartCount=count
    }

}