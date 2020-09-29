cube(`PaymentAttribution`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_payment`,
  
  joins: {
    AppqPaymentRequest: {
      relationship: `hasOne`,
      sql: `${PaymentAttribution}.request_id = ${AppqPaymentRequest}.id`
    },
    Tester: {
      relationship: `hasOne`,
      sql: `${PaymentAttribution}.tester_id = ${Tester}.id`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, receiptTitle, creationDate]
    },
    
    totalAmount: {
      sql: `amount`,
      type: `sum`,
      title: `Total Amount`
    },

    totalAmountPaid: {
      sql: `amount`,
      type: `sum`,
      title: `Total Paid`,
      filters: [
        { sql: `${PaymentAttribution}.is_paid = 1` }
      ]
    },

    totalAmountUnPaid: {
      sql: `amount`,
      type: `sum`,
      title: `Total UnPaid`,
      filters: [
        { sql: `${PaymentAttribution}.is_paid = 0` }
      ]
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    workType: {
      sql: `work_type`,
      type: `string`
    },
    
    note: {
      sql: `note`,
      type: `string`
    },
    
    receiptTitle: {
      sql: `receipt_title`,
      type: `string`
    },
    
    creationDate: {
      sql: `creation_date`,
      type: `time`
    }
  }
});
