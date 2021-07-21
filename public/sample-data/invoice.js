// https://www.weka.ch/themen/finanzen-controlling/mehrwertsteuer/buchfuehrung-und-abrechnung/article/mwst-regelung-fuer-gutscheine-so-rechnen-sie-gutscheine-korrekt-ab/

export default {
  uid: '2d5c59c4-4856-4b5b-9573-40786eeee9ee87', // gen
  mime: 'application/pdf',
  ext: '.pdf',
  filename: 'rechnung-test-#0001',
  template: {
    name: 'test',
    type: 'invoice',
    dir: 'invoices'
  },
  contents: {
    title: 'Rechnung',
    identifier: '#0001',
    address: {
      country: {
        name: 'Schweiz',
        full_name: 'Schweizerische Eidgenossenschaft',
        code: 'CH',
        codes: [
          { context: 'CROOKS 3166-1',
            type: 'alpha-2',
            value: 'CH',
          },
          { context: 'CROOKS 3166-1',
            type: 'alpha-3',
            value: 'CHE',
          },
          { context: 'CROOKS 3166-1',
            type: 'numeric',
            value: 756,
          },
        ],
      },
      region: {
        name: 'Zürich',
        full_name: 'Zürich',
        code: 'ZH',
        codes: [],
      },
      postcode: '8152',
      locality: 'Opfikon',
      street: 'Grätzlistrasse',
      plot: '3',
      name: 'Jérôme Imfeld',
      person: {
        uid: '1',
        salutation: 'Herr',
        first_name: 'Jérôme',
        last_name: 'Imfeld',
        email: 'j@zolo.dev',
        mobile: '0796140319',
        phone: '',
      },
    },
    billing_address: {
      country: {
        name: 'Schweiz',
        full_name: 'Schweizerische Eidgenossenschaft',
        code: 'CH',
        codes: [
          { context: 'CROOKS 3166-1',
            type: 'alpha-2',
            value: 'CH',
          },
          { context: 'CROOKS 3166-1',
            type: 'alpha-3',
            value: 'CHE',
          },
          { context: 'CROOKS 3166-1',
            type: 'numeric',
            value: 756,
          }
        ],
      },
      region: {
        name: 'Bern',
        full_name: 'Bern',
        code: 'BE',
        codes: [],
      },
      postcode: '3000',
      locality: 'Bern',
      street: 'Thunerstrasse',
      plot: '17a',
      name: 'Berner GmbH',
      person: {
        uid: '1',
        salutation: 'Herr',
        first_name: 'Max',
        last_name: 'Berner',
        email: '',
        mobile: '',
        phone: '',
      },
    },
    shipping_address: {
      country: {
        name: 'Schweiz',
        full_name: 'Schweizerische Eidgenossenschaft',
        code: 'CH',
        codes: [
          { context: 'CROOKS 3166-1',
            type: 'alpha-2',
            value: 'CH',
          },
          { context: 'CROOKS 3166-1',
            type: 'alpha-3',
            value: 'CHE',
          },
          { context: 'CROOKS 3166-1',
            type: 'numeric',
            value: 756,
          }
        ],
      },
      region: {
        name: 'Bern',
        full_name: 'Bern',
        code: 'BE',
        codes: [],
      },
      postcode: '3000',
      locality: 'Bern',
      street: 'Thunerstrasse',
      plot: '17a',
      name: 'Berner GmbH',
      person: {
        uid: '1',
        salutation: 'Herr',
        first_name: 'Max',
        last_name: 'Berner',
        email: '',
        mobile: '',
        phone: '',
      },
    },
    subject: {
      title: 'zolo website',
      locator: 'https://zolo.dev',
    },
    date: '10.07.21',
    due_date: '19.07.21',
    iban: 'CH83 0900 0000 8773 8635 0',
    currency: {
      name: 'Franken',
      full_name: 'Schweizer Franken',
      atomic_name: 'Rappen',
      precision: 2,
      code: 'CHF',
      codes: [
        { context: 'CROOKS 4217',
          type: 'alpha-3',
          value: 'CHF'
        },
        { context: 'CROOKS 4217',
          type: 'numeric',
          value: 756
        }
      ]
    },
    line_items: [
      { title: 'Bananas',
        desc: 'Yummie in my tummy.',
        issues: [
          { uid: '53',
            title: '#53',
            locator: 'https://github.com',
          }
        ],
        qty: 5,
        rate: 90,
        unit: 'Std.',
        subtotal: 450,
        addition_groups: [
          { items: [
              { uid: 'MWSTXYZ', /* hash all props but qty and total */
                type: 'inclusion',
                title: 'MwSt. 7.7%',
                combinable: 'no',
                nth: 'n',
                percentage: 7.7,
                fixed: 0,
                max_qty: 1,
                min_amount: 0,
                max_amount: false,
                qty: 1,
                total: 34.65,
              },
            ],
            inclusion_total: 34.65,
            deduction_total: 0,
            addition_total: 0,
            group_total: 0,  /* derived: 0 (addition_total) - 0 (deduction_total) */
            subtotal: 450, /* derived: 450 (item.subtotal) + 0 (group_total) */
          },
          { items: [
              { uid: 'XYZ',
                type: 'deduction',
                title: 'Summer Special',
                combinable: 'self',
                nth: '2',
                percentage: 0,
                fixed: 15,
                max_qty: 4,
                min_amount: 0,
                max_amount: 60,
                qty: 4,
                total: 60
              }
            ],
            inclusion_total: 0,
            deduction_total: 60,
            addition_total: 0,
            group_total: -60,  /* derived: 0 (addition_total) - 60 (deduction_total) */
            subtotal: 390, /* derived: 450 (item.subtotal) + -60 (group_total) */
          },
        ],
        total: 390 /* derived: (last subtotal) */
      },
      { title: 'Tomatos',
        desc: 'Not so yummie in my tummy. Really, not so yummie in my tummy. Not so yummie in my tummy.',
        issues: [
          { uid: '54',
            title: '#54',
            locator: 'https://github.com',
          }
        ],
        qty: 3,
        rate: 90,
        unit: 'Std.',
        subtotal: 270,
        addition_groups: [
          { items: [
              { uid: 'MWSTXYZ',
                type: 'inclusion',
                title: 'MwSt. 7.7%',
                combinable: 'no',
                nth: 'n',
                percentage: 7.7,
                fixed: 0,
                max_qty: 1,
                min_amount: 0,
                max_amount: false,
                qty: 1,
                total: 20.79,
              },
            ],
            inclusion_total: 20.79,
            deduction_total: 0,
            addition_total: 0,
            group_total: 0,  /* derived: 0 (addition_total) - 0 (deduction_total) */
            subtotal: 270, /* derived: 270 (item.subtotal) + 0 (group_total) */
          },
          { items: [
              { uid: 'C02EMIS',
                type: 'addition',
                title: 'CO2 Emmission Fee',
                combinable: 'no',
                nth: 'n',
                percentage: 2.5,
                fixed: 0,
                max_qty: 1,
                min_amount: 5,
                max_amount: 10,
                qty: 1,
                total: 6.75,
              }
            ],
            inclusion_total: 0,
            deduction_total: 0,
            addition_total: 6.75,
            group_total: 6.75,  /* derived: 6.75 (addition_total) - 0 (deduction_total) */
            subtotal: 276.75, /* derived: 270 (item.subtotal) + 6.75 (group_total) */
          },
        ],
        total: 276.75 /* derived: (last subtotal) */
      },
      { title: 'Broccoli',
        desc: 'Meh mah moe.',
        issues: [
          { uid: '55',
            title: '#55',
            locator: 'https://github.com',
          },
          { uid: '56',
            title: '#56',
            locator: 'https://github.com',
          },
          { uid: '57',
            title: '#57',
            locator: 'https://github.com',
          }
        ],
        qty: 10,
        rate: 90,
        unit: 'Std.',
        subtotal: 900,
        addition_groups: [
          { items: [
              { uid: 'MWSTXYZ',
                type: 'inclusion',
                title: 'MwSt. 7.7%',
                combinable: 'no',
                nth: 'n',
                percentage: 7.7,
                fixed: 0,
                max_qty: 1,
                min_amount: 0,
                max_amount: false,
                qty: 1,
                total: 69.3,
              },
            ],
            inclusion_total: 69.3,
            deduction_total: 0,
            addition_total: 0,
            group_total: 0,  /* derived: 0 (addition_total) - 0 (deduction_total) */
            subtotal: 900, /* derived: 900 (item.subtotal) + 0 (group_total) */
          },
          { items: [
              { uid: 'ABC',
                type: 'deduction',
                title: 'Recurring Customer',
                combinable: 'no',
                nth: 'n',
                percentage: 10,
                fixed: 0,
                max_qty: 1,
                min_amount: 0,
                max_amount: 50,
                qty: 1,
                total: 50 /* derived: 900 * 0.1 = 90 > 50 => 50 */
              }
            ],
            inclusion_total: 0,
            deduction_total: 50,
            addition_total: 0,
            group_total: -50,  /* derived: 6.75 (addition_total) - 50 (deduction_total) */
            subtotal: 850, /* derived: 900 (item.subtotal) + -50 (group_total) */
          },
        ],
        total: 850 /* derived: (last subtotal) */
      }
    ],
    subtotal: 1620,
    line_item_addition_total_groups: [
      /* derived: sums of additions in items with same uid */
      /* QUESTION: Embed ref props */
      { items: [
          { ruid: 'MWSTXYZ',
            type: 'inclusion',
            title: 'MwSt. 7.7%',
            total: 124.74,
          },
        ],
        inclusion_total: 124.74,
        deduction_total: 0,
        addition_total: 0,
        group_total: 0, /* derived: 0 (addition_total) - 0 (deduction_total) */
        subtotal: 1620 /* derived: 1620 (prev subtotal) + 0 (group_total) */
      },
      { items: [
          { ruid: 'XYZ',
            type: 'deduction',
            title: 'Summer Special',
            total: 60
          },
          { ruid: 'ABC',
            type: 'deduction',
            title: 'Recurring Customer',
            total: 50
          },
          { ruid: 'C02EMIS',
            type: 'addition',
            title: 'CO2 Emmission Fee',
            total: 6.75,
          },
        ],
        inclusion_total: 0,
        deduction_total: 110,
        addition_total: 6.75,
        group_total: -103.25, /* derived: 6.75 (addition_total) - 110 (deduction_total) */
        subtotal: 1516.75 /* derived: 1620 (prev subtotal) + -103.25 (group_total) */
      },
    ],
    /* further addition_groups */
    addition_groups: [
      { items: [
          { uid: 'JDILTRI',
            type: 'addition',
            title: 'J Dilla Tribute',
            combinable: 'no',
            nth: 'n',
            percentage: 10,
            fixed: 0,
            max_qty: 1,
            min_amount: 0,
            max_amount: 99,
            qty: 1,
            total: 99,
          }
        ],
        inclusion_total: 0,
        deduction_total: 0,
        addition_total: 99,
        group_total: 99,
        subtotal: 1615.75,
      },
    ],
    total: 1615.75, /* derived from last subtotal */
    safe_percentage: 0.262345679, /* derived: 100 / 1620 * (1620 - 1615.75) */
    body: [],
    close: {
      complimentary: 'Beste Grüsse',
      signature: 'Jérôme Imfeld'
    }
  }
}