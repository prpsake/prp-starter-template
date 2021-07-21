/*
NB: resources for l18n
https://www.transifex.com/resources/software-localization-guide/
https://localazy.com/
https://weblate.org/en-gb/
*/

import { html } from 'hybrids'



export const textOblique = content => html`
  <span class="oblique">${content}</span>
`



export const textStrong = content => html`
  <span class="font-medium">${content}</span>
`



export const label = content => html`
  <span class="font-bold text-brand">${content}</span>
`



export const labelWeak = content => html`
  <span class="font-normal text-brand">${content}</span>
`