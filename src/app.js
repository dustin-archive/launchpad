
'use strict'

import { h, app } from 'hyperapp'
import { state, actions } from './args'
import RouterInit from './main/RouterInit'
import App from './views/App'
import RouterView from './views/RouterView'

const view = s => h(App, null, RouterView)

// create app instance
const main = app(state, actions, view, document.getElementById('app'))

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
