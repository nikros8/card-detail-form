import{S as v,d as i,t as a,v as t,x as e,y as s,L as o,_ as p,c as h,U as C,V as f,W as x,C as b,D as $,z as m}from"./entry.yPYrVe_Q.js";const d=v({cardHolderName:"",cardNumber:"",cardExpirationMonth:"",cardExpirationYear:"",cardCVC:""}),E={class:"card-back"},N={class:"card-cvc-container"},S={class:"card-cvc"},k=i({__name:"CardPreviewCardBack",setup(c){return(_,r)=>(a(),t("div",E,[e("div",N,[e("div",S,s(o(d).cardCVC||"000"),1)])]))}}),B=p(k,[["__scopeId","data-v-29148b16"]]),g=c=>(b("data-v-be8463f5"),c=c(),$(),c),y={class:"card-front"},P=g(()=>e("div",{class:"circles-container"},[e("div",{class:"big-circle"}),e("div",{class:"small-circle"})],-1)),w={class:"card-details"},I={class:"card-number"},V={key:1,class:"card-number-placeholder"},D={class:"container"},F={class:"card-holder-name"},L={class:"card-expire-date"},z=i({__name:"CardPreviewCardFront",setup(c){function _(n){return n?n.replace(/(\d{4})/g,"$1 ").trim():""}const r=h(()=>_(d.cardNumber)||null);return(n,q)=>{var l;return a(),t("div",y,[P,e("div",w,[e("div",I,[o(r)?(a(!0),t(C,{key:0},f(o(r),u=>(a(),t("div",{class:x(u===" "?"space":"digit")},s(u),3))),256)):(a(),t("div",V,"0000 0000 0000 0000"))]),e("div",D,[e("div",F,s(((l=o(d).cardHolderName)==null?void 0:l.toUpperCase())||"JANE APPLESEED"),1),e("div",L,s(o(d).cardExpirationMonth||"00")+s("/")+s(o(d).cardExpirationYear||"00"),1)])])])}}}),A=p(z,[["__scopeId","data-v-be8463f5"]]),H={},M={class:"cards"};function U(c,_){const r=B,n=A;return a(),t("div",M,[m(r),m(n)])}const T=p(H,[["render",U]]),Y={type:"submit"},W=i({__name:"BaseButton",props:{value:{type:String,required:!0}},setup(c){return(_,r)=>(a(),t("button",Y,s(c.value),1))}});export{T as _,W as a,d as s};
