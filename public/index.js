import { store, html, define, parent } from 'hybrids'
import { Previewer } from './lib/paged.esm.js'



/* Models */

import Model from './models/invoice'



/* Elements */

import TheSource from './the-source.js'



/* Helpers */

const previewer = new Previewer()
const paginate =
  (source, element) =>
  previewer.preview(source, ["assets/css/index.css"], element)



/* Elements */

const TheApp = {
  data: store(Model),
  readyPreview: false,
  source: ({ content }) => content().querySelector('the-source').innerHTML,
  content: ({ data, readyPreview }) => html`

    ${store.pending(data) && html`
      awaiting data...
    `}

    ${store.ready(data) && html`
      <the-source data=${data} hidden=${readyPreview}></the-source>
      <the-preview></the-preview> 
    `}

    ${store.error(data) && html`
      data error.
    `}
  `
}



const ThePreview = {
  app: parent(TheApp),
  content: h => html`

    ${html.resolve(
      paginate(h.app.source, h)
      .then(x => console.log(x.total))
      .catch(e => html`error while paginating: ${e.message}`)
      .finally(() => (h.app.readyPreview = true)),
      html`awaiting pages...`,
      1000
    )}
  `
}



define({ TheApp, TheSource, ThePreview })