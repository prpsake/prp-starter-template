import { html } from 'hybrids'
import { mapx, ensureArray } from '../helpers'



export const Issue = {
  uid: '',
  title: '',
  locator: '',
}



export default issues => html`
  <ul class="inline-flex">
    ${mapx((it, item) => html`
      <li>
        <a class="underline" href="${item.locator}">${item.title}</a>
        ${!it.last && html`,&nbsp;`}
      </li>
    `, ensureArray(issues))}
  </ul>
`