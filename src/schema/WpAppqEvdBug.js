cube(`Bug`, {
  sql: `SELECT * FROM crowd_appq_writer.wp_appq_evd_bug`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, internalId, created, updated, lastSeenDate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    severity:{
      type: `string`,
      case: {
        when: [
          { sql: `severity_id = 1`, label: `Low` },
          { sql: `severity_id = 2`, label: `Medium` },
          { sql: `severity_id = 3`, label: `High` },
          { sql: `severity_id = 4`, label: `Critical` },
        ],
        else: { label: `Unknown` }
      }
    },

    replicability:{
      type: `string`,
      case: {
        when: [
          { sql: `bug_replicability_id = 1`, label: `Sometimes` },
          { sql: `bug_replicability_id = 2`, label: `Always` },
          { sql: `bug_replicability_id = 3`, label: `Once` },
        ],
        else: { label: `Unknown` }
      }
    },

    bugType:{
      type: `string`,
      case: {
        when: [
          { sql: `bug_type_id = 1`, label: `Crash` },
          { sql: `bug_type_id = 2`, label: `Functional` },
          { sql: `bug_type_id = 3`, label: `Graphic` },
          { sql: `bug_type_id = 5`, label: `Performance` },
          { sql: `bug_type_id = 6`, label: `Malfunction` },
          { sql: `bug_type_id = 7`, label: `Typo` },
          { sql: `bug_type_id = 8`, label: `Other` },
          { sql: `bug_type_id = 9`, label: `Security` },
          { sql: `bug_type_id = 10`, label: `Usability` },
        ],
        else: { label: `Unknown` }
      }
    },
    
    internalId: {
      sql: `internal_id`,
      type: `string`,
      shown: false
    },
    
    message: {
      sql: `message`,
      type: `string`,
      shown: false
    },
    
    description: {
      sql: `description`,
      type: `string`,
      shown: false
    },
    
    expectedResult: {
      sql: `expected_result`,
      type: `string`,
      shown: false
    },
    
    currentResult: {
      sql: `current_result`,
      type: `string`,
      shown: false
    },
    
    statusReason: {
      sql: `status_reason`,
      type: `string`,
      shown: false
    },
    
    lastSeen: {
      sql: `last_seen`,
      type: `string`,
      shown: false
    },
    
    applicationSection: {
      sql: `application_section`,
      type: `string`,
      shown: false
    },
    
    note: {
      sql: `note`,
      type: `string`,
      shown: false
    },
    
    manufacturer: {
      sql: `manufacturer`,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    os: {
      sql: `os`,
      type: `string`
    },
    
    osVersion: {
      sql: `os_version`,
      type: `string`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    updated: {
      sql: `updated`,
      type: `time`,
      shown: false
    },
    
    lastSeenDate: {
      sql: `last_seen_date`,
      type: `time`,
      shown: false
    },
    
    lastSeenTime: {
      sql: `last_seen_time`,
      type: `time`,
      shown: false
    }
  }
});
