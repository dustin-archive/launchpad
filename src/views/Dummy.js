
import { h } from 'hyperapp'

const Dummy = data =>
  h('div', { class: 'dummy' }, [
    h('div', { class: 'dummy-text' }, data.text),
    h('div', null, 'Dummy Route')
  ])

export default Dummy
