
import { h } from 'hyperapp'

import ObjectView from '@whaaaley/hyperapp-object-view'

import RouterView from './RouterView'

const DropDowns = d => (s, actions) =>
  h('div', { class: 'launchpad -right' }, [
    h('div', { class: 'launchpad-control' }, [
      h('div', { class: 'launchpad-button' }, 'Drop 1'),
      h('div', { class: 'launchpad-button' }, 'Drop 2'),
      h('div', { class: 'launchpad-button' }, 'Drop 3')
    ])
  ])

const Pagination = d => (s, actions) => {
  const { RouterPage } = actions
  return h('div', { class: 'launchpad -right -bottom' }, [
    h('div', { class: 'launchpad-control' }, [
      h('div', { class: 'launchpad-button', onclick: RouterPage.prev }, 'Previous'),
      h('div', { class: 'launchpad-button', onclick: RouterPage.next }, 'Next')
    ])
  ])
}

const StateView = d => (state, actions) => {
  const { stateView } = state.Stash
  return h('div', { class: 'launchpad' }, [
    h('div', { class: 'launchpad-control' }, [
      h('div', {
        class: 'launchpad-button',
        onclick: () => {
          actions.Stash.update({
            stateView: !stateView
          })
        }
      }, 'Toggle State View')
    ]),
    stateView && h('div', { class: 'launchpad-state-view' }, [
      ObjectView({
        key: 'state',
        value: state
      })
    ])
  ])
}

const App = d =>
  h('div', { class: 'app' }, [
    RouterView,
    DropDowns,
    Pagination,
    StateView
  ])

export default App
