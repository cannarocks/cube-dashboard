cube(`BugStatus`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_evd_bug_status`,
  
  joins: {
    Bug: {
      relationship: `hasMany`,
      sql: `${Bug}.status_id = ${BugStatus}.id`
    },
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    icon: {
      sql: `icon`,
      type: `string`
    }
  }
});
