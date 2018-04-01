
import { h } from 'hyperapp'
import RouterView from './RouterView'

const Pagination = d => (s, actions) =>
  h('div', { class: 'launchpad-router-page' }, [
    h('div', { onclick: actions.RouterPage.prev }, 'Previous'),
    h('div', { onclick: actions.RouterPage.next }, 'Next')
  ])

const App = d =>
  h('div', { class: 'app' }, [
    RouterView,
    Pagination
  ])

export default App
