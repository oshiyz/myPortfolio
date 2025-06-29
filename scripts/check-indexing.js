const https = require('https');
const fs = require('fs');

const domain = 'oshadhadahanayaka.vercel.app';
const urls = [
  `https://${domain}`,
  `https://${domain}/sitemap.xml`,
  `https://${domain}/robots.txt`
];

console.log('🔍 Checking indexing status for:', domain);
console.log('=====================================\n');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`✅ ${url} - Status: ${res.statusCode}`);
      resolve({ url, status: res.statusCode, success: res.statusCode === 200 });
    }).on('error', (err) => {
      console.log(`❌ ${url} - Error: ${err.message}`);
      resolve({ url, status: 'ERROR', success: false });
    });
  });
}

async function checkGoogleIndexing() {
  console.log('🌐 Checking if site is accessible...\n');
  
  for (const url of urls) {
    await checkUrl(url);
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Go to Google Search Console: https://search.google.com/search-console');
  console.log('2. Add your property: https://oshadhadahanayaka.vercel.app');
  console.log('3. Verify ownership (should work now)');
  console.log('4. Go to "URL Inspection" and request indexing');
  console.log('5. Submit sitemap: https://oshadhadahanayaka.vercel.app/sitemap.xml');
  
  console.log('\n🔗 Manual Checks:');
  console.log(`• Google: https://www.google.com/search?q=site:${domain}`);
  console.log(`• Bing: https://www.bing.com/search?q=site:${domain}`);
  console.log(`• DuckDuckGo: https://duckduckgo.com/?q=site:${domain}`);
  
  console.log('\n📊 SEO Tools:');
  console.log('• PageSpeed Insights: https://pagespeed.web.dev/');
  console.log('• Mobile-Friendly Test: https://search.google.com/test/mobile-friendly');
  console.log('• Rich Results Test: https://search.google.com/test/rich-results');
}

checkGoogleIndexing().catch(console.error); 