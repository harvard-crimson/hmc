/* ScrollMagic v1.0.5 | (c) Jan Paepke, @janpaepke | license & info: http://janpaepke.github.io/ScrollMagic */
!function($){ScrollMagic=function(e){"use strict";var t="ScrollMagic",r={container:window,vertical:!0,globalSceneOptions:{},loglevel:2},o=this,i=$.extend({},r,e),s=[],a=!1,l=0,c="PAUSED",g=!0,u=0,d=!1,f=!0,h=function(){if($.each(i,function(e){r.hasOwnProperty(e)||(w(2,'WARNING: Unknown option "'+e+'"'),delete i[e])}),i.container=$(i.container).first(),0==i.container.length)return void w(1,"ERROR creating object ScrollMagic: No valid scroll container supplied");g=!$.contains(document,i.container.get(0)),u=i.vertical?i.container.height():i.container.width(),i.container.on("scroll resize",m);try{TweenLite.ticker.addEventListener("tick",v),d=!0}catch(e){i.container.on("scroll resize",v),d=!1}w(3,"added new "+t+" controller")},p=function(){return i.vertical?i.container.scrollTop():i.container.scrollLeft()},v=function(){if(a&&f){var e=$.isArray(a)?a:s,t=l;l=o.scrollPos();var n=l-t;c=0==n?"PAUSED":n>0?"FORWARD":"REVERSE",o.updateScene(e,!0),0==e.length&&i.loglevel>=3&&w(3,"updating 0 Scenes (nothing added to controller)"),a=!1}},m=function(e){"resize"==e.type&&(u=i.vertical?i.container.height():i.container.width()),a=!0},w=function(e){if(i.loglevel>=e){var r="("+t+") ->",o=Array.prototype.splice.call(arguments,1),s=Function.prototype.bind.call(n,window);o.unshift(e,r),s.apply(window,o)}};return this.addScene=function(e){return $.isArray(e)?$.each(e,function(e,t){o.addScene(t)}):e.parent()!=o?e.addTo(o):-1==$.inArray(s,e)&&(s.push(e),$.each(i.globalSceneOptions,function(t,n){e[t]&&e[t].call(e,n)}),w(3,"added Scene ("+s.length+" total)")),o},this.removeScene=function(e){if($.isArray(e))$.each(e,function(e,t){o.removeScene(t)});else{var t=$.inArray(e,s);t>-1&&(s.splice(t,1),e.remove(),w(3,"removed Scene ("+s.length+" total)"))}return o},this.updateScene=function(e,t){return $.isArray(e)?$.each(e,function(n,r){w(3,"updating Scene "+(n+1)+"/"+e.length+" ("+s.length+" total)"),o.updateScene(r,t)}):t?e.update(!0):($.isArray(a)||(a=[]),-1==$.inArray(e,a)&&a.push(e)),o},this.update=function(e){return m({type:"resize"}),e&&v(),o},this.scrollPos=function(e){return arguments.length?($.isFunction(e)||(e=function(){return e}),p=e,o):p.call(o)},this.info=function(e){var t={size:u,vertical:i.vertical,scrollPos:l,scrollDirection:c,container:i.container,isDocument:g};return arguments.length?void 0!==t[e]?t[e]:void w(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(i.loglevel!=e&&(i.loglevel=e),o):i.loglevel},this.enabled=function(e){return arguments.length?(f!=e&&(f=!!e,o.updateScene(s,!0)),o):f},this.destroy=function(e){for(;s.length>0;){var n=s[s.length-1];n.destroy(e)}return i.container.off("scroll resize",m),d?TweenLite.ticker.removeEventListener("tick",v):i.container.off("scroll resize",v),w(3,"destroyed "+t+" (reset: "+(e?"true":"false")+")"),null},h(),o},ScrollScene=function(e){"use strict";var t,o,i,s,a=["onCenter","onEnter","onLeave"],l="ScrollScene",c={duration:0,offset:0,triggerElement:null,triggerHook:a[0],reverse:!0,tweenChanges:!1,loglevel:2},g=this,u=$.extend({},c,e),d="BEFORE",f=0,h={start:0,end:0},p=!0,v=function(){w(),g.on("change.internal",function(e){w(),"loglevel"!=e.what&&"tweenChanges"!=e.what&&("reverse"!=e.what&&null===u.triggerElement&&R(),g.update(),("DURING"!==d&&"duration"==e.what||"AFTER"===d&&0==u.duration)&&y())}),g.on("progress.internal",function(){E(),y()})},m=function(e){if(u.loglevel>=e){var t="("+l+") ->",r=Array.prototype.splice.call(arguments,1),o=Function.prototype.bind.call(n,window);r.unshift(e,t),o.apply(window,r)}},w=function(){if($.each(u,function(e){c.hasOwnProperty(e)||(m(2,'WARNING: Unknown option "'+e+'"'),delete u[e])}),u.duration=parseFloat(u.duration),(!$.isNumeric(u.duration)||u.duration<0)&&(m(1,'ERROR: Invalid value for option "duration":',u.duration),u.duration=c.duration),u.offset=parseFloat(u.offset),$.isNumeric(u.offset)||(m(1,'ERROR: Invalid value for option "offset":',u.offset),u.offset=c.offset),null!=u.triggerElement&&0==$(u.triggerElement).length&&(m(1,'ERROR: Element defined in option "triggerElement" was not found:',u.triggerElement),u.triggerElement=c.triggerElement),$.isNumeric(u.triggerHook)||-1!=$.inArray(u.triggerHook,a)||(m(1,'ERROR: Invalid value for option "triggerHook": ',u.triggerHook),u.triggerHook=c.triggerHook),!$.isNumeric(u.loglevel)||u.loglevel<0||u.loglevel>3){var e=u.loglevel;u.loglevel=c.loglevel,m(1,'ERROR: Invalid value for option "loglevel":',e)}if(o&&t&&u.triggerElement&&u.loglevel>=2){var n=o.getTweensOf($(u.triggerElement)),r=t.info("vertical");$.each(n,function(e,t){var n=t.vars.css||t.vars,o=r?void 0!==n.top||void 0!==n.bottom:void 0!==n.left||void 0!==n.right;return o?(m(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}},R=function(){h={start:g.startPosition()},t&&(h.start-=t.info("size")*g.triggerHook()),h.end=h.start+u.duration},E=function(e){var t=e>=0&&1>=e?e:f;if(o){if(-1===o.repeat())if(("DURING"===d||"AFTER"===d&&0==u.duration)&&o.paused())o.play();else{if("DURING"===d||o.paused())return!1;o.pause()}else{if(t==o.progress())return!1;0==u.duration?"AFTER"==d?o.play():o.reverse():u.tweenChanges?o.tweenTo(t*o.duration()):o.progress(t).pause()}return!0}return!1},y=function(e){if(i&&t){var n=t.info();if(e||"DURING"!==d&&("AFTER"!==d||0!=u.duration)){var o={position:"absolute"==s.origStyle.position?"absolute":"relative",top:0,left:0},a=i.css("position")!=o.position;s.pushFollowers?"AFTER"===d&&0==parseFloat(s.spacer.css("padding-top"))?a=!0:"BEFORE"===d&&0==parseFloat(s.spacer.css("padding-bottom"))&&(a=!0):o[n.vertical?"top":"left"]=u.duration*f,i.css(o),a&&S()}else{"fixed"!=i.css("position")&&(i.css("position","fixed"),S());var l=r(s.spacer,!0),c=u.reverse||0==u.duration?n.scrollPos-h.start:Math.round(f*u.duration*10)/10;l.top-=parseFloat(s.spacer.css("margin-top")),l[n.vertical?"top":"left"]+=c,i.css({top:l.top,left:l.left})}}},S=function(){if(i&&t&&"absolute"!=s.origStyle.position){var e="AFTER"===d,n="BEFORE"===d,r="DURING"===d,o="fixed"==i.css("position"),a=t.info("vertical"),l=s.spacer.children().first(),c=$.inArray(s.spacer.css("display"),["block","flex","list-item","table","-webkit-box"])>-1,g={};c?(g["margin-top"]=n||r&&o?i.css("margin-top"):"auto",g["margin-bottom"]=e||r&&o?i.css("margin-bottom"):"auto"):g["margin-top"]=g["margin-bottom"]="auto",s.relSize.width?i.css("width",o?s.spacer.width():"100%"):(g["min-width"]=l.outerWidth(!0),g.width=o?g["min-width"]:"auto"),s.relSize.height?i.css("height",o?s.spacer.height():"100%"):(g["min-height"]=l.outerHeight(!c),g.height=o?g["min-height"]:"auto"),s.pushFollowers&&(g["padding"+(a?"Top":"Left")]=u.duration*f,g["padding"+(a?"Bottom":"Right")]=u.duration*(1-f)),s.spacer.css(g)}},b=function(){t&&i&&"DURING"===d&&(t.info("isDocument")||y())},F=function(){t&&i&&"DURING"===d&&(s.relSize.width||s.relSize.height)&&S()};return this.parent=function(){return t},this.duration=function(e){return arguments.length?(u.duration!=e&&(u.duration=e,g.trigger("change",{what:"duration",newval:e})),g):u.duration},this.offset=function(e){return arguments.length?(u.offset!=e&&(u.offset=e,g.trigger("change",{what:"offset",newval:e})),g):u.offset},this.triggerElement=function(e){return arguments.length?(u.triggerElement!=e&&(u.triggerElement=e,g.trigger("change",{what:"triggerElement",newval:e})),g):u.triggerElement},this.triggerHook=function(e){if(!arguments.length){var t;if($.isNumeric(u.triggerHook))t=u.triggerHook;else switch(u.triggerHook){case"onCenter":t=.5;break;case"onLeave":t=0;break;case"onEnter":default:t=1}return t}return u.triggerHook!=e&&(u.triggerHook=e,g.trigger("change",{what:"triggerHook",newval:e})),g},this.reverse=function(e){return arguments.length?(u.reverse!=e&&(u.reverse=e,g.trigger("change",{what:"reverse",newval:e})),g):u.reverse},this.tweenChanges=function(e){return arguments.length?(u.tweenChanges!=e&&(u.tweenChanges=e,g.trigger("change",{what:"tweenChanges",newval:e})),g):u.tweenChanges},this.loglevel=function(e){return arguments.length?(u.loglevel!=e&&(u.loglevel=e,g.trigger("change",{what:"loglevel",newval:e})),g):u.loglevel},this.state=function(){return d},this.startPosition=function(){var e=u.offset;if(t){var n=t.info();if(null===u.triggerElement)e+=n.size*g.triggerHook();else{for(var o=$(u.triggerElement).first(),i=r(t.info("container"));o.parent().data("ScrollMagicPinSpacer");)o=o.parent();var s=r(o);n.isDocument||(i.top-=n.scrollPos,i.left-=n.scrollPos),e+=n.vertical?s.top-i.top:s.left-i.left}}return e},this.update=function(e){if(t)if(e)if(t.enabled()&&p){var n,r=t.info("scrollPos");null!==u.triggerElement&&R(),n=u.duration>0?(r-h.start)/(h.end-h.start):r>=h.start?1:0,g.trigger("update",{startPos:h.start,endPos:h.end,scrollPos:r}),g.progress(n)}else i&&"fixed"==i.css("position")&&y(!0);else t.updateScene(g,!1);return g},this.progress=function(e){if(arguments.length){var n=!1,r=d,o=t?t.info("scrollDirection"):"PAUSED";if(0>=e&&"BEFORE"!==d&&(e>=f||u.reverse)?(f=0,d="BEFORE",n=!0):e>0&&1>e&&(e>=f||u.reverse)?(f=e,d="DURING",n=!0):e>=1&&"AFTER"!==d?(f=1,d="AFTER",n=!0):"DURING"!==d||u.reverse||y(),n){var i={progress:f,state:d,scrollDirection:o},s=d!=r,a="BEFORE"===d&&0==u.duration;s&&(("DURING"===d||0==u.duration)&&g.trigger("enter",i),("BEFORE"===d||"BEFORE"===r)&&g.trigger(a?"end":"start",i)),g.trigger("progress",i),s&&(("AFTER"===d||"AFTER"===r)&&g.trigger(a?"start":"end",i),("DURING"!==d||0==u.duration)&&g.trigger("leave",i))}return g}return f},this.setTween=function(e){o&&g.removeTween();try{o=new TimelineMax({smoothChildTiming:!0}).add(e).pause()}catch(e){m(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")}finally{return e.repeat&&-1===e.repeat()&&(o.repeat(-1),o.yoyo(e.yoyo())),w(),m(3,"added tween"),E(),g}},this.removeTween=function(e){return o&&(e&&E(0),o.kill(),o=void 0,m(3,"removed tween (reset: "+(e?"true":"false")+")")),g},this.setPin=function(e,t){var n={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t=$.extend({},n,t);if(e=$(e).first(),0==e.length)return m(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),g;if(i){if(i===e)return g;g.removePin()}i=e,i.parent().hide();var r=i.css(["position","display","top","left","bottom","right"]),o=i.css(["width","height"]);if(i.parent().show(),"fixed"==r.position)return m(1,"ERROR: Pin does not work with elements that are positioned 'fixed'."),i=void 0,g;var a=$("<div></div>").addClass(t.spacerClass).css(r).data("ScrollMagicPinSpacer",!0).css({position:"absolute"==r.position?"absolute":"relative","margin-left":"auto","margin-right":"auto","box-sizing":"content-box","-moz-box-sizing":"content-box","-webkit-box-sizing":"content-box"});return"absolute"==r.position&&t.pushFollowers&&(m(2,"WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."),t.pushFollowers=!1),s={spacer:a,relSize:{width:"%"===o.width.slice(-1),height:"%"===o.height.slice(-1)},pushFollowers:t.pushFollowers,origStyle:r},s.relSize.width&&a.css("width",o.width),s.relSize.height&&a.css("height",o.height),i.before(a).appendTo(a).css({position:"absolute"==r.position?"absolute":"relative",top:"auto",left:"auto",bottom:"auto",right:"auto"}),$(window).on("scroll resize",b),m(3,"added pin"),y(),g},this.removePin=function(e){return i&&(e||!t?(i.insertBefore(s.spacer).css(s.origStyle),s.spacer.remove()):"DURING"===d&&y(!0),$(window).off("scroll resize",b),i=void 0,m(3,"removed pin (reset: "+(e?"true":"false")+")")),g},this.addTo=function(e){return t!=e?(t&&t.removeScene(g),t=e,w(),R(),S(),t.info("container").on("resize",F),m(3,"added "+l+" to controller"),e.addScene(g),g.update(),g):void 0},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,g.update(!0)),g):p},this.remove=function(){if(t){t.info("container").off("resize",F);var e=t;t=void 0,m(3,"removed "+l+" from controller"),e.removeScene(g)}return g},this.destroy=function(e){return this.removeTween(e),this.removePin(e),this.remove(),this.off("start end enter leave progress change update change.internal progress.internal"),m(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.on=function(e,t){if($.isFunction(t)){var n=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");$(g).on(n,t)}else m(1,"ERROR calling method 'on()': Supplied argument is not a valid callback!");return g},this.off=function(e,t){var n=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");return $(g).off(n,t),g},this.trigger=function(e,t){m(3,"event fired:",e,"->",t);var n={type:$.trim(e).toLowerCase(),target:g};return $.isPlainObject(t)&&(n=$.extend({},t,n)),$(g).trigger(n),g},v(),g};var e=window.console=window.console||{},t=["error","warn","log"];e.log||(e.log=$.noop),$.each(t,function(t,n){e[n]||(e[n]=e.log)});var n=function(n){(n>t.length||0>=n)&&(n=t.length);var r=new Date,o=("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2)+":"+("0"+r.getSeconds()).slice(-2)+":"+("00"+r.getMilliseconds()).slice(-3),i=t[n-1],s=Array.prototype.splice.call(arguments,1),a=Function.prototype.bind.call(e[i],e);s.unshift(o),a.apply(e,s)},r=function(e,t){var n={top:0,left:0},r=e[0];if(r)if(r.getBoundingClientRect){var o=r.getBoundingClientRect();n.top=o.top,n.left=o.left,t||(n.top+=$(document).scrollTop(),n.left+=$(document).scrollLeft())}else n=e.offset()||n,t&&(n.top-=$(document).scrollTop(),n.left-=$(document).scrollLeft());return n}}(jQuery);