const {
    Blogpost
} = require('../models');

const blogpostdata = [{
        title: 'Bill Gates',
        content: 'Be nice to nerds. Chances are you’ll end up working for one.'
    },
    {
        title: 'Elon Musk',
        content: 'The path to the CEO’s office should not be through the CFO’s office, and it should not be through the marketing department. It needs to be through engineering and design.'
    },
    {
        title: 'Richard Branson',
        content: 'In 30 years time, as technology moves forward even further, people are going to look back and wonder why offices ever existed.'
    },
    {
        title: 'Steve Jobs',
        content: 'What a computer is to me is the most remarkable tool that we have ever come up with. It is the equivalent of a bicycle for our minds.'
    },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;