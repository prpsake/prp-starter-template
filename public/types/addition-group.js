import { html } from 'hybrids'
import { ensureArray } from '../helpers'


import { Addition } from './addition'
import { AdditionTotal } from './addition-total'



import { labelWeak } from './text'



export const AdditionGroup = {
  items: [Addition],
  inclusion_total: 0,
  deduction_total: 0,
  addition_total: 0,
  group_total: 0,
  subtotal: 0,
}



export const AdditionTotalGroup = {
  items: [AdditionTotal],
  inclusion_total: 0,
  deduction_total: 0,
  addition_total: 0,
  group_total: 0,
  subtotal: 0,
}



export default groups => ensureArray(groups).map(group => html`
  <dl>
    ${group.items.map((
      item, _i, _arr, 
      isInclusion = item.type === 'inclusion', 
      isDeduction = item.type === 'deduction',
      isAddition = item.type === 'addition'
    
    ) => html`
      <div class=${{
        'flex': true,
        'justify-between': true,
        'oblique': isInclusion
      }}>
        ${isInclusion && html`
          <dt>${item.title}&nbsp;inkl.</dt>
          <dd>${item.total}</dd>
        `}
        ${isAddition && html`
          <dt>${labelWeak(item.title)}</dt>
          <dd>${item.total}</dd>
        `}
        ${isDeduction && html`
          <dt>${labelWeak(item.title)}</dt>
          <dd>&minus;${item.total}</dd>
        `}
      </div>
    `)}
  </dl>
`)