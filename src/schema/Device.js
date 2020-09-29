cube(`Device`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_crowd_appq_device`,
  
  joins: {
    Platform: {
      relationship: `hasOne`,
      sql: `${Device}.platform_id = ${Platform}.id`
    },
    Os: {
      relationship: `hasOne`,
      sql: `${Device}.os_version_id = ${Os}.id`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, updateTime]
    }
  },
  
  dimensions: {
    osVersion: {
      sql: `os_version`,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    network: {
      sql: `network`,
      type: `string`
    },
    
    manufacturer: {
      sql: `manufacturer`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    operatingSystem: {
      sql: `operating_system`,
      type: `string`
    },
    
    formFactor: {
      sql: `form_factor`,
      type: `string`
    },
    
    pcType: {
      sql: `pc_type`,
      type: `string`
    },
    
    updateTime: {
      sql: `update_time`,
      type: `time`
    },
    
    creationTime: {
      sql: `creation_time`,
      type: `time`
    }
  }
});
