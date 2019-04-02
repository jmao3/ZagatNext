const routes = require("next-routes");

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add("recipes") // blog   blog      /blog/:slug
  .add("createRecipe", "/recipe/create") // blog   blog      /blog/:slug
  .add("thread-details", "/thread-details/:id"); // blog   blog      /blog/:slug
//.add('about')                                       // about  about     /about
// .add('user', '/user/:id', 'profile')                // user   profile   /user/:id
// .add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// .add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3
