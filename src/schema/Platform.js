cube(`Platform`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_evd_platform`,
  
  joins: {
    Device: {
      relationship: `hasMany`,
      sql: `${Platform}.id = ${Device}.platform_id`
    }
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
    }
  }
});
