const Blogger = require('./Blogger');
const Blogpost = require('./Blogpost');


Blogger.hasMany(Blogpost, {
  foreignKey: 'post_id',
});

Blogpost.belongsTo(Blogger, {
  foreignKey: 'post_id',
});

module.exports = { Blogger, Blogpost };