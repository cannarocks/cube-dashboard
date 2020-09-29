cube(`ExpPoints`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_exp_points`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, creationDate]
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
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    creationDate: {
      sql: `creation_date`,
      type: `time`
    }
  }
});
