
import { h } from 'hyperapp'

const Debug = ([ state ]) =>
  NODE_ENV === 'development' &&
    h('div', { class: '_debug' }, JSON.stringify(state.Stash, null, 2))

export { Debug }
