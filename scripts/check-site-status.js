const https = require('https');
const http = require('http');

const domain = 'oshadhadahanayaka.vercel.app';
const urls = [
  `https://${domain}`,
  `http://${domain}`,
  `https://${domain}/sitemap.xml`,
  `https://${domain}/robots.txt`
];

console.log('🔍 Checking site status for:', domain);
console.log('=====================================\n');

async function checkUrl(url, timeout = 10000) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const req = protocol.get(url, { timeout }, (res) => {
      console.log(`✅ ${url} - Status: ${res.statusCode}`);
      resolve({ url, status: res.statusCode, success: res.statusCode === 200 });
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${url} - Error: ${err.message}`);
      resolve({ url, status: 'ERROR', success: false, error: err.message });
    });
    
    req.on('timeout', () => {
      console.log(`⏰ ${url} - Timeout`);
      req.destroy();
      resolve({ url, status: 'TIMEOUT', success: false });
    });
    
    req.setTimeout(timeout);
  });
}

async function checkSiteStatus() {
  console.log('🌐 Checking site accessibility...\n');
  
  let successCount = 0;
  const results = [];
  
  for (const url of urls) {
    const result = await checkUrl(url);
    results.push(result);
    if (result.success) successCount++;
  }
  
  console.log(`\n📊 Results: ${successCount}/${urls.length} URLs accessible`);
  
  if (successCount === 0) {
    console.log('\n⚠️  All URLs failed. Possible issues:');
    console.log('• Site might be down or deploying');
    console.log('• Network connectivity issues');
    console.log('• DNS resolution problems');
    console.log('• Vercel deployment in progress');
    
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Check if your site is deployed on Vercel');
    console.log('2. Try accessing the site manually in your browser');
    console.log('3. Check your Vercel dashboard for deployment status');
    console.log('4. Wait a few minutes and try again');
  } else if (successCount < urls.length) {
    console.log('\n⚠️  Some URLs failed. This might be normal.');
    console.log('• Main site is working ✅');
    console.log('• Some files might not be accessible yet');
  } else {
    console.log('\n✅ All URLs are accessible! Your site is working properly.');
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Manually visit: https://oshadhadahanayaka.vercel.app');
  console.log('2. Check Vercel dashboard for deployment status');
  console.log('3. If site is working, proceed with Google Search Console');
  console.log('4. If site is down, check Vercel logs');
  
  console.log('\n🔗 Manual Verification:');
  console.log(`• Direct visit: https://${domain}`);
  console.log(`• Sitemap: https://${domain}/sitemap.xml`);
  console.log(`• Robots: https://${domain}/robots.txt`);
  
  console.log('\n📊 SEO Tools (once site is accessible):');
  console.log('• Google Search Console: https://search.google.com/search-console');
  console.log('• PageSpeed Insights: https://pagespeed.web.dev/');
  console.log('• Mobile-Friendly Test: https://search.google.com/test/mobile-friendly');
  
  return results;
}

checkSiteStatus().catch(console.error); 