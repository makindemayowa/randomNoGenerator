(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},171:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),i=(n(104),n(106),n(176)),l=n(177),s=n(178),m=n(70),u=n.n(m),d=n(22),h=n(93),b=n(47),g=n(48),N=n(53),f=n(49),p=n(54),w=n(10),E=function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(1e8+9e8*Math.random()));return t},v=function(e){return Object(d.a)(new Set(e))},y=function(e){return e.sort(function(e,t){return e-t})},O=function(e){return e.sort(function(e,t){return t-e})},k=function(e){return O(e)[0]},j=function(e){return y(e)[0]},x=function(e){if(e<=0)return"Please enter a positive no";if(e>1e4)return"You can only generate a maximum of 10000 numbers at a time";var t,n,a=E(e),r=v(a);do{if(r.length===e)t=r;else{var o=e-r.length,c=E(o),i=(n=c,r.concat(n));t=v(i)}}while(t.length!==e);return localStorage.removeItem("phoneNumbers"),localStorage.setItem("phoneNumbers",JSON.stringify(t)),t},M=n(74),S=function(e){var t=e.height,n=e.width,a=e.list,o=a.length,c=Math.floor(n/200),i=Math.ceil(o/c),l=function(e){for(var t=e.index,n=e.key,o=e.style,i=[],l=t*c,s=l;s<l+c&&!(s>=a.length);s++)i.push(r.a.createElement(w.b,{md:"2",sm:"12",className:"Item",key:s},"(0)".concat(a[s])));return r.a.createElement(w.g,{key:n,style:o},i)};return r.a.createElement(M.a,null,function(){return r.a.createElement(M.b,{rowRenderer:l,className:"List",height:t,rowHeight:50,rowCount:i,width:n,style:{outline:0}})})},C=n(35),B=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(N.a)(this,Object(f.a)(t).call(this,e))).state={modal:!1},n.toggle=n.toggle.bind(Object(C.a)(Object(C.a)(n))),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{className:"close",onClick:this.toggle},"\xd7"),n=this.props,a=n.modalBody,o=n.modalTitle,c=n.buttonLabel,i=n.onclick,l=n.className;return r.a.createElement("div",null,r.a.createElement(w.a,{color:"primary",className:l,onClick:function(){i(),e.toggle()}},c),r.a.createElement(w.c,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(w.f,{toggle:this.toggle,close:t},o),r.a.createElement(w.d,null,a),r.a.createElement(w.e,null,r.a.createElement(w.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),R=(n(171),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(N.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={randNos:[],width:0},n.sortNumbers=function(){var e=Object(h.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.randNos,"asc"!==t){e.next=6;break}return r=y(Object(d.a)(a)),e.abrupt("return",n.setState({randNos:r}));case 6:return r=O(Object(d.a)(a)),e.next=9,n.setState({randNos:r});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.getMaximumNo=function(){var e=Object(d.a)(n.state.randNos);n.setState({maxNo:k(e)})},n.getMinimumNo=function(){var e=Object(d.a)(n.state.randNos);n.setState({minNo:j(e)})},n.generateRandomNumbers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8e3,t=x(e);n.setState({randNos:Object(d.a)(t)})},n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("phoneNumbers"));e?this.setState({randNos:Object(d.a)(e)}):this.generateRandomNumbers();var t=window.innerWidth>0?window.innerWidth:screen.width;this.setState({width:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.randNos,a=t.width,o=t.maxNo,c=t.minNo;return r.a.createElement("div",{className:"pt-4 container"},r.a.createElement(w.g,null,r.a.createElement(w.b,{md:"4"},"Random Phone Numbers: ",r.a.createElement("b",null,n.length)),r.a.createElement(w.b,{md:"8"},r.a.createElement(w.g,null,r.a.createElement(w.b,{md:"3"},r.a.createElement("button",{className:"mr-2 btn btn-primary",onClick:function(){return e.generateRandomNumbers()}},"Re-run")),r.a.createElement(w.b,{md:"3"},r.a.createElement(B,{buttonLabel:"Get Max",className:"maxNo",onclick:this.getMaximumNo,modalTitle:"Maximun Number",modalBody:"The maximum phone number is (0)".concat(o)})),r.a.createElement(w.b,{md:"3"},r.a.createElement(B,{buttonLabel:"Get Min",modalTitle:"Minimum Number",className:"minNo",onclick:this.getMinimumNo,modalBody:"The minimum phone number is (0)".concat(c)})),r.a.createElement(w.b,{md:"3"},r.a.createElement("span",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-primary dropdown-toggle dropdownMenuButton",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("button",{onClick:function(){return e.sortNumbers("asc")},className:"dropdown-item sortAsc"},"ascending"),r.a.createElement("button",{onClick:function(){return e.sortNumbers("desc")},className:"dropdown-item sortDesc"},"descending"))))))),r.a.createElement("div",{className:"mt-3 row"},r.a.createElement(S,{items:n,hasNextPage:!1,isNextPageLoading:!1,list:n,height:1e3,width:a-80,loadNextPage:this.generateNos})))}}]),t}(a.Component)),I=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,n){e.exports=n(174)}},[[99,2,1]]]);
//# sourceMappingURL=main.4ee1f122.chunk.js.map