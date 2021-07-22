import { store, property, html } from 'hybrids'
import { notEmptyArray } from './helpers'



import address from './types/address'
import additionGroup from './types/addition-group'
import lineItem from './types/line-item'



import { textStrong, label, labelWeak } from './types/text'



export default {
  data: property({}),
  content: ({ data: { contents } }) => html`

    <h1 class="mt-8 mb-16">
      <span class="font-doc-sans-heading text-4xl text-brand">${contents.title} </span>
      <span class="font-doc-sans text-3xl">${contents.identifier}</span>
    </h1>

    <dl class="grid grid-cols-6 gap-x-4 my-16 text-sm leading-relaxed">
      <dt class="pb-8">${label('von')}</dt>
      <dd class="col-span-2 pb-8">
        ${address(contents.address, { showEmail: true, showMobile: true })}
      </dd>
      
      <dt class="pb-8">${label('für')}</dt>
      <dd class="col-span-2 pb-8">
        ${address(contents.billing_address, { showPerson: true })}
      </dd>

      <dt>${label('betreffend')}</dt>
      <dd class="col-span-5"><a href=${contents.subject.locator}>${contents.subject.title}</a></dd>
      
      <dt>${label('Datum')}</dt>
      <dd class="col-span-5">${contents.date}</dd>
      
      <dt>${label('fällig am')}</dt>
      <dd class="col-span-5 font-medium">${textStrong(`${contents.due_date}, netto`)}</dd>

      <dt>${label('IBAN')}</dt>
      <dd class="col-span-5">${contents.iban}</dd>

      <dt>${label('Betrag')}</dt>
      <dd class="col-span-5">
        <p class="font-medium">${textStrong(`${contents.currency.code} ${contents.total}`)}</p>
        <p>nicht mehrwertsteuerpflichtig</p>
      </dd>
    </dl>

    <table class="w-full h-full my-16 text-sm">
      <thead>
        <tr class="align-bottom border-b border-brand border-opacity-90">
          <th class="w-5/12 pb-1 text-left">${label('Beschreibung')}</th>
          <th class="pb-1">${label('Menge')}</th>
          <th class="pb-1">${label('Einheit')}</th>
          <th class="pb-1">${label('Rate')}</th>
          <th class="pb-1 text-right">${label('Betrag')}</th>
        </tr>
      </thead>

      <tbody class="align-top divide-y divide-brand divide-opacity-90">
        ${lineItem(contents.line_items)}
      </tbody>

      <tfoot class="break-inside-avoid">
        <tr class="align-top border-t border-brand border-opacity-90">
          <td class="pt-2 pb-4 pr-4" colspan="4">
            <p class="oblique">Alle Preise in ${contents.currency.full_name}.</p>
          </td>
          <td class="pt-2 pb-4 pl-8">
            ${( notEmptyArray(contents.line_item_addition_total_groups) || 
                notEmptyArray(contents.addition_groups)
              ) && html`
              <div class="flex justify-between">
                <span>${labelWeak('Subtotal')}</span>
                <span>${contents.subtotal}</span>
              </div>
              ${additionGroup(contents.line_item_addition_total_groups)}
              ${additionGroup(contents.addition_groups)}
            `}
            <div class="flex justify-between font-medium">
              <span>${label('Total')}</span>
              <span class="text-right">${textStrong(contents.total)}</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
    
    <div class="text-sm">
      <p>${contents.close.complimentary}</p>
      <p>${contents.close.signature}</p>
    </div>
    
    <div class="page-payment-methods">
      <h2 class="mt-8 mb-28 font-doc-sans-heading text-3xl text-brand">
        Zahlungsmethoden
      </h2>
      <div class="grid grid-cols-6">
        <img class="block mb-28" src="/assets/img/twint-qr-code-free-amount.svg">
        <div class="col-span-5 mb-28"></div>
        <img class="block col-span-1" src="/assets/img/paypal-qr-code-free-amount.svg">
        <div class="col-span-5"></div>
      </div>
    </div>
  `
}
