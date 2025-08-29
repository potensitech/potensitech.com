const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const toml = require('toml');

// Path to config.toml - adjusted for new location in core/tools/
const configPath = path.join(__dirname, '..', '..', 'config.toml');
const sitemapPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml');
const sitemapGzipPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml.gz');
const robotsPath = path.join(__dirname, '..', '..', 'public', 'robots.txt');

// Read baseURL from config.toml
function getBaseUrl() {
  const configContent = fs.readFileSync(configPath, 'utf-8');
  const config = toml.parse(configContent);
  return config.baseURL.endsWith('/') ? config.baseURL.slice(0, -1) : config.baseURL;
}

// Create robots.txt
function ensureRobotsTxt() {
  const baseUrl = getBaseUrl();
  
  const robotsContent = `
User-agent: *
Allow: /

Disallow: /categories/*/page/
Noindex: /categories/*/page/
Disallow: /tags/*/page/
Noindex: /tags/*/page/
Disallow: /page/
Noindex: /page/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap.xml.gz
  `;
  
  fs.writeFileSync(robotsPath, robotsContent.trim());
  console.log('robots.txt has been created or updated.');
}

// Compress sitemap.xml to sitemap.xml.gz
function compressSitemap() {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(sitemapPath);
  const destination = fs.createWriteStream(sitemapGzipPath);

  source.pipe(gzip).pipe(destination).on('finish', () => {
    console.log('sitemap.xml has been compressed to sitemap.xml.gz');
  }).on('error', (err) => {
    console.error('Error while compressing sitemap:', err);
  });
}

// Run both functions
ensureRobotsTxt();
compressSitemap();