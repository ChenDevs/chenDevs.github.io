import{_ as L}from"./plugin-vue_export-helper-c27b6911.js";import{f as C,g as U,r as s,o,c as h,a as u,w as i,h as b,F as w,i as x,n as B}from"./app-37ca5a82.js";const A={__name:"table中渲染select等组件卡顿问题.html",setup(J){const p=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],O=[{id:1,label:"Option A",desc:"Option A"},{id:2,label:"Option B",desc:"Option B"},{id:3,label:"Option C",desc:"Option C"},{id:4,label:"Option A",desc:"Option A"}],$=[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}],v=C([]),r=U({}),S=t=>($.find(a=>a.value===t)||{}).label,y=t=>(O.find(a=>a.id===t)||{}).label,k=t=>(p.find(a=>a.value===t)||{}).label,f=(t,n,a)=>{r[n][`${t}Show`]=!1,v.value[n][t]=a},V=(t,n)=>{const a=n.property,d=t.index;r[d][`${a}Show`]=!0,B(()=>{const _=g.value[`${a}${d}`];_&&_.toggleMenu()})},g=C({}),m=(t,n,a)=>{g.value[`${t}${n}`]=a};for(let t=0;t<300;t++)r[t]={jsShow:!1,letterShow:!1,otherShow:!1},v.value.push({index:t,js:"",letter:"",other:""});return(t,n)=>{const a=s("el-option"),d=s("el-select"),_=s("el-input"),c=s("el-table-column"),j=s("el-table");return o(),h("div",null,[u(j,{class:"table",data:v.value,height:"200",onCellClick:V},{default:i(()=>[u(c,{label:"js",prop:"js"},{default:i(e=>[r[e&&e.$index]&&r[e&&e.$index].jsShow?(o(),b(d,{key:0,ref:l=>m("js",e&&e.$index,l),modelValue:e.row.js,"onUpdate:modelValue":l=>e.row.js=l,onChange:l=>f("js",e&&e.$index,l),placeholder:""},{default:i(()=>[(o(),h(w,null,x($,l=>u(a,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):(o(),b(_,{key:1,value:S(e&&e.row&&e.row.js),readonly:"","suffix-icon":"arrow"},null,8,["value"]))]),_:1}),u(c,{label:"字母",prop:"letter"},{default:i(e=>[r[e&&e.$index]&&r[e&&e.$index].letterShow?(o(),b(d,{key:0,ref:l=>m("letter",e&&e.$index,l),modelValue:e.row.letter,"onUpdate:modelValue":l=>e.row.letter=l,onChange:l=>f("letter",e&&e.$index,l),placeholder:""},{default:i(()=>[(o(),h(w,null,x(O,l=>u(a,{key:l.id,label:l.label,value:l.id},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):(o(),b(_,{key:1,value:y(e&&e.row&&e.row.letter),readonly:"","suffix-icon":"arrow"},null,8,["value"]))]),_:1}),u(c,{label:"其他",prop:"other"},{default:i(e=>[r[e&&e.$index]&&r[e&&e.$index].otherShow?(o(),b(d,{key:0,ref:l=>m("other",e&&e.$index,l),modelValue:e.row.other,"onUpdate:modelValue":l=>e.row.other=l,onChange:l=>f("other",e&&e.$index,l),placeholder:""},{default:i(()=>[(o(),h(w,null,x(p,l=>u(a,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):(o(),b(_,{key:1,value:k(e&&e.row&&e.row.other),readonly:"","suffix-icon":"arrow"},null,8,["value"]))]),_:1})]),_:1},8,["data"])])}}},F=L(A,[["__file","table中渲染select等组件卡顿问题.html.vue"]]);export{F as default};
