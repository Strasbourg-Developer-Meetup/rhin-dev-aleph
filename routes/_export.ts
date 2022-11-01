// Imports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var b=Object.defineProperty;var o=(s,e)=>{for(var d in e)b(s,d,{get:e[d],enumerable:!0})};import*as H from"./_404.tsx";import*as O from"./_app.tsx";import*as S from"./docs.tsx";import*as R from"./index.tsx";import*as X from"./meetups.tsx";var l={};o(l,{default:()=>_});import{Fragment as y,jsx as a,jsxs as h}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as p}from"https://esm.sh/@mdx-js/react@2.1.3";import{Head as N}from"aleph/react";function m(s){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},p(),s.components);return h(y,{children:[a(N,{children:a("title",{children:"Get Started - Docs"})}),`
`,a(e.h1,{id:"get-started",children:"Get Started"}),`
`,h(e.p,{children:["Initialize a new project, you can pick a start template with ",a(e.code,{children:"--template"}),` flag, available templates:\r
`,a(e.code,{children:"[react, vue, api, yew]"})]}),`
`,a(e.pre,{children:a(e.code,{className:"hljs language-bash",children:`deno run -A https://deno.land/x/aleph@1.0.0-beta.18/init.ts
`})})]})}function x(s={}){let{wrapper:e}=Object.assign({},p(),s.components);return e?a(e,Object.assign({},s,{children:a(m,s)})):m(s)}var _=x;var i={};o(i,{default:()=>M});import{Fragment as v,jsx as n,jsxs as r}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as g}from"https://esm.sh/@mdx-js/react@2.1.3";import{Head as k}from"aleph/react";function u(s){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",pre:"pre",span:"span"},g(),s.components);return r(v,{children:[n(k,{children:n("title",{children:"About - Docs"})}),`
`,n(e.h1,{id:"about",children:"About"}),`
`,r(e.p,{children:[n(e.strong,{children:"Aleph.js"})," (or ",n(e.strong,{children:"Aleph"})," or ",n(e.strong,{children:"\u05D0"})," or ",n(e.strong,{children:"\u963F\u83B1\u592B"}),", ",n("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a\r
fullstack framework in `,n(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",n(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",n(e.a,{href:"https://remix.run",children:"Remix"})," and ",n(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,r(e.blockquote,{children:[`
`,r(e.p,{children:["The name is taken from the book ",n(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:n(e.em,{children:"The Aleph"})})," by ",n(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,r(e.p,{children:["Aleph.js is modern framework that doesn't need ",n(e.strong,{children:"webpack"}),` or other bundler\r
since it uses the `,n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs\r
to be compiled once, when a module changes, Aleph.js just needs to re-compile\r
that single module. There is no time wasted `,n(e.em,{children:"re-bundling"}),` everytime a change is\r
made. This, along with Hot Module Replacement (`,n(e.strong,{children:"HMR"}),") and ",n(e.strong,{children:"Fast Refresh"}),`,\r
leads to instant updates in the browser.`]}),`
`,r(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",n(e.a,{href:"https://swc.rs",children:"swc"}),` in\r
WASM with high performance, and bundles modules with `,n(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization\r
time extremely fast.`]}),`
`,r(e.p,{children:["Aleph.js works on top of ",n(e.strong,{children:"Deno"}),", a ",n(e.em,{children:"simple"}),", ",n(e.em,{children:"modern"})," and ",n(e.em,{children:"secure"}),` runtime for\r
JavaScript and TypeScript. All dependencies are imported using URLs, and managed\r
by Deno cache system. No `,n(e.code,{children:"package.json"})," and ",n(e.code,{children:"node_modules"})," directory needed."]}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"import"})," ",n(e.span,{className:"hljs-title class_",children:"React"})," ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:"'https://esm.sh/react'"}),`\r
`,n(e.span,{className:"hljs-keyword",children:"import"})," ",n(e.span,{className:"hljs-title class_",children:"Logo"})," ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:"'../components/logo.tsx'"}),`\r
\r
`,n(e.span,{className:"hljs-keyword",children:"export"})," ",n(e.span,{className:"hljs-keyword",children:"default"})," ",n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"Home"}),"(",n(e.span,{className:"hljs-params"}),`) {\r
  `,n(e.span,{className:"hljs-keyword",children:"return"}),` (\r
    `,r(e.span,{className:"xml",children:[r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
      `,r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"Logo"})," />"]}),`\r
      `,r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello World!",r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
    `,r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`\r
  )\r
}
`]})})]})}function D(s={}){let{wrapper:e}=Object.assign({},g(),s.components);return e?n(e,Object.assign({},s,{children:n(u,s)})):u(s)}var M=D;var c={};o(c,{default:()=>L});import{Fragment as A,jsx as t,jsxs as f}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as w}from"https://esm.sh/@mdx-js/react@2.1.3";import{Head as F}from"aleph/react";function j(s){let e=Object.assign({h1:"h1",h2:"h2"},w(),s.components);return f(A,{children:[t(F,{children:t("title",{children:"Why Deno ?"})}),`
`,t(e.h1,{id:"why-deno-",children:"Why Deno ?"}),`
`,t("a",{href:"https://www.meetup.com/fr-FR/strasbourg-developer-meetup/events/288443997/",rel:"some text",children:t("img",{className:"banner",src:"https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507376881%2F676x380.webp&w=3840&q=75",alt:"Meetup banner"})}),`
`,t(e.h2,{id:"youtube",children:"Youtube"}),`
`,t("iframe",{width:"560",height:"560",src:"https://www.youtube.com/embed/uN87qULG61Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),`
`,t(e.h2,{id:"slides",children:"Slides"}),`
`,t("iframe",{src:"https://slides.com/kevinfaulhaber-1/deck/embed",width:"100vw",height:"560",title:"Why Deno",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}),`
`,t(e.h2,{id:"sponsors",children:"Sponsors"}),`
`,f("div",{className:"sponsors",children:[t("img",{src:"/assets/level.png",className:"sponsor level"}),t("img",{src:"/assets/sportyma.png",className:"sponsor sportyma"})]})]})}function C(s={}){let{wrapper:e}=Object.assign({},w(),s.components);return e?t(e,Object.assign({},s,{children:t(j,s)})):j(s)}var L=C;var U={"/_404":H,"/_app":O,"/docs":S,"/":R,"/meetups":X,"/docs/get-started":l,"/docs/index":i,"/meetups/why-deno":c,depGraph:{"modules":[{"specifier":"./routes\\docs\\get-started.mdx"},{"specifier":"./routes\\docs\\index.mdx"},{"specifier":"./routes\\meetups\\why-deno.mdx"}]}};export{U as default};
