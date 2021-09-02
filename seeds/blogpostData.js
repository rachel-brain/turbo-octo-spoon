const {
    Blogpost
} = require('../models');

const blogpostdata = [{
        title: 'Famous quote by Bill Gates',
        content: 'Be nice to nerds. Chances are you’ll end up working for one.',
        blogger_id: 1,
        post_id: 1,
        blogger: 'Bill Gates'
    },
    {
        title: 'Famous quote by Elon Musk',
        content: 'The path to the CEO’s office should not be through the CFO’s office, and it should not be through the marketing department. It needs to be through engineering and design.',
        blogger_id: 2,
        post_id: 2,
        blogger: 'Elon Musk'
    },
    {
        title: 'Famous quote by Richard Branson',
        content: 'In 30 years time, as technology moves forward even further, people are going to look back and wonder why offices ever existed.',
        blogger_id: 3,
        post_id: 3,
        blogger: 'Richard Branson'
    },
    {
        title: 'Famous quote by Steve Jobs',
        content: 'What a computer is to me is the most remarkable tool that we have ever come up with. It is the equivalent of a bicycle for our minds.',
        blogger_id: 4,
        post_id: 4,
        blogger: 'Steve Jobs'
    },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;