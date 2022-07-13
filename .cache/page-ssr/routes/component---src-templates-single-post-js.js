exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 7228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(3646);

var iterableToArray = __webpack_require__(6860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableSpread = __webpack_require__(8206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(5318);__webpack_unused_export__=true;exports.Z=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(1506));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(5354));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(7316));var _extends2=_interopRequireDefault(__webpack_require__(7154));var _react=_interopRequireDefault(__webpack_require__(5570));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var _excluded=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"];var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;logDeprecationNotice("resolutions","the gatsby-image v2 prop \"fixed\"");delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;logDeprecationNotice("sizes","the gatsby-image v2 prop \"fluid\"");delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */var getImageCacheKey=function getImageCacheKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var srcData=getCurrentSrcData(fluid||fixed||[]);return srcData&&srcData.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);return imageCache[cacheKey]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);if(cacheKey){imageCache[cacheKey]=true;}};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),srcSet&&/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn,isHydrated:false};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){this.setState({isHydrated:isBrowser});if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var imageVariants=fluid||fixed;// Abort early if missing image data (#25371)
if(!imageVariants){return null;}var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};// Initial client render state needs to match SSR until hydration finishes.
// Once hydration completes, render again to update to the correct image.
// `imageVariants` is always an Array type at this point due to `convertProps()`
var image=!this.state.isHydrated?imageVariants[0]:getCurrentSrcData(imageVariants);if(fluid){return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:image.width,height:image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:image.width,opacity:!this.state.imgLoaded?1:0,height:image.height},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:image.width,height:image.height,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});function requireFixedOrFluid(originalPropTypes){return function(props,propName,componentName){var _PropTypes$checkPropT;if(!props.fixed&&!props.fluid){throw new Error("The prop `fluid` or `fixed` is marked as required in `"+componentName+"`, but their values are both `undefined`.");}_propTypes.default.checkPropTypes((_PropTypes$checkPropT={},_PropTypes$checkPropT[propName]=originalPropTypes,_PropTypes$checkPropT),props,"prop",componentName);};}// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)])),fluid:requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)])),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.Z=_default;

/***/ }),

/***/ 1254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(5318);exports.__esModule=true;exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(7154));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(7316));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(5354));var _react=_interopRequireDefault(__webpack_require__(5570));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var _utils=__webpack_require__(989);var queueResetCount=(0,_utils.debounce)(function(){if(window.DISQUSWIDGETS){window.DISQUSWIDGETS.getCount({reset:true});}},300,false);var CommentCount=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(CommentCount,_React$Component);function CommentCount(props){var _this;_this=_React$Component.call(this,props)||this;_this.shortname= true?"imarketer-blog-1":0;return _this;}var _proto=CommentCount.prototype;_proto.componentDidMount=function componentDidMount(){this.loadInstance();};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps){if(this.props===nextProps){return false;}return(0,_utils.shallowComparison)(this.props,nextProps);};_proto.componentDidUpdate=function componentDidUpdate(){this.loadInstance();};_proto.componentWillUnmount=function componentWillUnmount(){this.cleanInstance();};_proto.loadInstance=function loadInstance(){if(window.document.getElementById('dsq-count-scr')){queueResetCount();}else{(0,_utils.insertScript)("https://"+this.shortname+".disqus.com/count.js",'dsq-count-scr',window.document.body);}};_proto.cleanInstance=function cleanInstance(){(0,_utils.removeScript)('dsq-count-scr',window.document.body);window.DISQUSWIDGETS=undefined;};_proto.render=function render(){var _this$props=this.props,config=_this$props.config,className=_this$props.className,placeholder=_this$props.placeholder,props=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["config","className","placeholder"]);var componentClass="disqus-comment-count"+(className?" "+className:'');return/*#__PURE__*/_react.default.createElement("span",(0,_extends2.default)({className:componentClass,"data-disqus-identifier":config.identifier,"data-disqus-url":config.url},props),placeholder);};return CommentCount;}(_react.default.Component);exports["default"]=CommentCount;CommentCount.defaultProps={placeholder:'...'};CommentCount.propTypes={config:_propTypes.default.shape({/*
    * Tells the Disqus service how to identify the current page.
    * When the Disqus embed is loaded, the identifier is used to look up
    * the correct thread.
    */identifier:_propTypes.default.string,/*
    * Tells the Disqus service the title of the current page.
    * This is used when creating the thread on Disqus.
    */title:_propTypes.default.string,/*
    * Tells the Disqus service the URL of the current page.
    * This URL is used when a thread is created so that Disqus knows which
    * page a thread belongs to.
    * (If undefined, Disqus will use the global.location.href)
    */url:_propTypes.default.string}),/*
  * This is the text that will be used as a placeholder prior to
  * loading the response.
  */placeholder:_propTypes.default.string,/*
  * This allows users to pass a custom class to the comment-count component
  */className:_propTypes.default.string};

/***/ }),

/***/ 4294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(5318);exports.__esModule=true;exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(7154));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(7316));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(5354));var _react=_interopRequireDefault(__webpack_require__(5570));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var CommentEmbed=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(CommentEmbed,_React$Component);function CommentEmbed(){return _React$Component.apply(this,arguments)||this;}var _proto=CommentEmbed.prototype;_proto.getSrc=function getSrc(){var RADIX_BASE=36;var post=Number(this.props.commentId).toString(RADIX_BASE);var parentParam=this.props.showParentComment?'1':'0';var mediaParam=this.props.showMedia?'1':'0';return"https://embed.disqus.com/p/"+post+"?p="+parentParam+"&m="+mediaParam;};_proto.render=function render(){// eslint-disable-next-line no-unused-vars
var _this$props=this.props,commentId=_this$props.commentId,showMedia=_this$props.showMedia,showParentComment=_this$props.showParentComment,props=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["commentId","showMedia","showParentComment"]);return/*#__PURE__*/_react.default.createElement("iframe",(0,_extends2.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},props));};return CommentEmbed;}(_react.default.Component);exports["default"]=CommentEmbed;CommentEmbed.defaultProps={width:420,height:320,showMedia:true,showParentComment:true};CommentEmbed.propTypes={/*
   * This is used to determine the comment that gets embeded.
   * The ID can be found in the Disqus moderation panel or as a `data-post-id`
   * attribute on the HTML element.
   */commentId:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]).isRequired,/*
   * Determines the width of the embedded comment container.
   */width:_propTypes.default.number,/*
   * Determines the height of the embedded comment container.
   */height:_propTypes.default.number,/*
   * Determines whether the embedded comment should include or omit media from
   * within the original comment.
   */showMedia:_propTypes.default.bool,/*
   * Determines whether the parent comment should be displayed for * nested comments.
   */showParentComment:_propTypes.default.bool};

/***/ }),

/***/ 2605:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(5318);exports.__esModule=true;exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(7154));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(7316));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(5354));var _react=_interopRequireDefault(__webpack_require__(5570));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var _utils=__webpack_require__(989);var Disqus=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Disqus,_React$Component);function Disqus(props){var _this;_this=_React$Component.call(this,props)||this;_this.shortname= true?"imarketer-blog-1":0;_this.embedUrl="https://"+_this.shortname+".disqus.com/embed.js";return _this;}var _proto=Disqus.prototype;_proto.componentDidMount=function componentDidMount(){this.loadInstance();};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps){if(this.props===nextProps){return false;}return(0,_utils.shallowComparison)(this.props,nextProps);};_proto.componentDidUpdate=function componentDidUpdate(){this.loadInstance();};_proto.componentWillUnmount=function componentWillUnmount(){this.cleanInstance();};_proto.getDisqusConfig=function getDisqusConfig(config){return function(){this.page.identifier=config.identifier;this.page.url=config.url;this.page.title=config.title;this.page.remote_auth_s3=config.remoteAuthS3;this.page.api_key=config.apiKey;this.language=config.language;};};_proto.loadInstance=function loadInstance(){if(typeof window!=='undefined'&&window.document){window.disqus_config=this.getDisqusConfig(this.props.config);if(window.document.getElementById('dsq-embed-scr')){this.reloadInstance();}else{(0,_utils.insertScript)(this.embedUrl,'dsq-embed-scr',window.document.body);}}};_proto.reloadInstance=function reloadInstance(){if(window&&window.DISQUS){window.DISQUS.reset({reload:true});}};_proto.cleanInstance=function cleanInstance(){(0,_utils.removeScript)('dsq-embed-scr',window.document.body);try{delete window.DISQUS;}catch(error){window.DISQUS=undefined;}var thread=window.document.getElementById('disqus_thread');if(thread){while(thread.hasChildNodes()){thread.removeChild(thread.firstChild);}}// Retrieve and remove the sidebar iframe
var iframeQuery=window.document.querySelector('[id^="dsq-app"]');if(iframeQuery){var iframe=window.document.getElementById(iframeQuery.id);iframe.parentNode.removeChild(iframe);}};_proto.render=function render(){// eslint-disable-next-line no-unused-vars
var _this$props=this.props,config=_this$props.config,props=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["config"]);return/*#__PURE__*/_react.default.createElement("div",(0,_extends2.default)({id:"disqus_thread"},props));};return Disqus;}(_react.default.Component);exports["default"]=Disqus;Disqus.propTypes={config:_propTypes.default.shape({/*
    * Tells the Disqus service how to identify the current page.
    * When the Disqus embed is loaded, the identifier is used to look up
    * the correct thread.
    */identifier:_propTypes.default.string,/*
    * Tells the Disqus service the title of the current page.
    * This is used when creating the thread on Disqus.
    */title:_propTypes.default.string,/*
    * Tells the Disqus service the URL of the current page.
    * This URL is used when a thread is created so that Disqus knows which
    * page a thread belongs to.
    * (If undefined, Disqus will use the global.location.href)
    */url:_propTypes.default.string,/*
    * Tells the Disqus service to override the default site language for the
    * current page.
    * This allows for dynamically loading the Disqus embed in different
    * languages on a per-page basis.
    * (If undefined, Disqus will use the default site language)
    */language:_propTypes.default.string,/*
    The generated payload used to pass Single Sign-On (SSO) user data
    */remoteAuthS3:_propTypes.default.string,/*
    * This is the public API key for your Single Sign-On (SSO) integration
    */apiKey:_propTypes.default.string})};

/***/ }),

/***/ 8200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(5318);__webpack_unused_export__=true;__webpack_unused_export__=void 0;var _Disqus=_interopRequireDefault(__webpack_require__(2605));exports.h$=_Disqus.default;var _CommentCount=_interopRequireDefault(__webpack_require__(1254));__webpack_unused_export__=_CommentCount.default;var _CommentEmbed=_interopRequireDefault(__webpack_require__(4294));__webpack_unused_export__=_CommentEmbed.default;var _default=_Disqus.default;__webpack_unused_export__=_default;

/***/ }),

/***/ 989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(5318);exports.__esModule=true;exports.insertScript=insertScript;exports.removeScript=removeScript;exports.debounce=debounce;exports.isReactElement=isReactElement;exports.shallowComparison=shallowComparison;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _react=_interopRequireDefault(__webpack_require__(5570));function insertScript(src,id,parent){var script=window.document.createElement('script');script.async=true;script.src=src;script.id=id;parent.appendChild(script);return script;}function removeScript(id,parent){var script=window.document.getElementById(id);if(script){parent.removeChild(script);}}function debounce(func,wait,runOnFirstCall){var timeout;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var context=this;var deferredExecution=function deferredExecution(){timeout=null;if(!runOnFirstCall){func.apply(context,args);}};var callNow=runOnFirstCall&&!timeout;window.clearTimeout(timeout);timeout=setTimeout(deferredExecution,wait);if(callNow){func.apply(context,args);}};}function isReactElement(element){if(/*#__PURE__*/_react.default.isValidElement(element)){return true;}else if(Array.isArray(element)){return element.some(function(value){return/*#__PURE__*/_react.default.isValidElement(value);});}return false;}function shallowComparison(currentProps,nextProps){var _ref;// Perform a comparison of all props, excluding React Elements, to prevent
// unnecessary updates
var propNames=new Set(Object.keys(currentProps).concat(Object.keys(nextProps)));var changes=(_ref=[]).concat.apply(_ref,(0,_toConsumableArray2.default)(propNames)).filter(function(name){if(typeof currentProps[name]==='object'){if(shallowComparison(currentProps[name],nextProps[name])){return true;}}else if(currentProps[name]!==nextProps[name]&&!isReactElement(currentProps[name])){return true;}return false;});return changes.length!==0;}

/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HN": () => (/* binding */ B),
/* harmony export */   "Jv": () => (/* binding */ V),
/* harmony export */   "gJ": () => (/* binding */ M)
/* harmony export */ });
/* unused harmony exports MainImage, Placeholder, generateImageData, getImageData, getLowResolutionImageURL, getSrc, getSrcSet, withArtDirection */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5570);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2369);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),d=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),u=function(e){return console.warn(e);},c=function(e,t){return e-t;},h=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function g(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function p(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,d=e.aspectRatio,u=e.formats,c=void 0===u?["auto","webp"]:u;return c=c.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:c,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!d&&(d=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(d||1.3333333333333333))):(r||(r=o&&d?o*d:s.width?s.width:o?Math.round(o/1.3333333333333333):800),d&&!o?o=Math.round(r/d):d||(d=r/o)),n({},e,{width:r,height:o,aspectRatio:d,layout:i,formats:c}));}function m(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=p(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function f(e){var t,a=(e=p(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,d=e.fit,c=e.options,m=e.width,f=e.height,b=e.filename,E=e.reporter,k=void 0===E?{warn:u}:E,M=e.backgroundColor,S=e.placeholderURL;if(a||k.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=g(b)):i={width:m,height:f,format:(null==(t=i)?void 0:t.format)||g(b)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(k.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,d=void 0===o?{warn:u}:o,c=e.breakpoints,h=void 0===c?l:c,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,d=e.reporter,c=void 0===d?{warn:u}:d,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";c.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?w(e):"fullWidth"===i?w(n({breakpoints:h},e)):(d.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(b,t,Math.round(t/x.aspectRatio),e,d,c);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;k.warn("["+a+"] The resolver for image "+b+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:h(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:h(t),sizes:W,type:"image/"+e});}});var R={images:I,layout:o,backgroundColor:M};switch(S&&(R.placeholder={fallback:S}),o){case"fixed":R.width=x.presentationWidth,R.height=x.presentationHeight;break;case"fullWidth":R.width=1,R.height=1/x.aspectRatio;break;case"constrained":R.width=e.width||x.presentationWidth||1,R.height=(R.width||1)/x.aspectRatio;}return R;}var v=function(e){return Array.from(new Set([1].concat(e))).sort(c);};function w(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,d=e.breakpoints,u=e.layout,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/h),i||(i=r*h);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==d?void 0:d.length)>0?(t=d.filter(function(e){return e<=a.width;})).length<d.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==u||t.includes(i)||t.push(i),{sizes:t=t.sort(c),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}function y(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var b=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),E=(/* unused pure expression or super */ null && (["images","placeholder"]));function k(){return true&&true;}var M=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},S=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},N=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function x(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,u=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,b);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=d),f(n({},m,{pluginName:u,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function I(e,t){var a,i,r,s=e.images,l=e.placeholder,d=n({},o(e,E),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=d.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),d.placeholder&&d.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=d.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=d.placeholder)||(r=i.sources).push.apply(r,l.sources)),d;}var W,R=["src","srcSet","loading","alt","shouldLoad"],j=["fallback","sources","shouldLoad"],_=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,d=t.shouldLoad,u=o(t,R);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",n({},u,{decoding:"async",loading:r,src:d?a:void 0,"data-src":d?void 0:a,srcSet:d?i:void 0,"data-srcset":d?void 0:i,alt:l}));},A=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,d=o(t,j),u=d.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_,n({},d,a,{sizes:u,shouldLoad:l}));return r.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:u});}),c):c;};_.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},A.displayName="Picture",A.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};var T=["fallback"],O=function(t){var a=t.fallback,i=o(t,T);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},i));};O.displayName="Placeholder",O.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(W=A.propTypes)?void 0:W.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var z=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},t,{shouldLoad:!0}))));};z.displayName="MainImage",z.propTypes=A.propTypes;var L=["children"],q=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},C=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},D=function(a){var i=a.children,r=o(a,L);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,n({},r)),i,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q,null));},P=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],H=["style","className"],F=function(e){return e.replace(/\n/g,"");},B=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,d=t.image,u=t.loading,c=void 0===u?"lazy":u,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,P);if(!d)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=d.width,y=d.height,b=d.layout,E=d.images,M=d.placeholder,S=d.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return k()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(k()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,H),R={fallback:void 0,sources:[]};return E.fallback&&(R.fallback=n({},E.fallback,{srcSet:E.fallback.srcSet?F(E.fallback.srcSet):void 0})),E.sources&&(R.sources=E.sources.map(function(e){return n({},e,{srcSet:F(e.srcSet)});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D,{layout:b,width:w,height:y},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O,n({},function(e,t,a,i,r,o,s,l){var d={};o&&(d.backgroundColor=o,"fixed"===a?(d.width=i,d.height=r,d.backgroundColor=o,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),s&&(d.objectFit=s),l&&(d.objectPosition=l);var u=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},d)});return k()||(u.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),u;}(M,0,b,w,y,S,m,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),k()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,R,c,g)))));},G=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],V=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,G);return s&&console.warn(s),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(B),U=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},X=new Set(["fixed","fullWidth","constrained"]),Y={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),alt:function(e,t,a){return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:U,height:U,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:function(e){if(void 0!==e.layout&&!X.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};V.displayName="StaticImage",V.propTypes=Y;

/***/ }),

/***/ 2369:
/***/ ((module) => {

"use strict";
const preserveCamelCase=string=>{let isLastCharLower=false;let isLastCharUpper=false;let isLastLastCharUpper=false;for(let i=0;i<string.length;i++){const character=string[i];if(isLastCharLower&&/[a-zA-Z]/.test(character)&&character.toUpperCase()===character){string=string.slice(0,i)+'-'+string.slice(i);isLastCharLower=false;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=true;i++;}else if(isLastCharUpper&&isLastLastCharUpper&&/[a-zA-Z]/.test(character)&&character.toLowerCase()===character){string=string.slice(0,i-1)+'-'+string.slice(i-1);isLastLastCharUpper=isLastCharUpper;isLastCharUpper=false;isLastCharLower=true;}else{isLastCharLower=character.toLowerCase()===character&&character.toUpperCase()!==character;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=character.toUpperCase()===character&&character.toLowerCase()!==character;}}return string;};const camelCase=(input,options)=>{if(!(typeof input==='string'||Array.isArray(input))){throw new TypeError('Expected the input to be `string | string[]`');}options=Object.assign({pascalCase:false},options);const postProcess=x=>options.pascalCase?x.charAt(0).toUpperCase()+x.slice(1):x;if(Array.isArray(input)){input=input.map(x=>x.trim()).filter(x=>x.length).join('-');}else{input=input.trim();}if(input.length===0){return'';}if(input.length===1){return options.pascalCase?input.toUpperCase():input.toLowerCase();}const hasUpperCase=input!==input.toLowerCase();if(hasUpperCase){input=preserveCamelCase(input);}input=input.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(_,p1)=>p1.toUpperCase()).replace(/\d+(\w|$)/g,m=>m.toUpperCase());return postProcess(input);};module.exports=camelCase;// TODO: Remove this for the next major release
module.exports["default"]=camelCase;

/***/ }),

/***/ 4940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/andrew/Desktop/magicShop/shivuk/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(5570);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/components/menu.js
const Menu=()=>/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.StaticQuery,{query:"220261205",render:data=>/*#__PURE__*/index_js_.createElement("ul",{className:"menu menu-horizontal p-0 hidden lg:flex font-bold"},data.wpMenu.menuItems.nodes.map(item=>{const{label,path,id}=item;return/*#__PURE__*/index_js_.createElement("li",null,/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{key:id,to:path},label));}))});/* harmony default export */ const menu = (Menu);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=()=>{return/*#__PURE__*/index_js_.createElement("div",{className:"dark mb-10 border-b"},/*#__PURE__*/index_js_.createElement("div",{className:"navbar"},/*#__PURE__*/index_js_.createElement("div",{className:"navbar-start"},/*#__PURE__*/index_js_.createElement("div",{className:"avatar lg:hidden"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{className:"w-16 h-16 rounded-full",alt:"",src:"../images/iam.webp",formats:["auto","webp","avif"],__imageData:__webpack_require__(884)})),/*#__PURE__*/index_js_.createElement("div",{className:"navbar  relative hidden lg:flex"},/*#__PURE__*/index_js_.createElement("div",{className:"logo"},/*#__PURE__*/index_js_.createElement("div",{className:"w-full rounded-full"},/*#__PURE__*/index_js_.createElement("div",{className:"avatar"},/*#__PURE__*/index_js_.createElement("div",{className:"w-16 rounded-full"},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{key:"377",to:"/"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{className:"w-16 rounded-full",alt:"",src:"../images/iam.webp",formats:["auto","webp","avif"],__imageData:__webpack_require__(884)})))))))),/*#__PURE__*/index_js_.createElement("div",{className:"navbar-end"},/*#__PURE__*/index_js_.createElement(menu,null))));};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/footer.js
const Footer=()=>{return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement("footer",{class:"footer footer-center  bg-slate-900 text-slate-100 mt-20"},/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement("div",{className:"avatar pt-10"},/*#__PURE__*/index_js_.createElement("div",{className:"w-16 rounded-full"},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{key:"377",to:"/"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{className:"w-16 rounded-full",alt:"",src:"../images/iam.webp",formats:["auto","webp","avif"],__imageData:__webpack_require__(884)})))),/*#__PURE__*/index_js_.createElement("div",{className:"mb-5"},/*#__PURE__*/index_js_.createElement("span",null,"\u0410\u0432\u0442\u043E\u0440 \u0431\u043B\u043E\u0433\u0430 ",/*#__PURE__*/index_js_.createElement("br",null),"\u0420\u043E\u043B\u0434\u0443\u0433\u0438\u043D \u0410\u043D\u0434\u0440\u0435\u0439")),/*#__PURE__*/index_js_.createElement("span",null,"Copyright \xA9 2022 - \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. ",/*#__PURE__*/index_js_.createElement("br",null),"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438"),/*#__PURE__*/index_js_.createElement("div",{className:"mt-5"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/telegram.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(8129)}),/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/facebook.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(6009)}),/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/instagram.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(6641)}),/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/linkedin.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(9317)}))),/*#__PURE__*/index_js_.createElement("div",null)));};/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({children})=>{return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement("div",{className:"page"},/*#__PURE__*/index_js_.createElement("div",{className:"px-4"},/*#__PURE__*/index_js_.createElement(header,null),/*#__PURE__*/index_js_.createElement("div",{className:"flex flex-row"},/*#__PURE__*/index_js_.createElement("div",{className:"static"},/*#__PURE__*/index_js_.createElement("div",{class:"fixed ml-10 top-32"},/*#__PURE__*/index_js_.createElement("div",{className:"mb-10"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/minimal/home.png",formats:["auto"],alt:"@imarketer",className:"w-5 h-5",__imageData:__webpack_require__(834)})),/*#__PURE__*/index_js_.createElement("div",{className:"mb-10"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/minimal/notification.png",formats:["auto"],alt:"@imarketer",className:"w-5 h-5",__imageData:__webpack_require__(9558)})),/*#__PURE__*/index_js_.createElement("div",{className:"mb-5"},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{key:"3",to:"https://t.me/iam_marketer",target:"_blank"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/minimal/telegram.png",formats:["auto"],alt:"@imarketer",className:"w-5 h-5 online placeholder",__imageData:__webpack_require__(9598)}))))),/*#__PURE__*/index_js_.createElement("div",{className:"basis-full pt-0"},children)))),/*#__PURE__*/index_js_.createElement(footer,null));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5570);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7533);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6162);
const PostsSidebar=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.StaticQuery,{query:"310293774",render:data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,data.allWpPost.nodes.map((post,node,nodes)=>{const{slug,id,title,categories,content,date}=post;const categ=categories.nodes;const aut=categ[0].icat.caticon.localFile.childImageSharp.fluid;var x=content;const time=1500;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:id,className:"flex justify-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"block text-left p-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{key:categ[0].id,to:`/${categ[0].slug}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{fluid:aut,alt:"A corgi smiling happily",className:"h-5 w-5 object-cover rounded-full mr-3"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6",{className:"font-bold text-indigo-700 hover:text-pink-700"},categ[0].name)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/${categ[0].slug}/${slug}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pt-2 mb-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"text-lg font-bold mb-2"},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",{className:"text-sm"},date," - ",Math.round(x.length/time)," \u043C\u0438\u043D\u0443\u0442")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"text-blue-600"},"\u0427\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u2192"))));}))});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsSidebar);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5570);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7533);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function Seo({description,lang,meta,title}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s / ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}Seo.defaultProps={lang:`ru`,meta:[],description:``};Seo.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ single_post)
});

// EXTERNAL MODULE: external "/Users/andrew/Desktop/magicShop/shivuk/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(5570);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
// EXTERNAL MODULE: ./src/components/layout.js + 3 modules
var layout = __webpack_require__(4940);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(9357);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
// EXTERNAL MODULE: ./src/components/posts-sidebar.js
var posts_sidebar = __webpack_require__(9216);
// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__(6162);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-disqus/index.js
var gatsby_plugin_disqus = __webpack_require__(8200);
;// CONCATENATED MODULE: ./src/components/author.js
const Author=()=>/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.StaticQuery,{query:"2902440624",render:data=>/*#__PURE__*/index_js_.createElement("div",{className:"p-5"},/*#__PURE__*/index_js_.createElement("div",{class:"avatar online"},/*#__PURE__*/index_js_.createElement("div",{class:"w-24 rounded-full"},/*#__PURE__*/index_js_.createElement("img",{className:"h-10 w-10 object-cover rounded-full mr-3",src:data.wpUser.avatar.url,alt:""}))),/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement("h6",{className:"font-bold text-lg"},data.wpUser.name),/*#__PURE__*/index_js_.createElement("span",{className:"text-sm"},data.wpUser.description),/*#__PURE__*/index_js_.createElement("div",{className:"mt-5"},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/telegram.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(8129)}),/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/facebook.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(6009)}),/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/instagram.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(6641)}),/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/social/linkedin.png",formats:["auto"],alt:"@imarketer",className:"w-7 h-7 mr-2",__imageData:__webpack_require__(9317)}))))});/* harmony default export */ const author = (Author);
;// CONCATENATED MODULE: ./src/templates/single-post.js
const BlogPostTemplate=({data})=>{var x=data.wpPost.content;const time=1500;return/*#__PURE__*/index_js_default().createElement(layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(seo/* default */.Z,{title:data.wpPost.title,description:data.wpPost.excerpt}),/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-row"},/*#__PURE__*/index_js_default().createElement("div",{className:"basis-9/12"},/*#__PURE__*/index_js_default().createElement("div",{className:"content-page"},/*#__PURE__*/index_js_default().createElement("div",{className:"header-post max-w-3xl mx-auto"},/*#__PURE__*/index_js_default().createElement("div",{className:"meta mb-5"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex max-w-3xl"},/*#__PURE__*/index_js_default().createElement(gatsby_image/* default */.Z,{fluid:data.wpPost.categories.nodes[0].icat.caticon.localFile.childImageSharp.fluid,alt:"A corgi smiling happily",className:"h-6 w-6 object-cover rounded-full mr-3"}),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("h6",{className:"font-bold"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{key:data.wpPost.categories.nodes[0].id,to:`/${data.wpPost.categories.nodes[0].slug}`},data.wpPost.categories.nodes[0].name)," -",/*#__PURE__*/index_js_default().createElement("span",{className:"text-sm"}," ",data.wpPost.date," ")," -",/*#__PURE__*/index_js_default().createElement("span",{className:"text-sm"}," \u0427\u0438\u0442\u0430\u0442\u044C ",Math.round(x.length/time)," \u043C\u0438\u043D\u0443\u0442"))))),/*#__PURE__*/index_js_default().createElement("h1",null,data.wpPost.title),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{className:"rounded-lg imgpost mt-10",image:(0,gatsby_image_module/* getImage */.gJ)(data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData),alt:"{data.wpPost.title}"}),/*#__PURE__*/index_js_default().createElement("div",{className:"text-xl",dangerouslySetInnerHTML:{__html:data.wpPost.excerpt}}),/*#__PURE__*/index_js_default().createElement("div",{className:"content text-lg",dangerouslySetInnerHTML:{__html:data.wpPost.content}}),/*#__PURE__*/index_js_default().createElement("div",{className:"comments mt-10"},/*#__PURE__*/index_js_default().createElement(gatsby_plugin_disqus/* Disqus */.h$,{config:{url:data.wpPost.slug,identifier:data.wpPost.id,title:data.wpPost.title}})),/*#__PURE__*/index_js_default().createElement("div",null)))),/*#__PURE__*/index_js_default().createElement("div",{className:"basis-3/12 static"},/*#__PURE__*/index_js_default().createElement("div",{className:"fixed max-w-sm"},/*#__PURE__*/index_js_default().createElement(author,null),/*#__PURE__*/index_js_default().createElement(posts_sidebar/* default */.Z,null)))));};/* harmony default export */ const single_post = (BlogPostTemplate);const query="2285752089";

/***/ }),

/***/ 6009:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#384888","images":{"fallback":{"src":"/static/978b4ce6b38f362d097b84b3c955bd4d/bf8e1/facebook.png","srcSet":"/static/978b4ce6b38f362d097b84b3c955bd4d/914ee/facebook.png 32w,\\n/static/978b4ce6b38f362d097b84b3c955bd4d/1c9ce/facebook.png 64w,\\n/static/978b4ce6b38f362d097b84b3c955bd4d/bf8e1/facebook.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ }),

/***/ 9558:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/79d5aca6bf61f9982b29b5a972d4baac/bf8e1/notification.png","srcSet":"/static/79d5aca6bf61f9982b29b5a972d4baac/914ee/notification.png 32w,\\n/static/79d5aca6bf61f9982b29b5a972d4baac/1c9ce/notification.png 64w,\\n/static/79d5aca6bf61f9982b29b5a972d4baac/bf8e1/notification.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ }),

/***/ 9317:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#0868c8","images":{"fallback":{"src":"/static/80aba14d7915031796bf3b7ab721a231/bf8e1/linkedin.png","srcSet":"/static/80aba14d7915031796bf3b7ab721a231/914ee/linkedin.png 32w,\\n/static/80aba14d7915031796bf3b7ab721a231/1c9ce/linkedin.png 64w,\\n/static/80aba14d7915031796bf3b7ab721a231/bf8e1/linkedin.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ }),

/***/ 8129:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#28a8e8","images":{"fallback":{"src":"/static/eb5797d03e9f2ad0f563d079204a00a2/bf8e1/telegram.png","srcSet":"/static/eb5797d03e9f2ad0f563d079204a00a2/914ee/telegram.png 32w,\\n/static/eb5797d03e9f2ad0f563d079204a00a2/1c9ce/telegram.png 64w,\\n/static/eb5797d03e9f2ad0f563d079204a00a2/bf8e1/telegram.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/11ba6ed27b338a69a28574de31a4e311/bf8e1/home.png","srcSet":"/static/11ba6ed27b338a69a28574de31a4e311/914ee/home.png 32w,\\n/static/11ba6ed27b338a69a28574de31a4e311/1c9ce/home.png 64w,\\n/static/11ba6ed27b338a69a28574de31a4e311/bf8e1/home.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/cd07f6c6564bb8aa6d5d2da578d6ac36/bf8e1/instagram.png","srcSet":"/static/cd07f6c6564bb8aa6d5d2da578d6ac36/914ee/instagram.png 32w,\\n/static/cd07f6c6564bb8aa6d5d2da578d6ac36/1c9ce/instagram.png 64w,\\n/static/cd07f6c6564bb8aa6d5d2da578d6ac36/bf8e1/instagram.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ }),

/***/ 884:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/cc7900150aeefe15893195ac32a7e54a/299bc/iam.webp","srcSet":"/static/cc7900150aeefe15893195ac32a7e54a/4f7ad/iam.webp 18w,\\n/static/cc7900150aeefe15893195ac32a7e54a/dbb7e/iam.webp 35w,\\n/static/cc7900150aeefe15893195ac32a7e54a/299bc/iam.webp 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/cc7900150aeefe15893195ac32a7e54a/8b19b/iam.avif 18w,\\n/static/cc7900150aeefe15893195ac32a7e54a/85943/iam.avif 35w,\\n/static/cc7900150aeefe15893195ac32a7e54a/4be15/iam.avif 70w","type":"image/avif","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}');

/***/ }),

/***/ 9598:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/45a5c36476adbf2873b6c62ec4e525f6/bf8e1/telegram.png","srcSet":"/static/45a5c36476adbf2873b6c62ec4e525f6/914ee/telegram.png 32w,\\n/static/45a5c36476adbf2873b6c62ec4e525f6/1c9ce/telegram.png 64w,\\n/static/45a5c36476adbf2873b6c62ec4e525f6/bf8e1/telegram.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[]},"width":128,"height":128}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-single-post-js.js.map