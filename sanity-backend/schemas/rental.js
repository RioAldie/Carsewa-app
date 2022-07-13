export default{
    name: 'rental',
    title: 'Rental',
    type: 'document',
    fields:[
        {
            name: 'idRental',
            title: 'Nomor ID Rental',
            type: 'string'
        },
        {
            name: 'customer',
            title: 'Customer',
            type: 'reference',
            to:[{
                type:'user'
            }]
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'string'
        },
        {
            name: 'car',
            title: 'Car',
            type: 'reference',
            to:[{
                type:'car'
            }]
        },
        {
            name: 'days',
            title: 'Days Rental',
            type: 'number'
        },
        {
            name: 'start',
            title: 'Start Rental',
            type: 'string'
        },
        {
            name: 'end',
            title: 'End Rental',
            type: 'string'
        },
        {
            name: 'cost',
            title: 'Total Cost',
            type: 'number'
        },
    ]
}