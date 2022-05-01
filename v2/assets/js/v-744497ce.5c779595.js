"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[671],{1911:function(n,a,s){s.r(a),s.d(a,{data:function(){return t}});const t={key:"v-744497ce",path:"/api/",title:"Cropper",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"Syntax",slug:"syntax",children:[]},{level:3,title:"Example",slug:"example",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Instance Properties",slug:"instance-properties",children:[]},{level:2,title:"Instance Methods",slug:"instance-methods",children:[{level:3,title:"getCropperCanvas",slug:"getcroppercanvas",children:[]},{level:3,title:"getCropperImage",slug:"getcropperimage",children:[]},{level:3,title:"getCropperSelection",slug:"getcropperselection",children:[]},{level:3,title:"getCropperSelections",slug:"getcropperselections",children:[]}]}],git:{updatedTime:1651392388e3,contributors:[{name:"Chen Fengyuan",email:"chenfengyuan@outlook.com",commits:1}]},filePathRelative:"api/README.md"}},970:function(n,a,s){s.r(a),s.d(a,{default:function(){return h}});var t=s(6252);const e=(0,t.uE)('<h1 id="cropper" tabindex="-1"><a class="header-anchor" href="#cropper" aria-hidden="true">#</a> Cropper</h1><p>The <code>Cropper</code> constructor creates a new Cropper instance.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div>',5),p=(0,t._)("p",null,[(0,t._)("strong",null,"element")],-1),o=(0,t._)("li",null,[(0,t.Uk)("Type: "),(0,t._)("code",null,"HTMLImageElement | HTMLCanvasElement | string")],-1),c=(0,t.Uk)("The target image or canvas element for cropping. If it is a string, will be passed into the "),l={href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",target:"_blank",rel:"noopener noreferrer"},r=(0,t._)("code",null,"document.querySelector",-1),u=(0,t.Uk)(" to find the element."),i=(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"options"),(0,t.Uk)(" (optional)")]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Type: "),(0,t._)("code",null,"Object")]),(0,t._)("li",null,[(0,t.Uk)("The "),(0,t._)("a",{href:"#options"},"options"),(0,t.Uk)(" for cropping.")])])],-1),k=(0,t._)("h3",{id:"example",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),(0,t.Uk)(" Example")],-1),d=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cropper-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Cropper <span class="token keyword">from</span> <span class="token string">&#39;cropperjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nimage<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;/cropperjs/v2/picture.jpg&#39;</span><span class="token punctuation">;</span>\nimage<span class="token punctuation">.</span>alt <span class="token operator">=</span> <span class="token string">&#39;Picture&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cropper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;.cropper-container&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cropper<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>container</td><td><code>Element | string</code></td><td>Defaults to the parent element of the target element, or <code>document.body</code> if the parent element is null.</td><td>The Cropper container. If it is a string, it will be passed into the <code>document.querySelector</code> to find the element.</td></tr><tr><td>template</td><td><code>string</code></td><td>Defaults to a built-in template, see below.</td><td>The Cropper template.</td></tr></tbody></table><p>The default template for the Cropper:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-canvas</span> <span class="token attr-name">background</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-image</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-image</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-shade</span> <span class="token attr-name">hidden</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-shade</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select<span class="token punctuation">&quot;</span></span> <span class="token attr-name">plain</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-selection</span> <span class="token attr-name">initial-coverage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">movable</span> <span class="token attr-name">resizable</span> <span class="token attr-name">zoomable</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-grid</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bordered</span> <span class="token attr-name">covered</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-grid</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-crosshair</span> <span class="token attr-name">theme-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(238, 238, 238, 0.5)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">centered</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-crosshair</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>move<span class="token punctuation">&quot;</span></span> <span class="token attr-name">theme-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(255, 255, 255, 0.35)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>n-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>e-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>s-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ne-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nw-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>se-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sw-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-selection</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-canvas</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="instance-properties" tabindex="-1"><a class="header-anchor" href="#instance-properties" aria-hidden="true">#</a> Instance Properties</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>element</td><td><code>HTMLImageElement | HTMLCanvasElement</code></td><td>The normalized Cropper element.</td></tr><tr><td>options</td><td><code>Object</code></td><td>The normalized Cropper options.</td></tr><tr><td>container</td><td><code>Element</code></td><td>The normalized Cropper container.</td></tr></tbody></table><h2 id="instance-methods" tabindex="-1"><a class="header-anchor" href="#instance-methods" aria-hidden="true">#</a> Instance Methods</h2><h3 id="getcroppercanvas" tabindex="-1"><a class="header-anchor" href="#getcroppercanvas" aria-hidden="true">#</a> getCropperCanvas</h3><ul><li><strong>Syntax</strong>: <code>getCropperCanvas()</code></li><li><strong>Alternative</strong>: <code>cropper.container.querySelector(&#39;cropper-canvas&#39;)</code></li><li><strong>Returns</strong>: <ul><li>Type: <code>CropperCanvas | null</code></li><li>The <code>&lt;cropper-canvas&gt;</code> element if any.</li></ul></li></ul><p>Get the <code>&lt;cropper-canvas&gt;</code> element in the Cropper container.</p><h3 id="getcropperimage" tabindex="-1"><a class="header-anchor" href="#getcropperimage" aria-hidden="true">#</a> getCropperImage</h3><ul><li><strong>Syntax</strong>: <code>getCropperImage()</code></li><li><strong>Alternative</strong>: <code>cropper.container.querySelector(&#39;cropper-image&#39;)</code></li><li><strong>Returns</strong>: <ul><li>Type: <code>CropperImage | null</code></li><li>The <code>&lt;cropper-image&gt;</code> element if any.</li></ul></li></ul><p>Get the <code>&lt;cropper-image&gt;</code> element in the Cropper container.</p><h3 id="getcropperselection" tabindex="-1"><a class="header-anchor" href="#getcropperselection" aria-hidden="true">#</a> getCropperSelection</h3><ul><li><strong>Syntax</strong>: <code>getCropperSelection()</code></li><li><strong>Alternative</strong>: <code>cropper.container.querySelector(&#39;cropper-selection&#39;)</code></li><li><strong>Returns</strong>: <ul><li>Type: <code>CropperSelection | null</code></li><li>The <code>&lt;cropper-selection&gt;</code> element if any.</li></ul></li></ul><p>Get the <code>&lt;cropper-selection&gt;</code> element in the Cropper container.</p><h3 id="getcropperselections" tabindex="-1"><a class="header-anchor" href="#getcropperselections" aria-hidden="true">#</a> getCropperSelections</h3><ul><li><strong>Syntax</strong>: <code>getCropperSelections()</code></li><li><strong>Alternative</strong>: <code>cropper.container.querySelectorAll(&#39;cropper-selection&#39;)</code></li><li><strong>Returns</strong>: <ul><li>Type: <code>NodeListOf&lt;CropperSelection&gt; | null</code></li><li>The <code>&lt;cropper-selection&gt;</code> element if any.</li></ul></li></ul><p>Get all the <code>&lt;cropper-selection&gt;</code> elements in the Cropper container when there are multiple selections.</p>',21),g={};var h=(0,s(3744).Z)(g,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon"),g=(0,t.up)("CropperExample"),h=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("ul",null,[(0,t._)("li",null,[p,(0,t._)("ul",null,[o,(0,t._)("li",null,[c,(0,t._)("a",l,[r,(0,t.Wm)(s)]),u])])]),i]),k,(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g)])),_:1}),d],64)}]])},3744:function(n,a){a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);