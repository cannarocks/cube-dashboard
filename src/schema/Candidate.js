cube(`Candidate`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_crowd_appq_has_candidate`,
  
  joins: {
    Tester: {
      relationship: 'hasOne',
      sql: `${Tester}.wp_user_id = ${Candidate}.user_id`
    },
    Campaign: {
      relationship: 'hasOne',
      sql: `${Candidate}.campaign_id = ${Campaign}.id`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [subscriptionDate]
    },
    countSelection: {
      type: `count`,
      drillMembers: [subscriptionDate],
      title: `Selected Testers`,
      filters: [
        {sql: `${Candidate}.accepted = 1`}
      ]
    }
  },
  
  dimensions: {

    devices: {
      sql: `devices`,
      type: `string`
    },
    user_id: {
      sql: `user_id`,
      type: `number`,
      primaryKey: true
    },
    campaign_id: {
      sql: `campaign_id`,
      type: `number`,
      primaryKey: true
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
