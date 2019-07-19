import React from "react"
import { customersList } from "./Data"

const Customers = () => {
  const customers = customersList
  return (
    <div className="customers-section-wrapper">
      <div className="customers-section container">
        Igloo has been featured in
        {customers.map(customer => {
          return (
            <div className="customer-logo" key={customer.id}>
              <img
                src={customer.customerUrl}
                alt={customer.customerName}
                title={customer.customerName}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Customers
