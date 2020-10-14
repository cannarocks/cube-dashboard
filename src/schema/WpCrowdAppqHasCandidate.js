cube(`WpCrowdAppqHasCandidate`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_crowd_appq_has_candidate`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [subscriptionDate]
    }
  },
  
  dimensions: {
    devices: {
      sql: `devices`,
      type: `string`
    },
    
    subscriptionDate: {
      sql: `subscription_date`,
      type: `time`
    },
    
    modified: {
      sql: `modified`,
      type: `time`
    }
  }
});
