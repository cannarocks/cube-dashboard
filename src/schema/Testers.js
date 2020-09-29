cube(`Testers`, {
    sql: `SELECT * FROM crowd_appq_writer.wp_appq_evd_profile`,

    joins: {
        Bug: {
            relationship: 'hasMany',
            sql: `${Testers}.wp_user_id = ${Bug}.wp_user_id`
        },
        Device: {
            relationship: 'hasMany',
            sql: `${Testers}.id = ${Device}.id_profile`
        },
        PaymentAttribution: {
            relationship: 'hasMany',
            sql: `${Testers}.id = ${PaymentAttribution}.tester_id`
        },
        AppqPaymentRequest: {
            relationship: 'hasMany',
            sql: `${Testers}.id = ${AppqPaymentRequest}.tester_id`
        }
    },

    measures: {
        count: {
            sql: `id`,
            type: `count`
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

        surname: {
            sql: `surname`,
            type: `string`
        },

        email: {
            sql: `email`,
            type: `string`
        },

        stateIdentifier: {
            sql: `state_identifier`,
            type: `string`
        },

        employment: {
            sql: `employment`,
            type: `string`
        },

        phoneNumber: {
            sql: `phone_number`,
            type: `string`
        },

        city: {
            sql: `city`,
            type: `string`
        },

        address: {
            sql: `address`,
            type: `string`
        },

        province: {
            sql: `province`,
            type: `string`
        },

        country: {
            sql: `country`,
            type: `string`
        },
        state: {
            sql: `state`,
            type: `string`
        },

        countryCode: {
            sql: `country_code`,
            type: `string`
        },

        creationTime: {
            sql: `creation_time`,
            type: `time`,
            title: `Data Registrazione`
        },

        birthDate: {
            sql: `birth_date`,
            type: `time`
        },

        lastLogin: {
            sql: `last_login`,
            type: `time`
        },

        entryTestDate: {
            sql: `entry_test_date`,
            type: `time`
        },

        lastModified: {
            sql: `last_modified`,
            type: `time`
        }
    },
    preAggregations: {
        testerByCreated: {
            type: `rollup`,
            measureReferences: [count],
            timeDimensionReference: creationTime,
            granularity: `year`
        }
    }
});
