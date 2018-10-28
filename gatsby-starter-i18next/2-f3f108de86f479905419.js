(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,u.default)(e,["children"]);return i.default.createElement(l.Provider,{value:(0,a.default)({},n)},t)},t.I18nConsumer=void 0;var a=r(n(164)),u=r(n(158)),i=r(n(0)),l=(r(n(4)),i.default.createContext());var o=l.Consumer;t.I18nConsumer=o},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return _}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),u=n(4),i=n.n(u),l=n(145),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(170),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=n(35);n.d(t,"parsePath",function(){return f.a});var s=a.a.createContext({}),p=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function _(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return o.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return o.I18nConsumer}});var a=r(n(181)),u=r(n(183)),i=r(n(187)),l=r(n(188)),o=n(152)},170:function(e,t,n){var r;e.exports=(r=n(185))&&r.default||r},171:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.Head}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return a.Language}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return a.Link}}),Object.defineProperty(t,"withI18next",{enumerable:!0,get:function(){return u.default}});var a=n(163),u=r(n(255))},181:function(e,t,n){"use strict";n(50),n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(157)),u=r(n(0)),i=(r(n(4)),r(n(206))),l=n(152);function o(e){var t=e.availableLngs,n=e.children,r=e.lng,a=e.originalPath,l=e.siteUrl;e.hreflang;return u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,null,u.default.createElement("html",{lang:r}),u.default.createElement("link",{rel:"alternate",href:"".concat(l),hreflang:"x-default"}),t.map(function(e){return u.default.createElement("link",{key:e,rel:"alternate",href:"".concat(l).concat(e).concat(a),hreflang:e})}),n))}o.defaultProps={hreflang:!0};t.default=function(e){return u.default.createElement(l.I18nConsumer,null,function(t){return u.default.createElement(o,(0,a.default)({},t,e))})}},183:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(146)),u=r(n(147)),i=r(n(148)),l=r(n(149)),o=r(n(150)),c=r(n(48)),d=r(n(49)),f=n(0),s=(r(n(4)),n(153)),p=n(209),_=n(186),g=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return n=(0,i.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(u))),(0,d.default)((0,c.default)((0,c.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,r=e.availableLngs,a=e.redirectPage,u=window.localStorage.getItem("@wappsLng")||(0,p.lookup)(r,(0,p.navigatorLanguages)(),t);window.localStorage.setItem("@wappsLng",u);var i="/".concat(u).concat(a);(0,s.navigate)(i,{replace:!0})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){(0,_.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(f.PureComponent);t.default=g},185:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),u=n(4),i=n.n(u),l=n(52),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},186:function(e,t,n){"use strict";n(143),Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},187:function(e,t,n){"use strict";n(143);var r=n(176),a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(157)),i=a(n(146)),l=a(n(147)),o=a(n(148)),c=a(n(149)),d=a(n(150)),f=a(n(48)),s=a(n(49)),p=r(n(0)),_=n(153),g=n(152),v=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=(0,o.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(a))),(0,s.default)((0,f.default)((0,f.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath,r="/".concat(e).concat(t);(0,_.navigate)(r)}),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(p.Component);t.default=function(e){return p.default.createElement(g.I18nConsumer,null,function(t){return p.default.createElement(v,(0,u.default)({},t,e))})}},188:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(157)),u=r(n(158)),i=r(n(0)),l=r(n(4)),o=n(153),c=n(152),d=function(e){var t=e.to,n=e.lng,r=e.children,l=(0,u.default)(e,["to","lng","children"]);return i.default.createElement(o.Link,(0,a.default)({to:n?"/".concat(n).concat(t):"".concat(t)},l),r)};d.propTypes={to:l.default.string.isRequired,children:l.default.node.isRequired};t.default=function(e){return i.default.createElement(c.I18nConsumer,null,function(t){var n=t.lng;return i.default.createElement(d,(0,a.default)({lng:n},e))})}},205:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(4),i=n.n(u),l=n(175),o=n(257),c=n(171),d=(n(34),n(50),function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return a.a.createElement("ul",{style:{listStyle:"none"}},r.map(function(e){return a.a.createElement("li",{key:e,style:{display:"inline"}},a.a.createElement("button",{style:{background:"rebeccapurple",color:"white",textDecoration:e===n?"underline":"none"},onClick:function(){return t(e)}},e))}))}),f=function(e){return a.a.createElement(c.Language,null,function(t){return a.a.createElement(d,Object.assign({},e,t))})},s=function(e){var t=e.siteTitle;return a.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),a.a.createElement("div",{style:{position:"absolute",top:0,right:0}},a.a.createElement(f,null)))},p=(n(322),function(e){var t=e.children,n=(e.data,e.t);return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Head,{hreflang:!0},a.a.createElement("title",null,n("Gatsby Starter I18next")),a.a.createElement("meta",{name:"description",content:"Sample"}),a.a.createElement("meta",{name:"keywords",content:"gatsby, react, wapps, i18next"})),a.a.createElement(s,{siteTitle:n("Gatsby Starter I18next")}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))});p.propTypes={children:i.a.node.isRequired};t.a=Object(l.withNamespaces)()(p)},255:function(e,t,n){"use strict";n(76),n(77),n(143);var r=n(176),a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(146)),i=a(n(147)),l=a(n(148)),o=a(n(149)),c=a(n(150)),d=a(n(48)),f=a(n(49)),s=r(n(0)),p=n(175),_=n(163),g=a(n(256)),v=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e){return function(t){function n(e){var t;(0,u.default)(this,n),t=(0,l.default)(this,(0,o.default)(n).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(t)),"activateLng",function(){var e=t.props,n=e.data,r=e.pageContext;n.locales&&n.locales.edges.forEach(function(e){var n=e.node,r=n.lng,a=n.ns,u=n.data;t.i18n.hasResourceBundle(r,a)||t.i18n.addResources(r,a,JSON.parse(u))}),t.i18n.changeLanguage(r.lng)});var r=e.pageContext;return t.i18n=(0,g.default)(r.fallbackLng),t.activateLng(),t}return(0,c.default)(n,t),(0,i.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.pageContext.lng!==e.pageContext.lng&&this.activateLng()}},{key:"render",value:function(){return s.default.createElement(p.I18nextProvider,{i18n:this.i18n},s.default.createElement(_.I18nProvider,this.props.pageContext,s.default.createElement(e,this.props)))}}]),n}(s.Component)}};t.default=v},256:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(323));var u=function(e){return a.default.init({debug:!1,defaultNS:"messages",fallbackLng:e}),a.default};t.default=u},257:function(e,t,n){"use strict";n(143);var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.Head}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return a.Language}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return a.Link}}),Object.defineProperty(t,"withLingui",{enumerable:!0,get:function(){return u.default}});var a=n(163),u=r(n(258))},258:function(module,exports,__webpack_require__){"use strict";__webpack_require__(76),__webpack_require__(77),__webpack_require__(259),__webpack_require__(260),__webpack_require__(143);var _interopRequireWildcard=__webpack_require__(176),_interopRequireDefault=__webpack_require__(33);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(146)),_createClass2=_interopRequireDefault(__webpack_require__(147)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(148)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(149)),_inherits2=_interopRequireDefault(__webpack_require__(150)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(48)),_defineProperty2=_interopRequireDefault(__webpack_require__(49)),_react=_interopRequireWildcard(__webpack_require__(0)),_react2=__webpack_require__(261),_core=__webpack_require__(225),_gatsbyI18n=__webpack_require__(163),convert=function convert(data){return JSON.parse(data,function(key,value){return"string"==typeof value&&value.startsWith("/Function(")&&value.endsWith(")/")?(value=value.substring(10,value.length-2),eval("("+value+")")):value})},withLingui=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e){return function(t){function n(e){var t;return(0,_classCallCheck2.default)(this,n),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(n).call(this,e)),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(t)),"activateLng",function(){var e=t.props,n=e.data,r=e.pageContext,a={};n.locales&&n.locales.edges.forEach(function(e){var t=e.node,n=t.lng,r=t.ns,u=t.data;a[n]=(0,_defineProperty2.default)({},r,JSON.parse(u))}),t.i18n.load(a),t.i18n.activate(r.lng)}),t.i18n=(0,_core.setupI18n)(),t.activateLng(),t}return(0,_inherits2.default)(n,t),(0,_createClass2.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.pageContext.lng!==e.pageContext.lng&&(this.activateLng(),this.forceUpdate())}},{key:"render",value:function(){return _react.default.createElement(_react2.I18nProvider,{i18n:this.i18n},_react.default.createElement(_gatsbyI18n.I18nProvider,this.props.pageContext,_react.default.createElement(e,this.props)))}}]),n}(_react.Component)}},_default=withLingui;exports.default=_default},322:function(e,t,n){}}]);
//# sourceMappingURL=2-f3f108de86f479905419.js.map