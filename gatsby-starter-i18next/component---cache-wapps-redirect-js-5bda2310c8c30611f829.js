(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(e,t,n){var r=n(214).Redirect;e.exports=r},197:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,u.default)(e,["children"]);return i.default.createElement(l.Provider,{value:(0,a.default)({},n)},t)},t.I18nConsumer=void 0;var a=r(n(206)),u=r(n(200)),i=r(n(0)),l=(r(n(7)),i.default.createContext()),o=l.Consumer;t.I18nConsumer=o},198:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return _});var r=n(0),a=n.n(r),u=n(7),i=n.n(u),l=n(195),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(209),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=n(42);n.d(t,"parsePath",function(){return f.a});var s=a.a.createContext({}),_=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}_.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},209:function(e,t,n){var r;e.exports=(r=n(228))&&r.default||r},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage||window.navigator.systemLanguage||null}},211:function(e,t,n){"use strict";n(255),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=/^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.match(r)||[];return{language:n[1]||t,extlang:n[2]||t,script:n[3]||t,region:n[4]||t}}Object.defineProperty(a,"language",{value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.match(r)[1]||t},enumerable:!0});var u=a;t.default=u},214:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return o.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return o.I18nConsumer}}),Object.defineProperty(t,"withLingui",{enumerable:!0,get:function(){return c.default}});var a=r(n(218)),u=r(n(226)),i=r(n(232)),l=r(n(233)),o=n(197),c=r(n(234))},218:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(199)),u=r(n(0)),i=(r(n(7)),r(n(220))),l=n(197);function o(e){var t=e.availableLngs,n=e.children,r=e.lng,a=e.originalPath,l=e.siteUrl;return e.hreflang,u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,null,u.default.createElement("html",{lang:r}),u.default.createElement("link",{rel:"alternate",href:"".concat(l),hreflang:"x-default"}),t.map(function(e){return u.default.createElement("link",{key:e,rel:"alternate",href:"".concat(l).concat(e).concat(a),hreflang:e})}),n))}o.defaultProps={hreflang:!0},t.default=function(e){return u.default.createElement(l.I18nConsumer,null,function(t){return u.default.createElement(o,(0,a.default)({},t,e))})}},226:function(e,t,n){"use strict";n(110);var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(201)),u=r(n(202)),i=r(n(203)),l=r(n(204)),o=r(n(205)),c=r(n(57)),d=r(n(58)),f=n(0),s=(r(n(7)),n(198)),_=n(229),p=n(231),g=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return n=(0,i.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(u))),(0,d.default)((0,c.default)((0,c.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,r=e.availableLngs,a=e.redirectPage,u=window.localStorage.getItem("@wappsLng")||(0,_.getPreferredLng)(r)||t,i=(0,s.withPrefix)("/".concat(u).concat(a));window.localStorage.setItem("@wappsLng",u),(0,s.replace)(i)}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){(0,p.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(f.PureComponent);t.default=g},228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(7),i=n.n(u),l=n(53),o=n(1),c=function(e){var t=e.location,n=o.a.getResourcesForPathname(t.pathname);return a.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},229:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPreferredLng",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"getNavigatorLng",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parseLngTag",{enumerable:!0,get:function(){return i.default}});var a=r(n(230)),u=r(n(210)),i=r(n(211))},230:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(210)),u=r(n(211));t.default=function(e){var t=(0,a.default)();if(!t)return null;if(!e)return t;var n=e.filter(function(e){return e===t});return n.length>0?n[0]:e.filter(function(e){return u.default.language(e)===u.default.language(t)})[0]||null}},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},232:function(e,t,n){"use strict";var r=n(212),a=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(199)),i=a(n(201)),l=a(n(202)),o=a(n(203)),c=a(n(204)),d=a(n(205)),f=a(n(57)),s=a(n(58)),_=r(n(0)),p=n(198),g=n(197),v=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=(0,o.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(a))),(0,s.default)((0,f.default)((0,f.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath;(0,p.push)("/".concat(e).concat(t))}),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(_.Component);t.default=function(e){return _.default.createElement(g.I18nConsumer,null,function(t){return _.default.createElement(v,(0,u.default)({},t,e))})}},233:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(199)),u=r(n(200)),i=r(n(0)),l=r(n(7)),o=n(198),c=n(197),d=function(e){var t=e.to,n=e.lng,r=e.children,l=(0,u.default)(e,["to","lng","children"]);return i.default.createElement(o.Link,(0,a.default)({to:n?"/".concat(n).concat(t):"".concat(t)},l),r)};d.propTypes={to:l.default.string.isRequired,children:l.default.node.isRequired},t.default=function(e){return i.default.createElement(c.I18nConsumer,null,function(t){var n=t.lng;return i.default.createElement(d,(0,a.default)({lng:n},e))})}},234:function(module,exports,__webpack_require__){"use strict";__webpack_require__(100),__webpack_require__(256),__webpack_require__(257);var _interopRequireWildcard=__webpack_require__(212),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(206)),_classCallCheck2=_interopRequireDefault(__webpack_require__(201)),_createClass2=_interopRequireDefault(__webpack_require__(202)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(203)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(204)),_inherits2=_interopRequireDefault(__webpack_require__(205)),_react=_interopRequireWildcard(__webpack_require__(0)),_react2=__webpack_require__(258),_core=__webpack_require__(236),_LinguiContext=__webpack_require__(237),convert=function convert(data){return JSON.parse(data,function(key,value){return"string"==typeof value&&value.startsWith("/Function(")&&value.endsWith(")/")?(value=value.substring(10,value.length-2),eval("("+value+")")):value})},withLingui=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],function(e){return function(t){function n(e){var t;(0,_classCallCheck2.default)(this,n),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(n).call(this,e));var r=e.data,a=e.pageContext;console.log(r);var u={};return r.locales&&r.locales.edges.forEach(function(e){var t=e.node,n=t.lng,r=(t.ns,t.data),a=convert(r);console.log(a),u[n]=(0,_objectSpread2.default)({},a)}),t.i18n=(0,_core.setupI18n)({language:a.lng,catalogs:u}),t}return(0,_inherits2.default)(n,t),(0,_createClass2.default)(n,[{key:"render",value:function(){return _react.default.createElement(_react2.I18nProvider,{i18n:this.i18n},_react.default.createElement(_LinguiContext.LinguiProvider,this.props.pageContext,_react.default.createElement(e,this.props)))}}]),n}(_react.Component)}},_default=withLingui;exports.default=_default},237:function(e,t,n){"use strict";var r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.LinguiProvider=c,t.LinguiConsumer=void 0;var a=r(n(206)),u=r(n(200)),i=r(n(0)),l=r(n(7)),o=i.default.createContext();function c(e){var t=e.children,n=(0,u.default)(e,["children"]);return i.default.createElement(o.Provider,{value:(0,a.default)({},n)},t)}c.contextTypes={linguiPublisher:l.default.object.isRequired};var d=o.Consumer;t.LinguiConsumer=d}}]);
//# sourceMappingURL=component---cache-wapps-redirect-js-5bda2310c8c30611f829.js.map