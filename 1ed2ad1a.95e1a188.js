(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(400)),s={id:"testing",title:"Testing with Jest"},o={unversionedId:"guides/testing",id:"version-2.4.0/guides/testing",isDocsHomePage:!1,title:"Testing with Jest",description:"Mocking native modules",source:"@site/versioned_docs/version-2.4.0/guides/testing.md",slug:"/guides/testing",permalink:"/react-native-gesture-handler/docs/guides/testing",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.4.0/guides/testing.md",version:"2.4.0",sidebar:"version-2.4.0/docs",previous:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/gesture-handlers/basics/interactions"},next:{title:"Migrating off RNGHEnabledRootView",permalink:"/react-native-gesture-handler/docs/guides/migrating-off-rnghenabledroot"}},c=[{value:"Mocking native modules",id:"mocking-native-modules",children:[]},{value:"Testing Gestures&#39; and Gesture handlers&#39; callbacks",id:"testing-gestures-and-gesture-handlers-callbacks",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"mocking-native-modules"},"Mocking native modules"),Object(i.b)("p",null,"In order to load mocks provided by RNGH add following to your jest config in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"]\n')),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"jest": {\n  "preset": "react-native",\n  "setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"]\n}\n')),Object(i.b)("h2",{id:"testing-gestures-and-gesture-handlers-callbacks"},"Testing Gestures' and Gesture handlers' callbacks"),Object(i.b)("p",null,"RNGH provides an API for triggering selected handlers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../api/test-api#firegesturehandlergestureorhandler-eventlist"}),Object(i.b)("inlineCode",{parentName:"a"},"fireGestureHandler(gestureOrHandler, eventList)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../api/test-api#getbygesturetestidtestid"}),Object(i.b)("inlineCode",{parentName:"a"},"getByGestureTestId(testID)")))))}u.isMDXComponent=!0},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(g,o(o({ref:t},l),{},{components:n})):a.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);