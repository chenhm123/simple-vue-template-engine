const fs = require('fs');
const translator = require('./templateTranslator.js');




fs.readFile('./index.Vue', 'utf8', (err, data) => {
  if (err) throw err;
  let templateModule = data.substring(11,data.match(/<\/template>/).index-1);


  console.log(translator(templateModule,{
      list:[{
          a:'<div>xx</div>'
      },{
          a:2
      }],
      test:'xxx'
  }))
  

});