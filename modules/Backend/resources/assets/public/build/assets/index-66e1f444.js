import{r as n,a as p,j as e,b as h}from"./app-2d01f232.js";import{a as g,m as l}from"./functions-d556270f.js";import T from"./post-type-form-1fa2a028.js";import{A as v}from"./admin-1fc15e48.js";import y from"./top-options-19605be4.js";import"./input-0dbd4292.js";import"./textarea-e0e5b01d.js";import"./checkbox-f08e0d4e.js";import"./button-b1936e8c.js";import"./select-9b1f74ae.js";import"./react-select.esm-ac3b7f90.js";function A({theme:i,postTypes:x}){const[d,o]=n.useState(!1),[a,t]=n.useState(),u=r=>{r.preventDefault();let c=new FormData(r.target),f=g(`dev-tools/themes/${i.name}/post-types`);return o(!0),h.post(f,c).then(m=>{let s=l(m);o(!1),t(s),(s==null?void 0:s.status)===!0&&r.target.reset(),setTimeout(()=>{t(void 0)},2e3)}).catch(m=>{t(l(m)),o(!1),setTimeout(()=>{t(void 0)},2e3)}),!1};return p(v,{children:[e(y,{moduleSelected:`themes/${i.name}`,moduleType:"themes",optionSelected:"post-types"}),e("div",{className:"row",children:p("div",{className:"col-md-12",children:[e("h5",{children:"Make Custom Post Type"}),a&&e("div",{className:`alert alert-${a.status?"success":"danger"} jw-message`,children:a.message}),e("form",{method:"POST",onSubmit:u,children:e(T,{buttonLoading:d})})]})})]})}export{A as default};