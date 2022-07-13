export default{
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title : 'user name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'file'
        },
        {
            name: 'idCard',
            title: 'Nomor KTP',
            type: 'string'
        },
        {
            name: 'kotaAsal',
            title: 'Kota Asal',
            type: 'string'
        },
        {
            name: 'Old',
            title: 'Umur',
            type: 'string'
        }
    ]
}