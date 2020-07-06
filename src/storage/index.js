

const STORAGE_NAME="mall"

export default{

  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_NAME)|| '{}')
  },
  getItem(key,module_name){
    let obj=this.getStorage()
    if(module_name){
      let val1= this.getItem(module_name)
      if (val1) return val1[key]
    }
      return obj[key]
    

  },
  setItem(key,val,module_name){
    let obj=this.getStorage()
    if(module_name){
      let val1=this.getItem(module_name)
      console.log(val1)
      if(val1){
        val1[key]=val
      }else{
        val1={}
        val1[key]=val
      }
      
      this.setItem(module_name,val1)
    }else{
      obj[key]=val 
      console.log(obj)
      window.sessionStorage.setItem(STORAGE_NAME,JSON.stringify(obj))
    }
    // window.sessionStorage.setItem(STORAGE_NAME,obj)
  },
  deleteItem(key,module_name){
    let obj=this.getStorage()
    if(module_name){
      delete obj[module_name][key]
    }else{
     delete obj[key]
    }
    window.sessionStorage.setItem(STORAGE_NAME,JSON.stringify(obj))
  }
}