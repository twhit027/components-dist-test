import{h}from"../mycomponent.core.js";function format(e,t,r){return(e||"")+(t?" "+t:"")+(r?" "+r:"")}var MyComponent=function(){function e(){}return e.prototype.getText=function(){return format(this.first,this.middle,this.last)},e.prototype.render=function(){return h("div",{class:"blue"},"Hello, World! I'm ",this.getText())},Object.defineProperty(e,"is",{get:function(){return"my-component"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-my-component-h{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:#222;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(18px + (22 - 18) * ((100vw - 320px) / (1200 - 320)));font-weight:600;line-height:1.15}\@font-face{font-family:Unify Sans;src:url(/src/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/src/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/src/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/src/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/src/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/src/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}"},enumerable:!0,configurable:!0}),e}();export{MyComponent};