(function(b){var a=Object.prototype.toString,d=window,f=document,i=f.body,h=f.documentElement;function g(j){j.style.display="block"}function c(j){j.style.display="none"}function e(l,k){var j=this;if(!(j instanceof e)){return new e(l,k)}this.init(l,k)}b.mix(e,{close:function(k,j){b.$(k||"v-dialog").close()},remind:function(k,j){j.btnSl=1;this.prompt(k,j)},prompt:function(r,t){var l=t.text||"\u786e\u5b9a",m=t.text2||"\u53d6\u6d88",n="<p>"+r+'</p><div class="tal"><input class="btn primary" value="'+l+'" type="button" />',k=t.textback||function(){},j=t.textback2||function(){},q,p,o=t.btnSl||2;if(o==2){n+='<input class="btn secondary" value="'+m+'" type="button" />'}n+="</div>";q=e(n,t);p=b.$("v-dialog");b.on(b.getECN(p,"primary","input")[0],"click",function(){k.call(q)!==false&&e.close()});if(o==2){b.on(b.getECN(p,"secondary","input")[0],"click",function(){j.call(q)!==false&&e.close()})}},ajax:function(j,k){if(!b.ajax){alert("\u7f3a\u5c11ajax\u6a21\u5757");return false}e(k.ajaxLoading||"ajax\u9875\u9762\u6b63\u5728\u52a0\u8f7d\u4e2d",k);b.ajax(j,{method:"get",loadFun:function(l){e.close();e(l.responseText,k)}})},iframe:function(j,l){if(!b.iframeLoad){alert("\u7f3a\u5c11iframeLoad\u6a21\u5757");return false}var m=e('<p id="dialog-iframe-loading">\u52a0\u8f7d\u4e2d.....</p><iframe id="dialog_iframe" src="'+j+'" name="dialog_iframe" class="iframe-hidden" name="dialog_iframe" width="100%" frameborder="no" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>',l),k=b.$("dialog_iframe");b.iframeLoad(k,function(){k.style.height=this.newHeight;b.$("dialog-iframe-loading").style.display="none";m.setPosition()});k.src=j},img:function(k,l){e(l.imgLoading||"\u56fe\u7247\u6b63\u5728\u52a0\u8f7d\u4e2d",l);var j=new Image();j.onload=function(){!l.width&&(l.width=this.width+52);e.close();e('<img src="'+k+'" alt="" style="width:'+(l.width-52)+'px" />',l)};j.src=k}});e.prototype={init:function(l,k,j){var m=this;this.elem=l;this.openBack=k.openBack;this.closeBack=k.closeBack||function(){};this.top=k.top;this.left=k.left;this.height=k.height;this.width=parseInt(k.width);this.title=k.title;this.type=k.type||"default";this.closeName=k.closeName||"dialog-close-handle";this.Layer=k.Layer===j?1:k.Layer;this.fix=k.fix;this.opacity=k.opacity||0.5;this.autoClose=k.autoClose;this.dragKey=k.dragKey;this.dragTrigger=k.dragTrigger;this.dialogInit();this.open();if(this.dragKey){this.drag()}b.on(d,"resize",this.resize=function(){m.setPosition.call(m)})},shadingLayer:function(){var k,j;if(!b.$("layDic")){var l=f.createDocumentFragment();k=f.createElement("div");k.setAttribute("id","layDic");j=f.createElement("iframe");j.setAttribute("id","layDic-iframe");j.setAttribute("frameborder","0");j.setAttribute("marginheight","0");j.setAttribute("marginwidth","0");k.style.cssText="opacity:0.5;background:#000;position:absolute;top:0;left:0;z-index:9998;display:none";j.style.cssText="opacity:0;-moz-opacity:0;filter:alpha(opacity=0);background:#000;position:absolute;top:0;left:0;z-index:9997;display:none";l.appendChild(k);l.appendChild(j);i.appendChild(l)}k=this.layDic=b.$("layDic");j=this.iframe=b.$("layDic-iframe");k.style.filter="alpha(opacity="+this.opacity*100+")";k.style.opacity=this.opacity},dialogInit:function(){var k,r=this,n,l,q,o,s=this.title,m=b.$(this.elem);if(this.type==="duli"){n=this.dialog=b.$(this.elem)}else{if(!b.$("v-dialog")){var p,j;p='<div id="v-dialog" class="dialog dialog-b"><div class="dialog-hd dialog-bk"><span class="dhd-1"><span class="dhd-2"></span></span><b></b><s></s></div><div class="dialog-bd"><div class="dialog-wrap"><div class="dialog-main"><div class="dialog-mbd"></div></div></div><div class="dialog-lf"></div><div class="dialog-rg"></div></div><div class="dialog-close"><a href="#" class="dialog-close-handle" title="\u5173\u95ed">&times;</a></div><b class="jt" style="left:30px"></b><div class="dialog-ft dialog-bk"><span class="dhd-1"><span class="dhd-2"></span></span><b></b><s></s></div></div>';j=f.createElement("div");j.innerHTML=p;f.body.appendChild(j.firstChild)}n=this.dialog=b.$("v-dialog");dialogmain=b.getECN(n,"dialog-main","div")[0];dialogbd=b.getECN(n,"dialog-mbd","div")[0];dialoghd=b.getECN(n,"dialog-mhd","div")[0];dialogbd.innerHTML="";if(s){!dialoghd&&(function(){var t,u;u='<div class="dialog-mhd"></div>';t=f.createElement("div");t.innerHTML=u;dialoghd=t.firstChild;dialogmain.insertBefore(t.firstChild,dialogbd)})();dialoghd.innerHTML=s;this.dragTrigger=dialoghd}else{dialoghd&&dialoghd.parentNode.removeChild(dialoghd)}if(m){g(m);dialogbd.appendChild(m)}else{dialogbd.innerHTML=this.elem}}this.dragKey?(this.dragTrigger&&(this.dragTrigger.style.cursor="move")):(this.dragTrigger&&(this.dragTrigger.style.cursor=""));b.setStyle(n,{width:this.width+"px","z-index":"9999",display:"none"});k=b.getECN(n,this.closeName,"*");this.dialog.close=function(){r.close.call(r);return false};b.each(k,function(t){t.onclick=function(){r.dialog.close();return false};b.on(t,"mousedown",function(){b.getEvent().stopPropagation()});b.on(t,"mouseup",function(){b.getEvent().stopPropagation()})})},fixed:function(k){var j=this.dialog;if(b.Browser.isIE6){var l=this.top!==k?parseInt(this.top):this.cTop;var m=";top:expression(documentElement.scrollTop+"+l+");)";j.style.position="absolute";j.style.cssText+=m;i.style.cssText+=";background:url(about:blank) fixed"}else{b.setStyle(j,{position:"fixed",top:this.top!==k?(parseInt(this.top)+"px"):this.cTop+"px"})}return this},unfixed:function(k){var j=this.dialog;b.setStyle(j,{position:"absolute",top:this.top!==k?(parseInt(this.top)+"px"):(Math.max(h.scrollTop,i.scrollTop)+this.cTop+"px")})},setPosition:function(n){var l=this.dialog,o,m,j=i.scrollWidth,k=i.scrollHeight;if(this.Layer){this.shadingLayer();o=this.layDic;m=this.iframe;o.style.width=m.style.width=j+"px";o.style.height=m.style.height=k+"px";g(o);g(m)}g(this.dialog);this.pHeight=this.height?parseInt(this.height):l.offsetHeight;this.cTop=(h.clientHeight-this.pHeight)*0.382;if(this.cTop<0){this.cTop=0}this.fix?this.fixed():this.unfixed();l.style.left=this.left!==n?(parseInt(this.left)+"px"):((h.clientWidth-this.width)/2+"px")},open:function(){var j=this;this.setPosition();if(this.autoClose){this.autoCloseTime&&clearTimeout(this.autoCloseTime);this.autoCloseTime=setTimeout(function(){j.close()},this.autoClose)}a.call(this.openBack)==="[object Function]"&&this.openBack()},close:function(){if(a.call(this.closeBack)==="[object Function]"&&this.closeBack()!==false){var j=this.dialog,m=this.layDic,k=this.iframe,l=b.$(this.elem);if(this.Layer){c(m);c(k)}c(j);if(this.type!=="duli"&&l){c(l);f.body.appendChild(l)}b.removeEvent(d,"resize",this.resize);this.dragKey&&this.dragTrigger&&b.removeEvent(this.dragTrigger,"mousedown",this.mousedown);this.autoClose&&this.autoCloseTime&&clearTimeout(this.autoCloseTime)}},drag:function(){if(!this.dragTrigger){return false}var n,s,r,j=this.dragTrigger,m=this.dialog,q,p,t=this;function k(){var u=b.getEvent();q=u.clientX-b.offset(m).left;p=u.clientY+Math.max(i.scrollTop,h.scrollTop)-b.offset(m).top;n=f.createElement("div");b.setStyle(n,{width:m.offsetWidth-4+"px",height:m.offsetHeight-4+"px",position:"absolute",top:b.offset(m).top+"px",left:b.offset(m).left+"px",border:"2px dashed #333","z-index":999999});i.appendChild(n);i.style.cursor="move";if(b.Browser.isIE){b.on(n,"losecapture",o);n.setCapture()}else{b.on(window,"blur",o);u.preventDefault()}b.on(f,"mousemove",l);b.on(f,"mouseup",o)}function l(){var x=b.getEvent(),u=Math.min(h.clientWidth,i.clientWidth),w=h.clientHeight,v=Math.max(i.scrollTop,h.scrollTop);d.getSelection?d.getSelection().removeAllRanges():f.selection.empty();s=x.clientX-q;r=x.clientY+v-p;if(s<0){s=0}if(s+n.offsetWidth>u){s=u-n.offsetWidth}if(r<v){r=v}if(r-v+n.offsetHeight>w){r=v+w-n.offsetHeight}b.setStyle(n,{top:r+"px",left:s+"px"})}function o(){if(b.Browser.isIE){b.removeEvent(n,"losecapture",o);n.releaseCapture()}else{b.removeEvent(window,"blur",o)}n&&n.parentNode&&n.parentNode.removeChild(n);b.setStyle(m,{position:"absolute",top:r+"px",left:s+"px"});i.style.cursor="auto";b.removeEvent(f,"mousemove",l);b.removeEvent(f,"mouseup",o)}b.on(j,"mousedown",this.mousedown=k)}};b.dialog=e})(QIE);