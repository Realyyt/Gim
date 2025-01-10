const fs = require('fs');
const path = require('path');

const googleAnalyticsCode = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11522646864"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-11522646864');
  </script>
`;

const outputDir = path.join(__dirname, '../out');

fs.readdirSync(outputDir).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(outputDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace('<head>', '<head>' + googleAnalyticsCode);
    fs.writeFileSync(filePath, content);
  }
});

console.log('Added Google Analytics to all HTML files'); 