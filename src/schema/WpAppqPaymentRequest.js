cube(`AppqPaymentRequest`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_payment_request`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fiscalId, addressCity, addressCountry, id, receiptTitle, requestDate, paidDate, stampPaidDate]
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    fiscalId: {
      sql: `fiscal_id`,
      type: `string`
    },
    
    addressStreet: {
      sql: `address_street`,
      type: `string`
    },
    
    addressCity: {
      sql: `address_city`,
      type: `string`
    },
    
    addressCountry: {
      sql: `address_country`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    paypalEmail: {
      sql: `paypal_email`,
      type: `string`
    },
    
    bankEmail: {
      sql: `bank_email`,
      type: `string`
    },
    
    iban: {
      sql: `iban`,
      type: `string`
    },
    
    bank: {
      sql: `bank`,
      type: `string`
    },
    
    withholdingTaxPercentage: {
      sql: `withholding_tax_percentage`,
      type: `string`
    },
    
    receiptTitle: {
      sql: `receipt_title`,
      type: `string`
    },
    
    requestDate: {
      sql: `request_date`,
      type: `time`
    },
    
    paidDate: {
      sql: `paid_date`,
      type: `time`
    },
    
    stampPaidDate: {
      sql: `stamp_paid_date`,
      type: `time`
    }
  }
});
