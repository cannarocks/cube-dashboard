cube(`BugMedia`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_evd_bug_media`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    uploaded: {
      sql: `uploaded`,
      type: `time`
    }
  }
});
