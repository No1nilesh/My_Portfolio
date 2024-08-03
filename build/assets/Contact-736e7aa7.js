import{r,j as e,F as u,l as f,m as g,e as h}from"./vendor-75170c33.js";import{u as b}from"./index-bcf987d2.js";function y({notification:o,setnotification:c}){const t=o,s=r.useRef(null),n=r.useRef(null),i=()=>{c({message:"",msgTpye:"",getmsg:!1})};return r.useEffect(()=>{switch(t.msgTpye){case"success":s.current.style.background="green",n.current.style.color="green";break;case"error":s.current.style.background="red",n.current.style.color="red";break;default:s.current.style.background="green",n.current.style.color="green";break}},[t.msgTpye]),e.jsxs("div",{className:"fixed top-2 right-2 md:w-fit rounded-md z-[9999] pl-[2px] bg-slate-300 ",children:[e.jsx("div",{ref:s,className:"w-full h-full rounded-md absolute z-[9996] scale-x-0 notification"}),e.jsx("span",{onClick:i,className:"absolute text-black font-semibold text-xl right-1 top-0 p-1 cursor-pointer z-[9998]",children:e.jsx(u,{icon:f.faX,size:"xs"})}),e.jsxs("div",{className:"bg-white w-full h-full rounded-md flex px-4 items-center py-4 relative z-[9997] mt-1",children:[" ",e.jsxs("span",{children:[" ",t.msgTpye==="success"?"✔️":"❌"]})," ",e.jsx("p",{ref:n,className:"text-md",children:t.message})," "]})]})}const N=()=>{const o=r.useRef(null),c=r.useRef(null),t=r.useRef(null),[s,n]=r.useState({name:"",email:"",questions:""}),[i,d]=r.useState({message:"",msgTpye:"success",getmsg:!1}),m=a=>{a.target.value.trim()!=""?a.target.classList.add("has-content"):a.target.classList.remove("has-content"),n({...s,[a.target.name]:a.target.value})},p=async a=>{a.preventDefault();try{console.log(s);const l=JSON.stringify(s);t.current.disabled="true",setInterval(()=>{t.current.disabled=!1},5e3),n({name:"",email:"",questions:""});const x=await(await fetch("https://nileshgautam.onrender.com/send-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:l})).json();console.log("Form submitted:",x),x&&(d({message:"Message sent Successfully",msgTpye:"success",getmsg:!0}),setTimeout(()=>{d({getmsg:!1})},5e3))}catch(l){console.error("Error submitting form:",l),d({message:"Failed to sent Message",msgTpye:"error",getmsg:!1})}};return b({gsapAnimation:a=>{const l=a.timeline({defaults:{ease:"Back.ease.config(2)"},scrollTrigger:{trigger:"#contact",scrub:!1,start:"150px center",end:"80% 600px"}});l.fromTo(o.current,{opacity:0,y:-50},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,transformOrigin:"center",y:0,duration:.7}),l.fromTo(".cbox",{opacity:0,y:-40},{opacity:1,stagger:.5,transformOrigin:"center",y:0,duration:.5},"-=.2"),l.fromTo(c.current,{opacity:0,y:-10},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,transformOrigin:"center",y:0,duration:.7},"-=.5"),l.fromTo(".inp",{opacity:0,scaleX:0},{opacity:1,stagger:.3,transformOrigin:"center",scaleX:1,duration:.7},"-=.5"),l.fromTo(t.current,{opacity:0,y:20},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,y:0,duration:.4},"-=0.2")}}),e.jsxs(e.Fragment,{children:[i.getmsg?e.jsx(y,{notification:i,setnotification:d}):null,e.jsx("img",{className:"absolute  lg:h-2/3 bottom-0 left-0 opacity-20 ",src:"/assets/tech2.svg",alt:""}),e.jsx("img",{className:"absolute  lg:h-2/3 opacity-20 right-0 rotate-180 top-0",src:"/assets/tech2.svg",alt:""}),e.jsxs("div",{className:"main-box w-full flex flex-col md:flex-row  gap-16 sm:gap-8 px-4 md:p-0 relative z-10 2xl:w-[80%]",children:[e.jsxs("div",{className:"contact-box basis-1/2 flex flex-col justify-center  md:self-start gap-10 md:px-16 mt-16 sm:mt-0",children:[e.jsx("h1",{className:" text-lg head_text_color   uppercase",children:"Ask your Queries"}),e.jsx("h1",{ref:o,className:"  text-5xl sm:text-6xl md:text-7xl font-bold text-color -mt-7 clip",children:"Contact Me."}),e.jsx("div",{className:"gradient-box custom_shadow w-full rounded-xl cbox",children:e.jsxs("div",{className:"watsapp  bg-[hsla(219,32%,12%,1)] w-full  py-10  rounded-xl relative flex justify-center items-center flex-col",children:[e.jsx("h1",{className:"text-lg text-center",children:"Watsapp"}),e.jsx("h2",{className:"text-[hsla(219,4%,55%,1)]",children:"+916386047729"}),e.jsx("span",{className:"absolute top-[94px] bg-color  rounded-full w-20 h-20 grid place-content-center",children:e.jsx("a",{rel:"noreferrer",href:"https://api.whatsapp.com/send?phone=916386047729",target:"_blank","aria-label":"watsapp",children:e.jsx(u,{icon:g.faWhatsapp,size:"xl",className:"bg-green-600 rounded-full w-[60px] h-[60px] hover:scale-110 transition-transform"})})})]})}),e.jsx("div",{className:"gradient-box custom_shadow w-full rounded-xl cbox",children:e.jsxs("div",{className:"watsapp  bg-[hsla(219,32%,12%,1)] w-full py-10  rounded-xl relative flex justify-center items-center flex-col",children:[e.jsx("h1",{className:"text-lg text-center",children:"Email"}),e.jsx("h2",{className:"text-[hsla(219,4%,55%,1)]",children:"gautamnilesh084@gmail.com"}),e.jsx("span",{className:"absolute top-[94px] bg-color  rounded-full w-20 h-20 grid place-content-center",children:e.jsx("a",{rel:"noreferrer",href:"mailto:gautamnilesh084@gmail.com",target:"_blank","aria-label":"email",children:e.jsx(u,{icon:h.faEnvelope,size:"xl",className:"bg-red-500 rounded-full w-[46px] h-[46px] p-2 hover:scale-110 transition-transform"})})})]})})]}),e.jsxs("form",{onSubmit:p,autoComplete:"off",className:"flex basis-1/2 gap-5 flex-col w-full md:px-6",children:[e.jsx("h1",{ref:c,className:"text-2xl font-bold text-color clip",children:"Ask Your Queries! "}),e.jsxs("div",{className:"flex flex-col justify-center relative inp",children:[e.jsx("input",{type:"text",id:"name",name:"name",min:3,value:s.name,required:!0,onChange:m,className:" bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-3  focus:bg-[hsla(219,32%,12%,1)] outline-none inner_shadow"}),e.jsx("div",{className:"cut absolute w-[8ch]  bg-color py-2 rounded-b-lg top-0 left-3 shadow-2xl"}),e.jsx("label",{htmlFor:"name",className:"absolute p-2 text-[hsla(219,4%,55%,1)] nlabel transition-transform",children:"Name"})]}),e.jsxs("div",{className:"flex flex-col justify-center relative inp",children:[e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,required:!0,onChange:m,className:" bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-3  focus:bg-[hsla(219,32%,12%,1)] outline-none inner_shadow"}),e.jsx("div",{className:"cut absolute w-[8ch]  bg-color py-2 rounded-b-lg top-0 left-3 shadow-2xl"}),e.jsx("label",{htmlFor:"email",className:"absolute p-2 text-[hsla(219,4%,55%,1)] elabel transition-transform",children:"Email"})]}),e.jsxs("div",{className:"flex flex-col justify-start relative inp",children:[e.jsx("textarea",{name:"questions",id:"questions",onChange:m,value:s.questions,required:!0,cols:"30",rows:"10",className:"bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-5   outline-none inner_shadow resize-none "}),e.jsx("div",{className:"cut absolute w-[17ch]  bg-color py-2 rounded-b-lg top-0 left-3 shadow-2xl"}),e.jsx("label",{htmlFor:"questions",className:"absolute px-2 py-4 text-[hsla(219,4%,55%,1)] qlabel transition-transform",children:"Ask Your Questions"})]}),e.jsxs("button",{ref:t,className:"send-btn self-end clip disabled:grayscale",children:[e.jsx("div",{className:"svg-wrapper-1",children:e.jsx("div",{className:"svg-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[e.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),e.jsx("path",{fill:"currentColor",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"})]})})}),e.jsx("span",{children:"Send"})]})]})]})]})};export{N as default};