import{d as t,r as l,c as s,o as e,a as i,b as o,e as n,t as a,f as r,g as p,h as d,w as u,F as _,i as c,j as f}from"./vendor.82b3356d.js";var y=t({name:"ZEllipsis",props:{content:{type:String,default:""},showTips:{type:Boolean,default:!0},ellipsisPosition:{type:String,default:"middle"},height:{type:Number,default:1.5},roll:{type:Boolean,default:!1},speed:{type:String,default:"8s"},triger:{type:String,default:"hover"},background:{type:String,default:"#fff"},color:{type:String,default:"#000"}},setup(t,{slots:i}){const o=l(null),n=s((()=>!t.roll&&t.showTips)),a=s((()=>{if(t.content)return t.content;const l=i.default()[0].children;return"string"!=typeof l?"":l})),r=s((()=>t.roll&&"always"===t.triger));return e((()=>{var l,s,e,i;null==(l=o.value)||l.style.setProperty("--height",t.height+"em"),null==(s=o.value)||s.style.setProperty("--speed",t.speed),null==(e=o.value)||e.style.setProperty("background-color",t.background),null==(i=o.value)||i.style.setProperty("color",t.color)})),{slotContent:a,ZEllipsis:o,showTipsAndRoll:n,alwaysAnimation:r}}});const g={class:"z-ellipsis",ref:"ZEllipsis"};y.render=function(t,l,s,e,d,u){return p(),i("div",g,[o("span",{class:["z-ellipsis__content",{"z-ellipsis__content__no-tips":!t.showTips}]},[n(t.$slots,"default")],2),t.showTipsAndRoll?(p(),i("span",{key:0,class:["z-ellipsis__tips",{"z-ellipsis__middle-tips":"middle"===t.ellipsisPosition}],title:t.slotContent},a(t.slotContent),11,["title"])):r("v-if",!0),t.roll?(p(),i("span",{key:1,class:["z-ellipsis__tips","z-ellipsis__tips__roll",{"z-ellipsis__middle-tips":"middle"===t.ellipsisPosition},t.alwaysAnimation?"z-ellipsis__tips__roll__always":"z-ellipsis__tips__hover "],"data-title":t.slotContent},a(t.slotContent),11,["data-title"])):r("v-if",!0)],512)};var h=t({name:"App",components:{ZEllipsis:y}});const m=c(" 超出一行以后才会有title提示或者滚动超出一行以后才会有title提示或者滚动超出一行以后才会有title提示或者滚动超出一行以后才会有title提示或者滚动 ");h.render=function(t,l,s,e,n,a){const r=d("z-ellipsis"),c=d("test");return p(),i(_,null,[o(r,{roll:!0,triger:"hover","ellipsis-position":"middle"},{default:u((()=>[m])),_:1}),o(c)],64)};f(h).mount("#app");
