function M(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function F(){return Object.create(null)}function v(t){t.forEach(I)}function J(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function gt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(et(e,n))}function bt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,o){if(r){const s=K(e,n,i,o);t.p(s,r)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let j=!1;function nt(){j=!0}function it(){j=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,r=Math.max(d,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function ct(t,e){if(j){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){j&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function Nt(){return O(" ")}function At(){return O("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return t===""?null:+t}function ot(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){at(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function jt(t,e,n){return ft(t,e,n,ut)}function _t(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>O(e),!0)}function Ct(t){return _t(t," ")}function Tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function Bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ht(t,e){return new t(e)}let $;function w(t){$=t}function W(){if(!$)throw new Error("Function called outside component initialization");return $}function Ot(t){W().$$.on_mount.push(t)}function Pt(t){W().$$.after_update.push(t)}const b=[],R=[],S=[],G=[],U=Promise.resolve();let B=!1;function V(){B||(B=!0,U.then(X))}function zt(){return V(),U}function H(t){S.push(t)}const q=new Set;let x=0;function X(){if(x!==0)return;const t=$;do{try{for(;x<b.length;){const e=b[x];x++,w(e),dt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(w(null),b.length=0,x=0;R.length;)R.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while(b.length);for(;G.length;)G.pop()();B=!1,q.clear(),w(t)}function dt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const k=new Set;let g;function Ft(){g={r:0,c:[],p:g}}function Rt(){g.r||v(g.c),g=g.p}function Y(t,e){t&&t.i&&(k.delete(t),t.i(e))}function Gt(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),g.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function It(t,e){t.d(1),e.delete(t.key)}function Jt(t,e,n,i,r,o,s,u,c,l,f,d){let _=t.length,m=o.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const E=[],T=new Map,D=new Map;for(h=m;h--;){const a=d(r,o,h),p=n(a);let y=s.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),T.set(p,E[h]=y),p in C&&D.set(p,Math.abs(h-C[p]))}const P=new Set,z=new Set;function L(a){Y(a,1),a.m(u,f),s.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=E[m-1],p=t[_-1],y=a.key,N=p.key;a===p?(f=a.first,_--,m--):T.has(N)?!s.has(y)||P.has(y)?L(a):z.has(N)?_--:D.get(y)>D.get(N)?(z.add(y),L(a)):(P.add(N),_--):(c(p,s),_--)}for(;_--;){const a=t[_];T.has(a.key)||c(a,s)}for(;m;)L(E[m-1]);return E}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function ht(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(I).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(H)}function mt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(b.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,o,s,u=[-1]){const c=$;w(t);const l=t.$$={fragment:null,ctx:[],props:o,update:M,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&pt(t,d)),_}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const d=ot(e.target);l.fragment&&l.fragment.l(d),d.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),it(),X()}w(c)}class Ut{$destroy(){mt(this,1),this.$destroy=M}$on(e,n){if(!J(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ht as A,mt as B,bt as C,$t as D,vt as E,wt as F,ct as G,M as H,xt as I,Bt as J,gt as K,Dt as L,St as M,Mt as N,Jt as O,v as P,qt as Q,It as R,Ut as S,Nt as a,Et as b,Ct as c,Gt as d,At as e,Rt as f,Y as g,lt as h,Wt as i,Pt as j,ut as k,jt as l,ot as m,kt as n,Ot as o,Lt as p,O as q,_t as r,yt as s,zt as t,Tt as u,Ft as v,R as w,Ht as x,Kt as y,Qt as z};