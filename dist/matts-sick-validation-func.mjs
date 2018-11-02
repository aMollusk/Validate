var classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},ValidateBase=function(){function a(){var b=this,c=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};classCallCheck(this,a),this.test=function(a){return b.value=a,b.messages=[],b.negate=!1,b.isValid=!0,b},this.matches=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=a.value,d=a.regex,e=a.fn,f=a.min,g=a.max,h=a.message;c&&b.test(c);var i=d&&b.value.toString().match(d)||e&&e(b.value),j=b.isValid&&(f||g)?i&&!!((f?i.length>=f:i.length<=g)&&(g?i.length<=g:i.length>=f)):!!i;return b.isValid=b.isValid&&(b.negate?!j:j),b.negate&&j&&h&&b.messages.push(h)||!b.negate&&!j&&h&&b.messages.push(h),b},this.invert=function(a){for(var c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return b.negate=!0,b[a].apply(b,d),b.negate=!1,b},Object.keys(c).map(function(a){return b[a]=c[a]}),this.value="",this.messages=[],this.negate=!1,this.isValid=!1}return a}(),hasDigits=function(){return function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.value,c=a.min,d=a.max,e=a.message;return validate.matches({regex:/\d/g,min:c,max:d,message:e,value:b})}}(),hasUpperCase=function(){return function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.value,c=a.min,d=a.max,e=a.message;return validate.matches({regex:/[A-Z]/g,min:c,max:d,message:e,value:b})}}(),hasLowerCase=function(){return function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.value,c=a.min,d=a.max,e=a.message;return validate.matches({regex:/[a-z]/g,min:c,max:d,message:e,value:b})}}(),lengthBetween=function(){return function(a){var b=a.value,c=a.min,d=c===void 0?0:c,e=a.max,f=e===void 0?"":e,g=a.message;return validate.matches({regex:"^.{"+d+","+f+"}$",message:g,value:b})}}(),isAlphanumeric=function(){return function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.value,c=a.min,d=c===void 0?0:c,e=a.max,f=e===void 0?"":e,g=a.message;return validate.matches({regex:"^[a-zA-Z0-9]{"+d+","+f+"}$",message:g,value:b})}}(),isAlphabet=function(){return function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.value,c=a.min,d=c===void 0?0:c,e=a.max,f=e===void 0?"":e,g=a.message;return validate.matches({regex:"^[a-zA-Z]{"+d+","+f+"}$",message:g,value:b})}}(),isNumeric=function(){return function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.value,c=a.min,d=c===void 0?0:c,e=a.max,f=e===void 0?"":e,g=a.message;return validate.matches({regex:"^[0-9.,]{"+d+","+f+"}$",message:g,value:b})}}(),validate=new ValidateBase({hasDigits:hasDigits,hasUpperCase:hasUpperCase,hasLowerCase:hasLowerCase,isAlphanumeric:isAlphanumeric,isAlphabet:isAlphabet,isNumeric:isNumeric,lengthBetween:lengthBetween});export default validate;export{ValidateBase,hasDigits,hasUpperCase,hasLowerCase,lengthBetween,isAlphanumeric,isAlphabet,isNumeric};
