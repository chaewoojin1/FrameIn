"use strict";(self.webpackChunkfrontpj=self.webpackChunkfrontpj||[]).push([[828],{2828:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var r=a(5043),n=a(1675),c=a(9320),i=a(579);const t=()=>{const e=(0,n.Zp)(),[s,a]=(0,r.useState)(null),[t,o]=(0,r.useState)(!1),[d,l]=(0,r.useState)(!1),[m,h]=(0,r.useState)(""),[w,p]=(0,r.useState)(!1),[u,j]=(0,r.useState)(!1),[x,v]=(0,r.useState)(!1),[f,g]=(0,r.useState)({nickname:"",newPassword:"",confirmPassword:""}),k=(0,r.useRef)(null),[P,y]=(0,r.useState)({nickname:"",newPassword:"",confirmPassword:"",currentPassword:""});(0,r.useEffect)((()=>{t&&k.current&&!d&&k.current.focus()}),[t,d]);const N=async()=>{try{const e=await c.A.get("http://43.201.20.172:8090/api/myinfo/detail");a(e.data)}catch(s){s.response&&401===s.response.status?(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),e("/member/login",{replace:!0})):console.error("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911 \uc624\ub958 \ubc1c\uc0dd:",s)}};(0,r.useEffect)((()=>{N()}),[]);const C=async()=>{try{(await c.A.post("http://43.201.20.172:8090/api/auth/verify-password",{currentPassword:m})).data.verified?l(!0):y({...P,currentPassword:"\ud604\uc7ac \ube44\ubc00\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})}catch(e){y({...P,currentPassword:"\ud604\uc7ac \ube44\ubc00\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})}};return(0,i.jsxs)("div",{className:"memberInfo",children:[(0,i.jsxs)("div",{className:"userTitle",children:[(0,i.jsx)("span",{children:"\uc548\ub155\ud558\uc138\uc694!"}),(0,i.jsxs)("span",{children:[s?s.nickname:"","\ub2d8"]})]}),s?(0,i.jsxs)("div",{className:"memberInfoContent",children:[(0,i.jsx)("button",{className:"memberUpdateBtn",onClick:()=>{o(!0),l(!1),h(""),g({nickname:s?s.nickname:"",newPassword:"",confirmPassword:""}),y({nickname:"",newPassword:"",confirmPassword:"",currentPassword:""})},children:"\uc815\ubcf4 \uc218\uc815\ud558\uae30"}),(0,i.jsxs)("div",{className:"email",children:[(0,i.jsx)("span",{children:"\uc774\uba54\uc77c"}),(0,i.jsx)("span",{children:s.email})]}),(0,i.jsxs)("div",{className:"social",children:[(0,i.jsx)("span",{children:"\uc18c\uc15c \uacc4\uc815"}),(0,i.jsx)("span",{children:s.social?"\uc0ac\uc6a9 \uc911":"\uc0ac\uc6a9 \uc548 \ud568"})]}),(0,i.jsxs)("div",{className:"role",children:[(0,i.jsx)("span",{children:"\uad8c\ud55c"}),(0,i.jsx)("span",{children:s.roleNames.join(", ")})]})]}):(0,i.jsx)("span",{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."}),t&&(0,i.jsx)("div",{className:"modal",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsx)("div",{className:"modal-close",children:(0,i.jsx)("img",{src:"./../image/close.svg",alt:"close",onClick:()=>o(!1)})}),d?(0,i.jsxs)("div",{className:"updateForm",children:[(0,i.jsx)("h2",{children:"\uc815\ubcf4 \uc218\uc815"}),(0,i.jsx)("span",{children:"\ub2c9\ub124\uc784 \ubcc0\uacbd"}),(0,i.jsx)("input",{type:"text",value:f.nickname,onChange:e=>g({...f,nickname:e.target.value})}),P.nickname&&(0,i.jsx)("div",{className:"error",children:P.nickname}),(0,i.jsxs)("div",{className:"password",children:[(0,i.jsx)("span",{children:"\uc0c8 \ube44\ubc00\ubc88\ud638"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{id:"newPw",type:u?"text":"password",value:f.newPassword,placeholder:"\uc0c8 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",onChange:e=>g({...f,newPassword:e.target.value})}),(0,i.jsx)("div",{className:"eye",onClick:()=>j((e=>!e)),children:(0,i.jsx)("img",{src:u?"/image/eye.svg":"/image/eye-slash.svg",alt:"toggle-pw"})})]}),P.newPassword&&(0,i.jsx)("div",{className:"error",children:P.newPassword})]}),(0,i.jsxs)("div",{className:"password",children:[(0,i.jsx)("span",{children:"\uc0c8 \ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{id:"confirmPw",type:x?"text":"password",value:f.confirmPassword,placeholder:"\uc0c8 \ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud558\uc138\uc694.",onChange:e=>g({...f,confirmPassword:e.target.value})}),(0,i.jsx)("div",{className:"eye",onClick:()=>v((e=>!e)),children:(0,i.jsx)("img",{src:x?"/image/eye.svg":"/image/eye-slash.svg",alt:"toggle-pw"})})]}),P.confirmPassword&&(0,i.jsx)("div",{className:"error",children:P.confirmPassword})]}),(0,i.jsx)("div",{className:"modal-actions",children:(0,i.jsx)("button",{onClick:async()=>{let e={},a=!0;if(console.log("\uc5c5\ub370\uc774\ud2b8 \ud3fc \ub370\uc774\ud130:",f),f.nickname?f.nickname.length<2&&(e.nickname="\ub2c9\ub124\uc784\uc740 \ucd5c\uc18c 2\uc790 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.",a=!1):(e.nickname="\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",a=!1),f.nickname===s.nickname&&(e.nickname="\uc0c8 \ub2c9\ub124\uc784\uc774 \uae30\uc874 \ub2c9\ub124\uc784\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4.",a=!1),f.newPassword){/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(f.newPassword)||(e.newPassword="\ube44\ubc00\ubc88\ud638\ub294 \uc601\ubb38\uacfc \uc22b\uc790\ub97c \ud3ec\ud568\ud55c 8~20\uc790\uc5ec\uc57c \ud569\ub2c8\ub2e4.",a=!1),f.newPassword!==f.confirmPassword&&(e.confirmPassword="\uc0c8 \ube44\ubc00\ubc88\ud638\uc640 \ud655\uc778 \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",a=!1)}if(!a)return void y(e);const r={nickname:f.nickname,pw:f.newPassword};try{await c.A.put("http://43.201.20.172:8090/api/myinfo/update",r);alert("\uc815\ubcf4\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),o(!1),N()}catch(n){n.response&&n.response.data?alert(n.response.data):alert("\uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\uc218\uc815"})})]}):(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"password",children:[(0,i.jsx)("span",{children:"\ud604\uc7ac \ube44\ubc00\ubc88\ud638"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{id:"currentPw",type:w?"text":"password",value:m,placeholder:"\ud604\uc7ac \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",onChange:e=>h(e.target.value),ref:k,onKeyDown:e=>{"Enter"===e.key&&C()}}),(0,i.jsx)("div",{className:"eye",onClick:()=>p((e=>!e)),children:(0,i.jsx)("img",{src:w?"/image/eye.svg":"/image/eye-slash.svg",alt:"toggle-pw"})})]}),P.currentPassword&&(0,i.jsx)("div",{className:"error",children:P.currentPassword})]}),(0,i.jsx)("div",{className:"modal-actions",children:(0,i.jsx)("button",{onClick:C,children:"\ud655\uc778"})})]})]})})]})},o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t,{})})},9320:(e,s,a)=>{a.d(s,{A:()=>i});var r=a(6213),n=a(8056);const c=r.A.create();c.interceptors.request.use((e=>{const s=(0,n.Ri)("member");if(!s)return Promise.reject({response:{data:{error:"REQUIRE_LOGIN"}}});const{accessToken:a}=s;return e.headers.Authorization=`Bearer ${a}`,e}),(e=>Promise.reject(e))),c.interceptors.response.use((async e=>{const s=e.data;if(s&&"ERROR_ACCESS_TOKEN"===s.error){const s=(0,n.Ri)("member"),a=await(async(e,s)=>{const a={headers:{Authorization:`Bearer ${e}`}};return(await r.A.get(`http://43.201.20.172:8090/api/member/refresh?refreshToken=${s}`,a)).data})(s.accessToken,s.refreshToken);s.accessToken=a.accessToken,s.refreshToken=a.refreshToken,(0,n.TV)("member",JSON.stringify(s),1);const c=e.config;return c.headers.Authorization=`Bearer ${a.accessToken}`,await(0,r.A)(c)}return e}),(e=>Promise.reject(e)));const i=c}}]);
//# sourceMappingURL=828.f9891ba6.chunk.js.map