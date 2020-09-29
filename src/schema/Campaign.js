cube(`Campaign`, {
    sql: `SELECT * FROM crowd_appq_writer.wp_appq_evd_campaign`,

    joins: {
        CampaignType: {
            relationship: 'hasOne',
            sql: `${Campaign}.campaign_type_id = ${CampaignType}.id`
        },
        Candidate: {
            relationship: 'hasMany',
            sql: `${Candidate}.campaign_id = ${Campaign}.id`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [id, title, baseBugInternalId, customerTitle, startDate, endDate, closeDate]
        }
    },

    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true,
            shown: true
        },

        title: {
            sql: `title`,
            type: `string`
        },

        description: {
            sql: `description`,
            type: `string`
        },

        customer: {
            sql: `customer`,
            type: `string`
        },

        testFairyProject: {
            sql: `test_fairy_project`,
            type: `string`
        },

        testFairyBuild: {
            sql: `test_fairy_build`,
            type: `string`
        },

        jotFormPrj: {
            sql: `jot_form_prj`,
            type: `string`
        },

        baseBugInternalId: {
            sql: `base_bug_internal_id`,
            type: `string`
        },

        manualLink: {
            sql: `manual_link`,
            type: `string`
        },

        previewLink: {
            sql: `preview_link`,
            type: `string`
        },

        os: {
            sql: `os`,
            type: `string`
        },

        formFactor: {
            sql: `form_factor`,
            type: `string`
        },

        customLink: {
            sql: `custom_link`,
            type: `string`
        },

        customerTitle: {
            sql: `customer_title`,
            type: `string`
        },

        tbLink: {
            sql: `tb_link`,
            type: `string`
        },

        aqIndex: {
            sql: `aq_index`,
            type: `string`
        },

        startDate: {
            sql: `start_date`,
            type: `time`
        },

        endDate: {
            sql: `end_date`,
            type: `time`
        },

        closeDate: {
            sql: `close_date`,
            type: `time`
        }
    }
});
