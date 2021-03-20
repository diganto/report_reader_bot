 console.log("Testing monish bot...");

 const fs = require('fs');
 const download = require('download');
 var pdfreader = require("pdfreader");
 (async () => {
    // await download('https://www.rollo.com/wp-content/uploads/2017/01/Labels-Sample.pdf', 'dist');
  
     fs.writeFileSync('downloads/foo.pdf', await download('https://www.rollo.com/wp-content/uploads/2017/01/Labels-Sample.pdf'));
  
    //  download('unicorn.com/foo.pdf').pipe(fs.createWriteStream('dist/foo.pdf'));
  
    //  await Promise.all([
    //      'unicorn.com/foo.pdf',
    //      'cats.com/dancing.gif'
    //  ].map(url => download(url, 'dist')));
    fs.readFile("downloads/foo.pdf", (err, pdfBuffer) => {
        // pdfBuffer contains the file content
        new pdfreader.PdfReader().parseBuffer(pdfBuffer, function (err, item) {
          if (err) console.log("error is found:",err);
          else if (!item) console.log("item problem");
          else if (item.text) console.log(item.text);
        });
      });
 })();

