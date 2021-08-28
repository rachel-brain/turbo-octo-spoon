const {
    Blogger
} = require('../models');

const bloggerdata = [{
        username: 'Bill Gates',
        email: 'bill.gates@gmail.com',
        password: 'practice123'
    },
    {
        username: 'Elon Musk',
        email: 'elon.musk@gmail.com',
        password: 'theorist789'
    },
    {
        username: 'Richard Branson',
        email: 'richard.branson@gmail.com',
        password: 'childish876'
    },
    {
        username: 'Steve Jobs',
        email: 'steve.jobs@gmail.com',
        password: 'civilian456'
    },
];

const seedBlogger = () => Blogger.bulkCreate(bloggerdata);

module.exports = seedBlogger;