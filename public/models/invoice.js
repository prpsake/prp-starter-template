import { store } from 'hybrids';



import { Address } from '../types/address'
import { Currency } from '../types/currency'
import { LineItem } from '../types/line-item';
import { AdditionGroup, AdditionTotalGroup } from '../types/addition-group';



export default {
  uid: '',
  mime: '',
  ext: '',
  filename: '',
  template: {
    name: '',
    type: '',
    dir: ''
  },
  contents: {
    title: '',
    identifier: '',
    address: Address,
    billingAddress: Address,
    shippingAddress: Address,
    subject: {
      title: '',
      locator: '',
    },
    date: '',
    dueDate: '',
    iban: '',
    currency: Currency,
    lineItems: [LineItem],
    subtotal: 0,
    lineItemAdditionTotalGroups: [AdditionTotalGroup],
    additionGroups: [AdditionGroup],
    total: 0,
    savePercentage: 0,
    //body: [],
    close: {
      complimentary: '',
      signature: '',
    },
  },
  [store.connect] : {
    get: 
      () => 
      fetch('./data')
      .then(resp => resp.json())
      .then(data => data)
      .catch(e => console.log(e)),
  },
}