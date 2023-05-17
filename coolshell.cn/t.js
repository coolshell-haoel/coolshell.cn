function xss_ajax(url,callback)
{var script_id=null;var script=document.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',url);script.setAttribute('id','coolshell_script_id');script.onload=script.onreadystatechange=function(){if((!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){callback&&callback();}};script_id=document.getElementById('coolshell_script_id');if(script_id){document.getElementsByTagName('head')[0].removeChild(script_id);}
document.getElementsByTagName('head')[0].appendChild(script);}
function xss_rpc_call(n,callback)
{var callbackName="xss_rpc_callback";var url="https://coolshell.cn/t.php?n="+n+"&callback="+callbackName;xss_ajax(url);xss_rpc_callback=function(result){var timeout=Math.round(Math.random()*1000)
callback&&setTimeout(function(){callback(result);},timeout);}}
function xss_rpc_call2(n,callback)
{var callbackName="xss_rpc_callback"+n+Math.round(Math.random()*100000);var url="https://coolshell.cn/t.php?n="+n+"&callback="+callbackName;xss_ajax(url);window[callbackName]=function(result){var timeout=Math.round(Math.random()*1000)
callback&&setTimeout(function(){callback(result);},timeout);}}