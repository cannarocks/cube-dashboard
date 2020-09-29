cube(`PaymentAttribution`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_payment`,
  
  joins: {
    Platform: {
      relationship: `hasOne`,
      sql: `${PaymentAttribution}.request_id = ${AppqPaymentRequest}.id`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, receiptTitle, creationDate]
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
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
