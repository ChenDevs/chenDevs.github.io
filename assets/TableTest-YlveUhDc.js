import{_ as T}from"./plugin-vue_export-helper-x3n3nnut.js";import{k,ak as L,r as v,o,ae as u,w as i,a as s,c as w,at as c,a0 as x,P as U}from"./app-kRTMGt-7.js";const B={__name:"TableTest",setup(A){const p=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],O=[{id:1,label:"Option A",desc:"Option A"},{id:2,label:"Option B",desc:"Option B"},{id:3,label:"Option C",desc:"Option C"},{id:4,label:"Option A",desc:"Option A"}],$=[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}],_=k([]),r=L({}),S=a=>($.find(t=>t.value===a)||{}).label,g=a=>(O.find(t=>t.id===a)||{}).label,y=a=>(p.find(t=>t.value===a)||{}).label,h=(a,n,t)=>{r[n][`${a}Show`]=!1,_.value[n][a]=t},V=(a,n)=>{const t=n.property,d=a.index;r[d][`${t}Show`]=!0,U(()=>{const b=C.value[`${t}${d}`];b&&b.toggleMenu()})},C=k({}),f=(a,n,t)=>{C.value[`${a}${n}`]=t};for(let a=0;a<300;a++)r[a]={jsShow:!1,letterShow:!1,otherShow:!1},_.value.push({index:a,js:"",letter:"",other:""});return(a,n)=>{const t=v("el-option"),d=v("el-select"),b=v("el-input"),m=v("el-table-column"),j=v("el-table");return o(),u(j,{class:"table",data:_.value,height:"200",onCellClick:V},{default:i(()=>[s(m,{label:"js",prop:"js"},{default:i(e=>[r[e&&e.$index]&&r[e&&e.$index].jsShow?(o(),u(d,{key:0,ref:l=>f("js",e&&e.$index,l),modelValue:e.row.js,"onUpdate:modelValue":l=>e.row.js=l,onChange:l=>h("js",e&&e.$index,l),placeholder:""},{default:i(()=>[(o(),w(x,null,c($,l=>s(t,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):(o(),u(b,{key:1,value:S(e&&e.row&&e.row.js),readonly:"","suffix-icon":"arrow"},null,8,["value"]))]),_:1}),s(m,{label:"字母",prop:"letter"},{default:i(e=>[r[e&&e.$index]&&r[e&&e.$index].letterShow?(o(),u(d,{key:0,ref:l=>f("letter",e&&e.$index,l),modelValue:e.row.letter,"onUpdate:modelValue":l=>e.row.letter=l,onChange:l=>h("letter",e&&e.$index,l),placeholder:""},{default:i(()=>[(o(),w(x,null,c(O,l=>s(t,{key:l.id,label:l.label,value:l.id},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):(o(),u(b,{key:1,value:g(e&&e.row&&e.row.letter),readonly:"","suffix-icon":"arrow"},null,8,["value"]))]),_:1}),s(m,{label:"其他",prop:"other"},{default:i(e=>[r[e&&e.$index]&&r[e&&e.$index].otherShow?(o(),u(d,{key:0,ref:l=>f("other",e&&e.$index,l),modelValue:e.row.other,"onUpdate:modelValue":l=>e.row.other=l,onChange:l=>h("other",e&&e.$index,l),placeholder:""},{default:i(()=>[(o(),w(x,null,c(p,l=>s(t,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):(o(),u(b,{key:1,value:y(e&&e.row&&e.row.other),readonly:"","suffix-icon":"arrow"},null,8,["value"]))]),_:1})]),_:1},8,["data"])}}},H=T(B,[["__file","TableTest.vue"]]);export{H as default};
