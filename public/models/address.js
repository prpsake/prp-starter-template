import { html } from "hybrids"
import { ensureArray } from "../helpers.js"



import { GeoItem } from "./geo-item.js"
import { Person } from "./person.js"



export const Address = {
  country: GeoItem,
  region: GeoItem,
  postcode: "",
  locality: "",
  street: "",
  streetNumber: "",
  name: "",
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
    <p>${item.person.firstName} ${item.person.lastName}</p>
  `}
  <p>${item.street} ${item.streetNumber}</p>
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