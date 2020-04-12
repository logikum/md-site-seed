'use strict';

function getTheme( ctx ) {
  return  global.theme || 'liberty';
}
module.exports = getTheme;
