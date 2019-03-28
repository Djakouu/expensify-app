import moment from 'moment';

export default [
    {
        description: 'rent',
        amount: 100,
        createdAt: 0,
        note: 'Note 1',
        id: 1
    },
    {
        description: 'gas',
        amount: 200,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        note: 'Note 2',
        id: 2
    },
    {
        description: 'water',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: 'Note 3',
        id: 3   
    }
]