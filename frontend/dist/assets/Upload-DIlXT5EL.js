import{_ as dr,c as pr,a as Oe,b as ht,d as pn,e as ge,f as K,p as ft,T as hn,g as fn,m as gn,r as mn,u as se,K as gt,h as hr,C as Ke,o as fr,R as gr,i as mr,j as br,k as vr,I as Fe,w as yr,l as we,n as bn,q as vn,s as yn,t as Q,v as ie,x as wn,y as wr,z as _r,A as Bt,B as _n,D as Cn,E as Cr,F as Ut,G as Er,H as Sr,J as En,L as $r,M as Ir,N as Ft,O as Mt,P as mt,Q as Rr,S as Dr,U as xr,V as Or,W as re,X as jt,Y as Tr,Z as Ar,$ as tt,a0 as Ht,a1 as Pr}from"./index-CAQMz5z4.js";import{r as u,b as bt,a as zt}from"./vendor-D4psCw30.js";function Nr(){const[,e]=u.useReducer(t=>t+1,0);return e}var kr={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},Lr=function(){var t=u.useRef([]),n=u.useRef(null);return u.useEffect(function(){var r=Date.now(),o=!1;t.current.forEach(function(s){if(s){o=!0;var a=s.style;a.transitionDuration=".3s, .3s, .3s, .06s",n.current&&r-n.current<100&&(a.transitionDuration="0s, 0s")}}),o&&(n.current=Date.now())}),t.current},Wt=0,Br=pr();function Ur(){var e;return Br?(e=Wt,Wt+=1):e="TEST_OR_SSR",e}const Fr=function(e){var t=u.useState(),n=dr(t,2),r=n[0],o=n[1];return u.useEffect(function(){o("rc_progress_".concat(Ur()))},[]),e||r};var Vt=function(t){var n=t.bg,r=t.children;return u.createElement("div",{style:{width:"100%",height:"100%",background:n}},r)};function Xt(e,t){return Object.keys(e).map(function(n){var r=parseFloat(n),o="".concat(Math.floor(r*t),"%");return"".concat(e[n]," ").concat(o)})}var Mr=u.forwardRef(function(e,t){var n=e.prefixCls,r=e.color,o=e.gradientId,s=e.radius,a=e.style,i=e.ptg,c=e.strokeLinecap,l=e.strokeWidth,d=e.size,p=e.gapDegree,h=r&&Oe(r)==="object",g=h?"#FFF":void 0,m=d/2,S=u.createElement("circle",{className:"".concat(n,"-circle-path"),r:s,cx:m,cy:m,stroke:g,strokeLinecap:c,strokeWidth:l,opacity:i===0?0:1,style:a,ref:t});if(!h)return S;var b="".concat(o,"-conic"),_=p?"".concat(180+p/2,"deg"):"0deg",C=Xt(r,(360-p)/360),R=Xt(r,1),y="conic-gradient(from ".concat(_,", ").concat(C.join(", "),")"),f="linear-gradient(to ".concat(p?"bottom":"top",", ").concat(R.join(", "),")");return u.createElement(u.Fragment,null,u.createElement("mask",{id:b},S),u.createElement("foreignObject",{x:0,y:0,width:d,height:d,mask:"url(#".concat(b,")")},u.createElement(Vt,{bg:f},u.createElement(Vt,{bg:y}))))}),Ne=100,nt=function(t,n,r,o,s,a,i,c,l,d){var p=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,h=r/100*360*((360-a)/360),g=a===0?0:{bottom:0,top:180,left:90,right:-90}[i],m=(100-o)/100*n;l==="round"&&o!==100&&(m+=d/2,m>=n&&(m=n-.01));var S=Ne/2;return{stroke:typeof c=="string"?c:void 0,strokeDasharray:"".concat(n,"px ").concat(t),strokeDashoffset:m+p,transform:"rotate(".concat(s+h+g,"deg)"),transformOrigin:"".concat(S,"px ").concat(S,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},jr=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function qt(e){var t=e??[];return Array.isArray(t)?t:[t]}var Hr=function(t){var n=ht(ht({},kr),t),r=n.id,o=n.prefixCls,s=n.steps,a=n.strokeWidth,i=n.trailWidth,c=n.gapDegree,l=c===void 0?0:c,d=n.gapPosition,p=n.trailColor,h=n.strokeLinecap,g=n.style,m=n.className,S=n.strokeColor,b=n.percent,_=pn(n,jr),C=Ne/2,R=Fr(r),y="".concat(R,"-gradient"),f=C-a/2,$=Math.PI*2*f,D=l>0?90+l/2:-90,O=$*((360-l)/360),E=Oe(s)==="object"?s:{count:s,gap:2},w=E.count,T=E.gap,J=qt(b),B=qt(S),Y=B.find(function(X){return X&&Oe(X)==="object"}),te=Y&&Oe(Y)==="object",U=te?"butt":h,P=nt($,O,0,100,D,l,d,p,U,a),le=Lr(),ee=function(){var q=0;return J.map(function(Z,v){var N=B[v]||B[B.length-1],G=nt($,O,q,Z,D,l,d,N,U,a);return q+=Z,u.createElement(Mr,{key:v,color:N,ptg:Z,radius:f,prefixCls:o,gradientId:y,style:G,strokeLinecap:U,strokeWidth:a,gapDegree:l,ref:function(ce){le[v]=ce},size:Ne})}).reverse()},V=function(){var q=Math.round(w*(J[0]/100)),Z=100/w,v=0;return new Array(w).fill(null).map(function(N,G){var W=G<=q-1?B[0]:p,ce=W&&Oe(W)==="object"?"url(#".concat(y,")"):void 0,de=nt($,O,v,Z,D,l,d,W,"butt",a,T);return v+=(O-de.strokeDashoffset+T)*100/O,u.createElement("circle",{key:G,className:"".concat(o,"-circle-path"),r:f,cx:C,cy:C,stroke:ce,strokeWidth:a,opacity:1,style:de,ref:function(be){le[G]=be}})})};return u.createElement("svg",ge({className:K("".concat(o,"-circle"),m),viewBox:"0 0 ".concat(Ne," ").concat(Ne),style:g,id:r,role:"presentation"},_),!w&&u.createElement("circle",{className:"".concat(o,"-circle-trail"),r:f,cx:C,cy:C,stroke:p,strokeLinecap:U,strokeWidth:i||a,style:P}),w?V():ee())};function _e(e){return!e||e<0?0:e>100?100:e}function We(e){let{success:t,successPercent:n}=e,r=n;return t&&"progress"in t&&(r=t.progress),t&&"percent"in t&&(r=t.percent),r}const zr=e=>{let{percent:t,success:n,successPercent:r}=e;const o=_e(We({success:n,successPercent:r}));return[o,_e(_e(t)-o)]},Wr=e=>{let{success:t={},strokeColor:n}=e;const{strokeColor:r}=t;return[r||ft.green,n||null]},Je=(e,t,n)=>{var r,o,s,a;let i=-1,c=-1;if(t==="step"){const l=n.steps,d=n.strokeWidth;typeof e=="string"||typeof e>"u"?(i=e==="small"?2:14,c=d??8):typeof e=="number"?[i,c]=[e,e]:[i=14,c=8]=Array.isArray(e)?e:[e.width,e.height],i*=l}else if(t==="line"){const l=n==null?void 0:n.strokeWidth;typeof e=="string"||typeof e>"u"?c=l||(e==="small"?6:8):typeof e=="number"?[i,c]=[e,e]:[i=-1,c=8]=Array.isArray(e)?e:[e.width,e.height]}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[i,c]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[i,c]=[e,e]:Array.isArray(e)&&(i=(o=(r=e[0])!==null&&r!==void 0?r:e[1])!==null&&o!==void 0?o:120,c=(a=(s=e[0])!==null&&s!==void 0?s:e[1])!==null&&a!==void 0?a:120));return[i,c]},Vr=3,Xr=e=>Vr/e*100,qr=e=>{const{prefixCls:t,trailColor:n=null,strokeLinecap:r="round",gapPosition:o,gapDegree:s,width:a=120,type:i,children:c,success:l,size:d=a,steps:p}=e,[h,g]=Je(d,"circle");let{strokeWidth:m}=e;m===void 0&&(m=Math.max(Xr(h),6));const S={width:h,height:g,fontSize:h*.15+6},b=u.useMemo(()=>{if(s||s===0)return s;if(i==="dashboard")return 75},[s,i]),_=zr(e),C=o||i==="dashboard"&&"bottom"||void 0,R=Object.prototype.toString.call(e.strokeColor)==="[object Object]",y=Wr({success:l,strokeColor:e.strokeColor}),f=K(`${t}-inner`,{[`${t}-circle-gradient`]:R}),$=u.createElement(Hr,{steps:p,percent:p?_[1]:_,strokeWidth:m,trailWidth:m,strokeColor:p?y[1]:y,strokeLinecap:r,trailColor:n,prefixCls:t,gapDegree:b,gapPosition:C}),D=h<=20,O=u.createElement("div",{className:f,style:S},$,!D&&c);return D?u.createElement(hn,{title:c},O):O},Ve="--progress-line-stroke-color",Sn="--progress-percent",Gt=e=>{const t=e?"100%":"-100%";return new gt(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Gr=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:Object.assign(Object.assign({},mn(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${Ve})`]},height:"100%",width:`calc(1 / var(${Sn}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[n]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${se(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:Gt(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:Gt(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Kr=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[n]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Jr=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Yr=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]:{fontSize:e.fontSizeSM}}}},Zr=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}),Qr=fn("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),n=gn(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Gr(n),Kr(n),Jr(n),Yr(n)]},Zr);var eo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const to=e=>{let t=[];return Object.keys(e).forEach(n=>{const r=parseFloat(n.replace(/%/g,""));isNaN(r)||t.push({key:r,value:e[n]})}),t=t.sort((n,r)=>n.key-r.key),t.map(n=>{let{key:r,value:o}=n;return`${o} ${r}%`}).join(", ")},no=(e,t)=>{const{from:n=ft.blue,to:r=ft.blue,direction:o=t==="rtl"?"to left":"to right"}=e,s=eo(e,["from","to","direction"]);if(Object.keys(s).length!==0){const i=to(s),c=`linear-gradient(${o}, ${i})`;return{background:c,[Ve]:c}}const a=`linear-gradient(${o}, ${n}, ${r})`;return{background:a,[Ve]:a}},ro=e=>{const{prefixCls:t,direction:n,percent:r,size:o,strokeWidth:s,strokeColor:a,strokeLinecap:i="round",children:c,trailColor:l=null,percentPosition:d,success:p}=e,{align:h,type:g}=d,m=a&&typeof a!="string"?no(a,n):{[Ve]:a,background:a},S=i==="square"||i==="butt"?0:void 0,b=o??[-1,s||(o==="small"?6:8)],[_,C]=Je(b,"line",{strokeWidth:s}),R={backgroundColor:l||void 0,borderRadius:S},y=Object.assign(Object.assign({width:`${_e(r)}%`,height:C,borderRadius:S},m),{[Sn]:_e(r)/100}),f=We(e),$={width:`${_e(f)}%`,height:C,borderRadius:S,backgroundColor:p==null?void 0:p.strokeColor},D={width:_<0?"100%":_},O=u.createElement("div",{className:`${t}-inner`,style:R},u.createElement("div",{className:K(`${t}-bg`,`${t}-bg-${g}`),style:y},g==="inner"&&c),f!==void 0&&u.createElement("div",{className:`${t}-success-bg`,style:$})),E=g==="outer"&&h==="start",w=g==="outer"&&h==="end";return g==="outer"&&h==="center"?u.createElement("div",{className:`${t}-layout-bottom`},O,c):u.createElement("div",{className:`${t}-outer`,style:D},E&&c,O,w&&c)},oo=e=>{const{size:t,steps:n,percent:r=0,strokeWidth:o=8,strokeColor:s,trailColor:a=null,prefixCls:i,children:c}=e,l=Math.round(n*(r/100)),p=t??[t==="small"?2:14,o],[h,g]=Je(p,"step",{steps:n,strokeWidth:o}),m=h/n,S=new Array(n);for(let b=0;b<n;b++){const _=Array.isArray(s)?s[b]:s;S[b]=u.createElement("div",{key:b,className:K(`${i}-steps-item`,{[`${i}-steps-item-active`]:b<=l-1}),style:{backgroundColor:b<=l-1?_:a,width:m,height:g}})}return u.createElement("div",{className:`${i}-steps-outer`},S,c)};var so=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const io=["normal","exception","active","success"],ao=u.forwardRef((e,t)=>{const{prefixCls:n,className:r,rootClassName:o,steps:s,strokeColor:a,percent:i=0,size:c="default",showInfo:l=!0,type:d="line",status:p,format:h,style:g,percentPosition:m={}}=e,S=so(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:b="end",type:_="outer"}=m,C=Array.isArray(a)?a[0]:a,R=typeof a=="string"||Array.isArray(a)?a:void 0,y=u.useMemo(()=>{if(C){const ee=typeof C=="string"?C:Object.values(C)[0];return new hr(ee).isLight()}return!1},[a]),f=u.useMemo(()=>{var ee,V;const X=We(e);return parseInt(X!==void 0?(ee=X??0)===null||ee===void 0?void 0:ee.toString():(V=i??0)===null||V===void 0?void 0:V.toString(),10)},[i,e.success,e.successPercent]),$=u.useMemo(()=>!io.includes(p)&&f>=100?"success":p||"normal",[p,f]),{getPrefixCls:D,direction:O,progress:E}=u.useContext(Ke),w=D("progress",n),[T,J,B]=Qr(w),Y=d==="line",te=Y&&!s,U=u.useMemo(()=>{if(!l)return null;const ee=We(e);let V;const X=h||(Z=>`${Z}%`),q=Y&&y&&_==="inner";return _==="inner"||h||$!=="exception"&&$!=="success"?V=X(_e(i),_e(ee)):$==="exception"?V=Y?u.createElement(gr,null):u.createElement(mr,null):$==="success"&&(V=Y?u.createElement(br,null):u.createElement(vr,null)),u.createElement("span",{className:K(`${w}-text`,{[`${w}-text-bright`]:q,[`${w}-text-${b}`]:te,[`${w}-text-${_}`]:te}),title:typeof V=="string"?V:void 0},V)},[l,i,f,$,d,w,h]);let P;d==="line"?P=s?u.createElement(oo,Object.assign({},e,{strokeColor:R,prefixCls:w,steps:typeof s=="object"?s.count:s}),U):u.createElement(ro,Object.assign({},e,{strokeColor:C,prefixCls:w,direction:O,percentPosition:{align:b,type:_}}),U):(d==="circle"||d==="dashboard")&&(P=u.createElement(qr,Object.assign({},e,{strokeColor:C,prefixCls:w,progressStatus:$}),U));const le=K(w,`${w}-status-${$}`,{[`${w}-${d==="dashboard"&&"circle"||d}`]:d!=="line",[`${w}-inline-circle`]:d==="circle"&&Je(c,"circle")[0]<=20,[`${w}-line`]:te,[`${w}-line-align-${b}`]:te,[`${w}-line-position-${_}`]:te,[`${w}-steps`]:s,[`${w}-show-info`]:l,[`${w}-${c}`]:typeof c=="string",[`${w}-rtl`]:O==="rtl"},E==null?void 0:E.className,r,o,J,B);return T(u.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},E==null?void 0:E.style),g),className:le,role:"progressbar","aria-valuenow":f,"aria-valuemin":0,"aria-valuemax":100},fr(S,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),P))});var co={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},lo=function(t,n){return u.createElement(Fe,ge({},t,{ref:n,icon:co}))},uo=u.forwardRef(lo),po={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},ho=function(t,n){return u.createElement(Fe,ge({},t,{ref:n,icon:po}))},fo=u.forwardRef(ho),go={icon:function(t,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",fill:n}},{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",fill:t}}]}},name:"file",theme:"twotone"},mo=function(t,n){return u.createElement(Fe,ge({},t,{ref:n,icon:go}))},bo=u.forwardRef(mo),vo={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},yo=function(t,n){return u.createElement(Fe,ge({},t,{ref:n,icon:vo}))},wo=u.forwardRef(yo),_o={icon:function(t,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",fill:t}},{tag:"path",attrs:{d:"M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",fill:n}},{tag:"path",attrs:{d:"M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",fill:n}},{tag:"path",attrs:{d:"M276 368a28 28 0 1056 0 28 28 0 10-56 0z",fill:n}},{tag:"path",attrs:{d:"M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",fill:t}}]}},name:"picture",theme:"twotone"},Co=function(t,n){return u.createElement(Fe,ge({},t,{ref:n,icon:_o}))},Eo=u.forwardRef(Co);const rt=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=e.type||"",s=o.replace(/\/.*$/,"");return n.some(function(a){var i=a.trim();if(/^\*(\/\*)?$/.test(a))return!0;if(i.charAt(0)==="."){var c=r.toLowerCase(),l=i.toLowerCase(),d=[l];return(l===".jpg"||l===".jpeg")&&(d=[".jpg",".jpeg"]),d.some(function(p){return c.endsWith(p)})}return/\/\*$/.test(i)?s===i.replace(/\/.*$/,""):o===i?!0:/^\w+$/.test(i)?(yr(!1,"Upload takes an invalidate 'accept' type '".concat(i,"'.Skip for check.")),!0):!1})}return!0};function So(e,t){var n="cannot ".concat(e.method," ").concat(e.action," ").concat(t.status,"'"),r=new Error(n);return r.status=t.status,r.method=e.method,r.url=e.action,r}function Kt(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}function $o(e){var t=new XMLHttpRequest;e.onProgress&&t.upload&&(t.upload.onprogress=function(s){s.total>0&&(s.percent=s.loaded/s.total*100),e.onProgress(s)});var n=new FormData;e.data&&Object.keys(e.data).forEach(function(o){var s=e.data[o];if(Array.isArray(s)){s.forEach(function(a){n.append("".concat(o,"[]"),a)});return}n.append(o,s)}),e.file instanceof Blob?n.append(e.filename,e.file,e.file.name):n.append(e.filename,e.file),t.onerror=function(s){e.onError(s)},t.onload=function(){return t.status<200||t.status>=300?e.onError(So(e,t),Kt(t)):e.onSuccess(Kt(t),t)},t.open(e.method,e.action,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var r=e.headers||{};return r["X-Requested-With"]!==null&&t.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(r).forEach(function(o){r[o]!==null&&t.setRequestHeader(o,r[o])}),t.send(n),{abort:function(){t.abort()}}}var Io=function(t,n,r){var o=[],s=[];t.forEach(function(l){return s.push(l.webkitGetAsEntry())});function a(l){var d=l.createReader();function p(){d.readEntries(function(h){var g=Array.prototype.slice.apply(h);s.push.apply(s,we(g));var m=!g.length;m||p()})}p()}var i=function(d,p){d&&(d.path="",d.isFile?d.file(function(h){r(h)&&(d.fullPath&&!h.webkitRelativePath&&(Object.defineProperties(h,{webkitRelativePath:{writable:!0}}),h.webkitRelativePath=d.fullPath.replace(/^\//,""),Object.defineProperties(h,{webkitRelativePath:{writable:!1}})),o.push(h))}):d.isDirectory&&a(d))};function c(){for(var l=0;l<s.length;)i(s[l]),l++;n(o)}c()},Ro=+new Date,Do=0;function ot(){return"rc-upload-".concat(Ro,"-").concat(++Do)}var xo=["component","prefixCls","className","classNames","disabled","id","style","styles","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave","hasControlInside"],Oo=function(e){bn(n,e);var t=vn(n);function n(){var r;yn(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return r=t.call.apply(t,[this].concat(s)),Q(ie(r),"state",{uid:ot()}),Q(ie(r),"reqs",{}),Q(ie(r),"fileInput",void 0),Q(ie(r),"_isMounted",void 0),Q(ie(r),"onChange",function(i){var c=r.props,l=c.accept,d=c.directory,p=i.target.files,h=we(p).filter(function(g){return!d||rt(g,l)});r.uploadFiles(h),r.reset()}),Q(ie(r),"onClick",function(i){var c=r.fileInput;if(c){var l=i.target,d=r.props.onClick;if(l&&l.tagName==="BUTTON"){var p=c.parentNode;p.focus(),l.blur()}c.click(),d&&d(i)}}),Q(ie(r),"onKeyDown",function(i){i.key==="Enter"&&r.onClick(i)}),Q(ie(r),"onFileDrop",function(i){var c=r.props.multiple;if(i.preventDefault(),i.type!=="dragover")if(r.props.directory)Io(Array.prototype.slice.call(i.dataTransfer.items),r.uploadFiles,function(d){return rt(d,r.props.accept)});else{var l=we(i.dataTransfer.files).filter(function(d){return rt(d,r.props.accept)});c===!1&&(l=l.slice(0,1)),r.uploadFiles(l)}}),Q(ie(r),"uploadFiles",function(i){var c=we(i),l=c.map(function(d){return d.uid=ot(),r.processFile(d,c)});Promise.all(l).then(function(d){var p=r.props.onBatchStart;p==null||p(d.map(function(h){var g=h.origin,m=h.parsedFile;return{file:g,parsedFile:m}})),d.filter(function(h){return h.parsedFile!==null}).forEach(function(h){r.post(h)})})}),Q(ie(r),"processFile",function(){var i=_r(Bt().mark(function c(l,d){var p,h,g,m,S,b,_,C,R;return Bt().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(p=r.props.beforeUpload,h=l,!p){f.next=14;break}return f.prev=3,f.next=6,p(l,d);case 6:h=f.sent,f.next=12;break;case 9:f.prev=9,f.t0=f.catch(3),h=!1;case 12:if(h!==!1){f.next=14;break}return f.abrupt("return",{origin:l,parsedFile:null,action:null,data:null});case 14:if(g=r.props.action,typeof g!="function"){f.next=21;break}return f.next=18,g(l);case 18:m=f.sent,f.next=22;break;case 21:m=g;case 22:if(S=r.props.data,typeof S!="function"){f.next=29;break}return f.next=26,S(l);case 26:b=f.sent,f.next=30;break;case 29:b=S;case 30:return _=(Oe(h)==="object"||typeof h=="string")&&h?h:l,_ instanceof File?C=_:C=new File([_],l.name,{type:l.type}),R=C,R.uid=l.uid,f.abrupt("return",{origin:l,data:b,parsedFile:R,action:m});case 35:case"end":return f.stop()}},c,null,[[3,9]])}));return function(c,l){return i.apply(this,arguments)}}()),Q(ie(r),"saveFileInput",function(i){r.fileInput=i}),r}return wn(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(o){var s=this,a=o.data,i=o.origin,c=o.action,l=o.parsedFile;if(this._isMounted){var d=this.props,p=d.onStart,h=d.customRequest,g=d.name,m=d.headers,S=d.withCredentials,b=d.method,_=i.uid,C=h||$o,R={action:c,filename:g,data:a,file:l,headers:m,withCredentials:S,method:b||"post",onProgress:function(f){var $=s.props.onProgress;$==null||$(f,l)},onSuccess:function(f,$){var D=s.props.onSuccess;D==null||D(f,l,$),delete s.reqs[_]},onError:function(f,$){var D=s.props.onError;D==null||D(f,$,l),delete s.reqs[_]}};p(i),this.reqs[_]=C(R)}}},{key:"reset",value:function(){this.setState({uid:ot()})}},{key:"abort",value:function(o){var s=this.reqs;if(o){var a=o.uid?o.uid:o;s[a]&&s[a].abort&&s[a].abort(),delete s[a]}else Object.keys(s).forEach(function(i){s[i]&&s[i].abort&&s[i].abort(),delete s[i]})}},{key:"render",value:function(){var o=this.props,s=o.component,a=o.prefixCls,i=o.className,c=o.classNames,l=c===void 0?{}:c,d=o.disabled,p=o.id,h=o.style,g=o.styles,m=g===void 0?{}:g,S=o.multiple,b=o.accept,_=o.capture,C=o.children,R=o.directory,y=o.openFileDialogOnClick,f=o.onMouseEnter,$=o.onMouseLeave,D=o.hasControlInside,O=pn(o,xo),E=K(Q(Q(Q({},a,!0),"".concat(a,"-disabled"),d),i,i)),w=R?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},T=d?{}:{onClick:y?this.onClick:function(){},onKeyDown:y?this.onKeyDown:function(){},onMouseEnter:f,onMouseLeave:$,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:D?void 0:"0"};return bt.createElement(s,ge({},T,{className:E,role:D?void 0:"button",style:h}),bt.createElement("input",ge({},wr(O,{aria:!0,data:!0}),{id:p,disabled:d,type:"file",ref:this.saveFileInput,onClick:function(B){return B.stopPropagation()},key:this.state.uid,style:ht({display:"none"},m.input),className:l.input,accept:b},w,{multiple:S,onChange:this.onChange},_!=null?{capture:_}:{})),C)}}]),n}(u.Component);function st(){}var vt=function(e){bn(n,e);var t=vn(n);function n(){var r;yn(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return r=t.call.apply(t,[this].concat(s)),Q(ie(r),"uploader",void 0),Q(ie(r),"saveUploader",function(i){r.uploader=i}),r}return wn(n,[{key:"abort",value:function(o){this.uploader.abort(o)}},{key:"render",value:function(){return bt.createElement(Oo,ge({},this.props,{ref:this.saveUploader}))}}]),n}(u.Component);Q(vt,"defaultProps",{component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:st,onError:st,onSuccess:st,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0,hasControlInside:!1});const To=e=>{const{componentCls:t,iconCls:n}=e;return{[`${t}-wrapper`]:{[`${t}-drag`]:{position:"relative",width:"100%",height:"100%",textAlign:"center",background:e.colorFillAlter,border:`${se(e.lineWidth)} dashed ${e.colorBorder}`,borderRadius:e.borderRadiusLG,cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,[t]:{padding:e.padding},[`${t}-btn`]:{display:"table",width:"100%",height:"100%",outline:"none",borderRadius:e.borderRadiusLG,"&:focus-visible":{outline:`${se(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`}},[`${t}-drag-container`]:{display:"table-cell",verticalAlign:"middle"},[`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]:{borderColor:e.colorPrimaryHover},[`p${t}-drag-icon`]:{marginBottom:e.margin,[n]:{color:e.colorPrimary,fontSize:e.uploadThumbnailSize}},[`p${t}-text`]:{margin:`0 0 ${se(e.marginXXS)}`,color:e.colorTextHeading,fontSize:e.fontSizeLG},[`p${t}-hint`]:{color:e.colorTextDescription,fontSize:e.fontSize},[`&${t}-disabled`]:{[`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]:{color:e.colorTextDisabled}}}}}},Ao=e=>{const{componentCls:t,antCls:n,iconCls:r,fontSize:o,lineHeight:s,calc:a}=e,i=`${t}-list-item`,c=`${i}-actions`,l=`${i}-action`,d=e.fontHeightSM;return{[`${t}-wrapper`]:{[`${t}-list`]:Object.assign(Object.assign({},_n()),{lineHeight:e.lineHeight,[i]:{position:"relative",height:a(e.lineHeight).mul(o).equal(),marginTop:e.marginXS,fontSize:o,display:"flex",alignItems:"center",transition:`background-color ${e.motionDurationSlow}`,"&:hover":{backgroundColor:e.controlItemBgHover},[`${i}-name`]:Object.assign(Object.assign({},Cn),{padding:`0 ${se(e.paddingXS)}`,lineHeight:s,flex:"auto",transition:`all ${e.motionDurationSlow}`}),[c]:{whiteSpace:"nowrap",[l]:{opacity:0},[r]:{color:e.actionsColor,transition:`all ${e.motionDurationSlow}`},[`
              ${l}:focus-visible,
              &.picture ${l}
            `]:{opacity:1},[`${l}${n}-btn`]:{height:d,border:0,lineHeight:1}},[`${t}-icon ${r}`]:{color:e.colorTextDescription,fontSize:o},[`${i}-progress`]:{position:"absolute",bottom:e.calc(e.uploadProgressOffset).mul(-1).equal(),width:"100%",paddingInlineStart:a(o).add(e.paddingXS).equal(),fontSize:o,lineHeight:0,pointerEvents:"none","> div":{margin:0}}},[`${i}:hover ${l}`]:{opacity:1},[`${i}-error`]:{color:e.colorError,[`${i}-name, ${t}-icon ${r}`]:{color:e.colorError},[c]:{[`${r}, ${r}:hover`]:{color:e.colorError},[l]:{opacity:1}}},[`${t}-list-item-container`]:{transition:`opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,"&::before":{display:"table",width:0,height:0,content:'""'}}})}}},Po=e=>{const{componentCls:t}=e,n=new gt("uploadAnimateInlineIn",{from:{width:0,height:0,padding:0,opacity:0,margin:e.calc(e.marginXS).div(-2).equal()}}),r=new gt("uploadAnimateInlineOut",{to:{width:0,height:0,padding:0,opacity:0,margin:e.calc(e.marginXS).div(-2).equal()}}),o=`${t}-animate-inline`;return[{[`${t}-wrapper`]:{[`${o}-appear, ${o}-enter, ${o}-leave`]:{animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseInOutCirc,animationFillMode:"forwards"},[`${o}-appear, ${o}-enter`]:{animationName:n},[`${o}-leave`]:{animationName:r}}},{[`${t}-wrapper`]:Cr(e)},n,r]},No=e=>{const{componentCls:t,iconCls:n,uploadThumbnailSize:r,uploadProgressOffset:o,calc:s}=e,a=`${t}-list`,i=`${a}-item`;return{[`${t}-wrapper`]:{[`
        ${a}${a}-picture,
        ${a}${a}-picture-card,
        ${a}${a}-picture-circle
      `]:{[i]:{position:"relative",height:s(r).add(s(e.lineWidth).mul(2)).add(s(e.paddingXS).mul(2)).equal(),padding:e.paddingXS,border:`${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusLG,"&:hover":{background:"transparent"},[`${i}-thumbnail`]:Object.assign(Object.assign({},Cn),{width:r,height:r,lineHeight:se(s(r).add(e.paddingSM).equal()),textAlign:"center",flex:"none",[n]:{fontSize:e.fontSizeHeading2,color:e.colorPrimary},img:{display:"block",width:"100%",height:"100%",overflow:"hidden"}}),[`${i}-progress`]:{bottom:o,width:`calc(100% - ${se(s(e.paddingSM).mul(2).equal())})`,marginTop:0,paddingInlineStart:s(r).add(e.paddingXS).equal()}},[`${i}-error`]:{borderColor:e.colorError,[`${i}-thumbnail ${n}`]:{[`svg path[fill='${Ut[0]}']`]:{fill:e.colorErrorBg},[`svg path[fill='${Ut.primary}']`]:{fill:e.colorError}}},[`${i}-uploading`]:{borderStyle:"dashed",[`${i}-name`]:{marginBottom:o}}},[`${a}${a}-picture-circle ${i}`]:{[`&, &::before, ${i}-thumbnail`]:{borderRadius:"50%"}}}}},ko=e=>{const{componentCls:t,iconCls:n,fontSizeLG:r,colorTextLightSolid:o,calc:s}=e,a=`${t}-list`,i=`${a}-item`,c=e.uploadPicCardSize;return{[`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]:Object.assign(Object.assign({},_n()),{display:"block",[`${t}${t}-select`]:{width:c,height:c,textAlign:"center",verticalAlign:"top",backgroundColor:e.colorFillAlter,border:`${se(e.lineWidth)} dashed ${e.colorBorder}`,borderRadius:e.borderRadiusLG,cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,[`> ${t}`]:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",textAlign:"center"},[`&:not(${t}-disabled):hover`]:{borderColor:e.colorPrimary}},[`${a}${a}-picture-card, ${a}${a}-picture-circle`]:{display:"flex",flexWrap:"wrap","@supports not (gap: 1px)":{"& > *":{marginBlockEnd:e.marginXS,marginInlineEnd:e.marginXS}},"@supports (gap: 1px)":{gap:e.marginXS},[`${a}-item-container`]:{display:"inline-block",width:c,height:c,verticalAlign:"top"},"&::after":{display:"none"},"&::before":{display:"none"},[i]:{height:"100%",margin:0,"&::before":{position:"absolute",zIndex:1,width:`calc(100% - ${se(s(e.paddingXS).mul(2).equal())})`,height:`calc(100% - ${se(s(e.paddingXS).mul(2).equal())})`,backgroundColor:e.colorBgMask,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'" "'}},[`${i}:hover`]:{[`&::before, ${i}-actions`]:{opacity:1}},[`${i}-actions`]:{position:"absolute",insetInlineStart:0,zIndex:10,width:"100%",whiteSpace:"nowrap",textAlign:"center",opacity:0,transition:`all ${e.motionDurationSlow}`,[`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
          `]:{zIndex:10,width:r,margin:`0 ${se(e.marginXXS)}`,fontSize:r,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,color:o,"&:hover":{color:o},svg:{verticalAlign:"baseline"}}},[`${i}-thumbnail, ${i}-thumbnail img`]:{position:"static",display:"block",width:"100%",height:"100%",objectFit:"contain"},[`${i}-name`]:{display:"none",textAlign:"center"},[`${i}-file + ${i}-name`]:{position:"absolute",bottom:e.margin,display:"block",width:`calc(100% - ${se(s(e.paddingXS).mul(2).equal())})`},[`${i}-uploading`]:{[`&${i}`]:{backgroundColor:e.colorFillAlter},[`&::before, ${n}-eye, ${n}-download, ${n}-delete`]:{display:"none"}},[`${i}-progress`]:{bottom:e.marginXL,width:`calc(100% - ${se(s(e.paddingXS).mul(2).equal())})`,paddingInlineStart:0}}}),[`${t}-wrapper${t}-picture-circle-wrapper`]:{[`${t}${t}-select`]:{borderRadius:"50%"}}}},Lo=e=>{const{componentCls:t}=e;return{[`${t}-rtl`]:{direction:"rtl"}}},Bo=e=>{const{componentCls:t,colorTextDisabled:n}=e;return{[`${t}-wrapper`]:Object.assign(Object.assign({},mn(e)),{[t]:{outline:0,"input[type='file']":{cursor:"pointer"}},[`${t}-select`]:{display:"inline-block"},[`${t}-disabled`]:{color:n,cursor:"not-allowed"}})}},Uo=e=>({actionsColor:e.colorTextDescription}),Fo=fn("Upload",e=>{const{fontSizeHeading3:t,fontHeight:n,lineWidth:r,controlHeightLG:o,calc:s}=e,a=gn(e,{uploadThumbnailSize:s(t).mul(2).equal(),uploadProgressOffset:s(s(n).div(2)).add(r).equal(),uploadPicCardSize:s(o).mul(2.55).equal()});return[Bo(a),To(a),No(a),ko(a),Ao(a),Po(a),Lo(a),Er(a)]},Uo);function Me(e){return Object.assign(Object.assign({},e),{lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate,name:e.name,size:e.size,type:e.type,uid:e.uid,percent:0,originFileObj:e})}function je(e,t){const n=we(t),r=n.findIndex(o=>{let{uid:s}=o;return s===e.uid});return r===-1?n.push(e):n[r]=e,n}function it(e,t){const n=e.uid!==void 0?"uid":"name";return t.filter(r=>r[n]===e[n])[0]}function Mo(e,t){const n=e.uid!==void 0?"uid":"name",r=t.filter(o=>o[n]!==e[n]);return r.length===t.length?null:r}const jo=function(){const t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").split("/"),r=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(r)||[""])[0]},$n=e=>e.indexOf("image/")===0,Ho=e=>{if(e.type&&!e.thumbUrl)return $n(e.type);const t=e.thumbUrl||e.url||"",n=jo(t);return/^data:image\//.test(t)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n)?!0:!(/^data:/.test(t)||n)},ve=200;function zo(e){return new Promise(t=>{if(!e.type||!$n(e.type)){t("");return}const n=document.createElement("canvas");n.width=ve,n.height=ve,n.style.cssText=`position: fixed; left: 0; top: 0; width: ${ve}px; height: ${ve}px; z-index: 9999; display: none;`,document.body.appendChild(n);const r=n.getContext("2d"),o=new Image;if(o.onload=()=>{const{width:s,height:a}=o;let i=ve,c=ve,l=0,d=0;s>a?(c=a*(ve/s),d=-(c-i)/2):(i=s*(ve/a),l=-(i-c)/2),r.drawImage(o,l,d,i,c);const p=n.toDataURL();document.body.removeChild(n),window.URL.revokeObjectURL(o.src),t(p)},o.crossOrigin="anonymous",e.type.startsWith("image/svg+xml")){const s=new FileReader;s.onload=()=>{s.result&&typeof s.result=="string"&&(o.src=s.result)},s.readAsDataURL(e)}else if(e.type.startsWith("image/gif")){const s=new FileReader;s.onload=()=>{s.result&&t(s.result)},s.readAsDataURL(e)}else o.src=window.URL.createObjectURL(e)})}const Wo=u.forwardRef((e,t)=>{let{prefixCls:n,className:r,style:o,locale:s,listType:a,file:i,items:c,progress:l,iconRender:d,actionIconRender:p,itemRender:h,isImgUrl:g,showPreviewIcon:m,showRemoveIcon:S,showDownloadIcon:b,previewIcon:_,removeIcon:C,downloadIcon:R,extra:y,onPreview:f,onDownload:$,onClose:D}=e;var O,E;const{status:w}=i,[T,J]=u.useState(w);u.useEffect(()=>{w!=="removed"&&J(w)},[w]);const[B,Y]=u.useState(!1);u.useEffect(()=>{const F=setTimeout(()=>{Y(!0)},300);return()=>{clearTimeout(F)}},[]);const te=d(i);let U=u.createElement("div",{className:`${n}-icon`},te);if(a==="picture"||a==="picture-card"||a==="picture-circle")if(T==="uploading"||!i.thumbUrl&&!i.url){const F=K(`${n}-list-item-thumbnail`,{[`${n}-list-item-file`]:T!=="uploading"});U=u.createElement("div",{className:F},te)}else{const F=g!=null&&g(i)?u.createElement("img",{src:i.thumbUrl||i.url,alt:i.name,className:`${n}-list-item-image`,crossOrigin:i.crossOrigin}):te,M=K(`${n}-list-item-thumbnail`,{[`${n}-list-item-file`]:g&&!g(i)});U=u.createElement("a",{className:M,onClick:fe=>f(i,fe),href:i.url||i.thumbUrl,target:"_blank",rel:"noopener noreferrer"},F)}const P=K(`${n}-list-item`,`${n}-list-item-${T}`),le=typeof i.linkProps=="string"?JSON.parse(i.linkProps):i.linkProps,ee=S?p((typeof C=="function"?C(i):C)||u.createElement(uo,null),()=>D(i),n,s.removeFile,!0):null,V=b&&T==="done"?p((typeof R=="function"?R(i):R)||u.createElement(fo,null),()=>$(i),n,s.downloadFile):null,X=a!=="picture-card"&&a!=="picture-circle"&&u.createElement("span",{key:"download-delete",className:K(`${n}-list-item-actions`,{picture:a==="picture"})},V,ee),q=typeof y=="function"?y(i):y,Z=q&&u.createElement("span",{className:`${n}-list-item-extra`},q),v=K(`${n}-list-item-name`),N=i.url?u.createElement("a",Object.assign({key:"view",target:"_blank",rel:"noopener noreferrer",className:v,title:i.name},le,{href:i.url,onClick:F=>f(i,F)}),i.name,Z):u.createElement("span",{key:"view",className:v,onClick:F=>f(i,F),title:i.name},i.name,Z),G=m&&(i.url||i.thumbUrl)?u.createElement("a",{href:i.url||i.thumbUrl,target:"_blank",rel:"noopener noreferrer",onClick:F=>f(i,F),title:s.previewFile},typeof _=="function"?_(i):_||u.createElement(Sr,null)):null,W=(a==="picture-card"||a==="picture-circle")&&T!=="uploading"&&u.createElement("span",{className:`${n}-list-item-actions`},G,T==="done"&&V,ee),{getPrefixCls:ce}=u.useContext(Ke),de=ce(),ue=u.createElement("div",{className:P},U,N,X,W,B&&u.createElement(En,{motionName:`${de}-fade`,visible:T==="uploading",motionDeadline:2e3},F=>{let{className:M}=F;const fe="percent"in i?u.createElement(ao,Object.assign({},l,{type:"line",percent:i.percent,"aria-label":i["aria-label"],"aria-labelledby":i["aria-labelledby"]})):null;return u.createElement("div",{className:K(`${n}-list-item-progress`,M)},fe)})),be=i.response&&typeof i.response=="string"?i.response:((O=i.error)===null||O===void 0?void 0:O.statusText)||((E=i.error)===null||E===void 0?void 0:E.message)||s.uploadError,he=T==="error"?u.createElement(hn,{title:be,getPopupContainer:F=>F.parentNode},ue):ue;return u.createElement("div",{className:K(`${n}-list-item-container`,r),style:o,ref:t},h?h(he,i,c,{download:$.bind(null,i),preview:f.bind(null,i),remove:D.bind(null,i)}):he)}),Vo=(e,t)=>{const{listType:n="text",previewFile:r=zo,onPreview:o,onDownload:s,onRemove:a,locale:i,iconRender:c,isImageUrl:l=Ho,prefixCls:d,items:p=[],showPreviewIcon:h=!0,showRemoveIcon:g=!0,showDownloadIcon:m=!1,removeIcon:S,previewIcon:b,downloadIcon:_,extra:C,progress:R={size:[-1,2],showInfo:!1},appendAction:y,appendActionVisible:f=!0,itemRender:$,disabled:D}=e,O=Nr(),[E,w]=u.useState(!1);u.useEffect(()=>{n!=="picture"&&n!=="picture-card"&&n!=="picture-circle"||(p||[]).forEach(v=>{typeof document>"u"||typeof window>"u"||!window.FileReader||!window.File||!(v.originFileObj instanceof File||v.originFileObj instanceof Blob)||v.thumbUrl!==void 0||(v.thumbUrl="",r&&r(v.originFileObj).then(N=>{v.thumbUrl=N||"",O()}))})},[n,p,r]),u.useEffect(()=>{w(!0)},[]);const T=(v,N)=>{if(o)return N==null||N.preventDefault(),o(v)},J=v=>{typeof s=="function"?s(v):v.url&&window.open(v.url)},B=v=>{a==null||a(v)},Y=v=>{if(c)return c(v,n);const N=v.status==="uploading",G=l!=null&&l(v)?u.createElement(Eo,null):u.createElement(bo,null);let W=N?u.createElement(Mt,null):u.createElement(wo,null);return n==="picture"?W=N?u.createElement(Mt,null):G:(n==="picture-card"||n==="picture-circle")&&(W=N?i.uploading:G),W},te=(v,N,G,W,ce)=>{const de={type:"text",size:"small",title:W,onClick:ue=>{var be,he;N(),u.isValidElement(v)&&((he=(be=v.props).onClick)===null||he===void 0||he.call(be,ue))},className:`${G}-list-item-action`};if(ce&&(de.disabled=D),u.isValidElement(v)){const ue=Ft(v,Object.assign(Object.assign({},v.props),{onClick:()=>{}}));return u.createElement(mt,Object.assign({},de,{icon:ue}))}return u.createElement(mt,Object.assign({},de),u.createElement("span",null,v))};u.useImperativeHandle(t,()=>({handlePreview:T,handleDownload:J}));const{getPrefixCls:U}=u.useContext(Ke),P=U("upload",d),le=U(),ee=K(`${P}-list`,`${P}-list-${n}`),V=we(p.map(v=>({key:v.uid,file:v})));let q={motionDeadline:2e3,motionName:`${P}-${n==="picture-card"||n==="picture-circle"?"animate-inline":"animate"}`,keys:V,motionAppear:E};const Z=u.useMemo(()=>{const v=Object.assign({},$r(le));return delete v.onAppearEnd,delete v.onEnterEnd,delete v.onLeaveEnd,v},[le]);return n!=="picture-card"&&n!=="picture-circle"&&(q=Object.assign(Object.assign({},Z),q)),u.createElement("div",{className:ee},u.createElement(Ir,Object.assign({},q,{component:!1}),v=>{let{key:N,file:G,className:W,style:ce}=v;return u.createElement(Wo,{key:N,locale:i,prefixCls:P,className:W,style:ce,file:G,items:p,progress:R,listType:n,isImgUrl:l,showPreviewIcon:h,showRemoveIcon:g,showDownloadIcon:m,removeIcon:S,previewIcon:b,downloadIcon:_,extra:C,iconRender:Y,actionIconRender:te,itemRender:$,onPreview:T,onDownload:J,onClose:B})}),y&&u.createElement(En,Object.assign({},q,{visible:f,forceRender:!0}),v=>{let{className:N,style:G}=v;return Ft(y,W=>({className:K(W.className,N),style:Object.assign(Object.assign(Object.assign({},G),{pointerEvents:N?"none":void 0}),W.style)}))}))},Xo=u.forwardRef(Vo);var qo=function(e,t,n,r){function o(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function i(d){try{l(r.next(d))}catch(p){a(p)}}function c(d){try{l(r.throw(d))}catch(p){a(p)}}function l(d){d.done?s(d.value):o(d.value).then(i,c)}l((r=r.apply(e,[])).next())})};const ke=`__LIST_IGNORE_${Date.now()}__`,Go=(e,t)=>{const{fileList:n,defaultFileList:r,onRemove:o,showUploadList:s=!0,listType:a="text",onPreview:i,onDownload:c,onChange:l,onDrop:d,previewFile:p,disabled:h,locale:g,iconRender:m,isImageUrl:S,progress:b,prefixCls:_,className:C,type:R="select",children:y,style:f,itemRender:$,maxCount:D,data:O={},multiple:E=!1,hasControlInside:w=!0,action:T="",accept:J="",supportServerRender:B=!0,rootClassName:Y}=e,te=u.useContext(Rr),U=h??te,[P,le]=Dr(r||[],{value:n,postState:I=>I??[]}),[ee,V]=u.useState("drop"),X=u.useRef(null),q=u.useRef(null);u.useMemo(()=>{const I=Date.now();(n||[]).forEach((A,j)=>{!A.uid&&!Object.isFrozen(A)&&(A.uid=`__AUTO__${I}_${j}__`)})},[n]);const Z=(I,A,j)=>{let x=we(A),k=!1;D===1?x=x.slice(-1):D&&(k=x.length>D,x=x.slice(0,D)),zt.flushSync(()=>{le(x)});const ne={file:I,fileList:x};j&&(ne.event=j),(!k||I.status==="removed"||x.some(Se=>Se.uid===I.uid))&&zt.flushSync(()=>{l==null||l(ne)})},v=(I,A)=>qo(void 0,void 0,void 0,function*(){const{beforeUpload:j,transformFile:x}=e;let k=I;if(j){const ne=yield j(I,A);if(ne===!1)return!1;if(delete I[ke],ne===ke)return Object.defineProperty(I,ke,{value:!0,configurable:!0}),!1;typeof ne=="object"&&ne&&(k=ne)}return x&&(k=yield x(k)),k}),N=I=>{const A=I.filter(k=>!k.file[ke]);if(!A.length)return;const j=A.map(k=>Me(k.file));let x=we(P);j.forEach(k=>{x=je(k,x)}),j.forEach((k,ne)=>{let Se=k;if(A[ne].parsedFile)k.status="uploading";else{const{originFileObj:xe}=k;let $e;try{$e=new File([xe],xe.name,{type:xe.type})}catch{$e=new Blob([xe],{type:xe.type}),$e.name=xe.name,$e.lastModifiedDate=new Date,$e.lastModified=new Date().getTime()}$e.uid=k.uid,Se=$e}Z(Se,x)})},G=(I,A,j)=>{try{typeof I=="string"&&(I=JSON.parse(I))}catch{}if(!it(A,P))return;const x=Me(A);x.status="done",x.percent=100,x.response=I,x.xhr=j;const k=je(x,P);Z(x,k)},W=(I,A)=>{if(!it(A,P))return;const j=Me(A);j.status="uploading",j.percent=I.percent;const x=je(j,P);Z(j,x,I)},ce=(I,A,j)=>{if(!it(j,P))return;const x=Me(j);x.error=I,x.response=A,x.status="error";const k=je(x,P);Z(x,k)},de=I=>{let A;Promise.resolve(typeof o=="function"?o(I):o).then(j=>{var x;if(j===!1)return;const k=Mo(I,P);k&&(A=Object.assign(Object.assign({},I),{status:"removed"}),P==null||P.forEach(ne=>{const Se=A.uid!==void 0?"uid":"name";ne[Se]===A[Se]&&!Object.isFrozen(ne)&&(ne.status="removed")}),(x=X.current)===null||x===void 0||x.abort(A),Z(A,k))})},ue=I=>{V(I.type),I.type==="drop"&&(d==null||d(I))};u.useImperativeHandle(t,()=>({onBatchStart:N,onSuccess:G,onProgress:W,onError:ce,fileList:P,upload:X.current,nativeElement:q.current}));const{getPrefixCls:be,direction:he,upload:F}=u.useContext(Ke),M=be("upload",_),fe=Object.assign(Object.assign({onBatchStart:N,onError:ce,onProgress:W,onSuccess:G},e),{data:O,multiple:E,action:T,accept:J,supportServerRender:B,prefixCls:M,disabled:U,beforeUpload:v,onChange:void 0,hasControlInside:w});delete fe.className,delete fe.style,(!y||U)&&delete fe.id;const Pt=`${M}-wrapper`,[Ze,Nt,er]=Fo(M,Pt),[tr]=xr("Upload",Or.Upload),{showRemoveIcon:kt,showPreviewIcon:nr,showDownloadIcon:rr,removeIcon:or,previewIcon:sr,downloadIcon:ir,extra:ar}=typeof s=="boolean"?{}:s,cr=typeof kt>"u"?!U:!!kt,Qe=(I,A)=>s?u.createElement(Xo,{prefixCls:M,listType:a,items:P,previewFile:p,onPreview:i,onDownload:c,onRemove:de,showRemoveIcon:cr,showPreviewIcon:nr,showDownloadIcon:rr,removeIcon:or,previewIcon:sr,downloadIcon:ir,iconRender:m,extra:ar,locale:Object.assign(Object.assign({},tr),g),isImageUrl:S,progress:b,appendAction:I,appendActionVisible:A,itemRender:$,disabled:U}):I,et=K(Pt,C,Y,Nt,er,F==null?void 0:F.className,{[`${M}-rtl`]:he==="rtl",[`${M}-picture-card-wrapper`]:a==="picture-card",[`${M}-picture-circle-wrapper`]:a==="picture-circle"}),lr=Object.assign(Object.assign({},F==null?void 0:F.style),f);if(R==="drag"){const I=K(Nt,M,`${M}-drag`,{[`${M}-drag-uploading`]:P.some(A=>A.status==="uploading"),[`${M}-drag-hover`]:ee==="dragover",[`${M}-disabled`]:U,[`${M}-rtl`]:he==="rtl"});return Ze(u.createElement("span",{className:et,ref:q},u.createElement("div",{className:I,style:lr,onDrop:ue,onDragOver:ue,onDragLeave:ue},u.createElement(vt,Object.assign({},fe,{ref:X,className:`${M}-btn`}),u.createElement("div",{className:`${M}-drag-container`},y))),Qe()))}const ur=K(M,`${M}-select`,{[`${M}-disabled`]:U}),Lt=u.createElement("div",{className:ur,style:y?void 0:{display:"none"}},u.createElement(vt,Object.assign({},fe,{ref:X})));return Ze(a==="picture-card"||a==="picture-circle"?u.createElement("span",{className:et,ref:q},Qe(Lt,!!y)):u.createElement("span",{className:et,ref:q},Lt,Qe()))},In=u.forwardRef(Go);var Ko=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Jo=u.forwardRef((e,t)=>{var{style:n,height:r,hasControlInside:o=!1}=e,s=Ko(e,["style","height","hasControlInside"]);return u.createElement(In,Object.assign({ref:t,hasControlInside:o},s,{type:"drag",style:Object.assign(Object.assign({},n),{height:r})}))}),It=In;It.Dragger=Jo;It.LIST_IGNORE=ke;var Jt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Yo=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],a=e[n++],i=e[n++],c=((o&7)<<18|(s&63)<<12|(a&63)<<6|i&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Dn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],a=o+1<e.length,i=a?e[o+1]:0,c=o+2<e.length,l=c?e[o+2]:0,d=s>>2,p=(s&3)<<4|i>>4;let h=(i&15)<<2|l>>6,g=l&63;c||(g=64,a||(h=64)),r.push(n[d],n[p],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Yo(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],i=o<e.length?n[e.charAt(o)]:0;++o;const l=o<e.length?n[e.charAt(o)]:64;++o;const p=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||i==null||l==null||p==null)throw new Zo;const h=s<<2|i>>4;if(r.push(h),l!==64){const g=i<<4&240|l>>2;if(r.push(g),p!==64){const m=l<<6&192|p;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Zo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qo=function(e){const t=Rn(e);return Dn.encodeByteArray(t,!0)},Xe=function(e){return Qo(e).replace(/\./g,"")},es=function(e){try{return Dn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=()=>ts().__FIREBASE_DEFAULTS__,rs=()=>{if(typeof process>"u"||typeof Jt>"u")return;const e=Jt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},os=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&es(e[1]);return t&&JSON.parse(t)},xn=()=>{try{return ns()||rs()||os()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ss=e=>{var t,n;return(n=(t=xn())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},is=e=>{const t=ss(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},On=()=>{var e;return(e=xn())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Xe(JSON.stringify(n)),Xe(JSON.stringify(a)),""].join(".")}function ls(){try{return typeof indexedDB=="object"}catch{return!1}}function us(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="FirebaseError";class Ae extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ds,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?ps(s,r):"Error",i=`${this.serviceName}: ${a} (${o}).`;return new Ae(o,i,r)}}function ps(e,t){return e.replace(hs,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const hs=/\{\$([^}]+)}/g;function yt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],a=t[o];if(Yt(s)&&Yt(a)){if(!yt(s,a))return!1}else if(s!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Yt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){return e&&e._delegate?e._delegate:e}class Be{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new as;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ms(t))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=Ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ie){return this.instances.has(t)}getOptions(t=Ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);r===i&&a.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gs(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ie){return this.component?this.component.multipleInstances?t:Ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gs(e){return e===Ie?void 0:e}function ms(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fs(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(L||(L={}));const vs={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},ys=L.INFO,ws={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},_s=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=ws[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cs{constructor(t){this.name=t,this._logLevel=ys,this._logHandler=_s,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const Es=(e,t)=>t.some(n=>e instanceof n);let Zt,Qt;function Ss(){return Zt||(Zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $s(){return Qt||(Qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const An=new WeakMap,wt=new WeakMap,Pn=new WeakMap,at=new WeakMap,Rt=new WeakMap;function Is(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Ce(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&An.set(n,e)}).catch(()=>{}),Rt.set(t,e),t}function Rs(e){if(wt.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});wt.set(e,t)}let _t={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Pn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ce(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ds(e){_t=e(_t)}function xs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ct(this),t,...n);return Pn.set(r,t.sort?t.sort():[t]),Ce(r)}:$s().includes(e)?function(...t){return e.apply(ct(this),t),Ce(An.get(this))}:function(...t){return Ce(e.apply(ct(this),t))}}function Os(e){return typeof e=="function"?xs(e):(e instanceof IDBTransaction&&Rs(e),Es(e,Ss())?new Proxy(e,_t):e)}function Ce(e){if(e instanceof IDBRequest)return Is(e);if(at.has(e))return at.get(e);const t=Os(e);return t!==e&&(at.set(e,t),Rt.set(t,e)),t}const ct=e=>Rt.get(e);function Ts(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),i=Ce(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ce(a.result),c.oldVersion,c.newVersion,Ce(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),i.then(c=>{s&&c.addEventListener("close",()=>s()),o&&c.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const As=["get","getKey","getAll","getAllKeys","count"],Ps=["put","add","delete","clear"],lt=new Map;function en(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(lt.get(t))return lt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Ps.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||As.includes(n)))return;const s=async function(a,...i){const c=this.transaction(a,o?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),o&&c.done]))[0]};return lt.set(t,s),s}Ds(e=>({...e,get:(t,n,r)=>en(t,n)||e.get(t,n,r),has:(t,n)=>!!en(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ks(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ks(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ct="@firebase/app",tn="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Cs("@firebase/app"),Ls="@firebase/app-compat",Bs="@firebase/analytics-compat",Us="@firebase/analytics",Fs="@firebase/app-check-compat",Ms="@firebase/app-check",js="@firebase/auth",Hs="@firebase/auth-compat",zs="@firebase/database",Ws="@firebase/database-compat",Vs="@firebase/functions",Xs="@firebase/functions-compat",qs="@firebase/installations",Gs="@firebase/installations-compat",Ks="@firebase/messaging",Js="@firebase/messaging-compat",Ys="@firebase/performance",Zs="@firebase/performance-compat",Qs="@firebase/remote-config",ei="@firebase/remote-config-compat",ti="@firebase/storage",ni="@firebase/storage-compat",ri="@firebase/firestore",oi="@firebase/vertexai-preview",si="@firebase/firestore-compat",ii="firebase",ai="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]",ci={[Ct]:"fire-core",[Ls]:"fire-core-compat",[Us]:"fire-analytics",[Bs]:"fire-analytics-compat",[Ms]:"fire-app-check",[Fs]:"fire-app-check-compat",[js]:"fire-auth",[Hs]:"fire-auth-compat",[zs]:"fire-rtdb",[Ws]:"fire-rtdb-compat",[Vs]:"fire-fn",[Xs]:"fire-fn-compat",[qs]:"fire-iid",[Gs]:"fire-iid-compat",[Ks]:"fire-fcm",[Js]:"fire-fcm-compat",[Ys]:"fire-perf",[Zs]:"fire-perf-compat",[Qs]:"fire-rc",[ei]:"fire-rc-compat",[ti]:"fire-gcs",[ni]:"fire-gcs-compat",[ri]:"fire-fst",[si]:"fire-fst-compat",[oi]:"fire-vertex","fire-js":"fire-js",[ii]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new Map,li=new Map,St=new Map;function nn(e,t){try{e.container.addComponent(t)}catch(n){me.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ge(e){const t=e.name;if(St.has(t))return me.debug(`There were multiple attempts to register component ${t}.`),!1;St.set(t,e);for(const n of qe.values())nn(n,e);for(const n of li.values())nn(n,e);return!0}function ui(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new Tn("app","Firebase",di);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=ai;function Nn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Et,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw Ee.create("bad-app-name",{appName:String(o)});if(n||(n=On()),!n)throw Ee.create("no-options");const s=qe.get(o);if(s){if(yt(n,s.options)&&yt(r,s.config))return s;throw Ee.create("duplicate-app",{appName:o})}const a=new bs(o);for(const c of St.values())a.addComponent(c);const i=new pi(n,r,a);return qe.set(o,i),i}function fi(e=Et){const t=qe.get(e);if(!t&&e===Et&&On())return Nn();if(!t)throw Ee.create("no-app",{appName:e});return t}function Te(e,t,n){var r;let o=(r=ci[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const i=[`Unable to register library "${o}" with version "${t}":`];s&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&i.push("and"),a&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),me.warn(i.join(" "));return}Ge(new Be(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="firebase-heartbeat-database",mi=1,Ue="firebase-heartbeat-store";let ut=null;function kn(){return ut||(ut=Ts(gi,mi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ue)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ee.create("idb-open",{originalErrorMessage:e.message})})),ut}async function bi(e){try{const n=(await kn()).transaction(Ue),r=await n.objectStore(Ue).get(Ln(e));return await n.done,r}catch(t){if(t instanceof Ae)me.warn(t.message);else{const n=Ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});me.warn(n.message)}}}async function rn(e,t){try{const r=(await kn()).transaction(Ue,"readwrite");await r.objectStore(Ue).put(t,Ln(e)),await r.done}catch(n){if(n instanceof Ae)me.warn(n.message);else{const r=Ee.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});me.warn(r.message)}}}function Ln(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=1024,yi=30*24*60*60*1e3;class wi{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ci(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=on();return console.log("heartbeats",(t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(i=>i.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=yi}),this._storage.overwrite(this._heartbeatsCache))}catch(o){me.warn(o)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=on(),{heartbeatsToSend:r,unsentEntries:o}=_i(this._heartbeatsCache.heartbeats),s=Xe(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return me.warn(n),""}}}function on(){return new Date().toISOString().substring(0,10)}function _i(e,t=vi){const n=[];let r=e.slice();for(const o of e){const s=n.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),sn(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),sn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ci{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ls()?us().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bi(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return rn(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return rn(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function sn(e){return Xe(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){Ge(new Be("platform-logger",t=>new Ns(t),"PRIVATE")),Ge(new Be("heartbeat",t=>new wi(t),"PRIVATE")),Te(Ct,tn,e),Te(Ct,tn,"esm2017"),Te("fire-js","")}Ei("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="firebasestorage.googleapis.com",Un="storageBucket",Si=2*60*1e3,$i=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends Ae{constructor(t,n,r=0){super(dt(t),`Firebase Storage: ${n} (${dt(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return dt(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var H;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(H||(H={}));function dt(e){return"storage/"+e}function Dt(){const e="An unknown error occurred, please check the error payload for server response.";return new z(H.UNKNOWN,e)}function Ii(e){return new z(H.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ri(e){return new z(H.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Di(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new z(H.UNAUTHENTICATED,e)}function xi(){return new z(H.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Oi(e){return new z(H.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Ti(){return new z(H.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ai(){return new z(H.CANCELED,"User canceled the upload/download.")}function Pi(e){return new z(H.INVALID_URL,"Invalid URL '"+e+"'.")}function Ni(e){return new z(H.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ki(){return new z(H.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Un+"' property when initializing the app?")}function Li(){return new z(H.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Bi(){return new z(H.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ui(e){return new z(H.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $t(e){return new z(H.INVALID_ARGUMENT,e)}function Fn(){return new z(H.APP_DELETED,"The Firebase app was deleted.")}function Fi(e){return new z(H.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Le(e,t){return new z(H.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Pe(e){throw new z(H.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ae.makeFromUrl(t,n)}catch{return new ae(t,"")}if(r.path==="")return r;throw Ni(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const a="(/(.*))?$",i=new RegExp("^gs://"+o+a,"i"),c={bucket:1,path:3};function l(y){y.path_=decodeURIComponent(y.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${p}/${d}/b/${o}/o${h}`,"i"),m={bucket:1,path:3},S=n===Bn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${S}/${o}/${b}`,"i"),R=[{regex:i,indices:c,postModify:s},{regex:g,indices:m,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let y=0;y<R.length;y++){const f=R[y],$=f.regex.exec(t);if($){const D=$[f.indices.bucket];let O=$[f.indices.path];O||(O=""),r=new ae(D,O),f.postModify(r);break}}if(r==null)throw Pi(t);return r}}class Mi{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t,n){let r=1,o=null,s=null,a=!1,i=0;function c(){return i===2}let l=!1;function d(...b){l||(l=!0,t.apply(null,b))}function p(b){o=setTimeout(()=>{o=null,e(g,c())},b)}function h(){s&&clearTimeout(s)}function g(b,..._){if(l){h();return}if(b){h(),d.call(null,b,..._);return}if(c()||a){h(),d.call(null,b,..._);return}r<64&&(r*=2);let R;i===1?(i=2,R=0):R=(r+Math.random())*1e3,p(R)}let m=!1;function S(b){m||(m=!0,h(),!l&&(o!==null?(b||(i=2),clearTimeout(o),p(0)):b||(i=1)))}return p(0),s=setTimeout(()=>{a=!0,S(!0)},n),S}function Hi(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){return e!==void 0}function Wi(e){return typeof e=="object"&&!Array.isArray(e)}function xt(e){return typeof e=="string"||e instanceof String}function an(e){return Ot()&&e instanceof Blob}function Ot(){return typeof Blob<"u"}function cn(e,t,n,r){if(r<t)throw $t(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw $t(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Mn(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}var Re;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Re||(Re={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||o||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n,r,o,s,a,i,c,l,d,p,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=i,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=p,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new He(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=i=>{const c=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const i=s.getErrorCode()===Re.NO_ERROR,c=s.getStatus();if(!i||Vi(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Re.ABORT;r(!1,new He(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new He(l,s))})},n=(r,o)=>{const s=this.resolve_,a=this.reject_,i=o.connection;if(o.wasSuccessCode)try{const c=this.callback_(i,i.getResponse());zi(c)?s(c):s()}catch(c){a(c)}else if(i!==null){const c=Dt();c.serverResponse=i.getErrorText(),this.errorCallback_?a(this.errorCallback_(i,c)):a(c)}else if(o.canceled){const c=this.appDelete_?Fn():Ai();a(c)}else{const c=Ti();a(c)}};this.canceled_?n(!1,new He(!1,null,!0)):this.backoffId_=ji(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Hi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class He{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function qi(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Gi(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ki(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ji(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Yi(e,t,n,r,o,s,a=!0){const i=Mn(e.urlParams),c=e.url+i,l=Object.assign({},e.headers);return Ki(l,t),qi(l,n),Gi(l,s),Ji(l,r),new Xi(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qi(...e){const t=Zi();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Ot())return new Blob(e);throw new z(H.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ea(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){if(typeof atob>"u")throw Ui("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pt{constructor(t,n){this.data=t,this.contentType=n||null}}function na(e,t){switch(e){case pe.RAW:return new pt(jn(t));case pe.BASE64:case pe.BASE64URL:return new pt(Hn(e,t));case pe.DATA_URL:return new pt(oa(t),sa(t))}throw Dt()}function jn(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,a=e.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function ra(e){let t;try{t=decodeURIComponent(e)}catch{throw Le(pe.DATA_URL,"Malformed data URL.")}return jn(t)}function Hn(e,t){switch(e){case pe.BASE64:{const o=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(o||s)throw Le(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case pe.BASE64URL:{const o=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(o||s)throw Le(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ta(t)}catch(o){throw o.message.includes("polyfill")?o:Le(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class zn{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Le(pe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ia(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function oa(e){const t=new zn(e);return t.base64?Hn(pe.BASE64,t.rest):ra(t.rest)}function sa(e){return new zn(e).contentType}function ia(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,n){let r=0,o="";an(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(an(this.data_)){const r=this.data_,o=ea(r,t,n);return o===null?null:new ye(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new ye(r,!0)}}static getBlob(...t){if(Ot()){const n=t.map(r=>r instanceof ye?r.data_:r);return new ye(Qi.apply(null,n))}else{const n=t.map(a=>xt(a)?na(pe.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const o=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let i=0;i<a.length;i++)o[s++]=a[i]}),new ye(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e){let t;try{t=JSON.parse(e)}catch{return null}return Wi(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ca(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Vn(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e,t){return t}class oe{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||la}}let ze=null;function ua(e){return!xt(e)||e.length<2?e:Vn(e)}function Xn(){if(ze)return ze;const e=[];e.push(new oe("bucket")),e.push(new oe("generation")),e.push(new oe("metageneration")),e.push(new oe("name","fullPath",!0));function t(s,a){return ua(a)}const n=new oe("name");n.xform=t,e.push(n);function r(s,a){return a!==void 0?Number(a):a}const o=new oe("size");return o.xform=r,e.push(o),e.push(new oe("timeCreated")),e.push(new oe("updated")),e.push(new oe("md5Hash",null,!0)),e.push(new oe("cacheControl",null,!0)),e.push(new oe("contentDisposition",null,!0)),e.push(new oe("contentEncoding",null,!0)),e.push(new oe("contentLanguage",null,!0)),e.push(new oe("contentType",null,!0)),e.push(new oe("metadata","customMetadata",!0)),ze=e,ze}function da(e,t){function n(){const r=e.bucket,o=e.fullPath,s=new ae(r,o);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function pa(e,t,n){const r={};r.type="file";const o=n.length;for(let s=0;s<o;s++){const a=n[s];r[a.local]=a.xform(r,t[a.server])}return da(r,e),r}function qn(e,t,n){const r=Wn(t);return r===null?null:pa(e,r,n)}function ha(e,t,n,r){const o=Wn(t);if(o===null||!xt(o.downloadTokens))return null;const s=o.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(l=>{const d=e.bucket,p=e.fullPath,h="/b/"+a(d)+"/o/"+a(p),g=Tt(h,n,r),m=Mn({alt:"media",token:l});return g+m})[0]}function fa(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const s=t[o];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class Gn{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){if(!e)throw Dt()}function ga(e,t){function n(r,o){const s=qn(e,o,t);return Kn(s!==null),s}return n}function ma(e,t){function n(r,o){const s=qn(e,o,t);return Kn(s!==null),ha(s,o,e.host,e._protocol)}return n}function Jn(e){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=xi():o=Di():n.getStatus()===402?o=Ri(e.bucket):n.getStatus()===403?o=Oi(e.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function ba(e){const t=Jn(e);function n(r,o){let s=t(r,o);return r.getStatus()===404&&(s=Ii(e.path)),s.serverResponse=o.serverResponse,s}return n}function va(e,t,n){const r=t.fullServerUrl(),o=Tt(r,e.host,e._protocol),s="GET",a=e.maxOperationRetryTime,i=new Gn(o,s,ma(e,n),a);return i.errorHandler=ba(t),i}function ya(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function wa(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=ya(null,t)),r}function _a(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function i(){let R="";for(let y=0;y<2;y++)R=R+Math.random().toString().slice(2);return R}const c=i();a["Content-Type"]="multipart/related; boundary="+c;const l=wa(t,r,o),d=fa(l,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+c+"--",g=ye.getBlob(p,r,h);if(g===null)throw Li();const m={name:l.fullPath},S=Tt(s,e.host,e._protocol),b="POST",_=e.maxUploadRetryTime,C=new Gn(S,b,ga(e,n),_);return C.urlParams=m,C.headers=a,C.body=g.uploadData(),C.errorHandler=Jn(t),C}class Ca{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Re.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Re.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Re.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o){if(this.sent_)throw Pe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const s in o)o.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,o[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Pe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Pe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Pe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Pe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ea extends Ca{initXhr(){this.xhr_.responseType="text"}}function Yn(){return new Ea}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,n){this._service=t,n instanceof ae?this._location=n:this._location=ae.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new De(t,n)}get root(){const t=new ae(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vn(this._location.path)}get storage(){return this._service}get parent(){const t=aa(this._location.path);if(t===null)return null;const n=new ae(this._location.bucket,t);return new De(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Fi(t)}}function Sa(e,t,n){e._throwIfRoot("uploadBytes");const r=_a(e.storage,e._location,Xn(),new ye(t,!0),n);return e.storage.makeRequestWithTokens(r,Yn).then(o=>({metadata:o,ref:e}))}function $a(e){e._throwIfRoot("getDownloadURL");const t=va(e.storage,e._location,Xn());return e.storage.makeRequestWithTokens(t,Yn).then(n=>{if(n===null)throw Bi();return n})}function Ia(e,t){const n=ca(e._location.path,t),r=new ae(e._location.bucket,n);return new De(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){return/^[A-Za-z]+:\/\//.test(e)}function Da(e,t){return new De(e,t)}function Zn(e,t){if(e instanceof At){const n=e;if(n._bucket==null)throw ki();const r=new De(n,n._bucket);return t!=null?Zn(r,t):r}else return t!==void 0?Ia(e,t):e}function xa(e,t){if(t&&Ra(t)){if(e instanceof At)return Da(e,t);throw $t("To use ref(service, url), the first argument must be a Storage instance.")}else return Zn(e,t)}function ln(e,t){const n=t==null?void 0:t[Un];return n==null?null:ae.makeFromBucketSpec(n,e)}function Oa(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:cs(o,e.app.options.projectId))}class At{constructor(t,n,r,o,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=s,this._bucket=null,this._host=Bn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Si,this._maxUploadRetryTime=$i,this._requests=new Set,o!=null?this._bucket=ae.makeFromBucketSpec(o,this._host):this._bucket=ln(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ae.makeFromBucketSpec(this._url,t):this._bucket=ln(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){cn("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){cn("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new De(this,t)}_makeRequest(t,n,r,o,s=!0){if(this._deleted)return new Mi(Fn());{const a=Yi(t,this._appId,r,o,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const un="@firebase/storage",dn="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="storage";function Ta(e,t,n){return e=Ye(e),Sa(e,t,n)}function Aa(e){return e=Ye(e),$a(e)}function Pa(e,t){return e=Ye(e),xa(e,t)}function Na(e=fi(),t){e=Ye(e);const r=ui(e,Qn).getImmediate({identifier:t}),o=is("storage");return o&&ka(r,...o),r}function ka(e,t,n,r={}){Oa(e,t,n,r)}function La(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new At(n,r,o,t,hi)}function Ba(){Ge(new Be(Qn,La,"PUBLIC").setMultipleInstances(!0)),Te(un,dn,""),Te(un,dn,"esm2017")}Ba();var Ua="firebase",Fa="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te(Ua,Fa,"app");const Ma={apiKey:"AIzaSyAIWH5SCCpllQc_ROVlw3K-9QO2CisddH4",authDomain:"shop-a7ad2.firebaseapp.com",projectId:"shop-a7ad2",storageBucket:"shop-a7ad2.appspot.com",messagingSenderId:"606317283787",appId:"1:606317283787:web:9ba549b012b848954a4e4e"},ja=Nn(Ma),{Paragraph:Ha,Title:za}=Ar,Wa=e=>new Promise((t,n)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=o=>n(o)}),Ga=()=>{const[e,t]=u.useState(!1),[n,r]=u.useState(""),[o,s]=u.useState([]),[a,i]=u.useState([]),[c,l]=u.useState([]),d=async E=>{!E.url&&!E.preview&&(E.preview=await Wa(E.originFileObj)),r(E.url||E.preview),t(!0)},p=({fileList:E})=>{s(E)},h=async()=>{if(!o.length){tt.error("Please upload at least one image");return}const E=Na(ja),w=[];for(const T of o){const J=Pa(E,`images/${T.name}`);try{await Ta(J,T.originFileObj);const B=await Aa(J);w.push(B),console.log("Uploaded Image Download URL:",B);const Y=await g(B);console.log("Image Tags from Imagga:",Y),l(Y)}catch(B){console.error("Upload failed:",B);return}}i(w);try{const T=await Ht.post("http://localhost:8000/api/upload/images",{img1:w});console.log("API response:",T.data),tt.success("Image Download URLs successfully posted to the API")}catch(T){console.error("Failed to post download URLs to the API:",T)}},g=async E=>{const w="acc_ceb24d1956db906",T="b4ccc026ba549ae7329749ad27023a2f";try{return(await Ht.get("https://api.imagga.com/v2/tags",{params:{image_url:E},auth:{username:w,password:T}})).data.result.tags.map(Y=>Y.tag.en)}catch(J){return console.error("Failed to get image tags from Imagga:",J),tt.error("Failed to retrieve image tags from Imagga"),[]}},m={display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"#f5f5f5",border:"1px dashed #d9d9d9",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},S={...m,backgroundColor:"#e6f7ff",borderColor:"#b0bec5"},b={padding:"20px",maxWidth:"800px",margin:"auto",backgroundColor:"#ffffff",borderRadius:"12px",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.1)"},_={marginBottom:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},C={marginBottom:"20px",backgroundColor:"#1890ff",color:"#ffffff",borderRadius:"4px",border:"none",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease"},R={marginTop:"20px"},y={marginBottom:"10px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},f={display:"block",marginTop:"10px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},$={marginTop:"20px"},D={fontSize:"16px",color:"#595959",lineHeight:"1.5",textAlign:"center"},O=re.jsxs("div",{style:m,onMouseEnter:E=>E.currentTarget.style.backgroundColor=S.backgroundColor,onMouseLeave:E=>E.currentTarget.style.backgroundColor=m.backgroundColor,children:[re.jsx(Pr,{style:{fontSize:"24px",color:"#000000"}}),re.jsx("div",{style:{marginTop:8,fontSize:"16px",color:"#000000"},children:"Upload"})]});return re.jsxs("div",{style:b,children:[re.jsx(It,{listType:"picture-card",fileList:o,onPreview:d,onChange:p,multiple:!0,style:{marginBottom:"20px"},children:o.length>=8?null:O}),n&&re.jsx(jt,{preview:{visible:e,onVisibleChange:E=>t(E),afterOpenChange:E=>!E&&r("")},src:n,style:_}),re.jsx(mt,{type:"primary",onClick:h,style:C,children:"Upload Images"}),a.length>0&&re.jsxs("div",{style:R,children:[re.jsx(za,{level:3,style:{color:"#1890ff"},children:"Uploaded Image Download URLs:"}),re.jsx("div",{children:a.map((E,w)=>re.jsxs(Tr,{style:y,children:[re.jsx("p",{style:{fontSize:"14px",color:"#595959"},children:E}),re.jsx(jt,{width:200,src:E,style:f})]},w))})]}),c.length>0&&re.jsx("div",{style:$,children:re.jsx(Ha,{style:D,children:c.join(", ")})})]})};export{Ga as default};
