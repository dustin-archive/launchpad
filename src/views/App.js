
import { h } from 'hyperapp'

const image = 'hyperapp-graphic-small-jp.png'

const Graphic = (state, actions) => {
  const saved = state.Images[image]
  return saved
    ? h('div', {
      class: 'launchpad-graphic',
      style: {
        'background-image': `url(${saved})`
      }
    })
    : h('div', {
      class: 'launchpad-graphic',
      oncreate: () => {
        window.fetch(`images/${image}`)
          .then(res => res.blob())
          .then(blob => {
            actions.Images.update({
              [image]: window.URL.createObjectURL(blob)
            })
          })
      }
    })
}

const App = d =>
  h('div', { class: 'app' }, Graphic)

export default App
