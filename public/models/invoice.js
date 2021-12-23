import { store } from "hybrids";


/* PRP */

import { Address } from "./address.js"
import { Currency } from "./currency.js"
import { LineItem } from "./line-item.js";
import { AdditionGroup, AdditionTotalGroup } from "./addition-group.js";



/* User */

// QR Bill
import * as Parser from "@prpsake/prp-qr-bill/Parser"
import * as Validator from "@prpsake/prp-qr-bill/Validator"
import * as Data from "@prpsake/prp-qr-bill/Data"



export default {
  uid: "",
  mime: "",
  ext: "",
  filename: "",
  lang: "",
  template: {
    name: "",
    type: "",
    dir: ""
  },
  contents: {
    title: "",
    identifier: "",
    address: Address,
    billingAddress: Address,
    shippingAddress: Address,
    subject: {
      title: "",
      locator: "",
    },
    date: "",
    dueDate: "",
    iban: "",
    currency: Currency,
    lineItems: [LineItem],
    subtotal: 0,
    lineItemAdditionTotalGroups: [AdditionTotalGroup],
    additionGroups: [AdditionGroup],
    total: 0,
    savePercentage: 0,
    //body: [],
    close: {
      complimentary: "",
      signature: "",
    },
    _: {
      qrBill: {
        lang: "",
        currency: "",
        amount: "",
        iban: "",
        reference: "",
        message: "",
        messageCode: "",
        creditorName: "",
        creditorAddressLine1: "",
        creditorAddressLine2: "",
        debtorName: "",
        debtorAddressLine1: "",
        debtorAddressLine2: "",
        qrCodeString: ""
      }
    }
  },
  [store.connect] : {
    get: 
      () => 
      fetch("./data")
      .then(resp => resp.json())
      .then(data => {
        if (data.contents?._?.qrBill) {
          data.contents._.qrBill = 
            [data.contents._.qrBill]
            .map(Parser.parseJson)
            .map(Validator.validate)
            .map(Data.object)
            [0]
        }
        return data
      })
      .catch(e => console.log(e)),
  },
}