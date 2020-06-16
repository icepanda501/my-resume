const puppeteer = require('puppeteer')
const fs = require('fs');
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/resume', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
 
  await browser.close();
  return pdf
}

const writeFilePdf = async () => {
    const buffer = await printPDF()
    fs.writeFile("output.pdf", buffer, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File saved successfully!");
    });
}

writeFilePdf()