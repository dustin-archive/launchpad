
import Router from './stores/Router'

const getState = d => state => state
const update = data => data

const state = {
  // custom state
  // ...

  // launchpad state
  Images: {},
  Router: {}
}

const actions = {
  // custom actions
  // ...

  // launchpad actions
  Images: {
    update
  },
  Reroute: {
    update
  },
  Router,

  // launchpad top-level actions
  getState,
  update
}

export { state, actions }
