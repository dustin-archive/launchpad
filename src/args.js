
import Router from './stores/Router'

const getState = d => state => state
const update = data => data

const state = {
  // custom state
  // ...

  // launchpad state
  Images: {},
  Router: {},
  Stash: {}
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
  Stash: {
    update
  },

  // launchpad top-level actions
  getState,
  update
}

export { state, actions }
