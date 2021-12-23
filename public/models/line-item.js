import { html } from "hybrids"
import { ensureArray, notEmptyArray } from "../helpers.js"



import issue, { Issue } from "./issue.js"
import additionGroup, { AdditionGroup } from "./addition-group.js"



export const LineItem = { 
  uid: "",
  title: "",
  desc: "",
  issues: [Issue],
  qty: 0,
  rate: 0,
  unit: "",
  subtotal: 0,
  additionGroups: [AdditionGroup],
  total: 0,
}



export default lineItems => ensureArray(lineItems).map(item => html`
  <tr class="break-inside-avoid">
    <td class="h-full w-5/12 py-6 pr-4">
      <h2 class="font-medium">${item.title}</h2>
      <p class="oblique">${item.desc}</p>

      ${notEmptyArray(item.issues) && html`
        <div class="inline-flex oblique">
          <h3>Issues:&nbsp;</h3>
          ${issue(item.issues)}
        </div>
      `}
    </td>

    <td class="py-6 text-center">${item.qty}</td>
    <td class="py-6 text-center">${item.unit}</td>
    <td class="py-6 text-center">${item.rate}</td>

    <td class="py-6 pl-8">
      ${notEmptyArray(item.additionGroups) ? html`
        <div class="flex justify-between">
          <span class="text-brand">Subtotal</span>
          <span>${item.subtotal}</span>
        </div>
        ${additionGroup(item.additionGroups)}
        <div class="flex justify-between font-medium">
          <span class="text-brand">Total</span>   
          <span class="flex-auto text-right">${item.total}</span>
        </div>
      ` : html`
        <div class="text-right font-medium">
          ${item.total}
        </div>
      `}
    </td>
  </tr>
`)
