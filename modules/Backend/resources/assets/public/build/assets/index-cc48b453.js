import{r as n,a as l,j as e,b as g}from"./app-2d01f232.js";import{a as h,m as p}from"./functions-d556270f.js";import T from"./post-type-form-1fa2a028.js";import{A as v}from"./admin-1fc15e48.js";import x from"./top-options-19605be4.js";import"./input-0dbd4292.js";import"./textarea-e0e5b01d.js";import"./checkbox-f08e0d4e.js";import"./button-b1936e8c.js";import"./select-9b1f74ae.js";import"./react-select.esm-ac3b7f90.js";function A({plugin:i}){const[d,t]=n.useState(!1),[a,s]=n.useState(),u=r=>{r.preventDefault();let c=h("dev-tools/plugins/"+i.name+"/post-types"),f=new FormData(r.target);return t(!0),t(!1),g.post(c,f).then(m=>{let o=p(m);t(!1),s(o),(o==null?void 0:o.status)===!0&&r.target.reset(),setTimeout(()=>{s(void 0)},2e3)}).catch(m=>{s(p(m)),t(!1),setTimeout(()=>{s(void 0)},2e3)}),!1};return l(v,{children:[e(x,{moduleSelected:`plugins/${i.name}`,moduleType:"plugins",optionSelected:"post-types"}),e("div",{className:"row",children:l("div",{className:"col-md-12",children:[e("h5",{children:"Make Custom Post Type"}),a&&e("div",{className:`alert alert-${a.status?"success":"danger"} jw-message`,children:a.message}),e("form",{method:"POST",onSubmit:u,children:e(T,{buttonLoading:d})})]})})]})}export{A as default};