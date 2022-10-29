var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function h(t){g=t}const d=[],m=[],$=[],k=[],x=Promise.resolve();let y=!1;function b(t){$.push(t)}const _=new Set;let v=0;function w(){const t=g;do{for(;v<d.length;){const t=d[v];v++,h(t),E(t.$$)}for(h(null),d.length=0,v=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(d.length);for(;k.length;)k.pop()();y=!1,_.clear(),h(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const A=new Set;function P(t,e){-1===t.$$.dirty[0]&&(d.push(t),y||(y=!0,x.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(s,a,c,u,i,f,p,d=[-1]){const m=g;h(s);const $=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:a.target||m.$$.root};p&&p($.root);let k=!1;if($.ctx=c?c(s,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),k&&P(s,t)),e})):[],$.update(),k=!0,o($.before_update),$.fragment=!!u&&u($.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();a.intro&&((x=s.$$.fragment)&&x.i&&(A.delete(x),x.i(y))),function(t,n,s,a){const{fragment:c,on_mount:l,on_destroy:u,after_update:i}=t.$$;c&&c.m(n,s),a||b((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(b)}(s,a.target,a.anchor,a.customElement),w()}var x,y;h(m)}function C(t,e,n){const o=t.slice();return o[1]=e[n],o}function N(e){let n,o,r,s,g,h,d,m,$,k,x=e[1].name+"",y=e[1].repeats+"",b=e[1].weight+"";return{c(){n=u("li"),o=u("p"),r=i(x),s=u("p"),g=u("p"),h=i(y),d=f(),m=u("span"),$=i(b),k=f(),p(o,"class","exercise-name svelte-1xkahsa"),p(s,"class","svelte-1xkahsa"),p(m,"class","svelte-1xkahsa"),p(g,"class","exercise-info svelte-1xkahsa")},m(t,e){c(t,n,e),a(n,o),a(o,r),a(n,s),a(n,g),a(g,h),a(g,d),a(g,m),a(m,$),a(n,k)},p:t,d(t){t&&l(n)}}}function O(e){let n,o,r,s,i=e[0],g=[];for(let t=0;t<i.length;t+=1)g[t]=N(C(e,i,t));return{c(){n=u("main"),o=u("h1"),o.textContent="Treeni",r=f(),s=u("ul");for(let t=0;t<g.length;t+=1)g[t].c();p(o,"class","svelte-1xkahsa"),p(s,"class","svelte-1xkahsa"),p(n,"class","svelte-1xkahsa")},m(t,e){c(t,n,e),a(n,o),a(n,r),a(n,s);for(let t=0;t<g.length;t+=1)g[t].m(s,null)},p(t,[e]){if(1&e){let n;for(i=t[0],n=0;n<i.length;n+=1){const o=C(t,i,n);g[n]?g[n].p(o,e):(g[n]=N(o),g[n].c(),g[n].m(s,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=i.length}},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(g,t)}}}function S(t){return[[{name:"Penkkipunnerrus",repeats:"12, 12, 12",weight:"45kg"},{name:"Vinopenkkipunnerrus tangolla (eteen)",repeats:"12, 12, 12",weight:"30,0kg, 30,0kg, 30,0kg"},{name:"Vipunostot rinta",repeats:"12, 12, 12",weight:"12.5kg, 10kg, 10kg"},{name:"Pullover käsipainolla (rinta)",repeats:"12 12 12",weight:"17.5kg"},{name:"Pystypunnerus painoilla",repeats:"12, 12, 12",weight:"12.5 kg"},{name:"vipunostot sivulle/eteen",repeats:"12, 12, 12",weight:"6kg/4kg"}]]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,S,O,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
