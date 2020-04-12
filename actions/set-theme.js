'use strict';

// Set theme action.
function setTheme(req, ctx, callback ) {

  // Read form data.
  var theme = req.body.theme;
  // Save input data.
  global.theme = theme;
  // Stay on home page.
  callback( '/' );
}

module.exports = setTheme;
