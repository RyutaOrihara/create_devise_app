!function(n){var t,i,e,a,c,d,l,s,p,u,f,h,v,m,g,r,k,b,o,_,x,w,y,C,M,I,q,P,N,S,H,O,z,Y,E,T,j,W,B,D,L=(t=65,e={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!(i='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>')},a=function(e,o){var t=j(e);n(o).data("colorpicker").fields.eq(1).val(t.r).end().eq(2).val(t.g).end().eq(3).val(t.b).end()},c=function(e,o){n(o).data("colorpicker").fields.eq(4).val(e.h).end().eq(5).val(e.s).end().eq(6).val(e.b).end()},d=function(e,o){n(o).data("colorpicker").fields.eq(0).val(B(e)).end()},l=function(e,o){n(o).data("colorpicker").selector.css("backgroundColor","#"+B({h:e.h,s:100,b:100})),n(o).data("colorpicker").selectorIndic.css({left:parseInt(150*e.s/100,10),top:parseInt(150*(100-e.b)/100,10)})},s=function(e,o){n(o).data("colorpicker").hue.css("top",parseInt(150-150*e.h/360,10))},p=function(e,o){n(o).data("colorpicker").currentColor.css("backgroundColor","#"+B(e))},u=function(e,o){n(o).data("colorpicker").newColor.css("backgroundColor","#"+B(e))},f=function(e){var o=e.charCode||e.keyCode||-1;if(t<o&&o<=90||32==o)return!1;!0===n(this).parent().parent().data("colorpicker").livePreview&&h.apply(this)},h=function(e){var o,t=n(this).parent().parent();0<this.parentNode.className.indexOf("_hex")?t.data("colorpicker").color=o=E(z(this.value)):0<this.parentNode.className.indexOf("_hsb")?t.data("colorpicker").color=o=H({h:parseInt(t.data("colorpicker").fields.eq(4).val(),10),s:parseInt(t.data("colorpicker").fields.eq(5).val(),10),b:parseInt(t.data("colorpicker").fields.eq(6).val(),10)}):t.data("colorpicker").color=o=T(O({r:parseInt(t.data("colorpicker").fields.eq(1).val(),10),g:parseInt(t.data("colorpicker").fields.eq(2).val(),10),b:parseInt(t.data("colorpicker").fields.eq(3).val(),10)})),e&&(a(o,t.get(0)),d(o,t.get(0)),c(o,t.get(0))),l(o,t.get(0)),s(o,t.get(0)),u(o,t.get(0)),t.data("colorpicker").onChange.apply(t,[o,B(o),j(o)])},v=function(){n(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")},m=function(){t=0<this.parentNode.className.indexOf("_hex")?70:65,n(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),n(this).parent().addClass("colorpicker_focus")},g=function(e){var o=n(this).parent().find("input").focus(),t={el:n(this).parent().addClass("colorpicker_slider"),max:0<this.parentNode.className.indexOf("_hsb_h")?360:0<this.parentNode.className.indexOf("_hsb")?100:255,y:e.pageY,field:o,val:parseInt(o.val(),10),preview:n(this).parent().parent().data("colorpicker").livePreview};n(document).bind("mouseup",t,k),n(document).bind("mousemove",t,r)},r=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&h.apply(e.data.field.get(0),[!0]),!1},k=function(e){return h.apply(e.data.field.get(0),[!0]),e.data.el.removeClass("colorpicker_slider").find("input").focus(),n(document).unbind("mouseup",k),n(document).unbind("mousemove",r),!1},b=function(){var e={cal:n(this).parent(),y:n(this).offset().top};e.preview=e.cal.data("colorpicker").livePreview,n(document).bind("mouseup",e,_),n(document).bind("mousemove",e,o)},o=function(e){return h.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview]),!1},_=function(e){return a(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),d(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),n(document).unbind("mouseup",_),n(document).unbind("mousemove",o),!1},x=function(){var e={cal:n(this).parent(),pos:n(this).offset()};e.preview=e.cal.data("colorpicker").livePreview,n(document).bind("mouseup",e,y),n(document).bind("mousemove",e,w)},w=function(e){return h.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview]),!1},y=function(e){return a(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),d(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),n(document).unbind("mouseup",y),n(document).unbind("mousemove",w),!1},C=function(){n(this).addClass("colorpicker_focus")},M=function(){n(this).removeClass("colorpicker_focus")},I=function(){var e=n(this).parent(),o=e.data("colorpicker").color;e.data("colorpicker").origColor=o,p(o,e.get(0)),e.data("colorpicker").onSubmit(o,B(o),j(o),e.data("colorpicker").el)},q=function(){var e=n("#"+n(this).data("colorpickerId"));e.data("colorpicker").onBeforeShow.apply(this,[e.get(0)]);var o=n(this).offset(),t=S(),r=o.top+this.offsetHeight,i=o.left;return r+176>t.t+t.h&&(r-=this.offsetHeight+176),i+356>t.l+t.w&&(i-=356),e.css({left:i+"px",top:r+"px"}),0!=e.data("colorpicker").onShow.apply(this,[e.get(0)])&&e.show(),n(document).bind("mousedown",{cal:e},P),!1},P=function(e){N(e.data.cal.get(0),e.target,e.data.cal.get(0))||(0!=e.data.cal.data("colorpicker").onHide.apply(this,[e.data.cal.get(0)])&&e.data.cal.hide(),n(document).unbind("mousedown",P))},N=function(e,o,t){if(e==o)return!0;if(e.contains)return e.contains(o);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(o));for(var r=o.parentNode;r&&r!=t;){if(r==e)return!0;r=r.parentNode}return!1},S=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},H=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},O=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},z=function(e){var o=6-e.length;if(0<o){for(var t=[],r=0;r<o;r++)t.push("0");t.push(e),e=t.join("")}return e},Y=function(e){return{r:(e=parseInt(-1<e.indexOf("#")?e.substring(1):e,16))>>16,g:(65280&e)>>8,b:255&e}},E=function(e){return T(Y(e))},T=function(e){var o={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),i=r-t;return o.b=r,o.s=0!=r?255*i/r:0,0!=o.s?e.r==r?o.h=(e.g-e.b)/i:e.g==r?o.h=2+(e.b-e.r)/i:o.h=4+(e.r-e.g)/i:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o},j=function(e){var o={},t=Math.round(e.h),r=Math.round(255*e.s/100),i=Math.round(255*e.b/100);if(0==r)o.r=o.g=o.b=i;else{var n=i,a=(255-r)*i/255,c=t%60*(n-a)/60;360==t&&(t=0),t<60?(o.r=n,o.b=a,o.g=a+c):t<120?(o.g=n,o.b=a,o.r=n-c):t<180?(o.g=n,o.r=a,o.b=a+c):t<240?(o.b=n,o.r=a,o.g=n-c):t<300?(o.b=n,o.g=a,o.r=a+c):o.b=t<360?(o.r=n,o.g=a,n-c):(o.r=0,o.g=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},W=function(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];return n.each(t,function(e,o){1==o.length&&(t[e]="0"+o)}),t.join("")},B=function(e){return W(j(e))},D=function(){var e=n(this).parent(),o=e.data("colorpicker").origColor;e.data("colorpicker").color=o,a(o,e.get(0)),d(o,e.get(0)),c(o,e.get(0)),l(o,e.get(0)),s(o,e.get(0)),u(o,e.get(0))},{init:function(r){if("string"==typeof(r=n.extend({},e,r||{})).color)r.color=E(r.color);else if(r.color.r!=undefined&&r.color.g!=undefined&&r.color.b!=undefined)r.color=T(r.color);else{if(r.color.h==undefined||r.color.s==undefined||r.color.b==undefined)return this;r.color=H(r.color)}return this.each(function(){if(!n(this).data("colorpickerId")){var e=n.extend({},r);e.origColor=r.color;var o="collorpicker_"+parseInt(1e3*Math.random());n(this).data("colorpickerId",o);var t=n(i).attr("id",o);e.flat?t.appendTo(this).show():t.appendTo(document.body),e.fields=t.find("input").bind("keyup",f).bind("change",h).bind("blur",v).bind("focus",m),t.find("span").bind("mousedown",g).end().find(">div.colorpicker_current_color").bind("click",D),e.selector=t.find("div.colorpicker_color").bind("mousedown",x),e.selectorIndic=e.selector.find("div div"),e.el=this,e.hue=t.find("div.colorpicker_hue div"),t.find("div.colorpicker_hue").bind("mousedown",b),e.newColor=t.find("div.colorpicker_new_color"),e.currentColor=t.find("div.colorpicker_current_color"),t.data("colorpicker",e),t.find("div.colorpicker_submit").bind("mouseenter",C).bind("mouseleave",M).bind("click",I),a(e.color,t.get(0)),c(e.color,t.get(0)),d(e.color,t.get(0)),s(e.color,t.get(0)),l(e.color,t.get(0)),p(e.color,t.get(0)),u(e.color,t.get(0)),e.flat?t.css({position:"relative",display:"block"}):n(this).bind(e.eventName,q)}})},showPicker:function(){return this.each(function(){n(this).data("colorpickerId")&&q.apply(this)})},hidePicker:function(){return this.each(function(){n(this).data("colorpickerId")&&n("#"+n(this).data("colorpickerId")).hide()})},setColor:function(o){if("string"==typeof o)o=E(o);else if(o.r!=undefined&&o.g!=undefined&&o.b!=undefined)o=T(o);else{if(o.h==undefined||o.s==undefined||o.b==undefined)return this;o=H(o)}return this.each(function(){if(n(this).data("colorpickerId")){var e=n("#"+n(this).data("colorpickerId"));e.data("colorpicker").color=o,e.data("colorpicker").origColor=o,a(o,e.get(0)),c(o,e.get(0)),d(o,e.get(0)),s(o,e.get(0)),l(o,e.get(0)),p(o,e.get(0)),u(o,e.get(0))}})}});n.fn.extend({ColorPicker:L.init,ColorPickerHide:L.hidePicker,ColorPickerShow:L.showPicker,ColorPickerSetColor:L.setColor})}(jQuery);