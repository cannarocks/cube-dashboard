cube(`Os`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_os`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, displayName]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    versionNumber: {
      sql: `version_number`,
      type: `string`
    },
    
    displayName: {
      sql: `display_name`,
      type: `string`
    }
  }
});
