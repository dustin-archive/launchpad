
'use strict'

import { h, app } from 'hyperapp'

import { state, actions } from './args'

// custom interop
// ...

// custom views
// ...

// launchpad interop
import RouterInit from './main/RouterInit'

// launchpad views
import App from './views/App'
import RouterView from './views/RouterView'

// ...

const view = s => h(App, null, RouterView)
const container = document.getElementById('app')

const main = app(state, actions, view, container)

// ...

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
