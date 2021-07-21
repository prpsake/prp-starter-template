import { html } from 'hybrids'
import { ensureArray } from '../helpers'



import { GeoItem } from './geo-item'
import { Person } from './person'



export const Address = {
  country: GeoItem,
  region: GeoItem,
  postcode: '',
  locality: '',
  street: '',
  plot: '',
  name: '',
  person: Person,
}



export default (
  addresses,
  options = {
    showPerson: false,
    showEmail: false,
    showMobile: false,
    showPhone: false
  }

) => ensureArray(addresses).map(item => html`
  <p>${item.name}</p>
  ${options.showPerson && html`
    <p>${item.person.first_name} ${item.person.last_name}</p>
  `}
  <p>${item.street} ${item.plot}</p>
  <p>${item.postcode} ${item.locality}</p>
  ${options.showEmail && html`
    <p class="underline">${item.person.email}</p>
  `}
  ${options.showMobile && html`
    <p>${item.person.mobile}</p>
  `}
  ${options.showPhone && html`
    <p>${item.person.phone}</p>
  `}
`)