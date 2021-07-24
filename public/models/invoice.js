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
    billing_address: Address,
    shipping_address: Address,
    subject: {
      title: '',
      locator: '',
    },
    date: '',
    due_date: '',
    iban: '',
    currency: Currency,
    line_items: [LineItem],
    subtotal: 0,
    line_item_addition_total_groups: [AdditionTotalGroup],
    addition_groups: [AdditionGroup],
    total: 0,
    safe_percentage: 0,
    //body: [],
    close: {
      complimentary: '',
      signature: '',
    },
  },
  [store.connect] : {
    get: 
      () => 
      fetch(`${window.location}data`)
      .then(resp => resp.json())
      .then(data => data),
  },
}