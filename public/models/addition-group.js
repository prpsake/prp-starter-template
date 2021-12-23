import { html } from "hybrids"
import { ensureArray } from "../helpers.js"


import { Addition } from "./addition.js"
import { AdditionTotal } from "./addition-total"



import { labelWeak } from "./text.js"



export const AdditionGroup = {
  items: [Addition],
  inclusionTotal: 0,
  deductionTotal: 0,
  additionTotal: 0,
  groupTotal: 0,
  subtotal: 0,
}



export const AdditionTotalGroup = {
  items: [AdditionTotal],
  inclusionTotal: 0,
  deductionTotal: 0,
  additionTotal: 0,
  groupTotal: 0,
  subtotal: 0,
}



export default groups => ensureArray(groups).map(group => html`
  <dl>
    ${group.items.map((
      item, _i, _arr, 
      isInclusion = item.type === "inclusion", 
      isDeduction = item.type === "deduction",
      isAddition = item.type === "addition"
    
    ) => html`
      <div class=${{
        "flex": true,
        "justify-between": true,
        "oblique": isInclusion
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