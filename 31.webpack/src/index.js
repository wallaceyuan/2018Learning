let base =  require('./base')
import './index.css'
document.querySelector('#app').innerHTML = base()


if(module.hot){
  module.hot.accept('./base',function(){
    let base =  require('./base')
    document.querySelector('#app').innerHTML = base()
  })
}