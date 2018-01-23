
module.exports={
	tags:"struts2,045,cve-2017-5638,20175638",
	des:"CVE-2017-5638,struts2 045漏洞检测",
	VulApps:["https://github.com/Medicean/VulApps/tree/master/s/struts2/s2-045",
		"http://ocnf2x3pk.bkt.clouddn.com/S2-032.war"],
	urls:["https://cwiki.apache.org/confluence/display/WW/S2-045",
	"https://nvd.nist.gov/vuln/detail/CVE-2017-5638"],
	suport:"我有我有一键修复、且零入侵(不修改一行代码)的方案，价格2000美金，你要吗？赶紧拿起你的电话，call me",
	doCheck:function (url,fnCbk)
	{
		var _t = this;
		// ,"echo ls:;ls;echo pwd:;pwd;echo whoami:;whoami"
		//  && cat #curPath/WEB-INF/jdbc.propertis
		// if(/\/$/.test(url))url = url.substr(0, url.length - 1);
		request(fnOptHeader({method: 'POST',uri: url
		    ,headers:
		    {
		    	"User-Agent": g_szUa,
		    	// encodeURIComponent不能编码 2017-07-18
		    	"Content-Type":g_postData
		    }})
		  ,function (error, response, body){
		  		if(body)
		  		{
		  			// body = String(body).replace(/cmdend.*?$/gmi, "cmdend\n");
		  			// console.log(body);
		  			fnDoBody(body,"s2-045 CVE-2017-5638",url,null,function(o)
		  			{
		  				var r = {"url":url,"send":g_postData};
		  				r.vul = true;
		  				fnCbk(global.copyO2O(r,o),_t);
		  			});
		  		}
		    }
		  );
	}
};