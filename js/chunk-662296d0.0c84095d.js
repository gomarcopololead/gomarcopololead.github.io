(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-662296d0"],{"06d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("2b0e"),a=i["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(e){this.$refs.input.selectionStart=e}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(e){this.$refs.input.selectionEnd=e}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(e){this.$refs.input.selectionDirection=e}}},methods:{select:function(){var e;(e=this.$refs.input).select.apply(e,arguments)},setSelectionRange:function(){var e;(e=this.$refs.input).setSelectionRange.apply(e,arguments)},setRangeText:function(){var e;(e=this.$refs.input).setRangeText.apply(e,arguments)}}})},1079:function(e,t,n){"use strict";var i=n("541c");t["a"]=i["a"]},"1f1e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("2b0e"),a=i["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var e;return(e=this.$refs.input).setCustomValidity.apply(e,arguments)},checkValidity:function(){var e;return(e=this.$refs.input).checkValidity.apply(e,arguments)},reportValidity:function(){var e;return(e=this.$refs.input).reportValidity.apply(e,arguments)}}})},"40fc":function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return C}));var i=n("2b0e"),a=n("0056"),s=n("a723"),o=n("906c"),r=n("6b77"),l=n("a8c8"),c=n("58f2"),u=n("3a58"),d=n("d82f"),p=n("cf75"),h=n("fa73");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(c["a"])("value",{type:s["p"],defaultValue:"",event:a["bb"]}),w=v.mixin,g=v.props,y=v.prop,O=v.event,j=Object(p["d"])(Object(d["m"])(m(m({},g),{},{ariaInvalid:Object(p["c"])(s["j"],!1),autocomplete:Object(p["c"])(s["u"]),debounce:Object(p["c"])(s["p"],0),formatter:Object(p["c"])(s["l"]),lazy:Object(p["c"])(s["g"],!1),lazyFormatter:Object(p["c"])(s["g"],!1),number:Object(p["c"])(s["g"],!1),placeholder:Object(p["c"])(s["u"]),plaintext:Object(p["c"])(s["g"],!1),readonly:Object(p["c"])(s["g"],!1),trim:Object(p["c"])(s["g"],!1)})),"formTextControls"),C=i["default"].extend({mixins:[w],props:j,data:function(){var e=this[y];return{localValue:Object(h["g"])(e),vModelValue:this.modifyValue(e)}},computed:{computedClass:function(){var e=this.plaintext,t=this.type,n="range"===t,i="color"===t;return[{"custom-range":n,"form-control-plaintext":e&&!n&&!i,"form-control":i||!e&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(l["d"])(Object(u["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(p["b"])(this.formatter)}},watch:f({},y,(function(e){var t=Object(h["g"])(e),n=this.modifyValue(e);t===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=t,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(a["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e=Object(h["g"])(e),!this.hasFormatter||this.lazyFormatter&&!n||(e=this.formatter(e,t)),e},modifyValue:function(e){return e=Object(h["g"])(e),this.trim&&(e=e.trim()),this.number&&(e=Object(u["b"])(e,e)),e},updateValue:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.lazy;if(!i||n){this.clearDebounce();var a=function(){if(e=t.modifyValue(e),e!==t.vModelValue)t.vModelValue=e,t.$emit(O,e);else if(t.hasFormatter){var n=t.$refs.input;n&&e!==n.value&&(n.value=e)}},s=this.computedDebounce;s>0&&!i&&!n?this.$_inputDebounceTimer=setTimeout(a,s):a()}},onInput:function(e){if(!e.target.composing){var t=e.target.value,n=this.formatValue(t,e);!1===n||e.defaultPrevented?Object(r["f"])(e,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(a["y"],n))}},onChange:function(e){var t=e.target.value,n=this.formatValue(t,e);!1===n||e.defaultPrevented?Object(r["f"])(e,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(a["d"],n))},onBlur:function(e){var t=e.target.value,n=this.formatValue(t,e,!0);!1!==n&&(this.localValue=Object(h["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(a["b"],e)},focus:function(){this.disabled||Object(o["d"])(this.$el)},blur:function(){this.disabled||Object(o["c"])(this.$el)}}})},4797:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var i=n("2b0e"),a=n("c637"),s=n("a723"),o=n("2326"),r=n("906c"),l=n("6b77"),c=n("d82f"),u=n("cf75"),d=n("dde7"),p=n("06d9"),h=n("ad47"),b=n("d520"),m=n("40fc"),f=n("1f1e"),v=n("90ef"),w=n("bc9a");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],C=Object(u["d"])(Object(c["m"])(y(y(y(y(y(y({},v["b"]),d["b"]),h["b"]),b["b"]),m["b"]),{},{list:Object(u["c"])(s["u"]),max:Object(u["c"])(s["p"]),min:Object(u["c"])(s["p"]),noWheel:Object(u["c"])(s["g"],!1),step:Object(u["c"])(s["p"]),type:Object(u["c"])(s["u"],"text",(function(e){return Object(o["a"])(j,e)}))})),a["R"]),x=i["default"].extend({name:a["R"],mixins:[w["a"],v["a"],d["a"],h["a"],b["a"],m["a"],p["a"],f["a"]],props:C,computed:{localType:function(){var e=this.type;return Object(o["a"])(j,e)?e:"text"},computedAttrs:function(){var e=this.localType,t=this.name,n=this.form,i=this.disabled,a=this.placeholder,s=this.required,o=this.min,r=this.max,l=this.step;return{id:this.safeId(),name:t,form:n,type:e,disabled:i,placeholder:a,required:s,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:o,max:r,step:l,list:"password"!==e?this.list:null,"aria-required":s?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return y(y({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(e){this.setWheelStopper(e)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(e){var t=this.$el;Object(l["c"])(e,t,"focus",this.onWheelFocus),Object(l["c"])(e,t,"blur",this.onWheelBlur),e||Object(l["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(l["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(l["a"])(document,"wheel",this.stopWheel)},stopWheel:function(e){Object(l["f"])(e,{propagation:!1}),Object(r["c"])(this.$el)}},render:function(e){return e("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},"5fda":function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i,a=n("2b0e"),s=n("2f79"),o=n("c637"),r=n("0056"),l=n("a723"),c=n("9b76"),u=n("906c"),d=n("7b1e"),p=n("58f2"),h=n("3a58"),b=n("d82f"),m=n("cf75"),f=n("8c18"),v=n("f29e"),w=n("ce2a");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=Object(p["a"])("show",{type:l["i"],defaultValue:!1}),C=j.mixin,x=j.props,_=j.prop,D=j.event,k=function(e){return""===e||Object(d["b"])(e)?0:(e=Object(h["c"])(e,0),e>0?e:0)},A=function(e){return""===e||!0===e||!(Object(h["c"])(e,0)<1)&&!!e},B=Object(m["d"])(Object(b["m"])(y(y({},x),{},{dismissLabel:Object(m["c"])(l["u"],"Close"),dismissible:Object(m["c"])(l["g"],!1),fade:Object(m["c"])(l["g"],!1),variant:Object(m["c"])(l["u"],"info")})),o["a"]),S=a["default"].extend({name:o["a"],mixins:[C,f["a"]],props:B,data:function(){return{countDown:0,localShow:A(this[_])}},watch:(i={},O(i,_,(function(e){this.countDown=k(e),this.localShow=A(e)})),O(i,"countDown",(function(e){var t=this;this.clearCountDownInterval();var n=this[_];Object(d["i"])(n)&&(this.$emit(r["n"],e),n!==e&&this.$emit(D,e),e>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){t.countDown--}),1e3)):this.$nextTick((function(){Object(u["B"])((function(){t.localShow=!1}))})))})),O(i,"localShow",(function(e){var t=this[_];e||!this.dismissible&&!Object(d["i"])(t)||this.$emit(r["m"]),Object(d["i"])(t)||t===e||this.$emit(D,e)})),i),created:function(){this.$_filterTimer=null;var e=this[_];this.countDown=k(e),this.localShow=A(e)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(e){var t=e();if(this.localShow){var n=this.dismissible,i=this.variant,a=e();n&&(a=e(v["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(c["k"])])),t=e("div",{staticClass:"alert",class:O({"alert-dismissible":n},"alert-".concat(i),i),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[s["a"]]},[a,this.normalizeSlot()])}return e(w["a"],{props:{noFade:!this.fade}},[t])}})},a15b:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n("b42e"),a=n("c637"),s=n("a723"),o=n("2326"),r=n("228e"),l=n("6c06"),c=n("b508"),u=n("d82f"),d=n("cf75"),p=n("fa73");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=["start","end","center"],v=Object(c["a"])((function(e,t){return t=Object(p["h"])(Object(p["g"])(t)),t?Object(p["c"])(["row-cols",e,t].filter(l["a"]).join("-")):null})),w=Object(c["a"])((function(e){return Object(p["c"])(e.replace("cols",""))})),g=[],y=function(){var e=Object(r["b"])().reduce((function(e,t){return e[Object(d["g"])(t,"cols")]=Object(d["c"])(s["p"]),e}),Object(u["c"])(null));return g=Object(u["h"])(e),Object(d["d"])(Object(u["m"])(b(b({},e),{},{alignContent:Object(d["c"])(s["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(f,"between","around","stretch"),e)})),alignH:Object(d["c"])(s["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(f,"between","around"),e)})),alignV:Object(d["c"])(s["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(f,"baseline","stretch"),e)})),noGutters:Object(d["c"])(s["g"],!1),tag:Object(d["c"])(s["u"],"div")})),a["Ob"])},O={name:a["Ob"],functional:!0,get props(){return delete this.props,this.props=y(),this.props},render:function(e,t){var n,a=t.props,s=t.data,o=t.children,r=a.alignV,l=a.alignH,c=a.alignContent,u=[];return g.forEach((function(e){var t=v(w(e),a[e]);t&&u.push(t)})),u.push((n={"no-gutters":a.noGutters},m(n,"align-items-".concat(r),r),m(n,"justify-content-".concat(l),l),m(n,"align-content-".concat(c),c),n)),e(a.tag,Object(i["a"])(s,{staticClass:"row",class:u}),o)}}},ad47:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n("2b0e"),a=n("a723"),s=n("cf75"),o=Object(s["d"])({size:Object(s["c"])(a["u"])},"formControls"),r=i["default"].extend({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},c71b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("alert-default"),n("alert-title"),n("alert-color"),n("alert-icon"),n("alert-auto-dismiss"),n("alert-v-model-support"),n("alert-animation"),n("alert-example")],1)],1)},a=[],s=n("a15b"),o=n("b28b"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAlertDefaut)+" ")]},proxy:!0}])},[n("b-card-text",[e._v("Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).")]),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{variant:"primary",show:""}},[n("div",{staticClass:"alert-body"},[n("span",[n("strong",[e._v("Good Morning!")]),e._v(" Start your day with some alerts.")])])])],1)],1)},l=[],c=n("1079"),u=n("5fda"),d=n("d6e4"),p='\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      variant="primary"\n      show\n    >\n      <div class="alert-body">\n        <span><strong>Good Morning!</strong> Start your day with some alerts.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert,\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      variant="warning"\n      show\n    >\n      <h4 class="alert-heading">\n        Lorem ipsum dolor sit amet\n      </h4>\n      <div class="alert-body">\n        Lorem ipsum dolor sit amet\n        <b-link class="alert-link">\n          consectetur\n        </b-link>\n        adipisicing elit. Ducimus, laborum!\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BLink } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert,\n    BLink,\n  },\n}\n<\/script>\n',b='\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- primary --\x3e\n    <b-alert\n      variant="primary"\n      show\n    >\n      <h4 class="alert-heading">\n        Primary\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- secondary --\x3e\n    <b-alert\n      variant="secondary"\n      show\n    >\n      <h4 class="alert-heading">\n        Secondary\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- success --\x3e\n    <b-alert\n      variant="success"\n      show\n    >\n      <h4 class="alert-heading">\n        Success\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- danger --\x3e\n    <b-alert\n      variant="danger"\n      show\n    >\n      <h4 class="alert-heading">\n        Danger\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- warning --\x3e\n    <b-alert\n      variant="warning"\n      show\n    >\n      <h4 class="alert-heading">\n        Warning\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- info --\x3e\n    <b-alert\n      variant="info"\n      show\n    >\n      <h4 class="alert-heading">\n        Info\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- dark --\x3e\n    <b-alert\n      variant="dark"\n      show\n    >\n      <h4 class="alert-heading">\n        Dark\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      show\n      variant="primary"\n    >\n      <div class="alert-body">\n        <feather-icon\n          class="mr-25"\n          icon="StarIcon"\n        />\n        <span class="ml-25">Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      v-height-fade.appear\n      :show="dismissCountDown"\n      dismissible\n      class="mb-0"\n      variant="warning"\n      @dismissed="dismissCountDown = 0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <div class="alert-body">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      class="mt-75"\n      @click="showAlert"\n    >\n      Show alert with count-down timer\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    \'height-fade\': heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n    }\n  },\n   methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n<\/script>\n',v='\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- alert --\x3e\n    <b-alert\n      v-model="showDismissibleAlert"\n      v-height-fade.appear\n      variant="danger"\n      dismissible\n      class="mb-0"\n    >\n      <div class="alert-body">\n        Dismissible Alert!\n      </div>\n    </b-alert>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      class="mt-1"\n      @click="showDismissibleAlert = !showDismissibleAlert"\n    >\n      {{ showDismissibleAlert ? \'Hide\' : \'Show\' }} dismissible alert\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    \'height-fade\': heightFade,\n    Ripple,\n  },\n  data: () => ({\n    showDismissibleAlert: false,\n  }),\n}\n<\/script>\n',w='\n<template>\n  <div>\n    \x3c!-- dismissible alert --\x3e\n    <b-alert\n      v-height-fade\n      show\n      dismissible\n      fade\n      class="mb-0"\n      variant="primary"\n    >\n      <div class="alert-body">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class="pt-2 mb-0">\n      <span>If you want to show animation even when alert get rendered. You can use </span>\n      <code>appear</code>\n      <span> modifier</span>\n    </b-card-text>\n\n    \x3c!--  show alert with count-down timer button--\x3e\n    <div class="demo-inline-spacing mb-1">\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n        @click="showAlert"\n      >\n        Show alert with count-down timer\n      </b-button>\n\n      \x3c!-- show dismissible alert button --\x3e\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n        @click="showDismissibleAlert = true"\n      >\n        Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n      </b-button>\n    </div>\n\n    \x3c!-- dismissible Alert --\x3e\n    <b-alert\n      v-height-fade.appear\n      variant="danger"\n      dismissible\n      fade\n      :show="showDismissibleAlert"\n      class="mb-0"\n      @dismissed="showDismissibleAlert = false"\n    >\n      <div class="alert-body">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class="m-0 py-1">\n      You can even use this on dismissible alerts.\n    </b-card-text>\n\n    \x3c!-- count down dismissible alert  --\x3e\n    <b-alert\n      v-height-fade.appear\n      :show="dismissCountDown"\n      dismissible\n      fade\n      variant="warning"\n      class="mb-0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <div class="alert-body">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton, BCardText } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BCardText,\n    BButton,\n  },\n    directives: {\n    heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n      showDismissibleAlert: false,\n    }\n  },\n  methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <b-form-group>\n      <label>Enter only numbers</label>\n      <b-form-input\n        v-model="value"\n        class="w-25 w-sm-100"\n        placeholder="0123456789"\n        @keyup="validateInput"\n      />\n    </b-form-group>\n\n    \x3c!-- alert --\x3e\n    <b-alert\n      v-height-fade.appear\n      variant="danger"\n      :show="show"\n      class="mb-0"\n    >\n      <div class="alert-body">\n        <feather-icon\n          icon="InfoIcon"\n          class="mr-50"\n        />\n        the value is invalid you can only enter numbers\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport {BAlert, BFormGroup, BFormInput} from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\n\nexport default {\n  components: {\n    BAlert,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    \'height-fade\': heightFade,\n  },\n  data() {\n    return {\n      value: \'\',\n      show: true,\n      codeExample,\n    }\n  },\n  methods: {\n    validateInput() {\n      if (/^\\d+$/.test(this.value)) {\n        this.show = false\n      } else {\n        this.show = true\n      }\n    },\n  },\n}\n<\/script>\n',y={components:{BCardCode:c["a"],BAlert:u["a"],BCardText:d["a"]},data:function(){return{codeAlertDefaut:p}}},O=y,j=n("2877"),C=Object(j["a"])(O,r,l,!1,null,null,null),x=C.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Title"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAlertTitle)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Add a title to the alert with the ")]),n("code",[e._v(".alert-heading")]),n("span",[e._v(" class.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{variant:"warning",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Lorem ipsum dolor sit amet ")]),n("div",{staticClass:"alert-body"},[e._v(" Lorem ipsum dolor sit amet "),n("b-link",{staticClass:"alert-link"},[e._v(" consectetur ")]),e._v(" adipisicing elit. Ducimus, laborum! ")],1)])],1)],1)},D=[],k=n("aa59"),A={components:{BCardCode:c["a"],BAlert:u["a"],BCardText:d["a"],BLink:k["a"]},data:function(){return{codeAlertTitle:h}}},B=A,S=Object(j["a"])(B,_,D,!1,null,null,null),T=S.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Icon"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeIcon)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use icon inside ")]),n("code",[e._v(".alert-body")]),n("span",[e._v(" or ")]),n("code",[e._v(".alert-heading")]),n("span",[e._v(" section.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{show:"",variant:"primary"}},[n("div",{staticClass:"alert-body"},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n("span",{staticClass:"ml-25"},[e._v("Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.")])],1)])],1)],1)},I=[],P={components:{BCardCode:c["a"],BAlert:u["a"],BCardText:d["a"]},data:function(){return{codeIcon:m}}},V=P,W=Object(j["a"])(V,$,I,!1,null,null,null),E=W.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card-code",{attrs:{title:"Colors"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAlertColor)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("For proper styling of ")]),n("code",[e._v("<b-alert>")]),n("span",[e._v(" , use one of the four required contextual variants by setting the ")]),n("code",[e._v("variant")]),n("span",[e._v(" prop to one of the following: ")]),n("code",[e._v("info, success, warning")]),n("span",[e._v(" or ")]),n("code",[e._v("danger")]),n("span",[e._v(" . The default is ")]),n("code",[e._v("info")]),n("span",[e._v(" .")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{variant:"primary",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Primary ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),n("b-alert",{attrs:{variant:"secondary",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Secondary ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),n("b-alert",{attrs:{variant:"success",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Success ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),n("b-alert",{attrs:{variant:"danger",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Danger ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),n("b-alert",{attrs:{variant:"warning",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Warning ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),n("b-alert",{attrs:{variant:"info",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Info ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),n("b-alert",{attrs:{variant:"dark",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v(" Dark ")]),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])])],1)],1)],1)},L=[],q={components:{BCardCode:c["a"],BAlert:u["a"],BCardText:d["a"]},data:function(){return{codeAlertColor:b}}},R=q,z=Object(j["a"])(R,F,L,!1,null,null,null),M=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Auto dismissing alerts"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAutoDismiss)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("To create a ")]),n("code",[e._v("<b-alert>")]),n("span",[e._v(" that dismisses automatically after a period of time, set the ")]),n("code",[e._v("show")]),n("span",[e._v(" prop (or the ")]),n("code",[e._v("v-model")]),n("span",[e._v(") to the number of seconds you would like the ")]),n("code",[e._v("<b-alert>")]),n("span",[e._v(" to remain visible for.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")])])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-75",attrs:{variant:"primary"},on:{click:e.showAlert}},[e._v(" Show alert with count-down timer ")])],1)],1)},H=[],G=n("1947"),Y={inserted:function(e,t){var n="".concat(e.offsetHeight,"px");t.modifiers.appear?(e.style.overflow="hidden",e.style.maxHeight="0px",e.style.opacity=0,setTimeout((function(){e.style.maxHeight=n,e.style.opacity=1,setTimeout((function(){e.style.overflow="unset"}),300)}),100)):e.style.maxHeight=n},unbind:function(e){void 0!==e.style&&(e.style.overflow="hidden",e.style.maxHeight="0px",e.style.opacity=0)}},J=n("e009"),U={components:{BCardCode:c["a"],BAlert:u["a"],BButton:G["a"],BCardText:d["a"]},directives:{"height-fade":Y,Ripple:J["a"]},data:function(){return{dismissSecs:50,dismissCountDown:0,codeAutoDismiss:f}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},K=U,Q=Object(j["a"])(K,N,H,!1,null,null,null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"v-model support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVsupport)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use the ")]),n("code",[e._v("v-model")]),n("span",[e._v(" directive to create two-way data bindings on the ")]),n("code",[e._v("show")]),n("span",[e._v(" prop as in ")]),n("code",[e._v('v-model="showDismissibleAlert"')]),n("span",[e._v(" above.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[n("div",{staticClass:"alert-body"},[e._v(" Dismissible Alert! ")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1",attrs:{variant:"primary"},on:{click:function(t){e.showDismissibleAlert=!e.showDismissibleAlert}}},[e._v(" "+e._s(e.showDismissibleAlert?"Hide":"Show")+" dismissible alert ")])],1)],1)},ee=[],te={components:{BCardCode:c["a"],BAlert:u["a"],BButton:G["a"],BCardText:d["a"]},directives:{"height-fade":Y,Ripple:J["a"]},data:function(){return{showDismissibleAlert:!1,codeVsupport:v}}},ne=te,ie=Object(j["a"])(ne,Z,ee,!1,null,null,null),ae=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Alert Animation"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAnimation)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the ")]),n("code",[e._v("hightFaded")]),n("span",[e._v(" directive to enable animation. By default alerts are not animated.")])]),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade"}],staticClass:"mb-0",attrs:{show:"",dismissible:"",fade:"",variant:"primary"}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("Dismissible Alert!")])])]),n("b-card-text",{staticClass:"pt-2 mb-0"},[n("span",[e._v("If you want to show animation even when alert get rendered. You can use ")]),n("code",[e._v("appear")]),n("span",[e._v(" modifier")])]),n("div",{staticClass:"demo-inline-spacing mb-1"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:e.showAlert}},[e._v(" Show alert with count-down timer ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:function(t){e.showDismissibleAlert=!0}}},[e._v(" Show dismissible alert ("+e._s(e.showDismissibleAlert?"visible":"hidden")+") ")])],1),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",dismissible:"",fade:"",show:e.showDismissibleAlert},on:{dismissed:function(t){e.showDismissibleAlert=!1}}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("Dismissible Alert!")])])]),n("b-card-text",{staticClass:"m-0 py-1"},[e._v(" You can even use this on dismissible alerts. ")]),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{show:e.dismissCountDown,dismissible:"",fade:"",variant:"warning"},on:{"dismiss-count-down":e.countDownChanged}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")])])])],1)},oe=[],re={components:{BCardCode:c["a"],BAlert:u["a"],BCardText:d["a"],BButton:G["a"]},directives:{heightFade:Y,Ripple:J["a"]},data:function(){return{dismissSecs:50,dismissCountDown:0,showDismissibleAlert:!1,codeAnimation:w}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},le=re,ce=Object(j["a"])(le,se,oe,!1,null,null,null),ue=ce.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Example"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeExample)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the ")]),n("code",[e._v("show")]),n("span",[e._v(" prop to control the visibility state of the alert. By default alerts are not shown. Set the prop ")]),n("code",[e._v("show")]),n("span",[e._v(" to explicitly display them.")])]),n("b-form-group",[n("label",[e._v("Enter only numbers")]),n("b-form-input",{staticClass:"w-25 w-sm-100",attrs:{placeholder:"0123456789"},on:{keyup:e.validateInput},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",show:e.show}},[n("div",{staticClass:"alert-body"},[n("feather-icon",{staticClass:"mr-50",attrs:{icon:"InfoIcon"}}),e._v(" the value is invalid you can only enter numbers ")],1)])],1)},pe=[],he=(n("ac1f"),n("00b4"),n("8226")),be=n("4797"),me={components:{BCardCode:c["a"],BAlert:u["a"],BFormGroup:he["a"],BFormInput:be["a"],BCardText:d["a"]},directives:{"height-fade":Y},data:function(){return{value:"",show:!0,codeExample:g}},methods:{validateInput:function(){/^\d+$/.test(this.value)?this.show=!1:this.show=!0}}},fe=me,ve=Object(j["a"])(fe,de,pe,!1,null,null,null),we=ve.exports,ge={components:{BRow:s["a"],BCol:o["a"],AlertDefault:x,AlertTitle:T,AlertIcon:E,AlertColor:M,AlertAutoDismiss:X,AlertVModelSupport:ae,AlertAnimation:ue,AlertExample:we}},ye=ge,Oe=Object(j["a"])(ye,i,a,!1,null,null,null);t["default"]=Oe.exports},d6e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("2b0e"),a=n("b42e"),s=n("c637"),o=n("a723"),r=n("cf75"),l=Object(r["d"])({textTag:Object(r["c"])(o["u"],"p")},s["u"]),c=i["default"].extend({name:s["u"],functional:!0,props:l,render:function(e,t){var n=t.props,i=t.data,s=t.children;return e(n.textTag,Object(a["a"])(i,{staticClass:"card-text"}),s)}})},dde7:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));var i=n("2b0e"),a=n("a723"),s=n("906c"),o=n("cf75"),r="input, textarea, select",l=Object(o["d"])({autofocus:Object(o["c"])(a["g"],!1),disabled:Object(o["c"])(a["g"],!1),form:Object(o["c"])(a["u"]),id:Object(o["c"])(a["u"]),name:Object(o["c"])(a["u"]),required:Object(o["c"])(a["g"],!1)},"formControls"),c=i["default"].extend({props:l,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var e=this;this.$nextTick((function(){Object(s["B"])((function(){var t=e.$el;e.autofocus&&Object(s["u"])(t)&&(Object(s["v"])(t,r)||(t=Object(s["C"])(r,t)),Object(s["d"])(t))}))}))}}})}}]);
//# sourceMappingURL=chunk-662296d0.0c84095d.js.map