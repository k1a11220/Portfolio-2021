"use strict";(self.webpackChunkworks_beomsoo=self.webpackChunkworks_beomsoo||[]).push([[133],{7928:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,o,r,a,m,l,d,p,h=t(7294),g=t(3209),f=t(5761),s=t(9),c=s.ZP.div(i||(i=(0,f.Z)(["\n  color: #086bce;\n  font-weight: 700;\n  font-size: 1.125rem;\n  margin-bottom: 4px;\n  line-height: 1.75;\n\n  @media (max-width: 768px) {\n    font-size: 1rem;\n  }\n"]))),x=(0,s.ZP)(c)(o||(o=(0,f.Z)(["\n  color: #a1a1a1;\n  font-weight: 500;\n  margin-bottom: 0px;\n  line-height: 1.75;\n\n  @media (max-width: 768px) {\n    font-size: 1rem;\n    margin-bottom: 0;\n  }\n"]))),u=s.ZP.hr(r||(r=(0,f.Z)(["\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  color: #4e5968;\n"]))),b=s.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 700px;\n  height: 100%;\n  margin: 0 auto;\n  color: #ffffff;\n  position: relative;\n  top: 64px;\n  margin-bottom: 64px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 40px 0;\n  }\n"]))),w=s.ZP.div(m||(m=(0,f.Z)(["\n  display: -webkit-box;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: normal;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 3rem;\n  font-weight: 800;\n  color: #1d1d1f;\n  margin-bottom: 4px;\n\n  @media (max-width: 768px) {\n    font-size: 1.875rem;\n  }\n"]))),k=function(n){var e=n.title,t=n.date,i=n.client;return h.createElement(b,null,h.createElement(c,null,i),h.createElement(w,null,e),h.createElement(x,null,t),h.createElement(u,null))},v=t(1496),y=s.ZP.div(l||(l=(0,f.Z)(["\n  position: relative;\n  width: 100%;\n  @media screen and (max-width: 768px) {\n    width: 92%;\n    align-self: center;\n  }\n"]))),z=(0,s.ZP)((function(n){return h.createElement(v.Z,n)}))(d||(d=(0,f.Z)(["\n  width: 1200px;\n  height: 675px;\n  object-fit: cover;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  object-position: center center;\n  border-radius: 10px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 240px;\n    margin-bottom: 40px;\n  }\n"]))),Z=function(n){var e=n.title,t=n.date,i=n.categories,o=n.client,r=n.thumbnail.childImageSharp.fluid;return h.createElement(y,null,h.createElement(z,{fluid:r,alt:"thumbnail"}),h.createElement(k,{client:o,title:e,date:t,categories:i}))},E=s.ZP.div(p||(p=(0,f.Z)(['\n  // Renderer Style\n  display: flex;\n  flex-direction: column;\n  width: 700px;\n  margin: 0 auto;\n  word-break: break-all;\n\n  // Markdown Style\n  line-height: 1.75;\n  letter-spacing: -0.02rem;\n  /* word-break: keep-all; */\n  font-weight: 300;\n\n  * {\n    font-size: 1.125rem;\n\n    @media (max-width: 768px) {\n      font-size: 1rem;\n    }\n  }\n  // Adjust Heading Element Style\n\n  p {\n    margin-bottom: 8px;\n  }\n\n  h1 {\n    font-size: 3rem; //48px\n  }\n\n  h2 {\n    font-size: 1.75rem; //26px\n    margin-bottom: 8px;\n  }\n\n  h3 {\n    font-size: 1.5rem; //24px\n    margin-bottom: 8px;\n  }\n\n  strong {\n    color: #1d1d1f;\n    font-weight: 600;\n  }\n\n  h1,\n  h2,\n  h3 {\n    color: #1d1d1f;\n    font-weight: 600;\n  }\n\n  hr + h1,\n  hr + h2,\n  hr + h3 {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  /* * + h1,\n  * + h2,\n  * + h3 {\n    padding-top: 0;\n  } */\n\n  & > h2:first-child {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  & > h3:first-child {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  img {\n    margin: 40px 0 40px 0;\n    width: 700px;\n    border-radius: 10px;\n  }\n\n  // Adjust Quotation Element Style\n  blockquote {\n    margin-bottom: 1.5rem;\n    padding: 5px 15px;\n    border-left: 2px solid #1d1d1f;\n    font-weight: 800;\n  }\n\n  blockquote p {\n    margin-bottom: 0;\n  }\n\n  // Adjust List Element Style\n\n  li p,\n  strong {\n    margin: 0;\n  }\n\n  ol,\n  ul {\n    margin-left: 1.25rem;\n    margin-bottom: 1.5rem;\n  }\n\n  // Adjust Horizontal Rule style\n  hr {\n    margin: 1.375rem 0 2.5rem;\n  }\n\n  // Adjust Link Element Style\n  a {\n    color: #4263eb;\n    text-decoration: underline;\n  }\n\n  // Adjust Code Style\n  code,\n  pre {\n    max-width: 92vw;\n    font-weight: 300;\n  }\n\n  pre {\n    margin-bottom: 1.5rem;\n  }\n\n  code * {\n    /* font-family: D2 coding; */\n    /* font-family: SF Mono Light; */\n    /* font-family: "Roboto Mono", monospace; */\n    /* font-family: "Ubuntu", sans-serif; */\n    font-family: "Oxygen Mono", monospace;\n  }\n\n  code {\n    padding: 1px 3px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    border-radius: 10px;\n  }\n\n  pre {\n    background-color: #282a36;\n  }\n  pre code {\n    font-size: 0.75rem;\n    padding: 0;\n    background: transparent;\n  }\n\n  code > .parameter {\n    color: #fff;\n  }\n  sup {\n    font-size: 0.75rem;\n    vertical-align: super;\n    line-height: 0;\n  }\n\n  td,\n  th {\n    border-bottom: 1px solid #d1d1d1;\n  }\n\n  // Markdown Responsive Design\n  @media (max-width: 768px) {\n    width: 92%;\n    line-height: 1.6;\n    font-size: 0.875rem;\n\n    p {\n      margin-bottom: 1.25rem;\n    }\n\n    h1 {\n      font-size: 1.5rem;\n    }\n\n    h2 {\n      font-size: 1.25rem;\n      margin: 28px 0 12px 0px;\n    }\n\n    h3 {\n      font-size: 1.125rem;\n    }\n\n    img {\n      width: 100%;\n    }\n\n    hr {\n      margin: 50px 0;\n    }\n  }\n']))),S=function(n){var e=n.html;return h.createElement(E,{dangerouslySetInnerHTML:{__html:e}})},j=function(n){var e=n.data.allMarkdownRemark.edges[0].node,t=e.html,i=e.frontmatter;return h.createElement(g.Z,{title:"["+i.categories+"] "+i.title+"- B-log",description:i.summary,url:"",image:""},h.createElement(Z,i),h.createElement(S,{html:t}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-fa0ccadaa6e339102145.js.map