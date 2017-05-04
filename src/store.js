import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, window.devToolsExtension())

export default store
