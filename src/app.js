
'use strict'

import { app } from 'hyperapp'
import { state, actions } from './args'
import App from './views/App'

const view = s => App

app(state, actions, view, document.getElementById('app'))
