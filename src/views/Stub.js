
import { h } from 'hyperapp'
import App from './App'

const Stub = data =>
  h('html', { lang: 'en-US' }, [
    h('head', null, [
      h('meta', { charset: 'utf-8' }),
      h('title', null, '@whaaaley/launchpad'),
      h('meta', { name: 'author', content: 'Dustin Dowell' }),
      h('meta', { name: 'description', content: 'Boilerplate for building web applications.' }),
      h('meta', { name: 'keywords', content: '' }),
      h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }),
      h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
      h('style', { innerHTML: data.css })
    ]),
    h('body', null, [
      h('div', { id: 'app' }, App),
      h('script', { innerHTML: data.js })
    ])
  ])

export default Stub
