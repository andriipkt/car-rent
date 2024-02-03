"use strict";(self.webpackChunkcar_rent=self.webpackChunkcar_rent||[]).push([[395],{3494:function(n,r,t){t.d(r,{Z:function(){return O}});var e,o,i,a,l,s,c,d,p,x,h=t(4420),f=t(168),v=t(7924),g=v.ZP.li(e||(e=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 274px;\n  height: 426px;\n"]))),u=v.ZP.div(o||(o=(0,f.Z)(["\n  position: relative;\n\n  width: 100%;\n  height: 268px;\n  overflow: hidden;\n  border-radius: 12px;\n\n  margin-bottom: 14px;\n\n  background: linear-gradient(\n    180deg,\n    rgba(18, 20, 23, 0.5) 2.5%,\n    rgba(18, 20, 23, 0) 41.07%\n  );\n"]))),m=v.ZP.img(i||(i=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n\n  transform: scale(1);\n  transition: transform var(--transition);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),b=v.ZP.span(a||(a=(0,f.Z)(["\n  position: absolute;\n  z-index: 10;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n\n  & svg path {\n    /* fill: transparent; */\n    /* stroke: white; */\n\n    transition: fill var(--transition), stroke var(--transition);\n  }\n\n  &:hover svg path {\n    fill: var(--main-color);\n    stroke: var(--main-color);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n"]))),w=v.ZP.div(l||(l=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  /* height: 24px; */\n\n  margin-bottom: 8px;\n\n  > h2 {\n    font-size: 16px;\n    font-weight: 500;\n\n    color: var(--black);\n    /* \n    text-overflow: ellipsis;\n    overflow: hidden; */\n\n    > span {\n      color: var(--main-color);\n    }\n  }\n\n  > p {\n    font-size: 16px;\n    font-weight: 500;\n\n    color: var(--black);\n  }\n"]))),j=v.ZP.div(s||(s=(0,f.Z)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),k=v.ZP.p(c||(c=(0,f.Z)(["\n  /* display: flex; */\n  /* flex-wrap: wrap; */\n\n  /* height: 36px; */\n  /* overflow-y: hidden; */\n\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  /* text-overflow: ellipsis; */\n\n  /* margin-bottom: 28px; */\n\n  color: var(--secondary-text-color);\n  font-size: 12px;\n\n  /* color: var(--secondary-text-color);\n  font-size: 12px; */\n\n  &:not(:last-child)::after {\n    content: '';\n    display: block;\n\n    margin: 0 6px;\n\n    width: 1px;\n    height: 90%;\n    background-color: rgba(18, 20, 23, 0.1);\n  }\n"]))),Z=v.ZP.button(d||(d=(0,f.Z)(["\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  background-color: var(--main-color);\n  border-radius: 12px;\n\n  transition: background-color var(--transition);\n\n  &:hover {\n    background-color: var(--accent-color);\n  }\n"]))),y=t(4352),P=t(156),z=function(n){return n.favorites},C=t(184),I=function(n){var r=n.advertItem,t=r.make,e=r.model,o=r.year,i=r.rentalPrice,a=r.address,l=r.rentalCompany,s=r.type,c=r.id,d=r.functionalities,p=r.img,x=r.description,f=(0,h.I0)(),v=(0,h.v9)(z).favorites,I=a.split(" ").map((function(n){return n.replace(",","")})),F=[I.slice(-2)[0],I.slice(-2)[1],l,s,e,c,d[0]],L=v.some((function(n){return n.id===c}));return(0,C.jsxs)(g,{children:[(0,C.jsxs)(u,{children:[(0,C.jsx)(m,{src:p,loading:"lazy",alt:x}),(0,C.jsx)(b,{onClick:function(){return n=r,void f(L?(0,P.r7)(n.id):(0,P.a3)(n));var n},children:(0,C.jsx)(y.f,{color:L?"#3470ff":"transparent"})})]}),(0,C.jsxs)(w,{children:[(0,C.jsxs)("h2",{children:[t," ",(0,C.jsx)("span",{children:e}),", ",o]}),(0,C.jsx)("p",{children:i})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(k,{children:F.join(" | ")}),(0,C.jsx)(Z,{children:"Learn more"})]})]})},F=t(1945),L=v.ZP.ul(p||(p=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n"]))),_=v.ZP.button(x||(x=(0,f.Z)(["\n  margin: 0 auto;\n  margin-top: 75px;\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: underline;\n  color: var(--main-color);\n  padding: 10px 26px;\n  background: transparent;\n\n  transition: color var(--transition);\n\n  &:hover {\n    color: var(--accent-color);\n  }\n"]))),A=t(3881),G=t(4137),O=function(n){var r=n.page,t=(0,h.I0)(),e=(0,h.v9)(F.OG),o=(0,h.v9)(F.xU),i=(0,h.v9)(z).favorites;console.log("page",r);var a="catalog"===r?e:i;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{children:"AdvertList"}),(0,C.jsx)(L,{children:a.map((function(n){return(0,C.jsx)(I,{advertItem:n},n.id)}))}),a.length%12===0&&(o?(0,C.jsx)(G.gy,{color:"#3470ff",width:50,height:50,wrapperStyle:{marginTop:"75px",justifyContent:"center"}}):0!==a.length&&(0,C.jsx)(_,{onClick:function(){return t((0,A.Y)())},children:"Load more"}))]})}},7395:function(n,r,t){t.r(r);var e=t(3494),o=t(184);r.default=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"Favorites"}),(0,o.jsx)(e.Z,{page:"favorites"})]})}}}]);
//# sourceMappingURL=395.0cf54805.chunk.js.map