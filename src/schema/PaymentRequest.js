cube(`AppqPaymentRequest`, {
    sql: `SELECT * FROM crowd_appq_writer.wp_appq_payment_request`,

    joins: {
        PaymentAttribution: {
            relationship: `hasMany`,
            sql: `${PaymentAttribution}.request_id = ${AppqPaymentRequest}.id`
        },
        Tester: {
            relationship: `hasOne`,
            sql: `${AppqPaymentRequest}.tester_id = ${Tester}.id`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [fiscalId, addressCity, addressCountry, id, receiptTitle, requestDate, paidDate, stampPaidDate]
        },

        amount: {
            sql: `amount`,
            type: `sum`
        },

        totalAmount: {
            sql: `amount`,
            type: `sum`,
            title: `Total Amount`
        },

        totalAmountPaid: {
            sql: `amount`,
            type: `sum`,
            title: `Total Paid`,
            filters: [
                {sql: `${AppqPaymentRequest}.is_paid = 1`}
            ]
        },

        totalAmountUnPaid: {
            sql: `amount`,
            type: `sum`,
            title: `Total UnPaid`,
            filters: [
                {sql: `${AppqPaymentRequest}.is_paid = 0`}
            ]
        },
    },

    dimensions: {
        fiscalId: {
            sql: `fiscal_id`,
            type: `string`
        },

        addressStreet: {
            sql: `address_street`,
            type: `string`
        },

        addressCity: {
            sql: `address_city`,
            type: `string`
        },

        addressCountry: {
            sql: `address_country`,
            type: `string`
        },

        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true
        },

        paypalEmail: {
            sql: `paypal_email`,
            type: `string`
        },

        bankEmail: {
            sql: `bank_email`,
            type: `string`
        },

        iban: {
            sql: `iban`,
            type: `string`
        },

        bank: {
            sql: `bank`,
            type: `string`
        },

        withholdingTaxPercentage: {
            sql: `withholding_tax_percentage`,
            type: `string`
        },

        receiptTitle: {
            sql: `receipt_title`,
            type: `string`
        },

        requestDate: {
            sql: `request_date`,
            type: `time`
        },

        paidDate: {
            sql: `paid_date`,
            type: `time`
        },

        stampPaidDate: {
            sql: `stamp_paid_date`,
            type: `time`
        }
    }
});
