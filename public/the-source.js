import { define, html } from "hybrids"
import { notEmptyArray } from "./helpers"



import address from "./types/address"
import additionGroup from "./types/addition-group"
import lineItem from "./types/line-item"



import { textStrong, label, labelWeak } from "./types/text"



import AQRBill from "@prpsake/prp-qr-bill"
import { showWith, notShowWith } from "@prpsake/prp-qr-bill/Helpers"
import * as Parser from "@prpsake/prp-qr-bill/Parser"
import * as Validator from "@prpsake/prp-qr-bill/Validator"
import * as Data from "@prpsake/prp-qr-bill/Data"
import * as Formatter from "@prpsake/prp-qr-bill/Formatter"



export default {
  tag: 'the-source',
  data: {
    set: (_, data) => data
  },
  render: ({ data: { contents } }) => html`
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
        ${address(contents.billingAddress, { showPerson: true })}
      </dd>

      <dt>${label('betreffend')}</dt>
      <dd class="col-span-5"><a href=${contents.subject.locator}>${contents.subject.title}</a></dd>
      
      <dt>${label('Datum')}</dt>
      <dd class="col-span-5">${contents.date}</dd>
      
      <dt>${label('fällig am')}</dt>
      <dd class="col-span-5 font-medium">${textStrong(`${contents.dueDate}, netto`)}</dd>

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
        ${lineItem(contents.lineItems)}
      </tbody>

      <tfoot class="break-inside-avoid">
        <tr class="align-top border-t border-brand border-opacity-90">
          <td class="pt-2 pb-4 pr-4" colspan="4">
            <p class="oblique">Alle Preise in ${contents.currency.fullName}.</p>
          </td>
          <td class="pt-2 pb-4 pl-8">
            ${( notEmptyArray(contents.lineItemAdditionTotalGroups) || 
                notEmptyArray(contents.additionGroups)
              ) && html`
              <div class="flex justify-between">
                <span>${labelWeak('Subtotal')}</span>
                <span>${contents.subtotal}</span>
              </div>
              ${additionGroup(contents.lineItemAdditionTotalGroups)}
              ${additionGroup(contents.additionGroups)}
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
      <div class="mx-pagedjs">
        <h2 class="mt-8 mb-28 font-doc-sans-heading text-3xl text-brand">
          Zahlungsmethoden
        </h2>
        <div class="grid grid-cols-12">
          <img class="block col-span-3 mb-28" src="/assets/img/twint-qr-code-free-amount.svg">
          <div class="col-span-6 mb-28"></div>
          <img class="block col-span-3" src="/assets/img/paypal-qr-code-free-amount.svg">
        </div>
      </div>
      <a-qr-bill
        lang=${"de"}
        currency=${contents.currency.code}
        amount=${Formatter.moneyFromNumberStr2(String(contents.total))}
        iban=${Formatter.blockStr4(contents.iban)}
        reference=${""}
        message=${""}
        messageCode=${""}
        creditorName=${contents.address.name}
        creditorAddressLine1=${contents.address.street}
        creditorAddressLine2=${contents.address.locality}
        debtorName=${""}
        debtorAddressLine1=${""}
        debtorAddressLine2=${""}
        qrCodeString=${""}
        showQRCode=${false}
        showAmount=${true}
        showReference=${false}
        showDebtor=${false}
        showAdditionalInfo=${false}
        reduceContent=${false}>
      </a-qr-bill>
    </div>
  `
}


define(AQRBill)