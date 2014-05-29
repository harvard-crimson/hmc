(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-327124-1', 'thecrimson.com');
ga('send', 'pageview');

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + 
    '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function() {
    googletag.defineSlot('/1046082/TheCrimson_AllArticles_ATF_728x90', [728, 90], 'TheCrimson_AllArticles_ATF_728x90').addService(googletag.pubads());
    googletag.defineSlot('/1046082/TheCrimson_AllArticles_BTF_728x90', [728, 90], 'TheCrimson_AllArticles_BTF_728x90').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});

addthis.layers({
    'theme' : 'transparent',
    'share' : {
      'position' : 'right',
      'numPreferredServices' : 5
    }
});

var disqus_shortname = 'thecrimson';
var disqus_url = 'http://features.thecrimson.com/2014/hmc/';
(function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.src = 'http://thecrimson.disqus.com/embed.js';
    dsq.async = true;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0])
        .appendChild(dsq);
})();