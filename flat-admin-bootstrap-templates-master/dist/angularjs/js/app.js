(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/core-js/object/assign.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/fn/object/assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/core-js/object/define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/fn/object/define-property.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/core-js/object/define-property.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/extends.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/core-js/object/assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/fn/object/assign.js":[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/es6.object.assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-index.js","./_to-iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-length.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_a-function.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js","./_is-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_export.js":[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js","./_ctx":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ctx.js","./_global":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_hide.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_property-desc.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_cof.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-assign.js":[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js","./_iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_iobject.js","./_object-gops":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-pie.js","./_to-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-gops.js":[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_array-includes.js","./_has":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared-key.js","./_to-iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_uid.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared.js":[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_defined.js","./_iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_iobject.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_defined.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/es6.object.assign.js":[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_export.js","./_object-assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_export":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_export.js","./_object-dp":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-dp.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.directives.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterDirective = RegisterDirective;

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegisterDirective() {
  angular.module(_config2.default["APP"]);
}

},{"./config":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.js":[function(require,module,exports){
'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _app = require('./app.route');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.directives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module(_config2.default["APP"], ['ui.router', 'ui.bootstrap', 'ui.select', 'angular-chartist', 'hljs', 'datatables', 'datatables.bootstrap', 'app.templates']).config(_app2.default);

/* register all directives */
(0, _app3.RegisterDirective)();

},{"./app.directives":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.directives.js","./app.route":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.route.js","./config":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.route.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state("main", {
    url: "/",
    controller: _controllers.AppController,
    controllerAs: "main",
    templateUrl: 'main.html',
    abstract: true
  }).state("main.dashboard", {
    url: "",
    controller: _controllers.DashboardController,
    controllerAs: "vm",
    templateUrl: 'pages/dashboard.html'
  }).state("main.messaging", {
    url: "messaging",
    controller: _controllers.MessageController,
    controllerAs: "vm",
    templateUrl: 'pages/message.html'
  }).state("main.uikits", {
    url: "uikits",
    abstract: true,
    templateUrl: 'pages/uikits/main.html'
  }).state("main.uikits.customize", {
    url: "/customize",
    templateUrl: 'pages/uikits/customize.html'
  }).state("main.uikits.components", {
    url: "/components",
    controller: _controllers.ComponentController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/components.html'
  }).state("main.uikits.form", {
    url: "/form",
    controller: _controllers.FormController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/form.html'
  }).state("main.uikits.card", {
    url: "/card",
    templateUrl: 'pages/uikits/card.html'
  }).state("main.uikits.table", {
    url: "/table",
    controller: _controllers.TableController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/table.html'
  }).state("main.uikits.pricing", {
    url: "/pricing",
    templateUrl: 'pages/uikits/pricing.html'
  }).state("main.uikits.timeline", {
    url: "/timeline",
    templateUrl: 'pages/uikits/timeline.html'
  }).state("main.uikits.chart", {
    url: "/chart",
    controller: _controllers.ChartController,
    controllerAs: 'vm',
    templateUrl: 'pages/uikits/chart.html'
  }).state("main.uikits.icons", {
    url: "/icons",
    templateUrl: 'pages/uikits/icons.html'
  }).state("main.pages", {
    url: "pages",
    abstract: true,
    templateUrl: 'pages/pages/main.html'
  }).state("main.pages.form", {
    url: "/form",
    controller: _controllers.FormController,
    controllerAs: "vm",
    templateUrl: 'pages/pages/form.html'
  }).state("main.pages.profile", {
    url: "/profile",
    templateUrl: 'pages/pages/profile.html'
  }).state("main.pages.search", {
    url: "/search",
    templateUrl: 'pages/pages/search.html'
  }).state("login", {
    url: "/login",
    controller: _controllers.LoginController,
    controllerAs: "vm",
    templateUrl: 'pages/pages/login.html'
  }).state("register", {
    url: "/register",
    templateUrl: 'pages/pages/register.html'
  });
  return $urlRouterProvider.otherwise('/');
};

var _controllers = require("./controllers");

module.exports = exports["default"];

},{"./controllers":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/index.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  APP: "app",
  TITLE: "<span class=\"highlight\">Flat v3</span> Admin",
  PAGE: {
    "main.dashboard": {
      menu: "dashboard",
      title: "Dashboard",
      class: ""
    },
    "main.messaging": {
      menu: "messaging",
      title: "Messaging",
      class: "app-full"
    },
    "main.uikits.customize": {
      menu: "uikits",
      title: "<span class='highlight'>Customize</span>",
      class: ""
    },
    "main.uikits.components": {
      menu: "uikits",
      title: "<span class='highlight'>Component</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.form": {
      menu: "uikits",
      title: "<span class='highlight'>Form</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.table": {
      menu: "uikits",
      title: "<span class='highlight'>Table</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.card": {
      menu: "uikits",
      title: "<span class='highlight'>Card</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.chart": {
      menu: "uikits",
      title: "<span class='highlight'>Chart</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.pricing": {
      menu: "uikits",
      title: "<span class='highlight'>Pricing</span>&nbsp;<span>Table</span>",
      class: ""
    },
    "main.pages.profile": {
      menu: "pages",
      title: "<span class='highlight'>Profile</span>",
      class: ""
    },
    "main.pages.form": {
      menu: "pages",
      title: "<span class='highlight'>Information</span>",
      class: ""
    },
    "main.pages.search": {
      menu: "pages",
      title: "<span class='highlight'>Search</span> Result",
      class: ""
    },
    "login": {
      class: "app-login"
    }
  }
};
module.exports = exports["default"];

},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/AppController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppController = function AppController($rootScope, $sce, $state) {
  var _this = this;

  (0, _classCallCheck3.default)(this, AppController);


  this.app = addAppConfig($sce, _config2.default);
  this.appendToApp = angular.element(document.querySelector('.app'));
  this.page = getPageConfig($sce, $state);
  this.toggle = {
    sidebar: false,
    navbar: false
  };
  this.theme = {
    current: "app-default"
  };

  /* url change event */
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    _this.page = getPageConfig($sce, $state);
  });
};

exports.default = AppController;


function getPageConfig($sce, $state) {
  var config = _config2.default["PAGE"][$state.current.name];
  return (0, _extends3.default)({}, config, {
    title: $sce.trustAsHtml(config.title)
  });
}

function addAppConfig($sce, CONFIG) {
  return {
    title: $sce.trustAsHtml(CONFIG["TITLE"])
  };
}
module.exports = exports['default'];

},{"../config":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/extends":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/extends.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/chart/ChartController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chart = require('../../utils/chart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartController = function ChartController() {
  var _this = this;

  (0, _classCallCheck3.default)(this, ChartController);

  this.lineChart = {
    data: {
      labels: [2015, 2016, 2017, 2018, 2019],
      series: [[7684, 8356, 9108, 7508, 6988], [2961, 4500, 6302, 2433, 3594]]
    },
    config: {
      showArea: true,
      fullWidth: true,
      lineSmooth: false
    }
  };

  this.biPolarChart = {
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1]]
    },
    config: {
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showLabel: false,
        showGrid: false
      }
    }
  };

  this.barChart = {
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    },
    config: {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    }
  };

  this.stackBarChart = {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [[800000, 1200000, 1400000, 1300000], [200000, 400000, 500000, 300000], [100000, 200000, 400000, 600000]]
    },
    config: {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      }
    }
  };

  this.pieChart = {
    data: {
      series: [5, 3, 4]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.pieChart.data.series.reduce(_chart.sum) * 100) + '%';
      }
    }
  };

  this.donutChart = {
    data: {
      series: [5, 3, 4]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.donutChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      donut: true,
      donutWidth: 60,
      labelPosition: 'outside'
    }
  };

  this.saleChart = {
    data: {
      labels: ["", "MicroSD 64Gb", "Flashdrive", "MiniPC i5", "Raspberry Pi2", ""],
      series: [[103560, 103560, 81008, 69808, 29601, 29601]]
    },
    config: {
      axisX: {
        position: 'center'
      },
      axisY: {
        offset: 0,
        showLabel: false,
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      },
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      height: 250,
      high: 120000,
      showArea: true,
      stackBars: true,
      fullWidth: true,
      lineSmooth: false,
      plugins: [Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return '$' + value.toFixed(2);
        }
      })]
    },
    responsive: [['screen and (max-width: 768px)', {
      axisX: {
        offset: 0,
        showLabel: false
      },
      height: 180
    }]]
  };
};

exports.default = ChartController;
module.exports = exports['default'];

},{"../../utils/chart":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/utils/chart.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ComponentController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ModalController = require('./ModalController');

var _ModalController2 = _interopRequireDefault(_ModalController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentController = function ComponentController($uibModal) {
  (0, _classCallCheck3.default)(this, ComponentController);


  this.pagination = {
    total: 64,
    page: 2
  };

  this.modal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'demoModal.html',
      controller: _ModalController2.default,
      controllerAs: 'md'
    });
  };
};

exports.default = ComponentController;
module.exports = exports['default'];

},{"./ModalController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ModalController.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ModalController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalController = function ModalController($uibModalInstance) {
  (0, _classCallCheck3.default)(this, ModalController);

  console.log("test");
  this.ok = function () {
    console.log("ok");
    $uibModalInstance.close();
  };

  this.cancel = function () {
    console.log("cancel");
    $uibModalInstance.dismiss('cancel');
  };
};

exports.default = ModalController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/dashboard/DashboardController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chart = require("../../utils/chart");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardController = function DashboardController($timeout) {
  var _this = this;

  (0, _classCallCheck3.default)(this, DashboardController);

  this.sales = {
    today: {
      title: "Sale Today",
      value: 420
    },
    like: {
      title: "Page Likes",
      value: 2340
    },
    registration: {
      title: "New Registration",
      value: 53
    }
  };

  this.saleChart = {
    data: {
      labels: ["10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30"],
      series: [[2710, 2810, 4210, 8010, 19158, 35326, 80837, 79477, 88561, 67807, 70837, 55261, 66216, 10516, 13493, 12000, 14253, 33506, 56326, 78986, 20747, 44165, 13817]]
    },
    config: {
      axisX: {
        position: 'center'
      },
      axisY: {
        offset: 0,
        showLabel: false,
        labelInterpolationFnc: function labelInterpolationFnc(value, index, labels) {
          return value / 1000 + 'k';
        }
      },
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      height: 250,
      high: 120000,
      showArea: true,
      stackBars: true,
      fullWidth: true,
      lineSmooth: false,
      plugins: [Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return '$' + value.toFixed(2);
        }
      })]
    },
    responsive: [['screen and (max-width: 768px)', {
      axisX: {
        offset: 0,
        showLabel: false
      },
      height: 180
    }]]
  };

  this.browserChart = {
    data: {
      series: [1000, 480, 705, 105, 50]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.browserChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      startAngle: 270,
      labelPosition: 'outside',
      labelOffset: -30
    }
  };

  this.osChart = {
    data: {
      series: [1300, 200, 605, 205, 100]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.osChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      startAngle: 0,
      donut: true,
      donutWidth: 20,
      labelPosition: 'outside',
      labelOffset: -30
    }
  };

  this.chartReload = function () {
    $timeout(function () {
      angular.element('chartist').each(function (i, elm) {
        elm.__chartist__.update();
      });
    }, 0);
  };
};

exports.default = DashboardController;
module.exports = exports["default"];

},{"../../utils/chart":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/utils/chart.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/form/FormController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormController = function FormController() {
  (0, _classCallCheck3.default)(this, FormController);

  this.select2 = {
    list: [{ name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' }, { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' }, { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' }, { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' }, { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' }, { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' }, { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' }, { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' }, { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' }, { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }],
    years: [1, 2, 3, 4, 5]
  };

  this.stackBarChart = {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [[800000, 1200000, 1400000, 1300000], [200000, 400000, 500000, 300000], [100000, 200000, 400000, 600000]]
    },
    config: {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      }
    }
  };
};

exports.default = FormController;
module.exports = exports['default'];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginController = exports.TableController = exports.FormController = exports.ComponentController = exports.ChartController = exports.MessageController = exports.DashboardController = exports.AppController = undefined;

var _AppController2 = require('./AppController');

var _AppController3 = _interopRequireDefault(_AppController2);

var _DashboardController2 = require('./dashboard/DashboardController');

var _DashboardController3 = _interopRequireDefault(_DashboardController2);

var _MessageController2 = require('./message/MessageController');

var _MessageController3 = _interopRequireDefault(_MessageController2);

var _ChartController2 = require('./chart/ChartController');

var _ChartController3 = _interopRequireDefault(_ChartController2);

var _ComponentController2 = require('./components/ComponentController');

var _ComponentController3 = _interopRequireDefault(_ComponentController2);

var _FormController2 = require('./form/FormController');

var _FormController3 = _interopRequireDefault(_FormController2);

var _TableController2 = require('./table/TableController');

var _TableController3 = _interopRequireDefault(_TableController2);

var _LoginController2 = require('./login/LoginController');

var _LoginController3 = _interopRequireDefault(_LoginController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AppController = _AppController3.default;
exports.DashboardController = _DashboardController3.default;
exports.MessageController = _MessageController3.default;
exports.ChartController = _ChartController3.default;
exports.ComponentController = _ComponentController3.default;
exports.FormController = _FormController3.default;
exports.TableController = _TableController3.default;
exports.LoginController = _LoginController3.default;

},{"./AppController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/AppController.js","./chart/ChartController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/chart/ChartController.js","./components/ComponentController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ComponentController.js","./dashboard/DashboardController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/dashboard/DashboardController.js","./form/FormController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/form/FormController.js","./login/LoginController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/login/LoginController.js","./message/MessageController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/message/MessageController.js","./table/TableController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/TableController.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/login/LoginController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginController = function () {
  function LoginController($timeout) {
    (0, _classCallCheck3.default)(this, LoginController);

    this.submit = this.submit.bind(this);
    this.$timeout = $timeout;

    this.status = {
      loading: false
    };
  }

  (0, _createClass3.default)(LoginController, [{
    key: "submit",
    value: function submit(username, password) {
      var _this = this;

      this.status.loading = true;
      this.$timeout(function () {
        _this.status.loading = false;
      }, 3000);
    }
  }]);
  return LoginController;
}();

exports.default = LoginController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/message/MessageController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageController = function MessageController() {
  (0, _classCallCheck3.default)(this, MessageController);
};

exports.default = MessageController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/TableController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableController = function TableController(DTOptionsBuilder, DTColumnBuilder, $q) {
  (0, _classCallCheck3.default)(this, TableController);


  this.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
    var defer = $q.defer();
    defer.resolve(_data.list);
    return defer.promise;
  }).withBootstrap().withOption('dom', '<"top"fl<"clear">>rt<"bottom"ip<"clear">>').withOption('oLanguage', {
    "sSearch": "",
    "sLengthMenu": "_MENU_"
  }).withOption('initComplete', function () {
    angular.element('.dataTables_filter input').attr('placeholder', 'Search ...');
  });

  this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID'), DTColumnBuilder.newColumn('firstName').withTitle('First name'), DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()];
};

exports.default = TableController;
module.exports = exports['default'];

},{"./data":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/data.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/data.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    list: [{
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 870,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 590,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 803,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 474,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 476,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 464,
        "firstName": "Cartman",
        "lastName": "Kyle"
    }, {
        "id": 505,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 308,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 184,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 411,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 154,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 623,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 499,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 482,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 255,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 772,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 398,
        "firstName": "Zed",
        "lastName": "Moliku"
    }, {
        "id": 840,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 894,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 591,
        "firstName": "Luke",
        "lastName": "Titi"
    }, {
        "id": 767,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 133,
        "firstName": "Cartman",
        "lastName": "Moliku"
    }, {
        "id": 274,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 996,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 780,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 931,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 326,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 318,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 434,
        "firstName": "Zed",
        "lastName": "Bar"
    }, {
        "id": 480,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 187,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 829,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 937,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 355,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 258,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 826,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 586,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 32,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 676,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 403,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 222,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 507,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 135,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 818,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 321,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 187,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 327,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 187,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 417,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 97,
        "firstName": "Zed",
        "lastName": "Bar"
    }, {
        "id": 710,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 975,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 926,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 976,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 680,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 275,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 742,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 598,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 113,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 228,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 820,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 700,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 556,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 687,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 794,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 349,
        "firstName": "Someone First Name",
        "lastName": "Whateveryournameis"
    }, {
        "id": 283,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 862,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 674,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 954,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 243,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 578,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 660,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 653,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 583,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 321,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 171,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 41,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 704,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 344,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 840,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 476,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 644,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 359,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 856,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 760,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 432,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 299,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 693,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 11,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 305,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 961,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 54,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 734,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 466,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 439,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 995,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 878,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 479,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 252,
        "firstName": "Cartman",
        "lastName": "Moliku"
    }, {
        "id": 355,
        "firstName": "Zed",
        "lastName": "Moliku"
    }, {
        "id": 355,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 694,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 882,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 620,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 390,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 247,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 510,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 510,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 472,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 533,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 725,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 221,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 302,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 755,
        "firstName": "Louis",
        "lastName": "Someone Last Name"
    }, {
        "id": 671,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 649,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 22,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 544,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 114,
        "firstName": "Someone First Name",
        "lastName": "Titi"
    }, {
        "id": 674,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 571,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 554,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 203,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 89,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 299,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 48,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 726,
        "firstName": "Batman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 121,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 992,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 551,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 831,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 940,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 974,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 579,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 752,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 873,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 939,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 240,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 969,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 247,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 3,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 154,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 274,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 31,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 789,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 634,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 972,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 199,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 562,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 460,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 817,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 307,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 10,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 167,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 107,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 432,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 381,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 517,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 575,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 716,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 646,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 144,
        "firstName": "Someone First Name",
        "lastName": "Yoda"
    }, {
        "id": 306,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 395,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 777,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 624,
        "firstName": "Louis",
        "lastName": "Someone Last Name"
    }, {
        "id": 994,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 653,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 198,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 157,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 955,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 339,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 552,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 735,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 294,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 287,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 399,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 741,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 670,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 260,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 294,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 294,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 840,
        "firstName": "Zed",
        "lastName": "Titi"
    }, {
        "id": 448,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 260,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 119,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 702,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 87,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 161,
        "firstName": "Foo",
        "lastName": "Lara"
    }, {
        "id": 404,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 871,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 908,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 484,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 966,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 392,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 738,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 560,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 507,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 660,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 929,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 42,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 853,
        "firstName": "Luke",
        "lastName": "Titi"
    }, {
        "id": 977,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 104,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 820,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 187,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 524,
        "firstName": "Louis",
        "lastName": "Yoda"
    }, {
        "id": 830,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 156,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 918,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 286,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 715,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 501,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 463,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 419,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 752,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 754,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 497,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 722,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 986,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 908,
        "firstName": "Someone First Name",
        "lastName": "Titi"
    }, {
        "id": 559,
        "firstName": "Superman",
        "lastName": "Bar"
    }, {
        "id": 816,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 517,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 188,
        "firstName": "Superman",
        "lastName": "Bar"
    }, {
        "id": 762,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 872,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 107,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 968,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 643,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 88,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 844,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 334,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 43,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 600,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 719,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 698,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 994,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 595,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 223,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 392,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 972,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 155,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 956,
        "firstName": "Louis",
        "lastName": "Yoda"
    }, {
        "id": 62,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 689,
        "firstName": "Superman",
        "lastName": "Titi"
    }, {
        "id": 46,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 401,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 658,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 375,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 877,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 923,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 37,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 416,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 546,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 282,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 943,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 319,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 390,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 556,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 255,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 80,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 760,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 291,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 916,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 212,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 445,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 101,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 565,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 304,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 557,
        "firstName": "Foo",
        "lastName": "Titi"
    }, {
        "id": 544,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 244,
        "firstName": "Zed",
        "lastName": "Titi"
    }, {
        "id": 464,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 225,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 727,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 735,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 334,
        "firstName": "Foo",
        "lastName": "Lara"
    }, {
        "id": 982,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 48,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 175,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 885,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 675,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 47,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 105,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 616,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 134,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 26,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 134,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 680,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 208,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 233,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 131,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 87,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 356,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 39,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 867,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 382,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }]
};
module.exports = exports["default"];

},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/utils/chart.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = exports.sum = function sum(a, b) {
  return a + b;
};

},{}]},{},["/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2FwcC5kaXJlY3RpdmVzLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9hcHAuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2FwcC5yb3V0ZS5qcyIsInNyYy9hbmd1bGFyanMvanMvY29uZmlnLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9jaGFydC9DaGFydENvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL2NvbXBvbmVudHMvQ29tcG9uZW50Q29udHJvbGxlci5qcyIsInNyYy9hbmd1bGFyanMvanMvY29udHJvbGxlcnMvY29tcG9uZW50cy9Nb2RhbENvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL2Rhc2hib2FyZC9EYXNoYm9hcmRDb250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9mb3JtL0Zvcm1Db250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9pbmRleC5qcyIsInNyYy9hbmd1bGFyanMvanMvY29udHJvbGxlcnMvbG9naW4vTG9naW5Db250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy90YWJsZS9UYWJsZUNvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL3RhYmxlL2RhdGEuanMiLCJzcmMvYW5ndWxhcmpzL2pzL3V0aWxzL2NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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YSxLQUZkO0FBR0Msb0JBQVk7QUFIYixLQTVvQ0ssRUFncENMO0FBQ0MsY0FBTSxHQURQO0FBRUMscUJBQWEsTUFGZDtBQUdDLG9CQUFZO0FBSGIsS0FocENLLEVBb3BDTDtBQUNDLGNBQU0sR0FEUDtBQUVDLHFCQUFhLG9CQUZkO0FBR0Msb0JBQVk7QUFIYixLQXBwQ0ssRUF3cENMO0FBQ0MsY0FBTSxHQURQO0FBRUMscUJBQWEsT0FGZDtBQUdDLG9CQUFZO0FBSGIsS0F4cENLLEVBNHBDTDtBQUNDLGNBQU0sRUFEUDtBQUVDLHFCQUFhLE1BRmQ7QUFHQyxvQkFBWTtBQUhiLEtBNXBDSyxFQWdxQ0w7QUFDQyxjQUFNLEdBRFA7QUFFQyxxQkFBYSxRQUZkO0FBR0Msb0JBQVk7QUFIYixLQWhxQ0ssRUFvcUNMO0FBQ0MsY0FBTSxFQURQO0FBRUMscUJBQWEsT0FGZDtBQUdDLG9CQUFZO0FBSGIsS0FwcUNLLEVBd3FDTDtBQUNDLGNBQU0sR0FEUDtBQUVDLHFCQUFhLFFBRmQ7QUFHQyxvQkFBWTtBQUhiLEtBeHFDSyxFQTRxQ0w7QUFDQyxjQUFNLEdBRFA7QUFFQyxxQkFBYSxvQkFGZDtBQUdDLG9CQUFZO0FBSGIsS0E1cUNLO0FBRE8sQzs7Ozs7Ozs7O0FDQVIsSUFBTSxvQkFBTSxTQUFOLEdBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQUUsU0FBTyxJQUFJLENBQVg7QUFBYyxDQUF0QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG5tb2R1bGUuZXhwb3J0cyA9IChcclxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xyXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XHJcbn0pOyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XHJcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVzdWx0ID0gW11cclxuICAgICwga2V5O1xyXG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xyXG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XHJcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXHJcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJEaXJlY3RpdmUoKSB7ICBcbiAgYW5ndWxhci5tb2R1bGUoQ09ORklHW1wiQVBQXCJdKVxufSIsImltcG9ydCBDT05GSUcgZnJvbSAnLi9jb25maWcnIFxuaW1wb3J0IHJvdXRlIGZyb20gJy4vYXBwLnJvdXRlJ1xuaW1wb3J0IHsgUmVnaXN0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2FwcC5kaXJlY3RpdmVzJ1xuXG5hbmd1bGFyLm1vZHVsZShDT05GSUdbXCJBUFBcIl0sIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAndWkuc2VsZWN0JyxcbiAgICAnYW5ndWxhci1jaGFydGlzdCcsXG4gICAgJ2hsanMnLFxuICAgICdkYXRhdGFibGVzJyxcbiAgICAnZGF0YXRhYmxlcy5ib290c3RyYXAnLFxuICAgICdhcHAudGVtcGxhdGVzJ1xuICBdKVxuICAuY29uZmlnKHJvdXRlKVxuXG4vKiByZWdpc3RlciBhbGwgZGlyZWN0aXZlcyAqL1xuUmVnaXN0ZXJEaXJlY3RpdmUoKSIsImltcG9ydCB7XG4gIEFwcENvbnRyb2xsZXIsXG4gIERhc2hib2FyZENvbnRyb2xsZXIsXG4gIE1lc3NhZ2VDb250cm9sbGVyLFxuICBDaGFydENvbnRyb2xsZXIsXG4gIENvbXBvbmVudENvbnRyb2xsZXIsXG4gIEZvcm1Db250cm9sbGVyLFxuICBUYWJsZUNvbnRyb2xsZXIsXG4gIExvZ2luQ29udHJvbGxlclxufSBmcm9tICcuL2NvbnRyb2xsZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICBcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoXCJtYWluXCIsIHtcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBjb250cm9sbGVyOiBBcHBDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiBcIm1haW5cIixcbiAgICAgIHRlbXBsYXRlVXJsOiAnbWFpbi5odG1sJyxcbiAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLmRhc2hib2FyZFwiLCB7XG4gICAgICB1cmw6IFwiXCIsXG4gICAgICBjb250cm9sbGVyOiBEYXNoYm9hcmRDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiBcInZtXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2Rhc2hib2FyZC5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi5tZXNzYWdpbmdcIiwge1xuICAgICAgdXJsOiBcIm1lc3NhZ2luZ1wiLFxuICAgICAgY29udHJvbGxlcjogTWVzc2FnZUNvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVzc2FnZS5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHNcIiwge1xuICAgICAgdXJsOiBcInVpa2l0c1wiLFxuICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy9tYWluLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jdXN0b21pemVcIiwge1xuICAgICAgdXJsOiBcIi9jdXN0b21pemVcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2N1c3RvbWl6ZS5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuY29tcG9uZW50c1wiLCB7XG4gICAgICB1cmw6IFwiL2NvbXBvbmVudHNcIixcbiAgICAgIGNvbnRyb2xsZXI6IENvbXBvbmVudENvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2NvbXBvbmVudHMuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4udWlraXRzLmZvcm1cIiwge1xuICAgICAgdXJsOiBcIi9mb3JtXCIsXG4gICAgICBjb250cm9sbGVyOiBGb3JtQ29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvZm9ybS5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuY2FyZFwiLCB7XG4gICAgICB1cmw6IFwiL2NhcmRcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2NhcmQuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4udWlraXRzLnRhYmxlXCIsIHtcbiAgICAgIHVybDogXCIvdGFibGVcIixcbiAgICAgIGNvbnRyb2xsZXI6IFRhYmxlQ29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvdGFibGUuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4udWlraXRzLnByaWNpbmdcIiwge1xuICAgICAgdXJsOiBcIi9wcmljaW5nXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy9wcmljaW5nLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy50aW1lbGluZVwiLCB7XG4gICAgICB1cmw6IFwiL3RpbWVsaW5lXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy90aW1lbGluZS5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuY2hhcnRcIiwge1xuICAgICAgdXJsOiBcIi9jaGFydFwiLFxuICAgICAgY29udHJvbGxlcjogQ2hhcnRDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvY2hhcnQuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4udWlraXRzLmljb25zXCIsIHtcbiAgICAgIHVybDogXCIvaWNvbnNcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2ljb25zLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnBhZ2VzXCIsIHtcbiAgICAgIHVybDogXCJwYWdlc1wiLFxuICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3BhZ2VzL21haW4uaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4ucGFnZXMuZm9ybVwiLCB7XG4gICAgICB1cmw6IFwiL2Zvcm1cIixcbiAgICAgIGNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiBcInZtXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3BhZ2VzL2Zvcm0uaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4ucGFnZXMucHJvZmlsZVwiLCB7XG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGFnZXMvcHJvZmlsZS5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi5wYWdlcy5zZWFyY2hcIiwge1xuICAgICAgdXJsOiBcIi9zZWFyY2hcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGFnZXMvc2VhcmNoLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJsb2dpblwiLCB7XG4gICAgICB1cmw6IFwiL2xvZ2luXCIsXG4gICAgICBjb250cm9sbGVyOiBMb2dpbkNvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGFnZXMvbG9naW4uaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcInJlZ2lzdGVyXCIsIHtcbiAgICAgIHVybDogXCIvcmVnaXN0ZXJcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGFnZXMvcmVnaXN0ZXIuaHRtbCdcbiAgICB9KVxuICByZXR1cm4gJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBBUFA6IFwiYXBwXCIsXG4gIFRJVExFOiBcIjxzcGFuIGNsYXNzPVxcXCJoaWdobGlnaHRcXFwiPkZsYXQgdjM8L3NwYW4+IEFkbWluXCIsXG4gIFBBR0U6IHtcbiAgICBcIm1haW4uZGFzaGJvYXJkXCI6IHtcbiAgICAgIG1lbnU6IFwiZGFzaGJvYXJkXCIsXG4gICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4ubWVzc2FnaW5nXCI6IHtcbiAgICAgIG1lbnU6IFwibWVzc2FnaW5nXCIsXG4gICAgICB0aXRsZTogXCJNZXNzYWdpbmdcIixcbiAgICAgIGNsYXNzOiBcImFwcC1mdWxsXCJcbiAgICB9LFxuICAgIFwibWFpbi51aWtpdHMuY3VzdG9taXplXCI6IHtcbiAgICAgIG1lbnU6IFwidWlraXRzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5DdXN0b21pemU8L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnVpa2l0cy5jb21wb25lbnRzXCI6IHtcbiAgICAgIG1lbnU6IFwidWlraXRzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5Db21wb25lbnQ8L3NwYW4+Jm5ic3A7PHNwYW4+S2l0czwvc3Bhbj5cIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4udWlraXRzLmZvcm1cIjoge1xuICAgICAgbWVudTogXCJ1aWtpdHNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPkZvcm08L3NwYW4+Jm5ic3A7PHNwYW4+S2l0czwvc3Bhbj5cIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4udWlraXRzLnRhYmxlXCI6IHtcbiAgICAgIG1lbnU6IFwidWlraXRzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5UYWJsZTwvc3Bhbj4mbmJzcDs8c3Bhbj5LaXRzPC9zcGFuPlwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibWFpbi51aWtpdHMuY2FyZFwiOiB7XG4gICAgICBtZW51OiBcInVpa2l0c1wiLFxuICAgICAgdGl0bGU6IFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+Q2FyZDwvc3Bhbj4mbmJzcDs8c3Bhbj5LaXRzPC9zcGFuPlwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibWFpbi51aWtpdHMuY2hhcnRcIjoge1xuICAgICAgbWVudTogXCJ1aWtpdHNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPkNoYXJ0PC9zcGFuPiZuYnNwOzxzcGFuPktpdHM8L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnVpa2l0cy5wcmljaW5nXCI6IHtcbiAgICAgIG1lbnU6IFwidWlraXRzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5QcmljaW5nPC9zcGFuPiZuYnNwOzxzcGFuPlRhYmxlPC9zcGFuPlwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibWFpbi5wYWdlcy5wcm9maWxlXCI6IHtcbiAgICAgIG1lbnU6IFwicGFnZXNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlByb2ZpbGU8L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnBhZ2VzLmZvcm1cIjoge1xuICAgICAgbWVudTogXCJwYWdlc1wiLFxuICAgICAgdGl0bGU6IFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+SW5mb3JtYXRpb248L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnBhZ2VzLnNlYXJjaFwiOiB7XG4gICAgICBtZW51OiBcInBhZ2VzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5TZWFyY2g8L3NwYW4+IFJlc3VsdFwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibG9naW5cIjoge1xuICAgICAgY2xhc3M6IFwiYXBwLWxvZ2luXCJcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZycgXG5cbmNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkc2NlLCAkc3RhdGUpIHtcblxuICAgIHRoaXMuYXBwID0gYWRkQXBwQ29uZmlnKCRzY2UsIENPTkZJRylcbiAgICB0aGlzLmFwcGVuZFRvQXBwID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKSk7XG4gICAgdGhpcy5wYWdlID0gZ2V0UGFnZUNvbmZpZygkc2NlLCAkc3RhdGUpXG4gICAgdGhpcy50b2dnbGUgPSB7XG4gICAgICBzaWRlYmFyOiBmYWxzZSxcbiAgICAgIG5hdmJhcjogZmFsc2VcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IHtcbiAgICAgIGN1cnJlbnQ6IFwiYXBwLWRlZmF1bHRcIlxuICAgIH1cblxuICAgIC8qIHVybCBjaGFuZ2UgZXZlbnQgKi9cbiAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5wYWdlID0gZ2V0UGFnZUNvbmZpZygkc2NlLCAkc3RhdGUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyXG5cbmZ1bmN0aW9uIGdldFBhZ2VDb25maWcoJHNjZSwgJHN0YXRlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IENPTkZJR1tcIlBBR0VcIl1bJHN0YXRlLmN1cnJlbnQubmFtZV1cbiAgcmV0dXJuIHtcbiAgICAuLi5jb25maWcsXG4gICAgdGl0bGU6ICRzY2UudHJ1c3RBc0h0bWwoY29uZmlnLnRpdGxlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEFwcENvbmZpZygkc2NlLCBDT05GSUcpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJHNjZS50cnVzdEFzSHRtbChDT05GSUdbXCJUSVRMRVwiXSlcbiAgfVxufSIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0J1xuXG5jbGFzcyBDaGFydENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpbmVDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbMjAxNSwgMjAxNiwgMjAxNywgMjAxOCwgMjAxOV0sXG4gICAgICAgIHNlcmllczogW1xuICAgICAgICAgIFs3Njg0LDgzNTYsOTEwOCw3NTA4LDY5ODhdLFxuICAgICAgICAgIFsyOTYxLDQ1MDAsNjMwMiwyNDMzLDM1OTRdLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBzaG93QXJlYTogdHJ1ZSxcbiAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICBsaW5lU21vb3RoOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmlQb2xhckNoYXJ0ID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSxcbiAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgWzEsIDIsIDMsIDEsIC0yLCAwLCAxLCAwXSxcbiAgICAgICAgICBbLTIsIC0xLCAtMiwgLTEsIC0yLjUsIC0xLCAtMiwgLTFdLFxuICAgICAgICAgIFswLCAwLCAwLCAxLCAyLCAyLjUsIDIsIDFdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgaGlnaDogMyxcbiAgICAgICAgbG93OiAtMyxcbiAgICAgICAgc2hvd0FyZWE6IHRydWUsXG4gICAgICAgIHNob3dMaW5lOiBmYWxzZSxcbiAgICAgICAgc2hvd1BvaW50OiBmYWxzZSxcbiAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICBheGlzWDoge1xuICAgICAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICAgICAgc2hvd0dyaWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHRoaXMuYmFyQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJ10sXG4gICAgICAgIHNlcmllczogW1xuICAgICAgICAgIFsxMiwgOSwgNywgOCwgNV0sXG4gICAgICAgICAgWzIsIDEsIDMuNSwgNywgM10sXG4gICAgICAgICAgWzEsIDMsIDQsIDUsIDZdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICBjaGFydFBhZGRpbmc6IHtcbiAgICAgICAgICByaWdodDogNDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgdGhpcy5zdGFja0JhckNoYXJ0ID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgWzgwMDAwMCwgMTIwMDAwMCwgMTQwMDAwMCwgMTMwMDAwMF0sXG4gICAgICAgICAgWzIwMDAwMCwgNDAwMDAwLCA1MDAwMDAsIDMwMDAwMF0sXG4gICAgICAgICAgWzEwMDAwMCwgMjAwMDAwLCA0MDAwMDAsIDYwMDAwMF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBzdGFja0JhcnM6IHRydWUsXG4gICAgICAgIGF4aXNZOiB7XG4gICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAvIDEwMDApICsgJ2snO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGllQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlcmllczogWzUsIDMsIDRdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0aGlzLnBpZUNoYXJ0LmRhdGEuc2VyaWVzLnJlZHVjZShzdW0pICogMTAwKSArICclJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZG9udXRDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VyaWVzOiBbNSwgMywgNF1cbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiAodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMuZG9udXRDaGFydC5kYXRhLnNlcmllcy5yZWR1Y2Uoc3VtKSAqIDEwMCkgKyAnJSc7XG4gICAgICAgIH0sXG4gICAgICAgIGRvbnV0OiB0cnVlLFxuICAgICAgICBkb251dFdpZHRoOiA2MCxcbiAgICAgICAgbGFiZWxQb3NpdGlvbjogJ291dHNpZGUnXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICB0aGlzLnNhbGVDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXCJcIixcIk1pY3JvU0QgNjRHYlwiLFwiRmxhc2hkcml2ZVwiLCBcIk1pbmlQQyBpNVwiLCBcIlJhc3BiZXJyeSBQaTJcIixcIlwiXSxcbiAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgWzEwMzU2MCwxMDM1NjAsODEwMDgsNjk4MDgsIDI5NjAxLDI5NjAxXSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBheGlzWDoge1xuICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICBheGlzWToge1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyAxMDAwKSArICdrJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYXJ0UGFkZGluZzoge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgaGlnaDogMTIwMDAwLFxuICAgICAgICBzaG93QXJlYTogdHJ1ZSxcbiAgICAgICAgc3RhY2tCYXJzOiB0cnVlLFxuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgIGxpbmVTbW9vdGg6IGZhbHNlLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgQ2hhcnRpc3QucGx1Z2lucy5jdFBvaW50TGFiZWxzKHtcbiAgICAgICAgICAgIHRleHRBbmNob3I6ICdsZWZ0JyxcbiAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICckJyArIHZhbHVlLnRvRml4ZWQoMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICBbJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJywge1xuICAgICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWlnaHQ6IDE4MFxuICAgICAgICB9XVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbnRyb2xsZXI7IiwiaW1wb3J0IE1vZGFsQ29udHJvbGxlciBmcm9tICcuL01vZGFsQ29udHJvbGxlcidcblxuY2xhc3MgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCR1aWJNb2RhbCkge1xuXG4gICAgdGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IDY0LFxuICAgICAgcGFnZTogMlxuICAgIH1cblxuICAgIHRoaXMubW9kYWwgPSAoKSA9PiB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKHtcbiAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2RlbW9Nb2RhbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdtZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudENvbnRyb2xsZXIiLCJcbmNsYXNzIE1vZGFsQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCR1aWJNb2RhbEluc3RhbmNlKSB7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpXG4gICAgdGhpcy5vayA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwib2tcIilcbiAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XG4gICAgfTtcblxuICAgIHRoaXMuY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjYW5jZWxcIilcbiAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb250cm9sbGVyOyIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0J1xuXG5jbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICB0aGlzLnNhbGVzID0ge1xuICAgICAgdG9kYXk6IHtcbiAgICAgICAgdGl0bGU6IFwiU2FsZSBUb2RheVwiLFxuICAgICAgICB2YWx1ZTogNDIwXG4gICAgICB9LFxuICAgICAgbGlrZToge1xuICAgICAgICB0aXRsZTogXCJQYWdlIExpa2VzXCIsXG4gICAgICAgIHZhbHVlOiAyMzQwXG4gICAgICB9LFxuICAgICAgcmVnaXN0cmF0aW9uOiB7XG4gICAgICAgIHRpdGxlOiBcIk5ldyBSZWdpc3RyYXRpb25cIixcbiAgICAgICAgdmFsdWU6IDUzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zYWxlQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1wiMTA6MjBcIiwgXCIxMDozMFwiLCBcIjEwOjQwXCIsIFwiMTA6NTBcIiwgXCIxMTowMFwiLCBcIjExOjEwXCIsIFwiMTE6MjBcIiwgXCIxMTozMFwiLCBcIjExOjQwXCIsIFwiMTE6NTBcIiwgXCIxMjowMFwiLCBcIjEyOjEwXCIsIFwiMTI6MjBcIiwgXCIxMjozMFwiLCBcIjEyOjQwXCIsIFwiMTI6NTBcIiwgXCIxMzowMFwiLCBcIjEzOjEwXCIsIFwiMTM6MjBcIiwgXCIxMzozMFwiXSxcbiAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgWzI3MTAgLDI4MTAgLDQyMTAgLDgwMTAgLDE5MTU4ICwzNTMyNiAsODA4MzcgLDc5NDc3ICw4ODU2MSAsNjc4MDcgLDcwODM3ICw1NTI2MSAsNjYyMTYgLDEwNTE2ICwxMzQ5MyAsMTIwMDAgLDE0MjUzICwzMzUwNiAsNTYzMjYgLDc4OTg2ICwyMDc0NyAsNDQxNjUgLDEzODE3XSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBheGlzWDoge1xuICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICBheGlzWToge1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsYWJlbHMpIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyAxMDAwKSArICdrJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYXJ0UGFkZGluZzoge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgaGlnaDogMTIwMDAwLFxuICAgICAgICBzaG93QXJlYTogdHJ1ZSxcbiAgICAgICAgc3RhY2tCYXJzOiB0cnVlLFxuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgIGxpbmVTbW9vdGg6IGZhbHNlLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgQ2hhcnRpc3QucGx1Z2lucy5jdFBvaW50TGFiZWxzKHtcbiAgICAgICAgICAgIHRleHRBbmNob3I6ICdsZWZ0JyxcbiAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICckJyArIHZhbHVlLnRvRml4ZWQoMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICBbJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJywge1xuICAgICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWlnaHQ6IDE4MFxuICAgICAgICB9XVxuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuYnJvd3NlckNoYXJ0ID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBzZXJpZXM6IFsxMDAwLCA0ODAsIDcwNSwgMTA1LCA1MF1cbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiAodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMuYnJvd3NlckNoYXJ0LmRhdGEuc2VyaWVzLnJlZHVjZShzdW0pICogMTAwKSArICclJztcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRBbmdsZTogMjcwLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiAnb3V0c2lkZScsXG4gICAgICAgIGxhYmVsT2Zmc2V0OiAtMzBcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9zQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlcmllczogWzEzMDAsIDIwMCwgNjA1LCAyMDUsIDEwMF1cbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiAodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMub3NDaGFydC5kYXRhLnNlcmllcy5yZWR1Y2Uoc3VtKSAqIDEwMCkgKyAnJSc7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgICAgIGRvbnV0OiB0cnVlLFxuICAgICAgICBkb251dFdpZHRoOiAyMCxcbiAgICAgICAgbGFiZWxQb3NpdGlvbjogJ291dHNpZGUnLFxuICAgICAgICBsYWJlbE9mZnNldDogLTMwXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydFJlbG9hZCA9ICgpID0+IHtcbiAgICAgICR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCdjaGFydGlzdCcpLmVhY2goZnVuY3Rpb24oaSwgZWxtKSB7XG4gICAgICAgICAgZWxtLl9fY2hhcnRpc3RfXy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQ29udHJvbGxlciIsImNsYXNzIEZvcm1Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWxlY3QyID0ge1xuICAgICAgbGlzdDogW1xuICAgICAgICB7IG5hbWU6ICdBZGFtJywgICAgICBlbWFpbDogJ2FkYW1AZW1haWwuY29tJywgICAgICBhZ2U6IDEyLCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycgfSxcbiAgICAgICAgeyBuYW1lOiAnQW1hbGllJywgICAgZW1haWw6ICdhbWFsaWVAZW1haWwuY29tJywgICAgYWdlOiAxMiwgY291bnRyeTogJ0FyZ2VudGluYScgfSxcbiAgICAgICAgeyBuYW1lOiAnRXN0ZWZhbsOtYScsIGVtYWlsOiAnZXN0ZWZhbmlhQGVtYWlsLmNvbScsIGFnZTogMjEsIGNvdW50cnk6ICdBcmdlbnRpbmEnIH0sXG4gICAgICAgIHsgbmFtZTogJ0FkcmlhbicsICAgIGVtYWlsOiAnYWRyaWFuQGVtYWlsLmNvbScsICAgIGFnZTogMjEsIGNvdW50cnk6ICdFY3VhZG9yJyB9LFxuICAgICAgICB7IG5hbWU6ICdXbGFkaW1pcicsICBlbWFpbDogJ3dsYWRpbWlyQGVtYWlsLmNvbScsICBhZ2U6IDMwLCBjb3VudHJ5OiAnRWN1YWRvcicgfSxcbiAgICAgICAgeyBuYW1lOiAnU2FtYW50aGEnLCAgZW1haWw6ICdzYW1hbnRoYUBlbWFpbC5jb20nLCAgYWdlOiAzMCwgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnIH0sXG4gICAgICAgIHsgbmFtZTogJ05pY29sZScsICAgIGVtYWlsOiAnbmljb2xlQGVtYWlsLmNvbScsICAgIGFnZTogNDMsIGNvdW50cnk6ICdDb2xvbWJpYScgfSxcbiAgICAgICAgeyBuYW1lOiAnTmF0YXNoYScsICAgZW1haWw6ICduYXRhc2hhQGVtYWlsLmNvbScsICAgYWdlOiA1NCwgY291bnRyeTogJ0VjdWFkb3InIH0sXG4gICAgICAgIHsgbmFtZTogJ01pY2hhZWwnLCAgIGVtYWlsOiAnbWljaGFlbEBlbWFpbC5jb20nLCAgIGFnZTogMTUsIGNvdW50cnk6ICdDb2xvbWJpYScgfSxcbiAgICAgICAgeyBuYW1lOiAnTmljb2zDoXMnLCAgIGVtYWlsOiAnbmljb2xlQGVtYWlsLmNvbScsICAgIGFnZTogNDMsIGNvdW50cnk6ICdDb2xvbWJpYScgfVxuICAgICAgXSxcbiAgICAgIHllYXJzOiBbMSwyLDMsNCw1XVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnN0YWNrQmFyQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICBbODAwMDAwLCAxMjAwMDAwLCAxNDAwMDAwLCAxMzAwMDAwXSxcbiAgICAgICAgICBbMjAwMDAwLCA0MDAwMDAsIDUwMDAwMCwgMzAwMDAwXSxcbiAgICAgICAgICBbMTAwMDAwLCAyMDAwMDAsIDQwMDAwMCwgNjAwMDAwXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHN0YWNrQmFyczogdHJ1ZSxcbiAgICAgICAgYXhpc1k6IHtcbiAgICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTAwMCkgKyAnayc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sbGVyIiwiZXhwb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi9BcHBDb250cm9sbGVyJztcbmV4cG9ydCBEYXNoYm9hcmRDb250cm9sbGVyIGZyb20gJy4vZGFzaGJvYXJkL0Rhc2hib2FyZENvbnRyb2xsZXInO1xuZXhwb3J0IE1lc3NhZ2VDb250cm9sbGVyIGZyb20gJy4vbWVzc2FnZS9NZXNzYWdlQ29udHJvbGxlcic7XG5leHBvcnQgQ2hhcnRDb250cm9sbGVyIGZyb20gJy4vY2hhcnQvQ2hhcnRDb250cm9sbGVyJztcbmV4cG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnRDb250cm9sbGVyJztcbmV4cG9ydCBGb3JtQ29udHJvbGxlciBmcm9tICcuL2Zvcm0vRm9ybUNvbnRyb2xsZXInO1xuZXhwb3J0IFRhYmxlQ29udHJvbGxlciBmcm9tICcuL3RhYmxlL1RhYmxlQ29udHJvbGxlcic7XG5leHBvcnQgTG9naW5Db250cm9sbGVyIGZyb20gJy4vbG9naW4vTG9naW5Db250cm9sbGVyJzsiLCJjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dFxuXG4gICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICB0aGlzLnN0YXR1cy5sb2FkaW5nID0gdHJ1ZVxuICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0dXMubG9hZGluZyA9IGZhbHNlXG4gICAgfSwgMzAwMClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXIiLCJjbGFzcyBNZXNzYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb250cm9sbGVyIiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4vZGF0YSdcblxuY2xhc3MgVGFibGVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoRFRPcHRpb25zQnVpbGRlciwgRFRDb2x1bW5CdWlsZGVyLCAkcSkge1xuXG4gICAgdGhpcy5kdE9wdGlvbnMgPSBEVE9wdGlvbnNCdWlsZGVyLmZyb21GblByb21pc2UoKCkgPT4ge1xuICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xuICAgICAgICBkZWZlci5yZXNvbHZlKGxpc3QpO1xuICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgICAgIH0pXG4gICAgICAud2l0aEJvb3RzdHJhcCgpXG4gICAgICAud2l0aE9wdGlvbignZG9tJywnPFwidG9wXCJmbDxcImNsZWFyXCI+PnJ0PFwiYm90dG9tXCJpcDxcImNsZWFyXCI+PicpXG4gICAgICAud2l0aE9wdGlvbignb0xhbmd1YWdlJywge1xuICAgICAgICBcInNTZWFyY2hcIjogXCJcIixcbiAgICAgICAgXCJzTGVuZ3RoTWVudVwiOiBcIl9NRU5VX1wiXG4gICAgICB9KVxuICAgICAgLndpdGhPcHRpb24oJ2luaXRDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJy5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCAuLi4nKTtcbiAgICAgIH0pXG5cbiAgICB0aGlzLmR0Q29sdW1ucyA9IFtcbiAgICAgICAgRFRDb2x1bW5CdWlsZGVyLm5ld0NvbHVtbignaWQnKS53aXRoVGl0bGUoJ0lEJyksXG4gICAgICAgIERUQ29sdW1uQnVpbGRlci5uZXdDb2x1bW4oJ2ZpcnN0TmFtZScpLndpdGhUaXRsZSgnRmlyc3QgbmFtZScpLFxuICAgICAgICBEVENvbHVtbkJ1aWxkZXIubmV3Q29sdW1uKCdsYXN0TmFtZScpLndpdGhUaXRsZSgnTGFzdCBuYW1lJykubm90VmlzaWJsZSgpXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRyb2xsZXIiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxpc3Q6IFt7XG4gICAgXCJpZFwiOiA4NjAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDg3MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNTkwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDgwMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA0NzYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NjQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNTA1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMDgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDE4NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDQxMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAxNTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA2MjMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDQ5OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ4MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDI1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzcyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAzOTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDg0MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogODk0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNTkxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDc2NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDEzMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDI3NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5OTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3ODAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA5MzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDMyNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAzMTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDQzNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNDgwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDE4NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogODI5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogOTM3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDM1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMjU4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA4MjYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNTg2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDMyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNjc2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNDAzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDIyMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNTA3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDEzNSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA4MTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMjEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMTg3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMjcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAxODcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDQxNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogOTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDcxMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk3NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5MjYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDk3NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA2ODAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiAyNzUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDc0MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1OTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAxMTMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDIyOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDgyMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDcwMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogNTU2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDY4NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDc5NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNDksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDI4MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NjIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNjc0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogOTU0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAyNDMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NzgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDY2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNjUzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNTgzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMzIxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogMTcxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNzA0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDg0MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ3NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDY0NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogODU2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDc2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0MzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAyOTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDY5MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMzA1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk2MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDczNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNDY2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDQzOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTk1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NzgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA0NzksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogMjUyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMzU1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA2OTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogODgyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDYyMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzOTAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDI0NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDUxMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNTEwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNDcyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MzMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MjUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDIyMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDMwMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA3NTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NDksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMjIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNTQ0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAxMTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDIwMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDg5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMjk5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNDgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA3MjYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDEyMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDk5MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA1NTEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogODMxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NDAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NzksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA3NTIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogODczLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDkzOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAyNDAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogOTY5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDI0NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDE1NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMjc0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogNzg5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA2MzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMTk5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NjIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogODE3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMDcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAxMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiAxNjcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDEwNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDQzMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDM4MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDU3NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzE2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDY0NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTQ0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogMzA2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMzk1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNzc3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNjI0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogOTk0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDY1MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMTk4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAxNTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDMzOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNTUyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNzM1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDI5NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMjg3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAzOTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNzQxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNjcwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAyNjAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMjk0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDI5NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDg0MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ0OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDI2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDExOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MDIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAxNjEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA0MDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTA4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA0ODQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogOTY2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDM5MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDczOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDU2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNTA3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA2NjAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogOTI5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDQyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NTMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogOTc3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDEwNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA4MjAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDE4NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDUyNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogODMwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTU2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTE4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAyODYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDcxNSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNTAxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ2MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDQxOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA3NTIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDc1NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNDk3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzIyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDk4NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA5MDgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogODE2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA1MTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMTg4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDc2MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiAxMDcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk2OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NDMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDg4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDg0NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDMzNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDYwMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDcxOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA2OTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5OTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDU5NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAyMjMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogMzkyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAxNTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogOTU2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA2MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDY4OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNDYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogNDAxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMzc1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA4NzcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDkyMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDQxNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NDYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAyODIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTQzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDM5MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNTU2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDI1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDgwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzYwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDI5MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogOTE2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDIxMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNDQ1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTAxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDU2NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMzA0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMjQ0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNDY0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAyMjUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNzI3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogNzM1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDMzNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk4MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMTc1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogODg1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDY3NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDQ3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMTA1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDYxNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAxMzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMjYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDEzNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDY4MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDIwOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMjMzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAxMzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogODcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogMzU2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMzksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogODY3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMzgyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59XVxufSIsImV4cG9ydCBjb25zdCBzdW0gPSAoYSwgYikgPT4geyByZXR1cm4gYSArIGIgfSJdfQ==
