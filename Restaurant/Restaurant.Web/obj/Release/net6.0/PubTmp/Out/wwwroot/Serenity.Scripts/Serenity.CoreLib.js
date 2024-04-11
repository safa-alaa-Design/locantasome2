/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});


(function (exports, tslib, sleekgrid) {
    'use strict';

    /**
     * Tests if any of array elements matches given predicate. Prefer Array.some() over this function (e.g. `[1, 2, 3].some(predicate)`).
     * @param array Array to test.
     * @param predicate Predicate to test elements.
     * @returns True if any element matches.
     */
    function any(array, predicate) {
        return array.some(predicate);
    }
    /**
     * Counts number of array elements that matches a given predicate.
     * @param array Array to test.
     * @param predicate Predicate to test elements.
     */
    function count(array, predicate) {
        var count = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var x = array_1[_i];
            if (predicate(x))
                count++;
        }
        return count;
    }
    /**
     * Gets first element in an array that matches given predicate similar to LINQ's First.
     * Throws an error if no match is found.
     * @param array Array to test.
     * @param predicate Predicate to test elements.
     * @returns First element that matches.
     */
    function first(array, predicate) {
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var x = array_2[_i];
            if (predicate(x))
                return x;
        }
        throw new Error("first:No element satisfies the condition.!");
    }
    /**
     * Groups an array with keys determined by specified getKey() callback.
     * Resulting object contains group objects in order and a dictionary to access by key.
     * This is similar to LINQ's ToLookup function with some additional details like start index.
     * @param items Array to group.
     * @param getKey Function that returns key for each item.
     * @returns GroupByResult object.
     */
    function groupBy(items, getKey) {
        var _a;
        var result = {
            byKey: Object.create(null),
            inOrder: []
        };
        for (var index = 0; index < items.length; index++) {
            var item = items[index];
            var key = (_a = getKey(item)) !== null && _a !== void 0 ? _a : "";
            var group = result.byKey[key];
            if (group === undefined) {
                group = {
                    order: result.inOrder.length,
                    key: key,
                    items: [item],
                    start: index
                };
                result.byKey[key] = group;
                result.inOrder.push(group);
            }
            else {
                group.items.push(item);
            }
        }
        return result;
    }
    /**
     * Gets index of first element in an array that matches given predicate.
     * @param array Array to test.
     * @param predicate Predicate to test elements.
     */
    function indexOf(array, predicate) {
        for (var i = 0; i < array.length; i++)
            if (predicate(array[i]))
                return i;
        return -1;
    }
    /**
     * Inserts an item to the array at specified index. Prefer Array.splice unless
     * you need to support IE.
     * @param obj Array or array like object to insert to.
     * @param index Index to insert at.
     * @param item Item to insert.
     * @throws Error if object does not support insert.
     * @example
     * insert([1, 2, 3], 1, 4); // [1, 4, 2, 3]
     * insert({ insert: (index, item) => { this.splice(index, 0, item); } }
     */
    function insert(obj, index, item) {
        if (obj.insert)
            obj.insert(index, item);
        else if (Array.isArray(obj))
            obj.splice(index, 0, item);
        else
            throw new Error("Object does not support insert!");
    }
    /**
     * Determines if the object is an array. Prefer Array.isArray over this function (e.g. `Array.isArray(obj)`).
     * @param obj Object to test.
     * @returns True if the object is an array.
     * @example
     * isArray([1, 2, 3]); // true
     * isArray({}); // false
     */
    var isArray = Array.isArray;
    /**
    * Gets first element in an array that matches given predicate.
    * Throws an error if no matches is found, or there are multiple matches.
    * @param array Array to test.
    * @param predicate Predicate to test elements.
    * @returns First element that matches.
    * @example
    * first([1, 2, 3], x => x == 2); // 2
    * first([1, 2, 3], x => x == 4); // throws error.
    */
    function single(array, predicate) {
        var match;
        var found = false;
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var x = array_3[_i];
            if (predicate(x)) {
                if (found)
                    throw new Error("single:sequence contains more than one element.");
                found = true;
                match = x;
            }
        }
        if (!found)
            throw new Error("single:No element satisfies the condition.");
        return match;
    }
    /**
     * Maps an array into a dictionary with keys determined by specified getKey() callback,
     * and values that are arrays containing elements for a particular key.
     * @param items Array to map.
     * @param getKey Function that returns key for each item.
     * @returns Grouping object.
     * @example
     * toGrouping([1, 2, 3], x => x % 2 == 0 ? "even" : "odd"); // { odd: [1, 3], even: [2] }
     */
    function toGrouping(items, getKey) {
        var _a;
        var lookup = {};
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var x = items_1[_i];
            var key = (_a = getKey(x)) !== null && _a !== void 0 ? _a : "";
            var d = lookup[key];
            if (!d) {
                d = lookup[key] = [];
            }
            d.push(x);
        }
        return lookup;
    }
    /**
     * Gets first element in an array that matches given predicate (similar to LINQ's FirstOrDefault).
     * Returns null if no match is found.
     * @param array Array to test.
     * @param predicate Predicate to test elements.
     * @returns First element that matches.
     * @example
     * tryFirst([1, 2, 3], x => x == 2); // 2
     * tryFirst([1, 2, 3], x => x == 4); // null
     */
    function tryFirst(array, predicate) {
        for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
            var x = array_4[_i];
            if (predicate(x))
                return x;
        }
    }

    function coalesce(a, b) {
        return a != null ? a : b;
    }
    function isValue(a) {
        return a != null;
    }
    var today = function () {
        var d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    function extend(a, b) {
        for (var key in b)
            if (Object.prototype.hasOwnProperty.call(b, key))
                a[key] = b[key];
        return a;
    }
    function deepClone(a, a2, a3) {
        // for backward compatibility
        if (a2 != null || a3 != null) {
            return extend(extend(deepClone(a || {}), deepClone(a2 || {})), deepClone(a3 || {}));
        }
        // https://github.com/angus-c/just/blob/master/packages/collection-clone/index.js
        var result = a;
        var type = {}.toString.call(a).slice(8, -1);
        if (type == 'Set') {
            return new Set(tslib.__spreadArray([], a, true).map(function (value) { return deepClone(value); }));
        }
        if (type == 'Map') {
            return new Map(tslib.__spreadArray([], a, true).map(function (kv) { return [deepClone(kv[0]), deepClone(kv[1])]; }));
        }
        if (type == 'Date') {
            return new Date(a.getTime());
        }
        if (type == 'RegExp') {
            return RegExp(a.source, getRegExpFlags(a));
        }
        if (type == 'Array' || type == 'Object') {
            result = (Array.isArray(a) ? [] : {});
            for (var key in a) {
                // include prototype properties
                result[key] = deepClone(a[key]);
            }
        }
        // primitives and non-supported objects (e.g. functions) land here
        return result;
    }
    function getRegExpFlags(regExp) {
        if (typeof regExp.source.flags == 'string') {
            return regExp.source.flags;
        }
        else {
            var flags = [];
            regExp.global && flags.push('g');
            regExp.ignoreCase && flags.push('i');
            regExp.multiline && flags.push('m');
            regExp.sticky && flags.push('y');
            regExp.unicode && flags.push('u');
            return flags.join('');
        }
    }
    function getTypeStore() {
        return getStateStore("__types");
    }
    function getNested(from, name) {
        var a = name.split('.');
        for (var i = 0; i < a.length; i++) {
            from = from[a[i]];
            if (from == null)
                return null;
        }
        return from;
    }
    var globalObj = (typeof globalThis !== "undefined" && globalThis) ||
        (typeof window !== "undefined" && window) ||
        (typeof self !== "undefined" && self) ||
        // @ts-ignore check for global
        (typeof global !== "undefined" && global) ||
        (function () { return this; })() || Function('return this')();
    function getGlobalThis() {
        return globalObj;
    }
    function getType(name, target) {
        var type;
        var types = getTypeStore();
        if (target == null) {
            type = types[name];
            if (type != null || globalObj == void 0 || name === "Object")
                return type;
            target = globalObj;
        }
        type = getNested(target, name);
        if (typeof type !== 'function')
            return null;
        return type;
    }
    function getTypeNameProp(type) {
        return (Object.prototype.hasOwnProperty.call(type, "__typeName") && type.__typeName) || void 0;
    }
    function setTypeNameProp(type, value) {
        Object.defineProperty(type, "__typeName", { value: value, configurable: true });
    }
    function getTypeFullName(type) {
        return getTypeNameProp(type) || type.name ||
            (type.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || 'Object';
    }
    function getTypeShortName(type) {
        var fullName = getTypeFullName(type);
        var bIndex = fullName.indexOf('[');
        var nsIndex = fullName.lastIndexOf('.', bIndex >= 0 ? bIndex : fullName.length);
        return nsIndex > 0 ? fullName.substr(nsIndex + 1) : fullName;
    }
    function getInstanceType(instance) {
        if (instance == null)
            throw new ArgumentNullException("instance", "Can't get instance type of null or undefined!");
        // Have to catch as constructor cannot be looked up on native COM objects
        try {
            return instance.constructor;
        }
        catch (ex) {
            return Object;
        }
    }
    function isAssignableFrom(target, type) {
        if (target === type || type.prototype instanceof target)
            return true;
        if (typeof target.__isAssignableFrom === 'function')
            return target.__isAssignableFrom(type);
        return false;
    }
    function isInstanceOfType(instance, type) {
        if (instance == null)
            return false;
        if (typeof type.__isInstanceOfType === 'function')
            return type.__isInstanceOfType(instance);
        return isAssignableFrom(type, getInstanceType(instance));
    }
    function safeCast(instance, type) {
        return isInstanceOfType(instance, type) ? instance : null;
    }
    function cast(instance, type) {
        if (instance == null)
            return instance;
        else if (isInstanceOfType(instance, type))
            return instance;
        throw new InvalidCastException('Cannot cast object to type ' + getTypeFullName(type));
    }
    function getBaseType(type) {
        if (type === Object ||
            !type.prototype ||
            type.__interface === true) {
            return null;
        }
        else if (Object.getPrototypeOf) {
            return Object.getPrototypeOf(type.prototype).constructor;
        }
        else {
            var p = type.prototype;
            if (Object.prototype.hasOwnProperty.call(p, 'constructor')) {
                try {
                    var ownValue = p.constructor;
                    delete p.constructor;
                    return p.constructor;
                }
                finally {
                    p.constructor = ownValue;
                }
            }
            return p.constructor;
        }
    }
    function getAttributes(type, attrType, inherit) {
        var _a;
        var result = [];
        if (inherit) {
            var b = getBaseType(type);
            if (b) {
                var a = getAttributes(b, attrType, true);
                for (var i = 0; i < a.length; i++) {
                    var t = getInstanceType(a[i]);
                    result.push(a[i]);
                }
            }
        }
        var attr = (_a = type.__metadata) === null || _a === void 0 ? void 0 : _a.attr;
        if (attr != null) {
            for (var i = 0; i < attr.length; i++) {
                var a = attr[i];
                if (attrType == null || isInstanceOfType(a, attrType)) {
                    var t = getInstanceType(a);
                    for (var j = result.length - 1; j >= 0; j--) {
                        if (isInstanceOfType(result[j], t))
                            result.splice(j, 1);
                    }
                    result.push(a);
                }
            }
        }
        return result;
    }
    exports.MemberType = void 0;
    (function (MemberType) {
        MemberType[MemberType["field"] = 4] = "field";
        MemberType[MemberType["property"] = 16] = "property";
    })(exports.MemberType || (exports.MemberType = {}));
    function getMembers(type, memberTypes) {
        var _a;
        var result = [];
        var b = getBaseType(type);
        if (b)
            result = getMembers(b, memberTypes & ~1);
        var members = (_a = type.__metadata) === null || _a === void 0 ? void 0 : _a.members;
        if (members != null) {
            for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
                var m = members_1[_i];
                if (memberTypes & m.type)
                    result.push(m);
            }
        }
        return result;
    }
    function addTypeMember(type, member) {
        var name = member.name;
        var md = ensureMetadata(type);
        md.members = md.members || [];
        var existing;
        for (var _i = 0, _a = md.members; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.name == name) {
                existing = m;
                break;
            }
        }
        if (existing) {
            if (member.type != null)
                existing.type = member.type;
            if (member.attr != null)
                existing.attr = merge(existing.attr, member.attr);
            if (member.getter != null)
                existing.getter = member.getter;
            if (member.setter != null)
                existing.setter = member.setter;
            return existing;
        }
        else {
            md.members.push(member);
            return member;
        }
    }
    function getTypes(from) {
        var types = getTypeStore();
        var result = [];
        if (!from) {
            for (var t in types) {
                if (Object.prototype.hasOwnProperty.call(types, t))
                    result.push(types[t]);
            }
        }
        else {
            var traverse = function (s, n) {
                for (var c in s) {
                    if (Object.prototype.hasOwnProperty.call(s, c))
                        traverse(s[c], c);
                }
                if (typeof (s) === 'function' &&
                    n.charAt(0).toUpperCase() === n.charAt(0) &&
                    n.charAt(0).toLowerCase() !== n.charAt(0))
                    result.push(s);
            };
            traverse(from, '');
        }
        return result;
    }
    function clearKeys(d) {
        for (var n in d) {
            if (Object.prototype.hasOwnProperty.call(d, n))
                delete d[n];
        }
    }
    function delegateCombine(delegate1, delegate2) {
        if (!delegate1) {
            if (!delegate2._targets) {
                return delegate2;
            }
            return delegate2;
        }
        if (!delegate2) {
            if (!delegate1._targets) {
                return delegate1;
            }
            return delegate1;
        }
        var targets1 = delegate1._targets ? delegate1._targets : [null, delegate1];
        var targets2 = delegate2._targets ? delegate2._targets : [null, delegate2];
        return _mkdel(targets1.concat(targets2));
    }
    var fallbackStore = {};
    function getStateStore(key) {
        var store;
        if (globalObj) {
            if (!globalObj.Q)
                globalObj.Q = {};
            store = globalObj.Q.__stateStore;
            if (!store)
                globalObj.Q.__stateStore = store = Object.create(null);
        }
        else
            store = fallbackStore;
        if (key == null)
            return store;
        var s = store[key];
        if (s == null)
            store[key] = s = Object.create(null);
        return s;
    }
    exports.Enum = void 0;
    (function (Enum) {
        Enum.toString = function (enumType, value) {
            var _a;
            var values = enumType;
            if (value === 0 || !((_a = enumType.__metadata) === null || _a === void 0 ? void 0 : _a.enumFlags)) {
                for (var i in values) {
                    if (values[i] === value) {
                        return i;
                    }
                }
                return value == null ? "" : value.toString();
            }
            else {
                var parts = [];
                for (var i in values) {
                    if (values[i] & value) {
                        parts.push(i);
                    }
                    else
                        parts.push(value == null ? "" : value.toString());
                }
                return parts.join(' | ');
            }
        };
        Enum.getValues = function (enumType) {
            var parts = [];
            var values = enumType;
            for (var i in values) {
                if (Object.prototype.hasOwnProperty.call(values, i) &&
                    typeof values[i] === "number")
                    parts.push(values[i]);
            }
            return parts;
        };
    })(exports.Enum || (exports.Enum = {}));
    function delegateContains(targets, object, method) {
        for (var i = 0; i < targets.length; i += 2) {
            if (targets[i] === object && targets[i + 1] === method) {
                return true;
            }
        }
        return false;
    }
    var _mkdel = function (targets) {
        var delegate = function () {
            if (targets.length === 2) {
                return targets[1].apply(targets[0], arguments);
            }
            else {
                var clone = targets.slice();
                for (var i = 0; i < clone.length; i += 2) {
                    if (delegateContains(targets, clone[i], clone[i + 1])) {
                        clone[i + 1].apply(clone[i], arguments);
                    }
                }
                return null;
            }
        };
        delegate._targets = targets;
        return delegate;
    };
    var delegateRemove = function (delegate1, delegate2) {
        if (!delegate1 || (delegate1 === delegate2)) {
            return null;
        }
        if (!delegate2) {
            return delegate1;
        }
        var targets = delegate1._targets;
        var object = null;
        var method;
        if (delegate2._targets) {
            object = delegate2._targets[0];
            method = delegate2._targets[1];
        }
        else {
            method = delegate2;
        }
        for (var i = 0; i < targets.length; i += 2) {
            if ((targets[i] === object) && (targets[i + 1] === method)) {
                if (targets.length === 2) {
                    return null;
                }
                var t = targets.slice();
                t.splice(i, 2);
                return _mkdel(t);
            }
        }
        return delegate1;
    };
    var isEnum = function (type) {
        return typeof type !== "function" &&
            type.__interface === null;
    };
    function initFormType(typ, nameWidgetPairs) {
        for (var i = 0; i < nameWidgetPairs.length - 1; i += 2) {
            (function (name, widget) {
                Object.defineProperty(typ.prototype, name, {
                    get: function () {
                        return this.w(name, widget);
                    },
                    enumerable: true,
                    configurable: true
                });
            })(nameWidgetPairs[i], nameWidgetPairs[i + 1]);
        }
    }
    function prop(type, name, getter, setter) {
        getter = getter || "get_" + name;
        setter = setter || "set_" + name;
        Object.defineProperty(type.prototype, name, {
            get: function () {
                return this[getter]();
            },
            set: function (value) {
                return this[setter](value);
            },
            configurable: true,
            enumerable: true
        });
    }
    function ensureMetadata(target) {
        if (!Object.prototype.hasOwnProperty.call(target, '__metadata') ||
            !target.__metadata) {
            target.__metadata = Object.create(null);
        }
        return target.__metadata;
    }
    function distinct(arr) {
        return arr.filter(function (item, pos) { return arr.indexOf(item) === pos; });
    }
    var _fieldsProxy = new Proxy({}, { get: function (_, p) { return p; } });
    function fieldsProxy() {
        return _fieldsProxy;
    }
    function keyOf(prop) {
        return prop;
    }
    function merge(arr1, arr2) {
        if (!arr1 || !arr2)
            return (arr1 || arr2 || []).slice();
        return distinct(arr1.concat(arr2));
    }
    function interfaceIsAssignableFrom(from) {
        var _this = this;
        return from != null &&
            Array.isArray(from.__interfaces) &&
            from.__interfaces.some(function (x) {
                var _a;
                return x === _this ||
                    (((_a = getTypeNameProp(_this)) === null || _a === void 0 ? void 0 : _a.length) &&
                        x.__interface &&
                        getTypeNameProp(x) === _this.__typeName);
            });
    }
    function registerType(type, name, intf) {
        var _a;
        var types = getTypeStore();
        if (name && name.length) {
            setTypeNameProp(type, name);
            types[name] = type;
        }
        else if ((_a = getTypeNameProp(type)) === null || _a === void 0 ? void 0 : _a.length)
            types[type.__typeName] = type;
        if (intf != null && intf.length)
            Object.defineProperty(type, "__interfaces", {
                value: merge(type.__interfaces, intf),
                configurable: true
            });
    }
    function registerClass(type, name, intf) {
        registerType(type, name, intf);
        Object.defineProperty(type, "__interface", { value: false, configurable: true });
    }
    function registerEditor(type, name, intf) {
        registerClass(type, name, intf);
        addAttribute(type, new EditorAttribute());
    }
    function registerEnum(type, name, enumKey) {
        registerType(type, name, undefined);
        if (enumKey && enumKey != name) {
            var types = getTypeStore();
            if (!types[enumKey])
                types[enumKey] = type;
        }
        Object.defineProperty(type, "__interface", { value: null, configurable: true });
    }
    function registerInterface(type, name, intf) {
        registerType(type, name, intf);
        Object.defineProperty(type, "__interface", { value: true, configurable: true });
        Object.defineProperty(type, "__isAssignableFrom", { value: interfaceIsAssignableFrom, configurable: true });
    }
    function addAttribute(type, attr) {
        var md = ensureMetadata(type);
        md.attr = md.attr || [];
        md.attr.push(attr);
    }
    var ISlickFormatter = /** @class */ (function () {
        function ISlickFormatter() {
        }
        return ISlickFormatter;
    }());
    registerInterface(ISlickFormatter, 'Serenity.ISlickFormatter');
    var EditorAttribute = /** @class */ (function () {
        function EditorAttribute() {
        }
        return EditorAttribute;
    }());
    registerClass(EditorAttribute, 'Serenity.EditorAttribute');
    function initializeTypes(root, pre, limit) {
        var _a;
        if (!root)
            return;
        var types = getTypeStore();
        for (var _i = 0, _b = Object.keys(root); _i < _b.length; _i++) {
            var k = _b[_i];
            if (k.charAt(0) < 'A' ||
                k.charAt(0) > 'Z' ||
                k.indexOf('$') >= 0 ||
                !Object.prototype.hasOwnProperty.call(root, k))
                continue;
            var obj = root[k];
            if (obj == void 0 ||
                Array.isArray(obj) ||
                obj instanceof Date ||
                (typeof obj != "function" &&
                    typeof obj != "object"))
                continue;
            // no explict __typeName, e.g. not registered with a name,
            // a function but not an html element, or registered without name
            if (!getTypeNameProp(obj) &&
                ((typeof obj === "function" && typeof obj.nodeType !== "number") ||
                    (Object.prototype.hasOwnProperty.call(obj, "__interface") &&
                        obj.__interface !== undefined))) {
                // legacy formatter with registerClass
                if (typeof obj == "function" &&
                    !obj.__interfaces &&
                    ((_a = obj.prototype) === null || _a === void 0 ? void 0 : _a.format) &&
                    k.substr(-9) === "Formatter") {
                    if (obj.__interface === undefined)
                        Object.defineProperty(obj, "__interface", { value: false, configurable: true });
                    obj.__interfaces = [ISlickFormatter];
                }
                // only register types that should
                if (obj.__interface !== undefined) {
                    setTypeNameProp(obj, pre + k);
                    types[pre + k] = obj;
                }
            }
            if (limit > 0)
                initializeTypes(obj, pre + k + ".", limit - 1);
        }
    }
    var Exception = /** @class */ (function (_super) {
        tslib.__extends(Exception, _super);
        function Exception(message) {
            var _this = _super.call(this, message) || this;
            _this.name = "Exception";
            return _this;
        }
        return Exception;
    }(Error));
    var ArgumentNullException = /** @class */ (function (_super) {
        tslib.__extends(ArgumentNullException, _super);
        function ArgumentNullException(paramName, message) {
            var _this = _super.call(this, (message || 'Value cannot be null.') + '\nParameter name: ' + paramName) || this;
            _this.name = "ArgumentNullException";
            return _this;
        }
        return ArgumentNullException;
    }(Exception));
    var InvalidCastException = /** @class */ (function (_super) {
        tslib.__extends(InvalidCastException, _super);
        function InvalidCastException(message) {
            var _this = _super.call(this, message) || this;
            _this.name = "InvalidCastException";
            return _this;
        }
        return InvalidCastException;
    }(Exception));

    /**
     * Checks if the string ends with the specified substring.
     * @param s String to check.
     * @param suffix Suffix to check.
     * @returns True if the string ends with the specified substring.
     */
    function endsWith(s, suffix) {
        return s.endsWith(suffix);
    }
    /**
     * Checks if the string is empty or null.
     * @param s String to check.
     * @returns True if the string is empty or null.
     */
    function isEmptyOrNull(s) {
        return s == null || s.length === 0;
    }
    /**
     * Checks if the string is empty or null or whitespace.
     * @param s String to check.
     * @returns True if the string is empty or null or whitespace.
     */
    function isTrimmedEmpty(s) {
        return trimToNull(s) == null;
    }
    /**
     * Pads the string to the left with the specified character.
     * @param s String to pad.
     * @param len Target length of the string.
     * @param ch Character to pad with.
     * @returns Padded string.
     */
    function padLeft(s, len, ch) {
        if (ch === void 0) { ch = ' '; }
        s = s == null ? '' : s.toString();
        if (s.padStart)
            return s.padStart(len, ch);
        while (s.length < len)
            s = ch + s;
        return s;
    }
    /**
     * Checks if the string starts with the prefix
     * @param s String to check.
     * @param prefix Prefix to check.
     * @returns True if the string starts with the prefix.
     */
    function startsWith(s, prefix) {
        return s.startsWith(prefix);
    }
    /**
     * Converts the string to single line by removing line end characters
     * @param str String to convert.
     */
    function toSingleLine(str) {
        return replaceAll(replaceAll(trimToEmpty(str), '\r\n', ' '), '\n', ' ').trim();
    }
    /**
     * Trims the whitespace characters from the end of the string
     */
    var trimEnd = function (s) {
        var _a, _b, _c;
        return (_c = (_b = (_a = (s !== null && s !== void 0 ? s : "")).trimEnd) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : s.replace(/\s*$/, '');
    };
    /**
     * Trims the whitespace characters from the start of the string
     */
    var trimStart = function (s) {
        var _a, _b, _c;
        return (_c = (_b = (_a = (s !== null && s !== void 0 ? s : "")).trimStart) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : s.replace(/^\s*/, '');
    };
    /**
     * Trims the whitespace characters from the start and end of the string
     * This returns empty string even when the string is null or undefined.
     */
    function trim(s) {
        var _a;
        return (_a = s === null || s === void 0 ? void 0 : s.trim()) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Trims the whitespace characters from the start and end of the string
     * Returns empty string if the string is null or undefined.
     */
    function trimToEmpty(s) {
        return (s !== null && s !== void 0 ? s : "").trim();
    }
    /**
     * Trims the whitespace characters from the start and end of the string
     * Returns null if the string is null, undefined or whitespace.
     */
    function trimToNull(s) {
        if (s == null)
            return null;
        s = trim(s);
        return s.length === 0 ? null : s;
    }
    /**
     * Replaces all occurrences of the search string with the replacement string.
     * @param str String to replace.
     * @param find String to find.
     * @param replace String to replace with.
     * @returns Replaced string.
     */
    function replaceAll(str, find, replace) {
        var _a, _b, _c;
        str = str || '';
        return (_c = (_b = (_a = str).replaceAll) === null || _b === void 0 ? void 0 : _b.call(_a, find, replace)) !== null && _c !== void 0 ? _c : str.split(find).join(replace);
    }
    /**
     * Pads the start of string to make it the specified length.
     * @param s String to pad.
     * @param len Target length of the string.
     */
    function zeroPad(n, len) {
        if (n == null)
            return "";
        var s = n.toString();
        while (s.length < len)
            s = "0" + s;
        return s;
    }

    function localText(key) {
        var t = getTable()[key];
        if (t == null) {
            t = key !== null && key !== void 0 ? key : '';
        }
        return t;
    }
    /** @obsolete prefer localText for better discoverability */
    var text = localText;
    function dbText(prefix) {
        return function (key) {
            return localText("Db." + prefix + "." + key);
        };
    }
    function getTable() {
        return getStateStore("__localText");
    }
    function prefixedText(prefix) {
        return function (text, key) {
            if (text != null && !startsWith(text, '`')) {
                var local = tryGetText(text);
                if (local != null) {
                    return local;
                }
            }
            if (text != null && startsWith(text, '`')) {
                text = text.substr(1);
            }
            if (!isEmptyOrNull(prefix)) {
                var textKey = typeof (key) == "function" ? key(prefix) : (prefix + key);
                var localText = tryGetText(textKey);
                if (localText != null) {
                    return localText;
                }
            }
            return text;
        };
    }
    function tryGetText(key) {
        var value = getTable()[key];
        return value;
    }
    function dbTryText(prefix) {
        return function (key) {
            return localText("Db." + prefix + "." + key);
        };
    }
    function proxyTexts(o, p, t) {
        if (typeof window != 'undefined' && window['Proxy']) {
            return new window['Proxy'](o, {
                get: function (x, y) {
                    var tv = t[y];
                    if (tv == null)
                        return localText(p + y);
                    else {
                        var z = o[y];
                        if (z != null)
                            return z;
                        o[y] = z = proxyTexts({}, p + y + '.', tv);
                        return z;
                    }
                },
                ownKeys: function (x) { return Object.keys(t); }
            });
        }
        else {
            for (var _i = 0, _a = Object.keys(t); _i < _a.length; _i++) {
                var k = _a[_i];
                if (typeof t[k] == 'number')
                    Object.defineProperty(o, k, {
                        get: function () { return localText(p + k); }
                    });
                else
                    o[k] = proxyTexts({}, p + k + '.', t[k]);
            }
            return o;
        }
    }
    var LT = /** @class */ (function () {
        function LT(key) {
            this.key = key;
        }
        LT.add = function (obj, pre) {
            if (!obj) {
                return;
            }
            var table = getTable();
            if (typeof obj === "string") {
                table[obj] = pre;
                return;
            }
            pre = pre || '';
            for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                var k = _a[_i];
                var actual = pre + k;
                var o = obj[k];
                if (typeof (o) === 'object') {
                    LT.add(o, actual + '.');
                }
                else {
                    table[actual] = o;
                }
            }
        };
        LT.prototype.get = function () {
            var t = getTable()[this.key];
            if (t == null) {
                t = this.key || '';
            }
            return t;
        };
        LT.prototype.toString = function () {
            var t = getTable()[this.key];
            if (t == null) {
                t = this.key || '';
            }
            return t;
        };
        LT.empty = new LT('');
        LT.initializeTextClass = function (type, prefix) {
            var $t1 = Object.keys(type).slice();
            var table = getTable();
            for (var $t2 = 0; $t2 < $t1.length; $t2++) {
                var member = $t1[$t2];
                var value = type[member];
                if (value instanceof LT) {
                    var lt = value;
                    var key = prefix + member;
                    table[key] = lt.key;
                    type[member] = new LT(key);
                }
            }
        };
        LT.getDefault = function (key, defaultText) {
            var t = getTable()[key];
            if (t == null) {
                t = defaultText;
                if (t == null) {
                    t = key || '';
                }
            }
            return t;
        };
        return LT;
    }());
    if (typeof globalThis !== "undefined") {
        var Q$1 = globalThis.Q || (globalThis.Q = {});
        if (Q$1.LT == null)
            Q$1.LT = LT;
    }

    var _a$1;
    /// <reference types="jquery" />
    var $$1 = typeof jQuery === "function" ? jQuery : typeof globalThis.$ === "function" ? globalThis.$ :
        typeof window !== "undefined" ? ((_a$1 = window.jQuery) !== null && _a$1 !== void 0 ? _a$1 : window.$) : undefined;

    /**
     * Adds an empty option to the select.
     * @param select the select element
     */
    function addEmptyOption(select) {
        addOption(select, '', localText("Controls.SelectEditor.EmptyItemText"));
    }
    /**
     * Adds an option to the select.
     */
    function addOption(select, key, text) {
        $$1('<option/>').attr("value", key !== null && key !== void 0 ? key : "").text(text !== null && text !== void 0 ? text : "").appendTo(select);
    }
    /** @obsolete use htmlEncode as it also encodes quotes */
    var attrEncode = htmlEncode;
    /** Clears the options in the select element */
    function clearOptions(select) {
        select.html('');
    }
    function findElementWithRelativeId(element, relativeId, context) {
        var _a;
        var isJQuery = element instanceof $$1 && element != null;
        var from = isJQuery ? element.get(0) : element;
        var doc = typeof document === "undefined" ? null : document;
        if (from == null)
            return null;
        var noContext = false;
        if (context === undefined) {
            context = from.getRootNode();
            noContext = true;
        }
        var fromId = (_a = from.id) !== null && _a !== void 0 ? _a : "";
        while (true) {
            var res = context === null || context === void 0 ? void 0 : context.querySelector("#" + fromId + relativeId);
            if (!res && noContext)
                res = doc === null || doc === void 0 ? void 0 : doc.getElementById(fromId + relativeId);
            if (!res && fromId.length) {
                res = context === null || context === void 0 ? void 0 : context.querySelector("#" + fromId + "_" + relativeId);
                if (!res && noContext)
                    res = doc === null || doc === void 0 ? void 0 : doc.getElementById(fromId + "_" + relativeId);
            }
            if (res || !fromId.length)
                return isJQuery ? $$1(res !== null && res !== void 0 ? res : null) : (res !== null && res !== void 0 ? res : null);
            var idx = fromId.lastIndexOf('_');
            if (idx <= 0)
                fromId = "";
            else
                fromId = fromId.substring(0, idx);
        }
    }
    var esc = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": "&#39;",
        '&': '&amp;',
    };
    function escFunc(a) {
        return esc[a];
    }
    /**
     * Html encodes a string (encodes single and double quotes, & (ampersand), > and < characters)
     * @param s String (or number etc.) to be HTML encoded
     */
    function htmlEncode(s) {
        if (s == null)
            return '';
        if (typeof s !== "string")
            s = "" + s;
        return s.replace(/[<>"'&]/g, escFunc);
    }
    /**
     * Creates a new DIV and appends it to the body.
     * @returns the new DIV element.
     */
    function newBodyDiv() {
        return $$1('<div/>').appendTo(document.body);
    }
    /**
     * Returns the outer HTML of the element.
     */
    function outerHtml(element) {
        return $$1('<i/>').append(element.eq(0).clone()).html();
    }
    /**
     * Toggles the class on the element handling spaces like jQuery addClass does.
     * @param el the element
     * @param cls the class to toggle
     * @param remove if true, the class will be added, if false the class will be removed, otherwise it will be toggled.
     */
    function toggleClass(el, cls, remove) {
        if (cls == null || !cls.length)
            return;
        if (cls.indexOf(' ') < 0) {
            el.classList.toggle(cls, remove);
            return;
        }
        var k = cls.split(' ').map(function (x) { return x.trim(); }).filter(function (x) { return x.length; });
        for (var _i = 0, k_1 = k; _i < k_1.length; _i++) {
            var a = k_1[_i];
            el.classList.toggle(a, remove);
        }
    }

    // adapted from https://github.com/JPeer264/toastr2
    var initialOptions = {
        tapToDismiss: true,
        toastClass: 'toast',
        containerId: 'toast-container',
        showDuration: 300,
        onShown: function () { },
        hideDuration: 1000,
        onHidden: function () { },
        closeMethod: false,
        closeDuration: false,
        closeEasing: false,
        closeOnHover: true,
        extendedTimeOut: 1000,
        iconClass: 'toast-info',
        positionClass: 'toast-top-right',
        timeOut: 5000,
        titleClass: 'toast-title',
        messageClass: 'toast-message',
        escapeHtml: true,
        target: 'body',
        closeHtml: '<button type="button">&times;</button>',
        closeClass: 'toast-close-button',
        newestOnTop: true,
        preventDuplicates: false,
        rtl: false,
        onCloseClick: function () { },
        closeButton: false,
        onclick: function () { },
    };
    var initialInstance = null;
    var Toastr = /** @class */ (function () {
        function Toastr(options) {
            var _a;
            this.toastId = 0;
            this.previousToast = null;
            this.options = Object.assign(Object.assign({}, (_a = initialInstance === null || initialInstance === void 0 ? void 0 : initialInstance.options) !== null && _a !== void 0 ? _a : initialOptions), options);
            this.createContainer(options);
        }
        Toastr.prototype.createContainer = function (options) {
            if (options === void 0) { options = this.options; }
            var container = document.createElement('div');
            container.setAttribute('id', options.containerId);
            if (options.positionClass)
                toggleClass(container, options.positionClass, true);
            var target = document.getElementsByTagName(options.target);
            if (target && target[0]) {
                target[0].appendChild(container);
            }
            return container;
        };
        Toastr.prototype.getContainer = function (options, create) {
            var _a;
            if (create === void 0) { create = false; }
            var container = document.getElementById((_a = options === null || options === void 0 ? void 0 : options.containerId) !== null && _a !== void 0 ? _a : this.options.containerId);
            if (container)
                return container;
            if (create)
                return this.createContainer(options !== null && options !== void 0 ? options : this.options);
            return null;
        };
        Toastr.prototype.error = function (message, title, opt) {
            return this.notify({
                type: 'error',
                iconClass: 'toast-error',
                message: message,
                title: title,
            }, opt);
        };
        Toastr.prototype.warning = function (message, title, opt) {
            return this.notify({
                type: 'warning',
                iconClass: 'toast-warning',
                message: message,
                title: title,
            }, opt);
        };
        Toastr.prototype.success = function (message, title, opt) {
            return this.notify({
                type: 'success',
                iconClass: 'toast-success',
                message: message,
                title: title,
            }, opt);
        };
        Toastr.prototype.info = function (message, title, opt) {
            return this.notify({
                type: 'info',
                iconClass: 'toast-info',
                message: message,
                title: title,
            }, opt);
        };
        Toastr.prototype.subscribe = function (callback) {
            this.listener = callback;
        };
        Toastr.prototype.publish = function (args) {
            if (!this.listener) {
                return;
            }
            this.listener(args);
        };
        Toastr.prototype.clear = function (toastElement, clearOptions) {
            if (clearOptions === void 0) { clearOptions = {}; }
            if (!this.clearToast(toastElement, this.options, clearOptions)) {
                this.clearContainer(this.options);
            }
        };
        Toastr.prototype.remove = function (toastElement) {
            var container = this.getContainer(this.options);
            if (!container)
                return;
            if (toastElement && toastElement !== document.activeElement) {
                this.removeToast(toastElement);
                return;
            }
            if (!container.hasChildNodes()) {
                var parentNode = container.parentElement;
                if (parentNode) {
                    parentNode.removeChild(container);
                }
            }
        };
        Toastr.prototype.removeToast = function (toastElement, options) {
            if (options === void 0) { options = this.options; }
            var container = this.getContainer(options);
            if (!container || !toastElement.parentNode) {
                return;
            }
            // todo set after visible state
            // as this will be a transition of css
            toastElement.parentNode.removeChild(toastElement);
            // check if visible
            if (toastElement.offsetWidth > 0 && toastElement.offsetHeight > 0) {
                return;
            }
            if (!container.hasChildNodes()) {
                if (container.parentNode) {
                    container.parentNode.removeChild(container);
                }
                this.previousToast = null;
            }
        };
        Toastr.prototype.clearContainer = function (options) {
            if (options === void 0) { options = this.options; }
            var container = this.getContainer(options);
            if (!container)
                return;
            var toastsToClear = Array.from(container.childNodes);
            for (var i = toastsToClear.length - 1; i >= 0; i -= 1) {
                this.clearToast(toastsToClear[i]);
            }
        };
        Toastr.prototype.clearToast = function (toastElement, options, clearOptions) {
            if (clearOptions === void 0) { clearOptions = {}; }
            if (!toastElement) {
                return false;
            }
            var force = clearOptions.force || false;
            if (toastElement && (force || toastElement !== document.activeElement)) {
                this.removeToast(toastElement, options);
                return true;
            }
            return false;
        };
        Toastr.prototype.notify = function (map, opt) {
            var _this = this;
            opt = Object.assign(Object.assign(Object.assign({}, this.options), map), opt);
            var shouldExit = function (opts, exitMap) {
                if (opts.preventDuplicates) {
                    if (exitMap.message === _this.previousToast) {
                        return true;
                    }
                    _this.previousToast = exitMap.message || '';
                }
                return false;
            };
            if (shouldExit(opt, map)) {
                return null;
            }
            this.toastId += 1;
            var container = this.getContainer(opt, true);
            var intervalId = null;
            var toastElement = document.createElement('div');
            var $titleElement = document.createElement('div');
            var $messageElement = document.createElement('div');
            var createdElement = document.createElement('div');
            createdElement.innerHTML = opt.closeHtml.trim();
            var closeElement = createdElement.firstChild;
            var response = {
                toastId: this.toastId,
                state: 'visible',
                startTime: new Date(),
                endTime: undefined,
                opt: opt,
                map: map,
            };
            var hideToast = function (override) {
                if (override === void 0) { override = null; }
                if (toastElement === document.activeElement && !override) {
                    return;
                }
                _this.removeToast(toastElement);
                if (intervalId) {
                    clearTimeout(intervalId);
                }
                if (opt.onHidden && response.state !== 'hidden') {
                    opt.onHidden();
                }
                response.state = 'hidden';
                response.endTime = new Date();
                _this.publish(response);
            };
            var setAria = function () {
                var ariaValue = '';
                switch (opt.iconClass) {
                    case 'toast-success':
                    case 'toast-info':
                        ariaValue = 'polite';
                        break;
                    default:
                        ariaValue = 'assertive';
                }
                toastElement.setAttribute('aria-live', ariaValue);
            };
            var delayedHideToast = function () {
                if (opt.timeOut > 0 || opt.extendedTimeOut > 0) {
                    intervalId = setTimeout(hideToast, opt.extendedTimeOut);
                }
            };
            var stickAround = function () {
                if (intervalId) {
                    clearTimeout(intervalId);
                }
            };
            var handleEvents = function () {
                if (opt.closeOnHover) {
                    toastElement.addEventListener('mouseover', function () { return stickAround(); });
                    toastElement.addEventListener('mouseout', function () { return delayedHideToast(); });
                }
                if (!opt.onclick && opt.tapToDismiss) {
                    toastElement.addEventListener('click', hideToast);
                }
                if (opt.closeButton && closeElement) {
                    closeElement.addEventListener('click', function (event) {
                        event.stopPropagation();
                        if (opt.onCloseClick) {
                            opt.onCloseClick(event);
                        }
                        hideToast(true);
                    });
                }
                if (opt.onclick) {
                    toastElement.addEventListener('click', function (event) {
                        // ts needs another check here
                        if (opt.onclick) {
                            opt.onclick(event);
                        }
                        hideToast();
                    });
                }
            };
            var setTitle = function () {
                if (map.title) {
                    var suffix = map.title;
                    if (opt.escapeHtml) {
                        suffix = htmlEncode(map.title);
                    }
                    $titleElement.innerHTML = suffix;
                    toggleClass($titleElement, opt.titleClass, true);
                    toastElement.appendChild($titleElement);
                }
            };
            var setMessage = function () {
                if (map.message) {
                    var suffix = map.message;
                    if (opt.escapeHtml) {
                        suffix = htmlEncode(map.message);
                    }
                    $messageElement.innerHTML = suffix;
                    toggleClass($messageElement, opt.messageClass, true);
                    toastElement.appendChild($messageElement);
                }
            };
            var setCloseButton = function () {
                if (opt.closeButton && closeElement) {
                    toggleClass(closeElement, opt.closeClass, true);
                    closeElement.setAttribute('role', 'button');
                    toastElement.insertBefore(closeElement, toastElement.firstChild);
                }
            };
            var setSequence = function () {
                if (opt.newestOnTop) {
                    container.insertBefore(toastElement, container.firstChild);
                }
                else {
                    container.appendChild(toastElement);
                }
            };
            var displayToast = function () {
                if (opt.onShown) {
                    opt.onShown();
                }
                if (opt.timeOut > 0) {
                    intervalId = setTimeout(hideToast, opt.timeOut);
                }
            };
            var personalizeToast = function () {
                toastElement.classList.add('show');
                opt.rtl && toastElement.classList.add('rtl');
                opt.toastClass && toggleClass(toastElement, opt.toastClass, true);
                opt.iconClass && toggleClass(toastElement, opt.iconClass, true);
                setTitle();
                setMessage();
                setCloseButton();
                setSequence();
                setAria();
            };
            personalizeToast();
            displayToast();
            handleEvents();
            this.publish(response);
            return toastElement;
        };
        return Toastr;
    }());
    initialInstance = new Toastr();
    var initialInstance$1 = initialInstance;

    // set default for toastr itself, possible security issue
    if (typeof initialInstance$1 !== "undefined" && initialInstance$1.options)
        initialInstance$1.options.escapeHtml = true;
    var defaultNotifyOptions = {
        timeOut: 3000,
        showDuration: 250,
        hideDuration: 500,
        escapeHtml: true,
        extendedTimeOut: 500,
        positionClass: 'position-toast toast-top-full-width'
    };
    function getToastrOptions(options) {
        options = extend(extend({}, defaultNotifyOptions), options);
        positionToastContainer(true, options);
        return options;
    }
    function showToast(type, message, title, options) {
        if (typeof initialInstance$1 !== "undefined" && (typeof initialInstance$1[type]) === 'function') {
            initialInstance$1[type](message, title, getToastrOptions(options));
            return;
        }
        if (typeof document === "undefined" || !document.body) {
            console.error("no document found! can't show toast: ".concat(type, " - ").concat(title, ": ").concat(message));
            return;
        }
        var container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = "toast-container";
            container.className = "toast-container top-0 end-0 p-3";
            document.body.append(container);
            var toast = document.createElement('div');
            toast.className = "toast";
            toast.role = "alert";
            toast.ariaLive = "assertive";
            toast.ariaAtomic = "true";
            toast.innerHTML = "<div class=\"toast-header bg-".concat(htmlEncode(type), " text-").concat(htmlEncode(type), "\">\n          <strong class=\"me-auto\">").concat(htmlEncode(title), "</strong>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"").concat(htmlEncode(localText("Dialogs.CloseButton")), "\"></button>\n        </div>\n        <div class=\"toast-body\">\n        ").concat(htmlEncode(message), "\n        </div>\n      </div>");
            container.appendChild(toast);
            // @ts-ignore
            if (typeof bootstrap === "undefined") {
                toast.querySelector('.btn-close').addEventListener('click', function () { this.remove(); });
                setTimeout(function () { this.remove(); }, 10000);
            }
        }
    }
    function notifyWarning(message, title, options) {
        showToast('warning', message, title, getToastrOptions(options));
    }
    function notifySuccess(message, title, options) {
        showToast('success', message, title, getToastrOptions(options));
    }
    function notifyInfo(message, title, options) {
        showToast('info', message, title, getToastrOptions(options));
    }
    function notifyError(message, title, options) {
        showToast('error', message, title, getToastrOptions(options));
    }
    function positionToastContainer(create, options) {
        if (typeof initialInstance$1 === 'undefined') {
            return;
        }
        var container = initialInstance$1.getContainer(options, create);
        if (!container || !container.classList.contains('position-toast'))
            return;
        var dialog = typeof $ !== "undefined" ? $(window.document.body).children('.ui-dialog:visible, .modal.in, .modal.show').last() : [];
        if (dialog.length > 0) {
            var position = dialog.position();
            container.classList.add('positioned-toast');
            container.style.position = 'absolute';
            container.style.top = position.top + 28 + 'px';
            container.style.left = position.left + 6 + 'px';
            container.style.width = dialog.width() - 12 + 'px';
        }
        else if (container.classList.contains('positioned-toast')) {
            container.classList.remove('positioned-toast');
            container.style.position = '';
            container.style.top = '';
            container.style.left = '';
            container.style.width = '';
        }
    }

    var Config = {
        /**
         * This is the root path of your application. If your application resides under http://localhost/mysite/,
         * your root path is "mysite/". This variable is automatically initialized by reading from a <link> element
         * with ID "ApplicationPath" from current page, which is usually located in your _LayoutHead.cshtml file
         */
        applicationPath: '/',
        /**
         * Email validation by default only allows ASCII characters. Set this to true if you want to allow unicode.
         */
        emailAllowOnlyAscii: true,
        /**
         * @Obsolete defaulted to false before for backward compatibility, now it is true by default
         */
        responsiveDialogs: true,
        /**
         * Set this to true, to prefer bootstrap dialogs over jQuery UI dialogs by default for message dialogs
         */
        bootstrapMessages: false,
        /**
         * This is the list of root namespaces that may be searched for types. For example, if you specify an editor type
         * of "MyEditor", first a class with name "MyEditor" will be searched, if not found, search will be followed by
         * "Serenity.MyEditor" and "MyApp.MyEditor" if you added "MyApp" to the list of root namespaces.
         *
         * You should usually add your application root namespace to this list in ScriptInit(ialization).ts file.
         */
        rootNamespaces: ['Serenity'],
        /**
         * This is an optional method for handling when user is not logged in. If a users session is expired
         * and when a NotAuthorized response is received from a service call, Serenity will call this handler, so
         * you may intercept it and notify user about this situation and ask if she wants to login again...
         */
        notLoggedInHandler: null
    };
    if (typeof document !== 'undefined') {
        var pathLink = document.querySelector('link#ApplicationPath');
        if (pathLink != null) {
            Config.applicationPath = pathLink.getAttribute('href');
        }
    }

    var _bootstrap = typeof bootstrap !== "undefined" ? bootstrap : undefined;

    var _a, _b, _c;
    // if both jQuery UI and bootstrap button exists, prefer jQuery UI button as UI dialog needs them
    if (typeof $$1 !== "undefined" && ((_b = (_a = $$1.fn) === null || _a === void 0 ? void 0 : _a.button) === null || _b === void 0 ? void 0 : _b.noConflict) && ((_c = $$1.ui) === null || _c === void 0 ? void 0 : _c.button)) {
        $$1.fn.btn = $$1.fn.button.noConflict();
    }
    function toIconClass(icon) {
        if (!icon)
            return null;
        if (startsWith(icon, 'fa-'))
            return 'fa ' + icon;
        if (startsWith(icon, 'glyphicon-'))
            return 'glyphicon ' + icon;
        return icon;
    }
    function internalUIDialog(options, bodyHtml, dialogClass) {
        var opt = extend({
            modal: true,
            width: '40%',
            maxWidth: 450,
            minWidth: 180,
            resizable: false,
            open: function () {
                if (options.onOpen)
                    options.onOpen.call(this);
            },
            close: function () {
                var _a, _b;
                (_b = (_a = $$1(this)).dialog) === null || _b === void 0 ? void 0 : _b.call(_a, 'destroy');
                if (options.onClose)
                    options.onClose.call(this, options.result);
            }
        }, options);
        opt.dialogClass = 's-MessageDialog' + (dialogClass ? (' ' + dialogClass) : '');
        if (options.buttons) {
            opt.buttons = options.buttons.map(function (x) {
                var btn = dialogButtonToUI(x);
                btn.click = function (e) {
                    options.result = x.result;
                    $$1(this).dialog('close');
                    x.click && x.click.call(this, e);
                };
                return btn;
            });
        }
        return $$1('<div>' + bodyHtml + '</div>').dialog(opt);
    }
    var _isBS3;
    var _isBS5Plus;
    /** Returns true if Bootstrap 3 is loaded */
    function isBS3() {
        var _a, _b, _c;
        if (_isBS3 != null)
            return _isBS3;
        // @ts-ignore
        return (_isBS3 = !!(typeof $$1 !== "undefined" && ((_c = (_b = (_a = $$1 === null || $$1 === void 0 ? void 0 : $$1.fn) === null || _a === void 0 ? void 0 : _a.modal) === null || _b === void 0 ? void 0 : _b.Constructor) === null || _c === void 0 ? void 0 : _c.VERSION) && ($$1.fn.modal.Constructor.VERSION + "").charAt(0) == '3'));
    }
    /** Returns true if Bootstrap 5+ is loaded */
    function isBS5Plus() {
        if (_isBS5Plus != null)
            return _isBS5Plus;
        return (_isBS5Plus = typeof _bootstrap !== "undefined" && (!_bootstrap.Modal || !_bootstrap.Modal.VERSION || (!_bootstrap.Modal.VERSION + "").charAt(0) != '4'));
    }
    var defaultTxt = {
        AlertTitle: 'Alert',
        InformationTitle: 'Information',
        WarningTitle: 'Warning',
        ConfirmationTitle: 'Confirm',
        OkButton: 'OK',
        YesButton: 'Yes',
        NoButton: 'No',
        CancelButton: 'Cancel',
        CloseButton: 'Close'
    };
    function txt(k) {
        var _a;
        return htmlEncode((_a = tryGetText("Dialogs." + k)) !== null && _a !== void 0 ? _a : defaultTxt[k]);
    }
    /**
     * Builds HTML DIV element for a Bootstrap modal dialog
     * @param title Modal title
     * @param body Modal body, it will not be HTML encoded, so make sure it is encoded
     * @param modalClass Optional class to add to the modal element
     * @param escapeHtml True to html encode body, default is true
     * @returns
     */
    function bsModalMarkup(title, body, modalClass, escapeHtml) {
        if (escapeHtml === void 0) { escapeHtml = true; }
        var closeButton = "<button type=\"button\" class=\"".concat(isBS5Plus() ? "btn-" : "", "close\" data-").concat(isBS5Plus() ? "bs-" : "", "dismiss=\"modal\" aria-label=\"").concat(txt('CloseButton'), "\">") +
            "".concat(isBS5Plus() ? "" : '<span aria-hidden="true">&times;</span>', "</button>");
        var div = document.createElement("div");
        div.classList.add("modal");
        if (modalClass === null || modalClass === void 0 ? void 0 : modalClass.length)
            toggleClass(div, modalClass, true);
        div.setAttribute("tabindex", "-1");
        div.setAttribute("role", "dialog");
        div.innerHTML = "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            ".concat((isBS3() ? closeButton : ""), "<h5 class=\"modal-title\">").concat(htmlEncode(title), "</h5>").concat((isBS3() ? "" : closeButton), "\n        </div>\n        <div class=\"modal-body\">").concat(escapeHtml ? htmlEncode(body) : body, "</div>\n        <div class=\"modal-footer\"></div>\n    </div>\n</div>");
        return div;
    }
    /** Converts a `DialogButton` declaration to Bootstrap button element
     * @param x Dialog button declaration
     * @returns Bootstrap button element
    */
    function dialogButtonToBS(x) {
        var _a, _b;
        var html = x.htmlEncode == null || x.htmlEncode ? htmlEncode(x.text) : x.text;
        var iconClass = toIconClass(x.icon);
        if (iconClass === null || iconClass === void 0 ? void 0 : iconClass.length)
            html = '<i class="' + htmlEncode(iconClass) + '"><i>' + (html ? (" " + html) : "");
        var button = document.createElement("button");
        button.classList.add("btn");
        if ((_a = x.cssClass) === null || _a === void 0 ? void 0 : _a.length)
            toggleClass(button, x.cssClass, true);
        if ((_b = x.hint) === null || _b === void 0 ? void 0 : _b.length)
            button.setAttribute("title", x.hint);
        button.innerHTML = html;
        return button;
    }
    /** Converts a `DialogButton` declaration to jQuery UI button type
     * @param x Dialog button declaration
     * @returns jQuery UI button type
     */
    function dialogButtonToUI(x) {
        var _a;
        var html = x.htmlEncode == null || x.htmlEncode ? htmlEncode(x.text) : x.text;
        var iconClass = toIconClass(x.icon);
        if (iconClass === null || iconClass === void 0 ? void 0 : iconClass.length)
            html = '<i class="' + htmlEncode(iconClass) + '"></i>' + (html ? (" " + html) : "");
        var button = {
            text: html,
            click: x.click
        };
        if ((_a = x.cssClass) === null || _a === void 0 ? void 0 : _a.length)
            button.cssClass = x.cssClass;
        return button;
    }
    function internalBSModal(options, bodyHtml, modalClass) {
        var modalDiv = bsModalMarkup(options.title, bodyHtml, "s-MessageModal" + (modalClass ? (" " + modalClass) : ""), false);
        var footer = modalDiv.querySelector('.modal-footer');
        var rawBS5 = typeof $$1 === "undefined" && isBS5Plus();
        function createButton(x) {
            var _this = this;
            if (!footer) {
                return;
            }
            var button = dialogButtonToBS(x);
            footer.append(button);
            button.addEventListener("click", function (e) {
                var _a;
                options.result = x.result;
                if (rawBS5) {
                    (_a = _bootstrap.Modal.getInstance(modalDiv)) === null || _a === void 0 ? void 0 : _a.hide();
                }
                else
                    $$1(modalDiv).modal('hide');
                x.click && x.click.call(_this, e);
            });
        }
        if (options.buttons) {
            for (var _i = 0, _a = options.buttons; _i < _a.length; _i++) {
                var button = _a[_i];
                createButton(button);
            }
        }
        if (rawBS5) {
            document.body.appendChild(modalDiv);
            if (options.onOpen)
                modalDiv.addEventListener("shown.bs.modal", options.onOpen);
            modalDiv.addEventListener('hidden.bs.modal', function (e) {
                try {
                    options.onClose && options.onClose(options.result);
                }
                finally {
                    modalDiv.remove();
                }
            });
            document.body.appendChild(modalDiv);
            new _bootstrap.Modal(modalDiv, {
                backdrop: false
            }).show();
        }
        else {
            var div = $$1(modalDiv).appendTo(document.body);
            if (options.onOpen)
                div.one('shown.bs.modal', options.onOpen);
            div.one('hidden.bs.modal', function (e) {
                try {
                    options.onClose && options.onClose(options.result);
                }
                finally {
                    div.remove();
                }
            });
            if (isBS5Plus()) {
                // @ts-ignore
                div.modal({
                    backdrop: false,
                });
                div.modal('show');
            }
            else {
                div.modal({
                    backdrop: false,
                    show: true
                });
            }
            if (isBS5Plus())
                div.modal('show');
        }
    }
    var _useBrowserDialogs;
    function useBrowserDialogs() {
        var _a;
        if (_useBrowserDialogs == null) {
            _useBrowserDialogs = !isBS5Plus() && (typeof $$1 === 'undefined' || ((!$$1.ui || !((_a = $$1.ui) === null || _a === void 0 ? void 0 : _a.dialog)) && (!$$1.fn || !($$1.fn.modal))));
        }
        return _useBrowserDialogs;
    }
    function useBSModal(options) {
        var _a;
        return Config.bootstrapMessages || options.bootstrap || !((_a = $$1 === null || $$1 === void 0 ? void 0 : $$1.ui) === null || _a === void 0 ? void 0 : _a.dialog);
    }
    function getMessageBodyHtml(message, options) {
        var encode = options == null || options.htmlEncode == null || options.htmlEncode;
        if (encode)
            message = htmlEncode(message);
        var preWrap = options == null || (options.preWrap == null && encode) || options.preWrap;
        return '<div class="message"' + (preWrap ? ' style="white-space: pre-wrap">' : '>') + message + '</div>';
    }
    /**
     * Displays an alert dialog
     * @param message The message to display
     * @param options Additional options.
     * @see AlertOptions
     * @example
     * alertDialog("An error occured!"); }
     */
    function alertDialog(message, options) {
        var _a, _b, _c;
        if (useBrowserDialogs()) {
            window.alert(message);
            return;
        }
        options !== null && options !== void 0 ? options : (options = {});
        var useBS = useBSModal(options);
        if (options.htmlEncode == null)
            options.htmlEncode = true;
        if (options.okButton == null)
            options.okButton = txt('OkButton');
        if (options.title == null)
            options.title = txt('AlertTitle');
        if (options.buttons == null) {
            options.buttons = [];
            if (options.okButton == null || options.okButton) {
                options.buttons.push({
                    text: typeof options.okButton == "boolean" ? txt('OkButton') : options.okButton,
                    cssClass: (_a = options.okButtonClass) !== null && _a !== void 0 ? _a : (useBS ? 'btn-danger' : undefined),
                    result: 'ok'
                });
            }
        }
        var bodyHtml = getMessageBodyHtml(message, options);
        if (useBS)
            internalBSModal(options, bodyHtml, (_b = options.modalClass) !== null && _b !== void 0 ? _b : "s-AlertModal");
        else
            internalUIDialog(options, bodyHtml, (_c = options.dialogClass) !== null && _c !== void 0 ? _c : "s-AlertDialog");
    }
    /** @obsolete use alertDialog */
    var alert = alertDialog;
    /**
     * Display a confirmation dialog
     * @param message The message to display
     * @param onYes Callback for Yes button click
     * @param options Additional options.
     * @see ConfirmOptions
     * @example
     * confirmDialog("Are you sure you want to delete?", () => {
     *     // do something when yes is clicked
     * }
     */
    function confirmDialog(message, onYes, options) {
        var _a, _b, _c;
        if (useBrowserDialogs()) {
            if (window.confirm(message))
                onYes && onYes();
            return;
        }
        options !== null && options !== void 0 ? options : (options = {});
        var useBS = useBSModal(options);
        if (options.htmlEncode == null)
            options.htmlEncode = true;
        if (options.yesButton == null)
            options.yesButton = txt('YesButton');
        if (options.noButton == null)
            options.noButton = txt('NoButton');
        if (typeof options.title === "undefined")
            options.title = txt('ConfirmationTitle');
        if (options.buttons == null) {
            options.buttons = [];
            if (options.yesButton == null || options.yesButton) {
                options.buttons.push({
                    text: typeof options.yesButton == "boolean" ? txt('YesButton') : options.yesButton,
                    cssClass: (_a = options.yesButtonClass) !== null && _a !== void 0 ? _a : (useBS ? 'btn-primary' : undefined),
                    result: 'yes',
                    click: onYes
                });
            }
            if (options.noButton == null || options.noButton) {
                options.buttons.push({
                    text: typeof options.noButton == "boolean" ? txt('NoButton') : options.noButton,
                    cssClass: useBS ? (isBS5Plus() ? 'btn-danger' : 'btn-default') : undefined,
                    result: 'no',
                    click: options.onNo
                });
            }
            if (options.cancelButton) {
                options.buttons.push({
                    text: typeof options.cancelButton == "boolean" ? txt('CancelButton') : options.cancelButton,
                    cssClass: useBS ? (isBS5Plus() ? 'btn-secondary' : 'btn-default') : undefined,
                    result: 'cancel',
                    click: options.onCancel
                });
            }
        }
        message = getMessageBodyHtml(message, options);
        if (useBS)
            internalBSModal(options, message, (_b = options.modalClass) !== null && _b !== void 0 ? _b : "s-ConfirmModal");
        else
            internalUIDialog(options, message, (_c = options.dialogClass) !== null && _c !== void 0 ? _c : "s-ConfirmDialog");
    }
    /** @obsolete use confirmDialog */
    var confirm = confirmDialog;
    /**
     * Display a dialog that shows an HTML block in an IFRAME, which is usually returned from server callbacks
     * @param options The options
     */
    function iframeDialog(options) {
        var _a, _b;
        if (useBrowserDialogs()) {
            window.alert(options.html);
            return;
        }
        var doc;
        function onOpen(div) {
            if (div) {
                var iframe = div.appendChild(document.createElement('iframe'));
                iframe.setAttribute("style", "border: none; width: 100%; height: 100%;");
                doc = iframe.contentDocument;
                if (doc) {
                    doc.open();
                    doc.write(options.html);
                    doc.close();
                }
            }
        }
        if (useBSModal(options)) {
            internalBSModal({
                title: txt('AlertTitle'),
                modalClass: 'modal-lg',
                onOpen: function () { onOpen(this.querySelector(".modal-body>div")); }
            }, '<div style="overflow: hidden"></div>', 's-IFrameModal');
            return;
        }
        var div = document.createElement('div');
        div.style.overflow = "hidden";
        document.body.appendChild(div);
        var settings = extend({
            autoOpen: true,
            modal: true,
            width: '60%',
            height: '400',
            title: txt('AlertTitle'),
            open: function () {
                onOpen(div);
            },
            close: function () {
                var _a, _b, _c, _d;
                (_d = (_c = (_b = (_a = $$1(div)).dialog) === null || _b === void 0 ? void 0 : _b.call(_a, 'destroy').html('')) === null || _c === void 0 ? void 0 : _c.remove) === null || _d === void 0 ? void 0 : _d.call(_c);
            }
        }, options);
        (_b = (_a = $$1(div)).dialog) === null || _b === void 0 ? void 0 : _b.call(_a, settings);
    }
    /**
     * Display an information dialog
     * @param message The message to display
     * @param onOk Callback for OK button click
     * @param options Additional options.
     * @see ConfirmOptions
     * @example
     * informationDialog("Operation complete", () => {
     *     // do something when OK is clicked
     * }
     */
    function informationDialog(message, onOk, options) {
        if (useBrowserDialogs()) {
            window.alert(message);
            onOk && onOk();
            return;
        }
        confirmDialog(message, onOk, extend({
            title: txt("InformationTitle"),
            dialogClass: "s-InformationDialog",
            modalClass: "s-InformationModal",
            yesButton: txt("OkButton"),
            yesButtonClass: 'btn-info',
            noButton: false,
        }, options));
    }
    /** @obsolete use informationDialog */
    var information = informationDialog;
    /**
     * Display a success dialog
     * @param message The message to display
     * @param onOk Callback for OK button click
     * @param options Additional options.
     * @see ConfirmOptions
     * @example
     * successDialog("Operation complete", () => {
     *     // do something when OK is clicked
     * }
     */
    function successDialog(message, onOk, options) {
        if (useBrowserDialogs()) {
            window.alert(message);
            onOk && onOk();
            return;
        }
        confirmDialog(message, onOk, extend({
            title: txt("SuccessTitle"),
            dialogClass: "s-SuccessDialog",
            modalClass: "s-SuccessModal",
            yesButton: txt("OkButton"),
            yesButtonClass: 'btn-success',
            noButton: false,
        }, options));
    }
    /** @obsolete use successDialog */
    var success = successDialog;
    /**
     * Display a warning dialog
     * @param message The message to display
     * @param options Additional options.
     * @see AlertOptions
     * @example
     * warningDialog("Something is odd!");
     */
    function warningDialog(message, options) {
        alertDialog(message, extend({
            title: txt("WarningTitle"),
            dialogClass: "s-WarningDialog",
            modalClass: "s-WarningModal",
            okButtonClass: 'btn-warning'
        }, options));
    }
    /** @obsolete use warningDialog */
    var warning = warningDialog;
    /**
     * Closes a panel, triggering panelbeforeclose and panelclose events on the panel element.
     * If the panelbeforeclose prevents the default, the operation is cancelled.
     * @param element The panel element
     * @param e  The event triggering the close
     */
    function closePanel(element, e) {
        var el = ($$1 && element instanceof $$1) ? element.get(0) : element;
        if (!el || !el.classList.contains("s-Panel") || el.classList.contains("hidden"))
            return;
        var event;
        if ($$1) {
            event = $$1.Event(e);
            event.type = 'panelbeforeclose';
            event.target = el;
            $$1(element).trigger(event);
            if (event.isDefaultPrevented())
                return;
            event = $$1.Event("panelclosing", { panel: el });
            $$1(window).trigger(event);
        }
        else {
            event = new Event("panelbeforeclose", { cancelable: true });
            el.dispatchEvent(event);
            if (event.defaultPrevented) {
                return;
            }
            event = new Event("panelclosing");
            event.panel = el;
            window.dispatchEvent(event);
        }
        el.classList.add("hidden");
        var uniqueName = el.dataset.paneluniquename;
        if (uniqueName === null || uniqueName === void 0 ? void 0 : uniqueName.length) {
            document.querySelectorAll("[data-panelhiddenby=\"".concat(uniqueName, "\"]")).forEach(function (e) {
                e.classList.remove("panel-hidden");
                e.removeAttribute("data-panelhiddenby");
            });
        }
        if ($$1) {
            $$1(window).triggerHandler('resize');
            $$1('.require-layout:visible').triggerHandler('layout');
            event = $$1.Event(e);
            event.type = 'panelclose';
            event.target = el;
            $$1(el).trigger(event);
            event = $$1.Event("panelclosed", { panel: el });
            $$1(window).trigger(event);
        }
        else {
            window.dispatchEvent(new Event("resize"));
            var layoutEvent = new Event("layout");
            document.querySelectorAll(".require-layout").forEach(function (rl) {
                if (rl.offsetWidth > 0 || rl.offsetHeight > 0)
                    rl.dispatchEvent(layoutEvent);
            });
            el.dispatchEvent(new Event("panelclose"));
            event = new Event("panelclosed");
            event.panel = el;
            window.dispatchEvent(event);
        }
    }
    /**
     * Opens a panel, triggering panelbeforeopen and panelopen events on the panel element,
     * and panelopening and panelopened events on the window.
     * If the panelbeforeopen prevents the default, the operation is cancelled.
     * @param element The panel element
     * @param uniqueName A unique name for the panel. If not specified, the panel id is used. If the panel has no id, a timestamp is used.
     * @param e The event triggering the open
     */
    function openPanel(element, uniqueName) {
        var _a, _b;
        var el = ($$1 && element instanceof $$1) ? element.get(0) : element;
        if (!el)
            return;
        var event;
        if ($$1) {
            event = $$1.Event('panelopening', { panel: el });
            $$1(window).trigger(event);
        }
        else {
            event = new Event("panelopening");
            event.panel = el;
            window.dispatchEvent(event);
        }
        var container = (_a = document.querySelector('.panels-container')) !== null && _a !== void 0 ? _a : document.querySelector('section.content');
        el.dataset.paneluniquename = (_b = uniqueName !== null && uniqueName !== void 0 ? uniqueName : el.id) !== null && _b !== void 0 ? _b : new Date().getTime().toString();
        function hide(e) {
            if (e === el ||
                e.tagName === "LINK" ||
                e.tagName === "SCRIPT" ||
                e.classList.contains('panel-hidden') ||
                ((e.classList.contains("ui-dialog") || e.classList.contains("ui-widget-overlay")) && e.offsetWidth <= 0 && e.offsetHeight <= 0))
                return;
            e.classList.add("panel-hidden");
            e.setAttribute('data-panelhiddenby', el.dataset.paneluniquename);
        }
        if (container) {
            var c = container.children;
            var cl = c.length;
            for (var i = 0; i < cl; i++) {
                hide(c[i]);
            }
            if (el.parentElement !== container)
                container.appendChild(el);
        }
        document.querySelectorAll('.ui-dialog, .ui-widget-overlay, .modal.show, .modal.in').forEach(hide);
        el.classList.remove("hidden");
        el.classList.remove("panel-hidden");
        el.classList.add("s-Panel");
        if ($$1) {
            $$1(el).trigger('panelopen');
            event = $$1.Event('panelopened', { panel: el });
            $$1(window).trigger(event);
        }
        else {
            el.dispatchEvent(new Event("panelopen"));
            event = new Event("panelopened");
            event.panel = el;
            window.dispatchEvent(event);
        }
    }

    exports.ErrorHandling = void 0;
    (function (ErrorHandling) {
        /**
         * Shows a service error as an alert dialog. If the error
         * is null, has no message or code, it shows "??ERROR??".
         */
        function showServiceError(error) {
            var _a, _b;
            alertDialog((_b = (_a = error === null || error === void 0 ? void 0 : error.Message) !== null && _a !== void 0 ? _a : error === null || error === void 0 ? void 0 : error.Code) !== null && _b !== void 0 ? _b : "??ERROR??");
        }
        ErrorHandling.showServiceError = showServiceError;
        /**
         * Runtime error handler that shows a runtime error as a notification
         * by default only in development mode (@see isDevelopmentMode)
         * This function is assigned as window.onerror handler in
         * ScriptInit.ts for Serenity applications so that developers
         * can notice an error without having to check the browser console.
         */
        function runtimeErrorHandler(message, filename, lineno, colno, error) {
            var _a;
            try {
                if (!ErrorHandling.isDevelopmentMode())
                    return;
                var errorInfo = (_a = error === null || error === void 0 ? void 0 : error.stack) !== null && _a !== void 0 ? _a : error === null || error === void 0 ? void 0 : error.toString();
                message =
                    '<p></p><p>Message: ' + htmlEncode(message) +
                        '</p><p>File: ' + htmlEncode(filename) +
                        ', Line: ' + lineno + ', Column: ' + colno +
                        (errorInfo ? ('</p><p>' + htmlEncode(errorInfo)) : "") + '</p>';
                window.setTimeout(function () {
                    try {
                        notifyError(message, "SCRIPT ERROR! See browser console (F12) for details.", {
                            escapeHtml: false,
                            timeOut: 15000
                        });
                    }
                    catch (_a) {
                    }
                }, 0);
            }
            catch (_b) {
            }
        }
        ErrorHandling.runtimeErrorHandler = runtimeErrorHandler;
        /**
         * Determines if the current environment is development mode.
         * The runtimeErrorHandler (window.onerror) shows error notifications only
         * when this function returns true. The default implementation considers
         * the environment as development mode if the host is localhost, 127.0.0.1, ::1,
         * or a domain name that ends with .local/.localhost.
         * @returns true if the current environment is development mode, false otherwise.
         */
        function isDevelopmentMode() {
            var _a;
            var hostname = ((_a = window.location.hostname) !== null && _a !== void 0 ? _a : "").toLowerCase();
            return (hostname === "localhost" ||
                hostname === "127.0.0.1" ||
                hostname === "[::1]" ||
                hostname.endsWith(".local") ||
                hostname.endsWith(".localhost"));
        }
        ErrorHandling.isDevelopmentMode = isDevelopmentMode;
    })(exports.ErrorHandling || (exports.ErrorHandling = {}));

    var blockUICount = 0;
    function blockUIWithCheck(opt) {
        if (blockUICount > 0) {
            blockUICount++;
            return;
        }
        if ($$1 === null || $$1 === void 0 ? void 0 : $$1.blockUI) {
            $$1.blockUI(opt);
        }
        else if (typeof document !== "undefined") {
            var div = document.createElement("div");
            div.className = "blockUI blockOverlay";
            div.setAttribute("style", "z-index: 2000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0; cursor: wait; position: fixed;");
            document.body.appendChild(div);
        }
        blockUICount++;
    }
    /**
     * Uses jQuery BlockUI plugin to block access to whole page (default) or
     * a part of it, by using a transparent overlay covering the whole area.
     * @param options Parameters for the BlockUI plugin
     * @remarks If options are not specified, this function blocks
     * whole page with a transparent overlay. Default z-order of the overlay
     * div is 2000, so a higher z-order shouldn't be used in page.
     */
    function blockUI(options) {
        options = Object.assign({
            baseZ: 2000,
            message: '',
            overlayCSS: {
                opacity: '0.0',
                zIndex: 2000,
                cursor: 'wait'
            }, fadeOut: 0
        }, options);
        if (options.useTimeout) {
            window.setTimeout(function () {
                blockUIWithCheck(options);
            }, 0);
        }
        else {
            blockUIWithCheck(options);
        }
    }
    /**
     * Unblocks the page.
     */
    function blockUndo() {
        var _a;
        if (blockUICount > 1) {
            blockUICount--;
            return;
        }
        blockUICount--;
        if ($$1 === null || $$1 === void 0 ? void 0 : $$1.unblockUI)
            $$1.unblockUI({ fadeOut: 0 });
        else if (typeof document !== "undefined")
            (_a = document.body.querySelector(':scope > .blockUI.blockOverlay')) === null || _a === void 0 ? void 0 : _a.remove();
    }

    function getCookie(name) {
        if ($.cookie)
            return $.cookie(name);
        name += '=';
        for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
            if (!ca[i].indexOf(name))
                return ca[i].replace(name, '');
    }
    typeof $ != 'undefined' && $.ajaxSetup && $.ajaxSetup({
        beforeSend: function (xhr, opt) {
            if (!opt || !opt.crossDomain) {
                var token = getCookie('CSRF-TOKEN');
                if (token)
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
            }
        }
    });
    function serviceCall(options) {
        var handleError = function (response) {
            if (Config.notLoggedInHandler != null &&
                response &&
                response.Error &&
                response.Error.Code == 'NotLoggedIn' &&
                Config.notLoggedInHandler(options, response)) {
                return;
            }
            if (options.onError != null) {
                options.onError(response);
                return;
            }
            exports.ErrorHandling.showServiceError(response.Error);
        };
        var url = options.service;
        if (url && url.length && url.charAt(0) != '~' && url.charAt(0) != '/' && url.indexOf('://') < 0)
            url = resolveUrl("~/Services/") + url;
        options = extend({
            dataType: 'json',
            contentType: 'application/json',
            type: 'POST',
            cache: false,
            blockUI: true,
            url: url,
            data: JSON.stringify(options.request),
            success: function (data, textStatus, request) {
                try {
                    if (!data.Error && options.onSuccess) {
                        options.onSuccess(data);
                    }
                }
                finally {
                    if (options.blockUI) {
                        blockUndo();
                    }
                    options.onCleanup && options.onCleanup();
                }
            },
            error: function (xhr, status, ev) {
                try {
                    if (xhr.status === 403) {
                        var l = null;
                        try {
                            l = xhr.getResponseHeader('Location');
                        }
                        catch ($t1) {
                            l = null;
                        }
                        if (l) {
                            window.top.location.href = l;
                            return;
                        }
                    }
                    if ((xhr.getResponseHeader('content-type') || '')
                        .toLowerCase().indexOf('application/json') >= 0) {
                        var json = $.parseJSON(xhr.responseText);
                        if (json && json.Error) {
                            handleError(json);
                            return;
                        }
                    }
                    var html = xhr.responseText;
                    if (!html) {
                        if (!xhr.status) {
                            if (xhr.statusText != "abort")
                                alertDialog("An unknown AJAX connection error occurred! Check browser console for details.");
                        }
                        else if (xhr.status == 500)
                            alertDialog("HTTP 500: Connection refused! Check browser console for details.");
                        else
                            alertDialog("HTTP " + xhr.status + ' error! Check browser console for details.');
                    }
                    else
                        iframeDialog({ html: html });
                }
                finally {
                    if (options.blockUI) {
                        blockUndo();
                    }
                    options.onCleanup && options.onCleanup();
                }
            }
        }, options);
        if (options.blockUI) {
            blockUI(null);
        }
        return $.ajax(options);
    }
    function serviceRequest(service, request, onSuccess, options) {
        return serviceCall(extend({
            service: service,
            request: request,
            onSuccess: onSuccess
        }, options));
    }
    function setEquality(request, field, value) {
        if (request.EqualityFilter == null) {
            request.EqualityFilter = {};
        }
        request.EqualityFilter[field] = value;
    }
    function parseQueryString(s) {
        var qs;
        if (s === undefined)
            qs = location.search.substring(1, location.search.length);
        else
            qs = s || '';
        var result = {};
        var parts = qs.split('&');
        for (var i = 0; i < parts.length; i++) {
            var pair = parts[i].split('=');
            var name_1 = decodeURIComponent(pair[0]);
            result[name_1] = (pair.length >= 2 ? decodeURIComponent(pair[1]) : name_1);
        }
        return result;
    }
    function postToService(options) {
        var form = $('<form/>')
            .attr('method', 'POST')
            .attr('action', options.url ? (resolveUrl(options.url)) : resolveUrl('~/Services/' + options.service))
            .appendTo(document.body);
        if (options.target)
            form.attr('target', options.target);
        var div = $('<div/>').appendTo(form);
        $('<input/>').attr('type', 'hidden').attr('name', 'request')
            .val($['toJSON'](options.request))
            .appendTo(div);
        var csrfToken = getCookie('CSRF-TOKEN');
        if (csrfToken) {
            $('<input/>').attr('type', 'hidden').attr('name', '__RequestVerificationToken')
                .appendTo(div).val(csrfToken);
        }
        $('<input/>').attr('type', 'submit')
            .appendTo(div);
        form.submit();
        window.setTimeout(function () { form.remove(); }, 0);
    }
    function postToUrl(options) {
        var form = $('<form/>')
            .attr('method', 'POST')
            .attr('action', resolveUrl(options.url))
            .appendTo(document.body);
        if (options.target)
            form.attr('target', options.target);
        var div = $('<div/>').appendTo(form);
        if (options.params != null) {
            for (var k in options.params) {
                $('<input/>').attr('type', 'hidden').attr('name', k)
                    .val(options.params[k])
                    .appendTo(div);
            }
        }
        var csrfToken = getCookie('CSRF-TOKEN');
        if (csrfToken) {
            $('<input/>').attr('type', 'hidden').attr('name', '__RequestVerificationToken')
                .appendTo(div).val(csrfToken);
        }
        $('<input/>').attr('type', 'submit')
            .appendTo(div);
        form.submit();
        window.setTimeout(function () { form.remove(); }, 0);
    }
    function resolveUrl(url) {
        if (url && url.substr(0, 2) === '~/') {
            return Config.applicationPath + url.substr(2);
        }
        return url;
    }

    /** Invariant locale (e.g. CultureInfo.InvariantCulture) */
    var Invariant = {
        decimalSeparator: '.',
        groupSeparator: ',',
        decimalDigits: 2,
        negativeSign: '-',
        positiveSign: '+',
        percentSymbol: '%',
        currencySymbol: '$',
        dateSeparator: '/',
        dateOrder: 'mdy',
        dateFormat: 'MM/dd/yyyy',
        dateTimeFormat: 'MM/dd/yyyy HH:mm:ss',
        amDesignator: 'AM',
        pmDesignator: 'PM',
        timeSeparator: ':',
        firstDayOfWeek: 0,
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        minimizedDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ''],
        shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
        stringCompare: function (a, b) { return a < b ? -1 : (a > b ? 1 : 0); }
    };
    /**
     * Factory for a function that compares two strings, based on a character order
     * passed in the `order` argument.
     */
    function compareStringFactory(order) {
        var o = {};
        for (var z = 0; z < order.length; z++) {
            o[order.charAt(z)] = z + 1;
        }
        return function (a, b) {
            a = a || "";
            b = b || "";
            if (a == b)
                return 0;
            var c;
            for (var i = 0, _len = Math.min(a.length, b.length); i < _len; i++) {
                var x = a.charAt(i), y = b.charAt(i);
                if (x === y) {
                    continue;
                }
                var ix = o[x], iy = o[y];
                if (ix != null && iy != null)
                    return ix < iy ? -1 : 1;
                c = x.localeCompare(y);
                if (c == 0)
                    continue;
                return c;
            }
            if (c != null)
                return c;
            return a.localeCompare(b);
        };
    }
    /**
     * Current culture, e.g. CultureInfo.CurrentCulture. This is overridden by
     * settings passed from a `<script>` element in the page with id `ScriptCulture`
     * containing a JSON object if available. This element is generally created in
     * the _LayoutHead.cshtml file for Serenity applications, so that the culture
     * settings determined server, can be passed to the client.
     */
    var Culture = {
        decimalSeparator: '.',
        groupSeparator: ',',
        dateSeparator: '/',
        dateOrder: 'dmy',
        dateFormat: 'dd/MM/yyyy',
        dateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
        stringCompare: compareStringFactory("AaBbCcÇçFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpRrSsŞşTtUuÜüVvYyZz")
    };
    (function () {
        var _a;
        var k;
        for (k in Invariant)
            if (Culture[k] === undefined && Object.prototype.hasOwnProperty.call(Invariant, k))
                Culture[k] = Invariant[k];
        if (typeof document !== "undefined" && (k = trimToNull((_a = document.querySelector('script#ScriptCulture')) === null || _a === void 0 ? void 0 : _a.textContent)) != null) {
            var sc = JSON.parse(k);
            if (sc.DecimalSeparator != null)
                Culture.decimalSeparator = sc.DecimalSeparator;
            if (sc.GroupSeparator != null && sc.GroupSeparator != Culture.decimalSeparator)
                Culture.groupSeparator = sc.GroupSeparator;
            else if (Culture.groupSeparator == Culture.decimalSeparator)
                Culture.groupSeparator = Culture.decimalSeparator == '.' ? ',' : '.';
            delete sc.GroupSeparator;
            delete sc.DecimalSeparator;
            for (k in sc) {
                if (Culture[k] === undefined && Object.prototype.hasOwnProperty.call(sc, k))
                    Culture[k.charAt(0).toLowerCase() + k.substr(1)] = sc[k];
            }
        }
    })();
    /**
     * A string to lowercase function that handles special Turkish
     * characters like 'ı'. Left in for compatibility reasons.
     */
    function turkishLocaleToLower(a) {
        if (!a)
            return a;
        return a.replace(/i/g, 'İ').replace(/ı/g, 'I').toLowerCase();
    }
    /**
     * A string to uppercase function that handles special Turkish
     * characters like 'ı'. Left in for compatibility reasons.
     */
    function turkishLocaleToUpper(a) {
        if (!a)
            return a;
        return a.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
    }
    /**
     * This is an alias for Culture.stringCompare, left in for compatibility reasons.
     */
    var turkishLocaleCompare = Culture.stringCompare;
    function insertGroupSeperator(num, dec, grp, neg) {
        var decPart = null;
        var decIndex = num.indexOf(dec);
        if (decIndex > 0) {
            decPart = num.substring(decIndex);
            num = num.substr(0, decIndex);
        }
        var negative = startsWith(num, neg);
        if (negative) {
            num = num.substring(1);
        }
        var groupSize = 3;
        if (num.length < groupSize) {
            return (negative ? neg : '') + (decPart ? num + decPart : num);
        }
        var index = num.length;
        var s = '';
        var done = false;
        while (!done) {
            var length = groupSize;
            var startIndex = index - length;
            if (startIndex < 0) {
                groupSize += startIndex;
                length += startIndex;
                startIndex = 0;
                done = true;
            }
            if (!length)
                break;
            var part = num.substring(startIndex, startIndex + length);
            if (s.length)
                s = part + grp + s;
            else
                s = part;
            index -= length;
        }
        if (negative)
            s = '-' + s;
        return decPart ? s + decPart : s;
    }
    var _formatRE = /\{\{|\}\}|\{[^\}\{]+\}/g;
    function _formatString(format, l, values, from) {
        return format.replace(_formatRE, function (m) {
            if (m === '{{' || m === '}}')
                return m.charAt(0);
            var index = parseInt(m.substr(1), 10);
            var value = values[index + from];
            if (value == null) {
                return '';
            }
            var formatSpec = null;
            var formatIndex = m.indexOf(':');
            if (formatIndex > 0) {
                formatSpec = m.substring(formatIndex + 1, m.length - 1);
            }
            return _formatObject(value, formatSpec, l);
        });
    }
    /**
     * Formats a string with parameters similar to .NET's String.Format function
     * using current `Culture` locale settings.
     */
    function format(format) {
        return _formatString(format, Culture, arguments, 1);
    }
    /**
     * Formats a string with parameters similar to .NET's String.Format function
     * using the locale passed as the first argument.
     */
    function localeFormat(l, format) {
        return _formatString(format, l, arguments, 2);
    }
    function _formatObject(obj, format, fmt) {
        if (typeof (obj) === 'number')
            return formatNumber(obj, format, fmt);
        else if (Object.prototype.toString.call(obj) === '[object Date]')
            return formatDate(obj, format, fmt);
        else if (obj.format)
            return obj.format(format, fmt !== null && fmt !== void 0 ? fmt : Culture);
        return String(obj);
    }
    /**
     * Rounds a number to specified digits or an integer number if digits are not specified.
     * @param n the number to round
     * @param d the number of digits to round to. default is zero.
     * @param rounding whether to use banker's rounding
     * @returns the rounded number
     */
    var round = function (n, d, rounding) {
        var m = Math.pow(10, d || 0);
        n *= m;
        var sign = (n > 0) | -(n < 0);
        if (n % 1 === 0.5 * sign) {
            var f = Math.floor(n);
            return (f + (rounding ? (sign > 0) : (f % 2 * sign))) / m;
        }
        return Math.round(n) / m;
    };
    /**
     * Truncates a number to an integer number.
     */
    var trunc = function (n) { return n != null ? (n > 0 ? Math.floor(n) : Math.ceil(n)) : null; };
    /**
     * Formats a number using the current `Culture` locale (or the passed locale) settings.
     * It supports format specifiers similar to .NET numeric formatting strings.
     * @param num the number to format
     * @param format the format specifier. default is 'g'.
     * See .NET numeric formatting strings documentation for more information.
     */
    function formatNumber(num, format, decOrLoc, grp) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (num == null)
            return "";
        var fmt = typeof decOrLoc !== "string" ? (decOrLoc !== null && decOrLoc !== void 0 ? decOrLoc : Culture) : {
            decimalSeparator: decOrLoc,
            groupSeparator: grp !== null && grp !== void 0 ? grp : (decOrLoc == "," ? "." : ",")
        };
        if (isNaN(num)) {
            return (_a = fmt.nanSymbol) !== null && _a !== void 0 ? _a : Culture.nanSymbol;
        }
        if (format === 'i') {
            return num.toString();
        }
        if (format == null || format == '') {
            format = 'g';
        }
        var dec = (_b = fmt.decimalSeparator) !== null && _b !== void 0 ? _b : Culture.decimalSeparator;
        grp = (_c = grp !== null && grp !== void 0 ? grp : fmt.groupSeparator) !== null && _c !== void 0 ? _c : Culture.groupSeparator;
        var neg = (_d = fmt.negativeSign) !== null && _d !== void 0 ? _d : Culture.negativeSign;
        var s = '';
        var precision = -1;
        if (format.length > 1) {
            precision = parseInt(format.substring(1), 10);
        }
        var fs = format.charAt(0);
        switch (fs) {
            case 'g':
            case 'G':
                if (precision != -1)
                    s = num.toFixed(precision);
                else
                    s = num.toString();
                if (dec != '.')
                    s = s.replace('.', dec);
                break;
            case 'd':
            case 'D':
                s = parseInt(Math.abs(num)).toString();
                if (precision != -1)
                    s = padLeft(s, precision, '0');
                if (num < 0)
                    s = neg + s;
                break;
            case 'x':
            case 'X':
                s = parseInt(Math.abs(num)).toString(16);
                if (fs == 'X')
                    s = s.toUpperCase();
                if (precision != -1)
                    s = padLeft(s, precision, '0');
                break;
            case 'e':
            case 'E':
                if (precision == -1)
                    s = num.toExponential(6);
                else
                    s = num.toExponential(precision);
                if (fs == 'E')
                    s = s.toUpperCase();
                break;
            case 'f':
            case 'F':
            case 'n':
            case 'N':
                if (precision == -1) {
                    precision = (_e = fmt.decimalDigits) !== null && _e !== void 0 ? _e : Culture.decimalDigits;
                }
                s = num.toFixed(precision).toString();
                if (precision && (dec != '.')) {
                    var index = s.indexOf('.');
                    s = s.substring(0, index) + dec + s.substring(index + 1);
                }
                if ((fs == 'n') || (fs == 'N')) {
                    s = insertGroupSeperator(s, dec, grp, neg);
                }
                break;
            case 'c':
            case 'C':
            case 'p':
            case 'P':
                if (precision == -1) {
                    precision = (_f = fmt.decimalDigits) !== null && _f !== void 0 ? _f : Culture.decimalDigits;
                }
                var symbol;
                if (fs === 'p' || fs == 'P') {
                    num *= 100;
                    symbol = (_g = fmt.percentSymbol) !== null && _g !== void 0 ? _g : Culture.percentSymbol;
                }
                else {
                    symbol = (_h = fmt.currencySymbol) !== null && _h !== void 0 ? _h : Culture.currencySymbol;
                }
                s = num.toFixed(precision).toString();
                if (precision && (dec != '.')) {
                    var index = s.indexOf('.');
                    s = s.substring(0, index) + dec + s.substring(index + 1);
                }
                s = insertGroupSeperator(s, dec, grp, neg) + symbol;
                break;
            default:
                var prefix = '';
                var mid = '';
                var suffix = '';
                var endPrefix = false;
                var inQuote = false;
                for (var i = 0; i < format.length; i++) {
                    var c = format.charAt(i);
                    if (c == "'") {
                        inQuote = !inQuote;
                        continue;
                    }
                    else if (!inQuote) {
                        if (c == '\\') {
                            var c = (format.charAt(i + 1) || '');
                            i++;
                        }
                        else if (c == '#' || c == ',' || c == '.' || c == '0') {
                            endPrefix = true;
                            mid += c;
                            continue;
                        }
                    }
                    endPrefix ? (suffix += c) : (prefix += c);
                }
                format = mid;
                var r = "";
                if (format.indexOf(".") > -1) {
                    var dp = dec;
                    var df = format.substring(format.lastIndexOf(".") + 1);
                    num = roundNumber(num, df.length);
                    var dv = num % 1;
                    var ds = new String(dv.toFixed(df.length));
                    ds = ds.substring(ds.lastIndexOf(".") + 1);
                    for (var i_1 = 0; i_1 < df.length; i_1++) {
                        if (df.charAt(i_1) == '#' && ds.charAt(i_1) != '0') {
                            dp += ds.charAt(i_1);
                            continue;
                        }
                        else if (df.charAt(i_1) == '#' && ds.charAt(i_1) == '0') {
                            var notParsed = ds.substring(i_1);
                            if (notParsed.match('[1-9]')) {
                                dp += ds.charAt(i_1);
                                continue;
                            }
                            else
                                break;
                        }
                        else if (df.charAt(i_1) == "0")
                            dp += ds.charAt(i_1);
                        else
                            dp += df.charAt(i_1);
                    }
                    r += dp;
                }
                else
                    num = Math.round(num);
                var ones = Math.floor(num);
                if (num < 0)
                    ones = Math.ceil(num);
                var of = "";
                if (format.indexOf(".") == -1)
                    of = format;
                else
                    of = format.substring(0, format.indexOf("."));
                var op = "";
                if (!(ones == 0 && of.substr(of.length - 1) == '#')) {
                    // find how many digits are in the group
                    var oneText = new String(Math.abs(ones));
                    var gl = 9999;
                    if (of.lastIndexOf(",") != -1)
                        gl = of.length - of.lastIndexOf(",") - 1;
                    var gc = 0;
                    for (var i_2 = oneText.length - 1; i_2 > -1; i_2--) {
                        op = oneText.charAt(i_2) + op;
                        gc++;
                        if (gc == gl && i_2 != 0) {
                            op = grp + op;
                            gc = 0;
                        }
                    }
                    // account for any pre-data padding
                    if (of.length > op.length) {
                        var padStart = of.indexOf('0');
                        if (padStart != -1) {
                            var padLen = of.length - padStart;
                            // pad to left with 0's or group char
                            var pos = of.length - op.length - 1;
                            while (op.length < padLen) {
                                var pc = of.charAt(pos);
                                // replace with real group char if needed
                                if (pc == ',')
                                    pc = grp;
                                op = pc + op;
                                pos--;
                            }
                        }
                    }
                }
                if (!op && of.indexOf('0', of.length - 1) !== -1)
                    op = '0';
                r = op + r;
                if (num < 0)
                    r = neg + r;
                if (r.lastIndexOf(dec) == r.length - 1) {
                    r = r.substring(0, r.length - 1);
                }
                return prefix + r + suffix;
        }
        return s;
    }
    /**
     * Converts a string to an integer. The difference between parseInt and parseInteger
     * is that parseInteger will return null if the string is empty or null, whereas
     * parseInt will return NaN and parseInteger will use the current culture's group
     * and decimal separators.
     * @param s the string to parse
     */
    function parseInteger(s) {
        if (s == null)
            return null;
        s = trim(s.toString());
        if (!s.length)
            return null;
        var ts = Culture.groupSeparator;
        if (s && s.length && s.indexOf(ts) > 0) {
            s = s.replace(new RegExp("(\\b\\d{1,3})\\" + ts + "(?=\\d{3}(\\D|$))", "g"), '$1');
        }
        if (!(/^[-\+]?\d+$/.test(s)))
            return NaN;
        return parseInt(s, 10);
    }
    /**
     * Converts a string to a decimal. The difference between parseFloat and parseDecimal
     * is that parseDecimal will return null if the string is empty or null, whereas
     * parseFloat will return NaN and parseDecimal will use the current culture's group
     * and decimal separators.
     * @param s the string to parse
     */
    function parseDecimal(s) {
        if (s == null)
            return null;
        s = trim(s.toString());
        if (s.length == 0)
            return null;
        var ts = Culture.groupSeparator;
        if (s && s.length && s.indexOf(ts) > 0) {
            s = s.replace(new RegExp("(\\b\\d{1,3})\\" + ts + "(?=\\d{3}(\\D|$))", "g"), '$1');
        }
        if (!(new RegExp("^\\s*([-\\+])?(\\d*)\\" + Culture.decimalSeparator + "?(\\d*)\\s*$").test(s)))
            return NaN;
        return parseFloat(s.toString().replace(Culture.decimalSeparator, '.'));
    }
    /**
     * Rounds a number to a specified number of decimal places.
     * @param n the number to round
     * @param dec the number of decimal places to round to
     * @returns the rounded number
     */
    function roundNumber(n, dec) {
        var power = Math.pow(10, dec || 0);
        var value = (Math.round(n * power) / power).toString();
        // ensure the decimal places are there
        if (dec > 0) {
            var dp = value.indexOf(".");
            if (dp == -1) {
                value += '.';
                dp = 0;
            }
            else {
                dp = value.length - (dp + 1);
            }
            while (dp < dec) {
                value += '0';
                dp++;
            }
        }
        return parseFloat(value);
    }
    /**
     * Converts a string to an ID. If the string is a number, it is returned as-is.
     * If the string is empty, null or whitespace, null is returned.
     * Otherwise, it is converted to a number if possible. If the string is not a
     * valid number or longer than 14 digits, the trimmed string is returned as-is.
     * @param id the string to convert to an ID
     */
    function toId(id) {
        if (id == null)
            return null;
        if (typeof id == "number")
            return id;
        if (typeof id == "string")
            id = trim(id);
        if (!id.length)
            return null;
        if (id.length >= 15 || !(/^-?\d+$/.test(id)))
            return id;
        return parseInt(id, 10);
    }
    var _dateFormatRE = /'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|\//g;
    /**
     * Formats a date using the specified format string and optional culture.
     * Supports .NET style format strings including custom formats.
     * See .NET documentation for supported formats.
     * @param d the date to format. If null, it returns empty string.
     * @param format the format string to use. If null, it uses the current culture's default format.
     * 'G' uses the culture's datetime format.
     * 'g' uses the culture's datetime format with secs removed.
     * 'd' uses the culture's date format.
     * 't' uses the culture's time format.
     * 'u' uses the sortable ISO format with UTC time.
     * 'U' uses the culture's date format with UTC time.
     * @param locale the locale to use
     * @returns the formatted date
     * @example
     * // returns "2019-01-01"
     * formatDate(new Date(2019, 0, 1), "yyyy-MM-dd");
     * @example
     * // returns "2019-01-01 12:00:00"
     * formatDate(new Date(2019, 0, 1, 12), "yyyy-MM-dd HH:mm:ss");
     * @example
     * // returns "2019-01-01 12:00:00.000"
     * formatDate(new Date(2019, 0, 1, 12), "yyyy-MM-dd HH:mm:ss.fff");
     * @example
     * // returns "2019-01-01 12:00:00.000 AM"
     * formatDate(new Date(2019, 0, 1, 12), "yyyy-MM-dd HH:mm:ss.fff tt");
     */
    function formatDate(d, format, locale) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!d)
            return '';
        var date;
        if (typeof d == "string") {
            date = parseDate(d, locale === null || locale === void 0 ? void 0 : locale.dateOrder);
            if (!date)
                return '';
            if (isNaN(date.valueOf()))
                return d;
        }
        else
            date = d;
        if (format == 'i')
            return date.toString();
        if (format == 'id')
            return date.toDateString();
        if (format == 'it')
            return date.toTimeString();
        if (locale == null)
            locale = Culture;
        if (format == null || format == "d")
            format = (_a = locale.dateFormat) !== null && _a !== void 0 ? _a : Culture.dateFormat;
        else if (format.length == 1) {
            switch (format) {
                case "g":
                    format = ((_b = locale.dateTimeFormat) !== null && _b !== void 0 ? _b : Culture.dateTimeFormat).replace(":ss", "");
                    break;
                case "G":
                    format = ((_c = locale.dateTimeFormat) !== null && _c !== void 0 ? _c : Culture.dateTimeFormat);
                    break;
                case "s":
                    format = "yyyy-MM-ddTHH:mm:ss";
                    break;
                case 't':
                    format = (locale.dateTimeFormat && locale.dateFormat) ? locale.dateTimeFormat.replace(locale.dateFormat + " ", "") : "HH:mm";
                    break;
                case 'u':
                case 'U':
                    format = format == 'u' ? 'yyyy-MM-ddTHH:mm:ss.fffZ' : (_d = locale.dateTimeFormat) !== null && _d !== void 0 ? _d : Culture.dateTimeFormat;
                    date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
                    break;
            }
        }
        if (format.charAt(0) == '%') {
            format = format.substr(1);
        }
        var re = _dateFormatRE;
        var sb = [];
        re.lastIndex = 0;
        while (true) {
            var index = re.lastIndex;
            var match = re.exec(format);
            sb.push(format.slice(index, match ? match.index : format.length));
            if (!match) {
                break;
            }
            var fs = match[0];
            var part = fs;
            switch (fs) {
                case '/':
                    part = (_e = locale.dateSeparator) !== null && _e !== void 0 ? _e : Culture.dateSeparator;
                    break;
                case 'dddd':
                    part = ((_f = locale.dayNames) !== null && _f !== void 0 ? _f : Culture.dayNames)[date.getDay()];
                    break;
                case 'ddd':
                    part = ((_g = locale.shortDayNames) !== null && _g !== void 0 ? _g : Culture.shortDayNames)[date.getDay()];
                    break;
                case 'dd':
                    part = padLeft(date.getDate().toString(), 2, '0');
                    break;
                case 'd':
                    part = date.getDate();
                    break;
                case 'MMMM':
                    part = ((_h = locale.monthNames) !== null && _h !== void 0 ? _h : Culture.monthNames)[date.getMonth()];
                    break;
                case 'MMM':
                    part = ((_j = locale.shortMonthNames) !== null && _j !== void 0 ? _j : Culture.shortMonthNames)[date.getMonth()];
                    break;
                case 'MM':
                    part = padLeft(date.getMonth() + 1, 2, '0');
                    break;
                case 'M':
                    part = (date.getMonth() + 1);
                    break;
                case 'yyyy':
                    part = padLeft(date.getFullYear(), 4, '0');
                    break;
                case 'yy':
                    part = padLeft(date.getFullYear() % 100, 2, '0');
                    break;
                case 'y':
                    part = date.getFullYear() % 100;
                    break;
                case 'h':
                case 'hh':
                    part = date.getHours() % 12;
                    if (!part) {
                        part = '12';
                    }
                    else if (fs == 'hh') {
                        part = padLeft(part, 2, '0');
                    }
                    break;
                case 'HH':
                    part = padLeft(date.getHours(), 2, '0');
                    break;
                case 'H':
                    part = date.getHours();
                    break;
                case 'mm':
                    part = padLeft(date.getMinutes(), 2, '0');
                    break;
                case 'm':
                    part = date.getMinutes();
                    break;
                case 'ss':
                    part = padLeft(date.getSeconds().toString(), 2, '0');
                    break;
                case 's':
                    part = date.getSeconds();
                    break;
                case 't':
                case 'tt':
                    part = (date.getHours() < 12) ? ((_k = locale.amDesignator) !== null && _k !== void 0 ? _k : Culture.amDesignator) : ((_l = locale.pmDesignator) !== null && _l !== void 0 ? _l : Culture.pmDesignator);
                    if (fs == 't') {
                        part = part.charAt(0);
                    }
                    break;
                case 'fff':
                    part = padLeft(date.getMilliseconds(), 3, '0');
                    break;
                case 'ff':
                    part = padLeft(date.getMilliseconds(), 3, '0').substr(0, 2);
                    break;
                case 'f':
                    part = padLeft(date.getMilliseconds(), 3, '0').charAt(0);
                    break;
                case 'z':
                    part = date.getTimezoneOffset() / 60;
                    part = ((part >= 0) ? '-' : '+') + Math.floor(Math.abs(part));
                    break;
                case 'zz':
                case 'zzz':
                    part = date.getTimezoneOffset() / 60;
                    part = ((part >= 0) ? '-' : '+') +
                        padLeft(Math.floor(Math.abs(part)), 2, '0');
                    if (fs == 'zzz') {
                        part += ((_m = locale.timeSeparator) !== null && _m !== void 0 ? _m : Culture.timeSeparator) +
                            padLeft(Math.abs(date.getTimezoneOffset() % 60), 2, '0');
                    }
                    break;
                default:
                    if (part.charAt(0) == '\'') {
                        part = part.substr(1, part.length - 2).replace(/\\'/g, '\'');
                    }
                    break;
            }
            sb.push(part);
        }
        return sb.join('');
    }
    /**
     * Formats a number containing number of minutes into a string in the format "d.hh:mm".
     * @param n The number of minutes.
     */
    function formatDayHourAndMin(n) {
        if (n == null)
            return "";
        if (n === 0)
            return '0';
        var days = Math.floor(n / 24 / 60);
        var txt = "";
        if (days > 0) {
            txt += days.toString();
        }
        var mins = zeroPad(Math.floor((n % (24 * 60)) / (60)), 2) + ':' + zeroPad(n % 60, 2);
        if (mins != '00:00') {
            if (days > 0)
                txt += ".";
            txt += mins;
        }
        return txt;
    }
    /**
     * Formats a date as the ISO 8601 UTC date/time format.
     * @param n The number of minutes.
     */
    function formatISODateTimeUTC(d) {
        if (d == null)
            return "";
        var zeropad = function (num) { return ((num < 10) ? '0' : '') + num; };
        var str = d.getUTCFullYear() + "-" +
            zeropad(d.getUTCMonth() + 1) + "-" +
            zeropad(d.getUTCDate()) + "T" +
            zeropad(d.getUTCHours()) + ":" +
            zeropad(d.getUTCMinutes());
        var secs = Number(d.getUTCSeconds() + "." +
            ((d.getUTCMilliseconds() < 100) ? '0' : '') +
            zeropad(d.getUTCMilliseconds()));
        str += ":" + zeropad(secs) + "Z";
        return str;
    }
    var isoRegexp = /(\d{4,})(?:-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d+))?)?(?:(Z)|([+-])(\d{1,2})(?::(\d{1,2}))?)?)?)?)?/;
    /**
     * Parses a string in the ISO 8601 UTC date/time format.
     * @param s The string to parse.
     */
    function parseISODateTime(s) {
        if (s == null)
            return null;
        if (typeof s !== "string")
            s = s + "";
        if (!s.length)
            return null;
        if (!isoRegexp.test(s))
            return new Date(NaN);
        return new Date(s + (s.length == 10 ? "T00:00:00" : ""));
    }
    /**
     * Parses a time string in the format "hh:mm" into a number containing number of minutes.
     * Returns NaN if the hours not in range 0-23 or minutes not in range 0-59.
     * @param s The string to parse.
     */
    function parseHourAndMin(value) {
        var v = trim(value);
        if (!v.length)
            return null;
        if (v.length < 4 || v.length > 5)
            return NaN;
        var h, m;
        if (v.charAt(1) == ':') {
            h = parseInteger(v.substr(0, 1));
            m = parseInteger(v.substr(2, 2));
        }
        else {
            if (v.charAt(2) != ':')
                return NaN;
            h = parseInteger(v.substr(0, 2));
            m = parseInteger(v.substr(3, 2));
        }
        if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59)
            return NaN;
        return h * 60 + m;
    }
    /**
     * Parses a string in the format "d.hh:mm" into a number containing number of minutes.
     * Returns NaN if the hours not in range 0-23 or minutes not in range 0-59.
     * Returns NULL if the string is empty or whitespace.
     */
    function parseDayHourAndMin(s) {
        var days;
        var v = trim(s);
        if (!v.length)
            return null;
        var p = v.split('.');
        if (p.length == 1) {
            days = parseInteger(p[0]);
            if (!isNaN(days))
                return days * 24 * 60;
            return parseHourAndMin(p[0]);
        }
        else if (p.length == 2) {
            days = parseInteger(p[0]);
            var hm = parseHourAndMin(p[1]);
            if (isNaN(days) || !hm || isNaN(hm))
                return NaN;
            return days * 24 * 60 + hm;
        }
        else
            return NaN;
    }
    /**
     * Parses a string to a date. If the string is empty or whitespace, returns null.
     * Returns a NaN Date if the string is not a valid date.
     * @param s The string to parse.
     * @param dateOrder The order of the date parts in the string. Defaults to culture's default date order.
      */
    function parseDate(s, dateOrder) {
        if (!s || !s.length)
            return null;
        s = trim(s);
        if (!s.length)
            return null;
        if (s.length >= 10 && s.charAt(4) === '-' && s.charAt(7) === '-' &&
            (s.length === 10 || (s.length > 10 && s.charAt(10) === 'T'))) {
            return parseISODateTime(s);
        }
        if (s.indexOf(' ') > 0 && s.indexOf(':') > s.indexOf(' ') + 1) {
            var datePart = parseDate(s.substring(0, s.indexOf(' ')));
            if (!datePart || isNaN(datePart.valueOf()))
                return new Date(NaN);
            return parseISODateTime(formatDate(datePart, 'yyyy-MM-dd') + 'T' + trim(s.substring(s.indexOf(' ') + 1)));
        }
        var d, m, y;
        var dArray = splitDateString(s);
        if (dArray.length == 3) {
            if (dArray.some(function (x) { return !/^[0-9]+$/.test(x); }))
                return new Date(NaN);
            dateOrder = dateOrder || Culture.dateOrder;
            switch (dateOrder) {
                case "dmy":
                    d = parseInt(dArray[0], 10);
                    m = parseInt(dArray[1], 10) - 1;
                    y = parseInt(dArray[2], 10);
                    break;
                case "ymd":
                    d = parseInt(dArray[2], 10);
                    m = parseInt(dArray[1], 10) - 1;
                    y = parseInt(dArray[0], 10);
                    break;
                case "mdy":
                default:
                    d = parseInt(dArray[1], 10);
                    m = parseInt(dArray[0], 10) - 1;
                    y = parseInt(dArray[2], 10);
                    break;
            }
            if (isNaN(d) || isNaN(m) || isNaN(y) || d < 1 || d > 31 || m < 0 || m > 11 || y > 9999 || y < 0)
                return new Date(NaN);
            if (y < 100) {
                var fullYear = new Date().getFullYear();
                var shortYearCutoff = (fullYear % 100) + 10;
                y += fullYear - fullYear % 100 + (y <= shortYearCutoff ? 0 : -100);
            }
            return new Date(y, m, d);
        }
        else if (dArray.length == 1) {
            try {
                return new Date(dArray[0]);
            }
            catch (e) {
                return new Date(NaN);
            }
        }
        return new Date(NaN);
    }
    /**
     * Splits a date string into an array of strings, each containing a single date part.
     * It can handle separators "/", ".", "-" and "\".
     * @param s The string to split.
     */
    function splitDateString(s) {
        s = trim(s);
        if (!s.length)
            return null;
        if (s.indexOf("/") >= 0)
            return s.split("/");
        else if (s.indexOf(".") >= 0)
            return s.split(".");
        else if (s.indexOf("-") >= 0)
            return s.split("-");
        else if (s.indexOf("\\") >= 0)
            return s.split("\\");
        else
            return [s];
    }

    function getHash(key, reload) {
        var k;
        var stateStore = getStateStore();
        if (stateStore.__scriptHash == null &&
            typeof document !== "undefined" &&
            (k = trimToNull((document.querySelector('script#RegisteredScripts') || {}).innerHTML)) != null &&
            k.charAt(0) == '{') {
            var regs = JSON.parse(k);
            exports.ScriptData.setRegisteredScripts(regs);
        }
        if (stateStore.__scriptHash == null) {
            if (reload)
                stateStore.__scriptHash = {};
            else
                return null;
        }
        if (reload)
            return (stateStore.__scriptHash[key] = new Date().getTime().toString());
        return stateStore.__scriptHash[key];
    }
    function setHash(key, value) {
        getStateStore("__scriptHash")[key] = value;
    }
    function getLoadedData(name) {
        return getStateStore("__scriptData")[name];
    }
    function setLoadedData(name, value) {
        getStateStore("__scriptData")[name] = value;
    }
    exports.ScriptData = void 0;
    (function (ScriptData) {
        function bindToChange(name, regClass, onChange) {
            typeof $ !== "undefined" && typeof document !== "undefined" && $(document.body).bind('scriptdatachange.' + regClass, function (e, s) {
                if (s == name) {
                    onChange();
                }
            });
        }
        ScriptData.bindToChange = bindToChange;
        function triggerChange(name) {
            typeof $ !== "undefined" && typeof document !== "undefined" && $(document.body).triggerHandler('scriptdatachange', [name]);
        }
        ScriptData.triggerChange = triggerChange;
        function unbindFromChange(regClass) {
            typeof $ !== "undefined" && typeof document !== "undefined" && $(document.body).unbind('scriptdatachange.' + regClass);
        }
        ScriptData.unbindFromChange = unbindFromChange;
        function loadOptions(name, async) {
            var _a;
            return {
                async: async,
                cache: true,
                type: 'GET',
                url: resolveUrl('~/DynJS.axd/') + name + '.js?v=' + ((_a = getHash(name)) !== null && _a !== void 0 ? _a : new Date().getTime()),
                data: null,
                dataType: 'text',
                converters: {
                    "text script": function (text) {
                        return text;
                    }
                },
                success: function (data, textStatus, jqXHR) {
                    $.globalEval(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    var isLookup = startsWith(name, "Lookup.");
                    if (xhr.status == 403 && isLookup) {
                        notifyError('<p>Access denied while trying to load the lookup: "<b>' +
                            name.substr(7) + '</b>". Please check if current user has required permissions for this lookup.</p> ' +
                            '<p><em>Lookups use the ReadPermission of their row by default. You may override that for the lookup ' +
                            'like [LookupScript("Some.Lookup", Permission = "?")] to grant all ' +
                            'authenticated users to read it (or use "*" for public).</em></p>' +
                            '<p><em>Note that this might be a security risk if the lookup contains sensitive data, ' +
                            'so it could be better to set a separate permission for lookups, like "MyModule:Lookups".</em></p>', null, {
                            timeOut: 10000,
                            escapeHtml: false
                        });
                        return;
                    }
                    notifyError("An error occurred while trying to load " +
                        (isLookup ? ' the lookup: "' + name.substr(7) :
                            ' dynamic script: "' + name) +
                        '"!. Please check the error message displayed in the dialog below for more info.');
                    var html = xhr.responseText;
                    if (!html) {
                        if (!xhr.status)
                            alertDialog("An unknown connection error occurred! Check browser console for details.");
                        else if (xhr.status == 500)
                            alertDialog("HTTP 500: Connection refused! Check browser console for details.");
                        else
                            alertDialog("HTTP " + xhr.status + ' error! Check browser console for details.');
                    }
                    else
                        iframeDialog({ html: html });
                }
            };
        }
        var loadScriptPromises = {};
        function loadScriptAsync(name) {
            var _a;
            var key = name + '?' + ((_a = getHash(name)) !== null && _a !== void 0 ? _a : '');
            var promise = loadScriptPromises[key];
            if (promise)
                return promise;
            var options = loadOptions(name, true);
            blockUI(null);
            loadScriptPromises[key] = promise = Promise.resolve($.ajax(options).always(function () {
                delete loadScriptPromises[key];
                blockUndo();
            }));
            return promise;
        }
        function loadScriptData(name) {
            $.ajax(loadOptions(name, false));
        }
        function loadScriptDataAsync(name) {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, loadScriptAsync(name)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        function loadError(name) {
            var message;
            if (name != null &&
                name.startsWith('Lookup.')) {
                message = 'No lookup with key "' + name.substring(7) + '" is registered. Please make sure you have a' +
                    ' [LookupScript("' + name.substring(7) + '")] attribute in server side code on top of a row / custom lookup and ' +
                    ' its key is exactly the same.';
            }
            else {
                message = format("Can't load script data: {0}!", name);
            }
            notifyError(message);
            throw new Error(message);
        }
        function ensure(name) {
            var data = getLoadedData(name);
            if (data == null) {
                loadScriptData(name);
            }
            data = getLoadedData(name);
            if (data == null)
                loadError(name);
            return data;
        }
        ScriptData.ensure = ensure;
        function ensureAsync(name) {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var data;
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = getLoadedData(name);
                            if (data != null)
                                return [2 /*return*/, data];
                            return [4 /*yield*/, loadScriptDataAsync(name)];
                        case 1:
                            _a.sent();
                            data = getLoadedData(name);
                            if (data == null)
                                loadError(name);
                            return [2 /*return*/, data];
                    }
                });
            });
        }
        ScriptData.ensureAsync = ensureAsync;
        function reload(name) {
            getHash(name, true);
            loadScriptData(name);
            var data = getLoadedData(name);
            return data;
        }
        ScriptData.reload = reload;
        function reloadAsync(name) {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getHash(name, true);
                            return [4 /*yield*/, loadScriptDataAsync(name)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, getLoadedData(name)];
                    }
                });
            });
        }
        ScriptData.reloadAsync = reloadAsync;
        function canLoad(name) {
            return getLoadedData(name) != null || getHash(name) != null;
        }
        ScriptData.canLoad = canLoad;
        function setRegisteredScripts(scripts) {
            var t = new Date().getTime().toString();
            for (var k in scripts) {
                setHash(k, scripts[k] || t);
            }
        }
        ScriptData.setRegisteredScripts = setRegisteredScripts;
        function set(name, value) {
            setLoadedData(name, value);
            triggerChange(name);
        }
        ScriptData.set = set;
    })(exports.ScriptData || (exports.ScriptData = {}));
    function getRemoteData(key) {
        return exports.ScriptData.ensure('RemoteData.' + key);
    }
    function getRemoteDataAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.ScriptData.ensureAsync('RemoteData.' + key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function getLookup(key) {
        return exports.ScriptData.ensure('Lookup.' + key);
    }
    function getLookupAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.ScriptData.ensureAsync('Lookup.' + key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function reloadLookup(key) {
        return exports.ScriptData.reload('Lookup.' + key);
    }
    function reloadLookupAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.ScriptData.reloadAsync('Lookup.' + key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function getColumns(key) {
        return getColumnsData(key).items;
    }
    function getColumnsData(key) {
        return exports.ScriptData.ensure('Columns.' + key);
    }
    function getColumnsAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getColumnsDataAsync(key)];
                    case 1: return [2 /*return*/, (_a.sent()).items];
                }
            });
        });
    }
    function getColumnsDataAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                return [2 /*return*/, exports.ScriptData.ensureAsync('Columns.' + key)];
            });
        });
    }
    function getForm(key) {
        return getFormData(key).items;
    }
    function getFormData(key) {
        return exports.ScriptData.ensure('Form.' + key);
    }
    function getFormAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getFormDataAsync(key)];
                    case 1: return [2 /*return*/, (_a.sent()).items];
                }
            });
        });
    }
    function getFormDataAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.ScriptData.ensureAsync('Form.' + key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function getTemplate(key) {
        return exports.ScriptData.ensure('Template.' + key);
    }
    function getTemplateAsync(key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.ScriptData.ensureAsync('Template.' + key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function canLoadScriptData(name) {
        return exports.ScriptData.canLoad(name);
    }
    var exported = {
        canLoadScriptData: canLoadScriptData,
        getColumns: getColumns,
        getColumnsAsync: getColumnsAsync,
        getForm: getForm,
        getFormAsync: getFormAsync,
        getLookup: getLookup,
        getLookupAsync: getLookupAsync,
        getRemoteData: getRemoteData,
        getRemoteDataAsync: getRemoteDataAsync,
        getTemplate: getTemplate,
        getTemplateAsync: getTemplateAsync,
        reloadLookup: reloadLookup,
        reloadLookupAsync: reloadLookupAsync,
        ScriptData: exports.ScriptData
    };
    if (typeof globalThis !== "undefined") {
        var Q = globalThis.Q || (globalThis.Q = {});
        for (var i in exported)
            if (Q[i] == null)
                Q[i] = exported[i];
    }

    var andOrRegex = /[|&]/;
    /**
     * Contains permission related functions.
     *
     * ## Note
     * We use a namespace here both for compatibility and for allowing users to override
     * these functions easily in ES modules environment, which is normally hard to do.
     */
    exports.Authorization = void 0;
    (function (Authorization) {
        /**
         * Checks if the current user has the permission specified.
         * This should only be used for UI purposes and it is strongly recommended to check permissions server side.
         *
         * > Please prefer the `hasPermissionAsync` variant as this may block the UI thread if the `UserData` script is not already loaded.
         * @param permission Permission key. It may contain logical operators like A&B|C.
         * @returns `false` for "null or undefined", true for "*", `IsLoggedIn` for "?". For other permissions,
         * if the user has the permission or if the user has the `IsAdmin` flag (super admin) `true`, otherwise `false`.
         */
        function hasPermission(permission) {
            if (permission == null)
                return false;
            if (permission == "*")
                return true;
            // normally in server side empty permission would return false
            // here we are more tolerant for compatibility reasons and
            // as it is less risky
            if (permission == "" || permission == "?")
                return !!Authorization.isLoggedIn;
            var ud = Authorization.userDefinition;
            if (!ud)
                return false;
            if (ud.IsAdmin)
                return true;
            return isPermissionInSet(ud.Permissions, permission);
        }
        Authorization.hasPermission = hasPermission;
        /**
         * Checks if the current user has the permission specified.
         * This should only be used for UI purposes and it is strongly recommended to check permissions server side.
         *
         * @param permission Permission key. It may contain logical operators like A&B|C.
         * @returns `false` for "null or undefined", true for "*", `IsLoggedIn` for "?". For other permissions,
         * if the user has the permission or if the user has the `IsAdmin` flag (super admin) `true`, otherwise `false`.
         */
        function hasPermissionAsync(permission) {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var ud;
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (permission == null)
                                return [2 /*return*/, false];
                            if (permission == "*")
                                return [2 /*return*/, true];
                            if (!(permission == "" || permission == "?")) return [3 /*break*/, 2];
                            return [4 /*yield*/, Authorization.isLoggedInAsync];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, Authorization.userDefinitionAsync];
                        case 3:
                            ud = _a.sent();
                            if (!ud)
                                return [2 /*return*/, false];
                            if (ud.IsAdmin)
                                return [2 /*return*/, true];
                            return [2 /*return*/, isPermissionInSet(ud.Permissions, permission)];
                    }
                });
            });
        }
        Authorization.hasPermissionAsync = hasPermissionAsync;
        /**
         * Checks if the hashset contains the specified permission, also handling logical "|" and "&" operators
         * @param permissionSet Set of permissions
         * @param permission Permission key or a permission expression containing & | operators
         * @returns true if set contains permission
         */
        function isPermissionInSet(permissionSet, permission) {
            if (!permissionSet || permission == null)
                return false;
            if (permissionSet[permission])
                return true;
            if (!andOrRegex.test(permission))
                return false;
            var orParts = permission.split('|');
            for (var _i = 0, orParts_1 = orParts; _i < orParts_1.length; _i++) {
                var r = orParts_1[_i];
                if (!r.length)
                    continue;
                var andParts = r.split('&');
                var anyFalse = false;
                for (var _a = 0, andParts_1 = andParts; _a < andParts_1.length; _a++) {
                    var n = andParts_1[_a];
                    if (!n || !permissionSet[n]) {
                        anyFalse = true;
                        break;
                    }
                }
                if (!anyFalse)
                    return true;
            }
            return false;
        }
        Authorization.isPermissionInSet = isPermissionInSet;
        /**
         * Throws an error if the current user does not have the specified permission.
         * Prefer `await validatePermissionAsync()` as this one might block the UI if the `UserData`
         * is not already loaded.
         * @param permission Permission key. It may contain logical operators like A&B|C.
         */
        function validatePermission(permission) {
            if (!hasPermission(permission)) {
                notifyError(localText("Authorization.AccessDenied"));
                throw new Error(localText("Authorization.AccessDenied"));
            }
        }
        Authorization.validatePermission = validatePermission;
        /**
        * Throws an error if the current user does not have the specified permission.
        * @param permission Permission key. It may contain logical operators like A&B|C.
        * @example
        * await Authorization.validatePermissionAsync("A&B|C");
        */
        function validatePermissionAsync(permission) {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, hasPermissionAsync(permission)];
                        case 1:
                            if (!(_a.sent())) {
                                notifyError(localText("Authorization.AccessDenied"));
                                throw new Error(localText("Authorization.AccessDenied"));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        Authorization.validatePermissionAsync = validatePermissionAsync;
    })(exports.Authorization || (exports.Authorization = {}));
    Object.defineProperty(exports.Authorization, "isLoggedIn", {
        get: function () {
            var _a, _b;
            return !!((_b = (_a = exports.Authorization.userDefinition) === null || _a === void 0 ? void 0 : _a.Username) === null || _b === void 0 ? void 0 : _b.length);
        },
        configurable: true
    });
    Object.defineProperty(exports.Authorization, "isLoggedInAsync", {
        get: function () {
            var _a, _b;
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, exports.Authorization.userDefinitionAsync];
                        case 1: return [2 /*return*/, !!((_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.Username) === null || _b === void 0 ? void 0 : _b.length)];
                    }
                });
            });
        },
        configurable: true
    });
    Object.defineProperty(exports.Authorization, "userDefinition", {
        get: function () {
            return getRemoteData("UserData");
        },
        configurable: true
    });
    Object.defineProperty(exports.Authorization, "userDefinitionAsync", {
        get: function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getRemoteDataAsync("UserData")];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        configurable: true
    });
    Object.defineProperty(exports.Authorization, "username", {
        get: function () {
            var _a;
            return (_a = exports.Authorization.userDefinition) === null || _a === void 0 ? void 0 : _a.Username;
        },
        configurable: true
    });
    Object.defineProperty(exports.Authorization, "usernameAsync", {
        get: function () {
            var _a;
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, exports.Authorization.userDefinitionAsync];
                        case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.Username];
                    }
                });
            });
        },
        configurable: true
    });

    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function also has a property 'clear' that can be used
     * to clear the timer to prevent previously scheduled executions, and flush method
     * to invoke scheduled executions now if any.
     * @param wait The function will be called after it stops being called for
     * N milliseconds.
     * @param immediate If passed, trigger the function on the leading edge, instead of the trailing.
     *
     * @source underscore.js
     */
    function debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        if (null == wait)
            wait = 100;
        var later = function () {
            var last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate)
                    result = func.apply(context, args);
                if (!timeout)
                    context = args = null;
            }
        };
        var debounced = function () {
            context = this;
            args = arguments;
            timestamp = Date.now();
            if (!timeout) {
                timeout = setTimeout(later, wait);
                if (immediate)
                    result = func.apply(context, args);
            }
            return result;
        };
        debounced.clear = function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };
        debounced.flush = function () {
            if (timeout) {
                result = func.apply(context, args);
                context = args = null;
                clearTimeout(timeout);
                timeout = null;
            }
        };
        return debounced;
    }

    exports.LayoutTimer = void 0;
    (function (LayoutTimer) {
        var timeout;
        var nextKey = 0;
        var regCount = 0;
        var regs = {};
        function startTimer() {
            if (timeout == null && regCount > 0) {
                timeout = window.setTimeout(onTimeout, 100);
            }
        }
        function clearTimer() {
            if (timeout != null) {
                window.clearTimeout(timeout);
                timeout = null;
            }
        }
        function onTimeout() {
            for (var key in regs) {
                var reg = regs[key];
                try {
                    var el = reg.element();
                    if (!el)
                        continue;
                    var w = el.offsetWidth;
                    var h = el.offsetHeight;
                    try {
                        if ((reg.width && reg.storedWidth !== w) ||
                            (reg.height && reg.storedHeight !== h) ||
                            (!reg.width && !reg.height && (!w !== !reg.storedWidth || !h !== !reg.storedHeight))) {
                            if (w > 0 && h > 0) {
                                try {
                                    reg.handler();
                                }
                                finally {
                                    w = el.offsetWidth;
                                    h = el.offsetHeight;
                                }
                            }
                        }
                    }
                    finally {
                        reg.storedWidth = w;
                        reg.storedHeight = h;
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            clearTimer();
            startTimer();
        }
        function store(key) {
            var reg = regs[key];
            if (!reg)
                return;
            var el = reg.element();
            if (!el)
                return;
            reg.storedWidth = el.offsetWidth;
            reg.storedHeight = el.offsetHeight;
        }
        LayoutTimer.store = store;
        function trigger(key) {
            var reg = regs[key];
            if (!reg)
                return;
            store(key);
            if (reg.storedWidth >= 0 &&
                reg.storedHeight >= 0) {
                reg.handler();
            }
            store(key);
        }
        LayoutTimer.trigger = trigger;
        function onSizeChange(element, handler, width, height) {
            if (handler == null)
                throw "Layout handler can't be null!";
            regs[++nextKey] = {
                element: element,
                handler: handler,
                width: width !== false,
                height: height !== false
            };
            regCount++;
            store(nextKey);
            startTimer();
            return nextKey;
        }
        LayoutTimer.onSizeChange = onSizeChange;
        function onWidthChange(element, handler) {
            return onSizeChange(element, handler, true, false);
        }
        LayoutTimer.onWidthChange = onWidthChange;
        function onHeightChange(element, handler) {
            return onSizeChange(element, handler, false, true);
        }
        LayoutTimer.onHeightChange = onHeightChange;
        function onShown(element, handler) {
            return onSizeChange(element, handler, false, false);
        }
        LayoutTimer.onShown = onShown;
        function off(key) {
            var reg = regs[key];
            if (!reg)
                return 0;
            delete regs[key];
            regCount--;
            if (regCount <= 0)
                clearTimer();
            return 0;
        }
        LayoutTimer.off = off;
    })(exports.LayoutTimer || (exports.LayoutTimer = {}));
    function executeOnceWhenVisible(element, callback) {
        var el = element && element[0];
        if (!el)
            return;
        if (el.offsetWidth > 0 && el.offsetHeight > 0) {
            callback();
            return;
        }
        var timer = exports.LayoutTimer.onShown(function () { return el; }, function () {
            exports.LayoutTimer.off(timer);
            callback();
        });
    }
    function executeEverytimeWhenVisible(element, callback, callNowIfVisible) {
        var el = element && element[0];
        if (!el)
            return;
        if (callNowIfVisible && el.offsetWidth > 0 && el.offsetHeight > 0) {
            callback();
        }
        exports.LayoutTimer.onShown(function () { return el; }, function () {
            callback();
        });
    }

    exports.Router = void 0;
    (function (Router) {
        var oldURL;
        var resolving = 0;
        var autoinc = 0;
        var ignoreHash = 0;
        var ignoreTime = 0;
        Router.enabled = true;
        function isEqual(url1, url2) {
            return url1 == url2 || url1 == url2 + '#' || url2 == url1 + '#';
        }
        function navigate(hash, tryBack, silent) {
            if (!Router.enabled || resolving > 0)
                return;
            hash = hash || '';
            hash = hash.replace(/^#/, '');
            hash = (!hash ? "" : '#' + hash);
            var newURL = window.location.href.replace(/#$/, '')
                .replace(/#.*$/, '') + hash;
            if (newURL != window.location.href) {
                if (tryBack && oldURL != null && isEqual(oldURL, newURL)) {
                    if (silent)
                        ignoreChange();
                    oldURL = null;
                    window.history.back();
                    return;
                }
                if (silent)
                    ignoreChange();
                oldURL = window.location.href;
                window.location.hash = hash;
            }
        }
        Router.navigate = navigate;
        function replace(hash, tryBack) {
            navigate(hash, tryBack, true);
        }
        Router.replace = replace;
        function replaceLast(hash, tryBack) {
            if (!Router.enabled)
                return;
            var current = window.location.hash || '';
            if (current.charAt(0) == '#')
                current = current.substr(1, current.length - 1);
            var parts = current.split('/+/');
            if (parts.length > 1) {
                if (hash && hash.length) {
                    parts[parts.length - 1] = hash;
                    hash = parts.join("/+/");
                }
                else {
                    parts.splice(parts.length - 1, 1);
                    hash = parts.join("/+/");
                }
            }
            replace(hash, tryBack);
        }
        Router.replaceLast = replaceLast;
        function visibleDialogs() {
            return $$1('.ui-dialog-content:visible, .ui-dialog.panel-hidden>.ui-dialog-content, .s-Panel').toArray().sort(function (a, b) {
                return ($$1(a).data('qrouterorder') || 0) - ($$1(b).data('qrouterorder') || 0);
            });
        }
        function dialogOpen(owner, element, hash) {
            var route = [];
            var isDialog = owner.hasClass(".ui-dialog-content") || owner.hasClass('.s-Panel');
            var dialog = isDialog ? owner :
                owner.closest('.ui-dialog-content, .s-Panel');
            var value = hash();
            var idPrefix;
            if (dialog.length) {
                var dialogs = visibleDialogs();
                var index = dialogs.indexOf(dialog[0]);
                for (var i = 0; i <= index; i++) {
                    var q = $$1(dialogs[i]).data("qroute");
                    if (q && q.length)
                        route.push(q);
                }
                if (!isDialog) {
                    idPrefix = dialog.attr("id");
                    if (idPrefix) {
                        idPrefix += "_";
                        var id = owner.attr("id");
                        if (id && startsWith(id, idPrefix))
                            value = id.substr(idPrefix.length) + '@' + value;
                    }
                }
            }
            else {
                var id = owner.attr("id");
                if (id && (!owner.hasClass("route-handler") ||
                    $$1('.route-handler').first().attr("id") != id))
                    value = id + "@" + value;
            }
            route.push(value);
            element.data("qroute", value);
            replace(route.join("/+/"));
            element.bind("dialogclose.qrouter panelclose.qrouter", function (e) {
                element.data("qroute", null);
                element.unbind(".qrouter");
                var prhash = element.data("qprhash");
                var tryBack = $$1(e.target).closest('.s-MessageDialog').length > 0 || (e && e.originalEvent &&
                    ((e.originalEvent.type == "keydown" && e.originalEvent.keyCode == 27) ||
                        $$1(e.originalEvent.target).hasClass("ui-dialog-titlebar-close") ||
                        $$1(e.originalEvent.target).hasClass("panel-titlebar-close")));
                if (prhash != null)
                    replace(prhash, tryBack);
                else
                    replaceLast('', tryBack);
            });
        }
        function dialog(owner, element, hash) {
            if (!Router.enabled)
                return;
            element.on("dialogopen.qrouter panelopen.qrouter", function (e) {
                dialogOpen(owner, element, hash);
            });
        }
        Router.dialog = dialog;
        function resolve(hash) {
            var _a, _b, _c;
            if (!Router.enabled)
                return;
            resolving++;
            try {
                hash = (_a = hash !== null && hash !== void 0 ? hash : window.location.hash) !== null && _a !== void 0 ? _a : '';
                if (hash.charAt(0) == '#')
                    hash = hash.substr(1, hash.length - 1);
                var dialogs = visibleDialogs();
                var newParts = hash.split("/+/");
                var oldParts = dialogs.map(function (el) { return $$1(el).data('qroute'); });
                var same = 0;
                while (same < dialogs.length &&
                    same < newParts.length &&
                    oldParts[same] == newParts[same]) {
                    same++;
                }
                for (var i = same; i < dialogs.length; i++) {
                    var d = $$1(dialogs[i]);
                    if (d.hasClass('ui-dialog-content'))
                        (_c = (_b = d).dialog) === null || _c === void 0 ? void 0 : _c.call(_b, 'close');
                    else if (d.hasClass('s-Panel'))
                        closePanel(d);
                }
                for (var i = same; i < newParts.length; i++) {
                    var route = newParts[i];
                    var routeParts = route.split('@');
                    var handler;
                    if (routeParts.length == 2) {
                        var dialog = i > 0 ? $$1(dialogs[i - 1]) : $$1([]);
                        if (dialog.length) {
                            var idPrefix = dialog.attr("id");
                            if (idPrefix) {
                                handler = $$1('#' + idPrefix + "_" + routeParts[0]);
                                if (handler.length) {
                                    route = routeParts[1];
                                }
                            }
                        }
                        if (!handler || !handler.length) {
                            handler = $$1('#' + routeParts[0]);
                            if (handler.length) {
                                route = routeParts[1];
                            }
                        }
                    }
                    if (!handler || !handler.length) {
                        handler = i > 0 ? $$1(dialogs[i - 1]) :
                            $$1('.route-handler').first();
                    }
                    handler.triggerHandler("handleroute", {
                        handled: false,
                        route: route,
                        parts: newParts,
                        index: i
                    });
                }
            }
            finally {
                resolving--;
            }
        }
        Router.resolve = resolve;
        function hashChange(e, o) {
            if (ignoreHash > 0) {
                if (new Date().getTime() - ignoreTime > 1000) {
                    ignoreHash = 0;
                }
                else {
                    ignoreHash--;
                    return;
                }
            }
            resolve();
        }
        function ignoreChange() {
            ignoreHash++;
            ignoreTime = new Date().getTime();
        }
        window.addEventListener("hashchange", hashChange, false);
        var routerOrder = 1;
        typeof document !== "undefined" && typeof $$1 !== "undefined" &&
            $$1.fn && $$1(document).on("dialogopen panelopen", ".ui-dialog-content, .s-Panel", function (event, ui) {
            if (!Router.enabled)
                return;
            var dlg = $$1(event.target);
            dlg.data("qrouterorder", routerOrder++);
            if (dlg.data("qroute"))
                return;
            dlg.data("qprhash", window.location.hash);
            var owner = $$1(visibleDialogs).not(dlg).last();
            if (!owner.length)
                owner = $$1('html');
            dialogOpen(owner, dlg, function () {
                return "!" + (++autoinc).toString(36);
            });
        });
    })(exports.Router || (exports.Router = {}));

    function initFullHeightGridPage(gridDiv, opt) {
        var _a, _b, _c;
        var el = ($$1 && gridDiv instanceof $$1) ? gridDiv.get(0) : gridDiv;
        document.documentElement.classList.add('full-height-page');
        el.classList.add('responsive-height');
        var setHeight = (_a = opt === null || opt === void 0 ? void 0 : opt.setHeight) !== null && _a !== void 0 ? _a : ($$1 && (!el.classList.contains('s-DataGrid') &&
            !el.classList.contains('s-Panel')));
        var layout = function () {
            setHeight && layoutFillHeight($$1(el));
            $$1 ? $$1(el).triggerHandler('layout') : el.dispatchEvent(new Event('layout'));
        };
        if (document.body.classList.contains('has-layout-event')) {
            $$1 ? $$1(document.body).on('layout', layout) : el.addEventListener('layout', layout);
        }
        else if ((_b = window.Metronic) === null || _b === void 0 ? void 0 : _b.addResizeHandler) {
            window.Metronic.addResizeHandler(layout);
        }
        else {
            $$1 ? $$1(window).resize(layout) : window.addEventListener('resize', layout);
        }
        layout();
        $$1 && $$1(el).one('remove', function () {
            $$1(window).off('resize', layout);
            $$1('body').off('layout', layout);
        });
        if (!(opt === null || opt === void 0 ? void 0 : opt.noRoute) &&
            typeof document !== "undefined" &&
            !$$1(document.body).attr('data-fhrouteinit')) {
            $$1(document.body).attr('data-fhrouteinit', 'true');
            // ugly, but to it is to make old pages work without having to add this
            typeof exports.Router !== "undefined" && ((_c = exports.Router.resolve) === null || _c === void 0 ? void 0 : _c.call(exports.Router));
        }
    }
    function layoutFillHeightValue(element) {
        var h = 0;
        element.parent().children().not(element).each(function (i, e) {
            var q = $$1(e);
            if (q.is(':visible')) {
                h += q.outerHeight(true);
            }
        });
        h = element.parent().height() - h;
        if (element.css('box-sizing') !== 'border-box') {
            h = h - (element.outerHeight(true) - element.height());
        }
        return h;
    }
    function layoutFillHeight(element) {
        var h = layoutFillHeightValue(element);
        var n = Math.round(h) + 'px';
        if (element.css('height') != n) {
            element.css('height', n);
        }
    }
    function isMobileView() {
        var _a, _b, _c;
        return typeof window !== 'undefined' &&
            ((_c = (_b = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(max-width: 767px)')) === null || _b === void 0 ? void 0 : _b.matches) !== null && _c !== void 0 ? _c : window.innerWidth < 768);
    }
    function initOnLoad() {
        var globalObj = getGlobalThis();
        if (globalObj && Config.rootNamespaces) {
            for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                var ns = _a[_i];
                var obj = getNested(globalObj, ns);
                if (obj != null)
                    initializeTypes(obj, ns + ".", 3);
            }
        }
    }
    if (typeof $$1 !== "undefined")
        $$1(initOnLoad);
    else if (typeof document !== "undefined" && document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', initOnLoad);
    else
        initOnLoad();
    function triggerLayoutOnShow(element) {
        executeEverytimeWhenVisible(element, function () {
            element.triggerHandler('layout');
        }, true);
    }
    function centerDialog(el) {
        var _a, _b;
        el = el.closest(".ui-dialog");
        (_b = (_a = el).position) === null || _b === void 0 ? void 0 : _b.call(_a, { at: 'center center', of: window });
        var pos = el.position();
        if (pos.left < 0)
            el.css("left", "0px");
        if (pos.top < 0)
            el.css("top", "0px");
    }

    var Lookup = /** @class */ (function () {
        function Lookup(options, items) {
            this.items = [];
            this.itemById = {};
            options = options || {};
            this.textFormatter = options.textFormatter;
            this.idField = options.idField;
            this.parentIdField = options.parentIdField;
            this.textField = options.textField;
            this.textFormatter = options.textFormatter;
            if (items != null)
                this.update(items);
        }
        Lookup.prototype.update = function (value) {
            this.items = [];
            this.itemById = {};
            if (value) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var k = value_1[_i];
                    this.items.push(k);
                }
            }
            var idField = this.idField;
            if (idField) {
                for (var _a = 0, _b = this.items; _a < _b.length; _a++) {
                    var r = _b[_a];
                    var v = r[idField];
                    if (v != null) {
                        this.itemById[v] = r;
                    }
                }
            }
        };
        return Lookup;
    }());

    exports.SummaryType = void 0;
    (function (SummaryType) {
        SummaryType[SummaryType["Disabled"] = -1] = "Disabled";
        SummaryType[SummaryType["None"] = 0] = "None";
        SummaryType[SummaryType["Sum"] = 1] = "Sum";
        SummaryType[SummaryType["Avg"] = 2] = "Avg";
        SummaryType[SummaryType["Min"] = 3] = "Min";
        SummaryType[SummaryType["Max"] = 4] = "Max";
    })(exports.SummaryType || (exports.SummaryType = {}));
    registerEnum(exports.SummaryType, 'Serenity.SummaryType');

    exports.ColumnSelection = void 0;
    (function (ColumnSelection) {
        ColumnSelection[ColumnSelection["List"] = 0] = "List";
        ColumnSelection[ColumnSelection["KeyOnly"] = 1] = "KeyOnly";
        ColumnSelection[ColumnSelection["Details"] = 2] = "Details";
        ColumnSelection[ColumnSelection["None"] = 3] = "None";
        ColumnSelection[ColumnSelection["IdOnly"] = 4] = "IdOnly";
        ColumnSelection[ColumnSelection["Lookup"] = 5] = "Lookup";
    })(exports.ColumnSelection || (exports.ColumnSelection = {}));
    exports.RetrieveColumnSelection = void 0;
    (function (RetrieveColumnSelection) {
        RetrieveColumnSelection[RetrieveColumnSelection["details"] = 0] = "details";
        RetrieveColumnSelection[RetrieveColumnSelection["keyOnly"] = 1] = "keyOnly";
        RetrieveColumnSelection[RetrieveColumnSelection["list"] = 2] = "list";
        RetrieveColumnSelection[RetrieveColumnSelection["none"] = 3] = "none";
        RetrieveColumnSelection[RetrieveColumnSelection["idOnly"] = 4] = "idOnly";
        RetrieveColumnSelection[RetrieveColumnSelection["lookup"] = 5] = "lookup";
    })(exports.RetrieveColumnSelection || (exports.RetrieveColumnSelection = {}));

    /// <reference types="jquery.validation" />
    var validator = $$1 === null || $$1 === void 0 ? void 0 : $$1.validator;

    if (validator && validator.methods && validator.addMethod) {
        if (validator.prototype.showLabel) {
            var orgShowLabel = validator.prototype.showLabel;
            validator.prototype.showLabel = function (element, message) {
                if (message != null)
                    message = htmlEncode(message);
                orgShowLabel.call(this, element, message);
            };
        }
        validator.addMethod('customValidate', function (value, element) {
            var result = this.optional(element);
            if (element == null || !!result) {
                return result;
            }
            var events = $._data(element, 'events');
            if (!events) {
                return true;
            }
            var handlers = events.customValidate;
            if (handlers == null || handlers.length === 0) {
                return true;
            }
            var el = $(element);
            for (var i = 0; !!(i < handlers.length); i++) {
                if ($.isFunction(handlers[i].handler)) {
                    var message = handlers[i].handler(el);
                    if (message != null) {
                        el.data('customValidationMessage', message);
                        return false;
                    }
                }
            }
            return true;
        }, function (o, e) {
            return $(e).data('customValidationMessage');
        });
        validator.addMethod("dateQ", function (value, element) {
            var o = this.optional(element);
            if (o)
                return o;
            var d = parseDate(value);
            if (!d || isNaN(d.valueOf()))
                return false;
            var z = new Date(d);
            z.setHours(0, 0, 0, 0);
            return z.getTime() === d.getTime();
        });
        validator.addMethod("dateTimeQ", function (value, element) {
            var o = this.optional(element);
            if (o)
                return o;
            var d = parseDate(value);
            if (!d || isNaN(d.valueOf()))
                return false;
            return true;
        });
        validator.addMethod("hourAndMin", function (value, element) {
            return this.optional(element) || !isNaN(parseHourAndMin(value));
        });
        validator.addMethod("dayHourAndMin", function (value, element) {
            return this.optional(element) || !isNaN(parseDayHourAndMin(value));
        });
        validator.addMethod("decimalQ", function (value, element) {
            return this.optional(element) || !isNaN(parseDecimal(value));
        });
        validator.addMethod("integerQ", function (value, element) {
            return this.optional(element) || !isNaN(parseInteger(value));
        });
        var oldEmail_1 = validator.methods['email'];
        var emailRegex_1 = null;
        validator.addMethod("email", function (value, element) {
            if (Config.emailAllowOnlyAscii)
                return oldEmail_1.call(this, value, element);
            if (emailRegex_1 == null)
                emailRegex_1 = new RegExp("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|" +
                    "[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|" +
                    "((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|" +
                    "\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])" +
                    "([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)" +
                    "+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|" +
                    "[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))$", "i");
            return emailRegex_1.test(value);
        });
        $(loadValidationErrorMessages);
    }
    function loadValidationErrorMessages() {
        var addMsg = function (m, k) {
            var txt = tryGetText("Validation." + k);
            if (txt)
                validator.messages[m] = txt;
            else if (!validator.messages[m])
                validator.messages[m] = k + "?";
        };
        addMsg("required", "Required");
        addMsg("email", "Email");
        addMsg("minlength", "MinLength");
        addMsg("maxlength", "MaxLength");
        addMsg("digits", "Digits");
        addMsg("range", "Range");
        addMsg("xss", "Xss");
        addMsg("dateQ", "DateInvalid");
        addMsg("decimalQ", "Decimal");
        addMsg("integerQ", "Integer");
        addMsg("url", "Url");
    }
    function setTooltip(el, val, show) {
        var _a, _b, _c, _d, _e, _f;
        if (isBS3())
            (_b = (_a = el.attr('data-original-title', val || '')) === null || _a === void 0 ? void 0 : _a.tooltip) === null || _b === void 0 ? void 0 : _b.call(_a, 'fixTitle');
        else
            (_d = (_c = el.attr('title', val || '')) === null || _c === void 0 ? void 0 : _c.tooltip) === null || _d === void 0 ? void 0 : _d.call(_c, '_fixTitle');
        if (show != null)
            (_f = (_e = el).tooltip) === null || _f === void 0 ? void 0 : _f.call(_e, show ? 'show' : 'hide');
        return el;
    }
    function getHighlightTarget(el) {
        var hl = el.dataset.vxHighlight;
        if (hl)
            return document.getElementById(hl);
        else if (el.classList.contains("select2-offscreen") && el.id)
            return document.getElementById('s2id_' + el.id);
    }
    function baseValidateOptions() {
        return {
            errorClass: 'error',
            ignore: '[style*="display:none"], [style*="display: none"] *, .hidden *, input[type=hidden], .no-validate',
            ignoreTitle: true,
            normalizer: function (value) {
                return $.trim(value);
            },
            highlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                }
                else {
                    if (errorClass != null && errorClass.length)
                        element.classList.add(errorClass);
                    if (validClass != null && validClass.length)
                        element.classList.remove(validClass);
                    var hl = getHighlightTarget(element);
                    if (hl && hl.classList) {
                        if (errorClass != null && errorClass.length)
                            hl.classList.add(errorClass);
                        if (validClass != null && validClass.length)
                            hl.classList.remove(validClass);
                    }
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                }
                else {
                    if (errorClass != null && errorClass.length)
                        element.classList.remove(errorClass);
                    if (validClass != null && validClass.length)
                        element.classList.add(validClass);
                    var hl = getHighlightTarget(element);
                    if (hl && hl.classList) {
                        if (errorClass != null && errorClass.length)
                            hl.classList.remove(errorClass);
                        if (validClass != null && validClass.length)
                            hl.classList.add(validClass);
                    }
                }
            },
            showErrors: function () {
                var _a;
                if ((_a = $ === null || $ === void 0 ? void 0 : $.fn) === null || _a === void 0 ? void 0 : _a.tooltip) {
                    var i, elements, error, $el, hl;
                    for (i = 0; this.errorList[i]; i++) {
                        error = this.errorList[i];
                        hl = getHighlightTarget(error.element);
                        if (hl != null)
                            $el = $(hl);
                        else
                            $el = $(error.element);
                        if (i != 0)
                            setTooltip($el, '', false);
                        else
                            setTooltip($el, error.message, true);
                    }
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        hl = getHighlightTarget(error.element);
                        if (hl != null)
                            $el = $(hl);
                        else
                            $el = $(error.element);
                        setTooltip($el, '', false);
                    }
                }
                validator["prototype"].defaultShowErrors.call(this);
            }
        };
    }
    function validateForm(form, opt) {
        return form.validate(extend(baseValidateOptions(), opt));
    }
    function addValidationRule(element, eventClass, rule) {
        if (!element.length)
            return element;
        if (rule == null)
            throw new Exception('rule is null!');
        element.addClass('customValidate').bind('customValidate.' + eventClass, rule);
        return element;
    }
    function removeValidationRule(element, eventClass) {
        element.unbind('customValidate.' + eventClass);
        return element;
    }

    var oldShowLabel;
    function validateShowLabel(element, message) {
        oldShowLabel.call(this, element, message);
        this.errorsFor(element).each(function (i, e) {
            var $e = $(e);
            if ($e.parent('.vx').length) {
                $e.attr('title', $e.text());
                if (message && $e.hasClass('error'))
                    $e.removeClass('checked');
            }
        });
    }
    function jQueryValidationInitialization() {
        if (typeof $ === "undefined" ||
            !$.validator)
            return;
        var p = $.validator;
        p = p.prototype;
        oldShowLabel = p.showLabel;
        p.showLabel = validateShowLabel;
        p.oldfocusInvalid = p.focusInvalid;
        p.focusInvalid = function () {
            if (this.settings.abortHandler)
                this.settings.abortHandler(this);
            this.oldfocusInvalid.call(this);
        };
        p.oldstopRequest = p.focusInvalid;
        p.stopRequest = function (element, valid) {
            var formSubmitted = this.formSubmitted;
            this.oldfocusInvalid.call(this, [element, valid]);
            if (!valid && this.pendingRequest == 0 && formSubmitted && this.settings.abortHandler) {
                this.settings.abortHandler(this);
            }
        };
        p.resetAll = function () {
            this.submitted = {};
            this.prepareForm();
            this.hideErrors();
            this.elements().removeClass(this.settings.errorClass);
        };
    }
    function validatorAbortHandler(validator) {
        validator.settings.abortHandler = null;
        validator.settings.submitHandler = function () {
            return false;
        };
    }
    function validateOptions(options) {
        var opt = baseValidateOptions();
        delete opt.showErrors;
        return extend(extend(opt, {
            meta: 'v',
            errorPlacement: function (error, element) {
                var field = null;
                var vx = element.attr('data-vx-id');
                if (vx) {
                    field = $('#' + vx);
                    if (!field.length)
                        field = null;
                    else
                        field = field[0];
                }
                if (field == null) {
                    field = element.parents('div.field');
                    if (field.length) {
                        var inner = $('div.vx', field[0]);
                        if (inner.length)
                            field = inner[0];
                    }
                    else
                        field = element.parent();
                }
                error.appendTo(field);
            },
            submitHandler: function () {
                return false;
            },
            invalidHandler: function (event, validator) {
                var _a;
                notifyError(localText("Validation.InvalidFormMessage"));
                $(validator.errorList.map(function (x) { return x.element; }))
                    .closest('.category.collapsed')
                    .children('.category-title')
                    .each(function (i, x) {
                    $(x).click();
                    return true;
                });
                if (validator.errorList.length) {
                    var el = validator.errorList[0].element;
                    if (el) {
                        var bsPaneId = $(el).closest('.tab-content>.tab-pane[id]:not(.active)').attr('id');
                        if (bsPaneId) {
                            var selector = 'a[href="#' + bsPaneId + '"]';
                            $(selector).click(); // bs3/bs4
                            (_a = document.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.click(); // bs5+
                        }
                        var uiPaneId = $(el).closest('.ui-tabs-panel[id]:not(.ui-tabs-panel-active)').attr('id');
                        if (uiPaneId)
                            $('a[href="#' + uiPaneId + '"]').click();
                        if ($.fn.tooltip) {
                            var $el;
                            var hl = getHighlightTarget(el);
                            if (hl)
                                $el = $(hl);
                            else
                                $el = $(el);
                            $.fn.tooltip && $el.tooltip({
                                title: validator.errorList[0].message,
                                trigger: 'manual'
                            }).tooltip('show');
                            window.setTimeout(function () {
                                $el.tooltip(isBS3() ? 'destroy' : 'dispose');
                            }, 1500);
                        }
                    }
                }
            },
            success: function (label) {
                label.addClass('checked');
            }
        }), options);
    }
    if (typeof $ !== "undefined") {
        if ($.validator)
            jQueryValidationInitialization();
        else
            $(jQueryValidationInitialization);
    }
    else if (typeof document !== "undefined") {
        if (document.readyState === 'loading')
            document.addEventListener('DOMContentLoaded', jQueryValidationInitialization);
        else
            setTimeout(jQueryValidationInitialization, 100);
    }

    /**
     * CriteriaBuilder is a class that allows to build unary or binary criteria with completion support.
     */
    var CriteriaBuilder = /** @class */ (function (_super) {
        tslib.__extends(CriteriaBuilder, _super);
        function CriteriaBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Creates a between criteria.
         * @param fromInclusive from value
         * @param toInclusive to value
         */
        CriteriaBuilder.prototype.bw = function (fromInclusive, toInclusive) {
            return [[this, '>=', fromInclusive], 'and', [this, '<=', toInclusive]];
        };
        /**
         * Creates a contains criteria
         * @param value contains value
         */
        CriteriaBuilder.prototype.contains = function (value) {
            return [this, 'like', '%' + value + '%'];
        };
        /**
         * Creates a endsWith criteria
         * @param value endsWith value
         */
        CriteriaBuilder.prototype.endsWith = function (value) {
            return [this, 'like', '%' + value];
        };
        /**
         * Creates an equal (=) criteria
         * @param value equal value
         */
        CriteriaBuilder.prototype.eq = function (value) {
            return [this, '=', value];
        };
        /**
         * Creates a greater than criteria
         * @param value greater than value
         */
        CriteriaBuilder.prototype.gt = function (value) {
            return [this, '>', value];
        };
        /**
         * Creates a greater than or equal criteria
         * @param value greater than or equal value
         */
        CriteriaBuilder.prototype.ge = function (value) {
            return [this, '>=', value];
        };
        /**
         * Creates a in criteria
         * @param values in values
         */
        CriteriaBuilder.prototype.in = function (values) {
            return [this, 'in', [values]];
        };
        /**
         * Creates a IS NULL criteria
         */
        CriteriaBuilder.prototype.isNull = function () {
            return ['is null', this];
        };
        /**
         * Creates a IS NOT NULL criteria
         */
        CriteriaBuilder.prototype.isNotNull = function () {
            return ['is not null', this];
        };
        /**
         * Creates a less than or equal to criteria
         * @param value less than or equal to value
         */
        CriteriaBuilder.prototype.le = function (value) {
            return [this, '<=', value];
        };
        /**
         * Creates a less than criteria
         * @param value less than value
         */
        CriteriaBuilder.prototype.lt = function (value) {
            return [this, '<', value];
        };
        /**
         * Creates a not equal criteria
         * @param value not equal value
         */
        CriteriaBuilder.prototype.ne = function (value) {
            return [this, '!=', value];
        };
        /**
         * Creates a LIKE criteria
         * @param value like value
         */
        CriteriaBuilder.prototype.like = function (value) {
            return [this, 'like', value];
        };
        /**
         * Creates a STARTS WITH criteria
         * @param value startsWith value
         */
        CriteriaBuilder.prototype.startsWith = function (value) {
            return [this, 'like', value + '%'];
        };
        /**
         * Creates a NOT IN criteria
         * @param values array of NOT IN values
         */
        CriteriaBuilder.prototype.notIn = function (values) {
            return [this, 'not in', [values]];
        };
        /**
         * Creates a NOT LIKE criteria
         * @param value not like value
         */
        CriteriaBuilder.prototype.notLike = function (value) {
            return [this, 'not like', value];
        };
        return CriteriaBuilder;
    }(Array));
    var TOKEN_IDENTIFIER = 1;
    var TOKEN_OPERATOR = 2;
    var TOKEN_VALUE = 3;
    var TOKEN_PARAM = 4;
    var ParseError = function (expression, error, position) {
        this.expression = expression;
        this.error = error;
        this.position = position;
        this.toString = function () {
            return 'Error parsing expression: "' + expression + '", "' +
                error + ', position: ' + position;
        };
    };
    function tokenize(expression) {
        var end, v;
        var tokens = [];
        var l = expression.length;
        var l1 = expression.length - 1;
        var openParens = 0;
        var index;
        var ch;
        function skipWhiteSpace() {
            while (index < l) {
                ch = expression.charAt(index);
                if (ch === ' ' || ch === '\t') {
                    index++;
                    continue;
                }
                break;
            }
        }
        function readString() {
            end = index;
            var foundDoubles = false;
            while (end++ < l1) {
                ch = expression.charAt(end);
                if (ch === "'") {
                    if (end < l1 && expression.charAt(end + 1) === "'") {
                        end++;
                        foundDoubles = true;
                        continue;
                    }
                    else
                        break;
                }
            }
            if (end === index ||
                expression.charAt(end) !== "'")
                throw new ParseError(expression, 'unterminated string', index);
            v = expression.substr(index + 1, end - index - 1);
            if (foundDoubles)
                v = v.replace(/''/g, "'");
        }
        function readNumber() {
            end = index;
            var foundDot = false;
            while (end < l1) {
                ch = expression.charAt(end + 1);
                if ((ch >= '0' && ch <= '9') ||
                    (!foundDot && (ch === '.'))) {
                    if (ch === '.')
                        foundDot = true;
                    end++;
                }
                else
                    break;
            }
            v = parseFloat(expression.substring(index, end + 1));
        }
        function readIdentifier() {
            end = index;
            while (end < l1) {
                ch = expression.charAt(end + 1);
                if (ch == '_' ||
                    (ch >= 'A' && ch <= 'Z') ||
                    (ch >= 'a' && ch <= 'z') ||
                    (ch >= '0' && ch <= '9')) {
                    end++;
                }
                else
                    break;
            }
            v = expression.substr(index, end - index + 1);
        }
        function readParam() {
            index++;
            readIdentifier();
            if (!v.length)
                throw new ParseError(expression, 'expected parameter name', index);
        }
        function readArrayList() {
            skipWhiteSpace();
            if (index >= l || expression.charAt(index) != '(') {
                if (index < l && expression.charAt(index) == '@') {
                    readParam();
                    index = end;
                    return;
                }
                throw new ParseError(expression, 'expected parenthesis', index);
            }
            index++;
            var values = [];
            while (true) {
                skipWhiteSpace();
                if (index >= l)
                    throw new ParseError(expression, 'expected parenthesis', index);
                ch = expression.charAt(index);
                if (ch == ',') {
                    if (values.length == 0)
                        throw new ParseError(expression, 'unexpected comma', index);
                    index++;
                    skipWhiteSpace();
                    ch = expression.charAt(index);
                }
                else if (ch == ')') {
                    break;
                }
                else if (values.length > 0)
                    throw new ParseError(expression, 'expected comma', index);
                if (ch === "'") {
                    readString();
                    values.push(v);
                    index = end + 1;
                    continue;
                }
                if (ch >= '0' && ch <= '9') {
                    readNumber();
                    values.push(v);
                    index = end + 1;
                    continue;
                }
                if (ch == 'n') {
                    readIdentifier();
                    if (v === 'null') {
                        values.push(null);
                        index = end + 1;
                        continue;
                    }
                }
                throw new ParseError(expression, 'unexpected token', index);
            }
            v = values;
        }
        for (index = 0; index < l; index++) {
            ch = expression.charAt(index);
            if (ch === ' ' || ch === '\t')
                continue;
            if (ch == '_' ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= 'a' && ch <= 'z')) {
                readIdentifier();
                var w = v.toLowerCase();
                if (w == 'is') {
                    index = end + 1;
                    skipWhiteSpace();
                    readIdentifier();
                    w = v.toLowerCase();
                    if (w === 'not') {
                        index = end + 1;
                        skipWhiteSpace();
                        readIdentifier();
                        if (v.toLowerCase() === 'null') {
                            tokens.push({
                                t: TOKEN_OPERATOR,
                                v: 'is not null'
                            });
                        }
                        else
                            throw new ParseError(expression, 'expected "null"', index);
                    }
                    else if (w === 'null') {
                        tokens.push({
                            t: TOKEN_OPERATOR,
                            v: 'is null'
                        });
                    }
                    else
                        throw new ParseError(expression, 'expected "null" or "not" keyword', index);
                }
                else if (w === 'and' || w === 'or' || w === 'xor') {
                    tokens.push({
                        t: TOKEN_OPERATOR,
                        v: w
                    });
                }
                else if (w === 'not') {
                    var currentEnd = end;
                    index = end + 1;
                    skipWhiteSpace();
                    readIdentifier();
                    w = v.toLowerCase();
                    if (w === 'in') {
                        index = end + 1;
                        tokens.push({
                            t: TOKEN_OPERATOR,
                            v: 'not in'
                        });
                        readArrayList();
                        if (typeof v === "string") {
                            tokens.push({
                                t: TOKEN_PARAM,
                                v: v
                            });
                        }
                        else {
                            tokens.push({
                                t: TOKEN_VALUE,
                                v: v
                            });
                        }
                    }
                    else if (w === "like") {
                        tokens.push({
                            t: TOKEN_OPERATOR,
                            v: 'not like'
                        });
                        index = end;
                    }
                    else {
                        tokens.push({
                            t: TOKEN_OPERATOR,
                            v: 'not'
                        });
                        index = currentEnd;
                    }
                    continue;
                }
                else if (w === 'in') {
                    tokens.push({
                        t: TOKEN_OPERATOR,
                        v: 'in'
                    });
                    index = end + 1;
                    readArrayList();
                    if (typeof v === "string") {
                        tokens.push({
                            t: TOKEN_PARAM,
                            v: v
                        });
                    }
                    else {
                        tokens.push({
                            t: TOKEN_VALUE,
                            v: v
                        });
                    }
                    continue;
                }
                else if (w === "like") {
                    tokens.push({
                        t: TOKEN_OPERATOR,
                        v: 'like'
                    });
                }
                else {
                    tokens.push({
                        t: TOKEN_IDENTIFIER,
                        v: v
                    });
                }
                index = end;
                continue;
            }
            if (ch === '@') {
                readParam();
                tokens.push({
                    t: TOKEN_PARAM,
                    v: v
                });
                index = end;
                continue;
            }
            if ((((ch === '-') || (ch === '+')) &&
                index < l1 &&
                expression.charAt(index + 1) >= '0' &&
                expression.charAt(index + 1) <= '9') ||
                (ch >= '0' && ch <= '9')) {
                end = index;
                readNumber();
                tokens.push({
                    t: TOKEN_VALUE,
                    v: v
                });
                index = end;
                continue;
            }
            if (ch === "'") {
                end = index;
                readString();
                tokens.push({
                    t: TOKEN_VALUE,
                    v: v
                });
                index = end;
                continue;
            }
            if (ch === '=') {
                tokens.push({
                    t: TOKEN_OPERATOR,
                    v: ch
                });
                continue;
            }
            if (ch === '(') {
                openParens++;
                tokens.push({
                    t: TOKEN_OPERATOR,
                    v: ch
                });
                continue;
            }
            if (ch == ')') {
                if (openParens <= 0)
                    throw new ParseError(expression, 'unexpected parenthesis', index);
                openParens--;
                tokens.push({
                    t: TOKEN_OPERATOR,
                    v: ch
                });
                continue;
            }
            if (ch === '>' || ch === '<') {
                if (index < l1 &&
                    expression.charAt(index + 1) === '=') {
                    tokens.push({
                        t: TOKEN_OPERATOR,
                        v: ch + '='
                    });
                    index++;
                }
                else {
                    tokens.push({
                        t: TOKEN_OPERATOR,
                        v: ch
                    });
                }
                continue;
            }
            throw new ParseError(expression, 'unknown token', index);
        }
        if (openParens > 0)
            throw new ParseError(expression, 'missing parenthesis', index);
        return tokens;
    }
    var operatorPrecedence = {
        '=': 4,
        '>': 4,
        '<': 4,
        '>=': 4,
        '<=': 4,
        '<>': 4,
        '!=': 4,
        'like': 5,
        'not like': 5,
        'in': 5,
        'not in': 5,
        'is null': 5,
        'is not null': 5,
        'not': 6,
        'and': 7,
        'xor': 8,
        'or': 9
    };
    function shuntingYard(tokens) {
        var result = [];
        var stack = [];
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (token.t === TOKEN_OPERATOR) {
                var precedence = operatorPrecedence[token.v];
                if (precedence != null) {
                    while (stack.length) {
                        var prev = stack[stack.length - 1];
                        if (prev.t !== TOKEN_OPERATOR || prev.v == '(')
                            break;
                        var prevPrecedence = operatorPrecedence[prev.v];
                        if (prevPrecedence == null || prevPrecedence > precedence)
                            break;
                        result.push(stack.pop());
                    }
                    stack.push(token);
                }
                else if (token.v === '(') {
                    stack.push(token);
                }
                else if (token.v === ')') {
                    while (stack.length &&
                        (stack[stack.length - 1].t !== TOKEN_OPERATOR ||
                            stack[stack.length - 1].v !== '(')) {
                        result.push(stack.pop());
                    }
                    stack.pop();
                }
                else
                    result.push(token);
            }
            else
                result.push(token);
        }
        while (stack.length) {
            var tok = stack.pop();
            if (tok.t == TOKEN_OPERATOR &&
                (tok.v === '(' || tok.v === ')'))
                throw "Mismatched parentheses in criteria expression!";
            result.push(tok);
        }
        return result;
    }
    function rpnTokensToCriteria(rpnTokens, getParam) {
        var stack = [];
        for (var _i = 0, rpnTokens_1 = rpnTokens; _i < rpnTokens_1.length; _i++) {
            var token = rpnTokens_1[_i];
            switch (token.t) {
                case TOKEN_IDENTIFIER:
                    {
                        stack.push([token.v]);
                        break;
                    }
                case TOKEN_VALUE:
                    {
                        stack.push(Array.isArray(token.v) ? [token.v] : token.v);
                        break;
                    }
                case TOKEN_PARAM:
                    {
                        if (!getParam)
                            throw new Error("getParam must be passed for parameterized expressions!");
                        var prm = getParam(token.v);
                        stack.push(Array.isArray(prm) ? [prm] : prm);
                        break;
                    }
                case TOKEN_OPERATOR:
                    {
                        switch (token.v) {
                            case 'not':
                            case 'is null':
                            case 'is not null':
                                if (!stack.length)
                                    throw new Error("Unary operator " + token.v + " requires a value!");
                                stack.push([token.v, stack.pop()]);
                                break;
                            default:
                                if (stack.length < 2)
                                    throw new Error("Binary operator " + token.v + " requires two values!");
                                var r = stack.pop();
                                var l = stack.pop();
                                stack.push([l, token.v, r]);
                                break;
                        }
                        break;
                    }
                default:
                    throw new Error("Invalid operator type: " + token.t + "!");
            }
        }
        if (stack.length != 1)
            throw new Error("Error evaluating expression!");
        return stack.pop();
    }
    function internalParse(expression, getParam) {
        var tokens = tokenize(expression);
        var rpnTokens = shuntingYard(tokens);
        return rpnTokensToCriteria(rpnTokens, getParam);
    }
    function parseCriteria(exprOrStrings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        if (!(exprOrStrings === null || exprOrStrings === void 0 ? void 0 : exprOrStrings.length))
            return [];
        if (typeof exprOrStrings === "string") {
            return internalParse(exprOrStrings, values == null || values[0] == null ? null : function (name) { return values[0][name]; });
        }
        else if (!values.length)
            return internalParse(exprOrStrings.join(''));
        var expression = String.raw.apply(String, tslib.__spreadArray([{ raw: exprOrStrings }], values.map(function (x, i) { return '@__' + i; }), false));
        return internalParse(expression, function (name) { return name.startsWith('__') ?
            values[parseInt(name.substring(2), 10)] : void 0; });
    }
    /**
     * Enumeration of Criteria operator keys.
     */
    exports.CriteriaOperator = void 0;
    (function (CriteriaOperator) {
        CriteriaOperator["paren"] = "()";
        CriteriaOperator["not"] = "not";
        CriteriaOperator["isNull"] = "is null";
        CriteriaOperator["isNotNull"] = "is not null";
        CriteriaOperator["exists"] = "exists";
        CriteriaOperator["and"] = "and";
        CriteriaOperator["or"] = "or";
        CriteriaOperator["xor"] = "xor";
        CriteriaOperator["eq"] = "=";
        CriteriaOperator["ne"] = "!=";
        CriteriaOperator["gt"] = ">";
        CriteriaOperator["ge"] = ">=";
        CriteriaOperator["lt"] = "<";
        CriteriaOperator["le"] = "<=";
        CriteriaOperator["in"] = "in";
        CriteriaOperator["notIn"] = "not in";
        CriteriaOperator["like"] = "like";
        CriteriaOperator["notLike"] = "not like";
    })(exports.CriteriaOperator || (exports.CriteriaOperator = {}));
    /**
     * Creates a new criteria builder containg the passed field name.
     * @param field The field name.
     */
    function Criteria(field) {
        var builder = CriteriaBuilder.of(field);
        // workaround for subclassing array until corelib switched to ES6
        !builder.eq && (builder.__proto__ = CriteriaBuilder.prototype);
        return builder;
    }
    /**
     * Ands two or more criteria together.
     * @param c1 First criteria.
     * @param c2 Second criteria.
     * @param rest Other criteria.
     */
    Criteria.and = function and(c1, c2) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var result = Criteria.join(c1, 'and', c2);
        if (rest) {
            for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
                var k = rest_1[_a];
                result = Criteria.join(result, 'and', k);
            }
        }
        return result;
    };
    /** Provides access to the `CriteriaOperator` enum, e.g list of operator keys */
    Criteria.Operator = exports.CriteriaOperator;
    /**
     * Determines if a criteria is empty.
     */
    Criteria.isEmpty = function isEmpty(c) {
        return c == null ||
            c.length === 0 ||
            (c.length === 1 && typeof c[0] === "string" && c[0].length === 0);
    };
    /**
     * Joins two criteria together.
     * @param c1 First criteria.
     * @param op Operator to insert between, e.g. 'or', 'and'.
     * @param c2 Second criteria
     */
    Criteria.join = function join(c1, op, c2) {
        if (Criteria.isEmpty(c1))
            return c2;
        if (Criteria.isEmpty(c2))
            return c1;
        return [c1, op, c2];
    };
    /**
     * Negates a criteria.
     * @param c Criteria to negate.
     */
    Criteria.not = function not(c) {
        return ['not', c];
    };
    /**
     * Ors two or more criteria together.
     * @param c1 First criteria.
     * @param c2 Second criteria.
     * @param rest Other criteria.
     */
    Criteria.or = function or(c1, c2) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var result = Criteria.join(c1, 'or', c2);
        if (rest) {
            for (var _a = 0, rest_2 = rest; _a < rest_2.length; _a++) {
                var k = rest_2[_a];
                result = Criteria.join(result, 'or', k);
            }
        }
        return result;
    };
    /**
     * Puts a criteria in parens. Exists only for compatibility reasons.
     */
    Criteria.paren = function parent(c) {
        return Criteria.isEmpty(c) ? c : ['()', c];
    };
    /**
     * Parses a criteria expression to Serenity Criteria array format.
     * The expression string may be a string literal, optionally containining
     * parameters like `A >= @p1 and B < @p2`.
     *
     * Or, the expression might be a tagged string literal that
     * contain parameter placeholders like `A >= ${p1}`
     * where p1 is a variable in the scope.
     *
     * @example
     * Criteria.parse("A >= @p1 and B < @p2", { p1: 5, p2: 4 }) // [[[a], '>=' 5], 'and', [[b], '<', 4]]
     *
     * @example
     * var a = 5; b = 4;
     * Criteria.parse`A >= ${a} and B < ${b}` // [[[a], '>=' 5], 'and', [[b], '<', 4]]
    */
    Criteria.parse = parseCriteria;

    exports.Aggregators = void 0;
    (function (Aggregators) {
        function Avg(field) {
            this.field_ = field;
            this.type_ = "Avg";
            this.init = function () {
                this.count_ = 0;
                this.nonNullCount_ = 0;
                this.sum_ = 0;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                this.count_++;
                if (val != null && val !== "" && !isNaN(val)) {
                    this.nonNullCount_++;
                    this.sum_ += parseFloat(val);
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.avg) {
                    groupTotals.avg = {};
                }
                if (this.nonNullCount_ != 0) {
                    groupTotals.avg[this.field_] = this.sum_ / this.nonNullCount_;
                }
            };
        }
        Aggregators.Avg = Avg;
        function WeightedAvg(field, weightedField) {
            this.field_ = field;
            this.type_ = "WeightedAvg";
            this.weightedField_ = weightedField;
            this.init = function () {
                this.sum_ = 0;
                this.weightedSum_ = 0;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                var valWeighted = item[this.weightedField_];
                if (this.isValid(val) && this.isValid(valWeighted)) {
                    this.weightedSum_ += parseFloat(valWeighted);
                    this.sum_ += parseFloat(val) * parseFloat(valWeighted);
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.avg) {
                    groupTotals.avg = {};
                }
                if (this.sum_ && this.weightedSum_) {
                    groupTotals.avg[this.field_] = this.sum_ / this.weightedSum_;
                }
            };
            this.isValid = function (val) {
                return val !== null && val !== "" && !isNaN(val);
            };
        }
        Aggregators.WeightedAvg = WeightedAvg;
        function Min(field) {
            this.field_ = field;
            this.type_ = "Min";
            this.init = function () {
                this.min_ = null;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                if (val != null && val !== "" && !isNaN(val)) {
                    if (this.min_ == null || val < this.min_) {
                        this.min_ = val;
                    }
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.min) {
                    groupTotals.min = {};
                }
                groupTotals.min[this.field_] = this.min_;
            };
        }
        Aggregators.Min = Min;
        function Max(field) {
            this.field_ = field;
            this.type_ = "Max";
            this.init = function () {
                this.max_ = null;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                if (val != null && val !== "" && !isNaN(val)) {
                    if (this.max_ == null || val > this.max_) {
                        this.max_ = val;
                    }
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.max) {
                    groupTotals.max = {};
                }
                groupTotals.max[this.field_] = this.max_;
            };
        }
        Aggregators.Max = Max;
        function Sum(field) {
            this.field_ = field;
            this.type_ = "Sum";
            this.init = function () {
                this.sum_ = null;
            };
            this.accumulate = function (item) {
                var val = item[this.field_];
                if (val != null && val !== "" && !isNaN(val)) {
                    this.sum_ += parseFloat(val);
                }
            };
            this.storeResult = function (groupTotals) {
                if (!groupTotals.sum) {
                    groupTotals.sum = {};
                }
                groupTotals.sum[this.field_] = this.sum_;
            };
        }
        Aggregators.Sum = Sum;
    })(exports.Aggregators || (exports.Aggregators = {}));
    exports.AggregateFormatting = void 0;
    (function (AggregateFormatting) {
        function formatMarkup(totals, column, aggType) {
            var _a;
            var textKey = (aggType.substring(0, 1).toUpperCase() + aggType.substring(1));
            var text = (_a = tryGetText("Enums.Serenity.SummaryType." + textKey)) !== null && _a !== void 0 ? _a : textKey;
            var value = totals[aggType][column.field];
            var formattedValue = formatValue(column, value);
            return "<span class='aggregate agg-" + aggType + "'  title='" + htmlEncode(text) + "'>" +
                formattedValue +
                "</span>";
        }
        AggregateFormatting.formatMarkup = formatMarkup;
        function formatValue(column, value) {
            var _a, _b, _c;
            var formatter = (_a = column.format) !== null && _a !== void 0 ? _a : (column.formatter ? sleekgrid.convertCompatFormatter(column.formatter) : null);
            if (formatter != null) {
                var item = new sleekgrid.NonDataRow();
                item[column.field] = value;
                try {
                    return formatter({ column: column, escape: sleekgrid.escape, item: item, value: value });
                }
                catch (e) {
                }
            }
            if (typeof value === "number") {
                var displayFormat = (_c = (_b = column.sourceItem) === null || _b === void 0 ? void 0 : _b.displayFormat) !== null && _c !== void 0 ? _c : "#,##0.##";
                return htmlEncode(formatNumber(value, displayFormat));
            }
            else
                return htmlEncode(value);
        }
        AggregateFormatting.formatValue = formatValue;
        function groupTotalsFormatter(totals, column) {
            if (!totals || !column)
                return "";
            var text = null;
            ["sum", "avg", "min", "max", "cnt"].forEach(function (aggType) {
                if (text == null && totals[aggType] && totals[aggType][column.field] != null) {
                    text = formatMarkup(totals, column, aggType);
                    return false;
                }
            });
            return text || "";
        }
        AggregateFormatting.groupTotalsFormatter = groupTotalsFormatter;
    })(exports.AggregateFormatting || (exports.AggregateFormatting = {}));

    var RemoteView = /** @class */ (function () {
        function RemoteView(options) {
            var _a;
            var self = this;
            if (sleekgrid.gridDefaults != null && sleekgrid.gridDefaults.groupTotalsFormatter === void 0)
                sleekgrid.gridDefaults.groupTotalsFormatter = exports.AggregateFormatting.groupTotalsFormatter;
            var idProperty;
            var items = [];
            var rows = [];
            var idxById = {};
            var rowsById = null;
            var filter = null;
            var updated = null;
            var suspend = 0;
            var sortAsc = true;
            var fastSortField;
            var sortComparer;
            var refreshHints = {};
            var prevRefreshHints = {};
            var filterArgs;
            var filteredItems = [];
            var compiledFilter;
            var compiledFilterWithCaching;
            var filterCache = [];
            var groupingInfoDefaults = {
                getter: null,
                formatter: null,
                comparer: function (a, b) {
                    return (a.value === b.value ? 0 :
                        (a.value > b.value ? 1 : -1));
                },
                predefinedValues: [],
                aggregateEmpty: false,
                aggregateCollapsed: false,
                aggregateChildGroups: false,
                collapsed: false,
                displayTotalsRow: true,
                lazyTotalsCalculation: false
            };
            var summaryOptions = {};
            var groupingInfos = [];
            var groups = [];
            var toggledGroupsByLevel = [];
            var groupingDelimiter = ':|:';
            var page = 1;
            var totalRows = 0;
            var onDataChanged = new sleekgrid.EventEmitter();
            var onDataLoading = new sleekgrid.EventEmitter();
            var onDataLoaded = new sleekgrid.EventEmitter();
            var onGroupExpanded = new sleekgrid.EventEmitter();
            var onGroupCollapsed = new sleekgrid.EventEmitter();
            var onPagingInfoChanged = new sleekgrid.EventEmitter();
            var onRowCountChanged = new sleekgrid.EventEmitter();
            var onRowsChanged = new sleekgrid.EventEmitter();
            var onRowsOrCountChanged = new sleekgrid.EventEmitter();
            var loading = false;
            var errorMessage = null;
            var populateLocks = 0;
            var populateCalls = 0;
            var contentType;
            var dataType;
            var totalCount = null;
            var groupItemMetadataProvider = options.groupItemMetadataProvider;
            var localSort = (_a = options.localSort) !== null && _a !== void 0 ? _a : false;
            var intf;
            function beginUpdate() {
                suspend++;
            }
            function endUpdate() {
                suspend--;
                if (suspend <= 0)
                    refresh();
            }
            function setRefreshHints(hints) {
                refreshHints = hints;
            }
            function setFilterArgs(args) {
                filterArgs = args;
            }
            function updateIdxById(startingIndex) {
                startingIndex = startingIndex || 0;
                var id;
                for (var i = startingIndex, l = items.length; i < l; i++) {
                    id = items[i][idProperty];
                    if (id === undefined) {
                        var msg = "Each data element must implement a unique '" +
                            idProperty + "' property. Object at index '" + i + "' " +
                            "has no identity value: ";
                        msg += $.toJSON(items[i]);
                        throw msg;
                    }
                    idxById[id] = i;
                }
            }
            function ensureIdUniqueness() {
                var id;
                for (var i = 0, l = items.length; i < l; i++) {
                    id = items[i][idProperty];
                    if (id === undefined || idxById[id] !== i) {
                        var msg = "Each data element must implement a unique '" +
                            idProperty + "' property. Object at index '" + i + "' ";
                        if (id == undefined)
                            msg += "has no identity value: ";
                        else
                            msg += "has repeated identity value '" + id + "': ";
                        msg += $.toJSON(items[i]);
                        throw msg;
                    }
                }
            }
            function getItems() {
                return items;
            }
            function getIdPropertyName() {
                return idProperty;
            }
            function setItems(data, newIdProperty) {
                if (newIdProperty != null && typeof newIdProperty == "string")
                    idProperty = newIdProperty;
                items = filteredItems = data;
                if (localSort) {
                    items.sort(getSortComparer());
                }
                idxById = {};
                rowsById = null;
                summaryOptions.totals = {};
                updateIdxById();
                ensureIdUniqueness();
                if (suspend) {
                    recalc(items);
                }
                else {
                    refresh();
                }
                onDataChanged.notify({ dataView: self }, null, self);
            }
            function setPagingOptions(args) {
                var anyChange = false;
                if (args.rowsPerPage != undefined &&
                    intf.rowsPerPage != args.rowsPerPage) {
                    intf.rowsPerPage = args.rowsPerPage;
                    anyChange = true;
                }
                if (args.page != undefined) {
                    var newPage;
                    if (!intf.rowsPerPage)
                        newPage = 1;
                    else if (totalCount == null)
                        newPage = args.page;
                    else
                        newPage = Math.min(args.page, Math.ceil(totalCount / intf.rowsPerPage) + 1);
                    if (newPage < 1)
                        newPage = 1;
                    if (newPage != page) {
                        intf.seekToPage = newPage;
                        anyChange = true;
                    }
                }
                if (anyChange)
                    populate();
            }
            function getPagingInfo() {
                return {
                    rowsPerPage: intf.rowsPerPage,
                    page: page,
                    totalCount: totalCount,
                    loading: loading,
                    error: errorMessage,
                    dataView: intf
                };
            }
            function getSortComparer() {
                if (sortComparer != null)
                    return sortComparer;
                var cols = [];
                var asc = [];
                var sorts = intf.sortBy || [];
                for (var _i = 0, sorts_1 = sorts; _i < sorts_1.length; _i++) {
                    var s = sorts_1[_i];
                    if (s == null)
                        continue;
                    if (s.length > 5 && s.toLowerCase().substr(s.length - 5).toLowerCase() == ' desc') {
                        asc.push(false);
                        cols.push(s.substr(0, s.length - 5));
                    }
                    else {
                        asc.push(true);
                        cols.push(s);
                    }
                }
                return function (a, b) {
                    for (var i = 0, l = cols.length; i < l; i++) {
                        var field = cols[i];
                        var sign = asc[i] ? 1 : -1;
                        var value1 = a[field], value2 = b[field];
                        var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
                        if (result != 0) {
                            return result;
                        }
                    }
                    return 0;
                };
            }
            function sort(comparer, ascending) {
                sortAsc = ascending;
                fastSortField = null;
                if (ascending === false) {
                    items.reverse();
                }
                sortComparer = comparer;
                items.sort(getSortComparer());
                if (ascending === false) {
                    items.reverse();
                }
                idxById = {};
                updateIdxById();
                refresh();
            }
            function getLocalSort() {
                return localSort;
            }
            function setLocalSort(value) {
                if (localSort != value) {
                    localSort = value;
                    sort();
                }
            }
            /***
             * Provides a workaround for the extremely slow sorting in IE.
             * Does a [lexicographic] sort on a give column by temporarily overriding Object.prototype.toString
             * to return the value of that field and then doing a native Array.sort().
             */
            function fastSort(field, ascending) {
                sortAsc = ascending;
                fastSortField = field;
                sortComparer = null;
                var oldToString = Object.prototype.toString;
                Object.prototype.toString = (typeof field === "function") ? field : function () {
                    return this[field];
                };
                // an extra reversal for descending sort keeps the sort stable
                // (assuming a stable native sort implementation, which isn't true in some cases)
                if (ascending === false) {
                    items.reverse();
                }
                items.sort();
                Object.prototype.toString = oldToString;
                if (ascending === false) {
                    items.reverse();
                }
                idxById = {};
                updateIdxById();
                refresh();
            }
            function reSort() {
                if (fastSortField)
                    fastSort(fastSortField, sortAsc);
                else
                    sort(sortComparer, sortAsc);
            }
            function getFilteredItems() {
                return filteredItems;
            }
            function getFilter() {
                return filter;
            }
            function setFilter(filterFn) {
                filter = filterFn;
                if (options.inlineFilters) {
                    compiledFilter = compileFilter();
                    compiledFilterWithCaching = compileFilterWithCaching();
                }
                refresh();
            }
            function getGrouping() {
                return groupingInfos;
            }
            function setSummaryOptions(summary) {
                summary = summary || {};
                summaryOptions.aggregators = summary.aggregators || [];
                summaryOptions.compiledAccumulators = [];
                summaryOptions.totals = {};
                var idx = summaryOptions.aggregators.length;
                while (idx--) {
                    summaryOptions.compiledAccumulators[idx] = compileAccumulatorLoop(summaryOptions.aggregators[idx]);
                }
                setGrouping(groupingInfos || []);
            }
            function getGrandTotals() {
                summaryOptions.totals = summaryOptions.totals || {};
                if (!summaryOptions.totals.initialized) {
                    summaryOptions.aggregators = summaryOptions.aggregators || [];
                    summaryOptions.compiledAccumulators = summaryOptions.compiledAccumulators || [];
                    var agg, idx = summaryOptions.aggregators.length;
                    while (idx--) {
                        agg = summaryOptions.aggregators[idx];
                        agg.init();
                        summaryOptions.compiledAccumulators[idx].call(agg, items);
                        agg.storeResult(summaryOptions.totals);
                    }
                    summaryOptions.totals.initialized = true;
                }
                return summaryOptions.totals;
            }
            function setGrouping(groupingInfo) {
                if (!groupItemMetadataProvider) {
                    groupItemMetadataProvider = new sleekgrid.GroupItemMetadataProvider();
                }
                groups = [];
                toggledGroupsByLevel = [];
                groupingInfo = groupingInfo || [];
                groupingInfos = (groupingInfo instanceof Array) ? groupingInfo : [groupingInfo];
                for (var i = 0; i < groupingInfos.length; i++) {
                    var gi = groupingInfos[i] = extend(extend({}, groupingInfoDefaults), deepClone(groupingInfos[i]));
                    gi.aggregators = gi.aggregators || summaryOptions.aggregators || [];
                    gi.getterIsAFn = typeof gi.getter === "function";
                    // pre-compile accumulator loops
                    gi.compiledAccumulators = [];
                    var idx = gi.aggregators.length;
                    while (idx--) {
                        gi.compiledAccumulators[idx] = compileAccumulatorLoop(gi.aggregators[idx]);
                    }
                    toggledGroupsByLevel[i] = {};
                }
                refresh();
            }
            function getItemByIdx(i) {
                return items[i];
            }
            function getIdxById(id) {
                return idxById[id];
            }
            function ensureRowsByIdCache() {
                if (!rowsById) {
                    rowsById = {};
                    for (var i = 0, l = rows.length; i < l; i++) {
                        rowsById[rows[i][idProperty]] = i;
                    }
                }
            }
            function getRowByItem(item) {
                ensureRowsByIdCache();
                return rowsById[item[idProperty]];
            }
            function getRowById(id) {
                ensureRowsByIdCache();
                return rowsById[id];
            }
            function getItemById(id) {
                return items[idxById[id]];
            }
            function mapItemsToRows(itemArray) {
                var rows = [];
                ensureRowsByIdCache();
                for (var i = 0, l = itemArray.length; i < l; i++) {
                    var row = rowsById[itemArray[i][idProperty]];
                    if (row != null) {
                        rows[rows.length] = row;
                    }
                }
                return rows;
            }
            function mapIdsToRows(idArray) {
                var rows = [];
                ensureRowsByIdCache();
                for (var i = 0, l = idArray.length; i < l; i++) {
                    var row = rowsById[idArray[i]];
                    if (row != null) {
                        rows[rows.length] = row;
                    }
                }
                return rows;
            }
            function mapRowsToIds(rowArray) {
                var ids = [];
                for (var i = 0, l = rowArray.length; i < l; i++) {
                    if (rowArray[i] < rows.length) {
                        ids[ids.length] = rows[rowArray[i]][idProperty];
                    }
                }
                return ids;
            }
            function updateItem(id, item) {
                if (idxById[id] === undefined) {
                    throw new Error("Invalid id");
                }
                if (id !== item[idProperty]) {
                    // make sure the new id is unique:
                    var newId = item[idProperty];
                    if (newId == null) {
                        throw new Error("Cannot update item to associate with a null id");
                    }
                    if (idxById[newId] !== undefined) {
                        throw new Error("Cannot update item to associate with a non-unique id");
                    }
                    idxById[newId] = idxById[id];
                    delete idxById[id];
                    if (updated && updated[id]) {
                        delete updated[id];
                    }
                    id = newId;
                }
                items[idxById[id]] = item;
                if (!updated) {
                    updated = {};
                }
                updated[id] = true;
                refresh();
            }
            function insertItem(insertBefore, item) {
                items.splice(insertBefore, 0, item);
                updateIdxById(insertBefore);
                refresh();
            }
            function addItem(item) {
                items.push(item);
                updateIdxById(items.length - 1);
                refresh();
            }
            function deleteItem(id) {
                var idx = idxById[id];
                if (idx === undefined) {
                    throw "Invalid id";
                }
                delete idxById[id];
                items.splice(idx, 1);
                updateIdxById(idx);
                refresh();
            }
            function sortedAddItem(item) {
                insertItem(sortedIndex(item), item);
            }
            function sortedUpdateItem(id, item) {
                if (idxById[id] === undefined || id !== item[idProperty]) {
                    throw new Error("Invalid or non-matching id " + idxById[id]);
                }
                var comparer = getSortComparer();
                var oldItem = getItemById(id);
                if (comparer(oldItem, item) !== 0) {
                    // item affects sorting -> must use sorted add
                    deleteItem(id);
                    sortedAddItem(item);
                }
                else { // update does not affect sorting -> regular update works fine
                    updateItem(id, item);
                }
            }
            function sortedIndex(searchItem) {
                var low = 0, high = items.length;
                var comparer = getSortComparer();
                while (low < high) {
                    var mid = low + high >>> 1;
                    if (comparer(items[mid], searchItem) === -1) {
                        low = mid + 1;
                    }
                    else {
                        high = mid;
                    }
                }
                return low;
            }
            function getRows() {
                return rows;
            }
            function getLength() {
                return rows.length;
            }
            function getItem(i) {
                var item = rows[i];
                // if this is a group row, make sure totals are calculated and update the title
                if (item && item.__group && item.totals && !item.totals.initialized) {
                    var gi = groupingInfos[item.level];
                    if (!gi.displayTotalsRow) {
                        calculateTotals(item.totals);
                        item.title = gi.formatter ? gi.formatter(item) : htmlEncode(item.value);
                    }
                }
                // if this is a totals row, make sure it's calculated
                else if (item && item.__groupTotals && !item.initialized) {
                    calculateTotals(item);
                }
                return item;
            }
            function getItemMetadata(i) {
                var item = rows[i];
                if (item === undefined) {
                    return null;
                }
                // overrides for grouping rows
                if (item.__group) {
                    return groupItemMetadataProvider.getGroupRowMetadata(item);
                }
                // overrides for totals rows
                if (item.__groupTotals) {
                    return groupItemMetadataProvider.getTotalsRowMetadata(item);
                }
                return (options.getItemMetadata && options.getItemMetadata(item, i)) || null;
            }
            function expandCollapseAllGroups(level, collapse) {
                if (level == null) {
                    for (var i = 0; i < groupingInfos.length; i++) {
                        toggledGroupsByLevel[i] = {};
                        groupingInfos[i].collapsed = collapse;
                        if (collapse === true) {
                            onGroupCollapsed.notify({ level: i, groupingKey: null });
                        }
                        else {
                            onGroupExpanded.notify({ level: i, groupingKey: null });
                        }
                    }
                }
                else {
                    toggledGroupsByLevel[level] = {};
                    groupingInfos[level].collapsed = collapse;
                    if (collapse === true) {
                        onGroupCollapsed.notify({ level: level, groupingKey: null });
                    }
                    else {
                        onGroupExpanded.notify({ level: level, groupingKey: null });
                    }
                }
                refresh();
            }
            /**
             * @param level {Number} Optional level to collapse.  If not specified, applies to all levels.
             */
            function collapseAllGroups(level) {
                expandCollapseAllGroups(level, true);
            }
            /**
             * @param level {Number} Optional level to expand.  If not specified, applies to all levels.
             */
            function expandAllGroups(level) {
                expandCollapseAllGroups(level, false);
            }
            function resolveLevelAndGroupingKey(args) {
                var arg0 = args[0];
                if (args.length === 1 && arg0.indexOf(groupingDelimiter) !== -1) {
                    return { level: arg0.split(groupingDelimiter).length - 1, groupingKey: arg0 };
                }
                else {
                    return { level: args.length - 1, groupingKey: args.join(groupingDelimiter) };
                }
            }
            function expandCollapseGroup(args, collapse) {
                var opts = resolveLevelAndGroupingKey(args);
                toggledGroupsByLevel[opts.level][opts.groupingKey] = groupingInfos[opts.level].collapsed ^ collapse;
                if (collapse)
                    onGroupCollapsed.notify({ level: opts.level, groupingKey: opts.groupingKey });
                else
                    onGroupExpanded.notify({ level: opts.level, groupingKey: opts.groupingKey });
                refresh();
            }
            /**
             * @param varArgs Either a Slick.Group's "groupingKey" property, or a
             *     variable argument list of grouping values denoting a unique path to the row.  For
             *     example, calling collapseGroup('high', '10%') will collapse the '10%' subgroup of
             *     the 'high' group.
             */
            function collapseGroup(varArgs) {
                var args = Array.prototype.slice.call(arguments);
                expandCollapseGroup(args, true);
            }
            /**
             * @param varArgs Either a Slick.Group's "groupingKey" property, or a
             *     variable argument list of grouping values denoting a unique path to the row.  For
             *     example, calling expandGroup('high', '10%') will expand the '10%' subgroup of
             *     the 'high' group.
             */
            function expandGroup(varArgs) {
                var args = Array.prototype.slice.call(arguments);
                expandCollapseGroup(args, false);
            }
            function getGroups() {
                return groups;
            }
            function getOrCreateGroup(groupsByVal, val, level, parentGroup, groups) {
                var group = groupsByVal[val];
                if (!group) {
                    group = new sleekgrid.Group();
                    group.value = val;
                    group.level = level;
                    group.groupingKey = (parentGroup ? parentGroup.groupingKey + groupingDelimiter : '') + val;
                    groups[groups.length] = group;
                    groupsByVal[val] = group;
                }
                return group;
            }
            function extractGroups(rows, parentGroup) {
                var group;
                var val;
                var groups = [];
                var groupsByVal = {};
                var r;
                var level = parentGroup ? parentGroup.level + 1 : 0;
                var gi = groupingInfos[level];
                for (var i = 0, l = gi.predefinedValues.length; i < l; i++) {
                    val = gi.predefinedValues[i];
                    group = getOrCreateGroup(groupsByVal, val, level, parentGroup, groups);
                }
                for (var i = 0, l = rows.length; i < l; i++) {
                    r = rows[i];
                    val = gi.getterIsAFn ? gi.getter(r) : r[gi.getter];
                    group = getOrCreateGroup(groupsByVal, val, level, parentGroup, groups);
                    group.rows[group.count++] = r;
                }
                if (level < groupingInfos.length - 1) {
                    for (var i = 0; i < groups.length; i++) {
                        group = groups[i];
                        group.groups = extractGroups(group.rows, group);
                    }
                }
                if (groups.length) {
                    addTotals(groups, level);
                }
                groups.sort(groupingInfos[level].comparer);
                return groups;
            }
            function calculateTotals(totals) {
                var group = totals.group;
                var gi = groupingInfos[group.level];
                var isLeafLevel = (group.level == groupingInfos.length);
                var agg, idx = gi.aggregators.length;
                if (!isLeafLevel && gi.aggregateChildGroups) {
                    // make sure all the subgroups are calculated
                    var i = group.groups.length;
                    while (i--) {
                        if (!group.groups[i].totals.initialized) {
                            calculateTotals(group.groups[i].totals);
                        }
                    }
                }
                while (idx--) {
                    agg = gi.aggregators[idx];
                    agg.init();
                    if (!isLeafLevel && gi.aggregateChildGroups) {
                        gi.compiledAccumulators[idx].call(agg, group.groups);
                    }
                    else {
                        gi.compiledAccumulators[idx].call(agg, group.rows);
                    }
                    agg.storeResult(totals);
                }
                totals.initialized = true;
            }
            function addGroupTotals(group) {
                var gi = groupingInfos[group.level];
                var totals = new sleekgrid.GroupTotals();
                totals.group = group;
                group.totals = totals;
                if (!gi.lazyTotalsCalculation) {
                    calculateTotals(totals);
                }
            }
            function addTotals(groups, level) {
                level = level || 0;
                var gi = groupingInfos[level];
                var groupCollapsed = gi.collapsed;
                var toggledGroups = toggledGroupsByLevel[level];
                var idx = groups.length, g;
                while (idx--) {
                    g = groups[idx];
                    if (g.collapsed && !gi.aggregateCollapsed) {
                        continue;
                    }
                    // Do a depth-first aggregation so that parent group aggregators can access subgroup totals.
                    if (g.groups) {
                        addTotals(g.groups, level + 1);
                    }
                    if (gi.aggregators.length && (gi.aggregateEmpty || g.rows.length || (g.groups && g.groups.length))) {
                        addGroupTotals(g);
                    }
                    g.collapsed = groupCollapsed ^ toggledGroups[g.groupingKey];
                    g.title = gi.formatter ? gi.formatter(g) : htmlEncode(g.value);
                }
            }
            function flattenGroupedRows(groups, level) {
                level = level || 0;
                var gi = groupingInfos[level];
                var groupedRows = [], rows, gl = 0, g;
                for (var i = 0, l = groups.length; i < l; i++) {
                    g = groups[i];
                    groupedRows[gl++] = g;
                    if (!g.collapsed) {
                        rows = g.groups ? flattenGroupedRows(g.groups, level + 1) : g.rows;
                        for (var j = 0, jj = rows.length; j < jj; j++) {
                            groupedRows[gl++] = rows[j];
                        }
                    }
                    if (g.totals && gi.displayTotalsRow && (!g.collapsed || gi.aggregateCollapsed)) {
                        groupedRows[gl++] = g.totals;
                    }
                }
                return groupedRows;
            }
            function getFunctionInfo(fn) {
                var fnRegex = /^function[^(]*\(([^)]*)\)\s*{([\s\S]*)}$/;
                var matches = fn.toString().match(fnRegex);
                return {
                    params: matches[1].split(","),
                    body: matches[2]
                };
            }
            function compileAccumulatorLoop(aggregator) {
                var accumulatorInfo = getFunctionInfo(aggregator.accumulate);
                var fn = new Function("_items", "for (var " + accumulatorInfo.params[0] + ", _i=0, _il=_items.length; _i<_il; _i++) {" +
                    accumulatorInfo.params[0] + " = _items[_i]; " +
                    accumulatorInfo.body +
                    "}");
                return fn;
            }
            function compileFilter() {
                var filterInfo = getFunctionInfo(filter);
                var filterBody = filterInfo.body
                    .replace(/return false\s*([;}]|$)/gi, "{ continue _coreloop; }$1")
                    .replace(/return true\s*([;}]|$)/gi, "{ _retval[_idx++] = $item$; continue _coreloop; }$1")
                    .replace(/return ([^;}]+?)\s*([;}]|$)/gi, "{ if ($1) { _retval[_idx++] = $item$; }; continue _coreloop; }$2");
                // This preserves the function template code after JS compression,
                // so that replace() commands still work as expected.
                var tpl = [
                    //"function(_items, _args) { ",
                    "var _retval = [], _idx = 0; ",
                    "var $item$, $args$ = _args; ",
                    "_coreloop: ",
                    "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ",
                    "$item$ = _items[_i]; ",
                    "$filter$; ",
                    "} ",
                    "return _retval; "
                    //"}"
                ].join("");
                tpl = tpl.replace(/\$filter\$/gi, filterBody);
                tpl = tpl.replace(/\$item\$/gi, filterInfo.params[0]);
                tpl = tpl.replace(/\$args\$/gi, filterInfo.params[1]);
                var fn = new Function("_items,_args", tpl);
                fn.displayName = fn.name = "compiledFilter";
                return fn;
            }
            function compileFilterWithCaching() {
                var filterInfo = getFunctionInfo(filter);
                var filterBody = filterInfo.body
                    .replace(/return false\s*([;}]|$)/gi, "{ continue _coreloop; }$1")
                    .replace(/return true\s*([;}]|$)/gi, "{ _cache[_i] = true;_retval[_idx++] = $item$; continue _coreloop; }$1")
                    .replace(/return ([^;}]+?)\s*([;}]|$)/gi, "{ if ((_cache[_i] = $1)) { _retval[_idx++] = $item$; }; continue _coreloop; }$2");
                // This preserves the function template code after JS compression,
                // so that replace() commands still work as expected.
                var tpl = [
                    //"function(_items, _args, _cache) { ",
                    "var _retval = [], _idx = 0; ",
                    "var $item$, $args$ = _args; ",
                    "_coreloop: ",
                    "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ",
                    "$item$ = _items[_i]; ",
                    "if (_cache[_i]) { ",
                    "_retval[_idx++] = $item$; ",
                    "continue _coreloop; ",
                    "} ",
                    "$filter$; ",
                    "} ",
                    "return _retval; "
                    //"}"
                ].join("");
                tpl = tpl.replace(/\$filter\$/gi, filterBody);
                tpl = tpl.replace(/\$item\$/gi, filterInfo.params[0]);
                tpl = tpl.replace(/\$args\$/gi, filterInfo.params[1]);
                var fn = new Function("_items,_args,_cache", tpl);
                var fnName = "compiledFilterWithCaching";
                fn.displayName = fnName;
                fn.name = setFunctionName(fn, fnName);
                return fn;
            }
            /**
             * In ES5 we could set the function name on the fly but in ES6 this is forbidden and we need to set it through differently
             * We can use Object.defineProperty and set it the property to writable, see MDN for reference
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
             * @param {string} fn
             * @param {string} fnName
             */
            function setFunctionName(fn, fnName) {
                try {
                    Object.defineProperty(fn, 'name', {
                        writable: true,
                        value: fnName
                    });
                }
                catch (err) {
                    fn.name = fnName;
                }
            }
            function uncompiledFilter(items, args) {
                var retval = [], idx = 0;
                for (var i = 0, ii = items.length; i < ii; i++) {
                    if (filter(items[i], args)) {
                        retval[idx++] = items[i];
                    }
                }
                return retval;
            }
            function uncompiledFilterWithCaching(items, args, cache) {
                var retval = [], idx = 0, item;
                for (var i = 0, ii = items.length; i < ii; i++) {
                    item = items[i];
                    if (cache[i]) {
                        retval[idx++] = item;
                    }
                    else if (filter(item, args)) {
                        retval[idx++] = item;
                        cache[i] = true;
                    }
                }
                return retval;
            }
            function getFilteredAndPagedItems(items) {
                if (filter) {
                    var batchFilter = options.inlineFilters ? compiledFilter : uncompiledFilter;
                    var batchFilterWithCaching = options.inlineFilters ? compiledFilterWithCaching : uncompiledFilterWithCaching;
                    if (refreshHints.isFilterNarrowing) {
                        filteredItems = batchFilter(filteredItems, filterArgs);
                    }
                    else if (refreshHints.isFilterExpanding) {
                        filteredItems = batchFilterWithCaching(items, filterArgs, filterCache);
                    }
                    else if (!refreshHints.isFilterUnchanged) {
                        filteredItems = batchFilter(items, filterArgs);
                    }
                }
                else {
                    // special case:  if not filtering and not paging, the resulting
                    // rows collection needs to be a copy so that changes due to sort
                    // can be caught
                    filteredItems = items.concat();
                }
                // get the current page
                return { totalRows: filteredItems.length, rows: filteredItems };
            }
            function getRowDiffs(rows, newRows) {
                var item, r, eitherIsNonData, diff = [];
                var from = 0, to = newRows.length;
                if (refreshHints && refreshHints.ignoreDiffsBefore) {
                    from = Math.max(0, Math.min(newRows.length, refreshHints.ignoreDiffsBefore));
                }
                if (refreshHints && refreshHints.ignoreDiffsAfter) {
                    to = Math.min(newRows.length, Math.max(0, refreshHints.ignoreDiffsAfter));
                }
                for (var i = from, rl = rows.length; i < to; i++) {
                    if (i >= rl) {
                        diff[diff.length] = i;
                    }
                    else {
                        item = newRows[i];
                        r = rows[i];
                        if ((groupingInfos.length && (eitherIsNonData = (item.__nonDataRow) || (r.__nonDataRow)) &&
                            item.__group !== r.__group ||
                            item.__group && !item.equals(r))
                            || (eitherIsNonData &&
                                // no good way to compare totals since they are arbitrary DTOs
                                // deep object comparison is pretty expensive
                                // always considering them 'dirty' seems easier for the time being
                                (item.__groupTotals || r.__groupTotals))
                            || item[idProperty] != r[idProperty]
                            || (updated && updated[item[idProperty]])) {
                            diff[diff.length] = i;
                        }
                    }
                }
                return diff;
            }
            function recalc(_items) {
                rowsById = null;
                if (refreshHints.isFilterNarrowing != prevRefreshHints.isFilterNarrowing ||
                    refreshHints.isFilterExpanding != prevRefreshHints.isFilterExpanding) {
                    filterCache = [];
                }
                var filteredItems = getFilteredAndPagedItems(_items);
                totalRows = filteredItems.totalRows;
                var newRows = filteredItems.rows;
                summaryOptions.totals = {};
                groups = [];
                if (groupingInfos.length) {
                    groups = extractGroups(newRows);
                    if (groups.length) {
                        newRows = flattenGroupedRows(groups);
                    }
                }
                var diff = getRowDiffs(rows, newRows);
                rows = newRows;
                return diff;
            }
            function refresh() {
                if (suspend) {
                    return;
                }
                var countBefore = rows.length;
                var totalRowsBefore = totalRows;
                var diff = recalc(items); // pass as direct refs to avoid closure perf hit
                updated = null;
                prevRefreshHints = refreshHints;
                refreshHints = {};
                if (totalRowsBefore !== totalRows) {
                    onPagingInfoChanged.notify(getPagingInfo(), null, self);
                }
                if (countBefore !== rows.length) {
                    onRowCountChanged.notify({ previous: countBefore, current: rows.length, dataView: self }, null, self);
                }
                if (diff.length > 0) {
                    onRowsChanged.notify({ rows: diff, dataView: self }, null, self);
                }
                if (countBefore !== rows.length || diff.length > 0) {
                    onRowsOrCountChanged.notify({
                        rowsDiff: diff, previousRowCount: countBefore, currentRowCount: rows.length,
                        rowCountChanged: countBefore !== rows.length, rowsChanged: diff.length > 0, dataView: self
                    }, null, self);
                }
            }
            /***
             * Wires the grid and the DataView together to keep row selection tied to item ids.
             * This is useful since, without it, the grid only knows about rows, so if the items
             * move around, the same rows stay selected instead of the selection moving along
             * with the items.
             *
             * NOTE:  This doesn't work with cell selection model.
             *
             * @param grid {Slick.Grid} The grid to sync selection with.
             * @param preserveHidden {Boolean} Whether to keep selected items that go out of the
             *     view due to them getting filtered out.
             * @param preserveHiddenOnSelectionChange {Boolean} Whether to keep selected items
             *     that are currently out of the view (see preserveHidden) as selected when selection
             *     changes.
             * @return {EventEmitter} An event that notifies when an internal list of selected row ids
             *     changes.  This is useful since, in combination with the above two options, it allows
             *     access to the full list selected row ids, and not just the ones visible to the grid.
             * @method syncGridSelection
             */
            function syncGridSelection(grid, preserveHidden, preserveHiddenOnSelectionChange) {
                var self = this;
                var inHandler;
                var selectedRowIds = self.mapRowsToIds(grid.getSelectedRows());
                var onSelectedRowIdsChanged = new sleekgrid.EventEmitter();
                function setSelectedRowIds(rowIds) {
                    if (selectedRowIds.join(",") == rowIds.join(",")) {
                        return;
                    }
                    selectedRowIds = rowIds;
                    onSelectedRowIdsChanged.notify({
                        "grid": grid,
                        "ids": selectedRowIds,
                        "dataView": self
                    }, new sleekgrid.EventData(), self);
                }
                function update() {
                    if (selectedRowIds.length > 0) {
                        inHandler = true;
                        var selectedRows = self.mapIdsToRows(selectedRowIds);
                        if (!preserveHidden) {
                            setSelectedRowIds(self.mapRowsToIds(selectedRows));
                        }
                        grid.setSelectedRows(selectedRows);
                        inHandler = false;
                    }
                }
                grid.onSelectedRowsChanged.subscribe(function (e, args) {
                    if (inHandler) {
                        return;
                    }
                    var newSelectedRowIds = self.mapRowsToIds(grid.getSelectedRows());
                    if (!preserveHiddenOnSelectionChange || !grid.getOptions().multiSelect) {
                        setSelectedRowIds(newSelectedRowIds);
                    }
                    else {
                        // keep the ones that are hidden
                        var existing = $.grep(selectedRowIds, function (id) { return self.getRowById(id) === undefined; });
                        // add the newly selected ones
                        setSelectedRowIds(existing.concat(newSelectedRowIds));
                    }
                });
                this.onRowsChanged.subscribe(update);
                this.onRowCountChanged.subscribe(update);
                return onSelectedRowIdsChanged;
            }
            function syncGridCellCssStyles(grid, key) {
                var hashById;
                var inHandler;
                // since this method can be called after the cell styles have been set,
                // get the existing ones right away
                storeCellCssStyles(grid.getCellCssStyles(key));
                function storeCellCssStyles(hash) {
                    hashById = {};
                    for (var row in hash) {
                        var id = rows[row][idProperty];
                        hashById[id] = hash[row];
                    }
                }
                function update() {
                    if (hashById) {
                        inHandler = true;
                        ensureRowsByIdCache();
                        var newHash = {};
                        for (var id in hashById) {
                            var row = rowsById[id];
                            if (row != undefined) {
                                newHash[row] = hashById[id];
                            }
                        }
                        grid.setCellCssStyles(key, newHash);
                        inHandler = false;
                    }
                }
                var subFunc = function (e, args) {
                    if (inHandler) {
                        return;
                    }
                    if (key != args.key) {
                        return;
                    }
                    if (args.hash) {
                        storeCellCssStyles(args.hash);
                    }
                    else {
                        grid.onCellCssStylesChanged.unsubscribe(subFunc);
                        onRowsOrCountChanged.unsubscribe(update);
                    }
                };
                grid.onCellCssStylesChanged.subscribe(subFunc);
                onRowsOrCountChanged.subscribe(update);
            }
            function addData(data) {
                if (intf.onProcessData && data)
                    data = intf.onProcessData(data, intf) || data;
                errorMessage = null;
                loading && loading.abort();
                loading = false;
                if (!data) {
                    errorMessage = intf.errormsg;
                    onPagingInfoChanged.notify(getPagingInfo());
                    return false;
                }
                data.TotalCount = data.TotalCount || 0;
                data.Entities = data.Entities || [];
                if (!data.Skip || (!intf.rowsPerPage && !data.Take))
                    data.Page = 1;
                else
                    data.Page = Math.ceil(data.Skip / (data.Take || intf.rowsPerPage)) + 1;
                page = data.Page;
                totalCount = data.TotalCount;
                setItems(data.Entities);
                onPagingInfoChanged.notify(getPagingInfo());
            }
            function populate() {
                if (populateLocks > 0) {
                    populateCalls++;
                    return;
                }
                populateCalls = 0;
                loading && loading.abort();
                if (intf.onSubmit) {
                    var gh = intf.onSubmit(intf);
                    if (gh === false)
                        return false;
                }
                onDataLoading.notify(this);
                if (!intf.url)
                    return false;
                // set loading event
                if (!intf.seekToPage)
                    intf.seekToPage = 1;
                var request = {};
                var skip = (intf.seekToPage - 1) * intf.rowsPerPage;
                if (skip)
                    request.Skip = skip;
                if (intf.rowsPerPage)
                    request.Take = intf.rowsPerPage;
                if (intf.sortBy && intf.sortBy.length) {
                    if (typeof intf.sortBy !== "string")
                        request.Sort = intf.sortBy;
                    else {
                        request.Sort = [intf.sortBy];
                    }
                }
                if (intf.params) {
                    request = extend(request, intf.params);
                }
                var dt = dataType;
                var ajaxOptions = {
                    cache: false,
                    type: intf.method,
                    contentType: contentType,
                    url: intf.url,
                    data: request,
                    dataType: dt,
                    success: function (response) {
                        loading = false;
                        if (response.Error)
                            notifyError(response.Error.Message || response.Error.Code);
                        else
                            addData(response);
                        onDataLoaded.notify(this);
                    },
                    error: function (xhr, status, ev) {
                        loading = false;
                        if ((xhr.getResponseHeader("content-type") || '').toLowerCase().indexOf("application/json") >= 0) {
                            var json = $.parseJSON(xhr.responseText);
                            if (json != null && json.Error != null) {
                                notifyError(json.Error.Message || json.Error.Code);
                                onPagingInfoChanged.notify(getPagingInfo());
                                onDataLoaded.notify(this);
                                return;
                            }
                        }
                        errorMessage = xhr.errormsg;
                        onPagingInfoChanged.notify(getPagingInfo());
                        onDataLoaded.notify(this);
                    },
                    complete: function () {
                        loading = false;
                    }
                };
                if (intf.onAjaxCall) {
                    var ah = intf.onAjaxCall(this, ajaxOptions);
                    if (ah === false) {
                        loading = false;
                        onPagingInfoChanged.notify(getPagingInfo());
                        return false;
                    }
                }
                ajaxOptions.data = $.toJSON(ajaxOptions.data);
                onPagingInfoChanged.notify(getPagingInfo());
                loading = $.ajax(ajaxOptions);
            }
            function populateLock() {
                if (populateLocks == 0)
                    populateCalls = 0;
                populateLocks++;
            }
            function populateUnlock() {
                if (populateLocks > 0) {
                    populateLocks--;
                    if (populateLocks == 0 && populateCalls > 0)
                        populate();
                }
            }
            function getGroupItemMetadataProvider() {
                return groupItemMetadataProvider;
            }
            function setGroupItemMetadataProvider(value) {
                groupItemMetadataProvider = value;
            }
            idProperty = options.idField || 'id';
            contentType = options.contentType || "application/json";
            dataType = options.dataType || 'json';
            filter = options.filter || null;
            intf = {
                // methods
                beginUpdate: beginUpdate,
                endUpdate: endUpdate,
                setPagingOptions: setPagingOptions,
                getPagingInfo: getPagingInfo,
                getIdPropertyName: getIdPropertyName,
                getRows: getRows,
                getItems: getItems,
                setItems: setItems,
                getFilter: getFilter,
                getFilteredItems: getFilteredItems,
                setFilter: setFilter,
                sort: sort,
                fastSort: fastSort,
                reSort: reSort,
                getLocalSort: getLocalSort,
                setLocalSort: setLocalSort,
                setSummaryOptions: setSummaryOptions,
                getGrandTotals: getGrandTotals,
                setGrouping: setGrouping,
                getGrouping: getGrouping,
                collapseAllGroups: collapseAllGroups,
                expandAllGroups: expandAllGroups,
                collapseGroup: collapseGroup,
                expandGroup: expandGroup,
                getGroups: getGroups,
                getIdxById: getIdxById,
                getRowByItem: getRowByItem,
                getRowById: getRowById,
                getItemById: getItemById,
                getItemByIdx: getItemByIdx,
                mapItemsToRows: mapItemsToRows,
                mapRowsToIds: mapRowsToIds,
                mapIdsToRows: mapIdsToRows,
                setRefreshHints: setRefreshHints,
                setFilterArgs: setFilterArgs,
                refresh: refresh,
                updateItem: updateItem,
                insertItem: insertItem,
                addItem: addItem,
                deleteItem: deleteItem,
                sortedAddItem: sortedAddItem,
                sortedUpdateItem: sortedUpdateItem,
                syncGridSelection: syncGridSelection,
                syncGridCellCssStyles: syncGridCellCssStyles,
                getLength: getLength,
                getItem: getItem,
                getItemMetadata: getItemMetadata,
                getGroupItemMetadataProvider: getGroupItemMetadataProvider,
                setGroupItemMetadataProvider: setGroupItemMetadataProvider,
                onRowCountChanged: onRowCountChanged,
                onRowsChanged: onRowsChanged,
                onRowsOrCountChanged: onRowsOrCountChanged,
                onPagingInfoChanged: onPagingInfoChanged,
                onGroupExpanded: onGroupExpanded,
                onGroupCollapsed: onGroupCollapsed,
                addData: addData,
                populate: populate,
                populateLock: populateLock,
                populateUnlock: populateUnlock,
                onDataChanged: onDataChanged,
                onDataLoaded: onDataLoaded,
                onDataLoading: onDataLoading,
                params: options.params || {},
                onSubmit: options.onSubmit || null,
                url: options.url || null,
                rowsPerPage: options.rowsPerPage || 0,
                seekToPage: options.seekToPage || 1,
                onAjaxCall: options.onAjaxCall || null,
                onProcessData: options.onProcessData || null,
                method: options.method || "POST",
                errormsg: localText("Controls.Pager.DefaultLoadError"),
                sortBy: typeof options.sortBy == "string" ? [options.sortBy] : (options.sortBy || []),
                idField: idProperty
            };
            if (options.url && options.autoLoad) {
                populate();
            }
            return intf;
        }
        return RemoteView;
    }());

    function Attr(name) {
        return function (target) {
            return registerClass(target, 'Serenity.' + name + 'Attribute');
        };
    }
    var EnumKeyAttribute = /** @class */ (function () {
        function EnumKeyAttribute(value) {
            this.value = value;
        }
        EnumKeyAttribute = tslib.__decorate([
            Attr('EnumKey')
        ], EnumKeyAttribute);
        return EnumKeyAttribute;
    }());
    var DisplayNameAttribute = /** @class */ (function () {
        function DisplayNameAttribute(displayName) {
            this.displayName = displayName;
        }
        DisplayNameAttribute = tslib.__decorate([
            Attr('DisplayName')
        ], DisplayNameAttribute);
        return DisplayNameAttribute;
    }());
    var CategoryAttribute = /** @class */ (function () {
        function CategoryAttribute(category) {
            this.category = category;
        }
        CategoryAttribute = tslib.__decorate([
            Attr('Category')
        ], CategoryAttribute);
        return CategoryAttribute;
    }());
    var ColumnsKeyAttribute = /** @class */ (function () {
        function ColumnsKeyAttribute(value) {
            this.value = value;
        }
        ColumnsKeyAttribute = tslib.__decorate([
            Attr('ColumnsKey')
        ], ColumnsKeyAttribute);
        return ColumnsKeyAttribute;
    }());
    var CssClassAttribute = /** @class */ (function () {
        function CssClassAttribute(cssClass) {
            this.cssClass = cssClass;
        }
        CssClassAttribute = tslib.__decorate([
            Attr('CssClass')
        ], CssClassAttribute);
        return CssClassAttribute;
    }());
    var DefaultValueAttribute = /** @class */ (function () {
        function DefaultValueAttribute(value) {
            this.value = value;
        }
        DefaultValueAttribute = tslib.__decorate([
            Attr('DefaultValue')
        ], DefaultValueAttribute);
        return DefaultValueAttribute;
    }());
    var DialogTypeAttribute = /** @class */ (function () {
        function DialogTypeAttribute(value) {
            this.value = value;
        }
        DialogTypeAttribute = tslib.__decorate([
            Attr('DialogType')
        ], DialogTypeAttribute);
        return DialogTypeAttribute;
    }());
    var EditorOptionAttribute = /** @class */ (function () {
        function EditorOptionAttribute(key, value) {
            this.key = key;
            this.value = value;
        }
        EditorOptionAttribute = tslib.__decorate([
            Attr('EditorOption')
        ], EditorOptionAttribute);
        return EditorOptionAttribute;
    }());
    var EditorTypeAttributeBase = /** @class */ (function () {
        function EditorTypeAttributeBase(editorType) {
            this.editorType = editorType;
        }
        EditorTypeAttributeBase.prototype.setParams = function (editorParams) {
        };
        return EditorTypeAttributeBase;
    }());
    registerClass(EditorTypeAttributeBase, 'Serenity.EditorTypeAttributeBase');
    var EditorTypeAttribute = /** @class */ (function (_super) {
        tslib.__extends(EditorTypeAttribute, _super);
        function EditorTypeAttribute(editorType) {
            return _super.call(this, editorType) || this;
        }
        EditorTypeAttribute = tslib.__decorate([
            Attr('EditorType')
        ], EditorTypeAttribute);
        return EditorTypeAttribute;
    }(EditorTypeAttributeBase));
    var ElementAttribute = /** @class */ (function () {
        function ElementAttribute(value) {
            this.value = value;
        }
        ElementAttribute = tslib.__decorate([
            Attr('Element')
        ], ElementAttribute);
        return ElementAttribute;
    }());
    var EntityTypeAttribute = /** @class */ (function () {
        function EntityTypeAttribute(value) {
            this.value = value;
        }
        EntityTypeAttribute = tslib.__decorate([
            Attr('EntityType')
        ], EntityTypeAttribute);
        return EntityTypeAttribute;
    }());
    var FilterableAttribute = /** @class */ (function () {
        function FilterableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        FilterableAttribute = tslib.__decorate([
            Attr('Filterable')
        ], FilterableAttribute);
        return FilterableAttribute;
    }());
    var FlexifyAttribute = /** @class */ (function () {
        function FlexifyAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        FlexifyAttribute = tslib.__decorate([
            Attr('Flexify')
        ], FlexifyAttribute);
        return FlexifyAttribute;
    }());
    var FormKeyAttribute = /** @class */ (function () {
        function FormKeyAttribute(value) {
            this.value = value;
        }
        FormKeyAttribute = tslib.__decorate([
            Attr('FormKey')
        ], FormKeyAttribute);
        return FormKeyAttribute;
    }());
    var GeneratedCodeAttribute = /** @class */ (function () {
        function GeneratedCodeAttribute(origin) {
            this.origin = origin;
        }
        GeneratedCodeAttribute = tslib.__decorate([
            Attr('GeneratedCode')
        ], GeneratedCodeAttribute);
        return GeneratedCodeAttribute;
    }());
    var HiddenAttribute = /** @class */ (function () {
        function HiddenAttribute() {
        }
        HiddenAttribute = tslib.__decorate([
            Attr('Hidden')
        ], HiddenAttribute);
        return HiddenAttribute;
    }());
    var HintAttribute = /** @class */ (function () {
        function HintAttribute(hint) {
            this.hint = hint;
        }
        HintAttribute = tslib.__decorate([
            Attr('Hint')
        ], HintAttribute);
        return HintAttribute;
    }());
    var IdPropertyAttribute = /** @class */ (function () {
        function IdPropertyAttribute(value) {
            this.value = value;
        }
        IdPropertyAttribute = tslib.__decorate([
            Attr('IdProperty')
        ], IdPropertyAttribute);
        return IdPropertyAttribute;
    }());
    var InsertableAttribute = /** @class */ (function () {
        function InsertableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        InsertableAttribute = tslib.__decorate([
            Attr('Insertable')
        ], InsertableAttribute);
        return InsertableAttribute;
    }());
    var IsActivePropertyAttribute = /** @class */ (function () {
        function IsActivePropertyAttribute(value) {
            this.value = value;
        }
        IsActivePropertyAttribute = tslib.__decorate([
            Attr('IsActiveProperty')
        ], IsActivePropertyAttribute);
        return IsActivePropertyAttribute;
    }());
    var ItemNameAttribute = /** @class */ (function () {
        function ItemNameAttribute(value) {
            this.value = value;
        }
        ItemNameAttribute = tslib.__decorate([
            Attr('ItemName')
        ], ItemNameAttribute);
        return ItemNameAttribute;
    }());
    var LocalTextPrefixAttribute = /** @class */ (function () {
        function LocalTextPrefixAttribute(value) {
            this.value = value;
        }
        LocalTextPrefixAttribute = tslib.__decorate([
            Attr('LocalTextPrefix')
        ], LocalTextPrefixAttribute);
        return LocalTextPrefixAttribute;
    }());
    var MaximizableAttribute = /** @class */ (function () {
        function MaximizableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        MaximizableAttribute = tslib.__decorate([
            Attr('Maximizable')
        ], MaximizableAttribute);
        return MaximizableAttribute;
    }());
    var MaxLengthAttribute = /** @class */ (function () {
        function MaxLengthAttribute(maxLength) {
            this.maxLength = maxLength;
        }
        MaxLengthAttribute = tslib.__decorate([
            Attr('MaxLength')
        ], MaxLengthAttribute);
        return MaxLengthAttribute;
    }());
    var NamePropertyAttribute = /** @class */ (function () {
        function NamePropertyAttribute(value) {
            this.value = value;
        }
        NamePropertyAttribute = tslib.__decorate([
            Attr('NameProperty')
        ], NamePropertyAttribute);
        return NamePropertyAttribute;
    }());
    var OneWayAttribute = /** @class */ (function () {
        function OneWayAttribute() {
        }
        OneWayAttribute = tslib.__decorate([
            Attr('OneWay')
        ], OneWayAttribute);
        return OneWayAttribute;
    }());
    var OptionAttribute = /** @class */ (function () {
        function OptionAttribute() {
        }
        OptionAttribute = tslib.__decorate([
            Attr('Option')
        ], OptionAttribute);
        return OptionAttribute;
    }());
    var OptionsTypeAttribute = /** @class */ (function () {
        function OptionsTypeAttribute(value) {
            this.value = value;
        }
        OptionsTypeAttribute = tslib.__decorate([
            Attr('OptionsType')
        ], OptionsTypeAttribute);
        return OptionsTypeAttribute;
    }());
    var PanelAttribute = /** @class */ (function () {
        function PanelAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        PanelAttribute = tslib.__decorate([
            Attr('Panel')
        ], PanelAttribute);
        return PanelAttribute;
    }());
    var PlaceholderAttribute = /** @class */ (function () {
        function PlaceholderAttribute(value) {
            this.value = value;
        }
        PlaceholderAttribute = tslib.__decorate([
            Attr('Placeholder')
        ], PlaceholderAttribute);
        return PlaceholderAttribute;
    }());
    var ReadOnlyAttribute = /** @class */ (function () {
        function ReadOnlyAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        ReadOnlyAttribute = tslib.__decorate([
            Attr('ReadOnly')
        ], ReadOnlyAttribute);
        return ReadOnlyAttribute;
    }());
    var RequiredAttribute = /** @class */ (function () {
        function RequiredAttribute(isRequired) {
            if (isRequired === void 0) { isRequired = true; }
            this.isRequired = isRequired;
        }
        RequiredAttribute = tslib.__decorate([
            Attr('Required')
        ], RequiredAttribute);
        return RequiredAttribute;
    }());
    var ResizableAttribute = /** @class */ (function () {
        function ResizableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        ResizableAttribute = tslib.__decorate([
            Attr('Resizable')
        ], ResizableAttribute);
        return ResizableAttribute;
    }());
    var ResponsiveAttribute = /** @class */ (function () {
        function ResponsiveAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        ResponsiveAttribute = tslib.__decorate([
            Attr('Responsive')
        ], ResponsiveAttribute);
        return ResponsiveAttribute;
    }());
    var ServiceAttribute = /** @class */ (function () {
        function ServiceAttribute(value) {
            this.value = value;
        }
        ServiceAttribute = tslib.__decorate([
            Attr('Service')
        ], ServiceAttribute);
        return ServiceAttribute;
    }());
    var UpdatableAttribute = /** @class */ (function () {
        function UpdatableAttribute(value) {
            if (value === void 0) { value = true; }
            this.value = value;
        }
        UpdatableAttribute = tslib.__decorate([
            Attr('Updatable')
        ], UpdatableAttribute);
        return UpdatableAttribute;
    }());
    exports.Decorators = void 0;
    (function (Decorators) {
        function registerClass$1(nameOrIntf, intf2) {
            return function (target) {
                if (typeof nameOrIntf == "string")
                    registerClass(target, nameOrIntf, intf2);
                else
                    registerClass(target, null, nameOrIntf);
            };
        }
        Decorators.registerClass = registerClass$1;
        function registerInterface$1(nameOrIntf, intf2) {
            return function (target) {
                if (typeof nameOrIntf == "string")
                    registerInterface(target, nameOrIntf, intf2);
                else
                    registerInterface(target, null, nameOrIntf);
            };
        }
        Decorators.registerInterface = registerInterface$1;
        function registerEditor$1(nameOrIntf, intf2) {
            return function (target) {
                if (typeof nameOrIntf == "string")
                    registerEditor(target, nameOrIntf, intf2);
                else
                    registerEditor(target, null, nameOrIntf);
            };
        }
        Decorators.registerEditor = registerEditor$1;
        function registerEnum$1(target, enumKey, name) {
            registerEnum(target, name, enumKey);
            if (enumKey)
                addAttribute(target, new EnumKeyAttribute(enumKey));
        }
        Decorators.registerEnum = registerEnum$1;
        function registerEnumType(target, name, enumKey) {
            registerEnum$1(target, enumKey !== null && enumKey !== void 0 ? enumKey : name, name);
        }
        Decorators.registerEnumType = registerEnumType;
        function registerFormatter(nameOrIntf, intf2) {
            if (nameOrIntf === void 0) { nameOrIntf = [ISlickFormatter]; }
            if (intf2 === void 0) { intf2 = [ISlickFormatter]; }
            return registerClass$1(nameOrIntf, intf2);
        }
        Decorators.registerFormatter = registerFormatter;
        function enumKey(value) {
            return function (target) {
                addAttribute(target, new EnumKeyAttribute(value));
            };
        }
        Decorators.enumKey = enumKey;
        function option() {
            return function (target, propertyKey) {
                var isGetSet = startsWith(propertyKey, 'get_') || startsWith(propertyKey, 'set_');
                var memberName = isGetSet ? propertyKey.substr(4) : propertyKey;
                addTypeMember(target.constructor, {
                    name: memberName,
                    attr: [new OptionAttribute()],
                    type: isGetSet ? exports.MemberType.property : exports.MemberType.field,
                    getter: isGetSet ? ('get_' + memberName) : null,
                    setter: isGetSet ? ('set_' + memberName) : null
                });
            };
        }
        Decorators.option = option;
        function dialogType(value) {
            return function (target) {
                addAttribute(target, new DialogTypeAttribute(value));
            };
        }
        Decorators.dialogType = dialogType;
        function editor() {
            return function (target) {
                var attr = new EditorAttribute();
                addAttribute(target, attr);
            };
        }
        Decorators.editor = editor;
        function element(value) {
            return function (target) {
                addAttribute(target, new ElementAttribute(value));
            };
        }
        Decorators.element = element;
        function filterable(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new FilterableAttribute(value));
            };
        }
        Decorators.filterable = filterable;
        function flexify(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new FlexifyAttribute(value));
            };
        }
        Decorators.flexify = flexify;
        function itemName(value) {
            return function (target) {
                addAttribute(target, new ItemNameAttribute(value));
            };
        }
        Decorators.itemName = itemName;
        function maximizable(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new MaximizableAttribute(value));
            };
        }
        Decorators.maximizable = maximizable;
        function optionsType(value) {
            return function (target) {
                addAttribute(target, new OptionsTypeAttribute(value));
            };
        }
        Decorators.optionsType = optionsType;
        function panel(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new PanelAttribute(value));
            };
        }
        Decorators.panel = panel;
        function resizable(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new ResizableAttribute(value));
            };
        }
        Decorators.resizable = resizable;
        function responsive(value) {
            if (value === void 0) { value = true; }
            return function (target) {
                addAttribute(target, new ResponsiveAttribute(value));
            };
        }
        Decorators.responsive = responsive;
        function service(value) {
            return function (target) {
                addAttribute(target, new ServiceAttribute(value));
            };
        }
        Decorators.service = service;
    })(exports.Decorators || (exports.Decorators = {}));

    var IBooleanValue = /** @class */ (function () {
        function IBooleanValue() {
        }
        IBooleanValue = tslib.__decorate([
            exports.Decorators.registerInterface("Serenity.IBooleanValue")
        ], IBooleanValue);
        return IBooleanValue;
    }());

    var IDoubleValue = /** @class */ (function () {
        function IDoubleValue() {
        }
        IDoubleValue = tslib.__decorate([
            exports.Decorators.registerInterface("Serenity.IDoubleValue")
        ], IDoubleValue);
        return IDoubleValue;
    }());

    var IDialog = /** @class */ (function () {
        function IDialog() {
        }
        IDialog = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IDialog')
        ], IDialog);
        return IDialog;
    }());

    var IEditDialog = /** @class */ (function () {
        function IEditDialog() {
        }
        IEditDialog = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IEditDialog')
        ], IEditDialog);
        return IEditDialog;
    }());

    var IGetEditValue = /** @class */ (function () {
        function IGetEditValue() {
        }
        IGetEditValue = tslib.__decorate([
            exports.Decorators.registerInterface("Serenity.IGetEditValue")
        ], IGetEditValue);
        return IGetEditValue;
    }());

    var IReadOnly = /** @class */ (function () {
        function IReadOnly() {
        }
        IReadOnly = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IReadOnly')
        ], IReadOnly);
        return IReadOnly;
    }());

    var ISetEditValue = /** @class */ (function () {
        function ISetEditValue() {
        }
        ISetEditValue = tslib.__decorate([
            exports.Decorators.registerInterface("Serenity.ISetEditValue")
        ], ISetEditValue);
        return ISetEditValue;
    }());

    var IStringValue = /** @class */ (function () {
        function IStringValue() {
        }
        IStringValue = tslib.__decorate([
            exports.Decorators.registerInterface("Serenity.IStringValue")
        ], IStringValue);
        return IStringValue;
    }());

    var IValidateRequired = /** @class */ (function () {
        function IValidateRequired() {
        }
        IValidateRequired = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IValidateRequired')
        ], IValidateRequired);
        return IValidateRequired;
    }());

    exports.CaptureOperationType = void 0;
    (function (CaptureOperationType) {
        CaptureOperationType[CaptureOperationType["Before"] = 0] = "Before";
        CaptureOperationType[CaptureOperationType["Delete"] = 1] = "Delete";
        CaptureOperationType[CaptureOperationType["Insert"] = 2] = "Insert";
        CaptureOperationType[CaptureOperationType["Update"] = 3] = "Update";
    })(exports.CaptureOperationType || (exports.CaptureOperationType = {}));
    registerEnum(exports.CaptureOperationType, 'Serenity.CaptureOperationType');

    exports.ReflectionUtils = void 0;
    (function (ReflectionUtils) {
        function getPropertyValue(o, property) {
            var d = o;
            var getter = d['get_' + property];
            if (!!!(typeof (getter) === 'undefined')) {
                return getter.apply(o);
            }
            var camelCase = makeCamelCase(property);
            getter = d['get_' + camelCase];
            if (!!!(typeof (getter) === 'undefined')) {
                return getter.apply(o);
            }
            return d[camelCase];
        }
        ReflectionUtils.getPropertyValue = getPropertyValue;
        function setPropertyValue(o, property, value) {
            var d = o;
            var setter = d['set_' + property];
            if (!!!(typeof (setter) === 'undefined')) {
                setter.apply(o, [value]);
                return;
            }
            var camelCase = makeCamelCase(property);
            setter = d['set_' + camelCase];
            if (!!!(typeof (setter) === 'undefined')) {
                setter.apply(o, [value]);
                return;
            }
            d[camelCase] = value;
        }
        ReflectionUtils.setPropertyValue = setPropertyValue;
        function makeCamelCase(s) {
            if (isEmptyOrNull(s)) {
                return s;
            }
            if (s === 'ID') {
                return 'id';
            }
            var hasNonUppercase = false;
            var numUppercaseChars = 0;
            for (var index = 0; index < s.length; index++) {
                if (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {
                    numUppercaseChars++;
                }
                else {
                    hasNonUppercase = true;
                    break;
                }
            }
            if (!hasNonUppercase && s.length !== 1 || numUppercaseChars === 0) {
                return s;
            }
            else if (numUppercaseChars > 1) {
                return s.substr(0, numUppercaseChars - 1).toLowerCase() + s.substr(numUppercaseChars - 1);
            }
            else if (s.length === 1) {
                return s.toLowerCase();
            }
            else {
                return s.substr(0, 1).toLowerCase() + s.substr(1);
            }
        }
        ReflectionUtils.makeCamelCase = makeCamelCase;
    })(exports.ReflectionUtils || (exports.ReflectionUtils = {}));

    function commonTypeRegistry(isMatch, attrKey, suffix) {
        var knownTypes;
        function reset() {
            knownTypes = null;
        }
        function search(key) {
            var type = getType(key);
            if (type != null && isMatch(type))
                return type;
            for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                var ns = _a[_i];
                var k = ns + "." + key;
                type = knownTypes[k];
                if (type)
                    return type;
                type = getType(ns + '.' + key);
                if (type != null && isMatch(type))
                    return type;
            }
        }
        function init() {
            knownTypes = {};
            for (var _i = 0, _a = getTypes(); _i < _a.length; _i++) {
                var type = _a[_i];
                if (!isMatch(type))
                    continue;
                var fullName = getTypeNameProp(type);
                knownTypes[fullName] = type;
                var akey = attrKey && attrKey(type);
                if (akey && akey !== fullName)
                    knownTypes[akey] = type;
            }
            if (suffix) {
                for (var _b = 0, _c = Object.keys(knownTypes); _b < _c.length; _b++) {
                    var key = _c[_b];
                    if (key.endsWith(suffix)) {
                        var p = key.substring(0, key.length - suffix.length);
                        if (p && !knownTypes[p])
                            knownTypes[p] = knownTypes[key];
                    }
                }
            }
        }
        function tryGet(key) {
            var _a;
            if (!key)
                return null;
            var type;
            if (knownTypes == null)
                init();
            var type = knownTypes[key];
            if (type)
                return type;
            type = search(key);
            if (type == null && suffix && !endsWith(key, suffix))
                type = (_a = knownTypes[key + suffix]) !== null && _a !== void 0 ? _a : search(key + suffix);
            if (type) {
                knownTypes[key] = type;
                var akey = attrKey && attrKey(type);
                if (akey && key != akey)
                    knownTypes[akey] = type;
                if (suffix && key.endsWith(suffix)) {
                    var p = key.substring(0, key.length - suffix.length);
                    if (p && !knownTypes[p])
                        knownTypes[p] = knownTypes[key];
                }
                return type;
            }
            return type;
        }
        return {
            reset: reset,
            tryGet: tryGet
        };
    }

    exports.DialogTypeRegistry = void 0;
    (function (DialogTypeRegistry) {
        var registry = commonTypeRegistry(function (type) { return isAssignableFrom(IDialog, type); }, null, "Dialog");
        function get(key) {
            if (isEmptyOrNull(key))
                throw new ArgumentNullException('key');
            var type = registry.tryGet(key);
            if (type)
                return type;
            var message = "\"".concat(htmlEncode(key), "\" dialog class not found! \nMake sure there is such a dialog type under the project root namespace, \nand its namespace parts start with capital letters like MyProject.MyModule.MyDialog.\n\nIf using ES modules, make sure the dialog type has a decorator like \n@Decorators.registerClass('MyProject.MyModule.MyDialog') with the full name\nand \"side-effect-import\" this dialog class from the current \n\"page.ts/grid.ts/dialog.ts file (import \"./path/to/MyDialog.ts\").\n\nIf you had this error from an editor with the InplaceAdd option, verify that the lookup key\nand dialog type name match case-sensitively, excluding the Dialog suffix.\nSpecify the DialogType property in the LookupEditor attribute if it is not.\n\nAfter applying fixes, build and run \"node ./tsbuild.js\" (or \"tsc\" if using namespaces) \nfrom the project folder.");
            notifyError(message.replace(/\r?\n\r?\n/g, '<br/><br/>'), '', { escapeHtml: false, timeOut: 5000 });
            throw new Exception(message);
        }
        DialogTypeRegistry.get = get;
        function reset() {
            registry.reset();
        }
        DialogTypeRegistry.reset = reset;
        function tryGet(key) {
            return registry.tryGet(key);
        }
        DialogTypeRegistry.tryGet = tryGet;
    })(exports.DialogTypeRegistry || (exports.DialogTypeRegistry = {}));

    function jQueryPatch($) {
        function applyJQueryUIFixes() {
            if (typeof $ == "undefined" || !$.ui || !$.ui.dialog || !$.ui.dialog.prototype)
                return false;
            $.ui.dialog.prototype._allowInteraction = function (event) {
                if ($(event.target).closest(".ui-dialog").length) {
                    return true;
                }
                return !!$(event.target).closest(".ui-datepicker, .select2-drop, .cke, .cke_dialog, .modal, #support-modal").length;
            };
            (function (orig) {
                $.ui.dialog.prototype._focusTabbable = function () {
                    if (isMobileView) {
                        this.uiDialog && this.uiDialog.focus();
                        return;
                    }
                    orig.call(this);
                };
            })($.ui.dialog.prototype._focusTabbable);
            (function (orig) {
                $.ui.dialog.prototype._createTitlebar = function () {
                    orig.call(this);
                    this.uiDialogTitlebar.find('.ui-dialog-titlebar-close').html('<i class="fa fa-times" />');
                };
            })($.ui.dialog.prototype._createTitlebar);
        }
        !applyJQueryUIFixes() && typeof $ !== "undefined" && $.fn && $(applyJQueryUIFixes);
        if (typeof $ !== "undefined" && $.fn) {
            // for backward compatibility
            if (!$.toJSON)
                $.toJSON = JSON.stringify;
            if (!$.parseJSON)
                $.parseJSON = JSON.parse;
            $.cleanData = (function (orig) {
                return function (elems) {
                    var events, elem, i;
                    var cloned = elems;
                    for (i = 0; (elem = cloned[i]) != null; i++) {
                        try {
                            events = $._data(elem, "events");
                            if (events && events.remove) {
                                // html collection might change during remove event, so clone it!
                                if (cloned === elems)
                                    cloned = Array.prototype.slice.call(elems);
                                $(elem).triggerHandler("remove");
                                delete events.remove;
                            }
                        }
                        catch (e) { }
                    }
                    orig(elems);
                };
            })($.cleanData);
        }
    }

    function reactPatch() {
        var _a, _b;
        // @ts-ignore check for global
        var globalObj = typeof (global) !== "undefined" ? global : (typeof (window) !== "undefined" ? window : (typeof (self) !== "undefined" ? self : null));
        // @ts-ignore
        if (typeof React === "undefined" && typeof globalObj !== "undefined") {
            if (globalObj['preact'] != null) {
                globalObj['React'] = globalObj['ReactDOM'] = globalObj['preact'];
                // @ts-ignore
                React.Fragment = (_a = React.Fragment) !== null && _a !== void 0 ? _a : "x-fragment";
            }
            else if (globalObj['Nerv'] != null) {
                globalObj['React'] = globalObj['ReactDOM'] = globalObj['Nerv'];
                // @ts-ignore
                React.Fragment = (_b = React.Fragment) !== null && _b !== void 0 ? _b : "x-fragment";
            }
            else {
                globalObj['React'] = {
                    Component: function () { },
                    Fragment: "x-fragment",
                    createElement: function () { return { _reactNotLoaded: true }; }
                };
                globalObj['ReactDOM'] = {
                    render: function () { throw Error("To use React, it should be included before Serenity.CoreLib.js"); }
                };
            }
        }
    }
    reactPatch();
    var Widget = /** @class */ (function () {
        function Widget(element, options) {
            var _this = this;
            this.element = element;
            this.options = options || {};
            this.widgetName = Widget_1.getWidgetName(getInstanceType(this));
            this.uniqueName = this.widgetName + (Widget_1.nextWidgetNumber++).toString();
            if (element.data(this.widgetName)) {
                throw new Exception(format("The element already has widget '{0}'!", this.widgetName));
            }
            element.on('remove.' + this.widgetName, function (e) {
                if (e.bubbles || e.cancelable) {
                    return;
                }
                _this.destroy();
            }).data(this.widgetName, this);
            this.addCssClass();
            this.idPrefix = this.uniqueName + '_';
            this.renderContents();
        }
        Widget_1 = Widget;
        Widget.prototype.destroy = function () {
            if (this.element) {
                this.element.removeClass(this.getCssClass());
                this.element.off('.' + this.widgetName).off('.' + this.uniqueName).removeData(this.widgetName);
                this.element = null;
            }
        };
        Widget.prototype.addCssClass = function () {
            this.element.addClass(this.getCssClass());
        };
        Widget.prototype.getCssClass = function () {
            var type = getInstanceType(this);
            var classList = [];
            var fullClass = replaceAll(getTypeFullName(type), '.', '-');
            classList.push(fullClass);
            for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                var k = _a[_i];
                if (startsWith(fullClass, k + '-')) {
                    classList.push(fullClass.substr(k.length + 1));
                    break;
                }
            }
            classList.push(getTypeShortName(type));
            return classList
                .filter(function (v, i, a) { return a.indexOf(v) === i; })
                .map(function (s) { return 's-' + s; })
                .join(" ");
        };
        Widget.getWidgetName = function (type) {
            return replaceAll(getTypeFullName(type), '.', '_');
        };
        Widget.elementFor = function (editorType) {
            var elementAttr = getAttributes(editorType, ElementAttribute, true);
            var elementHtml = ((elementAttr.length > 0) ? elementAttr[0].value : '<input/>');
            return $$1(elementHtml);
        };
        Widget.prototype.addValidationRule = function (eventClass, rule) {
            return addValidationRule(this.element, eventClass, rule);
        };
        Widget.prototype.getGridField = function () {
            return this.element.closest('.field');
        };
        Widget.prototype.change = function (handler) {
            this.element.on('change.' + this.uniqueName, handler);
        };
        Widget.prototype.changeSelect2 = function (handler) {
            this.element.on('change.' + this.uniqueName, function (e, valueSet) {
                if (valueSet !== true)
                    handler(e);
            });
        };
        Widget.create = function (params) {
            var widget;
            if (isAssignableFrom(IDialog, params.type)) {
                widget = new params.type(params.options);
                if (params.container)
                    widget.element.appendTo(params.container);
                params.element && params.element(widget.element);
            }
            else {
                var e = Widget_1.elementFor(params.type);
                if (params.container)
                    e.appendTo(params.container);
                params.element && params.element(e);
                widget = new params.type(e, params.options);
            }
            widget.init(null);
            params.init && params.init(widget);
            return widget;
        };
        Widget.prototype.initialize = function () {
        };
        Widget.prototype.init = function (action) {
            action && action(this);
            return this;
        };
        Widget.prototype.renderContents = function () {
        };
        var Widget_1;
        Widget.nextWidgetNumber = 0;
        Widget.__isWidgetType = true;
        Widget = Widget_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.Widget')
        ], Widget);
        return Widget;
    }());
    if (typeof $$1 !== "undefined" && $$1.fn) {
        $$1.fn.tryGetWidget = function (type) {
            var element = this;
            var w;
            if (isAssignableFrom(Widget, type)) {
                var widgetName = Widget.getWidgetName(type);
                w = element.data(widgetName);
                if (w != null && !isAssignableFrom(type, getInstanceType(w))) {
                    w = null;
                }
                if (w != null) {
                    return w;
                }
            }
            var data = element.data();
            if (data == null) {
                return null;
            }
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var key = _a[_i];
                w = data[key];
                if (w != null && isAssignableFrom(type, getInstanceType(w))) {
                    return w;
                }
            }
            return null;
        };
        $$1.fn.getWidget = function (type) {
            if (this == null) {
                throw new ArgumentNullException('element');
            }
            if (this.length === 0) {
                throw new Exception(format("Searching for widget of type '{0}' on a non-existent element! ({1})", getTypeFullName(type), this.selector));
            }
            var w = this.tryGetWidget(type);
            if (w == null) {
                var message = format("Element has no widget of type '{0}'! If you have recently changed " +
                    "editor type of a property in a form class, or changed data type in row (which also changes " +
                    "editor type) your script side Form definition might be out of date. Make sure your project " +
                    "builds successfully and transform T4 templates", getTypeFullName(type));
                notifyError(message, '', null);
                throw new Exception(message);
            }
            return w;
        };
    }
    if (typeof $$1 === "function") {
        jQueryPatch($$1);
    }

    exports.EditorTypeRegistry = void 0;
    (function (EditorTypeRegistry) {
        var registry = commonTypeRegistry(function (type) { return !!getAttributes(type, EditorAttribute).length || isAssignableFrom(Widget, type); }, null, "Editor");
        function get(key) {
            if (isEmptyOrNull(key))
                throw new ArgumentNullException('key');
            var type = registry.tryGet(key);
            if (type)
                return type;
            var message = "\"".concat(htmlEncode(key), "\" editor class not found! \nMake sure there is such a editor type under the project root namespace,\nand its namespace parts start with capital letters like MyProject.MyModule.MyEditor.\n\nIf using ES modules, make sure the editor type has a decorator like \n@Decorators.registerEditor('MyProject.MyModule.MyFormatter') with the full name \nand \"side-effect-import\" this editor class from the current \n\"page.ts/grid.ts/dialog.ts file (import \"./path/to/MyEditor.ts\").\n\nAfter applying fixes, build and run \"node ./tsbuild.js\" (or \"tsc\" if using namespaces) \nfrom the project folder.");
            notifyError(message.replace(/\r?\n\r?\n/g, '<br/><br/>'), '', { escapeHtml: false, timeOut: 5000 });
            throw new Exception(message);
        }
        EditorTypeRegistry.get = get;
        function reset() {
            registry.reset();
        }
        EditorTypeRegistry.reset = reset;
        function tryGet(key) {
            return registry.tryGet(key);
        }
        EditorTypeRegistry.tryGet = tryGet;
    })(exports.EditorTypeRegistry || (exports.EditorTypeRegistry = {}));

    exports.EnumTypeRegistry = void 0;
    (function (EnumTypeRegistry) {
        var registry = commonTypeRegistry(isEnum, function (type) { var _a; return (_a = getAttributes(type, EnumKeyAttribute)[0]) === null || _a === void 0 ? void 0 : _a.value; }, null);
        function get(key) {
            var type = registry.tryGet(key);
            if (type)
                return type;
            var message = "Can't find \"".concat(htmlEncode(key), "\" enum type! \nIf you have recently defined this enum type in server side code, make sure \nyour project builds successfully and run \"dotnet sergen t\". \n\nAlso verify there is such an enum type under the project root namespace, \nand its namespace parts start with capital letters like MyProject.MyModule.MyEnum.\n\nIf using ES modules, make sure the enum type is registered with \nQ.registerEnum('MyProject.MyModule.MyDialog') with the full name of \nyour enum type and \"side-effect-import\" this enum from the current \n\"page.ts/grid.ts/dialog.ts file (import \"./path/to/MyEnum.ts\").\n\nAfter applying fixes, build and run \"node ./tsbuild.js\" (or \"tsc\" if using namespaces) \nfrom the project folder.");
            notifyError(message.replace(/\r?\n\r?\n/g, '<br/><br/>'), '', { escapeHtml: false, timeOut: 5000 });
            throw new Exception(message);
        }
        EnumTypeRegistry.get = get;
        function reset() {
            registry.reset();
        }
        EnumTypeRegistry.reset = reset;
        function tryGet(key) {
            return registry.tryGet(key);
        }
        EnumTypeRegistry.tryGet = tryGet;
    })(exports.EnumTypeRegistry || (exports.EnumTypeRegistry = {}));

    exports.LazyLoadHelper = void 0;
    (function (LazyLoadHelper) {
        LazyLoadHelper.executeOnceWhenShown = executeOnceWhenVisible;
        LazyLoadHelper.executeEverytimeWhenShown = executeEverytimeWhenVisible;
    })(exports.LazyLoadHelper || (exports.LazyLoadHelper = {}));

    var PrefixedContext = /** @class */ (function () {
        function PrefixedContext(idPrefix) {
            this.idPrefix = idPrefix;
        }
        PrefixedContext.prototype.byId = function (id) {
            return $('#' + this.idPrefix + id);
        };
        PrefixedContext.prototype.w = function (id, type) {
            return $('#' + this.idPrefix + id).getWidget(type);
        };
        return PrefixedContext;
    }());

    var PopupMenuButton = /** @class */ (function (_super) {
        tslib.__extends(PopupMenuButton, _super);
        function PopupMenuButton(div, opt) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, div, opt) || this;
            div.addClass('s-PopupMenuButton');
            div.click(function (e) {
                var _a, _b, _c, _d;
                e.preventDefault();
                e.stopPropagation();
                if (_this.options.onPopup != null) {
                    _this.options.onPopup();
                }
                var menu = _this.options.menu;
                (_b = (_a = menu.show()).position) === null || _b === void 0 ? void 0 : _b.call(_a, {
                    my: (_c = _this.options.positionMy) !== null && _c !== void 0 ? _c : 'left top',
                    at: (_d = _this.options.positionAt) !== null && _d !== void 0 ? _d : 'left bottom',
                    of: _this.element
                });
                var uq = _this.uniqueName;
                $(document).one('click.' + uq, function (x) {
                    menu.hide();
                });
            });
            (_b = (_a = _this.options.menu.hide().appendTo(document.body)
                .addClass('s-PopupMenu')).menu) === null || _b === void 0 ? void 0 : _b.call(_a);
            return _this;
        }
        PopupMenuButton.prototype.destroy = function () {
            if (this.options.menu != null) {
                this.options.menu.remove();
                this.options.menu = null;
            }
            _super.prototype.destroy.call(this);
        };
        PopupMenuButton = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.PopupMenuButton')
        ], PopupMenuButton);
        return PopupMenuButton;
    }(Widget));
    var PopupToolButton = /** @class */ (function (_super) {
        tslib.__extends(PopupToolButton, _super);
        function PopupToolButton(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-PopupToolButton');
            $('<b/>').appendTo(div.children('.button-outer').children('span'));
            return _this;
        }
        PopupToolButton = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.PopupToolButton')
        ], PopupToolButton);
        return PopupToolButton;
    }(PopupMenuButton));
    var Toolbar = /** @class */ (function (_super) {
        tslib.__extends(Toolbar, _super);
        function Toolbar(div, options) {
            var _this = _super.call(this, div, options) || this;
            _this.element.addClass('s-Toolbar clearfix')
                .html('<div class="tool-buttons"><div class="buttons-outer">' +
                '<div class="buttons-inner"></div></div></div>');
            _this.createButtons();
            return _this;
        }
        Toolbar.prototype.destroy = function () {
            this.element.find('div.tool-button').unbind('click');
            if (this.mouseTrap) {
                if (!!this.mouseTrap.destroy) {
                    this.mouseTrap.destroy();
                }
                else {
                    this.mouseTrap.reset();
                }
                this.mouseTrap = null;
            }
            _super.prototype.destroy.call(this);
        };
        Toolbar.prototype.createButtons = function () {
            var container = $('div.buttons-inner', this.element).last();
            var buttons = this.options.buttons;
            var currentCount = 0;
            for (var i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                if (button.separator && currentCount > 0) {
                    container = $('<div class="buttons-inner"></div>').appendTo(container.parent());
                    currentCount = 0;
                }
                this.createButton(container, button);
                currentCount++;
            }
        };
        Toolbar.prototype.createButton = function (container, b) {
            var _a;
            var cssClass = (_a = b.cssClass) !== null && _a !== void 0 ? _a : '';
            var btn = $('<div class="tool-button"><div class="button-outer">' +
                '<span class="button-inner"></span></div></div>')
                .appendTo(container);
            if (b.action != null)
                btn.attr('data-action', b.action);
            if (b.separator === 'right' || b.separator === 'both') {
                $('<div class="separator"></div>').appendTo(container);
            }
            if (cssClass.length > 0) {
                btn.addClass(cssClass);
            }
            if (!isEmptyOrNull(b.hint)) {
                btn.attr('title', b.hint);
            }
            btn.click(function (e) {
                if (btn.hasClass('disabled')) {
                    return;
                }
                b.onClick(e);
            });
            var text = b.title;
            if (b.htmlEncode !== false) {
                text = htmlEncode(b.title);
            }
            if (!isEmptyOrNull(b.icon)) {
                btn.addClass('icon-tool-button');
                var klass = b.icon;
                if (startsWith(klass, 'fa-')) {
                    klass = 'fa ' + klass;
                }
                else if (startsWith(klass, 'glyphicon-')) {
                    klass = 'glyphicon ' + klass;
                }
                text = "<i class='" + htmlEncode(klass) + "'></i> " + text;
            }
            if (text == null || text.length === 0) {
                btn.addClass('no-text');
            }
            else {
                btn.find('span').html(text);
            }
            if (b.visible === false)
                btn.hide();
            if (b.disabled != null && typeof b.disabled !== "function")
                btn.toggleClass('disabled', !!b.disabled);
            if (typeof b.visible === "function" || typeof b.disabled == "function") {
                btn.on('updateInterface', function () {
                    if (typeof b.visible === "function")
                        btn.toggle(!!b.visible());
                    if (typeof b.disabled === "function")
                        btn.toggleClass("disabled", !!b.disabled());
                });
            }
            if (!!(!isEmptyOrNull(b.hotkey) && window['Mousetrap'] != null)) {
                this.mouseTrap = this.mouseTrap || window['Mousetrap'](b.hotkeyContext || this.options.hotkeyContext || window.document.documentElement);
                this.mouseTrap.bind(b.hotkey, function (e1, action) {
                    if (btn.is(':visible')) {
                        btn.triggerHandler('click');
                    }
                    return b.hotkeyAllowDefault;
                });
            }
        };
        Toolbar.prototype.findButton = function (className) {
            if (className != null && startsWith(className, '.')) {
                className = className.substr(1);
            }
            return $('div.tool-button.' + className, this.element);
        };
        Toolbar.prototype.updateInterface = function () {
            this.element.find('.tool-button').each(function (i, el) {
                $(el).triggerHandler('updateInterface');
            });
        };
        Toolbar = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.Toolbar')
        ], Toolbar);
        return Toolbar;
    }(Widget));

    var TemplatedWidget = /** @class */ (function (_super) {
        tslib.__extends(TemplatedWidget, _super);
        function TemplatedWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TemplatedWidget_1 = TemplatedWidget;
        TemplatedWidget.prototype.byId = function (id) {
            return $('#' + this.idPrefix + id, this.element);
        };
        TemplatedWidget.prototype.byID = function (id, type) {
            return this.byId(id).getWidget(type);
        };
        TemplatedWidget.noGeneric = function (s) {
            var dollar = s.indexOf('$');
            if (dollar >= 0) {
                return s.substr(0, dollar);
            }
            return s;
        };
        TemplatedWidget.prototype.getDefaultTemplateName = function () {
            return TemplatedWidget_1.noGeneric(getTypeShortName(getInstanceType(this)));
        };
        TemplatedWidget.prototype.getTemplateName = function () {
            var type = getInstanceType(this);
            var fullName = getTypeFullName(type);
            var templateNames = TemplatedWidget_1.templateNames;
            var cachedName = TemplatedWidget_1.templateNames[fullName];
            if (cachedName != null) {
                return cachedName;
            }
            while (type && type !== Widget) {
                var name = TemplatedWidget_1.noGeneric(getTypeFullName(type));
                for (var _i = 0, _a = Config.rootNamespaces; _i < _a.length; _i++) {
                    var k = _a[_i];
                    if (startsWith(name, k + '.')) {
                        name = name.substr(k.length + 1);
                        break;
                    }
                }
                if (canLoadScriptData('Template.' + name)) {
                    templateNames[fullName] = name;
                    return name;
                }
                name = replaceAll(name, '.', '_');
                if (canLoadScriptData('Template.' + name) ||
                    $('script#Template_' + name).length > 0) {
                    templateNames[fullName] = name;
                    return name;
                }
                name = TemplatedWidget_1.noGeneric(getTypeShortName(type));
                if (canLoadScriptData('Template.' + name) ||
                    $('script#Template_' + name).length > 0) {
                    TemplatedWidget_1.templateNames[fullName] = name;
                    return name;
                }
                type = getBaseType(type);
            }
            templateNames[fullName] = cachedName = this.getDefaultTemplateName();
            return cachedName;
        };
        TemplatedWidget.prototype.getFallbackTemplate = function () {
            return null;
        };
        TemplatedWidget.prototype.getTemplate = function () {
            var templateName = this.getTemplateName();
            var script = $('script#Template_' + templateName);
            if (script.length > 0) {
                return script.html();
            }
            var template;
            if (!canLoadScriptData('Template.' + templateName) &&
                this.getDefaultTemplateName() == templateName) {
                template = this.getFallbackTemplate();
                if (template != null)
                    return template;
            }
            template = getTemplate(templateName);
            if (template == null) {
                throw new Error(format("Can't locate template for widget '{0}' with name '{1}'!", getTypeFullName(getInstanceType(this)), templateName));
            }
            return template;
        };
        TemplatedWidget.prototype.renderContents = function () {
            var widgetMarkup = this.getTemplate().replace(new RegExp('~_', 'g'), this.idPrefix);
            // for compatibility with older templates based on JsRender
            var end = 0;
            while (true) {
                var idx = widgetMarkup.indexOf('{{text:"', end);
                if (idx < 0)
                    break;
                var end = widgetMarkup.indexOf('"}}', idx);
                if (end < 0)
                    break;
                var key = widgetMarkup.substr(idx + 8, end - idx - 8);
                var txt = localText(key);
                widgetMarkup = widgetMarkup.substr(0, idx) + txt + widgetMarkup.substr(end + 3);
                end = idx + txt.length;
            }
            this.element.html(widgetMarkup);
        };
        TemplatedWidget.prototype.useIdPrefix = function () {
            return useIdPrefix(this.idPrefix);
        };
        var TemplatedWidget_1;
        TemplatedWidget.templateNames = {};
        TemplatedWidget = TemplatedWidget_1 = tslib.__decorate([
            exports.Decorators.registerClass("Serenity.TemplatedWidget")
        ], TemplatedWidget);
        return TemplatedWidget;
    }(Widget));
    function useIdPrefix(prefix) {
        return new Proxy({ _: prefix !== null && prefix !== void 0 ? prefix : '' }, idPrefixHandler);
    }
    var idPrefixHandler = {
        get: function (target, p) {
            if (p.startsWith('#'))
                return '#' + target._ + p.substring(1);
            return target._ + p;
        }
    };

    if (typeof $ !== "undefined" && $.fn) {
        $.fn.flexHeightOnly = function (flexY) {
            if (flexY === void 0) { flexY = 1; }
            return this.flexWidthHeight(0, flexY);
        };
        $.fn.flexWidthOnly = function (flexX) {
            if (flexX === void 0) { flexX = 1; }
            return this.flexWidthHeight(flexX, 0);
        };
        $.fn.flexWidthHeight = function (flexX, flexY) {
            if (flexX === void 0) { flexX = 1; }
            if (flexY === void 0) { flexY = 1; }
            return this.addClass('flexify').data('flex-x', flexX).data('flex-y', flexY);
        };
        $.fn.flexX = function (flexX) {
            return this.data('flex-x', flexX);
        };
        $.fn.flexY = function (flexY) {
            return this.data('flex-y', flexY);
        };
    }
    var Flexify = /** @class */ (function (_super) {
        tslib.__extends(Flexify, _super);
        function Flexify(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.xDifference = 0;
            _this.yDifference = 0;
            exports.LazyLoadHelper.executeOnceWhenShown(container, function () {
                _this.storeInitialSize();
            });
            return _this;
        }
        Flexify.prototype.storeInitialSize = function () {
            var _this = this;
            if (!!this.element.data('flexify-init')) {
                return;
            }
            var designWidth = this.options.designWidth;
            if (designWidth == null)
                designWidth = this.element.width();
            this.element.data('flexify-width', designWidth);
            var designHeight = this.options.designHeight;
            if (designHeight == null)
                designHeight = this.element.height();
            this.element.data('flexify-height', designHeight);
            this.element.data('flexify-init', true);
            this.element.on('resize.' + this.uniqueName, function () {
                return _this.resizeElements();
            });
            this.element.on('resizestop.' + this.uniqueName, function () {
                return _this.resizeElements();
            });
            var tabs = this.element.find('.ui-tabs');
            if (tabs.length > 0) {
                tabs.on('tabsactivate.' + this.uniqueName, function () {
                    return _this.resizeElements();
                });
            }
            if (this.options.designWidth != null || this.options.designHeight != null)
                this.resizeElements();
        };
        Flexify.prototype.getXFactor = function (element) {
            var xFactor = null;
            if (this.options.getXFactor != null)
                xFactor = this.options.getXFactor(element);
            if (xFactor == null)
                xFactor = element.data('flex-x');
            return xFactor !== null && xFactor !== void 0 ? xFactor : 1;
        };
        Flexify.prototype.getYFactor = function (element) {
            var yFactor = null;
            if (this.options.getYFactor != null)
                yFactor = this.options.getYFactor(element);
            if (yFactor == null)
                yFactor = element.data('flex-y');
            return yFactor !== null && yFactor !== void 0 ? yFactor : 0;
        };
        Flexify.prototype.resizeElements = function () {
            var _this = this;
            var width = this.element.width();
            var initialWidth = this.element.data('flexify-width');
            if (initialWidth == null) {
                this.element.data('flexify-width', width);
                initialWidth = width;
            }
            var height = this.element.height();
            var initialHeight = this.element.data('flexify-height');
            if (initialHeight == null) {
                this.element.data('flexify-height', height);
                initialHeight = height;
            }
            this.xDifference = width - initialWidth;
            this.yDifference = height - initialHeight;
            var containers = this.element;
            var tabPanels = this.element.find('.ui-tabs-panel');
            if (tabPanels.length > 0) {
                containers = tabPanels.filter(':visible');
            }
            containers.find('.flexify')
                .add(tabPanels.filter('.flexify:visible'))
                .each(function (i, e) {
                _this.resizeElement($(e));
            });
        };
        Flexify.prototype.resizeElement = function (element) {
            var xFactor = this.getXFactor(element);
            if (xFactor !== 0) {
                var initialWidth = element.data('flexify-width');
                if (initialWidth == null) {
                    var width = element.width();
                    element.data('flexify-width', width);
                    initialWidth = width;
                }
                element.width(initialWidth + xFactor * this.xDifference | 0);
            }
            var yFactor = this.getYFactor(element);
            if (yFactor !== 0) {
                var initialHeight = element.data('flexify-height');
                if (initialHeight == null) {
                    var height = element.height();
                    element.data('flexify-height', height);
                    initialHeight = height;
                }
                element.height(initialHeight + yFactor * this.yDifference | 0);
            }
            if (element.hasClass('require-layout')) {
                element.triggerHandler('layout');
            }
        };
        return Flexify;
    }(Widget));

    exports.DialogExtensions = void 0;
    (function (DialogExtensions) {
        function dialogResizable(dialog, w, h, mw, mh) {
            var _a;
            var dlg = (_a = dialog === null || dialog === void 0 ? void 0 : dialog.dialog) === null || _a === void 0 ? void 0 : _a.call(dialog);
            dlg.dialog('option', 'resizable', true);
            if (mw != null) {
                dlg.dialog('option', 'minWidth', mw);
            }
            if (w != null) {
                dlg.dialog('option', 'width', w);
            }
            if (mh != null) {
                dlg.dialog('option', 'minHeight', mh);
            }
            if (h != null) {
                dlg.dialog('option', 'height', h);
            }
            return dialog;
        }
        DialogExtensions.dialogResizable = dialogResizable;
        function dialogMaximizable(dialog) {
            dialog.dialogExtend({
                closable: true,
                maximizable: true,
                dblclick: 'maximize',
                icons: { maximize: 'ui-icon-maximize-window' }
            });
            return dialog;
        }
        DialogExtensions.dialogMaximizable = dialogMaximizable;
        function dialogFlexify(dialog) {
            new Flexify(dialog.closest('.ui-dialog'), {});
            return dialog;
        }
        DialogExtensions.dialogFlexify = dialogFlexify;
    })(exports.DialogExtensions || (exports.DialogExtensions = {}));

    var TemplatedDialog = /** @class */ (function (_super) {
        tslib.__extends(TemplatedDialog, _super);
        function TemplatedDialog(options) {
            var _this = _super.call(this, newBodyDiv().addClass('s-TemplatedDialog hidden'), options) || this;
            _this.element.attr("id", _this.uniqueName);
            _this.initValidator();
            _this.initTabs();
            _this.initToolbar();
            return _this;
        }
        TemplatedDialog_1 = TemplatedDialog;
        Object.defineProperty(TemplatedDialog.prototype, "isMarkedAsPanel", {
            get: function () {
                var panelAttr = getAttributes(getInstanceType(this), PanelAttribute, true);
                return panelAttr.length > 0 && panelAttr[panelAttr.length - 1].value !== false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TemplatedDialog.prototype, "isResponsive", {
            get: function () {
                return Config.responsiveDialogs ||
                    getAttributes(getInstanceType(this), ResponsiveAttribute, true).length > 0;
            },
            enumerable: false,
            configurable: true
        });
        TemplatedDialog.getCssSize = function (element, name) {
            var cssSize = element.css(name);
            if (cssSize == null) {
                return null;
            }
            if (!endsWith(cssSize, 'px')) {
                return null;
            }
            cssSize = cssSize.substr(0, cssSize.length - 2);
            var i = parseInteger(cssSize);
            if (i == null || isNaN(i) || i == 0)
                return null;
            return i;
        };
        TemplatedDialog.applyCssSizes = function (opt, dialogClass) {
            var size;
            var dialog = $('<div/>').hide().addClass(dialogClass).appendTo(document.body);
            try {
                var sizeHelper = $('<div/>').addClass('size').appendTo(dialog);
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'minWidth');
                if (size != null)
                    opt.minWidth = size;
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'width');
                if (size != null)
                    opt.width = size;
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'height');
                if (size != null)
                    opt.height = size;
                size = TemplatedDialog_1.getCssSize(sizeHelper, 'minHeight');
                if (size != null)
                    opt.minHeight = size;
            }
            finally {
                dialog.remove();
            }
        };
        TemplatedDialog.prototype.destroy = function () {
            var _a, _b, _c, _d, _e, _f, _g;
            (_b = (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'destroy');
            this.tabs = null;
            (_e = (_d = (_c = this.toolbar) === null || _c === void 0 ? void 0 : _c.toolbar) === null || _d === void 0 ? void 0 : _d.destroy) === null || _e === void 0 ? void 0 : _e.call(_d);
            this.toolbar = null;
            this.validator && this.byId('Form').remove();
            this.validator = null;
            if (this.element != null &&
                this.element.hasClass('ui-dialog-content')) {
                (_g = (_f = this.element) === null || _f === void 0 ? void 0 : _f.dialog) === null || _g === void 0 ? void 0 : _g.call(_f, 'destroy');
                this.element.removeClass('ui-dialog-content');
            }
            else if (this.element != null &&
                this.element.hasClass('modal-body')) {
                var modal = this.element.closest('.modal').data('bs.modal', null);
                this.element && this.element.removeClass('modal-body');
                window.setTimeout(function () { return modal.remove(); }, 0);
            }
            $(window).unbind('.' + this.uniqueName);
            _super.prototype.destroy.call(this);
        };
        TemplatedDialog.prototype.initDialog = function () {
            var _this = this;
            var _a, _b;
            if (this.element.hasClass('ui-dialog-content'))
                return;
            this.element.removeClass('hidden');
            (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.dialog) === null || _b === void 0 ? void 0 : _b.call(_a, this.getDialogOptions());
            this.element.closest('.ui-dialog').on('resize', function (e) { return _this.arrange(); });
            var type = getInstanceType(this);
            if (this.isResponsive) {
                exports.DialogExtensions.dialogResizable(this.element);
                $(window).bind('resize.' + this.uniqueName, function (e) {
                    if (_this.element && _this.element.is(':visible')) {
                        _this.handleResponsive();
                    }
                });
                this.element.closest('.ui-dialog').addClass('flex-layout');
            }
            else if (exports.DialogExtensions["dialogFlexify"] &&
                getAttributes(type, FlexifyAttribute, true).length > 0) {
                exports.DialogExtensions["dialogFlexify"](this.element);
                exports.DialogExtensions.dialogResizable(this.element);
            }
            if (getAttributes(type, MaximizableAttribute, true).length > 0) {
                exports.DialogExtensions.dialogMaximizable(this.element);
            }
            var self = this;
            this.element.bind('dialogopen.' + this.uniqueName, function () {
                $(document.body).addClass('modal-dialog-open');
                if (_this.isResponsive) {
                    _this.handleResponsive();
                }
                self.onDialogOpen();
            });
            this.element.bind('dialogclose.' + this.uniqueName, function () {
                $(document.body).toggleClass('modal-dialog-open', $('.ui-dialog:visible').length > 0);
                self.onDialogClose();
            });
        };
        TemplatedDialog.prototype.getModalOptions = function () {
            return {
                backdrop: false,
                keyboard: false,
                size: 'lg',
                modalClass: this.getCssClass()
            };
        };
        TemplatedDialog.prototype.initModal = function () {
            var _this = this;
            var _a, _b;
            if (this.element.hasClass('modal-body'))
                return;
            var title = (_b = (_a = this.element.data('dialogtitle')) !== null && _a !== void 0 ? _a : this.getDialogTitle()) !== null && _b !== void 0 ? _b : '';
            var opt = this.getModalOptions();
            opt["show"] = false;
            var modalClass = "s-Modal";
            if (opt.modalClass)
                modalClass += ' ' + opt.modalClass;
            var div = bsModalMarkup(title, '', modalClass);
            var modal = $(div).appendTo(document.body).addClass('flex-layout');
            modal.one('shown.bs.modal.' + this.uniqueName, function () {
                _this.element.triggerHandler('shown.bs.modal');
                _this.onDialogOpen();
            });
            modal.one('hidden.bs.modal.' + this.uniqueName, function () {
                $(document.body).toggleClass('modal-open', $('.modal.show').length + $('.modal.in').length > 0);
                _this.onDialogClose();
            });
            if (opt.size)
                modal.find('.modal-dialog').addClass('modal-' + opt.size);
            var footer = modal.find('.modal-footer');
            var buttons = this.getDialogButtons();
            if (buttons != null) {
                for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                    var x = buttons_1[_i];
                    $(dialogButtonToBS(x)).appendTo(footer).click(x.click);
                }
            }
            else
                footer.hide();
            modal.modal(opt);
            modal.find('.modal-body').replaceWith(this.element.removeClass('hidden').addClass('modal-body'));
            $(window).on('resize.' + this.uniqueName, this.arrange.bind(this));
        };
        TemplatedDialog.prototype.initToolbar = function () {
            var toolbarDiv = this.byId('Toolbar');
            if (toolbarDiv.length === 0) {
                return;
            }
            var hotkeyContext = this.element.closest('.ui-dialog');
            if (hotkeyContext.length === 0) {
                hotkeyContext = this.element.closest('.modal');
                if (hotkeyContext.length == 0)
                    hotkeyContext = this.element;
            }
            var opt = { buttons: this.getToolbarButtons(), hotkeyContext: hotkeyContext[0] };
            this.toolbar = new Toolbar(toolbarDiv, opt);
        };
        TemplatedDialog.prototype.getToolbarButtons = function () {
            return [];
        };
        TemplatedDialog.prototype.getValidatorOptions = function () {
            return {};
        };
        TemplatedDialog.prototype.initValidator = function () {
            var form = this.byId('Form');
            if (form.length > 0) {
                var valOptions = this.getValidatorOptions();
                this.validator = (validator || form.validate) && form.validate(validateOptions(valOptions));
            }
        };
        TemplatedDialog.prototype.resetValidation = function () {
            this.validator && this.validator.resetAll();
        };
        TemplatedDialog.prototype.validateForm = function () {
            return this.validator == null || !!this.validator.form();
        };
        TemplatedDialog.prototype.dialogOpen = function (asPanel) {
            var _this = this;
            var _a, _b;
            asPanel = asPanel !== null && asPanel !== void 0 ? asPanel : this.isMarkedAsPanel;
            if (asPanel) {
                if (!this.element.hasClass('s-Panel')) {
                    // so that panel title is created if needed
                    this.element.on('panelopen.' + this.uniqueName, function () {
                        _this.onDialogOpen();
                    });
                    this.element.on('panelclose.' + this.uniqueName, function () {
                        _this.onDialogClose();
                    });
                }
                TemplatedDialog_1.openPanel(this.element, this.uniqueName);
                this.setupPanelTitle();
            }
            else if (this.useBSModal()) {
                this.initModal();
                this.element.closest('.modal').modal('show');
            }
            else {
                this.initDialog();
                (_b = (_a = this.element).dialog) === null || _b === void 0 ? void 0 : _b.call(_a, 'open');
            }
        };
        TemplatedDialog.prototype.useBSModal = function () {
            var _a;
            return !!((!$.ui || !((_a = $.ui) === null || _a === void 0 ? void 0 : _a.dialog)) || TemplatedDialog_1.bootstrapModal);
        };
        TemplatedDialog.openPanel = function (element, uniqueName) {
            return openPanel(element, uniqueName);
        };
        TemplatedDialog.closePanel = function (element, e) {
            return closePanel(element, e);
        };
        TemplatedDialog.prototype.onDialogOpen = function () {
            var _a, _b;
            if (!isMobileView())
                $(':input', this.element).not('button').eq(0).focus();
            this.arrange();
            this.tabs && ((_b = (_a = this.tabs).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'active', 0));
        };
        TemplatedDialog.prototype.arrange = function () {
            this.element.find('.require-layout').filter(':visible').each(function (i, e) {
                $(e).triggerHandler('layout');
            });
        };
        TemplatedDialog.prototype.onDialogClose = function () {
            var _this = this;
            $(document).trigger('click');
            // for tooltips etc.
            if ($.qtip) {
                $(document.body).children('.qtip').each(function (index, el) {
                    $(el).qtip('hide');
                });
            }
            window.setTimeout(function () {
                var element = _this.element;
                _this.destroy();
                element.remove();
                positionToastContainer(false, null);
            }, 0);
        };
        TemplatedDialog.prototype.addCssClass = function () {
            if (this.isMarkedAsPanel) {
                _super.prototype.addCssClass.call(this);
                if (this.isResponsive)
                    this.element.addClass("flex-layout");
            }
        };
        TemplatedDialog.prototype.getDialogButtons = function () {
            return undefined;
        };
        TemplatedDialog.prototype.getDialogOptions = function () {
            var _a, _b;
            var opt = {};
            var dialogClass = 's-Dialog ' + this.getCssClass();
            opt.dialogClass = dialogClass;
            var buttons = this.getDialogButtons();
            if (buttons != null)
                opt.buttons = buttons.map(dialogButtonToUI);
            opt.width = 920;
            TemplatedDialog_1.applyCssSizes(opt, dialogClass);
            opt.autoOpen = false;
            var type = getInstanceType(this);
            opt.resizable = getAttributes(type, ResizableAttribute, true).length > 0;
            opt.modal = true;
            opt.position = { my: 'center', at: 'center', of: $(window.window) };
            opt.title = (_b = (_a = this.element.data('dialogtitle')) !== null && _a !== void 0 ? _a : this.getDialogTitle()) !== null && _b !== void 0 ? _b : '';
            return opt;
        };
        TemplatedDialog.prototype.getDialogTitle = function () {
            return "";
        };
        TemplatedDialog.prototype.dialogClose = function () {
            var _a, _b, _c, _d;
            if (this.element.hasClass('ui-dialog-content'))
                (_d = (_b = (_a = this.element).dialog) === null || _b === void 0 ? void 0 : (_c = _b.call(_a)).dialog) === null || _d === void 0 ? void 0 : _d.call(_c, 'close');
            else if (this.element.hasClass('modal-body'))
                this.element.closest('.modal').modal('hide');
            else if (this.element.hasClass('s-Panel') && !this.element.hasClass('hidden')) {
                TemplatedDialog_1.closePanel(this.element);
            }
        };
        Object.defineProperty(TemplatedDialog.prototype, "dialogTitle", {
            get: function () {
                var _a, _b;
                if (this.element.hasClass('ui-dialog-content'))
                    return (_b = (_a = this.element).dialog) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'title');
                else if (this.element.hasClass('modal-body'))
                    return this.element.closest('.modal').find('.modal-header').children('h5').text();
                return this.element.data('dialogtitle');
            },
            set: function (value) {
                var _a, _b;
                var oldTitle = this.dialogTitle;
                this.element.data('dialogtitle', value);
                if (this.element.hasClass('ui-dialog-content'))
                    (_b = (_a = this.element).dialog) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'title', value);
                else if (this.element.hasClass('modal-body')) {
                    this.element.closest('.modal').find('.modal-header').children('h5').text(value !== null && value !== void 0 ? value : '');
                }
                else if (this.element.hasClass('s-Panel')) {
                    if (oldTitle != this.dialogTitle) {
                        this.setupPanelTitle();
                        this.arrange();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        TemplatedDialog.prototype.setupPanelTitle = function () {
            var _this = this;
            var _a;
            var value = (_a = this.dialogTitle) !== null && _a !== void 0 ? _a : this.getDialogTitle();
            var pt = this.element.children('.panel-titlebar');
            if (isEmptyOrNull(value)) {
                pt.remove();
            }
            else {
                if (!this.element.children('.panel-titlebar').length) {
                    pt = $("<div class='panel-titlebar'><div class='panel-titlebar-text'></div></div>")
                        .prependTo(this.element);
                }
                pt.children('.panel-titlebar-text').text(value);
                if (this.element.hasClass('s-Panel')) {
                    if (!pt.children('.panel-titlebar-close').length) {
                        $('<button class="panel-titlebar-close">&nbsp;</button>')
                            .prependTo(pt)
                            .click(function (e) {
                            TemplatedDialog_1.closePanel(_this.element, e);
                        });
                    }
                }
            }
        };
        TemplatedDialog.prototype.set_dialogTitle = function (value) {
            this.dialogTitle = value;
        };
        TemplatedDialog.prototype.initTabs = function () {
            var _this = this;
            var _a, _b;
            var tabsDiv = this.byId('Tabs');
            if (tabsDiv.length === 0) {
                return;
            }
            this.tabs = (_b = (_a = tabsDiv).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, {});
            this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
        };
        TemplatedDialog.prototype.handleResponsive = function () {
            var _a;
            var dlg = (_a = this.element) === null || _a === void 0 ? void 0 : _a.dialog();
            var uiDialog = this.element.closest('.ui-dialog');
            if (isMobileView()) {
                var data = this.element.data('responsiveData');
                if (!data) {
                    data = {};
                    data.draggable = dlg.dialog('option', 'draggable');
                    data.resizable = dlg.dialog('option', 'resizable');
                    data.position = dlg.css('position');
                    var pos = uiDialog.position();
                    data.left = pos.left;
                    data.top = pos.top;
                    data.width = uiDialog.width();
                    data.height = uiDialog.height();
                    data.contentHeight = this.element.height();
                    this.element.data('responsiveData', data);
                    dlg.dialog('option', 'draggable', false);
                    dlg.dialog('option', 'resizable', false);
                }
                uiDialog.addClass('mobile-layout');
                uiDialog.css({ left: '0px', top: '0px', width: $(window).width() + 'px', height: $(window).height() + 'px', position: 'fixed' });
                $(document.body).scrollTop(0);
                layoutFillHeight(this.element);
            }
            else {
                var d = this.element.data('responsiveData');
                if (d) {
                    dlg.dialog('option', 'draggable', d.draggable);
                    dlg.dialog('option', 'resizable', d.resizable);
                    this.element.closest('.ui-dialog').css({ left: '0px', top: '0px', width: d.width + 'px', height: d.height + 'px', position: d.position });
                    this.element.height(d.contentHeight);
                    uiDialog.removeClass('mobile-layout');
                    this.element.removeData('responsiveData');
                }
            }
        };
        var TemplatedDialog_1;
        TemplatedDialog = TemplatedDialog_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.TemplatedDialog', [IDialog])
        ], TemplatedDialog);
        return TemplatedDialog;
    }(TemplatedWidget));

    var TemplatedPanel = /** @class */ (function (_super) {
        tslib.__extends(TemplatedPanel, _super);
        function TemplatedPanel(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.initValidator();
            _this.initTabs();
            _this.initToolbar();
            return _this;
        }
        TemplatedPanel.prototype.destroy = function () {
            var _a, _b;
            if (this.tabs) {
                (_b = (_a = this.tabs).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'destroy');
                this.tabs = null;
            }
            if (this.toolbar) {
                this.toolbar.destroy();
                this.toolbar = null;
            }
            if (this.validator) {
                this.byId('Form').remove();
                this.validator = null;
            }
            _super.prototype.destroy.call(this);
        };
        TemplatedPanel.prototype.arrange = function () {
            this.element.find('.require-layout').filter(':visible').each(function (i, e) {
                $(e).triggerHandler('layout');
            });
        };
        TemplatedPanel.prototype.getToolbarButtons = function () {
            return [];
        };
        TemplatedPanel.prototype.getValidatorOptions = function () {
            return {};
        };
        TemplatedPanel.prototype.initTabs = function () {
            var _a, _b;
            var tabsDiv = this.byId('Tabs');
            if (tabsDiv.length === 0) {
                return;
            }
            this.tabs = (_b = (_a = tabsDiv).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, {});
        };
        TemplatedPanel.prototype.initToolbar = function () {
            var toolbarDiv = this.byId('Toolbar');
            if (toolbarDiv.length === 0) {
                return;
            }
            var opt = { buttons: this.getToolbarButtons() };
            this.toolbar = new Toolbar(toolbarDiv, opt);
        };
        TemplatedPanel.prototype.initValidator = function () {
            var form = this.byId('Form');
            if (form.length > 0) {
                var valOptions = this.getValidatorOptions();
                this.validator = form.validate(validateOptions(valOptions));
            }
        };
        TemplatedPanel.prototype.resetValidation = function () {
            if (this.validator) {
                this.validator.resetAll();
            }
        };
        TemplatedPanel.prototype.validateForm = function () {
            return this.validator == null || !!this.validator.form();
        };
        TemplatedPanel = tslib.__decorate([
            exports.Decorators.registerClass("Serenity.TemplatedPanel")
        ], TemplatedPanel);
        return TemplatedPanel;
    }(TemplatedWidget));

    exports.ValidationHelper = void 0;
    (function (ValidationHelper) {
        function asyncSubmit(form, validateBeforeSave, submitHandler) {
            var validator = form.validate();
            var valSettings = validator.settings;
            if (valSettings.abortHandler) {
                return false;
            }
            if (validateBeforeSave != null && validateBeforeSave() === false) {
                return false;
            }
            valSettings['abortHandler'] = validatorAbortHandler;
            valSettings['submitHandler'] = function () {
                if (submitHandler != null) {
                    submitHandler();
                }
                return false;
            };
            form.trigger('submit');
            return true;
        }
        ValidationHelper.asyncSubmit = asyncSubmit;
        function submit(form, validateBeforeSave, submitHandler) {
            var validator = form.validate();
            var valSettings = validator.settings;
            if (valSettings.abortHandler != null) {
                return false;
            }
            if (validateBeforeSave != null && validateBeforeSave() === false) {
                return false;
            }
            if (!validator.form()) {
                return false;
            }
            if (submitHandler != null) {
                submitHandler();
            }
            return true;
        }
        ValidationHelper.submit = submit;
        function getValidator(element) {
            var form = element.closest('form');
            if (form.length === 0) {
                return null;
            }
            return form.data('validator');
        }
        ValidationHelper.getValidator = getValidator;
    })(exports.ValidationHelper || (exports.ValidationHelper = {}));
    exports.VX = void 0;
    (function (VX) {
        function addValidationRule(element, eventClass, rule) {
            if (!element.length)
                return element;
            if (rule == null)
                throw new Exception('rule is null!');
            element.addClass('customValidate').bind('customValidate.' + eventClass, rule);
            return element;
        }
        VX.addValidationRule = addValidationRule;
        function removeValidationRule(element, eventClass) {
            element.unbind('customValidate.' + eventClass);
            return element;
        }
        VX.removeValidationRule = removeValidationRule;
        function validateElement(validator, widget) {
            return validator.element(widget.element[0]);
        }
        VX.validateElement = validateElement;
    })(exports.VX || (exports.VX = {}));

    var CascadedWidgetLink = /** @class */ (function () {
        function CascadedWidgetLink(parentType, widget, parentChange) {
            var _this = this;
            this.parentType = parentType;
            this.widget = widget;
            this.parentChange = parentChange;
            this.bind();
            this.widget.element.bind('remove.' + widget.uniqueName + 'cwh', function (e) {
                _this.unbind();
                _this.widget = null;
                _this.parentChange = null;
            });
        }
        CascadedWidgetLink.prototype.bind = function () {
            var _this = this;
            if (isEmptyOrNull(this._parentID)) {
                return null;
            }
            var parent = findElementWithRelativeId(this.widget.element, this._parentID)
                .tryGetWidget(this.parentType);
            if (parent != null) {
                parent.element.bind('change.' + this.widget.uniqueName, function () {
                    _this.parentChange(parent);
                });
                return parent;
            }
            else {
                notifyError("Can't find cascaded parent element with ID: " + this._parentID + '!', '', null);
                return null;
            }
        };
        CascadedWidgetLink.prototype.unbind = function () {
            if (isEmptyOrNull(this._parentID)) {
                return null;
            }
            var parent = findElementWithRelativeId(this.widget.element, this._parentID).tryGetWidget(this.parentType);
            if (parent != null) {
                parent.element.unbind('.' + this.widget.uniqueName);
            }
            return parent;
        };
        CascadedWidgetLink.prototype.get_parentID = function () {
            return this._parentID;
        };
        CascadedWidgetLink.prototype.set_parentID = function (value) {
            if (this._parentID !== value) {
                this.unbind();
                this._parentID = value;
                this.bind();
            }
        };
        CascadedWidgetLink = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.CascadedWidgetLink')
        ], CascadedWidgetLink);
        return CascadedWidgetLink;
    }());

    exports.TabsExtensions = void 0;
    (function (TabsExtensions) {
        function setDisabled(tabs, tabKey, isDisabled) {
            var _a, _b, _c, _d;
            if (!tabs)
                return;
            var ibk = indexByKey(tabs);
            if (!ibk)
                return;
            var index = ibk[tabKey];
            if (index == null) {
                return;
            }
            if (isDisabled && index === tabs.tabs('option', 'active')) {
                (_b = (_a = tabs).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'active', 0);
            }
            (_d = (_c = tabs).tabs) === null || _d === void 0 ? void 0 : _d.call(_c, isDisabled ? 'disable' : 'enable', index);
        }
        TabsExtensions.setDisabled = setDisabled;
        function toggle(tabs, tabKey, visible) {
            var _a, _b, _c, _d;
            if (!tabs)
                return;
            var ibk = indexByKey(tabs);
            if (!ibk)
                return;
            var index = ibk[tabKey];
            if (index == null) {
                return;
            }
            if (!visible && index === ((_b = (_a = tabs).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'active'))) {
                (_d = (_c = tabs).tabs) === null || _d === void 0 ? void 0 : _d.call(_c, 'option', 'active', 0);
            }
            tabs.children('ul').children('li').eq(index).toggle(visible);
        }
        TabsExtensions.toggle = toggle;
        function activeTabKey(tabs) {
            var _a, _b;
            var href = tabs.children('ul')
                .children('li')
                .eq((_b = (_a = tabs).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'active'))
                .children('a')
                .attr('href')
                .toString();
            var prefix = '_Tab';
            var lastIndex = href.lastIndexOf(prefix);
            if (lastIndex >= 0) {
                href = href.substr(lastIndex + prefix.length);
            }
            return href;
        }
        TabsExtensions.activeTabKey = activeTabKey;
        function indexByKey(tabs) {
            var indexByKey = tabs.data('indexByKey');
            if (!indexByKey) {
                indexByKey = {};
                tabs.children('ul').children('li').children('a').each(function (index, el) {
                    var href = el.getAttribute('href').toString();
                    var prefix = '_Tab';
                    var lastIndex = href.lastIndexOf(prefix);
                    if (lastIndex >= 0) {
                        href = href.substr(lastIndex + prefix.length);
                    }
                    indexByKey[href] = index;
                });
                tabs.data('indexByKey', indexByKey);
            }
            return indexByKey;
        }
        TabsExtensions.indexByKey = indexByKey;
        function selectTab(tabs, tabKey) {
            var _a, _b, _c, _d;
            var ibk = indexByKey(tabs);
            if (!ibk)
                return;
            var index = ibk[tabKey];
            if (index == null) {
                return;
            }
            if (index !== ((_b = (_a = tabs).tabs) === null || _b === void 0 ? void 0 : _b.call(_a, 'option', 'active'))) {
                (_d = (_c = tabs).tabs) === null || _d === void 0 ? void 0 : _d.call(_c, 'option', 'active', index);
            }
        }
        TabsExtensions.selectTab = selectTab;
    })(exports.TabsExtensions || (exports.TabsExtensions = {}));

    exports.ReflectionOptionsSetter = void 0;
    (function (ReflectionOptionsSetter) {
        function set(target, options) {
            if (options == null) {
                return;
            }
            var type = getInstanceType(target);
            if (type === Object) {
                return;
            }
            var propByName = type.__propByName;
            var fieldByName = type.__fieldByName;
            if (propByName == null) {
                var props = getMembers(type, exports.MemberType.property);
                var propList = props.filter(function (x) {
                    return !!x.setter && ((x.attr || []).filter(function (a) {
                        return isInstanceOfType(a, OptionAttribute);
                    }).length > 0 || (x.attr || []).filter(function (a) {
                        return isInstanceOfType(a, DisplayNameAttribute);
                    }).length > 0);
                });
                propByName = {};
                for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
                    var k = propList_1[_i];
                    propByName[exports.ReflectionUtils.makeCamelCase(k.name)] = k;
                }
                type.__propByName = propByName;
            }
            if (fieldByName == null) {
                var fields = getMembers(type, exports.MemberType.field);
                var fieldList = fields.filter(function (x1) {
                    return (x1.attr || []).filter(function (a) {
                        return isInstanceOfType(a, OptionAttribute);
                    }).length > 0 || (x1.attr || []).filter(function (a) {
                        return isInstanceOfType(a, DisplayNameAttribute);
                    }).length > 0;
                });
                fieldByName = {};
                for (var $t2 = 0; $t2 < fieldList.length; $t2++) {
                    var k1 = fieldList[$t2];
                    fieldByName[exports.ReflectionUtils.makeCamelCase(k1.name)] = k1;
                }
                type.__fieldByName = fieldByName;
            }
            var keys = Object.keys(options);
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var k2 = keys_1[_a];
                var v = options[k2];
                var cc = exports.ReflectionUtils.makeCamelCase(k2);
                var p = propByName[cc] || propByName[k2];
                if (p != null) {
                    var func = target[p.setter];
                    func && func.call(target, v);
                }
                else {
                    var f = fieldByName[cc] || fieldByName[k2];
                    f && (target[f.name] = v);
                }
            }
        }
        ReflectionOptionsSetter.set = set;
    })(exports.ReflectionOptionsSetter || (exports.ReflectionOptionsSetter = {}));

    exports.EditorUtils = void 0;
    (function (EditorUtils) {
        function getDisplayText(editor) {
            var _a, _b, _c;
            var select2 = editor.element.data('select2');
            if (select2 != null) {
                var data = editor.element.select2('data');
                if (data == null)
                    return '';
                return (_a = data.text) !== null && _a !== void 0 ? _a : '';
            }
            var value = getValue(editor);
            if (value == null) {
                return '';
            }
            if (typeof value === "string")
                return value;
            if (value instanceof Boolean)
                return (!!value ? ((_b = tryGetText('Controls.FilterPanel.OperatorNames.true')) !== null && _b !== void 0 ? _b : 'True') :
                    ((_c = tryGetText('Controls.FilterPanel.OperatorNames.true')) !== null && _c !== void 0 ? _c : 'False'));
            return value.toString();
        }
        EditorUtils.getDisplayText = getDisplayText;
        var dummy = { name: '_' };
        function getValue(editor) {
            var target = {};
            saveValue(editor, dummy, target);
            return target['_'];
        }
        EditorUtils.getValue = getValue;
        function saveValue(editor, item, target) {
            var getEditValue = safeCast(editor, IGetEditValue);
            if (getEditValue != null) {
                getEditValue.getEditValue(item, target);
                return;
            }
            var stringValue = safeCast(editor, IStringValue);
            if (stringValue != null) {
                target[item.name] = stringValue.get_value();
                return;
            }
            var booleanValue = safeCast(editor, IBooleanValue);
            if (booleanValue != null) {
                target[item.name] = booleanValue.get_value();
                return;
            }
            var doubleValue = safeCast(editor, IDoubleValue);
            if (doubleValue != null) {
                var value = doubleValue.get_value();
                target[item.name] = (isNaN(value) ? null : value);
                return;
            }
            if (editor.getEditValue != null) {
                editor.getEditValue(item, target);
                return;
            }
            if (editor.element.is(':input')) {
                target[item.name] = editor.element.val();
                return;
            }
        }
        EditorUtils.saveValue = saveValue;
        function setValue(editor, value) {
            var source = { _: value };
            loadValue(editor, dummy, source);
        }
        EditorUtils.setValue = setValue;
        function loadValue(editor, item, source) {
            var setEditValue = safeCast(editor, ISetEditValue);
            if (setEditValue != null) {
                setEditValue.setEditValue(source, item);
                return;
            }
            var stringValue = safeCast(editor, IStringValue);
            if (stringValue != null) {
                var value = source[item.name];
                if (value != null) {
                    value = value.toString();
                }
                stringValue.set_value(cast(value, String));
                return;
            }
            var booleanValue = safeCast(editor, IBooleanValue);
            if (booleanValue != null) {
                var value1 = source[item.name];
                if (typeof (value1) === 'number') {
                    booleanValue.set_value(value1 > 0);
                }
                else {
                    booleanValue.set_value(!!value1);
                }
                return;
            }
            var doubleValue = safeCast(editor, IDoubleValue);
            if (doubleValue != null) {
                var d = source[item.name];
                if (!!(d == null || isInstanceOfType(d, String) && isTrimmedEmpty(cast(d, String)))) {
                    doubleValue.set_value(null);
                }
                else if (isInstanceOfType(d, String)) {
                    doubleValue.set_value(cast(parseDecimal(cast(d, String)), Number));
                }
                else if (isInstanceOfType(d, Boolean)) {
                    doubleValue.set_value((!!d ? 1 : 0));
                }
                else {
                    doubleValue.set_value(cast(d, Number));
                }
                return;
            }
            if (editor.setEditValue != null) {
                editor.setEditValue(source, item);
                return;
            }
            if (editor.element.is(':input')) {
                var v = source[item.name];
                if (v == null) {
                    editor.element.val('');
                }
                else {
                    editor.element.val(v);
                }
                return;
            }
        }
        EditorUtils.loadValue = loadValue;
        function setReadonly(elements, isReadOnly) {
            elements.each(function (index, el) {
                var elx = $(el);
                var type = elx.attr('type');
                if (elx.is('select') || type === 'radio' || type === 'checkbox') {
                    if (isReadOnly) {
                        elx.addClass('readonly').attr('disabled', 'disabled');
                    }
                    else {
                        elx.removeClass('readonly').removeAttr('disabled');
                    }
                }
                else if (isReadOnly) {
                    elx.addClass('readonly').attr('readonly', 'readonly');
                }
                else {
                    elx.removeClass('readonly').removeAttr('readonly');
                }
                return true;
            });
            return elements;
        }
        EditorUtils.setReadonly = setReadonly;
        function setReadOnly(widget, isReadOnly) {
            var readOnly = safeCast(widget, IReadOnly);
            if (readOnly != null) {
                readOnly.set_readOnly(isReadOnly);
            }
            else if (widget.element.is(':input')) {
                setReadonly(widget.element, isReadOnly);
            }
        }
        EditorUtils.setReadOnly = setReadOnly;
        function setRequired(widget, isRequired) {
            var req = safeCast(widget, IValidateRequired);
            if (req != null) {
                req.set_required(isRequired);
            }
            else if (widget.element.is(':input')) {
                widget.element.toggleClass('required', !!isRequired);
            }
            var gridField = widget.element.closest('.field');
            var hasSupItem = gridField.find('sup').get().length > 0;
            if (isRequired && !hasSupItem) {
                $('<sup>*</sup>').attr('title', localText('Controls.PropertyGrid.RequiredHint'))
                    .prependTo(gridField.find('.caption')[0]);
            }
            else if (!isRequired && hasSupItem) {
                $(gridField.find('sup')[0]).remove();
            }
        }
        EditorUtils.setRequired = setRequired;
        function setContainerReadOnly(container, readOnly) {
            if (!readOnly) {
                if (!container.hasClass('readonly-container'))
                    return;
                container.removeClass('readonly-container').find(".editor.container-readonly")
                    .removeClass('container-readonly').each(function (i, e) {
                    var w = $(e).tryGetWidget(Widget);
                    if (w != null)
                        EditorUtils.setReadOnly(w, false);
                    else
                        EditorUtils.setReadonly($(e), false);
                });
                return;
            }
            container.addClass('readonly-container').find(".editor")
                .not('.container-readonly')
                .each(function (i, e) {
                var w = $(e).tryGetWidget(Widget);
                if (w != null) {
                    if (w['get_readOnly']) {
                        if (w['get_readOnly']())
                            return;
                    }
                    else if ($(e).is('[readonly]') || $(e).is('[disabled]') || $(e).is('.readonly') || $(e).is('.disabled'))
                        return;
                    $(e).addClass('container-readonly');
                    EditorUtils.setReadOnly(w, true);
                }
                else {
                    if ($(e).is('[readonly]') || $(e).is('[disabled]') || $(e).is('.readonly') || $(e).is('.disabled'))
                        return;
                    EditorUtils.setReadonly($(e).addClass('container-readonly'), true);
                }
            });
        }
        EditorUtils.setContainerReadOnly = setContainerReadOnly;
    })(exports.EditorUtils || (exports.EditorUtils = {}));

    var PropertyGrid = /** @class */ (function (_super) {
        tslib.__extends(PropertyGrid, _super);
        function PropertyGrid(div, opt) {
            var _this = this;
            var _a;
            _this = _super.call(this, div, opt) || this;
            _this.categoryLinkClick = function (e) {
                e.preventDefault();
                var title = $('a[name=' + e.target.getAttribute('href')
                    .toString().substr(1) + ']');
                if (title.closest('.category').hasClass('collapsed'))
                    title.closest('.category').children('.category-title').click();
                var animate = function () {
                    if ($.fn.fadeTo) {
                        title.fadeTo(100, 0.5, function () {
                            title.fadeTo(100, 1, function () {
                            });
                        });
                    }
                };
                var intoView = title.closest('.category');
                if ($.fn.scrollintoview) {
                    if (intoView.closest(':scrollable(both)').length === 0)
                        animate();
                    else
                        intoView.scrollintoview({
                            duration: 'fast',
                            direction: 'y',
                            complete: animate
                        });
                }
                else if (intoView && intoView[0] && intoView[0].scrollIntoView) {
                    intoView[0].scrollIntoView();
                    animate();
                }
            };
            _this.idPrefix = _this.options.idPrefix = (_a = _this.options.idPrefix) !== null && _a !== void 0 ? _a : _this.idPrefix;
            if (_this.options.mode == null)
                _this.options.mode = 1;
            div.addClass('s-PropertyGrid');
            _this.editors = [];
            var items = _this.options.items || [];
            _this.items = [];
            var useTabs = any(items, function (x) {
                return !isEmptyOrNull(x.tab);
            });
            if (useTabs) {
                var itemsWithoutTab = items.filter(function (f) { return isEmptyOrNull(f.tab); });
                if (itemsWithoutTab.length > 0) {
                    _this.createItems(_this.element, itemsWithoutTab);
                    $("<div class='pad'></div>").appendTo(_this.element);
                }
                var itemsWithTab = items.filter(function (f) { return !isEmptyOrNull(f.tab); });
                var ul = $("<ul class='nav nav-tabs property-tabs' role='tablist'></ul>")
                    .appendTo(_this.element);
                var tc = $("<div class='tab-content property-panes'></div>")
                    .appendTo(_this.element);
                var tabIndex = 0;
                var i = 0;
                while (i < itemsWithTab.length) {
                    var tab = { $: trimToEmpty(itemsWithTab[i].tab) };
                    var tabItems = [];
                    var j = i;
                    do {
                        tabItems.push(itemsWithTab[j]);
                    } while (++j < itemsWithTab.length &&
                        trimToEmpty(itemsWithTab[j].tab) === tab.$);
                    i = j;
                    var li = $(isBS3() ? '<li><a data-toggle="tab" role="tab"></a></li>' :
                        "<li class=\"nav-item\"><a class=\"nav-link\" data-".concat(isBS5Plus() ? "bs-" : "", "toggle=\"tab\" role=\"tab\"></a></li>"))
                        .appendTo(ul);
                    if (tabIndex === 0) {
                        if (isBS3())
                            li.addClass('active');
                        else
                            li.children('a').addClass('active');
                    }
                    var tabID = _this.uniqueName + '_Tab' + tabIndex;
                    li.children('a').attr('href', '#' + tabID)
                        .text(_this.determineText(tab.$, function (prefix) {
                        return prefix + 'Tabs.' + this.tab.$;
                    }.bind({
                        tab: tab
                    })));
                    var pane = $("<div class='tab-pane fade' role='tabpanel'>")
                        .appendTo(tc);
                    if (tabIndex === 0) {
                        pane.addClass(isBS3() ? 'in active' : 'show active');
                    }
                    pane.attr('id', tabID);
                    _this.createItems(pane, tabItems);
                    tabIndex++;
                }
            }
            else {
                _this.createItems(_this.element, items);
            }
            _this.updateInterface();
            return _this;
        }
        PropertyGrid_1 = PropertyGrid;
        PropertyGrid.prototype.destroy = function () {
            if (this.editors != null) {
                for (var i = 0; i < this.editors.length; i++) {
                    this.editors[i].destroy();
                }
                this.editors = null;
            }
            this.element.find('a.category-link').unbind('click', this.categoryLinkClick).remove();
            Widget.prototype.destroy.call(this);
        };
        PropertyGrid.prototype.createItems = function (container, items) {
            var _a, _b;
            var categoryIndexes = {};
            var categoriesDiv = container;
            var useCategories = this.options.useCategories !== false && any(items, function (x) {
                return !isEmptyOrNull(x.category);
            });
            if (useCategories) {
                var linkContainer = $('<div/>').addClass('category-links');
                categoryIndexes = this.createCategoryLinks(linkContainer, items);
                if (Object.keys(categoryIndexes).length > 1) {
                    linkContainer.appendTo(container);
                }
                else {
                    linkContainer.find('a.category-link').unbind('click', this.categoryLinkClick).remove();
                }
            }
            categoriesDiv = $('<div/>').addClass('categories').appendTo(container);
            var fieldContainer;
            if (useCategories) {
                fieldContainer = categoriesDiv;
            }
            else {
                fieldContainer = $('<div/>').addClass('category').appendTo(categoriesDiv);
            }
            var priorCategory = null;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var category = item.category;
                if (category == null) {
                    category = (_a = this.options.defaultCategory) !== null && _a !== void 0 ? _a : '';
                }
                if (useCategories && priorCategory !== category) {
                    var categoryDiv = this.createCategoryDiv(categoriesDiv, categoryIndexes, category, ((item.collapsible !== true) ? null :
                        (_b = item.collapsed) !== null && _b !== void 0 ? _b : false));
                    if (priorCategory == null) {
                        categoryDiv.addClass('first-category');
                    }
                    priorCategory = category;
                    fieldContainer = categoryDiv;
                }
                var editor = this.createField(fieldContainer, item);
                this.items.push(item);
                this.editors.push(editor);
            }
        };
        PropertyGrid.prototype.createCategoryDiv = function (categoriesDiv, categoryIndexes, category, collapsed) {
            var categoryDiv = $('<div/>').addClass('category')
                .appendTo(categoriesDiv);
            var title = $('<div/>').addClass('category-title')
                .append($('<a/>').addClass('category-anchor')
                .text(this.determineText(category, function (prefix) {
                return prefix + 'Categories.' + category;
            }))
                .attr('name', this.idPrefix +
                'Category' + categoryIndexes[category].toString()))
                .appendTo(categoryDiv);
            if (collapsed != null) {
                categoryDiv.addClass(((collapsed === true) ?
                    'collapsible collapsed' : 'collapsible'));
                var img = $('<i/>').addClass(((collapsed === true) ?
                    'fa fa-plus' : 'fa fa-minus')).appendTo(title);
                title.click(function (e) {
                    categoryDiv.toggleClass('collapsed');
                    img.toggleClass('fa-plus').toggleClass('fa-minus');
                });
            }
            return categoryDiv;
        };
        PropertyGrid.prototype.determineText = function (text, getKey) {
            if (text != null && !startsWith(text, '`')) {
                var local = tryGetText(text);
                if (local != null) {
                    return local;
                }
            }
            if (text != null && startsWith(text, '`')) {
                text = text.substring(1);
            }
            if (!isEmptyOrNull(this.options.localTextPrefix)) {
                var local1 = tryGetText(getKey(this.options.localTextPrefix));
                if (local1 != null) {
                    return local1;
                }
            }
            return text;
        };
        PropertyGrid.prototype.createField = function (container, item) {
            var _a, _b;
            var fieldDiv = $('<div/>').addClass('field')
                .addClass(item.name).data('PropertyItem', item).appendTo(container);
            if (!isEmptyOrNull(item.cssClass)) {
                fieldDiv.addClass(item.cssClass);
            }
            if (!isEmptyOrNull(item.formCssClass)) {
                fieldDiv.addClass(item.formCssClass);
                if (item.formCssClass.indexOf('line-break-') >= 0) {
                    var splitted = item.formCssClass.split(String.fromCharCode(32));
                    if (splitted.indexOf('line-break-xs') >= 0) {
                        $("<div class='line-break' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                    else if (splitted.indexOf('line-break-sm') >= 0) {
                        $("<div class='line-break hidden-xs' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                    else if (splitted.indexOf('line-break-md') >= 0) {
                        $("<div class='line-break hidden-sm' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                    else if (splitted.indexOf('line-break-lg') >= 0) {
                        $("<div class='line-break hidden-md' style='width: 100%' />")
                            .insertBefore(fieldDiv);
                    }
                }
            }
            var editorId = this.idPrefix + item.name;
            var title = this.determineText(item.title, function (prefix) {
                return prefix + item.name;
            });
            var hint = this.determineText(item.hint, function (prefix1) {
                return prefix1 + item.name + '_Hint';
            });
            var placeHolder = this.determineText(item.placeholder, function (prefix2) {
                return prefix2 + item.name + '_Placeholder';
            });
            if (hint == null) {
                hint = title !== null && title !== void 0 ? title : '';
            }
            var label = $('<label/>')
                .addClass('caption')
                .attr('for', editorId)
                .attr('title', hint)
                .text(title !== null && title !== void 0 ? title : '')
                .appendTo(fieldDiv);
            if (!isEmptyOrNull(item.labelWidth)) {
                if (item.labelWidth === '0') {
                    label.hide();
                }
                else {
                    label.css('width', item.labelWidth);
                }
            }
            if (item.required === true) {
                $('<sup>*</sup>').attr('title', localText('Controls.PropertyGrid.RequiredHint'))
                    .prependTo(label);
            }
            var editorType = exports.EditorTypeRegistry
                .get((_a = item.editorType) !== null && _a !== void 0 ? _a : 'String');
            var element = Widget.elementFor(editorType)
                .addClass('editor')
                .attr('id', editorId).appendTo(fieldDiv);
            if (element.is(':input')) {
                element.attr('name', (_b = item.name) !== null && _b !== void 0 ? _b : '');
            }
            if (!isEmptyOrNull(placeHolder)) {
                element.attr('placeholder', placeHolder);
            }
            var editorParams = item.editorParams;
            var optionsType = null;
            var optionsAttr = getAttributes(editorType, OptionsTypeAttribute, true);
            if (optionsAttr != null && optionsAttr.length > 0) {
                optionsType = optionsAttr[0].optionsType;
            }
            var editor;
            if (optionsType != null) {
                editorParams = extend(new optionsType(), item.editorParams);
                editor = new editorType(element, editorParams);
            }
            else {
                editorParams = extend(new Object(), item.editorParams);
                editor = new editorType(element, editorParams);
            }
            editor.initialize();
            if (getTypeShortName(editor) == "BooleanEditor" &&
                (item.editorParams == null || !!!item.editorParams['labelFor'])) {
                label.removeAttr('for');
            }
            if (getTypeShortName(editor) == "RadioButtonEditor" &&
                (item.editorParams == null || !!!item.editorParams['labelFor'])) {
                label.removeAttr('for');
            }
            if (item.maxLength != null) {
                PropertyGrid_1.setMaxLength(editor, item.maxLength);
            }
            if (item.editorParams != null) {
                exports.ReflectionOptionsSetter.set(editor, item.editorParams);
            }
            $('<div/>').addClass('vx').appendTo(fieldDiv);
            $('<div/>').addClass('clear').appendTo(fieldDiv);
            return editor;
        };
        PropertyGrid.prototype.getCategoryOrder = function (items) {
            var _a;
            var order = 0;
            var result = {};
            var categoryOrder = trimToNull(this.options.categoryOrder);
            if (categoryOrder != null) {
                var split = categoryOrder.split(';');
                for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
                    var s = split_1[_i];
                    var x = trimToNull(s);
                    if (x == null) {
                        continue;
                    }
                    if (result[x] != null) {
                        continue;
                    }
                    result[x] = order++;
                }
            }
            for (var _b = 0, items_1 = items; _b < items_1.length; _b++) {
                var x1 = items_1[_b];
                var category = x1.category;
                if (category == null) {
                    category = (_a = this.options.defaultCategory) !== null && _a !== void 0 ? _a : '';
                }
                if (result[category] == null) {
                    result[category] = order++;
                }
            }
            return result;
        };
        PropertyGrid.prototype.createCategoryLinks = function (container, items) {
            var _a;
            var idx = 0;
            var itemIndex = {};
            var itemCategory = {};
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var x = items_2[_i];
                var name1 = x.name;
                var cat1 = x.category;
                if (cat1 == null) {
                    cat1 = (_a = this.options.defaultCategory) !== null && _a !== void 0 ? _a : '';
                }
                itemCategory[name1] = cat1;
                itemIndex[x.name] = idx++;
            }
            var categoryOrder = this.getCategoryOrder(items);
            items.sort(function (x1, y) {
                var c = 0;
                var xcategory = itemCategory[x1.name];
                var ycategory = itemCategory[y.name];
                if (xcategory != ycategory) {
                    var c1 = categoryOrder[xcategory];
                    var c2 = categoryOrder[ycategory];
                    if (c1 != null && c2 != null) {
                        c = c1 - c2;
                    }
                    else if (c1 != null) {
                        c = -1;
                    }
                    else if (c2 != null) {
                        c = 1;
                    }
                }
                if (c === 0) {
                    c = Culture.stringCompare(xcategory, ycategory);
                }
                if (c === 0) {
                    c = itemIndex[x1.name] < itemIndex[y.name] ? -1 : (itemIndex[x1.name] > itemIndex[y.name] ? 1 : 0);
                }
                return c;
            });
            var categoryIndexes = {};
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var category = { $: itemCategory[item.name] };
                if (categoryIndexes[category.$] == null) {
                    var index = Object.keys(categoryIndexes).length + 1;
                    categoryIndexes[category.$] = index;
                    if (index > 1) {
                        $('<span/>').addClass('separator').text('|').prependTo(container);
                    }
                    $('<a/>').addClass('category-link').text(this.determineText(category.$, function (prefix) {
                        return prefix + 'Categories.' + this.category.$;
                    }.bind({ category: category })))
                        .attr('tabindex', '-1')
                        .attr('href', '#' + this.idPrefix +
                        'Category' + index.toString())
                        .click(this.categoryLinkClick)
                        .prependTo(container);
                }
            }
            $('<div/>').addClass('clear').appendTo(container);
            return categoryIndexes;
        };
        PropertyGrid.prototype.get_editors = function () {
            return this.editors;
        };
        PropertyGrid.prototype.get_items = function () {
            return this.items;
        };
        PropertyGrid.prototype.get_idPrefix = function () {
            return this.idPrefix;
        };
        PropertyGrid.prototype.get_mode = function () {
            return this.options.mode;
        };
        PropertyGrid.prototype.set_mode = function (value) {
            if (this.options.mode !== value) {
                this.options.mode = value;
                this.updateInterface();
            }
        };
        // Obsolete
        PropertyGrid.loadEditorValue = function (editor, item, source) {
        };
        // Obsolete
        PropertyGrid.saveEditorValue = function (editor, item, target) {
            exports.EditorUtils.saveValue(editor, item, target);
        };
        // Obsolete
        PropertyGrid.setReadOnly = function (widget, isReadOnly) {
            exports.EditorUtils.setReadOnly(widget, isReadOnly);
        };
        // Obsolete
        PropertyGrid.setReadonly = function (elements, isReadOnly) {
            return exports.EditorUtils.setReadonly(elements, isReadOnly);
        };
        // Obsolete
        PropertyGrid.setRequired = function (widget, isRequired) {
            exports.EditorUtils.setRequired(widget, isRequired);
        };
        PropertyGrid.setMaxLength = function (widget, maxLength) {
            if (widget.element.is(':input')) {
                if (maxLength > 0) {
                    widget.element.attr('maxlength', maxLength);
                }
                else {
                    widget.element.removeAttr('maxlength');
                }
            }
        };
        PropertyGrid.prototype.load = function (source) {
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                var editor = this.editors[i];
                if (!!(this.get_mode() === 1 && item.defaultValue != null) &&
                    typeof (source[item.name]) === 'undefined') {
                    source[item.name] = item.defaultValue;
                }
                exports.EditorUtils.loadValue(editor, item, source);
            }
        };
        PropertyGrid.prototype.save = function (target) {
            if (target == null)
                target = Object.create(null);
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                if (item.oneWay !== true && this.canModifyItem(item)) {
                    var editor = this.editors[i];
                    exports.EditorUtils.saveValue(editor, item, target);
                }
            }
            return target;
        };
        Object.defineProperty(PropertyGrid.prototype, "value", {
            get: function () {
                return this.save();
            },
            set: function (val) {
                if (val == null)
                    val = Object.create(null);
                this.load(val);
            },
            enumerable: false,
            configurable: true
        });
        PropertyGrid.prototype.canModifyItem = function (item) {
            if (this.get_mode() === exports.PropertyGridMode.insert) {
                if (item.insertable === false) {
                    return false;
                }
                if (item.insertPermission == null) {
                    return true;
                }
                return exports.Authorization.hasPermission(item.insertPermission);
            }
            else if (this.get_mode() === exports.PropertyGridMode.update) {
                if (item.updatable === false) {
                    return false;
                }
                if (item.updatePermission == null) {
                    return true;
                }
                return exports.Authorization.hasPermission(item.updatePermission);
            }
            return true;
        };
        PropertyGrid.prototype.updateInterface = function () {
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                var editor = this.editors[i];
                var readOnly = item.readOnly === true || !this.canModifyItem(item);
                exports.EditorUtils.setReadOnly(editor, readOnly);
                exports.EditorUtils.setRequired(editor, !readOnly &&
                    !!item.required && item.editorType !== 'Boolean');
                if (item.visible === false || item.readPermission != null ||
                    item.insertPermission != null || item.updatePermission != null ||
                    item.hideOnInsert === true || item.hideOnUpdate === true) {
                    var hidden = (item.readPermission != null &&
                        !exports.Authorization.hasPermission(item.readPermission)) ||
                        item.visible === false ||
                        (this.get_mode() === exports.PropertyGridMode.insert && item.hideOnInsert === true) ||
                        (this.get_mode() === 2 && item.hideOnUpdate === true);
                    editor.getGridField().toggle(!hidden);
                }
            }
        };
        PropertyGrid.prototype.enumerateItems = function (callback) {
            for (var i = 0; i < this.editors.length; i++) {
                var item = this.items[i];
                var editor = this.editors[i];
                callback(item, editor);
            }
        };
        var PropertyGrid_1;
        PropertyGrid = PropertyGrid_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.PropertyGrid')
        ], PropertyGrid);
        return PropertyGrid;
    }(Widget));
    exports.PropertyGridMode = void 0;
    (function (PropertyGridMode) {
        PropertyGridMode[PropertyGridMode["insert"] = 1] = "insert";
        PropertyGridMode[PropertyGridMode["update"] = 2] = "update";
    })(exports.PropertyGridMode || (exports.PropertyGridMode = {}));

    var PropertyPanel = /** @class */ (function (_super) {
        tslib.__extends(PropertyPanel, _super);
        function PropertyPanel(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.initPropertyGrid();
            _this.loadInitialEntity();
            return _this;
        }
        PropertyPanel.prototype.destroy = function () {
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.validator) {
                this.byId('Form').remove();
                this.validator = null;
            }
            _super.prototype.destroy.call(this);
        };
        PropertyPanel.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-Panel').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        PropertyPanel.prototype.loadInitialEntity = function () {
            if (this.propertyGrid) {
                this.propertyGrid.load(new Object());
            }
        };
        PropertyPanel.prototype.getFormKey = function () {
            var attributes = getAttributes(getInstanceType(this), FormKeyAttribute, true);
            if (attributes.length >= 1) {
                return attributes[0].value;
            }
            var name = getTypeFullName(getInstanceType(this));
            var px = name.indexOf('.');
            if (px >= 0) {
                name = name.substring(px + 1);
            }
            if (endsWith(name, 'Panel')) {
                name = name.substr(0, name.length - 6);
            }
            else if (endsWith(name, 'Panel')) {
                name = name.substr(0, name.length - 5);
            }
            return name;
        };
        PropertyPanel.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getPropertyItems(),
                mode: 1,
                useCategories: false,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.'
            };
        };
        PropertyPanel.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            return getForm(formKey);
        };
        PropertyPanel.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid) {
                this.propertyGrid.save(entity);
            }
            return entity;
        };
        PropertyPanel.prototype.get_entity = function () {
            return this._entity;
        };
        PropertyPanel.prototype.get_entityId = function () {
            return this._entityId;
        };
        PropertyPanel.prototype.set_entity = function (value) {
            this._entity = value !== null && value !== void 0 ? value : new Object();
        };
        PropertyPanel.prototype.set_entityId = function (value) {
            this._entityId = value;
        };
        PropertyPanel.prototype.validateBeforeSave = function () {
            return this.validator.form();
        };
        PropertyPanel = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.PropertyPanel')
        ], PropertyPanel);
        return PropertyPanel;
    }(TemplatedPanel));

    exports.SubDialogHelper = void 0;
    (function (SubDialogHelper) {
        function bindToDataChange(dialog, owner, dataChange, useTimeout) {
            var widgetName = owner.widgetName;
            dialog.element.bind('ondatachange.' + widgetName, function (e, dci) {
                if (useTimeout) {
                    window.setTimeout(function () {
                        dataChange(e, dci);
                    }, 0);
                }
                else {
                    dataChange(e, dci);
                }
            }).bind('remove.' + widgetName, function () {
                dialog.element.unbind('ondatachange.' + widgetName);
            });
            return dialog;
        }
        SubDialogHelper.bindToDataChange = bindToDataChange;
        function triggerDataChange(dialog) {
            dialog.element.triggerHandler('ondatachange');
            return dialog;
        }
        SubDialogHelper.triggerDataChange = triggerDataChange;
        function triggerDataChanged(element) {
            element.triggerHandler('ondatachange');
            return element;
        }
        SubDialogHelper.triggerDataChanged = triggerDataChanged;
        function bubbleDataChange(dialog, owner, useTimeout) {
            return bindToDataChange(dialog, owner, function (e, dci) {
                owner.element.triggerHandler('ondatachange');
            }, useTimeout);
        }
        SubDialogHelper.bubbleDataChange = bubbleDataChange;
        function cascade(cascadedDialog, ofElement) {
            cascadedDialog.element.one('dialogopen', function (e) {
                cascadedDialog.element.dialog().dialog('option', 'position', cascadedDialogOffset(ofElement));
            });
            return cascadedDialog;
        }
        SubDialogHelper.cascade = cascade;
        function cascadedDialogOffset(element) {
            return { my: 'left top', at: 'left+20 top+20', of: element[0] };
        }
        SubDialogHelper.cascadedDialogOffset = cascadedDialogOffset;
    })(exports.SubDialogHelper || (exports.SubDialogHelper = {}));

    var PropertyDialog = /** @class */ (function (_super) {
        tslib.__extends(PropertyDialog, _super);
        function PropertyDialog(opt) {
            var _this = _super.call(this, opt) || this;
            if (_this.useAsync())
                _this.initAsync();
            else
                _this.initSync();
            return _this;
        }
        PropertyDialog_1 = PropertyDialog;
        PropertyDialog.prototype.internalInit = function () {
            this.initPropertyGrid();
            this.loadInitialEntity();
        };
        PropertyDialog.prototype.initSync = function () {
            this.propertyItemsData = this.getPropertyItemsData();
            this.internalInit();
            this.afterInit();
        };
        PropertyDialog.prototype.initAsync = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.getPropertyItemsDataAsync()];
                        case 1:
                            _a.propertyItemsData = _b.sent();
                            this.internalInit();
                            this.afterInit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        PropertyDialog.prototype.afterInit = function () {
        };
        PropertyDialog.prototype.useAsync = function () {
            return false;
        };
        PropertyDialog.prototype.destroy = function () {
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.validator) {
                this.byId('Form').remove();
                this.validator = null;
            }
            _super.prototype.destroy.call(this);
        };
        PropertyDialog.prototype.getDialogOptions = function () {
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.width = 400;
            return opt;
        };
        PropertyDialog.prototype.getDialogButtons = function () {
            var _this = this;
            _super.prototype.getDialogButtons.call(this);
            return [{
                    text: localText('Dialogs.OkButton'),
                    cssClass: "btn btn-primary",
                    click: function () { return _this.okClick(); }
                }, {
                    text: localText('Dialogs.CancelButton'),
                    click: function () { return _this.cancelClick(); }
                }];
        };
        PropertyDialog.prototype.okClick = function () {
            if (!this.validateBeforeSave()) {
                return;
            }
            this.okClickValidated();
        };
        PropertyDialog.prototype.okClickValidated = function () {
            this.dialogClose();
        };
        PropertyDialog.prototype.cancelClick = function () {
            this.dialogClose();
        };
        PropertyDialog.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        PropertyDialog.prototype.getFormKey = function () {
            var attributes = getAttributes(getInstanceType(this), FormKeyAttribute, true);
            if (attributes.length >= 1) {
                return attributes[0].value;
            }
            else {
                var name = getTypeFullName(getInstanceType(this));
                var px = name.indexOf('.');
                if (px >= 0) {
                    name = name.substring(px + 1);
                }
                if (endsWith(name, 'Dialog')) {
                    name = name.substr(0, name.length - 6);
                }
                else if (endsWith(name, 'Panel')) {
                    name = name.substr(0, name.length - 5);
                }
                return name;
            }
        };
        PropertyDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getPropertyItems(),
                mode: 1,
                useCategories: false,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.'
            };
        };
        PropertyDialog.prototype.getPropertyItems = function () {
            var _a;
            return ((_a = this.propertyItemsData) === null || _a === void 0 ? void 0 : _a.items) || [];
        };
        PropertyDialog.prototype.getPropertyItemsData = function () {
            var formKey = this.getFormKey();
            if (this.getFormKey === PropertyDialog_1.prototype.getFormKey &&
                this.getPropertyItems !== PropertyDialog_1.prototype.getPropertyItems &&
                !exports.ScriptData.canLoad('Form.' + formKey)) {
                return {
                    items: this.getPropertyItems(),
                    additionalItems: []
                };
            }
            if (!isEmptyOrNull(formKey)) {
                return getFormData(formKey);
            }
            return { items: [], additionalItems: [] };
        };
        PropertyDialog.prototype.getPropertyItemsDataAsync = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var formKey;
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            formKey = this.getFormKey();
                            if (!!isEmptyOrNull(formKey)) return [3 /*break*/, 2];
                            return [4 /*yield*/, getFormDataAsync(formKey)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/, { items: [], additionalItems: [] }];
                    }
                });
            });
        };
        PropertyDialog.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid) {
                this.propertyGrid.save(entity);
            }
            return entity;
        };
        PropertyDialog.prototype.loadInitialEntity = function () {
            this.propertyGrid && this.propertyGrid.load(new Object());
        };
        PropertyDialog.prototype.get_entity = function () {
            return this.entity;
        };
        PropertyDialog.prototype.set_entity = function (value) {
            this.entity = (value !== null && value !== void 0 ? value : new Object());
        };
        PropertyDialog.prototype.get_entityId = function () {
            return this.entityId;
        };
        PropertyDialog.prototype.set_entityId = function (value) {
            this.entityId = value;
        };
        PropertyDialog.prototype.validateBeforeSave = function () {
            return this.validator.form();
        };
        PropertyDialog.prototype.updateTitle = function () {
        };
        PropertyDialog.prototype.getFallbackTemplate = function () {
            return "<div>\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div class=\"fieldset\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n        </form> \n    </div>\n</div>";
        };
        var PropertyDialog_1;
        PropertyDialog = PropertyDialog_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.PropertyDialog')
        ], PropertyDialog);
        return PropertyDialog;
    }(TemplatedDialog));

    var StringEditor = /** @class */ (function (_super) {
        tslib.__extends(StringEditor, _super);
        function StringEditor(input) {
            return _super.call(this, input) || this;
        }
        Object.defineProperty(StringEditor.prototype, "value", {
            get: function () {
                return this.element.val();
            },
            set: function (value) {
                this.element.val(value);
            },
            enumerable: false,
            configurable: true
        });
        StringEditor.prototype.get_value = function () {
            return this.value;
        };
        StringEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        StringEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.StringEditor', [IStringValue]),
            exports.Decorators.element("<input type=\"text\"/>")
        ], StringEditor);
        return StringEditor;
    }(Widget));

    var PasswordEditor = /** @class */ (function (_super) {
        tslib.__extends(PasswordEditor, _super);
        function PasswordEditor(input) {
            var _this = _super.call(this, input) || this;
            input.attr('type', 'password');
            return _this;
        }
        PasswordEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.PasswordEditor')
        ], PasswordEditor);
        return PasswordEditor;
    }(StringEditor));

    var TextAreaEditor = /** @class */ (function (_super) {
        tslib.__extends(TextAreaEditor, _super);
        function TextAreaEditor(input, opt) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, input, opt) || this;
            if (_this.options.cols !== 0) {
                input.attr('cols', ((_a = _this.options.cols) !== null && _a !== void 0 ? _a : 80));
            }
            if (_this.options.rows !== 0) {
                input.attr('rows', ((_b = _this.options.rows) !== null && _b !== void 0 ? _b : 6));
            }
            return _this;
        }
        Object.defineProperty(TextAreaEditor.prototype, "value", {
            get: function () {
                return this.element.val();
            },
            set: function (value) {
                this.element.val(value);
            },
            enumerable: false,
            configurable: true
        });
        TextAreaEditor.prototype.get_value = function () {
            return this.value;
        };
        TextAreaEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        TextAreaEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.TextAreaEditor', [IStringValue]),
            exports.Decorators.element("<textarea />")
        ], TextAreaEditor);
        return TextAreaEditor;
    }(Widget));

    var BooleanEditor = /** @class */ (function (_super) {
        tslib.__extends(BooleanEditor, _super);
        function BooleanEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BooleanEditor.prototype, "value", {
            get: function () {
                return this.element.is(":checked");
            },
            set: function (value) {
                this.element.prop("checked", !!value);
            },
            enumerable: false,
            configurable: true
        });
        BooleanEditor.prototype.get_value = function () {
            return this.value;
        };
        BooleanEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        BooleanEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.BooleanEditor', [IBooleanValue]),
            exports.Decorators.element('<input type="checkbox"/>')
        ], BooleanEditor);
        return BooleanEditor;
    }(Widget));

    var DecimalEditor = /** @class */ (function (_super) {
        tslib.__extends(DecimalEditor, _super);
        function DecimalEditor(input, opt) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, input, opt) || this;
            input.addClass('decimalQ');
            var numericOptions = extend(DecimalEditor_1.defaultAutoNumericOptions(), {
                vMin: ((_a = _this.options.minValue) !== null && _a !== void 0 ? _a : (_this.options.allowNegatives ? (_this.options.maxValue != null ? ("-" + _this.options.maxValue) : '-999999999999.99') : '0.00')),
                vMax: ((_b = _this.options.maxValue) !== null && _b !== void 0 ? _b : '999999999999.99')
            });
            if (_this.options.decimals != null) {
                numericOptions.mDec = _this.options.decimals;
            }
            if (_this.options.padDecimals != null) {
                numericOptions.aPad = _this.options.padDecimals;
            }
            if ($.fn.autoNumeric)
                input.autoNumeric(numericOptions);
            return _this;
        }
        DecimalEditor_1 = DecimalEditor;
        DecimalEditor.prototype.get_value = function () {
            if ($.fn.autoNumeric) {
                var val = this.element.autoNumeric('get');
                if (!!(val == null || val === ''))
                    return null;
                return parseFloat(val);
            }
            var val = this.element.val();
            return parseDecimal(val);
        };
        Object.defineProperty(DecimalEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        DecimalEditor.prototype.set_value = function (value) {
            if (value == null || value === '') {
                this.element.val('');
            }
            else if ($.fn.autoNumeric) {
                this.element.autoNumeric('set', value);
            }
            else
                this.element.val(formatNumber(value));
        };
        DecimalEditor.prototype.get_isValid = function () {
            return !isNaN(this.get_value());
        };
        DecimalEditor.defaultAutoNumericOptions = function () {
            return {
                aDec: Culture.decimalSeparator,
                altDec: ((Culture.decimalSeparator === '.') ? ',' : '.'),
                aSep: ((Culture.decimalSeparator === '.') ? ',' : '.'),
                aPad: true
            };
        };
        var DecimalEditor_1;
        DecimalEditor = DecimalEditor_1 = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.DecimalEditor', [IDoubleValue]),
            exports.Decorators.element('<input type="text"/>')
        ], DecimalEditor);
        return DecimalEditor;
    }(Widget));

    var IntegerEditor = /** @class */ (function (_super) {
        tslib.__extends(IntegerEditor, _super);
        function IntegerEditor(input, opt) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, input, opt) || this;
            input.addClass('integerQ');
            var numericOptions = extend(DecimalEditor.defaultAutoNumericOptions(), {
                vMin: (((_a = _this.options.minValue) !== null && _a !== void 0 ? _a : _this.options.allowNegatives) ? (_this.options.maxValue != null ? ("-" + _this.options.maxValue) : '-2147483647') : '0'),
                vMax: ((_b = _this.options.maxValue) !== null && _b !== void 0 ? _b : 2147483647),
                aSep: null
            });
            if ($.fn.autoNumeric)
                input.autoNumeric(numericOptions);
            return _this;
        }
        IntegerEditor.prototype.get_value = function () {
            if ($.fn.autoNumeric) {
                var val = this.element.autoNumeric('get');
                if (!!isTrimmedEmpty(val))
                    return null;
                else
                    return parseInt(val, 10);
            }
            else {
                var val = trimToNull(this.element.val());
                if (val == null)
                    return null;
                return parseInteger(val);
            }
        };
        Object.defineProperty(IntegerEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        IntegerEditor.prototype.set_value = function (value) {
            if (value == null || value === '')
                this.element.val('');
            else if ($.fn.autoNumeric)
                this.element.autoNumeric('set', value);
            else
                this.element.val(formatNumber(value));
        };
        IntegerEditor.prototype.get_isValid = function () {
            return !isNaN(this.get_value());
        };
        IntegerEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.IntegerEditor', [IDoubleValue]),
            exports.Decorators.element('<input type="text"/>')
        ], IntegerEditor);
        return IntegerEditor;
    }(Widget));

    var datePickerIconSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M14 2v-1h-3v1h-5v-1h-3v1h-3v15h17v-15h-3zM12 2h1v2h-1v-2zM4 2h1v2h-1v-2zM16 16h-15v-8.921h15v8.921zM1 6.079v-3.079h2v2h3v-2h5v2h3v-2h2v3.079h-15z" fill="currentColor"></path></svg>';
    var DateEditor = /** @class */ (function (_super) {
        tslib.__extends(DateEditor, _super);
        function DateEditor(input) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, input) || this;
            // @ts-ignore
            if (typeof flatpickr !== "undefined" && (DateEditor_1.useFlatpickr || !$.fn.datepicker)) {
                // @ts-ignore
                flatpickr(input[0], DateEditor_1.flatPickrOptions(input));
            }
            else if ((_a = $.fn) === null || _a === void 0 ? void 0 : _a.datepicker) {
                input.datepicker({
                    showOn: 'button',
                    beforeShow: function (inp, inst) {
                        if (input.hasClass('readonly'))
                            return false;
                        DateEditor_1.uiPickerZIndexWorkaround(_this.element);
                        return true;
                    },
                    yearRange: ((_b = _this.yearRange) !== null && _b !== void 0 ? _b : '-100:+50')
                });
            }
            else {
                input.attr('type', 'date');
            }
            input.on('keyup.' + _this.uniqueName, function (e) {
                if (e.which === 32 && !_this.get_readOnly()) {
                    if (_this.get_valueAsDate() != today()) {
                        _this.set_valueAsDate(today());
                        _this.element.trigger('change');
                    }
                }
                else {
                    DateEditor_1.dateInputKeyup(e);
                }
            });
            input.on('change.' + _this.uniqueName, DateEditor_1.dateInputChange);
            addValidationRule(input, _this.uniqueName, function (e1) {
                var value = _this.get_value();
                if (isEmptyOrNull(value)) {
                    return null;
                }
                if (!isEmptyOrNull(_this.get_minValue()) && Invariant.stringCompare(formatDate(value, 'yyyy-MM-dd'), formatDate(_this.get_minValue(), 'yyyy-MM-dd')) < 0) {
                    return format(localText('Validation.MinDate'), formatDate(_this.get_minValue(), null));
                }
                if (!isEmptyOrNull(_this.get_maxValue()) && Invariant.stringCompare(formatDate(value, 'yyyy-MM-dd'), formatDate(_this.get_maxValue(), 'yyyy-MM-dd')) > 0) {
                    return format(localText('Validation.MaxDate'), formatDate(_this.get_maxValue(), null));
                }
                return null;
            });
            _this.set_sqlMinMax(true);
            return _this;
        }
        DateEditor_1 = DateEditor;
        DateEditor.flatPickrOptions = function (input) {
            return {
                clickOpens: true,
                allowInput: true,
                dateFormat: Culture.dateOrder.split('').join(Culture.dateSeparator).replace('y', 'Y'),
                onChange: function () {
                    input.triggerHandler('change');
                }
            };
        };
        DateEditor.prototype.get_value = function () {
            var _a;
            var value = (_a = this.element.val()) === null || _a === void 0 ? void 0 : _a.trim();
            if (!(value === null || value === void 0 ? void 0 : value.length)) {
                return null;
            }
            return formatDate(value, 'yyyy-MM-dd');
        };
        Object.defineProperty(DateEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        DateEditor.prototype.set_value = function (value) {
            if (value == null) {
                this.element.val('');
            }
            else if (value.toLowerCase() === 'today' || value.toLowerCase() === 'now') {
                this.element.val(formatDate(today(), this.element.attr('type') === 'date' ? 'yyyy-MM-dd' : null));
            }
            else {
                this.element.val(formatDate(value, this.element.attr('type') === 'date' ? 'yyyy-MM-dd' : null));
            }
        };
        DateEditor.prototype.get_valueAsDate = function () {
            if (isEmptyOrNull(this.get_value())) {
                return null;
            }
            return parseISODateTime(this.get_value());
        };
        Object.defineProperty(DateEditor.prototype, "valueAsDate", {
            get: function () {
                return this.get_valueAsDate();
            },
            set: function (v) {
                this.set_valueAsDate(v);
            },
            enumerable: false,
            configurable: true
        });
        DateEditor.prototype.set_valueAsDate = function (value) {
            if (value == null) {
                this.set_value(null);
            }
            this.set_value(formatDate(value, 'yyyy-MM-dd'));
        };
        DateEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        DateEditor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                if (value) {
                    this.element.addClass('readonly').attr('readonly', 'readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '0.1');
                }
                else {
                    this.element.removeClass('readonly').removeAttr('readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '1');
                }
            }
        };
        DateEditor.prototype.get_minValue = function () {
            return this.minValue;
        };
        DateEditor.prototype.set_minValue = function (value) {
            this.minValue = value;
        };
        DateEditor.prototype.get_maxValue = function () {
            return this.maxValue;
        };
        DateEditor.prototype.set_maxValue = function (value) {
            this.maxValue = value;
        };
        DateEditor.prototype.get_minDate = function () {
            return parseISODateTime(this.get_minValue());
        };
        DateEditor.prototype.set_minDate = function (value) {
            this.set_minValue(formatDate(value, 'yyyy-MM-dd'));
        };
        DateEditor.prototype.get_maxDate = function () {
            return parseISODateTime(this.get_maxValue());
        };
        DateEditor.prototype.set_maxDate = function (value) {
            this.set_maxValue(formatDate(value, 'yyyy-MM-dd'));
        };
        DateEditor.prototype.get_sqlMinMax = function () {
            return this.get_minValue() === '1753-01-01' && this.get_maxValue() === '9999-12-31';
        };
        DateEditor.prototype.set_sqlMinMax = function (value) {
            if (value) {
                this.set_minValue('1753-01-01');
                this.set_maxValue('9999-12-31');
            }
            else {
                this.set_minValue(null);
                this.set_maxValue(null);
            }
        };
        DateEditor.flatPickrTrigger = function (input) {
            return $('<i class="ui-datepicker-trigger" href="javascript:;">' + datePickerIconSvg + '</i>')
                .insertAfter(input)
                .click(function () {
                if (!input.hasClass('readonly'))
                    input[0]._flatpickr.open();
            });
        };
        DateEditor.dateInputKeyup = function (e) {
            var _a;
            if (Culture.dateOrder !== 'dmy') {
                return;
            }
            var input = $(e.target);
            if (!input.is(':input') || input.attr("type") == "date") {
                // for browser date editors, format might not match culture setting
                return;
            }
            if (input.is('[readonly]') || input.is(':disabled')) {
                return;
            }
            var val = (_a = input.val()) !== null && _a !== void 0 ? _a : '';
            if (!!(val.length === 0 || input[0].selectionEnd !== val.length)) {
                return;
            }
            if (val.indexOf(Culture.dateSeparator + Culture.dateSeparator) !== -1) {
                input.val(replaceAll(val, Culture.dateSeparator + Culture.dateSeparator, Culture.dateSeparator));
                return;
            }
            function isNumeric(c) {
                return c >= 48 && c <= 57;
            }
            if (e.which === 47 || e.which === 111) {
                if (val.length >= 2 && val.charAt(val.length - 1) === Culture.dateSeparator &&
                    val.charAt(val.length - 2) === Culture.dateSeparator) {
                    input.val(val.substr(0, val.length - 1));
                    return;
                }
                if (val.charAt(val.length - 1) !== Culture.dateSeparator) {
                    return;
                }
                switch (val.length) {
                    case 2: {
                        if (isNumeric(val.charCodeAt(0))) {
                            val = '0' + val;
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    case 4: {
                        if (isNumeric(val.charCodeAt(0)) &&
                            isNumeric(val.charCodeAt(2)) &&
                            val.charAt(1) == Culture.dateSeparator) {
                            val = '0' + val.charAt(0) + Culture.dateSeparator + '0' +
                                val.charAt(2) + Culture.dateSeparator;
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    case 5: {
                        if (isNumeric(val.charCodeAt(0)) &&
                            isNumeric(val.charCodeAt(2)) &&
                            isNumeric(val.charCodeAt(3)) &&
                            val.charAt(1) === Culture.dateSeparator) {
                            val = '0' + val;
                            break;
                        }
                        else if (isNumeric(val.charCodeAt(0)) &&
                            isNumeric(val.charCodeAt(1)) &&
                            isNumeric(val.charCodeAt(3)) &&
                            val.charAt(2) === Culture.dateSeparator) {
                            val = val.charAt(0) + val.charAt(1) +
                                Culture.dateSeparator + '0' + val.charAt(3) + Culture.dateSeparator;
                            break;
                        }
                        else {
                            break;
                        }
                    }
                    default: {
                        return;
                    }
                }
                input.val(val);
            }
            if (val.length < 6 && (e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105) &&
                isNumeric(val.charCodeAt(val.length - 1))) {
                switch (val.length) {
                    case 1: {
                        if (val.charCodeAt(0) <= 51) {
                            return;
                        }
                        val = '0' + val;
                        break;
                    }
                    case 2: {
                        if (!isNumeric(val.charCodeAt(0))) {
                            return;
                        }
                        break;
                    }
                    case 3: {
                        if (!isNumeric(val.charCodeAt(0)) ||
                            val.charAt(1) !== Culture.dateSeparator ||
                            val.charCodeAt(2) <= 49) {
                            return;
                        }
                        val = '0' + val.charAt(0) + Culture.dateSeparator + '0' + val.charAt(2);
                        break;
                    }
                    case 4: {
                        if (val.charAt(1) == Culture.dateSeparator) {
                            if (!isNumeric(val.charCodeAt(0)) ||
                                !isNumeric(val.charCodeAt(2))) {
                                return;
                            }
                            val = '0' + val;
                            break;
                        }
                        else if (val.charAt(2) == Culture.dateSeparator) {
                            if (!isNumeric(val.charCodeAt(0)) ||
                                !isNumeric(val.charCodeAt(1)) ||
                                val.charCodeAt(3) <= 49) {
                                return;
                            }
                            val = val.charAt(0) + val.charAt(1) + Culture.dateSeparator +
                                '0' + val.charAt(3);
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    case 5: {
                        if (val.charAt(2) !== Culture.dateSeparator ||
                            !isNumeric(val.charCodeAt(0)) ||
                            !isNumeric(val.charCodeAt(1)) ||
                            !isNumeric(val.charCodeAt(3))) {
                            return;
                        }
                        break;
                    }
                    default: {
                        return;
                    }
                }
                input.val(val + Culture.dateSeparator);
            }
        };
        DateEditor.uiPickerZIndexWorkaround = function (input) {
            if (!(input === null || input === void 0 ? void 0 : input.closest('.ui-dialog').length))
                return;
            var dialogIndex = parseInt(input.closest('.ui-dialog').css('z-index'), 10);
            if (dialogIndex == null || isNaN(dialogIndex))
                return;
            setTimeout(function () {
                var widget = input.datepicker('widget');
                if (!(widget === null || widget === void 0 ? void 0 : widget.length))
                    return;
                var zIndex = parseInt(widget.css('z-index'));
                if (!isNaN(zIndex) && zIndex <= dialogIndex)
                    widget.css('z-index', dialogIndex + 1);
            }, 0);
        };
        var DateEditor_1;
        DateEditor.dateInputChange = function (e) {
            var _a, _b;
            if (Culture.dateOrder !== 'dmy') {
                return;
            }
            var input = $(e.target);
            if (!input.is(':input') || input.attr("type") == "date") {
                return;
            }
            var val = (_a = input.val()) !== null && _a !== void 0 ? _a : '';
            if (val.length >= 6 && /^[0-9]*$/g.test(val)) {
                input.val(val.substr(0, 2) + Culture.dateSeparator + val.substr(2, 2) + Culture.dateSeparator + val.substr(4));
            }
            val = (_b = input.val()) !== null && _b !== void 0 ? _b : '';
            if (val.length >= 5) {
                var d = parseDate(val);
                if (d && !isNaN(d.valueOf())) {
                    input.val(formatDate(d, null));
                }
            }
        };
        tslib.__decorate([
            exports.Decorators.option()
        ], DateEditor.prototype, "yearRange", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateEditor.prototype, "get_minValue", null);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateEditor.prototype, "get_maxValue", null);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateEditor.prototype, "get_maxDate", null);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateEditor.prototype, "get_sqlMinMax", null);
        DateEditor = DateEditor_1 = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.DateEditor', [IStringValue, IReadOnly]),
            exports.Decorators.element('<input type="text"/>')
        ], DateEditor);
        return DateEditor;
    }(Widget));
    function jQueryDatepickerInitialization() {
        var _a, _b;
        if (!((_b = (_a = $.datepicker) === null || _a === void 0 ? void 0 : _a.regional) === null || _b === void 0 ? void 0 : _b.en))
            return false;
        var order = Culture.dateOrder;
        var s = Culture.dateSeparator;
        var culture = ($('html').attr('lang') || 'en').toLowerCase();
        if (!$.datepicker.regional[culture]) {
            culture = culture.split('-')[0];
            if (!$.datepicker.regional[culture]) {
                culture = 'en';
            }
        }
        $.datepicker.setDefaults($.datepicker.regional['en']);
        $.datepicker.setDefaults($.datepicker.regional[culture]);
        $.datepicker.setDefaults({
            dateFormat: (order == 'mdy' ? 'mm' + s + 'dd' + s + 'yy' :
                (order == 'ymd' ? 'yy' + s + 'mm' + s + 'dd' :
                    'dd' + s + 'mm' + s + 'yy')),
            buttonImage: 'data:image/svg+xml,' + encodeURIComponent(datePickerIconSvg),
            buttonImageOnly: true,
            showOn: 'both',
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true
        });
        if ($.ui && $.ui.version <= '1.12.1') {
            $.datepicker.setDefaults({
                buttonImage: null,
                buttonImageOnly: false,
                buttonText: '<i class="fa fa-calendar"></i>'
            });
        }
        return true;
    }
    typeof $ !== "undefined" && $.fn && !jQueryDatepickerInitialization() && $(jQueryDatepickerInitialization);

    var DateTimeEditor = /** @class */ (function (_super) {
        tslib.__extends(DateTimeEditor, _super);
        function DateTimeEditor(input, opt) {
            var _this = this;
            var _a, _b, _c, _d, _e;
            _this = _super.call(this, input, opt) || this;
            input.addClass('s-DateTimeEditor');
            if (_this.options.inputOnly) {
                input.addClass('dateTimeQ');
                // just a basic input, usually read only display
            }
            // @ts-ignore
            else if (typeof flatpickr !== "undefined" && (DateEditor.useFlatpickr || !$.fn.datepicker || _this.options.seconds)) {
                input.addClass('dateTimeQ');
                // @ts-ignore
                flatpickr(input[0], _this.getFlatpickrOptions());
            }
            else if ((_a = $.fn) === null || _a === void 0 ? void 0 : _a.datepicker) {
                input.addClass('dateQ');
                input.datepicker({
                    showOn: 'button',
                    beforeShow: function () {
                        if (input.hasClass('readonly'))
                            return false;
                        DateEditor.uiPickerZIndexWorkaround(this.element);
                        return true;
                    },
                    yearRange: ((_b = _this.options.yearRange) !== null && _b !== void 0 ? _b : '-100:+50')
                });
                input.bind('change.' + _this.uniqueName, function (e) {
                    _this.lastSetValue = null;
                    DateEditor.dateInputChange(e);
                });
                _this.time = $('<select/>').addClass('editor s-DateTimeEditor time');
                var after = input.next('.ui-datepicker-trigger');
                if (after.length > 0) {
                    _this.time.insertAfter(after);
                }
                else {
                    after = input.prev('.ui-datepicker-trigger');
                    if (after.length > 0) {
                        _this.time.insertBefore(after);
                    }
                    else {
                        _this.time.insertAfter(input);
                    }
                }
                _this.time.on('change', function (e3) {
                    this.lastSetValue = null;
                    input.triggerHandler('change');
                });
                var timeOpt = DateTimeEditor_1.getTimeOptions(((_c = _this.options.startHour) !== null && _c !== void 0 ? _c : 0), 0, ((_d = _this.options.endHour) !== null && _d !== void 0 ? _d : 23), 59, ((_e = _this.options.intervalMinutes) !== null && _e !== void 0 ? _e : 5));
                for (var _i = 0, timeOpt_1 = timeOpt; _i < timeOpt_1.length; _i++) {
                    var t = timeOpt_1[_i];
                    addOption(_this.time, t, t);
                }
                addValidationRule(input, _this.uniqueName, function (e1) {
                    var value = _this.get_value();
                    if (isEmptyOrNull(value)) {
                        return null;
                    }
                    if (!isEmptyOrNull(_this.get_minValue()) && Invariant.stringCompare(value, _this.get_minValue()) < 0) {
                        return format(localText('Validation.MinDate'), formatDate(_this.get_minValue(), null));
                    }
                    if (!isEmptyOrNull(_this.get_maxValue()) && Invariant.stringCompare(value, _this.get_maxValue()) > 0) {
                        return format(localText('Validation.MaxDate'), formatDate(_this.get_maxValue(), null));
                    }
                    return null;
                });
            }
            else
                input.attr('type', 'datetime').addClass('dateTimeQ');
            input.bind('keyup.' + _this.uniqueName, function (e) {
                if (_this.get_readOnly())
                    return;
                if (_this.time) {
                    if (e.which === 32) {
                        if (_this.get_valueAsDate() !== new Date()) {
                            _this.set_valueAsDate(new Date());
                            _this.element.trigger('change');
                        }
                    }
                    else {
                        var before = _this.element.val();
                        DateEditor.dateInputKeyup(e);
                        if (before != _this.element.val())
                            _this.lastSetValue = null;
                    }
                }
            });
            _this.set_sqlMinMax(true);
            if (!_this.options.inputOnly) {
                $("<i class='inplace-button inplace-now'><b></b></div>")
                    .attr('title', _this.getInplaceNowText())
                    .insertAfter(_this.time).click(function (e2) {
                    if (_this.element.hasClass('readonly')) {
                        return;
                    }
                    _this.lastSetValue = null;
                    _this.set_valueAsDate(new Date());
                    input.triggerHandler('change');
                });
            }
            return _this;
        }
        DateTimeEditor_1 = DateTimeEditor;
        DateTimeEditor.prototype.getFlatpickrOptions = function () {
            var _this = this;
            var _a;
            return {
                clickOpens: true,
                allowInput: true,
                enableTime: true,
                time_24hr: true,
                enableSeconds: !!this.options.seconds,
                minuteIncrement: (_a = this.options.intervalMinutes) !== null && _a !== void 0 ? _a : 5,
                dateFormat: Culture.dateOrder.split('').join(Culture.dateSeparator).replace('y', 'Y') + " H:i" + (this.options.seconds ? ":S" : ""),
                onChange: function () {
                    _this.lastSetValue = null;
                    _this.element && _this.element.triggerHandler('change');
                }
            };
        };
        DateTimeEditor.prototype.get_value = function () {
            var value = this.element.val().trim();
            if (value != null && value.length === 0) {
                return null;
            }
            var result;
            if (this.time) {
                var datePart = formatDate(value, 'yyyy-MM-dd');
                var timePart = this.time.val();
                result = datePart + 'T' + timePart + ':00.000';
            }
            else
                result = formatDate(parseDate(this.element.val()), "yyyy-MM-ddTHH:mm:ss.fff");
            if (this.options.useUtc)
                result = formatISODateTimeUTC(parseISODateTime(result));
            if (this.lastSetValue != null &&
                this.lastSetValueGet == result)
                return this.lastSetValue;
            return result;
        };
        Object.defineProperty(DateTimeEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        DateTimeEditor.prototype.set_value = function (value) {
            var _a;
            if (isEmptyOrNull(value)) {
                this.element.val('');
                this.time && this.time.val('00:00');
            }
            else if (value.toLowerCase() === 'today') {
                if (this.time) {
                    this.element.val(formatDate(today(), null));
                    this.time.val('00:00');
                }
                else {
                    this.element.val(this.getDisplayFormat());
                }
            }
            else {
                var val = ((value.toLowerCase() === 'now') ? new Date() : parseISODateTime(value));
                if (this.time) {
                    val = DateTimeEditor_1.roundToMinutes(val, ((_a = this.options.intervalMinutes) !== null && _a !== void 0 ? _a : 5));
                    this.element.val(formatDate(val, null));
                    this.time.val(formatDate(val, 'HH:mm'));
                }
                else
                    this.element.val(formatDate(val, this.getDisplayFormat()));
            }
            this.lastSetValue = null;
            if (!isEmptyOrNull(value) && value.toLowerCase() != 'today' && value.toLowerCase() != 'now') {
                this.lastSetValueGet = this.get_value();
                this.lastSetValue = value;
            }
        };
        DateTimeEditor.prototype.getInplaceNowText = function () {
            var _a;
            return (_a = tryGetText('Controls.DateTimeEditor.SetToNow')) !== null && _a !== void 0 ? _a : 'set to now';
        };
        DateTimeEditor.prototype.getDisplayFormat = function () {
            return (this.options.seconds ? Culture.dateTimeFormat : Culture.dateTimeFormat.replace(':ss', ''));
        };
        DateTimeEditor.prototype.get_valueAsDate = function () {
            if (isEmptyOrNull(this.get_value())) {
                return null;
            }
            return parseISODateTime(this.get_value());
        };
        Object.defineProperty(DateTimeEditor.prototype, "valueAsDate", {
            get: function () {
                return this.get_valueAsDate();
            },
            set: function (value) {
                this.set_valueAsDate(value);
            },
            enumerable: false,
            configurable: true
        });
        DateTimeEditor.prototype.set_valueAsDate = function (value) {
            if (value == null) {
                this.set_value(null);
            }
            this.set_value(formatDate(value, 'yyyy-MM-ddTHH:mm' + (this.options.seconds ? ':ss' : '')));
        };
        DateTimeEditor.prototype.get_minValue = function () {
            return this.minValue;
        };
        DateTimeEditor.prototype.set_minValue = function (value) {
            this.minValue = value;
        };
        DateTimeEditor.prototype.get_maxValue = function () {
            return this.maxValue;
        };
        DateTimeEditor.prototype.set_maxValue = function (value) {
            this.maxValue = value;
        };
        DateTimeEditor.prototype.get_minDate = function () {
            return parseISODateTime(this.get_minValue());
        };
        DateTimeEditor.prototype.set_minDate = function (value) {
            this.set_minValue(formatDate(value, 'yyyy-MM-ddTHH:mm:ss'));
        };
        DateTimeEditor.prototype.get_maxDate = function () {
            return parseISODateTime(this.get_maxValue());
        };
        DateTimeEditor.prototype.set_maxDate = function (value) {
            this.set_maxValue(formatDate(value, 'yyyy-MM-ddTHH:mm:ss'));
        };
        DateTimeEditor.prototype.get_sqlMinMax = function () {
            return this.get_minValue() === '1753-01-01' && this.get_maxValue() === '9999-12-31';
        };
        DateTimeEditor.prototype.set_sqlMinMax = function (value) {
            if (value) {
                this.set_minValue('1753-01-01');
                this.set_maxValue('9999-12-31');
            }
            else {
                this.set_minValue(null);
                this.set_maxValue(null);
            }
        };
        DateTimeEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        DateTimeEditor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                if (value) {
                    this.element.addClass('readonly').attr('readonly', 'readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '0.1');
                    this.element.nextAll('.inplace-now').css('opacity', '0.1');
                }
                else {
                    this.element.removeClass('readonly').removeAttr('readonly');
                    this.element.nextAll('.ui-datepicker-trigger').css('opacity', '1');
                    this.element.nextAll('.inplace-now').css('opacity', '1');
                }
                this.time && exports.EditorUtils.setReadonly(this.time, value);
            }
        };
        DateTimeEditor.roundToMinutes = function (date, minutesStep) {
            date = new Date(date.getTime());
            var m = trunc(round(date.getMinutes() / minutesStep) * minutesStep);
            date.setMinutes(m);
            date.setSeconds(0);
            date.setMilliseconds(0);
            return date;
        };
        var DateTimeEditor_1;
        DateTimeEditor.getTimeOptions = function (fromHour, fromMin, toHour, toMin, stepMins) {
            var list = [];
            if (toHour >= 23) {
                toHour = 23;
            }
            if (toMin >= 60) {
                toMin = 59;
            }
            var hour = fromHour;
            var min = fromMin;
            while (true) {
                if (hour > toHour || hour === toHour && min > toMin) {
                    break;
                }
                var t = ((hour >= 10) ? '' : '0') + hour + ':' + ((min >= 10) ? '' : '0') + min;
                list.push(t);
                min += stepMins;
                if (min >= 60) {
                    min -= 60;
                    hour++;
                }
            }
            return list;
        };
        tslib.__decorate([
            exports.Decorators.option()
        ], DateTimeEditor.prototype, "get_minValue", null);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateTimeEditor.prototype, "get_maxValue", null);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateTimeEditor.prototype, "get_maxDate", null);
        tslib.__decorate([
            exports.Decorators.option()
        ], DateTimeEditor.prototype, "get_sqlMinMax", null);
        DateTimeEditor = DateTimeEditor_1 = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.DateTimeEditor', [IStringValue, IReadOnly]),
            exports.Decorators.element('<input type="text"/>')
        ], DateTimeEditor);
        return DateTimeEditor;
    }(Widget));

    var TimeEditor = /** @class */ (function (_super) {
        tslib.__extends(TimeEditor, _super);
        function TimeEditor(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            input.addClass('editor s-TimeEditor hour');
            if (!_this.options.noEmptyOption) {
                addOption(input, '', '--');
            }
            for (var h = (_this.options.startHour || 0); h <= (_this.options.endHour || 23); h++) {
                addOption(input, h.toString(), ((h < 10) ? ('0' + h) : h.toString()));
            }
            _this.minutes = $('<select/>').addClass('editor s-TimeEditor minute').insertAfter(input);
            _this.minutes.change(function () { return _this.element.trigger("change"); });
            for (var m = 0; m <= 59; m += (_this.options.intervalMinutes || 5)) {
                addOption(_this.minutes, m.toString(), ((m < 10) ? ('0' + m) : m.toString()));
            }
            return _this;
        }
        Object.defineProperty(TimeEditor.prototype, "value", {
            get: function () {
                var hour = toId(this.element.val());
                var minute = toId(this.minutes.val());
                if (hour == null || minute == null) {
                    return null;
                }
                return hour * 60 + minute;
            },
            set: function (value) {
                if (!value) {
                    if (this.options.noEmptyOption) {
                        this.element.val(this.options.startHour);
                        this.minutes.val('0');
                    }
                    else {
                        this.element.val('');
                        this.minutes.val('0');
                    }
                }
                else {
                    this.element.val(Math.floor(value / 60).toString());
                    this.minutes.val(value % 60);
                }
            },
            enumerable: false,
            configurable: true
        });
        TimeEditor.prototype.get_value = function () {
            return this.value;
        };
        TimeEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        TimeEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        TimeEditor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                if (value) {
                    this.element.addClass('readonly').attr('readonly', 'readonly');
                }
                else {
                    this.element.removeClass('readonly').removeAttr('readonly');
                }
                exports.EditorUtils.setReadonly(this.minutes, value);
            }
        };
        TimeEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.TimeEditor', [IDoubleValue, IReadOnly]),
            exports.Decorators.element("<select />")
        ], TimeEditor);
        return TimeEditor;
    }(Widget));

    var EmailEditor = /** @class */ (function (_super) {
        tslib.__extends(EmailEditor, _super);
        function EmailEditor(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            EmailEditor_1.registerValidationMethods();
            input.addClass('emailuser');
            var spanAt = $('<span/>').text('@').addClass('emailat').insertAfter(input);
            var domain = $('<input type="text"/>').addClass('emaildomain').insertAfter(spanAt);
            domain.bind('blur.' + _this.uniqueName, function () {
                var validator = domain.closest('form').data('validator');
                if (validator != null) {
                    validator.element(input[0]);
                }
            });
            if (!isEmptyOrNull(_this.options.domain)) {
                domain.val(_this.options.domain);
            }
            if (_this.options.readOnlyDomain) {
                domain.attr('readonly', 'readonly').addClass('disabled').attr('tabindex', '-1');
            }
            input.bind('keypress.' + _this.uniqueName, function (e) {
                if (e.which === 64) {
                    e.preventDefault();
                    if (!_this.options.readOnlyDomain) {
                        domain.focus();
                        domain.select();
                    }
                }
            });
            domain.bind('keypress.' + _this.uniqueName, function (e1) {
                if (e1.which === 64) {
                    e1.preventDefault();
                }
            });
            if (!_this.options.readOnlyDomain) {
                input.change(function (e2) { return _this.set_value(input.val()); });
            }
            return _this;
        }
        EmailEditor_1 = EmailEditor;
        EmailEditor.registerValidationMethods = function () {
            var _a;
            if (!$.validator || !$.validator.methods || $.validator.methods['emailuser'] != null)
                return;
            $.validator.addMethod('emailuser', function (value, element) {
                var domain = $(element).nextAll('.emaildomain');
                if (domain.length > 0 && domain.attr('readonly') == null) {
                    if (this.optional(element) && this.optional(domain[0])) {
                        return true;
                    }
                    return $.validator.methods.email.call(this, value + '@' + domain.val(), element);
                }
                else {
                    return $.validator.methods.email.call(this, value + '@dummy.com', element);
                }
            }, (_a = tryGetText("Validation.Email")) !== null && _a !== void 0 ? _a : $.validator.messages.email);
        };
        EmailEditor.prototype.get_value = function () {
            var domain = this.element.nextAll('.emaildomain');
            var value = this.element.val();
            var domainValue = domain.val();
            if (isEmptyOrNull(value)) {
                if (this.options.readOnlyDomain || isEmptyOrNull(domainValue)) {
                    return '';
                }
                return '@' + domainValue;
            }
            return value + '@' + domainValue;
        };
        Object.defineProperty(EmailEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        EmailEditor.prototype.set_value = function (value) {
            var domain = this.element.nextAll('.emaildomain');
            value = trimToNull(value);
            if (value == null) {
                if (!this.options.readOnlyDomain)
                    domain.val('');
                this.element.val('');
            }
            else {
                var parts = value.split('@');
                if (parts.length > 1) {
                    if (!this.options.readOnlyDomain) {
                        domain.val(parts[1]);
                        this.element.val(parts[0]);
                    }
                    else if (!isEmptyOrNull(this.options.domain)) {
                        if (parts[1] !== this.options.domain)
                            this.element.val(value);
                        else
                            this.element.val(parts[0]);
                    }
                    else
                        this.element.val(parts[0]);
                }
                else
                    this.element.val(parts[0]);
            }
        };
        EmailEditor.prototype.get_readOnly = function () {
            var domain = this.element.nextAll('.emaildomain');
            return !(this.element.attr('readonly') == null &&
                (!this.options.readOnlyDomain || domain.attr('readonly') == null));
        };
        EmailEditor.prototype.set_readOnly = function (value) {
            var domain = this.element.nextAll('.emaildomain');
            if (value) {
                this.element.attr('readonly', 'readonly').addClass('readonly');
                if (!this.options.readOnlyDomain) {
                    domain.attr('readonly', 'readonly').addClass('readonly');
                }
            }
            else {
                this.element.removeAttr('readonly').removeClass('readonly');
                if (!this.options.readOnlyDomain) {
                    domain.removeAttr('readonly').removeClass('readonly');
                }
            }
        };
        var EmailEditor_1;
        EmailEditor = EmailEditor_1 = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.EmailEditor', [IStringValue, IReadOnly]),
            exports.Decorators.element('<input type="text"/>')
        ], EmailEditor);
        return EmailEditor;
    }(Widget));

    var EmailAddressEditor = /** @class */ (function (_super) {
        tslib.__extends(EmailAddressEditor, _super);
        function EmailAddressEditor(input) {
            var _this = _super.call(this, input) || this;
            input.attr('type', 'email')
                .addClass('email');
            return _this;
        }
        EmailAddressEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.EmailAddressEditor')
        ], EmailAddressEditor);
        return EmailAddressEditor;
    }(StringEditor));

    var URLEditor = /** @class */ (function (_super) {
        tslib.__extends(URLEditor, _super);
        function URLEditor(input) {
            var _this = _super.call(this, input) || this;
            input.addClass("url").attr("title", "URL should be entered in format: 'http://www.site.com/page'.");
            input.on("blur." + _this.uniqueName, function (e) {
                var validator = input.closest("form").data("validator");
                if (validator == null)
                    return;
                if (!input.hasClass("error"))
                    return;
                var value = trimToNull(input.val());
                if (!value)
                    return;
                value = "http://" + value;
                if ($.validator.methods['url'].call(validator, value, input[0]) == true) {
                    input.val(value);
                    validator.element(input);
                }
            });
            return _this;
        }
        URLEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.URLEditor', [IStringValue])
        ], URLEditor);
        return URLEditor;
    }(StringEditor));

    var RadioButtonEditor = /** @class */ (function (_super) {
        tslib.__extends(RadioButtonEditor, _super);
        function RadioButtonEditor(input, opt) {
            var _this = this;
            var _a;
            _this = _super.call(this, input, opt) || this;
            if (isEmptyOrNull(_this.options.enumKey) &&
                _this.options.enumType == null &&
                isEmptyOrNull(_this.options.lookupKey)) {
                return _this;
            }
            if (!isEmptyOrNull(_this.options.lookupKey)) {
                var lookup = getLookup(_this.options.lookupKey);
                for (var _i = 0, _b = lookup.items; _i < _b.length; _i++) {
                    var item = _b[_i];
                    var textValue = item[lookup.textField];
                    var text = (textValue == null ? '' : textValue.toString());
                    var idValue = item[lookup.idField];
                    var id = (idValue == null ? '' : idValue.toString());
                    _this.addRadio(id, text);
                }
            }
            else {
                var enumType = _this.options.enumType || exports.EnumTypeRegistry.get(_this.options.enumKey);
                var enumKey = _this.options.enumKey;
                if (enumKey == null && enumType != null) {
                    var enumKeyAttr = getAttributes(enumType, EnumKeyAttribute, false);
                    if (enumKeyAttr.length > 0) {
                        enumKey = enumKeyAttr[0].value;
                    }
                }
                var values = exports.Enum.getValues(enumType);
                for (var _c = 0, values_1 = values; _c < values_1.length; _c++) {
                    var x = values_1[_c];
                    var name = exports.Enum.toString(enumType, x);
                    _this.addRadio(x.toString(), (_a = tryGetText('Enums.' + enumKey + '.' + name)) !== null && _a !== void 0 ? _a : name);
                }
            }
            return _this;
        }
        RadioButtonEditor.prototype.addRadio = function (value, text) {
            var label = $('<label/>').text(text);
            $('<input type="radio"/>').attr('name', this.uniqueName)
                .attr('id', this.uniqueName + '_' + value)
                .attr('value', value).prependTo(label);
            label.appendTo(this.element);
        };
        RadioButtonEditor.prototype.get_value = function () {
            return this.element.find('input:checked').first().val();
        };
        Object.defineProperty(RadioButtonEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        RadioButtonEditor.prototype.set_value = function (value) {
            if (value !== this.get_value()) {
                var inputs = this.element.find('input');
                var checks = inputs.filter(':checked');
                if (checks.length > 0) {
                    checks[0].checked = false;
                }
                if (!isEmptyOrNull(value)) {
                    checks = inputs.filter('[value=' + value + ']');
                    if (checks.length > 0) {
                        checks[0].checked = true;
                    }
                }
            }
        };
        RadioButtonEditor.prototype.get_readOnly = function () {
            return this.element.attr('disabled') != null;
        };
        RadioButtonEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.element.attr('disabled', 'disabled')
                        .find('input').attr('disabled', 'disabled');
                }
                else {
                    this.element.removeAttr('disabled')
                        .find('input').removeAttr('disabled');
                }
            }
        };
        RadioButtonEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.RadioButtonEditor', [IStringValue, IReadOnly]),
            exports.Decorators.element('<div/>')
        ], RadioButtonEditor);
        return RadioButtonEditor;
    }(Widget));

    var _Select2 = typeof Select2 !== "undefined" ? Select2 : undefined;

    var Select2Editor = /** @class */ (function (_super) {
        tslib.__extends(Select2Editor, _super);
        function Select2Editor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this._items = [];
            _this._itemById = {};
            var emptyItemText = _this.emptyItemText();
            if (emptyItemText != null) {
                hidden.attr('placeholder', emptyItemText);
            }
            var select2Options = _this.getSelect2Options();
            hidden.select2(select2Options);
            hidden.attr('type', 'text');
            // for jquery validate to work
            hidden.on('change.' + _this.uniqueName, function (e, valueSet) {
                if (valueSet !== true && hidden.closest('form').data('validator'))
                    hidden.valid();
            });
            _this.setCascadeFrom(_this.options.cascadeFrom);
            if (_this.useInplaceAdd())
                _this.addInplaceCreate(localText('Controls.SelectEditor.InplaceAdd'), null);
            return _this;
        }
        Select2Editor_1 = Select2Editor;
        Select2Editor.prototype.destroy = function () {
            var _a, _b, _c, _d;
            (_b = (_a = this.initSelectionPromise) === null || _a === void 0 ? void 0 : _a.abort) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.abortPendingQuery();
            (_d = (_c = this.element) === null || _c === void 0 ? void 0 : _c.select2) === null || _d === void 0 ? void 0 : _d.call(_c, 'destroy');
            _super.prototype.destroy.call(this);
        };
        Select2Editor.prototype.hasAsyncSource = function () {
            return false;
        };
        Select2Editor.prototype.asyncSearch = function (query, results) {
            results({
                items: [],
                more: false
            });
            return null;
        };
        Select2Editor.prototype.getTypeDelay = function () {
            var _a;
            return ((_a = this.options['typeDelay']) !== null && _a !== void 0 ? _a : 200);
        };
        Select2Editor.prototype.emptyItemText = function () {
            var _a;
            return (_a = this.element.attr('placeholder')) !== null && _a !== void 0 ? _a : localText('Controls.SelectEditor.EmptyItemText');
        };
        Select2Editor.prototype.getPageSize = function () {
            var _a;
            return (_a = this.options['pageSize']) !== null && _a !== void 0 ? _a : 100;
        };
        Select2Editor.prototype.getIdField = function () {
            return this.options['idField'];
        };
        Select2Editor.prototype.itemId = function (item) {
            var value = item[this.getIdField()];
            if (value == null)
                return '';
            return value.toString();
        };
        Select2Editor.prototype.getTextField = function () {
            var _a;
            return (_a = this.options['textField']) !== null && _a !== void 0 ? _a : this.getIdField();
        };
        Select2Editor.prototype.itemText = function (item) {
            var value = item[this.getTextField()];
            if (value == null)
                return '';
            return value.toString();
        };
        Select2Editor.prototype.itemDisabled = function (item) {
            return false;
        };
        Select2Editor.prototype.mapItem = function (item) {
            return {
                id: this.itemId(item),
                text: this.itemText(item),
                disabled: this.itemDisabled(item),
                source: item
            };
        };
        Select2Editor.prototype.mapItems = function (items) {
            return items.map(this.mapItem.bind(this));
        };
        Select2Editor.prototype.allowClear = function () {
            return this.options.allowClear != null ?
                !!this.options.allowClear : this.emptyItemText() != null;
        };
        Select2Editor.prototype.isMultiple = function () {
            return !!this.options.multiple;
        };
        Select2Editor.prototype.abortPendingQuery = function () {
            var _a, _b;
            (_b = (_a = this.queryPromise) === null || _a === void 0 ? void 0 : _a.abort) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.queryPromise = null;
            if (this.typeTimeout) {
                clearTimeout(this.typeTimeout);
                this.typeTimeout = null;
            }
        };
        Select2Editor.prototype.getSelect2Options = function () {
            var _this = this;
            var emptyItemText = this.emptyItemText();
            var opt = {
                multiple: this.isMultiple(),
                placeHolder: (!isEmptyOrNull(emptyItemText) ? emptyItemText : null),
                allowClear: this.allowClear(),
                createSearchChoicePosition: 'bottom'
            };
            if (this.hasAsyncSource()) {
                opt.query = function (query) {
                    var _a, _b;
                    var pageSize = _this.getPageSize();
                    var searchQuery = {
                        searchTerm: trimToNull(query.term),
                        skip: (query.page - 1) * pageSize,
                        take: pageSize,
                        checkMore: true
                    };
                    _this.abortPendingQuery();
                    var select2 = $(_this.element).data('select2');
                    (_b = (_a = select2 === null || select2 === void 0 ? void 0 : select2.search) === null || _a === void 0 ? void 0 : _a.removeClass) === null || _b === void 0 ? void 0 : _b.call(_a, 'select2-active').parent().removeClass('select2-active');
                    _this.typeTimeout = setTimeout(function () {
                        var _a, _b, _c, _d, _e;
                        _this.abortPendingQuery();
                        (_b = (_a = select2 === null || select2 === void 0 ? void 0 : select2.search) === null || _a === void 0 ? void 0 : _a.addClass) === null || _b === void 0 ? void 0 : _b.call(_a, 'select2-active').parent().addClass('select2-active');
                        _this.queryPromise = _this.asyncSearch(searchQuery, function (result) {
                            var _a, _b;
                            (_b = (_a = select2 === null || select2 === void 0 ? void 0 : select2.search) === null || _a === void 0 ? void 0 : _a.removeClass) === null || _b === void 0 ? void 0 : _b.call(_a, 'select2-active').parent().removeClass('select2-active');
                            _this.queryPromise = null;
                            query.callback({
                                results: _this.mapItems(result.items),
                                more: result.more
                            });
                        });
                        (_e = (((_c = _this.queryPromise) === null || _c === void 0 ? void 0 : _c.catch) || ((_d = _this.queryPromise) === null || _d === void 0 ? void 0 : _d.fail))) === null || _e === void 0 ? void 0 : _e.call(_this.queryPromise, function () {
                            var _a, _b;
                            _this.queryPromise = null;
                            (_b = (_a = select2 === null || select2 === void 0 ? void 0 : select2.search) === null || _a === void 0 ? void 0 : _a.removeClass) === null || _b === void 0 ? void 0 : _b.call(_a, 'select2-active').parent().removeClass('select2-active');
                        });
                    }, !query.term ? 0 : _this.getTypeDelay());
                };
                opt.initSelection = function (element, callback) {
                    var _a, _b, _c;
                    var val = element.val();
                    if (val == null || val == '') {
                        callback(null);
                        return;
                    }
                    var isMultiple = _this.isMultiple();
                    var idList = isMultiple ? val.split(',') : [val];
                    var searchQuery = {
                        idList: idList
                    };
                    (_b = (_a = _this.initSelectionPromise) === null || _a === void 0 ? void 0 : _a.abort) === null || _b === void 0 ? void 0 : _b.call(_a);
                    _this.initSelectionPromise = _this.asyncSearch(searchQuery, function (result) {
                        _this.initSelectionPromise = null;
                        if (isMultiple) {
                            var items = (result.items || []).map(function (x) { return _this.mapItem(x); });
                            _this._itemById = _this._itemById || {};
                            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                                var item = items_1[_i];
                                _this._itemById[item.id] = item;
                            }
                            if (_this.isAutoComplete &&
                                items.length != idList.length) {
                                for (var _a = 0, idList_1 = idList; _a < idList_1.length; _a++) {
                                    var v = idList_1[_a];
                                    if (!any(items, function (z) { return z.id == v; })) {
                                        items.push({
                                            id: v,
                                            text: v
                                        });
                                    }
                                }
                            }
                            callback(items);
                        }
                        else if (!result.items || !result.items.length) {
                            if (_this.isAutoComplete) {
                                callback({
                                    id: val,
                                    text: val
                                });
                            }
                            else
                                callback(null);
                        }
                        else {
                            var item = _this.mapItem(result.items[0]);
                            _this._itemById = _this._itemById || {};
                            _this._itemById[item.id] = item;
                            callback(item);
                        }
                    });
                    (_c = (_this.initSelectionPromise.catch || _this.initSelectionPromise.fail)) === null || _c === void 0 ? void 0 : _c.call(_this.initSelectionPromise, function () {
                        _this.initSelectionPromise = null;
                    });
                };
            }
            else {
                opt.data = this._items;
                opt.query = function (query) {
                    var items = Select2Editor_1.filterByText(_this._items, function (x) { return x.text; }, query.term);
                    var pageSize = _this.getPageSize();
                    query.callback({
                        results: items.slice((query.page - 1) * pageSize, query.page * pageSize),
                        more: items.length >= query.page * pageSize
                    });
                };
                opt.initSelection = function (element, callback) {
                    var val = element.val();
                    var isAutoComplete = _this.isAutoComplete();
                    if (_this.isMultiple()) {
                        var list = [];
                        for (var _i = 0, _a = val.split(','); _i < _a.length; _i++) {
                            var z = _a[_i];
                            var item2 = _this._itemById[z];
                            if (item2 == null && isAutoComplete) {
                                item2 = { id: z, text: z };
                                _this.addItem(item2);
                            }
                            if (item2 != null) {
                                list.push(item2);
                            }
                        }
                        callback(list);
                        return;
                    }
                    var it = _this._itemById[val];
                    if (it == null && isAutoComplete) {
                        it = { id: val, text: val };
                        _this.addItem(it);
                    }
                    callback(it);
                };
            }
            if (this.options.minimumResultsForSearch != null)
                opt.minimumResultsForSearch = this.options.minimumResultsForSearch;
            if (this.isAutoComplete() || this.useInplaceAdd())
                opt.createSearchChoice = this.getCreateSearchChoice(null);
            return opt;
        };
        Select2Editor.prototype.get_delimited = function () {
            return !!this.options.delimited;
        };
        Object.defineProperty(Select2Editor.prototype, "items", {
            get: function () {
                if (this.hasAsyncSource())
                    throw new Error("Can't read items property of an async select editor!");
                return this._items || [];
            },
            set: function (value) {
                if (this.hasAsyncSource())
                    throw new Error("Can't set items of an async select editor!");
                this._items = value || [];
                this._itemById = {};
                for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this._itemById[item.id] = item;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Select2Editor.prototype, "itemById", {
            get: function () {
                if (this.hasAsyncSource())
                    throw new Error("Can't read items property of an async select editor!");
                return this._itemById;
            },
            set: function (value) {
                if (this.hasAsyncSource())
                    throw new Error("Can't set itemById of an async select editor!");
                this._itemById = value || {};
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.clearItems = function () {
            if (this.hasAsyncSource())
                throw new Error("Can't clear items of an async select editor!");
            this._items.length = 0;
            this._itemById = {};
        };
        Select2Editor.prototype.addItem = function (item) {
            if (this.hasAsyncSource())
                throw new Error("Can't add item to an async select editor!");
            this._items.push(item);
            this._itemById[item.id] = item;
        };
        Select2Editor.prototype.addOption = function (key, text, source, disabled) {
            this.addItem({
                id: key,
                text: text,
                source: source,
                disabled: disabled
            });
        };
        Select2Editor.prototype.addInplaceCreate = function (addTitle, editTitle) {
            var _this = this;
            var self = this;
            addTitle = (addTitle !== null && addTitle !== void 0 ? addTitle : localText('Controls.SelectEditor.InplaceAdd'));
            editTitle = (editTitle !== null && editTitle !== void 0 ? editTitle : localText('Controls.SelectEditor.InplaceEdit'));
            var inplaceButton = $('<a><b/></a>')
                .addClass('inplace-button inplace-create')
                .attr('title', addTitle)
                .insertAfter(this.element).click(function (e) {
                self.inplaceCreateClick(e);
            });
            this.get_select2Container().add(this.element).addClass('has-inplace-button');
            this.element.change(function () {
                var isNew = _this.isMultiple() || isEmptyOrNull(_this.get_value());
                inplaceButton.attr('title', (isNew ? addTitle : editTitle)).toggleClass('edit', !isNew);
            });
            this.element.change(function (e, valueSet) {
                if (valueSet === true)
                    return;
                if (_this.isMultiple()) {
                    var values = _this.get_values();
                    if (values.length > 0 && values[values.length - 1] == (-2147483648).toString()) {
                        _this.set_values(values.slice(0, values.length - 1));
                        _this.inplaceCreateClick(e);
                    }
                }
                else if (_this.get_value() == (-2147483648).toString()) {
                    _this.set_value(null);
                    _this.inplaceCreateClick(e);
                }
            });
            if (this.isMultiple()) {
                this.get_select2Container().on('dblclick.' + this.uniqueName, '.select2-search-choice', function (e3) {
                    var q = $(e3.target);
                    if (!q.hasClass('select2-search-choice')) {
                        q = q.closest('.select2-search-choice');
                    }
                    var index = q.index();
                    var values1 = _this.get_values();
                    if (index < 0 || index >= _this.get_values().length) {
                        return;
                    }
                    e3['editItem'] = values1[index];
                    _this.inplaceCreateClick(e3);
                });
            }
        };
        Select2Editor.prototype.useInplaceAdd = function () {
            return !this.isAutoComplete() &&
                this.options.inplaceAdd &&
                (this.options.inplaceAddPermission == null ||
                    exports.Authorization.hasPermission(this.options.inplaceAddPermission));
        };
        Select2Editor.prototype.isAutoComplete = function () {
            return !!this.options.autoComplete;
        };
        Select2Editor.prototype.getCreateSearchChoice = function (getName) {
            var _this = this;
            return function (s) {
                var _a;
                _this.lastCreateTerm = s;
                s = ((_a = _Select2.util.stripDiacritics(s)) !== null && _a !== void 0 ? _a : '').toLowerCase();
                if (isTrimmedEmpty(s)) {
                    return null;
                }
                if (any(_this._items || [], function (x) {
                    var text = getName ? getName(x.source) : x.text;
                    return _Select2.util.stripDiacritics((text !== null && text !== void 0 ? text : '')).toLowerCase() == s;
                }))
                    return null;
                if (!any(_this._items || [], function (x1) {
                    var _a;
                    return ((_a = _Select2.util.stripDiacritics(x1.text)) !== null && _a !== void 0 ? _a : '').toLowerCase().indexOf(s) !== -1;
                })) {
                    if (_this.isAutoComplete()) {
                        return {
                            id: _this.lastCreateTerm,
                            text: _this.lastCreateTerm
                        };
                    }
                    return {
                        id: (-2147483648).toString(),
                        text: localText('Controls.SelectEditor.NoResultsClickToDefine')
                    };
                }
                if (_this.isAutoComplete()) {
                    return {
                        id: _this.lastCreateTerm,
                        text: _this.lastCreateTerm
                    };
                }
                return {
                    id: (-2147483648).toString(),
                    text: localText('Controls.SelectEditor.ClickToDefine')
                };
            };
        };
        Select2Editor.prototype.setEditValue = function (source, property) {
            var val = source[property.name];
            if (Array.isArray(val)) {
                this.set_values(val);
            }
            else {
                this.set_value((val == null ? null : val.toString()));
            }
        };
        Select2Editor.prototype.getEditValue = function (property, target) {
            if (!this.isMultiple() || this.get_delimited()) {
                target[property.name] = this.get_value();
            }
            else {
                target[property.name] = this.get_values();
            }
        };
        Select2Editor.prototype.get_select2Container = function () {
            return this.element.prevAll('.select2-container');
        };
        Select2Editor.prototype.get_items = function () {
            return this.items;
        };
        Select2Editor.prototype.get_itemByKey = function () {
            return this.itemById;
        };
        Select2Editor.filterByText = function (items, getText, term) {
            if (term == null || term.length == 0)
                return items;
            term = _Select2.util.stripDiacritics(term).toUpperCase();
            var contains = [];
            function filter(item) {
                var text = getText(item);
                if (text == null || !text.length)
                    return false;
                text = _Select2.util.stripDiacritics(text).toUpperCase();
                if (startsWith(text, term))
                    return true;
                if (text.indexOf(term) >= 0)
                    contains.push(item);
                return false;
            }
            return items.filter(filter).concat(contains);
        };
        Select2Editor.prototype.get_value = function () {
            var val;
            if (this.element.data('select2')) {
                val = this.element.select2('val');
                if (val != null && Array.isArray(val)) {
                    return val.join(',');
                }
            }
            else
                val = this.element.val();
            return val;
        };
        Object.defineProperty(Select2Editor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_value = function (value) {
            if (value != this.get_value()) {
                var val = value;
                if (!isEmptyOrNull(value) && this.isMultiple()) {
                    val = value.split(String.fromCharCode(44)).map(function (x) {
                        return trimToNull(x);
                    }).filter(function (x1) {
                        return x1 != null;
                    });
                }
                var el = this.element;
                el.select2('val', val);
                el.data('select2-change-triggered', true);
                try {
                    el.triggerHandler('change', [true]); // valueSet: true
                }
                finally {
                    el.data('select2-change-triggered', false);
                }
                this.updateInplaceReadOnly();
            }
        };
        Object.defineProperty(Select2Editor.prototype, "selectedItem", {
            get: function () {
                var selectedValue = this.get_value();
                if (selectedValue && this._itemById) {
                    var item = this._itemById[selectedValue];
                    if (item)
                        return item.source;
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Select2Editor.prototype, "selectedItems", {
            get: function () {
                var selectedValues = this.values;
                var result = [];
                for (var _i = 0, selectedValues_1 = selectedValues; _i < selectedValues_1.length; _i++) {
                    var value = selectedValues_1[_i];
                    if (value && this._itemById) {
                        var item = this._itemById[value];
                        if (item && item.source)
                            result.push(item.source);
                        else
                            result.push(null);
                    }
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.get_values = function () {
            var val = this.element.select2('val');
            if (val == null) {
                return [];
            }
            if (Array.isArray(val)) {
                return val;
            }
            var str = val;
            if (isEmptyOrNull(str)) {
                return [];
            }
            return [str];
        };
        Object.defineProperty(Select2Editor.prototype, "values", {
            get: function () {
                return this.get_values();
            },
            set: function (value) {
                this.set_values(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_values = function (value) {
            if (value == null || value.length === 0) {
                this.set_value(null);
                return;
            }
            this.set_value(value.join(','));
        };
        Select2Editor.prototype.get_text = function () {
            var _a;
            return ((_a = this.element.select2('data')) !== null && _a !== void 0 ? _a : {}).text;
        };
        Object.defineProperty(Select2Editor.prototype, "text", {
            get: function () {
                return this.get_text();
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.get_readOnly = function () {
            return !isEmptyOrNull(this.element.attr('readonly'));
        };
        Object.defineProperty(Select2Editor.prototype, "readOnly", {
            get: function () {
                return this.get_readOnly();
            },
            set: function (value) {
                this.set_readOnly(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.updateInplaceReadOnly = function () {
            var readOnly = this.get_readOnly() &&
                (this.isMultiple() || !this.value);
            this.element.nextAll('.inplace-create')
                .attr('disabled', (readOnly ? 'disabled' : ''))
                .css('opacity', (readOnly ? '0.1' : ''))
                .css('cursor', (readOnly ? 'default' : ''));
        };
        Select2Editor.prototype.set_readOnly = function (value) {
            if (value !== this.get_readOnly()) {
                this.element.attr("readonly", value ? "readonly" : null);
                this.updateInplaceReadOnly();
            }
        };
        Select2Editor.prototype.getCascadeFromValue = function (parent) {
            return exports.EditorUtils.getValue(parent);
        };
        Select2Editor.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (isEmptyOrNull(value)) {
                if (this.cascadeLink != null) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new CascadedWidgetLink(Widget, this, function (p) {
                _this.set_cascadeValue(_this.getCascadeFromValue(p));
            });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        Select2Editor.prototype.get_cascadeFrom = function () {
            return this.options.cascadeFrom;
        };
        Object.defineProperty(Select2Editor.prototype, "cascadeFrom", {
            get: function () {
                return this.get_cascadeFrom();
            },
            set: function (value) {
                this.set_cascadeFrom(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_cascadeFrom = function (value) {
            if (value !== this.options.cascadeFrom) {
                this.setCascadeFrom(value);
                this.updateItems();
            }
        };
        Select2Editor.prototype.get_cascadeField = function () {
            var _a;
            return ((_a = this.options.cascadeField) !== null && _a !== void 0 ? _a : this.options.cascadeFrom);
        };
        Object.defineProperty(Select2Editor.prototype, "cascadeField", {
            get: function () {
                return this.get_cascadeField();
            },
            set: function (value) {
                this.set_cascadeField(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_cascadeField = function (value) {
            this.options.cascadeField = value;
        };
        Select2Editor.prototype.get_cascadeValue = function () {
            return this.options.cascadeValue;
        };
        Object.defineProperty(Select2Editor.prototype, "cascadeValue", {
            get: function () {
                return this.get_cascadeValue();
            },
            set: function (value) {
                this.set_cascadeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_cascadeValue = function (value) {
            if (this.options.cascadeValue !== value) {
                this.options.cascadeValue = value;
                this.set_value(null);
                this.updateItems();
            }
        };
        Select2Editor.prototype.get_filterField = function () {
            return this.options.filterField;
        };
        Object.defineProperty(Select2Editor.prototype, "filterField", {
            get: function () {
                return this.get_filterField();
            },
            set: function (value) {
                this.set_filterField(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_filterField = function (value) {
            this.options.filterField = value;
        };
        Select2Editor.prototype.get_filterValue = function () {
            return this.options.filterValue;
        };
        Object.defineProperty(Select2Editor.prototype, "filterValue", {
            get: function () {
                return this.get_filterValue();
            },
            set: function (value) {
                this.set_filterValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Select2Editor.prototype.set_filterValue = function (value) {
            if (this.options.filterValue !== value) {
                this.options.filterValue = value;
                this.set_value(null);
                this.updateItems();
            }
        };
        Select2Editor.prototype.cascadeItems = function (items) {
            var val = this.get_cascadeValue();
            if (val == null || val === '') {
                if (!isEmptyOrNull(this.get_cascadeField())) {
                    return [];
                }
                return items;
            }
            var key = val.toString();
            var fld = this.get_cascadeField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : exports.ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        Select2Editor.prototype.filterItems = function (items) {
            var val = this.get_filterValue();
            if (val == null || val === '') {
                return items;
            }
            var key = val.toString();
            var fld = this.get_filterField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : exports.ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        Select2Editor.prototype.updateItems = function () {
        };
        Select2Editor.prototype.getDialogTypeKey = function () {
            if (this.options.dialogType != null) {
                return this.options.dialogType;
            }
            return null;
        };
        Select2Editor.prototype.createEditDialog = function (callback) {
            var dialogTypeKey = this.getDialogTypeKey();
            var dialogType = exports.DialogTypeRegistry.get(dialogTypeKey);
            Widget.create({
                type: dialogType,
                init: function (x) { return callback(x); }
            });
        };
        Select2Editor.prototype.initNewEntity = function (entity) {
            if (!isEmptyOrNull(this.get_cascadeField())) {
                entity[this.get_cascadeField()] = this.get_cascadeValue();
            }
            if (!isEmptyOrNull(this.get_filterField())) {
                entity[this.get_filterField()] = this.get_filterValue();
            }
            if (this.onInitNewEntity != null) {
                this.onInitNewEntity(entity);
            }
        };
        Select2Editor.prototype.setEditDialogReadOnly = function (dialog) {
            // an ugly workaround
            dialog.element && dialog.element
                .find('.tool-button.delete-button')
                .addClass('disabled')
                .unbind('click');
        };
        Select2Editor.prototype.editDialogDataChange = function () {
        };
        Select2Editor.prototype.setTermOnNewEntity = function (entity, term) {
        };
        Select2Editor.prototype.inplaceCreateClick = function (e) {
            var _this = this;
            if (this.get_readOnly() &&
                ((this.isMultiple() && !e['editItem']) || !this.value))
                return;
            this.createEditDialog(function (dialog) {
                if (_this.get_readOnly())
                    _this.setEditDialogReadOnly(dialog);
                exports.SubDialogHelper.bindToDataChange(dialog, _this, function (x, dci) {
                    _this.editDialogDataChange();
                    _this.updateItems();
                    _this.lastCreateTerm = null;
                    if ((dci.type === 'create' || dci.type === 'update') &&
                        dci.entityId != null) {
                        var id = dci.entityId.toString();
                        if (_this.isMultiple()) {
                            var values = _this.get_values().slice();
                            if (values.indexOf(id) < 0) {
                                values.push(id);
                            }
                            _this.set_values(null);
                            _this.set_values(values.slice());
                        }
                        else {
                            _this.set_value(null);
                            _this.set_value(id);
                        }
                    }
                    else if (_this.isMultiple() && dci.type === 'delete' &&
                        dci.entityId != null) {
                        var id1 = dci.entityId.toString();
                        var values1 = _this.get_values().slice();
                        var idx1 = values1.indexOf(id1);
                        if (idx1 >= 0)
                            values1.splice(idx1, 1);
                        _this.set_values(values1.slice());
                    }
                    else if (!_this.isMultiple()) {
                        _this.set_value(null);
                    }
                }, true);
                var editItem = e['editItem'];
                if (editItem != null) {
                    dialog.load(editItem, function () {
                        dialog.dialogOpen(_this.openDialogAsPanel);
                    }, null);
                }
                else if (_this.isMultiple() || isEmptyOrNull(_this.get_value())) {
                    var entity = {};
                    _this.setTermOnNewEntity(entity, trimToEmpty(_this.lastCreateTerm));
                    _this.initNewEntity(entity);
                    dialog.load(entity, function () {
                        dialog.dialogOpen(_this.openDialogAsPanel);
                    }, null);
                }
                else {
                    dialog.load(_this.get_value(), function () {
                        dialog.dialogOpen(_this.openDialogAsPanel);
                    }, null);
                }
            });
        };
        var Select2Editor_1;
        Select2Editor = Select2Editor_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.Select2Editor', [ISetEditValue, IGetEditValue, IStringValue, IReadOnly]),
            exports.Decorators.element("<input type=\"hidden\"/>")
        ], Select2Editor);
        return Select2Editor;
    }(Widget));

    var SelectEditor = /** @class */ (function (_super) {
        tslib.__extends(SelectEditor, _super);
        function SelectEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.updateItems();
            return _this;
        }
        SelectEditor.prototype.getItems = function () {
            return this.options.items || [];
        };
        SelectEditor.prototype.emptyItemText = function () {
            if (!isEmptyOrNull(this.options.emptyOptionText)) {
                return this.options.emptyOptionText;
            }
            return _super.prototype.emptyItemText.call(this);
        };
        SelectEditor.prototype.updateItems = function () {
            var _a;
            var items = this.getItems();
            this.clearItems();
            if (items.length > 0) {
                var isStrings = typeof (items[0]) === 'string';
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    var key = isStrings ? item : item[0];
                    var text = isStrings ? item : ((_a = item[1]) !== null && _a !== void 0 ? _a : item[0]);
                    this.addOption(key, text, item, false);
                }
            }
        };
        SelectEditor = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.SelectEditor')
        ], SelectEditor);
        return SelectEditor;
    }(Select2Editor));

    var DateYearEditor = /** @class */ (function (_super) {
        tslib.__extends(DateYearEditor, _super);
        function DateYearEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.updateItems();
            return _this;
        }
        DateYearEditor.prototype.getItems = function () {
            var _a, _b;
            var opt = this.options;
            if (opt.items != null && opt.items.length >= 1) {
                return opt.items;
            }
            var years = [];
            var minYear = (new Date()).getFullYear();
            var maxYear = (new Date()).getFullYear();
            opt.minYear = ((_a = opt.minYear) !== null && _a !== void 0 ? _a : '-10').toString();
            if (startsWith(opt.minYear, '-')) {
                minYear -= parseInt(opt.minYear.substr(1), 10);
            }
            else if (startsWith(opt.minYear, '+')) {
                minYear += parseInt(opt.minYear.substr(1), 10);
            }
            else {
                minYear = parseInt(opt.minYear, 10);
            }
            opt.maxYear = ((_b = opt.maxYear) !== null && _b !== void 0 ? _b : '+10').toString();
            if (startsWith(opt.maxYear, '-')) {
                maxYear -= parseInt(opt.maxYear.substr(1), 10);
            }
            else if (startsWith(opt.maxYear, '+')) {
                maxYear += parseInt(opt.maxYear.substr(1), 10);
            }
            else {
                maxYear = parseInt(opt.maxYear, 10);
            }
            if (opt.descending) {
                for (var i = maxYear; i >= minYear; i--) {
                    years.push(i.toString());
                }
            }
            else {
                for (var i1 = minYear; i1 <= maxYear; i1++) {
                    years.push(i1.toString());
                }
            }
            return years;
        };
        DateYearEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.DateYearEditor')
        ], DateYearEditor);
        return DateYearEditor;
    }(SelectEditor));

    var EnumEditor = /** @class */ (function (_super) {
        tslib.__extends(EnumEditor, _super);
        function EnumEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.updateItems();
            return _this;
        }
        EnumEditor.prototype.updateItems = function () {
            var _a;
            this.clearItems();
            var enumType = this.options.enumType || exports.EnumTypeRegistry.get(this.options.enumKey);
            var enumKey = this.options.enumKey;
            if (enumKey == null && enumType != null) {
                var enumKeyAttr = getAttributes(enumType, EnumKeyAttribute, false);
                if (enumKeyAttr.length > 0) {
                    enumKey = enumKeyAttr[0].value;
                }
            }
            var values = exports.Enum.getValues(enumType);
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var x = values_1[_i];
                var name = exports.Enum.toString(enumType, x);
                this.addOption(parseInt(x, 10).toString(), ((_a = tryGetText('Enums.' + enumKey + '.' + name)) !== null && _a !== void 0 ? _a : name), null, false);
            }
        };
        EnumEditor.prototype.allowClear = function () {
            var _a;
            return ((_a = this.options.allowClear) !== null && _a !== void 0 ? _a : true);
        };
        EnumEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.EnumEditor')
        ], EnumEditor);
        return EnumEditor;
    }(Select2Editor));

    var LookupEditorBase = /** @class */ (function (_super) {
        tslib.__extends(LookupEditorBase, _super);
        function LookupEditorBase(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            if (!_this.hasAsyncSource()) {
                _this.updateItems();
                var self = _this;
                exports.ScriptData.bindToChange('Lookup.' + _this.getLookupKey(), _this.uniqueName, function () {
                    if (!self.hasAsyncSource())
                        self.updateItems();
                });
            }
            return _this;
        }
        LookupEditorBase.prototype.hasAsyncSource = function () {
            return !!this.options.async;
        };
        LookupEditorBase.prototype.destroy = function () {
            if (!this.hasAsyncSource())
                exports.ScriptData.unbindFromChange(this.uniqueName);
            _super.prototype.destroy.call(this);
        };
        LookupEditorBase.prototype.getLookupKey = function () {
            if (this.options.lookupKey != null) {
                return this.options.lookupKey;
            }
            var key = getTypeFullName(getInstanceType(this));
            var idx = key.indexOf('.');
            if (idx >= 0) {
                key = key.substring(idx + 1);
            }
            if (endsWith(key, 'Editor')) {
                key = key.substr(0, key.length - 6);
            }
            return key;
        };
        LookupEditorBase.prototype.getLookupAsync = function () {
            return getLookupAsync(this.getLookupKey());
        };
        LookupEditorBase.prototype.getLookup = function () {
            return getLookup(this.getLookupKey());
        };
        LookupEditorBase.prototype.getItems = function (lookup) {
            return this.filterItems(this.cascadeItems(lookup.items));
        };
        LookupEditorBase.prototype.getIdField = function () {
            return this.lookup != null ? this.lookup.idField : _super.prototype.getIdField.call(this);
        };
        LookupEditorBase.prototype.getItemText = function (item, lookup) {
            if (lookup == null)
                return _super.prototype.itemText.call(this, item);
            var textValue = lookup.textFormatter ? lookup.textFormatter(item) : item[lookup.textField];
            return textValue == null ? '' : textValue.toString();
        };
        LookupEditorBase.prototype.mapItem = function (item) {
            return {
                id: this.itemId(item),
                text: this.getItemText(item, this.lookup),
                disabled: this.getItemDisabled(item, this.lookup),
                source: item
            };
        };
        LookupEditorBase.prototype.getItemDisabled = function (item, lookup) {
            return _super.prototype.itemDisabled.call(this, item);
        };
        LookupEditorBase.prototype.updateItems = function () {
            if (this.hasAsyncSource())
                return;
            this.clearItems();
            this.lookup = this.getLookup();
            var items = this.getItems(this.lookup);
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.addItem(this.mapItem(item));
            }
        };
        LookupEditorBase.prototype.asyncSearch = function (query, results) {
            var _this = this;
            return this.getLookupAsync().then(function (lookup) {
                _this.lookup = lookup;
                var items = _this.getItems(_this.lookup);
                if (query.idList != null) {
                    items = items.filter(function (x) { return query.idList.indexOf(_this.itemId(x)) >= 0; });
                }
                function getText(item) {
                    return this.getItemText(item, this.lookup);
                }
                items = Select2Editor.filterByText(items, getText.bind(_this), query.searchTerm);
                results({
                    items: items.slice(query.skip, query.take),
                    more: items.length >= query.take
                });
            });
        };
        LookupEditorBase.prototype.getDialogTypeKey = function () {
            var dialogTypeKey = _super.prototype.getDialogTypeKey.call(this);
            if (dialogTypeKey)
                return dialogTypeKey;
            return this.getLookupKey();
        };
        LookupEditorBase.prototype.setCreateTermOnNewEntity = function (entity, term) {
            entity[this.getLookup().textField] = term;
        };
        LookupEditorBase.prototype.editDialogDataChange = function () {
            reloadLookup(this.getLookupKey());
        };
        LookupEditorBase = tslib.__decorate([
            exports.Decorators.registerEditor("Serenity.LookupEditorBase")
        ], LookupEditorBase);
        return LookupEditorBase;
    }(Select2Editor));
    var LookupEditor = /** @class */ (function (_super) {
        tslib.__extends(LookupEditor, _super);
        function LookupEditor(hidden, opt) {
            return _super.call(this, hidden, opt) || this;
        }
        LookupEditor = tslib.__decorate([
            exports.Decorators.registerEditor("Serenity.LookupEditor")
        ], LookupEditor);
        return LookupEditor;
    }(LookupEditorBase));

    var ServiceLookupEditorBase = /** @class */ (function (_super) {
        tslib.__extends(ServiceLookupEditorBase, _super);
        function ServiceLookupEditorBase(input, opt) {
            return _super.call(this, input, opt) || this;
        }
        ServiceLookupEditorBase.prototype.getDialogTypeKey = function () {
            var dialogTypeKey = _super.prototype.getDialogTypeKey.call(this);
            if (dialogTypeKey)
                return dialogTypeKey;
            var service = this.getService();
            if (startsWith(service, "~/Services/"))
                service = service.substr("~/Services/".length);
            if (service.split('/').length == 3)
                service = service.substr(0, service.lastIndexOf('/'));
            return service.replace("/", ".");
        };
        ServiceLookupEditorBase.prototype.getService = function () {
            return this.options.service;
        };
        ServiceLookupEditorBase.prototype.getServiceUrl = function () {
            var url = this.getService();
            if (url == null)
                throw new Error("ServiceLookupEditor requires 'service' option to be configured!");
            if (!startsWith(url, "~") && !startsWith(url, "/") && url.indexOf('://') < 0)
                url = "~/Services/" + url;
            if (startsWith(url, "~"))
                url = resolveUrl(url);
            return url;
        };
        ServiceLookupEditorBase.prototype.getIncludeColumns = function () {
            var include = this.options.includeColumns || [];
            var idField = this.getIdField();
            if (idField && include.indexOf(idField) < 0)
                include.push(idField);
            var textField = this.getTextField();
            if (textField && include.indexOf(textField) < 0)
                include.push(textField);
            return include;
        };
        ServiceLookupEditorBase.prototype.getSort = function () {
            return this.options.sort || (this.getTextField() ? [this.getTextField()] : null);
        };
        ServiceLookupEditorBase.prototype.getCascadeCriteria = function () {
            var val = this.get_cascadeValue();
            if (val == null || val === '') {
                if (!isEmptyOrNull(this.get_cascadeField())) {
                    return ['0', '=', '1'];
                }
                return null;
            }
            var fld = this.get_cascadeField();
            return Criteria(fld).eq(val);
        };
        ServiceLookupEditorBase.prototype.getFilterCriteria = function () {
            var val = this.get_filterValue();
            if (val == null || val === '') {
                return null;
            }
            var fld = this.get_filterField();
            return [[fld], '=', val];
        };
        ServiceLookupEditorBase.prototype.getIdListCriteria = function (idList) {
            if (idList == null)
                return null;
            if (idList.length == 0)
                return ['0', '=', '1'];
            var idField = this.getIdField();
            if (idField == null)
                throw new Error("ServiceLookupEditor requires 'idField' option to be configured!");
            return Criteria(idField).in(idList);
        };
        ServiceLookupEditorBase.prototype.getCriteria = function (query) {
            return Criteria.and(Criteria.and(this.getIdListCriteria(query.idList), this.options.criteria), Criteria.and(this.getCascadeCriteria(), this.getFilterCriteria()));
        };
        ServiceLookupEditorBase.prototype.getListRequest = function (query) {
            var request = {};
            if (query.searchTerm)
                request.ContainsText = query.searchTerm;
            request.Sort = this.getSort();
            request.ColumnSelection = this.options.columnSelection || exports.ColumnSelection.KeyOnly;
            request.IncludeColumns = this.getIncludeColumns();
            request.ExcludeColumns = this.options.excludeColumns;
            request.ContainsField = this.options.containsField;
            request.EqualityFilter = this.options.equalityFilter;
            request.Criteria = this.getCriteria(query);
            request.Skip = query.skip || 0;
            request.Take = query.take ? (query.checkMore ? query.take + 1 : query.take) : 0;
            request.IncludeDeleted = this.options.includeDeleted;
            request.ExcludeTotalCount = true;
            return request;
        };
        ServiceLookupEditorBase.prototype.getServiceCallOptions = function (query, results) {
            return {
                blockUI: false,
                url: this.getServiceUrl(),
                request: this.getListRequest(query),
                onSuccess: function (response) {
                    var items = response.Entities || [];
                    if (items && query.take && query.checkMore && response.Entities.length > items.length)
                        items = items.slice(0, query.take);
                    results({
                        items: items.slice(0, query.take),
                        more: query.checkMore && query.take && items.length > query.take
                    });
                }
            };
        };
        ServiceLookupEditorBase.prototype.hasAsyncSource = function () {
            return true;
        };
        ServiceLookupEditorBase.prototype.asyncSearch = function (query, results) {
            var opt = this.getServiceCallOptions(query, results);
            return serviceCall(opt);
        };
        ServiceLookupEditorBase = tslib.__decorate([
            exports.Decorators.registerEditor("Serenity.ServiceLookupEditorBase")
        ], ServiceLookupEditorBase);
        return ServiceLookupEditorBase;
    }(Select2Editor));
    var ServiceLookupEditor = /** @class */ (function (_super) {
        tslib.__extends(ServiceLookupEditor, _super);
        function ServiceLookupEditor(hidden, opt) {
            return _super.call(this, hidden, opt) || this;
        }
        ServiceLookupEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.ServiceLookupEditor')
        ], ServiceLookupEditor);
        return ServiceLookupEditor;
    }(ServiceLookupEditorBase));

    var HtmlContentEditor = /** @class */ (function (_super) {
        tslib.__extends(HtmlContentEditor, _super);
        function HtmlContentEditor(textArea, opt) {
            var _this = _super.call(this, textArea, opt) || this;
            _this._instanceReady = false;
            HtmlContentEditor_1.includeCKEditor();
            var id = textArea.attr('id');
            if (isTrimmedEmpty(id)) {
                textArea.attr('id', _this.uniqueName);
                id = _this.uniqueName;
            }
            if (_this.options.cols != null)
                textArea.attr('cols', _this.options.cols);
            if (_this.options.rows != null)
                textArea.attr('rows', _this.options.rows);
            _this.addValidationRule(_this.uniqueName, function (e) {
                if (e.hasClass('required')) {
                    var value = trimToNull(_this.get_value());
                    if (value == null)
                        return localText('Validation.Required');
                }
                return null;
            });
            exports.LazyLoadHelper.executeOnceWhenShown(_this.element, function () {
                var config = _this.getConfig();
                window['CKEDITOR'] && window['CKEDITOR'].replace(id, config);
            });
            return _this;
        }
        HtmlContentEditor_1 = HtmlContentEditor;
        HtmlContentEditor.prototype.instanceReady = function (x) {
            this._instanceReady = true;
            $(x.editor.container.$).addClass(this.element.attr('class'));
            this.element.addClass('select2-offscreen').css('display', 'block');
            // for validation to work
            x.editor.setData(this.element.val());
            x.editor.setReadOnly(this.get_readOnly());
        };
        HtmlContentEditor.prototype.getLanguage = function () {
            var _a;
            if (!window['CKEDITOR'])
                return 'en';
            var CKEDITOR = window['CKEDITOR'];
            var lang = ((_a = trimToNull($('html').attr('lang'))) !== null && _a !== void 0 ? _a : 'en');
            if (!!CKEDITOR.lang.languages[lang]) {
                return lang;
            }
            if (lang.indexOf(String.fromCharCode(45)) >= 0) {
                lang = lang.split(String.fromCharCode(45))[0];
            }
            if (!!CKEDITOR.lang.languages[lang]) {
                return lang;
            }
            return 'en';
        };
        HtmlContentEditor.prototype.getConfig = function () {
            var _this = this;
            return {
                customConfig: '',
                language: this.getLanguage(),
                bodyClass: 's-HtmlContentBody',
                on: {
                    instanceReady: function (x) { return _this.instanceReady(x); },
                    change: function (x1) {
                        x1.editor.updateElement();
                        _this.element.triggerHandler('change');
                    }
                },
                toolbarGroups: [
                    {
                        name: 'clipboard',
                        groups: ['clipboard', 'undo']
                    }, {
                        name: 'editing',
                        groups: ['find', 'selection', 'spellchecker']
                    }, {
                        name: 'insert',
                        groups: ['links', 'insert', 'blocks', 'bidi', 'list', 'indent']
                    }, {
                        name: 'forms',
                        groups: ['forms', 'mode', 'document', 'doctools', 'others', 'about', 'tools']
                    }, {
                        name: 'colors'
                    }, {
                        name: 'basicstyles',
                        groups: ['basicstyles', 'cleanup']
                    }, {
                        name: 'align'
                    }, {
                        name: 'styles'
                    }
                ],
                removeButtons: 'SpecialChar,Anchor,Subscript,Styles',
                format_tags: 'p;h1;h2;h3;pre',
                removeDialogTabs: 'image:advanced;link:advanced',
                removePlugins: 'uploadimage,image2',
                contentsCss: resolveUrl('~/Content/site/site.htmlcontent.css'),
                entities: false,
                entities_latin: false,
                entities_greek: false,
                autoUpdateElement: true,
                height: (this.options.rows == null || this.options.rows === 0) ? null :
                    ((this.options.rows * 20) + 'px')
            };
        };
        HtmlContentEditor.prototype.getEditorInstance = function () {
            var id = this.element.attr('id');
            return window['CKEDITOR'].instances[id];
        };
        HtmlContentEditor.prototype.destroy = function () {
            var instance = this.getEditorInstance();
            instance && instance.destroy(true);
            _super.prototype.destroy.call(this);
        };
        HtmlContentEditor.prototype.get_value = function () {
            var instance = this.getEditorInstance();
            if (this._instanceReady && instance) {
                return instance.getData();
            }
            else {
                return this.element.val();
            }
        };
        Object.defineProperty(HtmlContentEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        HtmlContentEditor.prototype.set_value = function (value) {
            var instance = this.getEditorInstance();
            this.element.val(value);
            if (this._instanceReady && instance)
                instance.setData(value);
        };
        HtmlContentEditor.prototype.get_readOnly = function () {
            return !isEmptyOrNull(this.element.attr('disabled'));
        };
        HtmlContentEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.element.attr('disabled', 'disabled');
                }
                else {
                    this.element.removeAttr('disabled');
                }
                var instance = this.getEditorInstance();
                if (this._instanceReady && instance)
                    instance.setReadOnly(value);
            }
        };
        HtmlContentEditor.getCKEditorBasePath = function () {
            var path = HtmlContentEditor_1.CKEditorBasePath;
            if (path == null) {
                // @ts-ignore
                if (typeof CKEDITOR_BASEPATH !== "undefined" && CKEDITOR_BASEPATH)
                    // @ts-ignore
                    path = CKEDITOR_BASEPATH;
                else
                    return "~/Serenity.Assets/Scripts/ckeditor/";
            }
            if (endsWith(path, '/'))
                return path;
            return path + '/';
        };
        HtmlContentEditor.includeCKEditor = function () {
            if (window['CKEDITOR']) {
                return;
            }
            var script = $('#CKEditorScript');
            if (script.length > 0) {
                return;
            }
            $('<script/>').attr('type', 'text/javascript')
                .attr('id', 'CKEditorScript')
                .attr('src', resolveUrl(HtmlContentEditor_1.getCKEditorBasePath() + 'ckeditor.js?v=' +
                HtmlContentEditor_1.CKEditorVer))
                .appendTo(window.document.head);
        };
        var HtmlContentEditor_1;
        HtmlContentEditor.CKEditorVer = "4.7.1";
        HtmlContentEditor = HtmlContentEditor_1 = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.HtmlContentEditor', [IStringValue, IReadOnly]),
            exports.Decorators.element('<textarea/>')
        ], HtmlContentEditor);
        return HtmlContentEditor;
    }(Widget));
    var HtmlNoteContentEditor = /** @class */ (function (_super) {
        tslib.__extends(HtmlNoteContentEditor, _super);
        function HtmlNoteContentEditor(textArea, opt) {
            return _super.call(this, textArea, opt) || this;
        }
        HtmlNoteContentEditor.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,' +
                'Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,PasteText,' +
                'PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,Image,Table,' +
                'HorizontalRule,Source,Maximize,Format,Font,FontSize,Anchor,Blockquote,' +
                'CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,' +
                'JustifyRight,JustifyBlock,Superscript,RemoveFormat';
            config.removePlugins = 'elementspath,uploadimage,image2';
            return config;
        };
        HtmlNoteContentEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.HtmlNoteContentEditor')
        ], HtmlNoteContentEditor);
        return HtmlNoteContentEditor;
    }(HtmlContentEditor));
    var HtmlReportContentEditor = /** @class */ (function (_super) {
        tslib.__extends(HtmlReportContentEditor, _super);
        function HtmlReportContentEditor(textArea, opt) {
            return _super.call(this, textArea, opt) || this;
        }
        HtmlReportContentEditor.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,' +
                'Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,' +
                'PasteText,PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,' +
                'Image,Table,HorizontalRule,Source,Maximize,Format,Font,FontSize,' +
                'Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,' +
                'JustifyRight,JustifyBlock,Superscript,RemoveFormat';
            config.removePlugins = 'elementspath,uploadimage,image2';
            return config;
        };
        HtmlReportContentEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.HtmlReportContentEditor')
        ], HtmlReportContentEditor);
        return HtmlReportContentEditor;
    }(HtmlContentEditor));

    // http://digitalbush.com/projects/masked-input-plugin/
    var MaskedEditor = /** @class */ (function (_super) {
        tslib.__extends(MaskedEditor, _super);
        function MaskedEditor(input, opt) {
            var _this = this;
            var _a;
            _this = _super.call(this, input, opt) || this;
            input.mask(_this.options.mask || '', {
                placeholder: ((_a = _this.options.placeholder) !== null && _a !== void 0 ? _a : '_')
            });
            return _this;
        }
        Object.defineProperty(MaskedEditor.prototype, "value", {
            get: function () {
                this.element.triggerHandler("blur.mask");
                return this.element.val();
            },
            set: function (value) {
                this.element.val(value);
            },
            enumerable: false,
            configurable: true
        });
        MaskedEditor.prototype.get_value = function () {
            return this.value;
        };
        MaskedEditor.prototype.set_value = function (value) {
            this.value = value;
        };
        MaskedEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.MaskedEditor', [IStringValue]),
            exports.Decorators.element("<input type=\"text\"/>")
        ], MaskedEditor);
        return MaskedEditor;
    }(Widget));

    var Recaptcha = /** @class */ (function (_super) {
        tslib.__extends(Recaptcha, _super);
        function Recaptcha(div, opt) {
            var _this = this;
            var _a;
            _this = _super.call(this, div, opt) || this;
            _this.element.addClass('g-recaptcha').attr('data-sitekey', _this.options.siteKey);
            if (!!(window['grecaptcha'] == null && $('script#RecaptchaInclude').length === 0)) {
                var src = 'https://www.google.com/recaptcha/api.js';
                var lng = _this.options.language;
                if (lng == null) {
                    lng = (_a = $('html').attr('lang')) !== null && _a !== void 0 ? _a : '';
                }
                src += '?hl=' + lng;
                $('<script/>').attr('id', 'RecaptchaInclude').attr('src', src).appendTo(document.body);
            }
            var valInput = $('<input />').insertBefore(_this.element)
                .attr('id', _this.uniqueName + '_validate').val('x');
            var gro = {};
            gro['visibility'] = 'hidden';
            gro['width'] = '0px';
            gro['height'] = '0px';
            gro['padding'] = '0px';
            var input = valInput.css(gro);
            addValidationRule(input, _this.uniqueName, function (e) {
                if (isEmptyOrNull(_this.get_value())) {
                    return localText('Validation.Required');
                }
                return null;
            });
            return _this;
        }
        Recaptcha.prototype.get_value = function () {
            return this.element.find('.g-recaptcha-response').val();
        };
        Recaptcha.prototype.set_value = function (value) {
            // ignore
        };
        Recaptcha = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.Recaptcha', [IStringValue]),
            exports.Decorators.element("<div/>")
        ], Recaptcha);
        return Recaptcha;
    }(Widget));

    exports.UploadHelper = void 0;
    (function (UploadHelper) {
        function addUploadInput(options) {
            options.container.addClass('fileinput-button');
            var uploadUrl = options.uploadUrl || '~/File/TemporaryUpload';
            if (options.uploadIntent) {
                if (uploadUrl.indexOf('?') < 0)
                    uploadUrl += "?";
                else
                    uploadUrl += "&";
                uploadUrl += "uploadIntent=";
                uploadUrl += encodeURIComponent(options.uploadIntent);
            }
            var uploadInput = $('<input/>').attr('type', 'file')
                .attr('name', options.inputName + '[]')
                .attr('data-url', resolveUrl(uploadUrl))
                .appendTo(options.container);
            if (options.allowMultiple) {
                uploadInput.attr('multiple', 'multiple');
            }
            uploadInput.fileupload({
                dataType: 'json',
                dropZone: options.zone,
                pasteZone: options.zone,
                done: function (e, data) {
                    var response = data.result;
                    if (response.Error) {
                        notifyError(response.Error.Message);
                        return;
                    }
                    if (options.fileDone != null) {
                        options.fileDone(response, data.files[0].name, data);
                    }
                },
                fail: function (e, opt) {
                    var _a;
                    var xhr = (_a = opt === null || opt === void 0 ? void 0 : opt._response) === null || _a === void 0 ? void 0 : _a.jqXHR;
                    if (!xhr) {
                        notifyError('An error occurred during file upload.');
                        return;
                    }
                    if ((xhr.getResponseHeader('content-type') || '')
                        .toLowerCase().indexOf('application/json') >= 0) {
                        var json = $.parseJSON(xhr.responseText);
                        if (json && json.Error && json.Error.Message) {
                            notifyError(json.Error.Message);
                            return;
                        }
                    }
                    var html = xhr.responseText;
                    if (html) {
                        iframeDialog({ html: html });
                        return;
                    }
                    if (!xhr.status) {
                        if (xhr.statusText != "abort")
                            notifyError("An unknown connection error occurred! Check browser console for details.");
                        return;
                    }
                    if (xhr.status == 500) {
                        notifyError("HTTP 500: Connection refused! Check browser console for details.");
                        return;
                    }
                    notifyError("HTTP " + xhr.status + ' error! Check browser console for details.');
                },
                start: function () {
                    blockUI(null);
                    if (options.progress != null) {
                        options.progress.show();
                    }
                },
                stop: function () {
                    blockUndo();
                    if (options.progress != null) {
                        options.progress.hide();
                    }
                },
                progress: function (e1, data1) {
                    if (options.progress != null) {
                        var percent = data1.loaded / data1.total * 100;
                        options.progress.children().css('width', percent.toString() + '%');
                    }
                }
            });
            return uploadInput;
        }
        UploadHelper.addUploadInput = addUploadInput;
        function checkImageConstraints(file, opt) {
            if (!file.IsImage && !opt.allowNonImage) {
                alertDialog(localText('Controls.ImageUpload.NotAnImageFile'));
                return false;
            }
            if (opt.minSize > 0 && file.Size < opt.minSize) {
                alertDialog(format(localText('Controls.ImageUpload.UploadFileTooSmall'), fileSizeDisplay(opt.minSize)));
                return false;
            }
            if (opt.maxSize > 0 && file.Size > opt.maxSize) {
                alertDialog(format(localText('Controls.ImageUpload.UploadFileTooBig'), fileSizeDisplay(opt.maxSize)));
                return false;
            }
            if (!file.IsImage) {
                return true;
            }
            if (opt.minWidth > 0 && file.Width < opt.minWidth) {
                alertDialog(format(localText('Controls.ImageUpload.MinWidth'), opt.minWidth));
                return false;
            }
            if (opt.maxWidth > 0 && file.Width > opt.maxWidth) {
                alertDialog(format(localText('Controls.ImageUpload.MaxWidth'), opt.maxWidth));
                return false;
            }
            if (opt.minHeight > 0 && file.Height < opt.minHeight) {
                alertDialog(format(localText('Controls.ImageUpload.MinHeight'), opt.minHeight));
                return false;
            }
            if (opt.maxHeight > 0 && file.Height > opt.maxHeight) {
                alertDialog(format(localText('Controls.ImageUpload.MaxHeight'), opt.maxHeight));
                return false;
            }
            return true;
        }
        UploadHelper.checkImageConstraints = checkImageConstraints;
        function fileNameSizeDisplay(name, bytes) {
            return name + ' (' + fileSizeDisplay(bytes) + ')';
        }
        UploadHelper.fileNameSizeDisplay = fileNameSizeDisplay;
        function fileSizeDisplay(bytes) {
            var byteSize = round(bytes * 100 / 1024) * 0.01;
            var suffix = 'KB';
            if (byteSize >= 1024) {
                byteSize = round(byteSize * 100 / 1024) * 0.01;
                suffix = 'MB';
            }
            var sizeParts = byteSize.toString().split(String.fromCharCode(46));
            var value;
            if (sizeParts.length > 1) {
                value = sizeParts[0] + '.' + sizeParts[1].substr(0, 2);
            }
            else {
                value = sizeParts[0];
            }
            return value + ' ' + suffix;
        }
        UploadHelper.fileSizeDisplay = fileSizeDisplay;
        function hasImageExtension(filename) {
            if (isEmptyOrNull(filename)) {
                return false;
            }
            filename = filename.toLowerCase();
            return endsWith(filename, '.jpg') || endsWith(filename, '.jpeg') ||
                endsWith(filename, '.gif') || endsWith(filename, '.png');
        }
        UploadHelper.hasImageExtension = hasImageExtension;
        function thumbFileName(filename) {
            filename = filename !== null && filename !== void 0 ? filename : '';
            var idx = filename.lastIndexOf('.');
            if (idx >= 0) {
                filename = filename.substr(0, idx);
            }
            return filename + '_t.jpg';
        }
        UploadHelper.thumbFileName = thumbFileName;
        function dbFileUrl(filename) {
            filename = replaceAll(filename !== null && filename !== void 0 ? filename : '', '\\', '/');
            return resolveUrl('~/upload/') + filename;
        }
        UploadHelper.dbFileUrl = dbFileUrl;
        function colorBox(link, options) {
            link.colorbox({
                current: htmlEncode(localText('Controls.ImageUpload.ColorboxCurrent')),
                previous: htmlEncode(localText('Controls.ImageUpload.ColorboxPrior')),
                next: htmlEncode(localText('Controls.ImageUpload.ColorboxNext')),
                close: htmlEncode(localText('Controls.ImageUpload.ColorboxClose'))
            });
        }
        UploadHelper.colorBox = colorBox;
        function populateFileSymbols(container, items, displayOriginalName, urlPrefix) {
            var _a;
            items = items || [];
            container.html('');
            for (var index = 0; index < items.length; index++) {
                var item = items[index];
                var li = $('<li/>').addClass('file-item').data('index', index);
                var isImage = hasImageExtension(item.Filename);
                if (isImage) {
                    li.addClass('file-image');
                }
                else {
                    li.addClass('file-binary');
                }
                var thumb = $('<a/>').addClass('thumb').appendTo(li);
                var originalName = (_a = item.OriginalName) !== null && _a !== void 0 ? _a : '';
                var fileName = item.Filename;
                if (urlPrefix != null && fileName != null &&
                    !startsWith(fileName, 'temporary/')) {
                    fileName = urlPrefix + fileName;
                }
                thumb.attr('href', dbFileUrl(fileName));
                thumb.attr('target', '_blank');
                if (!isEmptyOrNull(originalName)) {
                    thumb.attr('title', originalName);
                }
                if (isImage) {
                    thumb.css('backgroundImage', "url('" + dbFileUrl(thumbFileName(item.Filename)) + "')");
                    colorBox(thumb);
                }
                if (displayOriginalName) {
                    $('<div/>').addClass('filename').text(originalName)
                        .attr('title', originalName).appendTo(li);
                }
                li.appendTo(container);
            }
        }
        UploadHelper.populateFileSymbols = populateFileSymbols;
    })(exports.UploadHelper || (exports.UploadHelper = {}));

    var FileUploadEditor = /** @class */ (function (_super) {
        tslib.__extends(FileUploadEditor, _super);
        function FileUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            if (!opt || opt.allowNonImage == null)
                _this.options.allowNonImage = true;
            div.addClass('s-FileUploadEditor');
            if (isEmptyOrNull(_this.options.originalNameProperty))
                div.addClass('hide-original-name');
            _this.toolbar = new Toolbar($('<div/>').appendTo(_this.element), {
                buttons: _this.getToolButtons()
            });
            _this.progress = $('<div><div></div></div>')
                .addClass('upload-progress')
                .prependTo(_this.toolbar.element);
            var uio = _this.getUploadInputOptions();
            _this.uploadInput = exports.UploadHelper.addUploadInput(uio);
            _this.fileSymbols = $('<ul/>').appendTo(_this.element);
            if (!_this.element.attr('id'))
                _this.element.attr('id', _this.uniqueName);
            _this.hiddenInput = $('<input type="text" class="s-offscreen" name="' + _this.uniqueName +
                '_Validator" data-vx-highlight="' + _this.element.attr('id') + '"/>')
                .appendTo(_this.element);
            _this.updateInterface();
            return _this;
        }
        FileUploadEditor.prototype.getUploadInputOptions = function () {
            var _this = this;
            return {
                container: this.toolbar.findButton('add-file-button'),
                zone: this.element,
                inputName: this.uniqueName,
                progress: this.progress,
                uploadIntent: this.options.uploadIntent,
                uploadUrl: this.options.uploadUrl,
                fileDone: function (response, name, data) {
                    if (!exports.UploadHelper.checkImageConstraints(response, _this.options)) {
                        return;
                    }
                    var newEntity = {
                        OriginalName: name,
                        Filename: response.TemporaryFile
                    };
                    _this.entity = newEntity;
                    _this.populate();
                    _this.updateInterface();
                    var validator = _this.hiddenInput.closest('form').data('validator');
                    if (validator != null) {
                        validator.element(_this.hiddenInput);
                    }
                }
            };
        };
        FileUploadEditor.prototype.addFileButtonText = function () {
            return localText('Controls.ImageUpload.AddFileButton');
        };
        FileUploadEditor.prototype.getToolButtons = function () {
            var _this = this;
            return [
                {
                    title: this.addFileButtonText(),
                    action: 'add-file',
                    cssClass: 'add-file-button',
                    onClick: function () {
                    }
                },
                {
                    title: '',
                    hint: localText('Controls.ImageUpload.DeleteButtonHint'),
                    action: 'delete',
                    cssClass: 'delete-button',
                    onClick: function () {
                        _this.entity = null;
                        _this.populate();
                        _this.updateInterface();
                        var validator = _this.hiddenInput.closest('form').data('validator');
                        if (validator != null) {
                            validator.element(_this.hiddenInput);
                        }
                    }
                }
            ];
        };
        FileUploadEditor.prototype.populate = function () {
            var displayOriginalName = this.options.displayFileName ||
                !isTrimmedEmpty(this.options.originalNameProperty);
            if (this.entity == null) {
                exports.UploadHelper.populateFileSymbols(this.fileSymbols, null, displayOriginalName, this.options.urlPrefix);
            }
            else {
                exports.UploadHelper.populateFileSymbols(this.fileSymbols, [this.entity], displayOriginalName, this.options.urlPrefix);
            }
            this.hiddenInput.val(trimToNull((this.get_value() || {}).Filename));
        };
        FileUploadEditor.prototype.updateInterface = function () {
            var addButton = this.toolbar.findButton('add-file-button');
            var delButton = this.toolbar.findButton('delete-button');
            addButton.toggleClass('disabled', this.get_readOnly());
            delButton.toggleClass('disabled', this.get_readOnly() ||
                this.entity == null);
        };
        FileUploadEditor.prototype.get_readOnly = function () {
            return this.uploadInput.attr('disabled') != null;
        };
        FileUploadEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.uploadInput.attr('disabled', 'disabled');
                    try {
                        this.uploadInput.fileupload('disable');
                    }
                    catch (_a) {
                    }
                }
                else {
                    this.uploadInput.removeAttr('disabled');
                    try {
                        this.uploadInput.fileupload('enable');
                    }
                    catch (_b) {
                    }
                }
                this.updateInterface();
            }
        };
        FileUploadEditor.prototype.get_required = function () {
            return this.hiddenInput.hasClass('required');
        };
        FileUploadEditor.prototype.set_required = function (value) {
            this.hiddenInput.toggleClass('required', !!value);
        };
        FileUploadEditor.prototype.get_value = function () {
            if (this.entity == null) {
                return null;
            }
            var copy = extend({}, this.entity);
            return copy;
        };
        Object.defineProperty(FileUploadEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        FileUploadEditor.prototype.set_value = function (value) {
            var stringValue = value;
            if (typeof stringValue === "string") {
                var stringValue = trimToNull(stringValue);
                if (value != null) {
                    var idx = stringValue.indexOf('/');
                    if (idx < 0)
                        idx = stringValue.indexOf('\\');
                    value = {
                        Filename: value,
                        OriginalName: stringValue.substring(idx + 1)
                    };
                }
            }
            else if (value != null && isTrimmedEmpty(value.Filename))
                value = null;
            if (value != null) {
                if (value.Filename == null) {
                    this.entity = null;
                }
                else {
                    this.entity = extend({}, value);
                }
            }
            else {
                this.entity = null;
            }
            this.populate();
            var validator = this.hiddenInput.closest('form').data('validator');
            if (validator != null) {
                validator.element(this.hiddenInput);
            }
            this.updateInterface();
        };
        FileUploadEditor.prototype.getEditValue = function (property, target) {
            target[property.name] = this.entity == null ? null :
                trimToNull(this.entity.Filename);
        };
        FileUploadEditor.prototype.setEditValue = function (source, property) {
            var _a;
            var value = {};
            value.Filename = source[property.name];
            if (isEmptyOrNull(this.options.originalNameProperty)) {
                if (this.options.displayFileName) {
                    var s = ((_a = value.Filename) !== null && _a !== void 0 ? _a : '');
                    var idx = replaceAll(s, '\\', '/').lastIndexOf('/');
                    if (idx >= 0) {
                        value.OriginalName = s.substr(idx + 1);
                    }
                    else {
                        value.OriginalName = s;
                    }
                }
            }
            else {
                value.OriginalName = source[this.options.originalNameProperty];
            }
            this.set_value(value);
        };
        FileUploadEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.FileUploadEditor', [IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired]),
            exports.Decorators.element('<div/>')
        ], FileUploadEditor);
        return FileUploadEditor;
    }(Widget));
    var ImageUploadEditor = /** @class */ (function (_super) {
        tslib.__extends(ImageUploadEditor, _super);
        function ImageUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            if (opt && opt.allowNonImage == null)
                _this.options.allowNonImage = false;
            div.addClass('s-ImageUploadEditor');
            return _this;
        }
        ImageUploadEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.ImageUploadEditor')
        ], ImageUploadEditor);
        return ImageUploadEditor;
    }(FileUploadEditor));
    var MultipleFileUploadEditor = /** @class */ (function (_super) {
        tslib.__extends(MultipleFileUploadEditor, _super);
        function MultipleFileUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            _this.entities = [];
            div.addClass('s-MultipleFileUploadEditor');
            _this.toolbar = new Toolbar($('<div/>').appendTo(_this.element), {
                buttons: _this.getToolButtons()
            });
            _this.progress = $('<div><div></div></div>')
                .addClass('upload-progress')
                .prependTo(_this.toolbar.element);
            _this.uploadInput = exports.UploadHelper.addUploadInput(_this.getUploadInputOptions());
            _this.fileSymbols = $('<ul/>').appendTo(_this.element);
            if (!_this.element.attr('id')) {
                _this.element.attr('id', _this.uniqueName);
            }
            _this.hiddenInput = $('<input type="text" class="s-offscreen" name="' + _this.uniqueName +
                '_Validator" data-vx-highlight="' + _this.element.attr('id') + '" multiple="multiple"></input>').appendTo(_this.element);
            _this.updateInterface();
            return _this;
        }
        MultipleFileUploadEditor.prototype.getUploadInputOptions = function () {
            var _this = this;
            var addFileButton = this.toolbar.findButton('add-file-button');
            return {
                container: addFileButton,
                zone: this.element,
                inputName: this.uniqueName,
                progress: this.progress,
                uploadIntent: this.options.uploadIntent,
                uploadUrl: this.options.uploadUrl,
                allowMultiple: true,
                fileDone: function (response, name) {
                    if (!exports.UploadHelper.checkImageConstraints(response, _this.options)) {
                        return;
                    }
                    var newEntity = { OriginalName: name, Filename: response.TemporaryFile };
                    _this.entities.push(newEntity);
                    _this.populate();
                    var validator = _this.hiddenInput.closest('form').data('validator');
                    if (validator != null) {
                        validator.element(_this.hiddenInput);
                    }
                    _this.updateInterface();
                }
            };
        };
        MultipleFileUploadEditor.prototype.addFileButtonText = function () {
            return localText('Controls.ImageUpload.AddFileButton');
        };
        MultipleFileUploadEditor.prototype.getToolButtons = function () {
            return [{
                    title: this.addFileButtonText(),
                    action: 'add-file',
                    cssClass: 'add-file-button',
                    onClick: function () {
                    }
                }];
        };
        MultipleFileUploadEditor.prototype.populate = function () {
            var _this = this;
            exports.UploadHelper.populateFileSymbols(this.fileSymbols, this.entities, true, this.options.urlPrefix);
            this.fileSymbols.children().each(function (i, e) {
                var x = i;
                $("<a class='delete'></a>").appendTo($(e).children('.filename'))
                    .click(function (ev) {
                    ev.preventDefault();
                    _this.entities.splice(x, 1);
                    _this.populate();
                    var validator = _this.hiddenInput.closest('form').data('validator');
                    if (validator != null) {
                        validator.element(_this.hiddenInput);
                    }
                });
            });
            this.hiddenInput.val(trimToNull((this.get_value()[0] || {}).Filename));
        };
        MultipleFileUploadEditor.prototype.updateInterface = function () {
            var addButton = this.toolbar.findButton('add-file-button');
            addButton.toggleClass('disabled', this.get_readOnly());
            this.fileSymbols.find('a.delete').toggle(!this.get_readOnly());
        };
        MultipleFileUploadEditor.prototype.get_readOnly = function () {
            return this.uploadInput.attr('disabled') != null;
        };
        MultipleFileUploadEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.uploadInput.attr('disabled', 'disabled');
                    try {
                        this.uploadInput.fileupload('disable');
                    }
                    catch (_a) {
                    }
                }
                else {
                    this.uploadInput.removeAttr('disabled');
                    try {
                        this.uploadInput.fileupload('enable');
                    }
                    catch (_b) {
                    }
                }
                this.updateInterface();
            }
        };
        MultipleFileUploadEditor.prototype.get_required = function () {
            return this.hiddenInput.hasClass('required');
        };
        MultipleFileUploadEditor.prototype.set_required = function (value) {
            this.hiddenInput && this.hiddenInput.toggleClass('required', !!value);
        };
        MultipleFileUploadEditor.prototype.get_value = function () {
            return this.entities.map(function (x) {
                return extend({}, x);
            });
        };
        Object.defineProperty(MultipleFileUploadEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        MultipleFileUploadEditor.prototype.set_value = function (value) {
            this.entities = (value || []).map(function (x) {
                return extend({}, x);
            });
            this.populate();
            this.updateInterface();
        };
        MultipleFileUploadEditor.prototype.getEditValue = function (property, target) {
            if (this.jsonEncodeValue) {
                target[property.name] = JSON.stringify(this.get_value());
            }
            else {
                target[property.name] = this.get_value();
            }
        };
        MultipleFileUploadEditor.prototype.setEditValue = function (source, property) {
            var _a;
            var val = source[property.name];
            if (isInstanceOfType(val, String)) {
                var json = (_a = trimToNull(val)) !== null && _a !== void 0 ? _a : '[]';
                if (startsWith(json, '[') && endsWith(json, ']')) {
                    this.set_value($.parseJSON(json));
                }
                else {
                    this.set_value([{
                            Filename: json,
                            OriginalName: 'UnknownFile'
                        }]);
                }
            }
            else {
                this.set_value(val);
            }
        };
        tslib.__decorate([
            exports.Decorators.option()
        ], MultipleFileUploadEditor.prototype, "jsonEncodeValue", void 0);
        MultipleFileUploadEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.MultipleFileUploadEditor', [IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired]),
            exports.Decorators.element('<div/>')
        ], MultipleFileUploadEditor);
        return MultipleFileUploadEditor;
    }(Widget));
    var MultipleImageUploadEditor = /** @class */ (function (_super) {
        tslib.__extends(MultipleImageUploadEditor, _super);
        function MultipleImageUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-MultipleImageUploadEditor');
            return _this;
        }
        MultipleImageUploadEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.MultipleImageUploadEditor')
        ], MultipleImageUploadEditor);
        return MultipleImageUploadEditor;
    }(MultipleFileUploadEditor));

    var QuickFilterBar = /** @class */ (function (_super) {
        tslib.__extends(QuickFilterBar, _super);
        function QuickFilterBar(container, options) {
            var _this = this;
            var _a;
            _this = _super.call(this, container, options) || this;
            container.addClass('quick-filters-bar').addClass('clear');
            var filters = _this.options.filters;
            for (var f = 0; f < filters.length; f++) {
                var filter = filters[f];
                _this.add(filter);
            }
            _this.options.idPrefix = ((_a = _this.options.idPrefix) !== null && _a !== void 0 ? _a : _this.uniqueName + '_');
            return _this;
        }
        QuickFilterBar_1 = QuickFilterBar;
        QuickFilterBar.prototype.addSeparator = function () {
            this.element.append($('<hr/>'));
        };
        QuickFilterBar.prototype.add = function (opt) {
            var _this = this;
            var _a;
            if (opt == null) {
                throw new ArgumentNullException('opt');
            }
            if (opt.separator) {
                this.addSeparator();
            }
            var item = $("<div class='quick-filter-item'><span class='quick-filter-label'></span></div>")
                .appendTo(this.element)
                .data('qffield', opt.field).children();
            var title = (_a = tryGetText(opt.title)) !== null && _a !== void 0 ? _a : opt.title;
            if (title == null) {
                title = this.options.getTitle ? this.options.getTitle(opt) : null;
                if (title == null) {
                    title = opt.field;
                }
            }
            var quickFilter = item.text(title).parent();
            if (opt.displayText != null) {
                quickFilter.data('qfdisplaytext', opt.displayText);
            }
            if (opt.saveState != null) {
                quickFilter.data('qfsavestate', opt.saveState);
            }
            if (opt.loadState != null) {
                quickFilter.data('qfloadstate', opt.loadState);
            }
            if (!isEmptyOrNull(opt.cssClass)) {
                quickFilter.addClass(opt.cssClass);
            }
            var widget = Widget.create({
                type: opt.type,
                element: function (e) {
                    if (!isEmptyOrNull(opt.field)) {
                        e.attr('id', _this.options.idPrefix + opt.field);
                    }
                    e.attr('placeholder', ' ');
                    e.appendTo(quickFilter);
                    if (opt.element != null) {
                        opt.element(e);
                    }
                },
                options: opt.options,
                init: opt.init
            });
            var submitHandler = function (request) {
                if (quickFilter.hasClass('ignore')) {
                    return;
                }
                request.EqualityFilter = request.EqualityFilter || {};
                var value = exports.EditorUtils.getValue(widget);
                var active = value != null && !isEmptyOrNull(value.toString());
                if (opt.handler != null) {
                    var args = {
                        field: opt.field,
                        request: request,
                        equalityFilter: request.EqualityFilter,
                        value: value,
                        active: active,
                        widget: widget,
                        handled: true
                    };
                    opt.handler(args);
                    quickFilter.toggleClass('quick-filter-active', args.active);
                    if (!args.handled) {
                        request.EqualityFilter[opt.field] = value;
                    }
                }
                else {
                    request.EqualityFilter[opt.field] = value;
                    quickFilter.toggleClass('quick-filter-active', active);
                }
            };
            widget.changeSelect2(function (e1) {
                // use timeout give cascaded dropdowns a chance to update / clear themselves
                window.setTimeout(function () { return _this.onChange && _this.onChange(e1); }, 0);
            });
            this.add_submitHandlers(submitHandler);
            widget.element.bind('remove.' + this.uniqueName, function (x) {
                _this.remove_submitHandlers(submitHandler);
            });
            return widget;
        };
        QuickFilterBar.prototype.addDateRange = function (field, title) {
            return this.add(QuickFilterBar_1.dateRange(field, title));
        };
        QuickFilterBar.dateRange = function (field, title) {
            var end = null;
            return {
                field: field,
                type: DateEditor,
                title: title,
                element: function (e1) {
                    end = Widget.create({
                        type: DateEditor,
                        element: function (e2) {
                            e2.insertAfter(e1);
                        },
                        options: null,
                        init: null
                    });
                    end.element.change(function (x) {
                        e1.triggerHandler('change');
                    });
                    $('<span/>').addClass('range-separator').text('-').insertAfter(e1);
                },
                handler: function (args) {
                    var date1 = parseDate(args.widget.value);
                    if (date1) {
                        if (isNaN(date1.valueOf())) {
                            notifyWarning(localText('Validation.DateInvalid'), '', null);
                            args.widget.element.val('');
                            date1 = null;
                        }
                        else {
                            args.request.Criteria = Criteria.and(args.request.Criteria, Criteria(args.field).ge(args.widget.value));
                        }
                    }
                    var date2 = parseDate(end.value);
                    if (date2) {
                        if (isNaN(date2 === null || date2 === void 0 ? void 0 : date2.valueOf())) {
                            notifyWarning(localText('Validation.DateInvalid'), '', null);
                            end.element.val('');
                            date2 = null;
                        }
                        else {
                            var next = new Date(end.valueAsDate.valueOf());
                            next.setDate(next.getDate() + 1);
                            args.request.Criteria = Criteria.and(args.request.Criteria, Criteria(args.field).lt(formatDate(next, 'yyyy-MM-dd')));
                        }
                    }
                    args.active = !!(date1 || date2);
                },
                displayText: function (w, l) {
                    var _a;
                    var v1 = exports.EditorUtils.getDisplayText(w);
                    var v2 = exports.EditorUtils.getDisplayText(end);
                    if (isEmptyOrNull(v1) && isEmptyOrNull(v2)) {
                        return null;
                    }
                    var text1 = l + ' >= ' + v1;
                    var text2 = l + ' <= ' + v2;
                    if (!isEmptyOrNull(v1) && !isEmptyOrNull(v2)) {
                        return text1 + ' ' + ((_a = tryGetText('Controls.FilterPanel.And')) !== null && _a !== void 0 ? _a : 'and') + ' ' + text2;
                    }
                    else if (!isEmptyOrNull(v1)) {
                        return text1;
                    }
                    else {
                        return text2;
                    }
                },
                saveState: function (w1) {
                    return [exports.EditorUtils.getValue(w1), exports.EditorUtils.getValue(end)];
                },
                loadState: function (w2, state) {
                    if (state == null || !Array.isArray(state) || state.length !== 2) {
                        state = [null, null];
                    }
                    exports.EditorUtils.setValue(w2, state[0]);
                    exports.EditorUtils.setValue(end, state[1]);
                }
            };
        };
        QuickFilterBar.prototype.addDateTimeRange = function (field, title) {
            return this.add(QuickFilterBar_1.dateTimeRange(field, title));
        };
        QuickFilterBar.dateTimeRange = function (field, title, useUtc) {
            var end = null;
            return {
                field: field,
                type: DateTimeEditor,
                title: title,
                element: function (e1) {
                    end = Widget.create({
                        type: DateTimeEditor,
                        element: function (e2) {
                            e2.insertAfter(e1);
                        },
                        options: useUtc == null ? null : { useUtc: useUtc },
                        init: null
                    });
                    end.element.change(function (x) {
                        e1.triggerHandler('change');
                    });
                    $('<span/>').addClass('range-separator').text('-').insertAfter(e1);
                },
                init: function (i) {
                    i.element.parent().find('.time').change(function (x1) {
                        i.element.triggerHandler('change');
                    });
                },
                handler: function (args) {
                    var date1 = parseDate(args.widget.value);
                    if (date1) {
                        if (isNaN(date1 === null || date1 === void 0 ? void 0 : date1.valueOf())) {
                            notifyWarning(localText('Validation.DateInvalid'), '', null);
                            args.widget.element.val('');
                            date1 = null;
                        }
                        else {
                            args.request.Criteria = Criteria.and(args.request.Criteria, Criteria(args.field).ge(args.widget.value));
                        }
                    }
                    var date2 = parseDate(end.value);
                    if (date2) {
                        if (isNaN(date2 === null || date2 === void 0 ? void 0 : date2.valueOf())) {
                            notifyWarning(localText('Validation.DateInvalid'), '', null);
                            end.element.val('');
                            date2 = null;
                        }
                        else {
                            args.request.Criteria = Criteria.and(args.request.Criteria, Criteria(args.field).le(end.value));
                        }
                    }
                    args.active = !!(date1 || date2);
                },
                displayText: function (w, l) {
                    var _a;
                    var v1 = exports.EditorUtils.getDisplayText(w);
                    var v2 = exports.EditorUtils.getDisplayText(end);
                    if (isEmptyOrNull(v1) && isEmptyOrNull(v2)) {
                        return null;
                    }
                    var text1 = l + ' >= ' + v1;
                    var text2 = l + ' <= ' + v2;
                    if (!isEmptyOrNull(v1) && !isEmptyOrNull(v2)) {
                        return text1 + ' ' + ((_a = tryGetText('Controls.FilterPanel.And')) !== null && _a !== void 0 ? _a : 'and') + ' ' + text2;
                    }
                    else if (!isEmptyOrNull(v1)) {
                        return text1;
                    }
                    else {
                        return text2;
                    }
                },
                saveState: function (w1) {
                    return [exports.EditorUtils.getValue(w1), exports.EditorUtils.getValue(end)];
                },
                loadState: function (w2, state) {
                    if (state == null || !Array.isArray(state) || state.length !== 2) {
                        state = [null, null];
                    }
                    exports.EditorUtils.setValue(w2, state[0]);
                    exports.EditorUtils.setValue(end, state[1]);
                },
                options: useUtc == null ? null : { useUtc: useUtc }
            };
        };
        QuickFilterBar.prototype.addBoolean = function (field, title, yes, no) {
            return this.add(QuickFilterBar_1.boolean(field, title, yes, no));
        };
        QuickFilterBar.boolean = function (field, title, yes, no) {
            var opt = {};
            var items = [];
            var trueText = yes;
            if (trueText == null) {
                trueText = localText('Controls.FilterPanel.OperatorNames.true');
            }
            items.push(['1', trueText]);
            var falseText = no;
            if (falseText == null) {
                falseText = localText('Controls.FilterPanel.OperatorNames.false');
            }
            items.push(['0', falseText]);
            opt.items = items;
            return {
                field: field,
                type: SelectEditor,
                title: title,
                options: opt,
                handler: function (args) {
                    args.equalityFilter[args.field] = args.value == null || isEmptyOrNull(args.value.toString()) ?
                        null : !!toId(args.value);
                }
            };
        };
        QuickFilterBar.prototype.destroy = function () {
            this.submitHandlers = null;
            _super.prototype.destroy.call(this);
        };
        QuickFilterBar.prototype.onSubmit = function (request) {
            this.submitHandlers && this.submitHandlers(request);
        };
        QuickFilterBar.prototype.add_submitHandlers = function (action) {
            this.submitHandlers = delegateCombine(this.submitHandlers, action);
        };
        QuickFilterBar.prototype.remove_submitHandlers = function (action) {
            this.submitHandlers = delegateRemove(this.submitHandlers, action);
        };
        QuickFilterBar.prototype.clear_submitHandlers = function () {
        };
        QuickFilterBar.prototype.find = function (type, field) {
            return $('#' + this.options.idPrefix + field).getWidget(type);
        };
        QuickFilterBar.prototype.tryFind = function (type, field) {
            var el = $('#' + this.options.idPrefix + field);
            if (!el.length)
                return null;
            return el.tryGetWidget(type);
        };
        var QuickFilterBar_1;
        QuickFilterBar = QuickFilterBar_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.QuickFilterBar'),
            exports.Decorators.element("<div/>")
        ], QuickFilterBar);
        return QuickFilterBar;
    }(Widget));

    var QuickSearchInput = /** @class */ (function (_super) {
        tslib.__extends(QuickSearchInput, _super);
        function QuickSearchInput(input, opt) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, input, opt) || this;
            input.attr('title', localText('Controls.QuickSearch.Hint'))
                .attr('placeholder', localText('Controls.QuickSearch.Placeholder'));
            _this.lastValue = trim((_a = input.val()) !== null && _a !== void 0 ? _a : '');
            var self = _this;
            _this.element.bind('keyup.' + _this.uniqueName, function () {
                self.checkIfValueChanged();
            });
            _this.element.bind('change.' + _this.uniqueName, function () {
                self.checkIfValueChanged();
            });
            $('<span><i></i></span>').addClass('quick-search-icon')
                .insertBefore(input);
            if (isValue(_this.options.fields) && _this.options.fields.length > 0) {
                var a = $('<a/>').addClass('quick-search-field').attr('title', localText('Controls.QuickSearch.FieldSelection')).insertBefore(input);
                var menu = $('<ul></ul>').css('width', '120px');
                for (var _i = 0, _c = _this.options.fields; _i < _c.length; _i++) {
                    var item = _c[_i];
                    var field = { $: item };
                    $('<li><a/></li>').appendTo(menu).children().attr('href', '#')
                        .text((_b = item.title) !== null && _b !== void 0 ? _b : '').click(function (e) {
                        e.preventDefault();
                        this.$this.fieldChanged = self.field !== this.field.$;
                        self.field = this.field.$;
                        this.$this.updateInputPlaceHolder();
                        this.$this.checkIfValueChanged();
                    }.bind({
                        field: field,
                        $this: _this
                    }));
                }
                new PopupMenuButton(a, {
                    positionMy: 'right top',
                    positionAt: 'right bottom',
                    menu: menu
                });
                _this.field = _this.options.fields[0];
                _this.updateInputPlaceHolder();
            }
            _this.element.bind('execute-search.' + _this.uniqueName, function (e1) {
                var _a;
                if (!!_this.timer) {
                    window.clearTimeout(_this.timer);
                }
                _this.searchNow(trim((_a = _this.element.val()) !== null && _a !== void 0 ? _a : ''));
            });
            return _this;
        }
        QuickSearchInput.prototype.checkIfValueChanged = function () {
            var _a;
            if (this.element.hasClass('ignore-change')) {
                return;
            }
            var value = this.get_value();
            if (value == this.lastValue && (!this.fieldChanged || isEmptyOrNull(value))) {
                this.fieldChanged = false;
                return;
            }
            this.fieldChanged = false;
            if (!!this.timer) {
                window.clearTimeout(this.timer);
            }
            var self = this;
            this.timer = window.setTimeout(function () {
                self.searchNow(value);
            }, (_a = this.options.typeDelay) !== null && _a !== void 0 ? _a : 500);
            this.lastValue = value;
        };
        QuickSearchInput.prototype.get_value = function () {
            var _a;
            return trim((_a = this.element.val()) !== null && _a !== void 0 ? _a : '');
        };
        QuickSearchInput.prototype.get_field = function () {
            return this.field;
        };
        QuickSearchInput.prototype.set_field = function (value) {
            if (this.field !== value) {
                this.fieldChanged = true;
                this.field = value;
                this.updateInputPlaceHolder();
                this.checkIfValueChanged();
            }
        };
        QuickSearchInput.prototype.updateInputPlaceHolder = function () {
            var qsf = this.element.prevAll('.quick-search-field');
            if (this.field) {
                qsf.text(this.field.title);
            }
            else {
                qsf.text('');
            }
        };
        QuickSearchInput.prototype.restoreState = function (value, field) {
            this.fieldChanged = false;
            this.field = field;
            var value = trim(value !== null && value !== void 0 ? value : '');
            this.element.val(value);
            this.lastValue = value;
            if (!!this.timer) {
                window.clearTimeout(this.timer);
                this.timer = null;
            }
            this.updateInputPlaceHolder();
        };
        QuickSearchInput.prototype.searchNow = function (value) {
            var _this = this;
            var _a, _b, _c;
            this.element.parent().toggleClass(((_a = this.options.filteredParentClass) !== null && _a !== void 0 ? _a : 's-QuickSearchFiltered'), !!(value.length > 0));
            this.element.parent().addClass((_b = this.options.loadingParentClass) !== null && _b !== void 0 ? _b : 's-QuickSearchLoading')
                .addClass((_c = this.options.loadingParentClass) !== null && _c !== void 0 ? _c : 's-QuickSearchLoading');
            var done = function (results) {
                var _a, _b;
                _this.element.removeClass((_a = _this.options.loadingParentClass) !== null && _a !== void 0 ? _a : 's-QuickSearchLoading')
                    .parent().removeClass((_b = _this.options.loadingParentClass) !== null && _b !== void 0 ? _b : 's-QuickSearchLoading');
                if (!results) {
                    var el = _this.element.closest('.s-QuickSearchBar')
                        .find('.quick-search-icon i')[0];
                    if (el) {
                        el.classList.add('s-shake-effect');
                        setTimeout(function () { return el.classList.remove('s-shake-effect'); }, 2000);
                    }
                }
            };
            if (this.options.onSearch != null) {
                this.options.onSearch(((this.field != null &&
                    !isEmptyOrNull(this.field.name)) ? this.field.name : null), value, done);
            }
            else {
                done(true);
            }
        };
        QuickSearchInput = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.QuickSearchInput')
        ], QuickSearchInput);
        return QuickSearchInput;
    }(Widget));

    exports.FilterOperators = void 0;
    (function (FilterOperators) {
        FilterOperators.isTrue = 'true';
        FilterOperators.isFalse = 'false';
        FilterOperators.contains = 'contains';
        FilterOperators.startsWith = 'startswith';
        FilterOperators.EQ = 'eq';
        FilterOperators.NE = 'ne';
        FilterOperators.GT = 'gt';
        FilterOperators.GE = 'ge';
        FilterOperators.LT = 'lt';
        FilterOperators.LE = 'le';
        FilterOperators.BW = 'bw';
        FilterOperators.IN = 'in';
        FilterOperators.isNull = 'isnull';
        FilterOperators.isNotNull = 'isnotnull';
        FilterOperators.toCriteriaOperator = {
            eq: '=',
            ne: '!=',
            gt: '>',
            ge: '>=',
            lt: '<',
            le: '<='
        };
    })(exports.FilterOperators || (exports.FilterOperators = {}));

    var FilterStore = /** @class */ (function () {
        function FilterStore(fields) {
            this.items = [];
            if (fields == null) {
                throw new ArgumentNullException('source');
            }
            this.fields = fields.slice();
            this.get_fields().sort(function (x, y) {
                var titleX = tryGetText(x.title);
                if (titleX == null) {
                    titleX = x.title;
                    if (titleX == null)
                        titleX = x.name;
                }
                var titleY = tryGetText(y.title);
                if (titleY == null) {
                    titleY = y.title;
                    if (titleY == null)
                        titleY = y.name;
                }
                return Culture.stringCompare(titleX, titleY);
            });
            this.fieldByName = {};
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                this.get_fieldByName()[field.name] = field;
            }
        }
        FilterStore_1 = FilterStore;
        FilterStore.getCriteriaFor = function (items) {
            if (items == null)
                return [''];
            var inParens = false;
            var currentBlock = [''];
            var isBlockOr = false;
            var criteria = [''];
            for (var i = 0; i < items.length; i++) {
                var line = items[i];
                if (line.leftParen || inParens && line.rightParen) {
                    if (!Criteria.isEmpty(currentBlock)) {
                        if (inParens)
                            currentBlock = Criteria.paren(currentBlock);
                        if (isBlockOr)
                            criteria = Criteria.or(criteria, currentBlock);
                        else
                            criteria = Criteria.and(criteria, currentBlock);
                        currentBlock = [''];
                    }
                    inParens = false;
                }
                if (line.leftParen) {
                    isBlockOr = line.isOr;
                    inParens = true;
                }
                if (line.isOr)
                    currentBlock = Criteria.or(currentBlock, line.criteria);
                else
                    currentBlock = Criteria.and(currentBlock, line.criteria);
            }
            if (!Criteria.isEmpty(currentBlock)) {
                if (isBlockOr)
                    criteria = Criteria.or(criteria, Criteria.paren(currentBlock));
                else
                    criteria = Criteria.and(criteria, Criteria.paren(currentBlock));
            }
            return criteria;
        };
        FilterStore.getDisplayTextFor = function (items) {
            if (items == null)
                return '';
            var inParens = false;
            var displayText = '';
            for (var i = 0; i < items.length; i++) {
                var line = items[i];
                if (inParens && (line.rightParen || line.leftParen)) {
                    displayText += ')';
                    inParens = false;
                }
                if (displayText.length > 0) {
                    displayText += ' ' + localText('Controls.FilterPanel.' +
                        (line.isOr ? 'Or' : 'And')) + ' ';
                }
                if (line.leftParen) {
                    displayText += '(';
                    inParens = true;
                }
                displayText += line.displayText;
            }
            if (inParens) {
                displayText += ')';
            }
            return displayText;
        };
        FilterStore.prototype.get_fields = function () {
            return this.fields;
        };
        FilterStore.prototype.get_fieldByName = function () {
            return this.fieldByName;
        };
        FilterStore.prototype.get_items = function () {
            return this.items;
        };
        FilterStore.prototype.raiseChanged = function () {
            this.displayText = null;
            this.changed && this.changed(this, {});
        };
        FilterStore.prototype.add_changed = function (value) {
            this.changed = delegateCombine(this.changed, value);
        };
        FilterStore.prototype.remove_changed = function (value) {
            this.changed = delegateRemove(this.changed, value);
        };
        FilterStore.prototype.get_activeCriteria = function () {
            return FilterStore_1.getCriteriaFor(this.items);
        };
        FilterStore.prototype.get_displayText = function () {
            if (this.displayText == null)
                this.displayText = FilterStore_1.getDisplayTextFor(this.items);
            return this.displayText;
        };
        var FilterStore_1;
        FilterStore = FilterStore_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.FilterStore')
        ], FilterStore);
        return FilterStore;
    }());

    var IFiltering = /** @class */ (function () {
        function IFiltering() {
        }
        IFiltering = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IFiltering')
        ], IFiltering);
        return IFiltering;
    }());
    var IQuickFiltering = /** @class */ (function () {
        function IQuickFiltering() {
        }
        IQuickFiltering = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IQuickFiltering')
        ], IQuickFiltering);
        return IQuickFiltering;
    }());
    var BaseFiltering = /** @class */ (function () {
        function BaseFiltering() {
        }
        BaseFiltering.prototype.get_field = function () {
            return this.field;
        };
        BaseFiltering.prototype.set_field = function (value) {
            this.field = value;
        };
        BaseFiltering.prototype.get_container = function () {
            return this.container;
        };
        BaseFiltering.prototype.set_container = function (value) {
            this.container = value;
        };
        BaseFiltering.prototype.get_operator = function () {
            return this.operator;
        };
        BaseFiltering.prototype.set_operator = function (value) {
            this.operator = value;
        };
        BaseFiltering.prototype.appendNullableOperators = function (list) {
            if (!this.isNullable()) {
                return list;
            }
            list.push({ key: exports.FilterOperators.isNotNull });
            list.push({ key: exports.FilterOperators.isNull });
            return list;
        };
        BaseFiltering.prototype.appendComparisonOperators = function (list) {
            list.push({ key: exports.FilterOperators.EQ });
            list.push({ key: exports.FilterOperators.NE });
            list.push({ key: exports.FilterOperators.LT });
            list.push({ key: exports.FilterOperators.LE });
            list.push({ key: exports.FilterOperators.GT });
            list.push({ key: exports.FilterOperators.GE });
            return list;
        };
        BaseFiltering.prototype.isNullable = function () {
            return this.get_field().required !== true;
        };
        BaseFiltering.prototype.createEditor = function () {
            switch (this.get_operator().key) {
                case 'true':
                case 'false':
                case 'isnull':
                case 'isnotnull': {
                    return;
                }
                case 'contains':
                case 'startswith':
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    this.get_container().html('<input type="text"/>');
                    return;
                }
            }
            throw new Exception(format("Filtering '{0}' has no editor for '{1}' operator", getTypeFullName(getInstanceType(this)), this.get_operator().key));
        };
        BaseFiltering.prototype.operatorFormat = function (op) {
            var _a, _b;
            return (_b = (_a = op.format) !== null && _a !== void 0 ? _a : tryGetText('Controls.FilterPanel.OperatorFormats.' + op.key)) !== null && _b !== void 0 ? _b : op.key;
        };
        BaseFiltering.prototype.getTitle = function (field) {
            var _a, _b;
            return (_a = tryGetText(field.title)) !== null && _a !== void 0 ? _a : ((_b = field.title) !== null && _b !== void 0 ? _b : field.name);
        };
        BaseFiltering.prototype.displayText = function (op, values) {
            if (!values || values.length === 0) {
                return format(this.operatorFormat(op), this.getTitle(this.field));
            }
            else if (values.length === 1) {
                return format(this.operatorFormat(op), this.getTitle(this.field), values[0]);
            }
            else {
                return format(this.operatorFormat(op), this.getTitle(this.field), values[0], values[1]);
            }
        };
        BaseFiltering.prototype.getCriteriaField = function () {
            return this.field.name;
        };
        BaseFiltering.prototype.getCriteria = function () {
            var result = {};
            var text;
            var field = Criteria(this.getCriteriaField());
            var op = this.get_operator().key;
            switch (op) {
                case 'true': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = field.eq(true);
                    return result;
                }
                case 'false': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = field.eq(false);
                    return result;
                }
                case 'isnull': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = field.isNull();
                    return result;
                }
                case 'isnotnull': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = field.isNotNull();
                    return result;
                }
                case 'contains': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = field.contains(text);
                    return result;
                }
                case 'startswith': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = field.startsWith(text);
                    return result;
                }
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = field[op](this.getEditorValue());
                    return result;
                }
            }
            throw new Exception(format("Filtering '{0}' has no handler for '{1}' operator", getTypeFullName(getInstanceType(this)), this.get_operator().key));
        };
        BaseFiltering.prototype.loadState = function (state) {
            var input = this.get_container().find(':input').first();
            input.val(state);
        };
        BaseFiltering.prototype.saveState = function () {
            switch (this.get_operator().key) {
                case 'contains':
                case 'startswith':
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    var input = this.get_container().find(':input').first();
                    return input.val();
                }
            }
            return null;
        };
        BaseFiltering.prototype.argumentNull = function () {
            return new Error(localText('Controls.FilterPanel.ValueRequired'));
        };
        BaseFiltering.prototype.validateEditorValue = function (value) {
            if (value.length === 0) {
                throw this.argumentNull();
            }
            return value;
        };
        BaseFiltering.prototype.getEditorValue = function () {
            var _a;
            var input = this.get_container().find(':input').not('.select2-focusser').first();
            if (input.length !== 1) {
                throw new Exception(format("Couldn't find input in filter container for {0}", ((_a = this.field.title) !== null && _a !== void 0 ? _a : this.field.name)));
            }
            var value;
            if (input.data('select2') != null) {
                value = input.select2('val');
            }
            else {
                value = input.val();
            }
            value = (value !== null && value !== void 0 ? value : '').trim();
            return this.validateEditorValue(value);
        };
        BaseFiltering.prototype.getEditorText = function () {
            var _a;
            var input = this.get_container().find(':input').not('.select2-focusser').not('.select2-input').first();
            if (input.length === 0) {
                return this.get_container().text().trim();
            }
            var value;
            if (input.data('select2') != null) {
                value = ((_a = input.select2('data')) !== null && _a !== void 0 ? _a : {}).text;
            }
            else {
                value = input.val();
            }
            return value;
        };
        BaseFiltering.prototype.initQuickFilter = function (filter) {
            filter.field = this.getCriteriaField();
            filter.type = StringEditor;
            filter.title = this.getTitle(this.field);
            filter.options = deepClone(this.get_field().quickFilterParams);
        };
        BaseFiltering = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.BaseFiltering', [IFiltering, IQuickFiltering])
        ], BaseFiltering);
        return BaseFiltering;
    }());
    function Filtering(name) {
        return exports.Decorators.registerClass('Serenity.' + name + 'Filtering');
    }
    var BaseEditorFiltering = /** @class */ (function (_super) {
        tslib.__extends(BaseEditorFiltering, _super);
        function BaseEditorFiltering(editorType) {
            var _this = _super.call(this) || this;
            _this.editorType = editorType;
            return _this;
        }
        BaseEditorFiltering.prototype.useEditor = function () {
            switch (this.get_operator().key) {
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge':
                    return true;
            }
            return false;
        };
        BaseEditorFiltering.prototype.createEditor = function () {
            if (this.useEditor()) {
                this.editor = Widget.create({
                    type: this.editorType,
                    container: this.get_container(),
                    options: this.getEditorOptions(),
                    init: null
                });
                return;
            }
            this.editor = null;
            _super.prototype.createEditor.call(this);
        };
        BaseEditorFiltering.prototype.useIdField = function () {
            return false;
        };
        BaseEditorFiltering.prototype.getCriteriaField = function () {
            if (this.useEditor() &&
                this.useIdField() &&
                !isEmptyOrNull(this.get_field().filteringIdField)) {
                return this.get_field().filteringIdField;
            }
            return _super.prototype.getCriteriaField.call(this);
        };
        BaseEditorFiltering.prototype.getEditorOptions = function () {
            var opt = deepClone(this.get_field().editorParams || {});
            delete opt['cascadeFrom'];
            // currently can't support cascadeFrom in filtering
            return extend(opt, this.get_field().filteringParams);
        };
        BaseEditorFiltering.prototype.loadState = function (state) {
            if (this.useEditor()) {
                if (state == null) {
                    return;
                }
                exports.EditorUtils.setValue(this.editor, state);
                return;
            }
            _super.prototype.loadState.call(this, state);
        };
        BaseEditorFiltering.prototype.saveState = function () {
            if (this.useEditor()) {
                return exports.EditorUtils.getValue(this.editor);
            }
            return _super.prototype.saveState.call(this);
        };
        BaseEditorFiltering.prototype.getEditorValue = function () {
            if (this.useEditor()) {
                var value = exports.EditorUtils.getValue(this.editor);
                if (value == null || (typeof value == "string" && value.trim().length === 0))
                    throw this.argumentNull();
                return value;
            }
            return _super.prototype.getEditorValue.call(this);
        };
        BaseEditorFiltering.prototype.initQuickFilter = function (filter) {
            _super.prototype.initQuickFilter.call(this, filter);
            filter.type = this.editorType;
            filter.options = extend(extend({}, deepClone(this.getEditorOptions())), deepClone(this.get_field().quickFilterParams));
        };
        BaseEditorFiltering = tslib.__decorate([
            Filtering('BaseEditor')
        ], BaseEditorFiltering);
        return BaseEditorFiltering;
    }(BaseFiltering));
    var DateFiltering = /** @class */ (function (_super) {
        tslib.__extends(DateFiltering, _super);
        function DateFiltering() {
            return _super.call(this, DateEditor) || this;
        }
        DateFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        DateFiltering = tslib.__decorate([
            Filtering('Date')
        ], DateFiltering);
        return DateFiltering;
    }(BaseEditorFiltering));
    var BooleanFiltering = /** @class */ (function (_super) {
        tslib.__extends(BooleanFiltering, _super);
        function BooleanFiltering() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators([
                { key: exports.FilterOperators.isTrue },
                { key: exports.FilterOperators.isFalse }
            ]);
        };
        BooleanFiltering = tslib.__decorate([
            Filtering('Boolean')
        ], BooleanFiltering);
        return BooleanFiltering;
    }(BaseFiltering));
    var DateTimeFiltering = /** @class */ (function (_super) {
        tslib.__extends(DateTimeFiltering, _super);
        function DateTimeFiltering() {
            return _super.call(this, DateTimeEditor) || this;
        }
        DateTimeFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        DateTimeFiltering.prototype.getCriteria = function () {
            var result = {};
            switch (this.get_operator().key) {
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    {
                        var text = this.getEditorText();
                        result.displayText = this.displayText(this.get_operator(), [text]);
                        var date = parseISODateTime(this.getEditorValue());
                        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                        var next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                        var criteria = Criteria(this.getCriteriaField());
                        var dateValue = formatDate(date, 'yyyy-MM-dd');
                        var nextValue = formatDate(next, 'yyyy-MM-dd');
                        switch (this.get_operator().key) {
                            case 'eq': {
                                result.criteria = Criteria.and(criteria.ge(dateValue), criteria.lt(nextValue));
                                return result;
                            }
                            case 'ne': {
                                result.criteria = Criteria.paren(Criteria.or(criteria.lt(dateValue), criteria.gt(nextValue)));
                                return result;
                            }
                            case 'lt': {
                                result.criteria = criteria.lt(dateValue);
                                return result;
                            }
                            case 'le': {
                                result.criteria = criteria.lt(nextValue);
                            }
                            case 'gt': {
                                result.criteria = criteria.ge(nextValue);
                                return result;
                            }
                            case 'ge': {
                                result.criteria = criteria.ge(dateValue);
                                return result;
                            }
                        }
                    }
                    break;
                }
            }
            return _super.prototype.getCriteria.call(this);
        };
        DateTimeFiltering = tslib.__decorate([
            Filtering('DateTime')
        ], DateTimeFiltering);
        return DateTimeFiltering;
    }(BaseEditorFiltering));
    var DecimalFiltering = /** @class */ (function (_super) {
        tslib.__extends(DecimalFiltering, _super);
        function DecimalFiltering() {
            return _super.call(this, DecimalEditor) || this;
        }
        DecimalFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        DecimalFiltering = tslib.__decorate([
            Filtering('Decimal')
        ], DecimalFiltering);
        return DecimalFiltering;
    }(BaseEditorFiltering));
    var EditorFiltering = /** @class */ (function (_super) {
        tslib.__extends(EditorFiltering, _super);
        function EditorFiltering() {
            return _super.call(this, Widget) || this;
        }
        EditorFiltering.prototype.getOperators = function () {
            var list = [];
            list.push({ key: exports.FilterOperators.EQ });
            list.push({ key: exports.FilterOperators.NE });
            if (this.useRelative) {
                list.push({ key: exports.FilterOperators.LT });
                list.push({ key: exports.FilterOperators.LE });
                list.push({ key: exports.FilterOperators.GT });
                list.push({ key: exports.FilterOperators.GE });
            }
            if (this.useLike) {
                list.push({ key: exports.FilterOperators.contains });
                list.push({ key: exports.FilterOperators.startsWith });
            }
            this.appendNullableOperators(list);
            return list;
        };
        EditorFiltering.prototype.useEditor = function () {
            var op = this.get_operator().key;
            return op === exports.FilterOperators.EQ ||
                op === exports.FilterOperators.NE ||
                (this.useRelative && (op === exports.FilterOperators.LT ||
                    op === exports.FilterOperators.LE ||
                    op === exports.FilterOperators.GT ||
                    op === exports.FilterOperators.GE));
        };
        EditorFiltering.prototype.getEditorOptions = function () {
            var _a;
            var opt = _super.prototype.getEditorOptions.call(this);
            if (this.useEditor() && this.editorType === ((_a = this.get_field().editorType) !== null && _a !== void 0 ? _a : 'String')) {
                opt = extend(opt, this.get_field().editorParams);
            }
            return opt;
        };
        EditorFiltering.prototype.createEditor = function () {
            var _this = this;
            if (this.useEditor()) {
                var editorType = exports.EditorTypeRegistry.get(this.editorType);
                this.editor = Widget.create({
                    type: editorType,
                    element: function (e) { return e.appendTo(_this.get_container()); },
                    options: this.getEditorOptions()
                });
                return;
            }
            _super.prototype.createEditor.call(this);
        };
        EditorFiltering.prototype.useIdField = function () {
            return this.useEditor();
        };
        EditorFiltering.prototype.initQuickFilter = function (filter) {
            _super.prototype.initQuickFilter.call(this, filter);
            filter.type = exports.EditorTypeRegistry.get(this.editorType);
        };
        tslib.__decorate([
            exports.Decorators.option()
        ], EditorFiltering.prototype, "editorType", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], EditorFiltering.prototype, "useRelative", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], EditorFiltering.prototype, "useLike", void 0);
        EditorFiltering = tslib.__decorate([
            Filtering('Editor')
        ], EditorFiltering);
        return EditorFiltering;
    }(BaseEditorFiltering));
    var EnumFiltering = /** @class */ (function (_super) {
        tslib.__extends(EnumFiltering, _super);
        function EnumFiltering() {
            return _super.call(this, EnumEditor) || this;
        }
        EnumFiltering.prototype.getOperators = function () {
            var op = [{ key: exports.FilterOperators.EQ }, { key: exports.FilterOperators.NE }];
            return this.appendNullableOperators(op);
        };
        EnumFiltering = tslib.__decorate([
            Filtering('Enum')
        ], EnumFiltering);
        return EnumFiltering;
    }(BaseEditorFiltering));
    var IntegerFiltering = /** @class */ (function (_super) {
        tslib.__extends(IntegerFiltering, _super);
        function IntegerFiltering() {
            return _super.call(this, IntegerEditor) || this;
        }
        IntegerFiltering.prototype.getOperators = function () {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        };
        IntegerFiltering = tslib.__decorate([
            Filtering('Integer')
        ], IntegerFiltering);
        return IntegerFiltering;
    }(BaseEditorFiltering));
    var LookupFiltering = /** @class */ (function (_super) {
        tslib.__extends(LookupFiltering, _super);
        function LookupFiltering() {
            return _super.call(this, LookupEditor) || this;
        }
        LookupFiltering.prototype.getOperators = function () {
            var ops = [{ key: exports.FilterOperators.EQ }, { key: exports.FilterOperators.NE }, { key: exports.FilterOperators.contains }, { key: exports.FilterOperators.startsWith }];
            return this.appendNullableOperators(ops);
        };
        LookupFiltering.prototype.useEditor = function () {
            var op = this.get_operator().key;
            return op == exports.FilterOperators.EQ || op == exports.FilterOperators.NE;
        };
        LookupFiltering.prototype.useIdField = function () {
            return this.useEditor();
        };
        LookupFiltering.prototype.getEditorText = function () {
            if (this.useEditor()) {
                return this.editor.text;
            }
            return _super.prototype.getEditorText.call(this);
        };
        LookupFiltering = tslib.__decorate([
            Filtering('Lookup')
        ], LookupFiltering);
        return LookupFiltering;
    }(BaseEditorFiltering));
    var ServiceLookupFiltering = /** @class */ (function (_super) {
        tslib.__extends(ServiceLookupFiltering, _super);
        function ServiceLookupFiltering() {
            return _super.call(this, ServiceLookupEditor) || this;
        }
        ServiceLookupFiltering.prototype.getOperators = function () {
            var ops = [{ key: exports.FilterOperators.EQ }, { key: exports.FilterOperators.NE }, { key: exports.FilterOperators.contains }, { key: exports.FilterOperators.startsWith }];
            return this.appendNullableOperators(ops);
        };
        ServiceLookupFiltering.prototype.useEditor = function () {
            var op = this.get_operator().key;
            return op == exports.FilterOperators.EQ || op == exports.FilterOperators.NE;
        };
        ServiceLookupFiltering.prototype.useIdField = function () {
            return this.useEditor();
        };
        ServiceLookupFiltering.prototype.getEditorText = function () {
            if (this.useEditor()) {
                return this.editor.text;
            }
            return _super.prototype.getEditorText.call(this);
        };
        ServiceLookupFiltering = tslib.__decorate([
            Filtering('ServiceLookup')
        ], ServiceLookupFiltering);
        return ServiceLookupFiltering;
    }(BaseEditorFiltering));
    var StringFiltering = /** @class */ (function (_super) {
        tslib.__extends(StringFiltering, _super);
        function StringFiltering() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringFiltering.prototype.getOperators = function () {
            var ops = [
                { key: exports.FilterOperators.contains },
                { key: exports.FilterOperators.startsWith },
                { key: exports.FilterOperators.EQ },
                { key: exports.FilterOperators.NE }
            ];
            return this.appendNullableOperators(ops);
        };
        StringFiltering.prototype.validateEditorValue = function (value) {
            if (value.length === 0) {
                return value;
            }
            return _super.prototype.validateEditorValue.call(this, value);
        };
        StringFiltering = tslib.__decorate([
            Filtering('String')
        ], StringFiltering);
        return StringFiltering;
    }(BaseFiltering));
    exports.FilteringTypeRegistry = void 0;
    (function (FilteringTypeRegistry) {
        var knownTypes;
        function initialize() {
            if (knownTypes != null)
                return;
            knownTypes = {};
            for (var _i = 0, _a = getTypes(); _i < _a.length; _i++) {
                var type = _a[_i];
                if (!isAssignableFrom(IFiltering, type))
                    continue;
                var fullName = getTypeFullName(type).toLowerCase();
                knownTypes[fullName] = type;
                for (var _b = 0, _c = Config.rootNamespaces; _b < _c.length; _b++) {
                    var k = _c[_b];
                    if (startsWith(fullName, k.toLowerCase() + '.')) {
                        var kx = fullName.substr(k.length + 1).toLowerCase();
                        if (knownTypes[kx] == null) {
                            knownTypes[kx] = type;
                        }
                    }
                }
            }
            setTypeKeysWithoutFilterHandlerSuffix();
        }
        function setTypeKeysWithoutFilterHandlerSuffix() {
            var suffix = 'filtering';
            for (var _i = 0, _a = Object.keys(knownTypes); _i < _a.length; _i++) {
                var k = _a[_i];
                if (!endsWith(k, suffix))
                    continue;
                var p = k.substr(0, k.length - suffix.length);
                if (isEmptyOrNull(p))
                    continue;
                if (knownTypes[p] != null)
                    continue;
                knownTypes[p] = knownTypes[k];
            }
        }
        function get(key) {
            if (isEmptyOrNull(key))
                throw new ArgumentNullException('key');
            initialize();
            var formatterType = knownTypes[key.toLowerCase()];
            if (formatterType == null)
                throw new Exception(format("Can't find {0} filter handler type!", key));
            return formatterType;
        }
        FilteringTypeRegistry.get = get;
    })(exports.FilteringTypeRegistry || (exports.FilteringTypeRegistry = {}));

    var FilterWidgetBase = /** @class */ (function (_super) {
        tslib.__extends(FilterWidgetBase, _super);
        function FilterWidgetBase(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            _this.store = new FilterStore([]);
            _this.onFilterStoreChanged = function () { return _this.filterStoreChanged(); };
            _this.store.add_changed(_this.onFilterStoreChanged);
            return _this;
        }
        FilterWidgetBase.prototype.destroy = function () {
            if (this.store) {
                this.store.remove_changed(this.onFilterStoreChanged);
                this.onFilterStoreChanged = null;
                this.store = null;
            }
            _super.prototype.destroy.call(this);
        };
        FilterWidgetBase.prototype.filterStoreChanged = function () {
        };
        FilterWidgetBase.prototype.get_store = function () {
            return this.store;
        };
        FilterWidgetBase.prototype.set_store = function (value) {
            if (this.store !== value) {
                if (this.store != null)
                    this.store.remove_changed(this.onFilterStoreChanged);
                this.store = value || new FilterStore([]);
                this.store.add_changed(this.onFilterStoreChanged);
                this.filterStoreChanged();
            }
        };
        FilterWidgetBase = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.FilterWidgetBase')
        ], FilterWidgetBase);
        return FilterWidgetBase;
    }(TemplatedWidget));

    var FilterFieldSelect = /** @class */ (function (_super) {
        tslib.__extends(FilterFieldSelect, _super);
        function FilterFieldSelect(hidden, fields) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, hidden) || this;
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                _this.addOption(field.name, ((_b = (_a = tryGetText(field.title)) !== null && _a !== void 0 ? _a : field.title) !== null && _b !== void 0 ? _b : field.name), field);
            }
            return _this;
        }
        FilterFieldSelect.prototype.emptyItemText = function () {
            if (isEmptyOrNull(this.value)) {
                return localText('Controls.FilterPanel.SelectField');
            }
            return null;
        };
        FilterFieldSelect.prototype.getSelect2Options = function () {
            var opt = _super.prototype.getSelect2Options.call(this);
            opt.allowClear = false;
            return opt;
        };
        FilterFieldSelect = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.FilterFieldSelect')
        ], FilterFieldSelect);
        return FilterFieldSelect;
    }(Select2Editor));
    var FilterOperatorSelect = /** @class */ (function (_super) {
        tslib.__extends(FilterOperatorSelect, _super);
        function FilterOperatorSelect(hidden, source) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, hidden) || this;
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                var op = source_1[_i];
                var title = ((_a = op.title) !== null && _a !== void 0 ? _a : ((_b = tryGetText("Controls.FilterPanel.OperatorNames." + op.key)) !== null && _b !== void 0 ? _b : op.key));
                _this.addOption(op.key, title, op);
            }
            if (source.length && source[0])
                _this.value = source[0].key;
            return _this;
        }
        FilterOperatorSelect.prototype.emptyItemText = function () {
            return null;
        };
        FilterOperatorSelect.prototype.getSelect2Options = function () {
            var opt = _super.prototype.getSelect2Options.call(this);
            opt.allowClear = false;
            return opt;
        };
        FilterOperatorSelect = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.FilterOperatorSelect')
        ], FilterOperatorSelect);
        return FilterOperatorSelect;
    }(Select2Editor));
    var FilterPanel = /** @class */ (function (_super) {
        tslib.__extends(FilterPanel, _super);
        function FilterPanel(div) {
            var _this = _super.call(this, div) || this;
            _this.element.addClass('s-FilterPanel');
            _this.rowsDiv = _this.byId('Rows');
            _this.initButtons();
            _this.updateButtons();
            return _this;
        }
        FilterPanel.prototype.get_showInitialLine = function () {
            return this.showInitialLine;
        };
        FilterPanel.prototype.set_showInitialLine = function (value) {
            if (this.showInitialLine !== value) {
                this.showInitialLine = value;
                if (this.showInitialLine && this.rowsDiv.children().length === 0) {
                    this.addEmptyRow(false);
                }
            }
        };
        FilterPanel.prototype.filterStoreChanged = function () {
            _super.prototype.filterStoreChanged.call(this);
            this.updateRowsFromStore();
        };
        FilterPanel.prototype.updateRowsFromStore = function () {
            this.rowsDiv.empty();
            var items = this.get_store().get_items();
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.addEmptyRow(false);
                var row = this.rowsDiv.children().last();
                var divl = row.children('div.l');
                divl.children('.leftparen').toggleClass('active', !!item.leftParen);
                divl.children('.rightparen').toggleClass('active', !!item.rightParen);
                divl.children('.andor').toggleClass('or', !!item.isOr)
                    .text(localText((!!item.isOr ? 'Controls.FilterPanel.Or' :
                    'Controls.FilterPanel.And')));
                var fieldSelect = row.children('div.f')
                    .find('input.field-select').getWidget(FilterFieldSelect);
                fieldSelect.value = item.field;
                this.rowFieldChange(row);
                var operatorSelect = row.children('div.o')
                    .find('input.op-select').getWidget(FilterOperatorSelect);
                operatorSelect.set_value(item.operator);
                this.rowOperatorChange(row);
                var filtering = this.getFilteringFor(row);
                if (filtering != null) {
                    filtering.set_operator({ key: item.operator });
                    filtering.loadState(item.state);
                }
            }
            if (this.get_showInitialLine() && this.rowsDiv.children().length === 0) {
                this.addEmptyRow(false);
            }
            this.updateParens();
        };
        FilterPanel.prototype.get_showSearchButton = function () {
            return this.showSearchButton;
        };
        FilterPanel.prototype.set_showSearchButton = function (value) {
            if (this.showSearchButton !== value) {
                this.showSearchButton = value;
                this.updateButtons();
            }
        };
        FilterPanel.prototype.get_updateStoreOnReset = function () {
            return this.updateStoreOnReset;
        };
        FilterPanel.prototype.set_updateStoreOnReset = function (value) {
            if (this.updateStoreOnReset !== value) {
                this.updateStoreOnReset = value;
            }
        };
        FilterPanel.prototype.getTemplate = function () {
            return "<div id='~_Rows' class='filter-lines'>" +
                "</div>" +
                "<div id='~_Buttons' class='buttons'>" +
                "<button id='~_AddButton' class='btn btn-primary add'></button>" +
                "<button id='~_SearchButton' class='btn btn-success search'></button>" +
                "<button id='~_ResetButton' class='btn btn-danger reset'></button>" +
                "</div>" +
                "<div style='clear: both'>" +
                "</div>";
        };
        FilterPanel.prototype.initButtons = function () {
            var _this = this;
            this.byId('AddButton').text(localText('Controls.FilterPanel.AddFilter'))
                .click(function (e) { return _this.addButtonClick(e); });
            this.byId('SearchButton').text(localText('Controls.FilterPanel.SearchButton'))
                .click(function (e) { return _this.searchButtonClick(e); });
            this.byId('ResetButton').text(localText('Controls.FilterPanel.ResetButton'))
                .click(function (e) { return _this.resetButtonClick(e); });
        };
        FilterPanel.prototype.searchButtonClick = function (e) {
            e.preventDefault();
            this.search();
        };
        FilterPanel.prototype.get_hasErrors = function () {
            return this.rowsDiv.children().children('div.v')
                .children('span.error').length > 0;
        };
        FilterPanel.prototype.search = function () {
            var _a;
            this.rowsDiv.children().children('div.v')
                .children('span.error').remove();
            var filterLines = [];
            var errorText = null;
            var row = null;
            for (var i = 0; i < this.rowsDiv.children().length; i++) {
                row = this.rowsDiv.children().eq(i);
                var filtering = this.getFilteringFor(row);
                if (filtering == null) {
                    continue;
                }
                var field = this.getFieldFor(row);
                var op = row.children('div.o').find('input.op-select')
                    .getWidget(FilterOperatorSelect).value;
                if (op == null || op.length === 0) {
                    errorText = localText('Controls.FilterPanel.InvalidOperator');
                    break;
                }
                var line = {};
                line.field = field.name;
                line.operator = op;
                line.isOr = row.children('div.l')
                    .children('a.andor').hasClass('or');
                line.leftParen = row.children('div.l')
                    .children('a.leftparen').hasClass('active');
                line.rightParen = row.children('div.l')
                    .children('a.rightparen').hasClass('active');
                filtering.set_operator({ key: op });
                var criteria;
                try {
                    criteria = filtering.getCriteria();
                }
                catch (ex) {
                    errorText = (_a = ex.message) !== null && _a !== void 0 ? _a : ex.toString();
                    break;
                }
                line.criteria = criteria.criteria;
                line.state = filtering.saveState();
                line.displayText = criteria.displayText;
                filterLines.push(line);
            }
            // if an error occurred, display it, otherwise set current filters
            if (errorText != null) {
                $('<span/>').addClass('error')
                    .attr('title', errorText).appendTo(row.children('div.v'));
                row.children('div.v').find('input:first').focus();
                return;
            }
            var items = this.get_store().get_items();
            items.length = 0;
            items.push.apply(items, filterLines);
            this.get_store().raiseChanged();
        };
        FilterPanel.prototype.addButtonClick = function (e) {
            this.addEmptyRow(true);
            e.preventDefault();
        };
        FilterPanel.prototype.resetButtonClick = function (e) {
            e.preventDefault();
            if (this.get_updateStoreOnReset()) {
                if (this.get_store().get_items().length > 0) {
                    this.get_store().get_items().length = 0;
                    this.get_store().raiseChanged();
                }
            }
            this.rowsDiv.empty();
            this.updateButtons();
            if (this.get_showInitialLine()) {
                this.addEmptyRow(false);
            }
        };
        FilterPanel.prototype.findEmptyRow = function () {
            var result = null;
            this.rowsDiv.children().each(function (index, row) {
                var fieldInput = $(row).children('div.f')
                    .children('input.field-select').first();
                if (fieldInput.length === 0) {
                    return true;
                }
                var val = fieldInput.val();
                if (val == null || val.length === 0) {
                    result = $(row);
                    return false;
                }
                return true;
            });
            return result;
        };
        FilterPanel.prototype.addEmptyRow = function (popupField) {
            var _this = this;
            var emptyRow = this.findEmptyRow();
            if (emptyRow != null) {
                emptyRow.find('input.field-select').select2('focus');
                if (popupField) {
                    emptyRow.find('input.field-select').select2('open');
                }
                return emptyRow;
            }
            var isLastRowOr = this.rowsDiv.children().last()
                .children('a.andor').hasClass('or');
            var row = $("<div class='filter-line'>" +
                "<a class='delete'><span></span></a>" +
                "<div class='l'>" +
                "<a class='rightparen' href='#'>)</a>" +
                "<a class='andor' href='#'></a>" +
                "<a class='leftparen' href='#'>(</a>" +
                "</div>" +
                "<div class='f'>" +
                "<input type='hidden' class='field-select'>" +
                "</div>" +
                "<div class='o'></div>" +
                "<div class='v'></div>" +
                "<div style='clear: both'></div>" +
                "</div>").appendTo(this.rowsDiv);
            var parenDiv = row.children('div.l').hide();
            parenDiv.children('a.leftparen, a.rightparen')
                .click(function (e) { return _this.leftRightParenClick(e); });
            var andor = parenDiv.children('a.andor').attr('title', localText('Controls.FilterPanel.ChangeAndOr'));
            if (isLastRowOr) {
                andor.addClass('or').text(localText('Controls.FilterPanel.Or'));
            }
            else {
                andor.text(localText('Controls.FilterPanel.And'));
            }
            andor.click(function (e) { return _this.andOrClick(e); });
            row.children('a.delete')
                .attr('title', localText('Controls.FilterPanel.RemoveField'))
                .click(function (e) { return _this.deleteRowClick(e); });
            new FilterFieldSelect(row.children('div.f')
                .children('input'), this.get_store().get_fields())
                .changeSelect2(function (e) { return _this.onRowFieldChange(e); });
            this.updateParens();
            this.updateButtons();
            row.find('input.field-select').select2('focus');
            if (popupField) {
                row.find('input.field-select').select2('open');
            }
            return row;
        };
        FilterPanel.prototype.onRowFieldChange = function (e) {
            var row = $(e.target).closest('div.filter-line');
            this.rowFieldChange(row);
            var opSelect = row.children('div.o').find('input.op-select');
            opSelect.select2('focus');
        };
        FilterPanel.prototype.rowFieldChange = function (row) {
            row.removeData('Filtering');
            var select = row.children('div.f').find('input.field-select')
                .getWidget(FilterFieldSelect);
            select.get_value();
            this.removeFiltering(row);
            this.populateOperatorList(row);
            this.rowOperatorChange(row);
            this.updateParens();
            this.updateButtons();
        };
        FilterPanel.prototype.removeFiltering = function (row) {
            row.data('Filtering', null);
            row.data('FilteringField', null);
        };
        FilterPanel.prototype.populateOperatorList = function (row) {
            var _this = this;
            row.children('div.o').html('');
            var filtering = this.getFilteringFor(row);
            if (filtering == null)
                return;
            var hidden = row.children('div.o').html('<input/>')
                .children().attr('type', 'hidden').addClass('op-select');
            var operators = filtering.getOperators();
            var opSelect = new FilterOperatorSelect(hidden, operators);
            opSelect.changeSelect2(function (e) { return _this.onRowOperatorChange(e); });
        };
        FilterPanel.prototype.getFieldFor = function (row) {
            if (row.length === 0) {
                return null;
            }
            var select = row.children('div.f').find('input.field-select')
                .getWidget(FilterFieldSelect);
            if (isEmptyOrNull(select.value)) {
                return null;
            }
            return this.get_store().get_fieldByName()[select.get_value()];
        };
        FilterPanel.prototype.getFilteringFor = function (row) {
            var _a;
            var field = this.getFieldFor(row);
            if (field == null)
                return null;
            var filtering = cast(row.data('Filtering'), IFiltering);
            if (filtering != null)
                return filtering;
            var filteringType = exports.FilteringTypeRegistry.get(((_a = field.filteringType) !== null && _a !== void 0 ? _a : 'String'));
            var editorDiv = row.children('div.v');
            filtering = new filteringType();
            exports.ReflectionOptionsSetter.set(filtering, field.filteringParams);
            filtering.set_container(editorDiv);
            filtering.set_field(field);
            row.data('Filtering', filtering);
            return filtering;
        };
        FilterPanel.prototype.onRowOperatorChange = function (e) {
            var row = $(e.target).closest('div.filter-line');
            this.rowOperatorChange(row);
            var firstInput = row.children('div.v').find(':input:visible').first();
            try {
                firstInput.focus();
            }
            catch ($t1) {
            }
        };
        FilterPanel.prototype.rowOperatorChange = function (row) {
            if (row.length === 0) {
                return;
            }
            var editorDiv = row.children('div.v');
            editorDiv.html('');
            var filtering = this.getFilteringFor(row);
            if (filtering == null)
                return;
            var operatorSelect = row.children('div.o').find('input.op-select')
                .getWidget(FilterOperatorSelect);
            if (isEmptyOrNull(operatorSelect.get_value()))
                return;
            var ops = filtering.getOperators().filter(function (x) {
                return x.key === operatorSelect.value;
            });
            var op = ((ops.length > 0) ? ops[0] : null);
            if (op == null)
                return;
            filtering.set_operator(op);
            filtering.createEditor();
        };
        FilterPanel.prototype.deleteRowClick = function (e) {
            e.preventDefault();
            var row = $(e.target).closest('div.filter-line');
            row.remove();
            if (this.rowsDiv.children().length === 0) {
                this.search();
            }
            this.updateParens();
            this.updateButtons();
        };
        FilterPanel.prototype.updateButtons = function () {
            this.byId('SearchButton').toggle(this.rowsDiv.children().length >= 1 && this.showSearchButton);
            this.byId('ResetButton').toggle(this.rowsDiv.children().length >= 1);
        };
        FilterPanel.prototype.andOrClick = function (e) {
            e.preventDefault();
            var andor = $(e.target).toggleClass('or');
            andor.text(localText('Controls.FilterPanel.' +
                (andor.hasClass('or') ? 'Or' : 'And')));
        };
        FilterPanel.prototype.leftRightParenClick = function (e) {
            e.preventDefault();
            $(e.target).toggleClass('active');
            this.updateParens();
        };
        FilterPanel.prototype.updateParens = function () {
            var rows = this.rowsDiv.children();
            if (rows.length === 0) {
                return;
            }
            rows.removeClass('paren-start');
            rows.removeClass('paren-end');
            rows.children('div.l').css('display', ((rows.length === 1) ? 'none' : 'block'));
            rows.first().children('div.l').children('a.rightparen, a.andor')
                .css('visibility', 'hidden');
            for (var i = 1; i < rows.length; i++) {
                var row = rows.eq(i);
                row.children('div.l').css('display', 'block')
                    .children('a.lefparen, a.andor').css('visibility', 'visible');
            }
            var inParen = false;
            for (var i1 = 0; i1 < rows.length; i1++) {
                var row1 = rows.eq(i1);
                var divParen = row1.children('div.l');
                var lp = divParen.children('a.leftparen');
                var rp = divParen.children('a.rightparen');
                if (rp.hasClass('active') && inParen) {
                    inParen = false;
                    if (i1 > 0) {
                        rows.eq(i1 - 1).addClass('paren-end');
                    }
                }
                if (lp.hasClass('active')) {
                    inParen = true;
                    if (i1 > 0) {
                        row1.addClass('paren-start');
                    }
                }
            }
        };
        FilterPanel = tslib.__decorate([
            exports.Decorators.registerClass("Serenity.FilterPanel")
        ], FilterPanel);
        return FilterPanel;
    }(FilterWidgetBase));

    var FilterDialog = /** @class */ (function (_super) {
        tslib.__extends(FilterDialog, _super);
        function FilterDialog() {
            var _this = _super.call(this) || this;
            _this.filterPanel = new FilterPanel(_this.byId('FilterPanel'));
            _this.filterPanel.set_showInitialLine(true);
            _this.filterPanel.set_showSearchButton(false);
            _this.filterPanel.set_updateStoreOnReset(false);
            _this.dialogTitle = localText('Controls.FilterPanel.DialogTitle');
            return _this;
        }
        FilterDialog.prototype.get_filterPanel = function () {
            return this.filterPanel;
        };
        FilterDialog.prototype.getTemplate = function () {
            return '<div id="~_FilterPanel"/>';
        };
        FilterDialog.prototype.getDialogButtons = function () {
            var _this = this;
            return [
                {
                    text: localText('Dialogs.OkButton'),
                    click: function () {
                        _this.filterPanel.search();
                        if (_this.filterPanel.get_hasErrors()) {
                            notifyError(localText('Controls.FilterPanel.FixErrorsMessage'), '', null);
                            return;
                        }
                        _this.dialogClose();
                    }
                },
                {
                    text: localText('Dialogs.CancelButton'),
                    click: function () { return _this.dialogClose(); }
                }
            ];
        };
        FilterDialog = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.FilterDialog')
        ], FilterDialog);
        return FilterDialog;
    }(TemplatedDialog));

    var FilterDisplayBar = /** @class */ (function (_super) {
        tslib.__extends(FilterDisplayBar, _super);
        function FilterDisplayBar(div) {
            var _this = _super.call(this, div) || this;
            _this.element.find('.cap').text(localText('Controls.FilterPanel.EffectiveFilter'));
            _this.element.find('.edit').text(localText('Controls.FilterPanel.EditFilter'));
            _this.element.find('.reset').attr('title', localText('Controls.FilterPanel.ResetFilterHint'));
            var openFilterDialog = function (e) {
                e.preventDefault();
                var dialog = new FilterDialog();
                dialog.get_filterPanel().set_store(_this.get_store());
                dialog.dialogOpen(null);
            };
            _this.element.find('.edit').click(openFilterDialog);
            _this.element.find('.txt').click(openFilterDialog);
            _this.element.find('.reset').click(function (e1) {
                e1.preventDefault();
                _this.get_store().get_items().length = 0;
                _this.get_store().raiseChanged();
            });
            return _this;
        }
        FilterDisplayBar.prototype.filterStoreChanged = function () {
            _super.prototype.filterStoreChanged.call(this);
            var displayText = trimToNull(this.get_store().get_displayText());
            this.element.find('.current').toggle(displayText != null);
            this.element.find('.reset').toggle(displayText != null);
            if (displayText == null)
                displayText = localText('Controls.FilterPanel.EffectiveEmpty');
            this.element.find('.txt').text('[' + displayText + ']');
        };
        FilterDisplayBar.prototype.getTemplate = function () {
            return "<div><a class='reset'></a><a class='edit'></a>" +
                "<div class='current'><span class='cap'></span>" +
                "<a class='txt'></a></div></div>";
        };
        FilterDisplayBar = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.FilterDisplayBar')
        ], FilterDisplayBar);
        return FilterDisplayBar;
    }(FilterWidgetBase));

    var SlickPager = /** @class */ (function (_super) {
        tslib.__extends(SlickPager, _super);
        function SlickPager(div, o) {
            var _this = _super.call(this, div, extend({
                showRowsPerPage: true,
                rowsPerPageOptions: [20, 100, 500, 2000]
            }, o)) || this;
            o = _this.options;
            var v = o.view;
            if (!v)
                throw "SlickPager requires view option to be set!";
            _this.element.addClass('s-SlickPager slick-pg')
                .html("<div class=\"slick-pg-in\">\n    <div class=\"slick-pg-grp slick-pg-grp-firstprev\">\n        <div class=\"slick-pg-first slick-pg-btn\"><span class=\"slick-pg-btn-span\"></span></div>\n        <div class=\"slick-pg-prev slick-pg-btn\"><span class=\"slick-pg-btn-span\"></span></div>\n    </div>\n    <div class=\"slick-pg-grp slick-pg-grp-control\">\n        <span class=\"slick-pg-control\">\n            <span class=\"slick-pg-pagetext\">".concat(htmlEncode(localText("Controls.Pager.Page")), "</span>\n            <input id=\"").concat(_this.idPrefix, "CurrentPage\" class=\"slick-pg-current\" type=\"text\" size=\"4\" value=\"1\" />\n            <span class=\"slick-pg-pagesep\">/</span>\n            <span class=\"slick-pg-total\">1</span>\n        </span>\n    </div>\n    <div class=\"slick-pg-grp slick-pg-grp-nextlast\">\n        <div class=\"slick-pg-next slick-pg-btn\"><span class=\"slick-pg-btn-span\"></span></div>\n        <div class=\"slick-pg-last slick-pg-btn\"><span class=\"slick-pg-btn-span\"></span></div>\n    </div>\n    <div class=\"slick-pg-grp slick-pg-grp-reload\">\n        <div class=\"slick-pg-reload slick-pg-btn\"><span class=\"slick-pg-btn-span\"></span></div>\n    </div>\n    <div class=\"slick-pg-grp slick-pg-grp-stat\">\n        <span class=\"slick-pg-stat\"></span>\n    </div>\n</div>"));
            var self = _this;
            $('.slick-pg-reload', _this.element).click(function () { v.populate(); });
            $('.slick-pg-first', _this.element).click(function () { self._changePage('first'); });
            $('.slick-pg-prev', _this.element).click(function () { self._changePage('prev'); });
            $('.slick-pg-next', _this.element).click(function () { self._changePage('next'); });
            $('.slick-pg-last', _this.element).click(function () { self._changePage('last'); });
            $('.slick-pg-current', _this.element).keydown(function (e) { if (e.keyCode == 13)
                self._changePage('input'); });
            if (self.options.showRowsPerPage) {
                var opt = "", sel = "";
                for (var nx = 0; nx < o.rowsPerPageOptions.length; nx++) {
                    if (v.rowsPerPage == o.rowsPerPageOptions[nx])
                        sel = 'selected="selected"';
                    else
                        sel = '';
                    opt += "<option value='" + o.rowsPerPageOptions[nx] + "' " + sel + " >" + o.rowsPerPageOptions[nx] + "&nbsp;&nbsp;</option>";
                }
                $('.slick-pg-in', _this.element).prepend('<div class="slick-pg-grp"><select class="slick-pg-size" name="rp">' + opt + '</select></div>');
                $('select.slick-pg-size', _this.element).change(function () {
                    if (o.onRowsPerPageChange)
                        o.onRowsPerPageChange(+this.value);
                    else {
                        v["newp"] = 1;
                        v.setPagingOptions({
                            page: 1,
                            rowsPerPage: +this.value
                        });
                    }
                });
            }
            v.onPagingInfoChanged.subscribe(function () {
                self._updatePager();
            });
            return _this;
        }
        SlickPager.prototype._changePage = function (ctype) {
            var view = this.options.view;
            if (!view || view.loading)
                return true;
            var info = view.getPagingInfo();
            var pages = (!info.rowsPerPage || !info.totalCount) ? 1 : Math.ceil(info.totalCount / info.rowsPerPage);
            var newp;
            switch (ctype) {
                case 'first':
                    newp = 1;
                    break;
                case 'prev':
                    if (info.page > 1)
                        newp = parseInt(info.page) - 1;
                    break;
                case 'next':
                    if (info.page < pages)
                        newp = parseInt(info.page) + 1;
                    break;
                case 'last':
                    newp = pages;
                    break;
                case 'input':
                    var nv = parseInt($('input.slick-pg-current', this.element).val());
                    if (isNaN(nv))
                        nv = 1;
                    else if (nv < 1)
                        nv = 1;
                    else if (nv > pages)
                        nv = pages;
                    $('.slick-pg-current', this.element).val(nv);
                    newp = nv;
                    break;
            }
            if (newp == info.page)
                return false;
            if (this.options.onChangePage)
                this.options.onChangePage(newp);
            else {
                view.setPagingOptions({ page: newp });
            }
        };
        SlickPager.prototype._updatePager = function () {
            var view = this.options.view;
            var info = view.getPagingInfo();
            var pages = (!info.rowsPerPage || !info.totalCount) ? 1 : Math.ceil(info.totalCount / info.rowsPerPage);
            $('.slick-pg-current', this.element).val(info.page);
            $('.slick-pg-total', this.element).html(pages);
            var r1 = (info.page - 1) * info.rowsPerPage + 1;
            var r2 = r1 + info.rowsPerPage - 1;
            if (info.totalCount < r2)
                r2 = info.totalCount;
            var stat;
            if (info.loading) {
                stat = htmlEncode(localText("Controls.Pager.LoadingStatus"));
            }
            else if (info.error) {
                stat = info.error;
            }
            else if (info.totalCount > 0) {
                stat = htmlEncode(localText("Controls.Pager.PageStatus"));
                stat = stat.replace(/{from}/, r1);
                stat = stat.replace(/{to}/, r2);
                stat = stat.replace(/{total}/, info.totalCount);
            }
            else
                stat = htmlEncode(localText("Controls.Pager.NoRowStatus"));
            $('.slick-pg-stat', this.element).html(stat);
            $('.slick-pg-size', this.element).val((info.rowsPerPage || 0).toString());
        };
        SlickPager = tslib.__decorate([
            exports.Decorators.registerClass("Serenity.SlickPager")
        ], SlickPager);
        return SlickPager;
    }(Widget));

    var IInitializeColumn = /** @class */ (function () {
        function IInitializeColumn() {
        }
        IInitializeColumn = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IInitializeColumn')
        ], IInitializeColumn);
        return IInitializeColumn;
    }());
    var BooleanFormatter = /** @class */ (function () {
        function BooleanFormatter() {
        }
        BooleanFormatter.prototype.format = function (ctx) {
            var _a, _b;
            if (ctx.value == null) {
                return '';
            }
            var text;
            if (!!ctx.value) {
                text = tryGetText(this.trueText);
                if (text == null) {
                    text = this.trueText;
                    if (text == null) {
                        text = (_a = tryGetText('Dialogs.YesButton')) !== null && _a !== void 0 ? _a : 'Yes';
                    }
                }
            }
            else {
                text = tryGetText(this.falseText);
                if (text == null) {
                    text = this.falseText;
                    if (text == null) {
                        text = (_b = tryGetText('Dialogs.NoButton')) !== null && _b !== void 0 ? _b : 'No';
                    }
                }
            }
            return htmlEncode(text);
        };
        tslib.__decorate([
            exports.Decorators.option()
        ], BooleanFormatter.prototype, "falseText", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], BooleanFormatter.prototype, "trueText", void 0);
        BooleanFormatter = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.BooleanFormatter')
        ], BooleanFormatter);
        return BooleanFormatter;
    }());
    var CheckboxFormatter = /** @class */ (function () {
        function CheckboxFormatter() {
        }
        CheckboxFormatter.prototype.format = function (ctx) {
            return '<span class="check-box no-float readonly slick-edit-preclick ' + (!!ctx.value ? ' checked' : '') + '"></span>';
        };
        CheckboxFormatter = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.CheckboxFormatter')
        ], CheckboxFormatter);
        return CheckboxFormatter;
    }());
    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
            this.displayFormat = Culture.dateFormat;
        }
        DateFormatter_1 = DateFormatter;
        DateFormatter.format = function (value, format) {
            if (value == null) {
                return '';
            }
            var date;
            if (value instanceof Date) {
                date = value;
            }
            else if (typeof value === 'string') {
                date = parseISODateTime(value);
                if (date == null || isNaN(date.valueOf())) {
                    return htmlEncode(value);
                }
            }
            else {
                return value.toString();
            }
            return htmlEncode(formatDate(date, format));
        };
        DateFormatter.prototype.format = function (ctx) {
            return DateFormatter_1.format(ctx.value, this.displayFormat);
        };
        var DateFormatter_1;
        tslib.__decorate([
            exports.Decorators.option()
        ], DateFormatter.prototype, "displayFormat", void 0);
        DateFormatter = DateFormatter_1 = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.DateFormatter')
        ], DateFormatter);
        return DateFormatter;
    }());
    var DateTimeFormatter = /** @class */ (function (_super) {
        tslib.__extends(DateTimeFormatter, _super);
        function DateTimeFormatter() {
            var _this = _super.call(this) || this;
            _this.displayFormat = Culture.dateTimeFormat;
            return _this;
        }
        DateTimeFormatter = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.DateTimeFormatter')
        ], DateTimeFormatter);
        return DateTimeFormatter;
    }(DateFormatter));
    var EnumFormatter = /** @class */ (function () {
        function EnumFormatter() {
        }
        EnumFormatter_1 = EnumFormatter;
        EnumFormatter.prototype.format = function (ctx) {
            return EnumFormatter_1.format(exports.EnumTypeRegistry.get(this.enumKey), ctx.value);
        };
        EnumFormatter.format = function (enumType, value) {
            if (value == null) {
                return '';
            }
            var name = exports.Enum.toString(enumType, value);
            var enumKeyAttr = getAttributes(enumType, EnumKeyAttribute, false);
            var enumKey = ((enumKeyAttr.length > 0) ? enumKeyAttr[0].value : getTypeFullName(enumType));
            return EnumFormatter_1.getText(enumKey, name);
        };
        EnumFormatter.getText = function (enumKey, name) {
            var _a;
            if (isEmptyOrNull(name)) {
                return '';
            }
            return htmlEncode((_a = tryGetText('Enums.' + enumKey + '.' + name)) !== null && _a !== void 0 ? _a : name);
        };
        EnumFormatter.getName = function (enumType, value) {
            if (value == null) {
                return '';
            }
            return exports.Enum.toString(enumType, value);
        };
        var EnumFormatter_1;
        tslib.__decorate([
            exports.Decorators.option()
        ], EnumFormatter.prototype, "enumKey", void 0);
        EnumFormatter = EnumFormatter_1 = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.EnumFormatter')
        ], EnumFormatter);
        return EnumFormatter;
    }());
    var FileDownloadFormatter = /** @class */ (function () {
        function FileDownloadFormatter() {
        }
        FileDownloadFormatter_1 = FileDownloadFormatter;
        FileDownloadFormatter.prototype.format = function (ctx) {
            var _a, _b;
            var dbFile = safeCast(ctx.value, String);
            if (isEmptyOrNull(dbFile)) {
                return '';
            }
            var downloadUrl = FileDownloadFormatter_1.dbFileUrl(dbFile);
            var originalName = (!isEmptyOrNull(this.originalNameProperty) ?
                safeCast(ctx.item[this.originalNameProperty], String) : null);
            originalName = (originalName !== null && originalName !== void 0 ? originalName : '');
            var text = format(((_a = this.displayFormat) !== null && _a !== void 0 ? _a : '{0}'), originalName, dbFile, downloadUrl);
            var iconClass = (_b = this.iconClass) !== null && _b !== void 0 ? _b : "fa fa-download";
            if (iconClass.startsWith("fa-"))
                iconClass = "fa " + iconClass;
            return "<a class='file-download-link' target='_blank' href='" +
                htmlEncode(downloadUrl) + "'><i class='" + iconClass + "'></i> " + htmlEncode(text) + '</a>';
        };
        FileDownloadFormatter.dbFileUrl = function (filename) {
            filename = replaceAll((filename !== null && filename !== void 0 ? filename : ''), '\\', '/');
            return resolveUrl('~/upload/') + filename;
        };
        FileDownloadFormatter.prototype.initializeColumn = function (column) {
            column.referencedFields = column.referencedFields || [];
            if (!isEmptyOrNull(this.originalNameProperty)) {
                column.referencedFields.push(this.originalNameProperty);
                return;
            }
        };
        var FileDownloadFormatter_1;
        tslib.__decorate([
            exports.Decorators.option()
        ], FileDownloadFormatter.prototype, "displayFormat", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], FileDownloadFormatter.prototype, "originalNameProperty", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], FileDownloadFormatter.prototype, "iconClass", void 0);
        FileDownloadFormatter = FileDownloadFormatter_1 = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.FileDownloadFormatter', [ISlickFormatter, IInitializeColumn])
        ], FileDownloadFormatter);
        return FileDownloadFormatter;
    }());
    var MinuteFormatter = /** @class */ (function () {
        function MinuteFormatter() {
        }
        MinuteFormatter_1 = MinuteFormatter;
        MinuteFormatter.prototype.format = function (ctx) {
            return MinuteFormatter_1.format(ctx.value);
        };
        MinuteFormatter.format = function (value) {
            var hour = Math.floor(value / 60);
            var minute = value - hour * 60;
            var hourStr, minuteStr;
            if (value == null || isNaN(value))
                return '';
            if (hour < 10)
                hourStr = '0' + hour;
            else
                hourStr = hour.toString();
            if (minute < 10)
                minuteStr = '0' + minute;
            else
                minuteStr = minute.toString();
            return format('{0}:{1}', hourStr, minuteStr);
        };
        var MinuteFormatter_1;
        MinuteFormatter = MinuteFormatter_1 = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.MinuteFormatter')
        ], MinuteFormatter);
        return MinuteFormatter;
    }());
    var NumberFormatter = /** @class */ (function () {
        function NumberFormatter() {
        }
        NumberFormatter_1 = NumberFormatter;
        NumberFormatter.prototype.format = function (ctx) {
            return NumberFormatter_1.format(ctx.value, this.displayFormat);
        };
        NumberFormatter.format = function (value, format) {
            var _a;
            format = (format !== null && format !== void 0 ? format : '0.##');
            if (value == null)
                return '';
            if (typeof (value) === 'number') {
                if (isNaN(value))
                    return '';
                return htmlEncode(formatNumber(value, format));
            }
            var dbl = parseDecimal(value.toString());
            if (dbl == null || isNaN(dbl))
                return (_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '';
            return htmlEncode(formatNumber(dbl, format));
        };
        var NumberFormatter_1;
        tslib.__decorate([
            exports.Decorators.option()
        ], NumberFormatter.prototype, "displayFormat", void 0);
        NumberFormatter = NumberFormatter_1 = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.NumberFormatter')
        ], NumberFormatter);
        return NumberFormatter;
    }());
    var UrlFormatter = /** @class */ (function () {
        function UrlFormatter() {
        }
        UrlFormatter.prototype.format = function (ctx) {
            var _a, _b, _c, _d;
            var url = (!isEmptyOrNull(this.urlProperty) ?
                ((_a = ctx.item[this.urlProperty]) !== null && _a !== void 0 ? _a : '').toString() :
                ((_b = ctx.value) !== null && _b !== void 0 ? _b : '').toString());
            if (isEmptyOrNull(url))
                return '';
            if (!isEmptyOrNull(this.urlFormat))
                url = format(this.urlFormat, url);
            if (url != null && startsWith(url, '~/'))
                url = resolveUrl(url);
            var display = (!isEmptyOrNull(this.displayProperty) ?
                ((_c = ctx.item[this.displayProperty]) !== null && _c !== void 0 ? _c : '').toString() :
                ((_d = ctx.value) !== null && _d !== void 0 ? _d : '').toString());
            if (!isEmptyOrNull(this.displayFormat))
                display = format(this.displayFormat, display);
            var s = "<a href='" + htmlEncode(url) + "'";
            if (!isEmptyOrNull(this.target))
                s += " target='" + this.target + "'";
            s += '>' + htmlEncode(display) + '</a>';
            return s;
        };
        UrlFormatter.prototype.initializeColumn = function (column) {
            column.referencedFields = column.referencedFields || [];
            if (!isEmptyOrNull(this.displayProperty)) {
                column.referencedFields.push(this.displayProperty);
            }
            if (!isEmptyOrNull(this.urlProperty)) {
                column.referencedFields.push(this.urlProperty);
            }
        };
        tslib.__decorate([
            exports.Decorators.option()
        ], UrlFormatter.prototype, "displayProperty", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], UrlFormatter.prototype, "displayFormat", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], UrlFormatter.prototype, "urlProperty", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], UrlFormatter.prototype, "urlFormat", void 0);
        tslib.__decorate([
            exports.Decorators.option()
        ], UrlFormatter.prototype, "target", void 0);
        UrlFormatter = tslib.__decorate([
            exports.Decorators.registerFormatter('Serenity.UrlFormatter', [ISlickFormatter, IInitializeColumn])
        ], UrlFormatter);
        return UrlFormatter;
    }());

    exports.FormatterTypeRegistry = void 0;
    (function (FormatterTypeRegistry) {
        var registry = commonTypeRegistry(function (type) { return isAssignableFrom(ISlickFormatter, type); }, null, "Formatter");
        function get(key) {
            if (isEmptyOrNull(key))
                throw new ArgumentNullException('key');
            var type = registry.tryGet(key);
            if (type)
                return type;
            var message = "\"".concat(htmlEncode(key), "\" formatter class not found! \nMake sure there is such a formatter type under the project root namespace,\nand its namespace parts start with capital letters like MyProject.MyModule.MyFormatter.\n\nIf using ES modules, make sure the formatter type has a decorator like \n@Decorators.registerFormatter('MyProject.MyModule.MyFormatter') with the full name \nof your formatter type and \"side-effect-import\" this formatter class from the current \n\"page.ts/grid.ts/dialog.ts file (import \"./path/to/MyFormatter.ts\").\n\nAfter applying fixes, build and run \"node ./tsbuild.js\" (or \"tsc\" if using namespaces) \nfrom the project folder.");
            notifyError(message.replace(/\r?\n\r?\n/g, '<br/><br/>'), '', { escapeHtml: false, timeOut: 5000 });
            throw new Exception(message);
        }
        FormatterTypeRegistry.get = get;
        function reset() {
            registry.reset();
        }
        FormatterTypeRegistry.reset = reset;
        function tryGet(key) {
            return registry.tryGet(key);
        }
        FormatterTypeRegistry.tryGet = tryGet;
    })(exports.FormatterTypeRegistry || (exports.FormatterTypeRegistry = {}));

    var GridRowSelectionMixin = /** @class */ (function () {
        function GridRowSelectionMixin(grid, options) {
            var _this = this;
            this.include = {};
            this.grid = grid;
            this.idField = grid.getView().idField;
            this.options = options || {};
            grid.getGrid().onClick.subscribe(function (e, p) {
                if ($(e.target).hasClass('select-item')) {
                    e.preventDefault();
                    var item = grid.getView().getItem(p.row);
                    var id = item[_this.idField].toString();
                    if (_this.include[id]) {
                        delete _this.include[id];
                    }
                    else {
                        _this.include[id] = true;
                    }
                    for (var i = 0; i < grid.getView().getLength(); i++) {
                        grid.getGrid().updateRow(i);
                    }
                    _this.updateSelectAll();
                }
            });
            grid.getGrid().onHeaderClick.subscribe(function (e1, u) {
                if (e1.isDefaultPrevented())
                    return;
                if ($(e1.target).hasClass('select-all-items')) {
                    e1.preventDefault();
                    if (Object.keys(_this.include).length > 0) {
                        clearKeys(_this.include);
                    }
                    else {
                        var items = grid.getView().getItems();
                        for (var _i = 0, _a = items.filter(_this.isSelectable.bind(_this)); _i < _a.length; _i++) {
                            var x = _a[_i];
                            var id1 = x[_this.idField];
                            _this.include[id1] = true;
                        }
                    }
                    _this.updateSelectAll();
                    grid.getView().setItems(grid.getView().getItems(), true);
                    setTimeout(_this.updateSelectAll.bind(_this), 0);
                }
            });
            grid.getView().onRowsChanged.subscribe(function () {
                return _this.updateSelectAll();
            });
        }
        GridRowSelectionMixin.prototype.updateSelectAll = function () {
            var selectAllButton = this.grid.getElement()
                .find('.select-all-header .slick-column-name .select-all-items');
            if (selectAllButton) {
                var keys = Object.keys(this.include);
                selectAllButton.toggleClass('checked', keys.length > 0 &&
                    this.grid.getView().getItems().filter(this.isSelectable.bind(this)).length <= keys.length);
            }
        };
        GridRowSelectionMixin.prototype.clear = function () {
            clearKeys(this.include);
            this.updateSelectAll();
        };
        GridRowSelectionMixin.prototype.resetCheckedAndRefresh = function () {
            this.include = {};
            this.updateSelectAll();
            this.grid.getView().populate();
        };
        GridRowSelectionMixin.prototype.selectKeys = function (keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var k = keys_1[_i];
                this.include[k] = true;
            }
            this.updateSelectAll();
        };
        GridRowSelectionMixin.prototype.getSelectedKeys = function () {
            return Object.keys(this.include);
        };
        GridRowSelectionMixin.prototype.getSelectedAsInt32 = function () {
            return Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
        };
        GridRowSelectionMixin.prototype.getSelectedAsInt64 = function () {
            return Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
        };
        GridRowSelectionMixin.prototype.setSelectedKeys = function (keys) {
            this.clear();
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var k = keys_2[_i];
                this.include[k] = true;
            }
            this.updateSelectAll();
        };
        GridRowSelectionMixin.prototype.isSelectable = function (item) {
            return item && (this.options.selectable == null ||
                this.options.selectable(item));
        };
        GridRowSelectionMixin.createSelectColumn = function (getMixin) {
            return {
                name: '<span class="select-all-items check-box no-float "></span>',
                nameIsHtml: true,
                toolTip: ' ',
                field: '__select__',
                width: 27,
                minWidth: 27,
                headerCssClass: 'select-all-header',
                sortable: false,
                format: function (ctx) {
                    var item = ctx.item;
                    var mixin = getMixin();
                    if (!mixin || !mixin.isSelectable(item)) {
                        return '';
                    }
                    var isChecked = mixin.include[ctx.item[mixin.idField]];
                    return '<span class="select-item check-box no-float ' + (isChecked ? ' checked' : '') + '"></span>';
                }
            };
        };
        GridRowSelectionMixin = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.GridRowSelectionMixin')
        ], GridRowSelectionMixin);
        return GridRowSelectionMixin;
    }());
    var GridRadioSelectionMixin = /** @class */ (function () {
        function GridRadioSelectionMixin(grid, options) {
            var _this = this;
            this.include = {};
            this.grid = grid;
            this.idField = grid.getView().idField;
            this.options = options || {};
            grid.getGrid().onClick.subscribe(function (e, p) {
                if ($(e.target).hasClass('rad-select-item')) {
                    e.preventDefault();
                    var item = grid.getView().getItem(p.row);
                    if (!_this.isSelectable(item)) {
                        return;
                    }
                    var id = item[_this.idField].toString();
                    if (_this.include[id] == true) {
                        clearKeys(_this.include);
                    }
                    else {
                        clearKeys(_this.include);
                        _this.include[id] = true;
                    }
                    for (var i = 0; i < grid.getView().getLength(); i++) {
                        grid.getGrid().updateRow(i);
                    }
                }
            });
        }
        GridRadioSelectionMixin.prototype.isSelectable = function (item) {
            return item && (this.options.selectable == null ||
                this.options.selectable(item));
        };
        GridRadioSelectionMixin.prototype.clear = function () {
            clearKeys(this.include);
        };
        GridRadioSelectionMixin.prototype.resetCheckedAndRefresh = function () {
            this.include = {};
            this.grid.getView().populate();
        };
        GridRadioSelectionMixin.prototype.getSelectedKey = function () {
            var items = Object.keys(this.include);
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        GridRadioSelectionMixin.prototype.getSelectedAsInt32 = function () {
            var items = Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        GridRadioSelectionMixin.prototype.getSelectedAsInt64 = function () {
            var items = Object.keys(this.include).map(function (x) {
                return parseInt(x, 10);
            });
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        GridRadioSelectionMixin.prototype.setSelectedKey = function (key) {
            this.clear();
            this.include[key] = true;
        };
        GridRadioSelectionMixin.createSelectColumn = function (getMixin) {
            return {
                name: '',
                toolTip: ' ',
                field: '__select__',
                width: 27,
                minWidth: 27,
                headerCssClass: '',
                sortable: false,
                formatter: function (row, cell, value, column, item) {
                    var mixin = getMixin();
                    if (!mixin || !mixin.isSelectable(item)) {
                        return '';
                    }
                    var isChecked = mixin.include[item[mixin.idField]];
                    return '<input type="radio" name="radio-selection-group" class="rad-select-item no-float" style="cursor: pointer;width: 13px; height:13px;" ' + (isChecked ? ' checked' : '') + ' /> ';
                }
            };
        };
        GridRadioSelectionMixin = tslib.__decorate([
            exports.Decorators.registerClass('GridRadioSelectionMixin')
        ], GridRadioSelectionMixin);
        return GridRadioSelectionMixin;
    }());
    exports.GridSelectAllButtonHelper = void 0;
    (function (GridSelectAllButtonHelper) {
        function update(grid, getSelected) {
            var toolbar = grid.element.children('.s-Toolbar');
            if (toolbar.length === 0) {
                return;
            }
            var btn = toolbar.getWidget(Toolbar).findButton('select-all-button');
            var items = grid.getView().getItems();
            btn.toggleClass('checked', items.length > 0 && !items.some(function (x) {
                return !getSelected(x);
            }));
        }
        GridSelectAllButtonHelper.update = update;
        function define(getGrid, getId, getSelected, setSelected, text, onClick) {
            var _a;
            if (text == null) {
                text = (_a = tryGetText('Controls.CheckTreeEditor.SelectAll')) !== null && _a !== void 0 ? _a : 'Select All';
            }
            return {
                title: text,
                action: "select-all",
                cssClass: 'select-all-button',
                onClick: function () {
                    var grid = getGrid();
                    var view = grid.getView();
                    var btn = grid.element.children('.s-Toolbar')
                        .getWidget(Toolbar).findButton('select-all-button');
                    var makeSelected = !btn.hasClass('checked');
                    view.beginUpdate();
                    try {
                        for (var _i = 0, _a = view.getItems(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            setSelected(item, makeSelected);
                            view.updateItem(getId(item), item);
                        }
                        onClick && onClick();
                    }
                    finally {
                        view.endUpdate();
                    }
                    btn.toggleClass('checked', makeSelected);
                }
            };
        }
        GridSelectAllButtonHelper.define = define;
    })(exports.GridSelectAllButtonHelper || (exports.GridSelectAllButtonHelper = {}));
    exports.GridUtils = void 0;
    (function (GridUtils) {
        function addToggleButton(toolDiv, cssClass, callback, hint, initial) {
            var div = $('<div><a href="#"></a></div>')
                .addClass('s-ToggleButton').addClass(cssClass)
                .prependTo(toolDiv);
            div.children('a').click(function (e) {
                e.preventDefault();
                div.toggleClass('pressed');
                var pressed = div.hasClass('pressed');
                callback && callback(pressed);
            }).attr('title', hint !== null && hint !== void 0 ? hint : '');
            if (initial) {
                div.addClass('pressed');
            }
        }
        GridUtils.addToggleButton = addToggleButton;
        function addIncludeDeletedToggle(toolDiv, view, hint, initial) {
            var includeDeleted = false;
            var oldSubmit = view.onSubmit;
            view.onSubmit = function (v) {
                v.params.IncludeDeleted = includeDeleted;
                if (oldSubmit != null) {
                    return oldSubmit(v);
                }
                return true;
            };
            if (hint == null)
                hint = localText('Controls.EntityGrid.IncludeDeletedToggle');
            addToggleButton(toolDiv, 's-IncludeDeletedToggle', function (pressed) {
                includeDeleted = pressed;
                view.seekToPage = 1;
                view.populate();
            }, hint, initial);
            toolDiv.bind('remove', function () {
                view.onSubmit = null;
                oldSubmit = null;
            });
        }
        GridUtils.addIncludeDeletedToggle = addIncludeDeletedToggle;
        function addQuickSearchInput(toolDiv, view, fields, onChange) {
            var oldSubmit = view.onSubmit;
            var input;
            view.onSubmit = function (v) {
                var _a;
                if (input) {
                    var searchText = input.get_value();
                    if (searchText && searchText.length > 0) {
                        v.params.ContainsText = searchText;
                    }
                    else {
                        delete v.params['ContainsText'];
                    }
                    var searchField = (_a = input.get_field()) === null || _a === void 0 ? void 0 : _a.name;
                    if (searchField != null && searchField.length > 0) {
                        v.params.ContainsField = searchField;
                    }
                    else {
                        delete v.params['ContainsField'];
                    }
                }
                if (oldSubmit != null)
                    return oldSubmit(v);
                return true;
            };
            var lastDoneEvent = null;
            input = addQuickSearchInputCustom(toolDiv, function (field, query, done) {
                onChange && onChange();
                view.seekToPage = 1;
                lastDoneEvent = done;
                view.populate();
            }, fields);
            view.onDataLoaded.subscribe(function (e, ui) {
                if (lastDoneEvent != null) {
                    lastDoneEvent(view.getLength() > 0);
                    lastDoneEvent = null;
                }
            });
            return input;
        }
        GridUtils.addQuickSearchInput = addQuickSearchInput;
        function addQuickSearchInputCustom(container, onSearch, fields) {
            var div = $('<div><input type="text"/></div>')
                .addClass('s-QuickSearchBar').prependTo(container);
            if (fields != null && fields.length > 0) {
                div.addClass('has-quick-search-fields');
            }
            return new QuickSearchInput(div.children(), {
                fields: fields,
                onSearch: onSearch
            });
        }
        GridUtils.addQuickSearchInputCustom = addQuickSearchInputCustom;
        function makeOrderable(grid, handleMove) {
            var moveRowsPlugin = new Slick.RowMoveManager({ cancelEditOnDrag: true });
            moveRowsPlugin.onBeforeMoveRows.subscribe(function (e, data) {
                for (var i = 0; !!(i < data.rows.length); i++) {
                    if (!!(data.rows[i] === data.insertBefore ||
                        data.rows[i] === data.insertBefore - 1)) {
                        e.stopPropagation();
                        return false;
                    }
                }
                return true;
            });
            moveRowsPlugin.onMoveRows.subscribe(function (e1, data1) {
                handleMove(data1.rows, data1.insertBefore);
                try {
                    grid.setSelectedRows([]);
                }
                catch ($t1) {
                }
            });
            grid.registerPlugin(moveRowsPlugin);
        }
        GridUtils.makeOrderable = makeOrderable;
        function makeOrderableWithUpdateRequest(grid, getId, getDisplayOrder, service, getUpdateRequest) {
            makeOrderable(grid.getGrid(), function (rows, insertBefore) {
                var _a, _b;
                if (rows.length === 0) {
                    return;
                }
                var order;
                var index = insertBefore;
                if (index < 0) {
                    order = 1;
                }
                else if (insertBefore >= grid.getGrid().getDataLength()) {
                    order = ((_a = getDisplayOrder(grid.getGrid().getDataItem(grid.getGrid().getDataLength() - 1))) !== null && _a !== void 0 ? _a : 0);
                    if (order === 0) {
                        order = insertBefore + 1;
                    }
                    else {
                        order = order + 1;
                    }
                }
                else {
                    order = ((_b = getDisplayOrder(grid.getGrid().getDataItem(insertBefore))) !== null && _b !== void 0 ? _b : 0);
                    if (order === 0) {
                        order = insertBefore + 1;
                    }
                }
                var i = 0;
                var next = null;
                next = function () {
                    serviceCall({
                        service: service,
                        request: getUpdateRequest(getId(grid.getGrid().getDataItem(rows[i])), order++),
                        onSuccess: function (response) {
                            i++;
                            if (i < rows.length) {
                                next();
                            }
                            else {
                                grid.getView().populate();
                            }
                        }
                    });
                };
                next();
            });
        }
        GridUtils.makeOrderableWithUpdateRequest = makeOrderableWithUpdateRequest;
    })(exports.GridUtils || (exports.GridUtils = {}));
    exports.PropertyItemSlickConverter = void 0;
    (function (PropertyItemSlickConverter) {
        function toSlickColumns(items) {
            var result = [];
            if (items == null) {
                return result;
            }
            for (var i = 0; i < items.length; i++) {
                result.push(PropertyItemSlickConverter.toSlickColumn(items[i]));
            }
            return result;
        }
        PropertyItemSlickConverter.toSlickColumns = toSlickColumns;
        function toSlickColumn(item) {
            var _a, _b;
            var result = {
                field: item.name,
                sourceItem: item,
                cssClass: item.cssClass,
                headerCssClass: item.headerCssClass,
                sortable: item.sortable !== false,
                sortOrder: (_a = item.sortOrder) !== null && _a !== void 0 ? _a : 0,
                width: item.width != null ? item.width : 80,
                minWidth: (_b = item.minWidth) !== null && _b !== void 0 ? _b : 30,
                maxWidth: (item.maxWidth == null || item.maxWidth === 0) ? null : item.maxWidth,
                resizable: item.resizable == null || !!item.resizable
            };
            result.visible = item.visible !== false && item.filterOnly !== true &&
                (item.readPermission == null || exports.Authorization.hasPermission(item.readPermission));
            var name = tryGetText(item.title);
            if (name == null)
                name = item.title;
            result.name = name;
            if (item.alignment != null && item.alignment.length > 0) {
                if (!isEmptyOrNull(result.cssClass)) {
                    result.cssClass += ' align-' + item.alignment;
                }
                else {
                    result.cssClass = 'align-' + item.alignment;
                }
            }
            if (item.formatterType != null && item.formatterType.length > 0) {
                var formatterType = exports.FormatterTypeRegistry.get(item.formatterType);
                var formatter = new formatterType();
                if (item.formatterParams != null) {
                    exports.ReflectionOptionsSetter.set(formatter, item.formatterParams);
                }
                var initializer = safeCast(formatter, IInitializeColumn);
                if (initializer != null) {
                    initializer.initializeColumn(result);
                }
                result.format = function (ctx) { return formatter.format(ctx); };
            }
            return result;
        }
        PropertyItemSlickConverter.toSlickColumn = toSlickColumn;
    })(exports.PropertyItemSlickConverter || (exports.PropertyItemSlickConverter = {}));
    exports.SlickFormatting = void 0;
    (function (SlickFormatting) {
        function getEnumText(enumKey, name) {
            return EnumFormatter.getText(enumKey, name);
        }
        SlickFormatting.getEnumText = getEnumText;
        function treeToggle(getView, getId, formatter) {
            return function (ctx) {
                var _a, _b;
                var text = formatter(ctx);
                var view = getView();
                var indent = (_a = ctx.item._indent) !== null && _a !== void 0 ? _a : 0;
                var spacer = '<span class="s-TreeIndent" style="width:' + 15 * indent + 'px"></span>';
                var id = getId(ctx.item);
                var idx = view.getIdxById(id);
                var next = view.getItemByIdx(idx + 1);
                if (next != null) {
                    var nextIndent = (_b = next._indent) !== null && _b !== void 0 ? _b : 0;
                    if (nextIndent > indent) {
                        if (!!!!ctx.item._collapsed) {
                            return spacer + '<span class="s-TreeToggle s-TreeExpand"></span>' + text;
                        }
                        else {
                            return spacer + '<span class="s-TreeToggle s-TreeCollapse"></span>' + text;
                        }
                    }
                }
                return spacer + '<span class="s-TreeToggle"></span>' + text;
            };
        }
        SlickFormatting.treeToggle = treeToggle;
        function date(format) {
            if (format == null) {
                format = Culture.dateFormat;
            }
            return function (ctx) {
                return htmlEncode(DateFormatter.format(ctx.value, format));
            };
        }
        SlickFormatting.date = date;
        function dateTime(format) {
            if (format == null) {
                format = Culture.dateTimeFormat;
            }
            return function (ctx) {
                return htmlEncode(DateFormatter.format(ctx.value, format));
            };
        }
        SlickFormatting.dateTime = dateTime;
        function checkBox() {
            return function (ctx) {
                return '<span class="check-box no-float ' + (!!ctx.value ? ' checked' : '') + '"></span>';
            };
        }
        SlickFormatting.checkBox = checkBox;
        function number(format) {
            return function (ctx) {
                return NumberFormatter.format(ctx.value, format);
            };
        }
        SlickFormatting.number = number;
        function getItemType(link) {
            return link.data('item-type');
        }
        SlickFormatting.getItemType = getItemType;
        function getItemId(link) {
            var value = link.data('item-id');
            return value == null ? null : value.toString();
        }
        SlickFormatting.getItemId = getItemId;
        function itemLinkText(itemType, id, text, extraClass, encode) {
            return '<a' + (id != null ? (' href="#' + replaceAll(itemType, '.', '-') +
                '/' + id + '"') : '') + ' data-item-type="' +
                htmlEncode(itemType) + '"' + ' data-item-id="' +
                htmlEncode(id) + '"' + ' class="s-EditLink s-' +
                replaceAll(itemType, '.', '-') + 'Link' +
                (isEmptyOrNull(extraClass) ? '' : (' ' + extraClass)) + '">' +
                (encode ? htmlEncode(text !== null && text !== void 0 ? text : '') : text !== null && text !== void 0 ? text : '') + '</a>';
        }
        SlickFormatting.itemLinkText = itemLinkText;
        function itemLink(itemType, idField, getText, cssClass, encode) {
            return function (ctx) {
                var _a, _b;
                var text = (_a = (getText == null ? ctx.value : getText(ctx))) !== null && _a !== void 0 ? _a : '';
                if ((_b = ctx.item) === null || _b === void 0 ? void 0 : _b.__nonDataRow) {
                    return encode ? htmlEncode(text) : text;
                }
                return itemLinkText(itemType, ctx.item[idField], (getText == null ? ctx.value : getText(ctx)), (cssClass == null ? '' : cssClass(ctx)), encode);
            };
        }
        SlickFormatting.itemLink = itemLink;
    })(exports.SlickFormatting || (exports.SlickFormatting = {}));
    exports.SlickHelper = void 0;
    (function (SlickHelper) {
        function setDefaults(columns, localTextPrefix) {
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var col = columns_1[_i];
                col.sortable = (col.sortable != null ? col.sortable : true);
                var id = col.id;
                if (id == null) {
                    id = col.field;
                }
                col.id = id;
                if (localTextPrefix != null && col.id != null &&
                    (col.name == null || startsWith(col.name, '~'))) {
                    var key = (col.name != null ? col.name.substr(1) : col.id);
                    col.name = localText(localTextPrefix + key);
                }
            }
            return columns;
        }
        SlickHelper.setDefaults = setDefaults;
    })(exports.SlickHelper || (exports.SlickHelper = {}));
    exports.SlickTreeHelper = void 0;
    (function (SlickTreeHelper) {
        function filterCustom(item, getParent) {
            var parent = getParent(item);
            var loop = 0;
            while (parent != null) {
                if (!!parent._collapsed) {
                    return false;
                }
                parent = getParent(parent);
                if (loop++ > 1000) {
                    throw new Error('Possible infinite loop, check parents has no circular reference!');
                }
            }
            return true;
        }
        SlickTreeHelper.filterCustom = filterCustom;
        function filterById(item, view, getParentId) {
            return filterCustom(item, function (x) {
                var parentId = getParentId(x);
                if (parentId == null) {
                    return null;
                }
                return view.getItemById(parentId);
            });
        }
        SlickTreeHelper.filterById = filterById;
        function setCollapsed(items, collapsed) {
            if (items != null) {
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    item._collapsed = collapsed;
                }
            }
        }
        SlickTreeHelper.setCollapsed = setCollapsed;
        function setCollapsedFlag(item, collapsed) {
            item._collapsed = collapsed;
        }
        SlickTreeHelper.setCollapsedFlag = setCollapsedFlag;
        function setIndents(items, getId, getParentId, setCollapsed) {
            var depth = 0;
            var depths = {};
            for (var line = 0; line < items.length; line++) {
                var item = items[line];
                if (line > 0) {
                    var parentId = getParentId(item);
                    if (parentId != null && parentId === getId(items[line - 1])) {
                        depth += 1;
                    }
                    else if (parentId == null) {
                        depth = 0;
                    }
                    else if (parentId !== getParentId(items[line - 1])) {
                        if (depths[parentId] != null) {
                            depth = depths[parentId] + 1;
                        }
                        else {
                            depth = 0;
                        }
                    }
                }
                depths[getId(item)] = depth;
                item._indent = depth;
                if (setCollapsed != null) {
                    item._collapsed = setCollapsed;
                }
            }
        }
        SlickTreeHelper.setIndents = setIndents;
        function toggleClick(e, row, cell, view, getId) {
            var target = $(e.target);
            if (!target.hasClass('s-TreeToggle')) {
                return;
            }
            if (target.hasClass('s-TreeCollapse') || target.hasClass('s-TreeExpand')) {
                var item = view.getItem(row);
                if (item != null) {
                    if (!!!item._collapsed) {
                        item._collapsed = true;
                    }
                    else {
                        item._collapsed = false;
                    }
                    view.updateItem(getId(item), item);
                }
                if (e.shiftKey) {
                    view.beginUpdate();
                    try {
                        setCollapsed(view.getItems(), !!item._collapsed);
                        view.setItems(view.getItems(), true);
                    }
                    finally {
                        view.endUpdate();
                    }
                }
            }
        }
        SlickTreeHelper.toggleClick = toggleClick;
    })(exports.SlickTreeHelper || (exports.SlickTreeHelper = {}));
    var ColumnsBase = /** @class */ (function () {
        function ColumnsBase(items) {
            var _a;
            this.__items = items;
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var col = items_2[_i];
                var id = col.id;
                if (id && !this[id])
                    this[id] = col;
            }
            for (var _b = 0, items_3 = items; _b < items_3.length; _b++) {
                var col = items_3[_b];
                var id = (_a = col.sourceItem) === null || _a === void 0 ? void 0 : _a.name;
                if (id && !this[id])
                    this[id] = col;
            }
            for (var _c = 0, items_4 = items; _c < items_4.length; _c++) {
                var col = items_4[_c];
                var id = col.field;
                if (id && !this[id])
                    this[id] = col;
            }
        }
        ColumnsBase.prototype.valueOf = function () {
            return this.__items;
        };
        return ColumnsBase;
    }());

    var DataGrid = /** @class */ (function (_super) {
        tslib.__extends(DataGrid, _super);
        function DataGrid(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.restoringSettings = 0;
            var self = _this;
            _this.element.addClass('s-DataGrid').html('');
            var layout = function () {
                self.layout();
                if (self._layoutTimer != null)
                    exports.LayoutTimer.store(self._layoutTimer);
            };
            _this.element.addClass('require-layout').on('layout.' + _this.uniqueName, layout);
            if (_this.useLayoutTimer())
                _this._layoutTimer = exports.LayoutTimer.onSizeChange(function () { return _this.element && _this.element[0]; }, debounce(layout, 50));
            _this.setTitle(_this.getInitialTitle());
            var buttons = _this.getButtons();
            if (buttons != null) {
                _this.createToolbar(buttons);
            }
            _this.slickContainer = _this.createSlickContainer();
            _this.view = _this.createView();
            if (_this.useAsync())
                _this.initAsync();
            else
                _this.initSync();
            return _this;
        }
        DataGrid_1 = DataGrid;
        DataGrid.prototype.internalInit = function () {
            var _this = this;
            var _a;
            this.allColumns = (_a = this.allColumns) !== null && _a !== void 0 ? _a : this.getColumns();
            this.slickGrid = this.createSlickGrid();
            if (this.enableFiltering()) {
                this.createFilterBar();
            }
            if (this.usePager()) {
                this.createPager();
            }
            this.bindToSlickEvents();
            this.bindToViewEvents();
            if (this.toolbar) {
                this.createToolbarExtensions();
            }
            this.createQuickFilters();
            this.updateDisabledState();
            this.updateInterface();
            this.initialSettings = this.getCurrentSettings(null);
            var restoreResult = this.restoreSettings(null, null);
            if (restoreResult === null || restoreResult === void 0 ? void 0 : restoreResult.then)
                restoreResult.then(function () { return window.setTimeout(function () { return _this.initialPopulate(); }, 0); });
            else
                window.setTimeout(function () { return _this.initialPopulate(); }, 0);
        };
        DataGrid.prototype.initSync = function () {
            this.propertyItemsData = this.getPropertyItemsData();
            this.internalInit();
            this.afterInit();
        };
        DataGrid.prototype.initAsync = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.getPropertyItemsDataAsync()];
                        case 1:
                            _a.propertyItemsData = _b.sent();
                            this.internalInit();
                            this.afterInit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DataGrid.prototype.afterInit = function () {
        };
        DataGrid.prototype.useAsync = function () {
            return false;
        };
        DataGrid.prototype.useLayoutTimer = function () {
            return true;
        };
        DataGrid.prototype.attrs = function (attrType) {
            return getAttributes(getInstanceType(this), attrType, true);
        };
        DataGrid.prototype.layout = function () {
            if (!this.element || !this.element.is(':visible') || !this.slickContainer || !this.slickGrid)
                return;
            var responsiveHeight = this.element.hasClass('responsive-height');
            var madeAutoHeight = this.slickGrid != null && this.slickGrid.getOptions().autoHeight;
            var shouldAutoHeight = responsiveHeight && window.innerWidth < 768;
            if (shouldAutoHeight) {
                if (!madeAutoHeight) {
                    this.slickGrid.setOptions({ autoHeight: true });
                }
            }
            else if (madeAutoHeight) {
                this.slickContainer.css('height', '');
                this.slickContainer.children('.slick-viewport').css('height', '');
                this.slickGrid.setOptions({ autoHeight: false });
            }
            this.slickGrid.resizeCanvas();
        };
        DataGrid.prototype.getInitialTitle = function () {
            return null;
        };
        DataGrid.prototype.createToolbarExtensions = function () {
        };
        DataGrid.prototype.ensureQuickFilterBar = function () {
            if (this.quickFiltersDiv == null)
                this.createQuickFilters([]);
            return this.quickFiltersBar;
        };
        DataGrid.prototype.createQuickFilters = function (filters) {
            var _this = this;
            if (this.quickFiltersDiv == null && (filters != null ||
                ((filters = this.getQuickFilters()) && filters != null && filters.length))) {
                this.quickFiltersDiv = $('<div/>').addClass('quick-filters-bar');
                if (this.toolbar) {
                    $('<div/>').addClass('clear').appendTo(this.toolbar.element);
                    this.quickFiltersDiv.appendTo(this.toolbar.element);
                }
                else {
                    this.quickFiltersDiv.appendTo($('<div/>').addClass('s-Toolbar').insertBefore(this.slickContainer));
                }
                this.quickFiltersBar = new QuickFilterBar(this.quickFiltersDiv, {
                    filters: filters,
                    getTitle: function (filter) { return _this.determineText(function (pre) { return pre + filter.field; }); },
                    idPrefix: this.uniqueName + '_QuickFilter_'
                });
                this.quickFiltersBar.onChange = function (e) { return _this.quickFilterChange(e); };
            }
        };
        DataGrid.prototype.getQuickFilters = function () {
            return this.allColumns.filter(function (x) {
                return x.sourceItem &&
                    x.sourceItem.quickFilter === true &&
                    (x.sourceItem.readPermission == null ||
                        exports.Authorization.hasPermission(x.sourceItem.readPermission));
            }).map(function (x) { return DataGrid_1.propertyItemToQuickFilter(x.sourceItem); })
                .filter(function (x) { return x != null; });
        };
        DataGrid.propertyItemToQuickFilter = function (item) {
            var _a, _b;
            var quick = {};
            var name = item.name;
            var title = tryGetText(item.title);
            if (title == null) {
                title = item.title;
                if (title == null) {
                    title = name;
                }
            }
            var filteringType = exports.FilteringTypeRegistry.get(((_a = item.filteringType) !== null && _a !== void 0 ? _a : 'String'));
            if (filteringType === DateFiltering) {
                quick = QuickFilterBar.dateRange(name, title);
            }
            else if (filteringType === DateTimeFiltering) {
                quick = QuickFilterBar.dateTimeRange(name, title, (_b = item.editorParams) === null || _b === void 0 ? void 0 : _b.useUtc);
            }
            else if (filteringType === BooleanFiltering) {
                var q = item.quickFilterParams || {};
                var f = item.filteringParams || {};
                var trueText = q['trueText'];
                if (trueText == null) {
                    trueText = f['trueText'];
                }
                var falseText = q['falseText'];
                if (falseText == null) {
                    falseText = f['falseText'];
                }
                quick = QuickFilterBar.boolean(name, title, trueText, falseText);
            }
            else {
                var filtering = new filteringType();
                if (filtering && isInstanceOfType(filtering, IQuickFiltering)) {
                    exports.ReflectionOptionsSetter.set(filtering, item.filteringParams);
                    filtering.set_field(item);
                    filtering.set_operator({ key: exports.FilterOperators.EQ });
                    filtering.initQuickFilter(quick);
                    quick.options = extend(deepClone(quick.options), item.quickFilterParams);
                }
                else {
                    return null;
                }
            }
            if (!!item.quickFilterSeparator) {
                quick.separator = true;
            }
            quick.cssClass = item.quickFilterCssClass;
            return quick;
        };
        DataGrid.prototype.findQuickFilter = function (type, field) {
            if (this.quickFiltersBar != null)
                return this.quickFiltersBar.find(type, field);
            return $('#' + this.uniqueName + '_QuickFilter_' + field).getWidget(type);
        };
        DataGrid.prototype.tryFindQuickFilter = function (type, field) {
            if (this.quickFiltersBar != null)
                return this.quickFiltersBar.tryFind(type, field);
            var el = $('#' + this.uniqueName + '_QuickFilter_' + field);
            if (!el.length)
                return null;
            return el.tryGetWidget(type);
        };
        DataGrid.prototype.createIncludeDeletedButton = function () {
            if (!isEmptyOrNull(this.getIsActiveProperty()) ||
                !isEmptyOrNull(this.getIsDeletedProperty())) {
                exports.GridUtils.addIncludeDeletedToggle(this.toolbar.element, this.view, null, false);
            }
        };
        DataGrid.prototype.getQuickSearchFields = function () {
            return null;
        };
        DataGrid.prototype.createQuickSearchInput = function () {
            var _this = this;
            var _a;
            var input = exports.GridUtils.addQuickSearchInput(this.toolbar.element, this.view, this.getQuickSearchFields(), function () { return _this.persistSettings(null); });
            (_a = input === null || input === void 0 ? void 0 : input.element) === null || _a === void 0 ? void 0 : _a.attr('id', this.idPrefix + 'QuickSearchInput');
        };
        DataGrid.prototype.destroy = function () {
            if (this._layoutTimer) {
                this._layoutTimer = exports.LayoutTimer.off(this._layoutTimer);
            }
            if (this.quickFiltersBar) {
                this.quickFiltersBar.destroy();
                this.quickFiltersBar = null;
            }
            if (this.toolbar) {
                this.toolbar.destroy();
                this.toolbar = null;
            }
            if (this.slickGrid) {
                this.slickGrid.onClick.clear();
                this.slickGrid.onSort.clear();
                this.slickGrid.onColumnsResized.clear();
                this.slickGrid.onColumnsReordered.clear();
                this.slickGrid.destroy();
                this.slickGrid = null;
            }
            if (this.view) {
                this.view.onDataChanged.clear();
                this.view.onSubmit = null;
                this.view.setFilter(null);
                this.view = null;
            }
            this.titleDiv = null;
            _super.prototype.destroy.call(this);
        };
        DataGrid.prototype.getItemCssClass = function (item, index) {
            var activeFieldName = this.getIsActiveProperty();
            var deletedFieldName = this.getIsDeletedProperty();
            if (isEmptyOrNull(activeFieldName) && isEmptyOrNull(deletedFieldName)) {
                return null;
            }
            if (activeFieldName) {
                var value = item[activeFieldName];
                if (value == null) {
                    return null;
                }
                if (typeof (value) === 'number') {
                    if (value < 0) {
                        return 'deleted';
                    }
                    else if (value === 0) {
                        return 'inactive';
                    }
                }
                else if (typeof (value) === 'boolean') {
                    if (value === false) {
                        return 'deleted';
                    }
                }
            }
            else {
                return item[deletedFieldName] ? 'deleted' : null;
            }
            return null;
        };
        DataGrid.prototype.getItemMetadata = function (item, index) {
            var itemClass = this.getItemCssClass(item, index);
            if (isEmptyOrNull(itemClass)) {
                return new Object();
            }
            return { cssClasses: itemClass };
        };
        DataGrid.prototype.postProcessColumns = function (columns) {
            exports.SlickHelper.setDefaults(columns, this.getLocalTextDbPrefix());
            var delta = this.getColumnWidthDelta();
            var scale = this.getColumnWidthScale();
            if (scale < 0)
                scale = 1;
            if (delta !== 0 || scale !== 1) {
                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                    var col = columns_1[_i];
                    if (typeof col.width === "number")
                        col.width = Math.round(col.width * scale + delta);
                    if (typeof col.minWidth === "number")
                        col.minWidth = Math.round(col.minWidth * scale + delta);
                    if (typeof col.maxWidth === "number")
                        col.maxWidth = Math.round(col.maxWidth * scale + delta);
                }
            }
            return columns;
        };
        DataGrid.prototype.getColumnWidthDelta = function () {
            var _a;
            return (_a = DataGrid_1.defaultColumnWidthDelta) !== null && _a !== void 0 ? _a : 0;
        };
        DataGrid.prototype.getColumnWidthScale = function () {
            var _a;
            return (_a = DataGrid_1.defaultColumnWidthScale) !== null && _a !== void 0 ? _a : 1;
        };
        DataGrid.prototype.initialPopulate = function () {
            var self = this;
            if (this.populateWhenVisible()) {
                exports.LazyLoadHelper.executeEverytimeWhenShown(this.element, function () {
                    self.refreshIfNeeded();
                }, false);
                if (this.element.is(':visible') && this.view) {
                    this.view.populate();
                }
            }
            else if (this.view) {
                this.view.populate();
            }
        };
        DataGrid.prototype.canFilterColumn = function (column) {
            return (column.sourceItem != null &&
                column.sourceItem.notFilterable !== true &&
                (column.sourceItem.readPermission == null ||
                    exports.Authorization.hasPermission(column.sourceItem.readPermission)));
        };
        DataGrid.prototype.initializeFilterBar = function () {
            var _this = this;
            this.filterBar.set_store(new FilterStore(this.allColumns
                .filter(function (c) { return _this.canFilterColumn(c); })
                .map(function (x) { return x.sourceItem; })));
            this.filterBar.get_store().add_changed(function (s, e) {
                if (_this.restoringSettings <= 0) {
                    _this.persistSettings(null);
                    _this.view && (_this.view.seekToPage = 1);
                    _this.refresh();
                }
            });
        };
        DataGrid.prototype.createSlickGrid = function () {
            var visibleColumns = this.postProcessColumns(this.allColumns).filter(function (x) {
                return x.visible !== false;
            });
            var slickOptions = this.getSlickOptions();
            var grid = new sleekgrid.Grid(this.slickContainer, this.view, visibleColumns, slickOptions);
            grid.registerPlugin(new sleekgrid.AutoTooltips({
                enableForHeaderCells: true
            }));
            this.slickGrid = grid;
            this.setInitialSortOrder();
            return grid;
        };
        DataGrid.prototype.setInitialSortOrder = function () {
            var sortBy = this.getDefaultSortBy();
            if (this.view) {
                this.view.sortBy = Array.prototype.slice.call(sortBy);
            }
            var mapped = sortBy.map(function (s) {
                if (s && endsWith(s.toLowerCase(), ' desc')) {
                    return {
                        columnId: trimEnd(s.substr(0, s.length - 5)),
                        sortAsc: false
                    };
                }
                else
                    return {
                        columnId: s,
                        sortAsc: true
                    };
            });
            this.slickGrid.setSortColumns(mapped);
        };
        DataGrid.prototype.itemAt = function (row) {
            return this.slickGrid.getDataItem(row);
        };
        DataGrid.prototype.rowCount = function () {
            return this.slickGrid.getDataLength();
        };
        DataGrid.prototype.getItems = function () {
            return this.view.getItems();
        };
        DataGrid.prototype.setItems = function (value) {
            this.view.setItems(value, true);
        };
        DataGrid.prototype.bindToSlickEvents = function () {
            var _this = this;
            var self = this;
            this._slickGridOnSort = function (e, p) {
                self.view.populateLock();
                try {
                    var sortBy = [];
                    var col;
                    if (!!p.multiColumnSort) {
                        for (var i = 0; !!(i < p.sortCols.length); i++) {
                            var x = p.sortCols[i];
                            col = x.sortCol;
                            if (col == null) {
                                col = {};
                            }
                            sortBy.push(col.field + (!!x.sortAsc ? '' : ' DESC'));
                        }
                    }
                    else {
                        var col = p.sortCol;
                        if (col == null) {
                            col = {};
                        }
                        sortBy.push(col.field + (!!p.sortAsc ? '' : ' DESC'));
                    }
                    self.view.seekToPage = 1;
                    self.view.sortBy = sortBy;
                }
                finally {
                    self.view.populateUnlock();
                }
                if (self.view.getLocalSort && self.view.getLocalSort()) {
                    self.view.sort();
                }
                else {
                    self.view.populate();
                }
                _this.persistSettings(null);
            };
            this.slickGrid.onSort.subscribe(this._slickGridOnSort);
            this._slickGridOnClick = function (e1, p1) {
                self.onClick(e1, p1.row, p1.cell);
            };
            this.slickGrid.onClick.subscribe(this._slickGridOnClick);
            this.slickGrid.onColumnsReordered.subscribe(function (e2, p2) {
                return _this.persistSettings(null);
            });
            this.slickGrid.onColumnsResized.subscribe(function (e3, p3) {
                return _this.persistSettings(null);
            });
        };
        DataGrid.prototype.getAddButtonCaption = function () {
            var _a;
            return (_a = tryGetText('Controls.DataGrid.NewButton')) !== null && _a !== void 0 ? _a : 'New';
        };
        DataGrid.prototype.getButtons = function () {
            return [];
        };
        DataGrid.prototype.editItem = function (entityOrId) {
            throw new Error("Not Implemented!");
        };
        DataGrid.prototype.editItemOfType = function (itemType, entityOrId) {
            if (itemType === this.getItemType()) {
                this.editItem(entityOrId);
                return;
            }
            throw new Error("Not Implemented!");
        };
        DataGrid.prototype.onClick = function (e, row, cell) {
            if (e.isDefaultPrevented()) {
                return;
            }
            var target = $(e.target);
            if (!target.hasClass('s-EditLink')) {
                target = target.closest('a');
            }
            if (target.hasClass('s-EditLink')) {
                e.preventDefault();
                this.editItemOfType(exports.SlickFormatting.getItemType(target), exports.SlickFormatting.getItemId(target));
            }
        };
        DataGrid.prototype.viewDataChanged = function (e, rows) {
            this.markupReady();
            this.layout();
        };
        DataGrid.prototype.bindToViewEvents = function () {
            var self = this;
            this.view.onDataChanged.subscribe(function (e, d) {
                return self.viewDataChanged(e, d);
            });
            this.view.onSubmit = function (view) {
                return self.onViewSubmit();
            };
            this.view.setFilter(function (item, view1) {
                return self.onViewFilter(item);
            });
            this.view.onProcessData = function (response, view2) {
                return self.onViewProcessData(response);
            };
        };
        DataGrid.prototype.onViewProcessData = function (response) {
            return response;
        };
        DataGrid.prototype.onViewFilter = function (item) {
            return true;
        };
        DataGrid.prototype.getIncludeColumns = function (include) {
            var columns = this.slickGrid.getColumns();
            for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                var column = columns_2[_i];
                if (column.field) {
                    include[column.field] = true;
                }
                if (column.referencedFields) {
                    for (var _a = 0, _b = column.referencedFields; _a < _b.length; _a++) {
                        var x = _b[_a];
                        include[x] = true;
                    }
                }
            }
        };
        DataGrid.prototype.setCriteriaParameter = function () {
            delete this.view.params['Criteria'];
            if (this.filterBar) {
                var criteria = this.filterBar.get_store().get_activeCriteria();
                if (!Criteria.isEmpty(criteria)) {
                    this.view.params.Criteria = criteria;
                }
            }
        };
        DataGrid.prototype.setEquality = function (field, value) {
            setEquality(this.view.params, field, value);
        };
        DataGrid.prototype.setIncludeColumnsParameter = function () {
            var include = {};
            this.getIncludeColumns(include);
            var array = [];
            for (var _i = 0, _a = Object.keys(include); _i < _a.length; _i++) {
                var key = _a[_i];
                array.push(key);
            }
            this.view.params.IncludeColumns = array;
        };
        DataGrid.prototype.onViewSubmit = function () {
            if (this._isDisabled || !this.getGridCanLoad()) {
                return false;
            }
            this.setCriteriaParameter();
            this.setIncludeColumnsParameter();
            this.invokeSubmitHandlers();
            return true;
        };
        DataGrid.prototype.markupReady = function () {
        };
        DataGrid.prototype.createSlickContainer = function () {
            return $('<div class="grid-container"></div>').appendTo(this.element);
        };
        DataGrid.prototype.createView = function () {
            var opt = this.getViewOptions();
            return new RemoteView(opt);
        };
        DataGrid.prototype.getDefaultSortBy = function () {
            if (this.slickGrid) {
                var columns = this.slickGrid.getColumns().filter(function (x) {
                    return x.sortOrder && x.sortOrder !== 0;
                });
                if (columns.length > 0) {
                    columns.sort(function (x1, y) {
                        return Math.abs(x1.sortOrder) < Math.abs(y.sortOrder) ? -1 : (Math.abs(x1.sortOrder) > Math.abs(y.sortOrder) ? 1 : 0);
                    });
                    var list = [];
                    for (var i = 0; i < columns.length; i++) {
                        var col = columns[i];
                        list.push(col.field + ((col.sortOrder < 0) ? ' DESC' : ''));
                    }
                    return list;
                }
            }
            return [];
        };
        DataGrid.prototype.usePager = function () {
            return false;
        };
        DataGrid.prototype.enableFiltering = function () {
            var attr = this.attrs(FilterableAttribute);
            return attr.length > 0 && attr[0].value;
        };
        DataGrid.prototype.populateWhenVisible = function () {
            return false;
        };
        DataGrid.prototype.createFilterBar = function () {
            var filterBarDiv = $('<div/>').appendTo(this.element);
            this.filterBar = new FilterDisplayBar(filterBarDiv);
            this.initializeFilterBar();
        };
        DataGrid.prototype.getPagerOptions = function () {
            return {
                view: this.view,
                rowsPerPage: 20,
                rowsPerPageOptions: [20, 100, 500, 2500]
            };
        };
        DataGrid.prototype.createPager = function () {
            var pagerDiv = $('<div></div>').appendTo(this.element);
            new SlickPager(pagerDiv, this.getPagerOptions());
        };
        DataGrid.prototype.getViewOptions = function () {
            var _this = this;
            var opt = {};
            opt.idField = this.getIdProperty();
            opt.sortBy = this.getDefaultSortBy();
            if (!this.usePager()) {
                opt.rowsPerPage = 0;
            }
            else if (this.element.hasClass('responsive-height')) {
                opt.rowsPerPage = (($(window.window).width() < 768) ? 20 : 100);
            }
            else {
                opt.rowsPerPage = 100;
            }
            opt.getItemMetadata = function (item, index) {
                return _this.getItemMetadata(item, index);
            };
            return opt;
        };
        DataGrid.prototype.createToolbar = function (buttons) {
            var toolbarDiv = $('<div class="grid-toolbar"></div>').appendTo(this.element);
            this.toolbar = new Toolbar(toolbarDiv, { buttons: buttons, hotkeyContext: this.element[0] });
        };
        DataGrid.prototype.getTitle = function () {
            if (!this.titleDiv) {
                return null;
            }
            return this.titleDiv.children('.title-text').text();
        };
        DataGrid.prototype.setTitle = function (value) {
            if (value !== this.getTitle()) {
                if (value == null) {
                    if (this.titleDiv) {
                        this.titleDiv.remove();
                        this.titleDiv = null;
                    }
                }
                else {
                    if (!this.titleDiv) {
                        this.titleDiv = $('<div class="grid-title"><div class="title-text"></div></div>')
                            .prependTo(this.element);
                    }
                    this.titleDiv.children('.title-text').text(value);
                }
                this.layout();
            }
        };
        DataGrid.prototype.getItemType = function () {
            return 'Item';
        };
        DataGrid.prototype.itemLink = function (itemType, idField, text, cssClass, encode) {
            if (encode === void 0) { encode = true; }
            if (itemType == null) {
                itemType = this.getItemType();
            }
            if (idField == null) {
                idField = this.getIdProperty();
            }
            return exports.SlickFormatting.itemLink(itemType, idField, text, cssClass, encode);
        };
        DataGrid.prototype.getColumnsKey = function () {
            var attr = this.attrs(ColumnsKeyAttribute);
            if (attr && attr.length > 0) {
                return attr[0].value;
            }
            return null;
        };
        DataGrid.prototype.getPropertyItems = function () {
            var _a;
            return ((_a = this.propertyItemsData) === null || _a === void 0 ? void 0 : _a.items) || [];
        };
        DataGrid.prototype.getPropertyItemsData = function () {
            var columnsKey = this.getColumnsKey();
            if (this.getColumnsKey === DataGrid_1.prototype.getColumnsKey &&
                this.getPropertyItems !== DataGrid_1.prototype.getPropertyItems &&
                !exports.ScriptData.canLoad('Columns.' + columnsKey)) {
                return {
                    items: this.getPropertyItems(),
                    additionalItems: []
                };
            }
            if (!isEmptyOrNull(columnsKey)) {
                return getColumnsData(columnsKey);
            }
            return { items: [], additionalItems: [] };
        };
        DataGrid.prototype.getPropertyItemsDataAsync = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var columnsKey;
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            columnsKey = this.getColumnsKey();
                            if (!!isEmptyOrNull(columnsKey)) return [3 /*break*/, 2];
                            return [4 /*yield*/, getColumnsDataAsync(columnsKey)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/, { items: [], additionalItems: [] }];
                    }
                });
            });
        };
        DataGrid.prototype.getColumns = function () {
            return this.propertyItemsToSlickColumns(this.getPropertyItems());
        };
        DataGrid.prototype.propertyItemsToSlickColumns = function (propertyItems) {
            var columns = exports.PropertyItemSlickConverter.toSlickColumns(propertyItems);
            for (var i = 0; i < propertyItems.length; i++) {
                var item = propertyItems[i];
                var column = columns[i];
                if (item.editLink === true) {
                    var oldFormat = { $: column.format };
                    var css = { $: (item.editLinkCssClass) != null ? item.editLinkCssClass : null };
                    column.format = this.itemLink(item.editLinkItemType != null ? item.editLinkItemType : null, item.editLinkIdField != null ? item.editLinkIdField : null, function (ctx) {
                        if (this.oldFormat.$ != null) {
                            return this.oldFormat.$(ctx);
                        }
                        return htmlEncode(ctx.value);
                    }.bind({ oldFormat: oldFormat }), function (ctx1) {
                        var _a;
                        return ((_a = this.css.$) !== null && _a !== void 0 ? _a : '');
                    }.bind({ css: css }), false);
                    if (!isEmptyOrNull(item.editLinkIdField)) {
                        column.referencedFields = column.referencedFields || [];
                        column.referencedFields.push(item.editLinkIdField);
                    }
                }
            }
            return columns;
        };
        DataGrid.prototype.getSlickOptions = function () {
            var opt = {};
            opt.multiSelect = false;
            opt.multiColumnSort = true;
            opt.enableCellNavigation = false;
            if (DataGrid_1.defaultHeaderHeight)
                opt.headerRowHeight = DataGrid_1.defaultHeaderHeight;
            if (DataGrid_1.defaultRowHeight)
                opt.rowHeight = DataGrid_1.defaultRowHeight;
            return opt;
        };
        DataGrid.prototype.populateLock = function () {
            this.view.populateLock();
        };
        DataGrid.prototype.populateUnlock = function () {
            this.view.populateUnlock();
        };
        DataGrid.prototype.getGridCanLoad = function () {
            return true;
        };
        DataGrid.prototype.refresh = function () {
            if (!this.populateWhenVisible()) {
                this.internalRefresh();
                return;
            }
            if (this.slickContainer.is(':visible')) {
                this.slickContainer.data('needsRefresh', false);
                this.internalRefresh();
                return;
            }
            this.slickContainer.data('needsRefresh', true);
        };
        DataGrid.prototype.refreshIfNeeded = function () {
            if (!!this.slickContainer.data('needsRefresh')) {
                this.slickContainer.data('needsRefresh', false);
                this.internalRefresh();
            }
        };
        DataGrid.prototype.internalRefresh = function () {
            this.view.populate();
        };
        DataGrid.prototype.setIsDisabled = function (value) {
            if (this._isDisabled !== value) {
                this._isDisabled = value;
                if (this._isDisabled) {
                    this.view.setItems([], true);
                }
                this.updateDisabledState();
            }
        };
        Object.defineProperty(DataGrid.prototype, "readOnly", {
            get: function () {
                return this.get_readOnly();
            },
            set: function (value) {
                this.set_readOnly(value);
            },
            enumerable: false,
            configurable: true
        });
        DataGrid.prototype.get_readOnly = function () {
            return !!this._readonly;
        };
        DataGrid.prototype.set_readOnly = function (value) {
            if (!!this._readonly != !!value) {
                this._readonly = !!value;
                this.updateInterface();
            }
        };
        DataGrid.prototype.updateInterface = function () {
            this.toolbar && this.toolbar.updateInterface();
        };
        DataGrid.prototype.getRowDefinition = function () {
            return null;
        };
        DataGrid.prototype.getLocalTextDbPrefix = function () {
            var _a;
            if (this._localTextDbPrefix != null)
                return this._localTextDbPrefix;
            this._localTextDbPrefix = (_a = this.getLocalTextPrefix()) !== null && _a !== void 0 ? _a : '';
            if (this._localTextDbPrefix.length > 0 && !endsWith(this._localTextDbPrefix, '.'))
                this._localTextDbPrefix = 'Db.' + this._localTextDbPrefix + '.';
            return this._localTextDbPrefix;
        };
        DataGrid.prototype.getLocalTextPrefix = function () {
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return rowDefinition.localTextPrefix;
            var attr = this.attrs(LocalTextPrefixAttribute);
            if (attr.length >= 1)
                return attr[0].value;
        };
        DataGrid.prototype.getIdProperty = function () {
            var _a, _b;
            if (this._idProperty != null)
                return this._idProperty;
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return this._idProperty = (_a = rowDefinition.idProperty) !== null && _a !== void 0 ? _a : '';
            var attr = this.attrs(IdPropertyAttribute);
            if (attr.length === 1)
                return this._idProperty = (_b = attr[0].value) !== null && _b !== void 0 ? _b : '';
            return this._idProperty = 'ID';
        };
        DataGrid.prototype.getIsDeletedProperty = function () {
            var _a;
            return (_a = this.getRowDefinition()) === null || _a === void 0 ? void 0 : _a.isDeletedProperty;
        };
        DataGrid.prototype.getIsActiveProperty = function () {
            var _a, _b;
            if (this._isActiveProperty != null)
                return this._isActiveProperty;
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return this._isActiveProperty = (_a = rowDefinition.isActiveProperty) !== null && _a !== void 0 ? _a : '';
            var attr = this.attrs(IsActivePropertyAttribute);
            if (attr.length === 1)
                return this._isActiveProperty = (_b = attr[0].value) !== null && _b !== void 0 ? _b : '';
            return this._isActiveProperty = '';
        };
        DataGrid.prototype.updateDisabledState = function () {
            this.slickContainer.toggleClass('ui-state-disabled', !!this._isDisabled);
        };
        DataGrid.prototype.resizeCanvas = function () {
            var _a;
            (_a = this.slickGrid) === null || _a === void 0 ? void 0 : _a.resizeCanvas();
        };
        DataGrid.prototype.subDialogDataChange = function () {
            this.refresh();
        };
        DataGrid.prototype.addFilterSeparator = function () {
            this.ensureQuickFilterBar().addSeparator();
        };
        DataGrid.prototype.determineText = function (getKey) {
            var localTextPrefix = this.getLocalTextDbPrefix();
            if (!isEmptyOrNull(localTextPrefix)) {
                var local = tryGetText(getKey(localTextPrefix));
                if (local != null) {
                    return local;
                }
            }
            return null;
        };
        DataGrid.prototype.addQuickFilter = function (opt) {
            return this.ensureQuickFilterBar().add(opt);
        };
        DataGrid.prototype.addDateRangeFilter = function (field, title) {
            return this.ensureQuickFilterBar().addDateRange(field, title);
        };
        DataGrid.prototype.dateRangeQuickFilter = function (field, title) {
            return QuickFilterBar.dateRange(field, title);
        };
        DataGrid.prototype.addDateTimeRangeFilter = function (field, title) {
            return this.ensureQuickFilterBar().addDateTimeRange(field, title);
        };
        DataGrid.prototype.dateTimeRangeQuickFilter = function (field, title) {
            return QuickFilterBar.dateTimeRange(field, title);
        };
        DataGrid.prototype.addBooleanFilter = function (field, title, yes, no) {
            return this.ensureQuickFilterBar().addBoolean(field, title, yes, no);
        };
        DataGrid.prototype.booleanQuickFilter = function (field, title, yes, no) {
            return QuickFilterBar.boolean(field, title, yes, no);
        };
        DataGrid.prototype.invokeSubmitHandlers = function () {
            if (this.quickFiltersBar != null) {
                this.quickFiltersBar.onSubmit(this.view.params);
            }
        };
        DataGrid.prototype.quickFilterChange = function (e) {
            this.persistSettings(null);
            this.view && (this.view.seekToPage = 1);
            this.refresh();
        };
        DataGrid.prototype.getPersistanceStorage = function () {
            return DataGrid_1.defaultPersistanceStorage;
        };
        DataGrid.prototype.getPersistanceKey = function () {
            var key = 'GridSettings:';
            var path = window.location.pathname;
            if (!isEmptyOrNull(path)) {
                key += path.substr(1).split(String.fromCharCode(47)).slice(0, 2).join('/') + ':';
            }
            key += getTypeFullName(getInstanceType(this));
            return key;
        };
        DataGrid.prototype.gridPersistanceFlags = function () {
            return {};
        };
        DataGrid.prototype.canShowColumn = function (column) {
            if (column == null) {
                return false;
            }
            var item = column.sourceItem;
            if (item == null) {
                return true;
            }
            if (item.filterOnly === true) {
                return false;
            }
            if (item.readPermission == null) {
                return true;
            }
            return exports.Authorization.hasPermission(item.readPermission);
        };
        DataGrid.prototype.getPersistedSettings = function () {
            var storage = this.getPersistanceStorage();
            if (storage == null)
                return null;
            function fromJson(json) {
                json = trimToNull(json);
                if (json != null && startsWith(json, '{') && endsWith(json, '}'))
                    return JSON.parse(json);
                return null;
            }
            var jsonOrPromise = storage.getItem(this.getPersistanceKey());
            if (jsonOrPromise === null || jsonOrPromise === void 0 ? void 0 : jsonOrPromise.then)
                return jsonOrPromise.then(function (json) { return fromJson(json); });
            return fromJson(jsonOrPromise);
        };
        DataGrid.prototype.restoreSettings = function (settings, flags) {
            var _this = this;
            if (settings != null)
                return this.restoreSettingsFrom(settings, flags);
            var settingsOrPromise = this.getPersistedSettings();
            if (settingsOrPromise === null || settingsOrPromise === void 0 ? void 0 : settingsOrPromise.then)
                return settingsOrPromise.then(function (s) { return _this.restoreSettingsFrom(s); });
            this.restoreSettingsFrom(settingsOrPromise);
        };
        DataGrid.prototype.restoreSettingsFrom = function (settings, flags) {
            var _this = this;
            if (!this.slickGrid || !settings)
                return;
            var columns = this.slickGrid.getColumns();
            var colById = null;
            var updateColById = function (cl) {
                colById = {};
                for (var $t1 = 0; $t1 < cl.length; $t1++) {
                    var c = cl[$t1];
                    colById[c.id] = c;
                }
            };
            this.view.beginUpdate();
            this.restoringSettings++;
            try {
                flags = flags || this.gridPersistanceFlags();
                if (settings.columns != null) {
                    if (flags.columnVisibility !== false) {
                        var visible = {};
                        updateColById(this.allColumns);
                        var newColumns = [];
                        for (var $t2 = 0; $t2 < settings.columns.length; $t2++) {
                            var x = settings.columns[$t2];
                            if (x.id != null && x.visible === true) {
                                var column = colById[x.id];
                                if (this.canShowColumn(column)) {
                                    column.visible = true;
                                    newColumns.push(column);
                                    delete colById[x.id];
                                }
                            }
                        }
                        for (var $t3 = 0; $t3 < this.allColumns.length; $t3++) {
                            var c1 = this.allColumns[$t3];
                            if (colById[c1.id] != null) {
                                c1.visible = false;
                                newColumns.push(c1);
                            }
                        }
                        this.allColumns = newColumns;
                        columns = this.allColumns.filter(function (x1) {
                            return x1.visible === true;
                        });
                    }
                    if (flags.columnWidths !== false) {
                        updateColById(columns);
                        for (var $t4 = 0; $t4 < settings.columns.length; $t4++) {
                            var x2 = settings.columns[$t4];
                            if (x2.id != null && x2.width != null && x2.width !== 0) {
                                var column1 = colById[x2.id];
                                if (column1 != null) {
                                    column1.width = x2.width;
                                }
                            }
                        }
                    }
                    if (flags.sortColumns !== false) {
                        updateColById(columns);
                        var list = [];
                        var sortColumns = settings.columns.filter(function (x3) {
                            var _a;
                            return x3.id != null && ((_a = x3.sort) !== null && _a !== void 0 ? _a : 0) !== 0;
                        });
                        sortColumns.sort(function (a, b) {
                            // sort holds two informations:
                            // absoulte value: order of sorting
                            // sign: positive = ascending, negativ = descending
                            // so we have to compare absolute values here
                            return Math.abs(a.sort) - Math.abs(b.sort);
                        });
                        for (var $t5 = 0; $t5 < sortColumns.length; $t5++) {
                            var x4 = sortColumns[$t5];
                            var column2 = colById[x4.id];
                            if (column2 != null) {
                                list.push({
                                    columnId: x4.id,
                                    sortAsc: x4.sort > 0
                                });
                            }
                        }
                        this.view.sortBy = list.map(function (x5) {
                            return x5.columnId + ((x5.sortAsc === false) ? ' DESC' : '');
                        });
                        this.slickGrid.setSortColumns(list);
                    }
                    this.slickGrid.setColumns(columns);
                    this.slickGrid.invalidate();
                }
                if (settings.filterItems != null &&
                    flags.filterItems !== false &&
                    this.filterBar != null &&
                    this.filterBar.get_store() != null) {
                    var items = this.filterBar.get_store().get_items();
                    items.length = 0;
                    items.push.apply(items, settings.filterItems);
                    this.filterBar.get_store().raiseChanged();
                }
                if (settings.includeDeleted != null &&
                    flags.includeDeleted !== false) {
                    var includeDeletedToggle = this.element.find('.s-IncludeDeletedToggle');
                    if (!!settings.includeDeleted !== includeDeletedToggle.hasClass('pressed')) {
                        includeDeletedToggle.children('a').click();
                    }
                }
                if (settings.quickFilters != null &&
                    flags.quickFilters !== false &&
                    this.quickFiltersDiv != null &&
                    this.quickFiltersDiv.length > 0) {
                    this.quickFiltersDiv.find('.quick-filter-item').each(function (i, e) {
                        var field = $(e).data('qffield');
                        if (isEmptyOrNull(field)) {
                            return;
                        }
                        var widget = $('#' + _this.uniqueName + '_QuickFilter_' + field).tryGetWidget(Widget);
                        if (widget == null) {
                            return;
                        }
                        var state = settings.quickFilters[field];
                        var loadState = $(e).data('qfloadstate');
                        if (loadState != null) {
                            loadState(widget, state);
                        }
                        else {
                            exports.EditorUtils.setValue(widget, state);
                        }
                    });
                }
                if (flags.quickSearch === true && (settings.quickSearchField !== undefined || settings.quickSearchText !== undefined)) {
                    var qsInput = this.toolbar.element.find('.s-QuickSearchInput').first();
                    if (qsInput.length > 0) {
                        var qsWidget = qsInput.tryGetWidget(QuickSearchInput);
                        qsWidget && qsWidget.restoreState(settings.quickSearchText, settings.quickSearchField);
                    }
                }
            }
            finally {
                this.restoringSettings--;
                this.view.endUpdate();
            }
        };
        DataGrid.prototype.persistSettings = function (flags) {
            var storage = this.getPersistanceStorage();
            if (!storage) {
                return;
            }
            var settings = this.getCurrentSettings(flags);
            return storage.setItem(this.getPersistanceKey(), JSON.stringify(settings));
        };
        DataGrid.prototype.getCurrentSettings = function (flags) {
            var _this = this;
            flags = flags || this.gridPersistanceFlags();
            var settings = {};
            if (flags.columnVisibility !== false || flags.columnWidths !== false || flags.sortColumns !== false) {
                settings.columns = [];
                var sortColumns = this.slickGrid.getSortColumns();
                var columns = this.slickGrid.getColumns();
                for (var _i = 0, columns_3 = columns; _i < columns_3.length; _i++) {
                    var column = columns_3[_i];
                    var p = {
                        id: column.id
                    };
                    if (flags.columnVisibility !== false) {
                        p.visible = true;
                    }
                    if (flags.columnWidths !== false) {
                        p.width = column.width;
                    }
                    if (flags.sortColumns !== false) {
                        var sort = indexOf(sortColumns, function (x) { return x.columnId == column.id; });
                        p.sort = ((sort >= 0) ? ((sortColumns[sort].sortAsc !== false) ? (sort + 1) : (-sort - 1)) : 0);
                    }
                    settings.columns.push(p);
                }
            }
            if (flags.includeDeleted !== false) {
                settings.includeDeleted = this.element.find('.s-IncludeDeletedToggle').hasClass('pressed');
            }
            if (flags.filterItems !== false && (this.filterBar != null) && (this.filterBar.get_store() != null)) {
                settings.filterItems = this.filterBar.get_store().get_items().slice();
            }
            if (flags.quickSearch === true) {
                var qsInput = this.toolbar.element.find('.s-QuickSearchInput').first();
                if (qsInput.length > 0) {
                    var qsWidget = qsInput.tryGetWidget(QuickSearchInput);
                    if (qsWidget != null) {
                        settings.quickSearchField = qsWidget.get_field();
                        settings.quickSearchText = qsWidget.element.val();
                    }
                }
            }
            if (flags.quickFilters !== false && (this.quickFiltersDiv != null) && this.quickFiltersDiv.length > 0) {
                settings.quickFilters = {};
                this.quickFiltersDiv.find('.quick-filter-item').each(function (i, e) {
                    var _a;
                    var field = $(e).data('qffield');
                    if (isEmptyOrNull(field)) {
                        return;
                    }
                    var widget = $('#' + _this.uniqueName + '_QuickFilter_' + field).tryGetWidget(Widget);
                    if (widget == null) {
                        return;
                    }
                    var saveState = $(e).data('qfsavestate');
                    var state = (saveState != null) ? saveState(widget) : exports.EditorUtils.getValue(widget);
                    settings.quickFilters[field] = state;
                    if (flags.quickFilterText === true && $(e).hasClass('quick-filter-active')) {
                        var getDisplayText = $(e).data('qfdisplaytext');
                        var filterLabel = $(e).find('.quick-filter-label').text();
                        var displayText;
                        if (getDisplayText != null) {
                            displayText = getDisplayText(widget, filterLabel);
                        }
                        else {
                            displayText = filterLabel + ' = ' + exports.EditorUtils.getDisplayText(widget);
                        }
                        if (!isEmptyOrNull(displayText)) {
                            if (!isEmptyOrNull(settings.quickFilterText)) {
                                settings.quickFilterText += ' ' + ((_a = tryGetText('Controls.FilterPanel.And')) !== null && _a !== void 0 ? _a : 'and') + ' ';
                                settings.quickFilterText += displayText;
                            }
                            else {
                                settings.quickFilterText = displayText;
                            }
                        }
                    }
                });
            }
            return settings;
        };
        DataGrid.prototype.getElement = function () {
            return this.element;
        };
        DataGrid.prototype.getGrid = function () {
            return this.slickGrid;
        };
        DataGrid.prototype.getView = function () {
            return this.view;
        };
        DataGrid.prototype.getFilterStore = function () {
            return (this.filterBar == null) ? null : this.filterBar.get_store();
        };
        var DataGrid_1;
        DataGrid = DataGrid_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.DataGrid', [IReadOnly]),
            exports.Decorators.element("<div/>")
        ], DataGrid);
        return DataGrid;
    }(Widget));

    var ColumnPickerDialog = /** @class */ (function (_super) {
        tslib.__extends(ColumnPickerDialog, _super);
        function ColumnPickerDialog() {
            var _this = _super.call(this) || this;
            new QuickSearchInput(_this.byId("Search"), {
                onSearch: function (fld, txt, done) {
                    txt = trimToNull(txt);
                    if (txt != null)
                        txt = Select2.util.stripDiacritics(txt.toLowerCase());
                    _this.element.find('li').each(function (x, e) {
                        $(e).toggle(!txt || Select2.util.stripDiacritics($(e).text().toLowerCase()).indexOf(txt) >= 0);
                    });
                    done && done(true);
                }
            });
            _this.ulVisible = _this.byId("VisibleCols");
            _this.ulHidden = _this.byId("HiddenCols");
            _this.dialogTitle = localText("Controls.ColumnPickerDialog.Title");
            return _this;
        }
        ColumnPickerDialog_1 = ColumnPickerDialog;
        ColumnPickerDialog.createToolButton = function (grid) {
            function onClick() {
                var picker = new ColumnPickerDialog_1();
                picker.allColumns = grid.allColumns;
                if (grid.initialSettings) {
                    var initialSettings = grid.initialSettings;
                    if (initialSettings.columns && initialSettings.columns.length)
                        picker.defaultColumns = initialSettings.columns.map(function (x) { return x.id; });
                }
                picker.visibleColumns = grid.getGrid().getColumns().map(function (x) { return x.id; });
                picker.done = function () {
                    grid.allColumns = picker.allColumns;
                    var visible = picker.allColumns.filter(function (x) { return x.visible === true; });
                    grid.getGrid().setColumns(visible);
                    Promise.resolve(grid.persistSettings()).then(function () { return grid.getView().populate(); });
                };
                exports.Router && exports.Router.dialog && exports.Router.dialog(grid.element, picker.element, function () { return "columns"; });
                picker.dialogOpen();
            }
            grid.element.on('handleroute.' + grid.uniqueName, function (e, arg) {
                if (arg && !arg.handled && arg.route == "columns") {
                    onClick();
                }
            });
            return {
                hint: localText("Controls.ColumnPickerDialog.Title"),
                action: 'column-picker',
                cssClass: "column-picker-button",
                icon: 'fa-th-list text-blue',
                onClick: onClick
            };
        };
        ColumnPickerDialog.prototype.getDialogButtons = function () {
            var _this = this;
            return [
                {
                    text: localText("Controls.ColumnPickerDialog.RestoreDefaults"),
                    click: function () {
                        var liByKey = {};
                        _this.ulVisible.children().add(_this.ulHidden.children()).each(function (x, e) {
                            var el = $(e);
                            liByKey[el.data('key')] = el;
                        });
                        var last = null;
                        for (var _i = 0, _a = _this.defaultColumns; _i < _a.length; _i++) {
                            var id = _a[_i];
                            var li = liByKey[id];
                            if (!li)
                                continue;
                            if (last == null)
                                li.prependTo(_this.ulVisible);
                            else
                                li.insertAfter(last);
                            last = li;
                            var key = li.data('key');
                            delete liByKey[key];
                        }
                        for (var key in liByKey)
                            liByKey[key].appendTo(_this.ulHidden);
                        _this.updateListStates();
                    }
                },
                {
                    text: localText("Dialogs.OkButton"),
                    click: function () {
                        var newColumns = [];
                        for (var _i = 0, _a = _this.allColumns; _i < _a.length; _i++) {
                            var col = _a[_i];
                            col.visible = false;
                        }
                        _this.visibleColumns = _this.ulVisible.children().toArray().map(function (x) {
                            var id = $(x).data("key");
                            var col = _this.colById[id];
                            col.visible = true;
                            newColumns.push(col);
                            return id;
                        });
                        for (var _b = 0, _c = _this.allColumns; _b < _c.length; _b++) {
                            var col = _c[_b];
                            if (!col.visible)
                                newColumns.push(col);
                        }
                        _this.allColumns = newColumns;
                        _this.done && _this.done();
                        _this.dialogClose();
                    }
                },
                {
                    text: localText("Dialogs.CancelButton"),
                    click: function () {
                        _this.dialogClose();
                    }
                }
            ];
        };
        ColumnPickerDialog.prototype.getDialogOptions = function () {
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.width = 600;
            return opt;
        };
        ColumnPickerDialog.prototype.getTitle = function (col) {
            if (col.id == "__select__")
                return "[x]";
            return col.name || col.toolTip || col.id;
        };
        ColumnPickerDialog.prototype.allowHide = function (col) {
            return col.sourceItem == null || col.sourceItem.allowHide == null || col.sourceItem.allowHide;
        };
        ColumnPickerDialog.prototype.createLI = function (col) {
            var allowHide = this.allowHide(col);
            return $("\n<li data-key=\"".concat(col.id, "\" class=\"").concat(allowHide ? "" : "cant-hide", "\">\n<span class=\"drag-handle\">\u2630</span>\n").concat(htmlEncode(this.getTitle(col)), "\n").concat(allowHide ? "<i class=\"js-hide fa fa-eye-slash\" title=\"".concat(htmlEncode(localText("Controls.ColumnPickerDialog.HideHint")), "\"></i>") : '', "\n<i class=\"js-show fa fa-eye\" title=\"").concat(htmlEncode(localText("Controls.ColumnPickerDialog.ShowHint")), "\"></i>\n</li>"));
        };
        ColumnPickerDialog.prototype.updateListStates = function () {
            this.ulVisible.children().removeClass("bg-info").addClass("bg-success");
            this.ulHidden.children().removeClass("bg-success").addClass("bg-info");
        };
        ColumnPickerDialog.prototype.setupColumns = function () {
            var _this = this;
            this.allColumns = this.allColumns || [];
            this.visibleColumns = this.visibleColumns || [];
            var visible = {};
            for (var _i = 0, _a = this.visibleColumns; _i < _a.length; _i++) {
                var id = _a[_i];
                visible[id] = true;
            }
            this.colById = {};
            for (var _b = 0, _c = this.allColumns; _b < _c.length; _b++) {
                var c_1 = _c[_b];
                this.colById[c_1.id] = c_1;
            }
            if (this.defaultColumns == null)
                this.defaultColumns = this.visibleColumns.slice(0);
            var hidden = [];
            for (var _d = 0, _e = this.allColumns; _d < _e.length; _d++) {
                var c_2 = _e[_d];
                if (!visible[c_2.id] && (!c_2.sourceItem ||
                    (c_2.sourceItem.filterOnly !== true &&
                        (c_2.sourceItem.readPermission == null || exports.Authorization.hasPermission(c_2.sourceItem.readPermission))))) {
                    hidden.push(c_2);
                }
            }
            var hiddenColumns = hidden.sort(function (a, b) { return Culture.stringCompare(_this.getTitle(a), _this.getTitle(b)); });
            for (var _f = 0, _g = this.visibleColumns; _f < _g.length; _f++) {
                var id = _g[_f];
                var c = this.colById[id];
                if (!c)
                    continue;
                this.createLI(c).appendTo(this.ulVisible);
            }
            for (var _h = 0, hiddenColumns_1 = hiddenColumns; _h < hiddenColumns_1.length; _h++) {
                var c_3 = hiddenColumns_1[_h];
                this.createLI(c_3).appendTo(this.ulHidden);
            }
            this.updateListStates();
            // @ts-ignore
            if (typeof Sortable !== "undefined" && Sortable.create) {
                // @ts-ignore
                Sortable.create(this.ulVisible[0], {
                    group: this.uniqueName + "_group",
                    filter: '.js-hide',
                    onFilter: function (evt) {
                        $(evt.item).appendTo(_this.ulHidden);
                        _this.updateListStates();
                    },
                    onMove: function (x) {
                        if ($(x.dragged).hasClass('cant-hide') &&
                            x.from == _this.ulVisible[0] &&
                            x.to !== x.from)
                            return false;
                        return true;
                    },
                    onEnd: function (evt) { return _this.updateListStates(); }
                });
                // @ts-ignore
                Sortable.create(this.ulHidden[0], {
                    group: this.uniqueName + "_group",
                    sort: false,
                    filter: '.js-show',
                    onFilter: function (evt) {
                        $(evt.item).appendTo(_this.ulVisible);
                        _this.updateListStates();
                    },
                    onEnd: function () { return _this.updateListStates(); }
                });
            }
        };
        ColumnPickerDialog.prototype.onDialogOpen = function () {
            _super.prototype.onDialogOpen.call(this);
            this.element.find("input").removeAttr("disabled");
            this.element.closest('.ui-dialog').children(".ui-dialog-buttonpane")
                .find('button').eq(0).addClass("restore-defaults")
                .next().focus();
            this.setupColumns();
            centerDialog(this.element);
        };
        ColumnPickerDialog.prototype.getTemplate = function () {
            return "\n<div class=\"search\"><input id=\"~_Search\" type=\"text\" disabled /></div>\n<div class=\"columns-container\">\n<div class=\"column-list visible-list bg-success\">\n<h5><i class=\"fa fa-eye\"></i> ".concat(htmlEncode(localText("Controls.ColumnPickerDialog.VisibleColumns")), "</h5>\n<ul id=\"~_VisibleCols\"></ul>\n</div>\n<div class=\"column-list hidden-list bg-info\">\n<h5><i class=\"fa fa-eye-slash\"></i> ").concat(htmlEncode(localText("Controls.ColumnPickerDialog.HiddenColumns")), "</h5>\n<ul id=\"~_HiddenCols\"></ul>\n</div>\n</div>");
        };
        var ColumnPickerDialog_1;
        ColumnPickerDialog = ColumnPickerDialog_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.ColumnPickerDialog'),
            exports.Decorators.resizable(),
            exports.Decorators.responsive()
        ], ColumnPickerDialog);
        return ColumnPickerDialog;
    }(TemplatedDialog));

    /**
     * A mixin that can be applied to a DataGrid for tree functionality
     */
    var TreeGridMixin = /** @class */ (function () {
        function TreeGridMixin(options) {
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            dg.element.find('.grid-container').on('click', function (e) {
                if ($(e.target).hasClass('s-TreeToggle')) {
                    var src = dg.slickGrid.getCellFromEvent(e);
                    if (src.cell >= 0 &&
                        src.row >= 0) {
                        exports.SlickTreeHelper.toggleClick(e, src.row, src.row, dg.view, getId);
                    }
                }
            });
            var oldViewFilter = dg.onViewFilter;
            dg.onViewFilter = function (item) {
                if (!oldViewFilter.apply(this, [item]))
                    return false;
                return exports.SlickTreeHelper.filterById(item, dg.view, options.getParentId);
            };
            var oldProcessData = dg.onViewProcessData;
            dg.onViewProcessData = function (response) {
                response = oldProcessData.apply(this, [response]);
                response.Entities = TreeGridMixin.applyTreeOrdering(response.Entities, getId, options.getParentId);
                exports.SlickTreeHelper.setIndents(response.Entities, getId, options.getParentId, (options.initialCollapse && options.initialCollapse()) || false);
                return response;
            };
            if (options.toggleField) {
                var col = tryFirst(dg['allColumns'] || dg.slickGrid.getColumns() || [], function (x) { return x.field == options.toggleField; });
                if (col) {
                    col.format = exports.SlickFormatting.treeToggle(function () { return dg.view; }, getId, col.format || (function (ctx) { return htmlEncode(ctx.value); }));
                }
            }
        }
        /**
         * Expands / collapses all rows in a grid automatically
         */
        TreeGridMixin.prototype.toggleAll = function () {
            exports.SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), !this.dataGrid.view.getItems().every(function (x) { return x._collapsed == true; }));
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        TreeGridMixin.prototype.collapseAll = function () {
            exports.SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), true);
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        TreeGridMixin.prototype.expandAll = function () {
            exports.SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), false);
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        /**
         * Reorders a set of items so that parents comes before their children.
         * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
         * @param items list of items to be ordered
         * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
         * @param getParentId a delegate to get parent ID of a record
         */
        TreeGridMixin.applyTreeOrdering = function (items, getId, getParentId) {
            var result = [];
            var byId = toGrouping(items, getId);
            var byParentId = toGrouping(items, getParentId);
            var visited = {};
            function takeChildren(theParentId) {
                if (visited[theParentId])
                    return;
                visited[theParentId] = true;
                for (var _i = 0, _a = (byParentId[theParentId] || []); _i < _a.length; _i++) {
                    var child = _a[_i];
                    result.push(child);
                    takeChildren(getId(child));
                }
            }
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var parentId = getParentId(item);
                if (parentId == null ||
                    !((byId[parentId] || []).length)) {
                    result.push(item);
                    takeChildren(getId(item));
                }
            }
            return result;
        };
        return TreeGridMixin;
    }());

    var CheckTreeEditor = /** @class */ (function (_super) {
        tslib.__extends(CheckTreeEditor, _super);
        function CheckTreeEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            div.addClass('s-CheckTreeEditor');
            _this.updateItems();
            return _this;
        }
        CheckTreeEditor.prototype.getIdProperty = function () {
            return "id";
        };
        CheckTreeEditor.prototype.getTreeItems = function () {
            return [];
        };
        CheckTreeEditor.prototype.updateItems = function () {
            var items = this.getTreeItems();
            var itemById = {};
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.children = [];
                if (!isEmptyOrNull(item.id)) {
                    itemById[item.id] = item;
                }
                if (!isEmptyOrNull(item.parentId)) {
                    var parent = itemById[item.parentId];
                    if (parent != null) {
                        parent.children.push(item);
                    }
                }
            }
            this.view.addData({ Entities: items, Skip: 0, Take: 0, TotalCount: items.length });
            this.updateSelectAll();
            this.updateFlags();
        };
        CheckTreeEditor.prototype.getEditValue = function (property, target) {
            if (this.getDelimited())
                target[property.name] = this.get_value().join(",");
            else
                target[property.name] = this.get_value();
        };
        CheckTreeEditor.prototype.setEditValue = function (source, property) {
            var value = source[property.name];
            this.set_value(value);
        };
        CheckTreeEditor.prototype.getButtons = function () {
            var _this = this;
            var selectAllText = this.getSelectAllText();
            if (isEmptyOrNull(selectAllText)) {
                return null;
            }
            var self = this;
            var buttons = [];
            buttons.push(exports.GridSelectAllButtonHelper.define(function () {
                return self;
            }, function (x) {
                return x.id;
            }, function (x1) {
                return x1.isSelected;
            }, function (x2, v) {
                if (x2.isSelected !== v) {
                    x2.isSelected = v;
                    _this.itemSelectedChanged(x2);
                }
            }, null, function () {
                _this.updateFlags();
            }));
            return buttons;
        };
        CheckTreeEditor.prototype.itemSelectedChanged = function (item) {
        };
        CheckTreeEditor.prototype.getSelectAllText = function () {
            var _a;
            return (_a = tryGetText('Controls.CheckTreeEditor.SelectAll')) !== null && _a !== void 0 ? _a : 'Select All';
        };
        CheckTreeEditor.prototype.isThreeStateHierarchy = function () {
            return false;
        };
        CheckTreeEditor.prototype.createSlickGrid = function () {
            this.element.addClass('slick-no-cell-border').addClass('slick-no-odd-even');
            var result = _super.prototype.createSlickGrid.call(this);
            this.element.addClass('slick-hide-header');
            result.resizeCanvas();
            return result;
        };
        CheckTreeEditor.prototype.onViewFilter = function (item) {
            if (!_super.prototype.onViewFilter.call(this, item)) {
                return false;
            }
            var items = this.view.getItems();
            var self = this;
            return exports.SlickTreeHelper.filterCustom(item, function (x) {
                if (x.parentId == null) {
                    return null;
                }
                if (self.byId == null) {
                    self.byId = {};
                    for (var i = 0; i < items.length; i++) {
                        var o = items[i];
                        if (o.id != null) {
                            self.byId[o.id] = o;
                        }
                    }
                }
                return self.byId[x.parentId];
            });
        };
        CheckTreeEditor.prototype.getInitialCollapse = function () {
            return false;
        };
        CheckTreeEditor.prototype.onViewProcessData = function (response) {
            response = _super.prototype.onViewProcessData.call(this, response);
            this.byId = null;
            exports.SlickTreeHelper.setIndents(response.Entities, function (x) {
                return x.id;
            }, function (x1) {
                return x1.parentId;
            }, this.getInitialCollapse());
            return response;
        };
        CheckTreeEditor.prototype.onClick = function (e, row, cell) {
            _super.prototype.onClick.call(this, e, row, cell);
            if (!e.isDefaultPrevented()) {
                exports.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) {
                    return x.id;
                });
            }
            if (e.isDefaultPrevented()) {
                return;
            }
            var target = $(e.target);
            if (target.hasClass('check-box')) {
                e.preventDefault();
                if (this._readOnly)
                    return;
                var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                var item = this.itemAt(row);
                var anyChanged = item.isSelected !== !checkedOrPartial;
                this.view.beginUpdate();
                try {
                    if (item.isSelected !== !checkedOrPartial) {
                        item.isSelected = !checkedOrPartial;
                        this.view.updateItem(item.id, item);
                        this.itemSelectedChanged(item);
                    }
                    anyChanged = this.setAllSubTreeSelected(item, item.isSelected) || anyChanged;
                    this.updateSelectAll();
                    this.updateFlags();
                }
                finally {
                    this.view.endUpdate();
                }
                if (anyChanged) {
                    this.element.triggerHandler('change');
                }
            }
        };
        CheckTreeEditor.prototype.updateSelectAll = function () {
            exports.GridSelectAllButtonHelper.update(this, function (x) {
                return x.isSelected;
            });
        };
        CheckTreeEditor.prototype.updateFlags = function () {
            var view = this.view;
            var items = view.getItems();
            var threeState = this.isThreeStateHierarchy();
            if (!threeState) {
                return;
            }
            view.beginUpdate();
            try {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.children == null || item.children.length === 0) {
                        var allsel = this.getDescendantsSelected(item);
                        if (allsel !== item.isAllDescendantsSelected) {
                            item.isAllDescendantsSelected = allsel;
                            view.updateItem(item.id, item);
                        }
                        continue;
                    }
                    var allSelected = this.allDescendantsSelected(item);
                    var selected = allSelected || this.anyDescendantsSelected(item);
                    if (allSelected !== item.isAllDescendantsSelected || selected !== item.isSelected) {
                        var selectedChange = item.isSelected !== selected;
                        item.isAllDescendantsSelected = allSelected;
                        item.isSelected = selected;
                        view.updateItem(item.id, item);
                        if (selectedChange) {
                            this.itemSelectedChanged(item);
                        }
                    }
                }
            }
            finally {
                view.endUpdate();
            }
        };
        CheckTreeEditor.prototype.getDescendantsSelected = function (item) {
            return true;
        };
        CheckTreeEditor.prototype.setAllSubTreeSelected = function (item, selected) {
            var result = false;
            for (var i = 0; i < item.children.length; i++) {
                var sub = item.children[i];
                if (sub.isSelected !== selected) {
                    result = true;
                    sub.isSelected = selected;
                    this.view.updateItem(sub.id, sub);
                    this.itemSelectedChanged(sub);
                }
                if (sub.children.length > 0) {
                    result = this.setAllSubTreeSelected(sub, selected) || result;
                }
            }
            return result;
        };
        CheckTreeEditor.prototype.allItemsSelected = function () {
            for (var i = 0; i < this.rowCount(); i++) {
                var row = this.itemAt(i);
                if (!row.isSelected) {
                    return false;
                }
            }
            return this.rowCount() > 0;
        };
        CheckTreeEditor.prototype.allDescendantsSelected = function (item) {
            if (item.children.length > 0) {
                for (var i = 0; i < item.children.length; i++) {
                    var sub = item.children[i];
                    if (!sub.isSelected) {
                        return false;
                    }
                    if (!this.allDescendantsSelected(sub)) {
                        return false;
                    }
                }
            }
            return true;
        };
        CheckTreeEditor.prototype.getDelimited = function () {
            return !!!!this.options['delimited'];
        };
        CheckTreeEditor.prototype.anyDescendantsSelected = function (item) {
            if (item.children.length > 0) {
                for (var i = 0; i < item.children.length; i++) {
                    var sub = item.children[i];
                    if (sub.isSelected) {
                        return true;
                    }
                    if (this.anyDescendantsSelected(sub)) {
                        return true;
                    }
                }
            }
            return false;
        };
        CheckTreeEditor.prototype.getColumns = function () {
            var _this = this;
            var self = this;
            var columns = [];
            columns.push({
                field: 'text', name: 'Kayıt', width: 80, format: exports.SlickFormatting.treeToggle(function () {
                    return self.view;
                }, function (x) {
                    return x.id;
                }, function (ctx) {
                    var cls = 'check-box';
                    var item = ctx.item;
                    if (item.hideCheckBox) {
                        return _this.getItemText(ctx);
                    }
                    var threeState = _this.isThreeStateHierarchy();
                    if (item.isSelected) {
                        if (threeState && !item.isAllDescendantsSelected) {
                            cls += ' partial';
                        }
                        else {
                            cls += ' checked';
                        }
                    }
                    if (_this._readOnly)
                        cls += ' readonly';
                    return '<span class="' + cls + '"></span>' + _this.getItemText(ctx);
                })
            });
            return columns;
        };
        CheckTreeEditor.prototype.getItemText = function (ctx) {
            return htmlEncode(ctx.value);
        };
        CheckTreeEditor.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.forceFitColumns = true;
            return opt;
        };
        CheckTreeEditor.prototype.sortItems = function () {
            if (!this.moveSelectedUp()) {
                return;
            }
            var oldIndexes = {};
            var list = this.view.getItems();
            var i = 0;
            for (var $t1 = 0; $t1 < list.length; $t1++) {
                var x = list[$t1];
                oldIndexes[x.id] = i++;
            }
            list.sort(function (x1, y) {
                if (x1.isSelected && !y.isSelected) {
                    return -1;
                }
                if (y.isSelected && !x1.isSelected) {
                    return 1;
                }
                var c = Culture.stringCompare(x1.text, y.text);
                if (c !== 0) {
                    return c;
                }
                return oldIndexes[x1.id] < oldIndexes[y.id] ? -1 : (oldIndexes[x1.id] > oldIndexes[y.id] ? 1 : 0);
            });
            this.view.setItems(list, true);
        };
        CheckTreeEditor.prototype.moveSelectedUp = function () {
            return false;
        };
        CheckTreeEditor.prototype.get_readOnly = function () {
            return this._readOnly;
        };
        CheckTreeEditor.prototype.set_readOnly = function (value) {
            if (!!this._readOnly != !!value) {
                this._readOnly = !!value;
                this.view.refresh();
            }
        };
        CheckTreeEditor.prototype.get_value = function () {
            var list = [];
            var items = this.view.getItems();
            for (var i = 0; i < items.length; i++) {
                if (items[i].isSelected) {
                    list.push(items[i].id);
                }
            }
            return list;
        };
        Object.defineProperty(CheckTreeEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        CheckTreeEditor.prototype.set_value = function (value) {
            var selected = {};
            if (value != null) {
                if (typeof value == "string") {
                    value = value.split(',')
                        .map(function (x) { return trimToNull(x); })
                        .filter(function (x) { return x != null; });
                }
                for (var i = 0; i < value.length; i++) {
                    selected[value[i]] = true;
                }
            }
            this.view.beginUpdate();
            try {
                var items = this.view.getItems();
                for (var i1 = 0; i1 < items.length; i1++) {
                    var item = items[i1];
                    var select = selected[item.id];
                    if (select !== item.isSelected) {
                        item.isSelected = select;
                        this.view.updateItem(item.id, item);
                    }
                }
                this.updateSelectAll();
                this.updateFlags();
                this.sortItems();
            }
            finally {
                this.view.endUpdate();
            }
        };
        CheckTreeEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.CheckTreeEditor', [IGetEditValue, ISetEditValue, IReadOnly]),
            exports.Decorators.element("<div/>")
        ], CheckTreeEditor);
        return CheckTreeEditor;
    }(DataGrid));
    var CheckLookupEditor = /** @class */ (function (_super) {
        tslib.__extends(CheckLookupEditor, _super);
        function CheckLookupEditor(div, options) {
            var _this = _super.call(this, div, options) || this;
            _this.enableUpdateItems = true;
            _this.setCascadeFrom(_this.options.cascadeFrom);
            _this.updateItems();
            exports.ScriptData.bindToChange('Lookup.' + _this.getLookupKey(), _this.uniqueName, function () { return _this.updateItems(); });
            return _this;
        }
        CheckLookupEditor.prototype.updateItems = function () {
            if (this.enableUpdateItems)
                _super.prototype.updateItems.call(this);
        };
        CheckLookupEditor.prototype.getLookupKey = function () {
            return this.options.lookupKey;
        };
        CheckLookupEditor.prototype.getButtons = function () {
            var _a;
            return (_a = _super.prototype.getButtons.call(this)) !== null && _a !== void 0 ? _a : (this.options.hideSearch ? null : []);
        };
        CheckLookupEditor.prototype.createToolbarExtensions = function () {
            var _this = this;
            _super.prototype.createToolbarExtensions.call(this);
            exports.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                _this.view.setItems(_this.view.getItems(), true);
            });
        };
        CheckLookupEditor.prototype.getSelectAllText = function () {
            if (!this.options.showSelectAll)
                return null;
            return _super.prototype.getSelectAllText.call(this);
        };
        CheckLookupEditor.prototype.cascadeItems = function (items) {
            var val = this.get_cascadeValue();
            if (val == null || val === '') {
                if (!isEmptyOrNull(this.get_cascadeField())) {
                    return [];
                }
                return items;
            }
            var key = val.toString();
            var fld = this.get_cascadeField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : exports.ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        CheckLookupEditor.prototype.filterItems = function (items) {
            var val = this.get_filterValue();
            if (val == null || val === '') {
                return items;
            }
            var key = val.toString();
            var fld = this.get_filterField();
            return items.filter(function (x) {
                var _a;
                var itemKey = (_a = x[fld]) !== null && _a !== void 0 ? _a : exports.ReflectionUtils.getPropertyValue(x, fld);
                return !!(itemKey != null && itemKey.toString() === key);
            });
        };
        CheckLookupEditor.prototype.getLookupItems = function (lookup) {
            return this.filterItems(this.cascadeItems(lookup.items));
        };
        CheckLookupEditor.prototype.getTreeItems = function () {
            var lookup = getLookup(this.options.lookupKey);
            var items = this.getLookupItems(lookup);
            return items.map(function (item) {
                var _a, _b;
                return ({
                    id: ((_a = item[lookup.idField]) !== null && _a !== void 0 ? _a : "").toString(),
                    text: ((_b = item[lookup.textField]) !== null && _b !== void 0 ? _b : "").toString(),
                    source: item
                });
            });
        };
        CheckLookupEditor.prototype.onViewFilter = function (item) {
            return _super.prototype.onViewFilter.call(this, item) &&
                (isEmptyOrNull(this.searchText) ||
                    Select2.util.stripDiacritics(item.text || '')
                        .toUpperCase().indexOf(this.searchText) >= 0);
        };
        CheckLookupEditor.prototype.moveSelectedUp = function () {
            return this.options.checkedOnTop;
        };
        CheckLookupEditor.prototype.get_cascadeFrom = function () {
            return this.options.cascadeFrom;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "cascadeFrom", {
            get: function () {
                return this.get_cascadeFrom();
            },
            set: function (value) {
                this.set_cascadeFrom(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.getCascadeFromValue = function (parent) {
            return exports.EditorUtils.getValue(parent);
        };
        CheckLookupEditor.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (isEmptyOrNull(value)) {
                if (this.cascadeLink != null) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new CascadedWidgetLink(Widget, this, function (p) {
                _this.set_cascadeValue(_this.getCascadeFromValue(p));
            });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        CheckLookupEditor.prototype.set_cascadeFrom = function (value) {
            if (value !== this.options.cascadeFrom) {
                this.setCascadeFrom(value);
                this.updateItems();
            }
        };
        CheckLookupEditor.prototype.get_cascadeField = function () {
            var _a;
            return ((_a = this.options.cascadeField) !== null && _a !== void 0 ? _a : this.options.cascadeFrom);
        };
        Object.defineProperty(CheckLookupEditor.prototype, "cascadeField", {
            get: function () {
                return this.get_cascadeField();
            },
            set: function (value) {
                this.set_cascadeField(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_cascadeField = function (value) {
            this.options.cascadeField = value;
        };
        CheckLookupEditor.prototype.get_cascadeValue = function () {
            return this.options.cascadeValue;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "cascadeValue", {
            get: function () {
                return this.get_cascadeValue();
            },
            set: function (value) {
                this.set_cascadeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_cascadeValue = function (value) {
            if (this.options.cascadeValue !== value) {
                this.options.cascadeValue = value;
                this.value = [];
                this.updateItems();
            }
        };
        CheckLookupEditor.prototype.get_filterField = function () {
            return this.options.filterField;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "filterField", {
            get: function () {
                return this.get_filterField();
            },
            set: function (value) {
                this.set_filterField(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_filterField = function (value) {
            this.options.filterField = value;
        };
        CheckLookupEditor.prototype.get_filterValue = function () {
            return this.options.filterValue;
        };
        Object.defineProperty(CheckLookupEditor.prototype, "filterValue", {
            get: function () {
                return this.get_filterValue();
            },
            set: function (value) {
                this.set_filterValue(value);
            },
            enumerable: false,
            configurable: true
        });
        CheckLookupEditor.prototype.set_filterValue = function (value) {
            if (this.options.filterValue !== value) {
                this.options.filterValue = value;
                this.value = null;
                this.updateItems();
            }
        };
        CheckLookupEditor = tslib.__decorate([
            exports.Decorators.registerEditor("Serenity.CheckLookupEditor")
        ], CheckLookupEditor);
        return CheckLookupEditor;
    }(CheckTreeEditor));

    var EntityGrid = /** @class */ (function (_super) {
        tslib.__extends(EntityGrid, _super);
        function EntityGrid(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.element.addClass('route-handler')
                .on('handleroute.' + _this.uniqueName, function (_, args) { return _this.handleRoute(args); });
            return _this;
        }
        EntityGrid.prototype.handleRoute = function (args) {
            if (!!args.handled)
                return;
            if (!!(args.route === 'new')) {
                args.handled = true;
                this.addButtonClick();
                return;
            }
            var oldRequests = $$1 === null || $$1 === void 0 ? void 0 : $$1["active"];
            var parts = args.route.split('/');
            if (!!(parts.length === 2 && parts[0] === 'edit')) {
                args.handled = true;
                this.editItem(decodeURIComponent(parts[1]));
            }
            else if (!!(parts.length === 2 && parts[1] === 'new')) {
                args.handled = true;
                this.editItemOfType(parts[0], null);
            }
            else if (!!(parts.length === 3 && parts[1] === 'edit')) {
                args.handled = true;
                this.editItemOfType(parts[0], decodeURIComponent(parts[2]));
            }
            else
                return;
            if (($$1 === null || $$1 === void 0 ? void 0 : $$1["active"]) > oldRequests && args.handled && args.index >= 0 && args.index < args.parts.length - 1) {
                $$1(document).one('ajaxStop', function () {
                    setTimeout(function () { return exports.Router.resolve('#' + args.parts.join('/+/')); }, 1);
                });
            }
        };
        EntityGrid.prototype.usePager = function () {
            return true;
        };
        EntityGrid.prototype.createToolbarExtensions = function () {
            this.createIncludeDeletedButton();
            this.createQuickSearchInput();
        };
        EntityGrid.prototype.getInitialTitle = function () {
            return this.getDisplayName();
        };
        EntityGrid.prototype.getLocalTextPrefix = function () {
            var result = _super.prototype.getLocalTextPrefix.call(this);
            if (result != null ||
                this.getRowDefinition())
                return result;
            return this.getEntityType();
        };
        EntityGrid.prototype.getEntityType = function () {
            if (this._entityType != null)
                return this._entityType;
            var attr = this.attrs(EntityTypeAttribute);
            if (attr.length === 1) {
                return (this._entityType = attr[0].value);
            }
            var name = getTypeFullName(getInstanceType(this));
            var px = name.indexOf('.');
            if (px >= 0) {
                name = name.substring(px + 1);
            }
            if (endsWith(name, 'Grid')) {
                name = name.substr(0, name.length - 4);
            }
            else if (endsWith(name, 'SubGrid')) {
                name = name.substr(0, name.length - 7);
            }
            this._entityType = name;
            return this._entityType;
        };
        EntityGrid.prototype.getDisplayName = function () {
            if (this._displayName != null)
                return this._displayName;
            var attr = this.attrs(DisplayNameAttribute);
            if (attr.length >= 1) {
                this._displayName = attr[0].displayName;
                this._displayName = LT.getDefault(this._displayName, this._displayName);
            }
            else {
                this._displayName = tryGetText(this.getLocalTextDbPrefix() + 'EntityPlural');
                if (this._displayName == null)
                    this._displayName = this.getEntityType();
            }
            return this._displayName;
        };
        EntityGrid.prototype.getItemName = function () {
            if (this._itemName != null)
                return this._itemName;
            var attr = this.attrs(ItemNameAttribute);
            if (attr.length >= 1) {
                this._itemName = attr[0].value;
                this._itemName = LT.getDefault(this._itemName, this._itemName);
            }
            else {
                this._itemName = tryGetText(this.getLocalTextDbPrefix() + 'EntitySingular');
                if (this._itemName == null)
                    this._itemName = this.getEntityType();
            }
            return this._itemName;
        };
        EntityGrid.prototype.getAddButtonCaption = function () {
            return format(localText('Controls.EntityGrid.NewButton'), this.getItemName());
        };
        EntityGrid.prototype.getButtons = function () {
            var _this = this;
            var buttons = [];
            buttons.push({
                title: this.getAddButtonCaption(),
                action: 'add',
                cssClass: 'add-button',
                icon: 'fa-plus-circle text-green',
                hotkey: 'alt+n',
                onClick: function () {
                    _this.addButtonClick();
                },
                disabled: function () { return !_this.hasInsertPermission() || _this.readOnly; }
            });
            buttons.push(this.newRefreshButton(true));
            buttons.push(ColumnPickerDialog.createToolButton(this));
            return buttons;
        };
        EntityGrid.prototype.newRefreshButton = function (noText) {
            var _this = this;
            return {
                title: (noText ? null : localText('Controls.EntityGrid.RefreshButton')),
                hint: (noText ? localText('Controls.EntityGrid.RefreshButton') : null),
                icon: 'fa-refresh text-blue',
                action: 'refresh',
                cssClass: 'refresh-button',
                onClick: function () {
                    _this.refresh();
                }
            };
        };
        EntityGrid.prototype.addButtonClick = function () {
            this.editItem(new Object());
        };
        EntityGrid.prototype.editItem = function (entityOrId) {
            var _this = this;
            this.createEntityDialog(this.getItemType(), function (dlg) {
                var dialog = safeCast(dlg, IEditDialog);
                if (dialog != null) {
                    dialog.load(entityOrId, function () {
                        dialog.dialogOpen(_this.openDialogsAsPanel);
                    });
                    return;
                }
                throw new Error(format("{0} doesn't implement IEditDialog!", getTypeFullName(getInstanceType(dlg))));
            });
        };
        EntityGrid.prototype.editItemOfType = function (itemType, entityOrId) {
            var _this = this;
            if (itemType === this.getItemType()) {
                this.editItem(entityOrId);
                return;
            }
            this.createEntityDialog(itemType, function (dlg) {
                var dialog = safeCast(dlg, IEditDialog);
                if (dialog != null) {
                    dialog.load(entityOrId, function () {
                        return dialog.dialogOpen(_this.openDialogsAsPanel);
                    });
                    return;
                }
                throw new Error(format("{0} doesn't implement IEditDialog!", getTypeFullName(getInstanceType(dlg))));
            });
        };
        EntityGrid.prototype.getService = function () {
            if (this._service != null)
                return this._service;
            var attr = this.attrs(ServiceAttribute);
            if (attr.length >= 1)
                this._service = attr[0].value;
            else
                this._service = replaceAll(this.getEntityType(), '.', '/');
            return this._service;
        };
        EntityGrid.prototype.getViewOptions = function () {
            var opt = _super.prototype.getViewOptions.call(this);
            opt.url = resolveUrl('~/Services/' + this.getService() + '/List');
            return opt;
        };
        EntityGrid.prototype.getItemType = function () {
            return this.getEntityType();
        };
        EntityGrid.prototype.routeDialog = function (itemType, dialog) {
            var _this = this;
            exports.Router && exports.Router.dialog && exports.Router.dialog(this.element, dialog.element, function () {
                var hash = '';
                if (itemType !== _this.getItemType())
                    hash = itemType + '/';
                if (!!(dialog != null && dialog.entityId != null))
                    hash += 'edit/' + dialog.entityId.toString();
                else
                    hash += 'new';
                return hash;
            });
        };
        EntityGrid.prototype.getInsertPermission = function () {
            var _a;
            return (_a = this.getRowDefinition()) === null || _a === void 0 ? void 0 : _a.insertPermission;
        };
        EntityGrid.prototype.hasInsertPermission = function () {
            var insertPermission = this.getInsertPermission();
            return insertPermission == null || exports.Authorization.hasPermission(this.getInsertPermission());
        };
        EntityGrid.prototype.transferDialogReadOnly = function (dialog) {
            if (this.readOnly)
                exports.EditorUtils.setReadOnly(dialog, true);
        };
        EntityGrid.prototype.initDialog = function (dialog) {
            var _this = this;
            exports.SubDialogHelper.bindToDataChange(dialog, this, function (e, dci) {
                _this.subDialogDataChange();
            }, true);
            this.transferDialogReadOnly(dialog);
            this.routeDialog(this.getItemType(), dialog);
        };
        EntityGrid.prototype.initEntityDialog = function (itemType, dialog) {
            var _this = this;
            if (itemType === this.getItemType()) {
                this.initDialog(dialog);
                return;
            }
            exports.SubDialogHelper.bindToDataChange(dialog, this, function (e, dci) {
                _this.subDialogDataChange();
            }, true);
            this.transferDialogReadOnly(dialog);
            this.routeDialog(itemType, dialog);
        };
        EntityGrid.prototype.createEntityDialog = function (itemType, callback) {
            var _this = this;
            var dialogClass = this.getDialogTypeFor(itemType);
            var dialog = Widget.create({
                type: dialogClass,
                options: this.getDialogOptionsFor(itemType),
                init: function (d) {
                    _this.initEntityDialog(itemType, d);
                    callback && callback(d);
                }
            });
            return dialog;
        };
        EntityGrid.prototype.getDialogOptions = function () {
            return {};
        };
        EntityGrid.prototype.getDialogOptionsFor = function (itemType) {
            if (itemType === this.getItemType())
                return this.getDialogOptions();
            return {};
        };
        EntityGrid.prototype.getDialogTypeFor = function (itemType) {
            if (itemType === this.getItemType()) {
                return this.getDialogType();
            }
            return exports.DialogTypeRegistry.get(itemType);
        };
        EntityGrid.prototype.getDialogType = function () {
            if (this._dialogType != null)
                return this._dialogType;
            var attr = this.attrs(DialogTypeAttribute);
            if (attr.length >= 1)
                this._dialogType = attr[0].value;
            else
                this._dialogType = exports.DialogTypeRegistry.get(this.getEntityType());
            return this._dialogType;
        };
        EntityGrid = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.EntityGrid')
        ], EntityGrid);
        return EntityGrid;
    }(DataGrid));

    var EntityDialog = /** @class */ (function (_super) {
        tslib.__extends(EntityDialog, _super);
        function EntityDialog(opt) {
            var _this = _super.call(this, opt) || this;
            if (_this.useAsync())
                _this.initAsync();
            else
                _this.initSync();
            return _this;
        }
        EntityDialog_1 = EntityDialog;
        EntityDialog.prototype.internalInit = function () {
            this.initPropertyGrid();
            this.initLocalizationGrid();
        };
        EntityDialog.prototype.initSync = function () {
            this.propertyItemsData = this.getPropertyItemsData();
            this.internalInit();
            this.afterInit();
        };
        EntityDialog.prototype.initAsync = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.getPropertyItemsDataAsync()];
                        case 1:
                            _a.propertyItemsData = _b.sent();
                            this.internalInit();
                            this.afterInit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        EntityDialog.prototype.afterInit = function () {
        };
        EntityDialog.prototype.useAsync = function () {
            return false;
        };
        EntityDialog.prototype.destroy = function () {
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.localizationGrid) {
                this.localizationGrid.destroy();
                this.localizationGrid = null;
            }
            this.undeleteButton = null;
            this.applyChangesButton = null;
            this.deleteButton = null;
            this.saveAndCloseButton = null;
            this.editButton = null;
            this.cloneButton = null;
            this.toolbar = null;
            _super.prototype.destroy.call(this);
        };
        EntityDialog.prototype.get_entity = function () {
            return this.entity;
        };
        EntityDialog.prototype.set_entity = function (entity) {
            this.entity = entity || new Object();
        };
        EntityDialog.prototype.get_entityId = function () {
            return this.entityId;
        };
        EntityDialog.prototype.set_entityId = function (value) {
            this.entityId = value;
        };
        EntityDialog.prototype.getEntityNameFieldValue = function () {
            var _a;
            return ((_a = this.get_entity()[this.getNameProperty()]) !== null && _a !== void 0 ? _a : '').toString();
        };
        EntityDialog.prototype.getEntityTitle = function () {
            var _a;
            if (!this.isEditMode()) {
                return format(localText('Controls.EntityDialog.NewRecordTitle'), this.getEntitySingular());
            }
            else {
                var titleFormat = (this.isViewMode() || this.readOnly || !this.hasSavePermission()) ?
                    localText('Controls.EntityDialog.ViewRecordTitle') : localText('Controls.EntityDialog.EditRecordTitle');
                var title = (_a = this.getEntityNameFieldValue()) !== null && _a !== void 0 ? _a : '';
                return format(titleFormat, this.getEntitySingular(), (isEmptyOrNull(title) ? '' : (' (' + title + ')')));
            }
        };
        EntityDialog.prototype.updateTitle = function () {
            this.dialogTitle = this.getEntityTitle();
        };
        EntityDialog.prototype.isCloneMode = function () {
            return false;
        };
        EntityDialog.prototype.isEditMode = function () {
            return this.get_entityId() != null && !this.isCloneMode();
        };
        EntityDialog.prototype.isDeleted = function () {
            if (this.get_entityId() == null) {
                return false;
            }
            var isDeletedProperty = this.getIsDeletedProperty();
            if (isDeletedProperty) {
                return !!this.get_entity()[isDeletedProperty];
            }
            var value = this.get_entity()[this.getIsActiveProperty()];
            if (value == null) {
                return false;
            }
            return value < 0;
        };
        EntityDialog.prototype.isNew = function () {
            return this.get_entityId() == null;
        };
        EntityDialog.prototype.isNewOrDeleted = function () {
            return this.isNew() || this.isDeleted();
        };
        EntityDialog.prototype.getDeleteOptions = function (callback) {
            return {};
        };
        EntityDialog.prototype.deleteHandler = function (options, callback) {
            serviceCall(options);
        };
        EntityDialog.prototype.doDelete = function (callback) {
            var _this = this;
            var self = this;
            var request = {
                EntityId: this.get_entityId()
            };
            var baseOptions = {
                service: this.getService() + '/Delete',
                request: request,
                onSuccess: function (response) {
                    self.onDeleteSuccess(response);
                    if (callback != null) {
                        callback(response);
                    }
                    self.element.triggerHandler('ondatachange', [{
                            entityId: request.EntityId,
                            entity: _this.entity,
                            type: 'delete'
                        }]);
                }
            };
            var thisOptions = this.getDeleteOptions(callback);
            var finalOptions = extend(baseOptions, thisOptions);
            this.deleteHandler(finalOptions, callback);
        };
        EntityDialog.prototype.onDeleteSuccess = function (response) {
        };
        EntityDialog.prototype.attrs = function (attrType) {
            return getAttributes(getInstanceType(this), attrType, true);
        };
        EntityDialog.prototype.getRowDefinition = function () {
            return null;
        };
        EntityDialog.prototype.getEntityType = function () {
            if (this._entityType != null)
                return this._entityType;
            var typeAttributes = this.attrs(EntityTypeAttribute);
            if (typeAttributes.length === 1)
                return (this._entityType = typeAttributes[0].value);
            // remove global namespace
            var name = getTypeFullName(getInstanceType(this));
            var px = name.indexOf('.');
            if (px >= 0)
                name = name.substring(px + 1);
            // don't like this kind of convention, make it obsolete soon...
            if (endsWith(name, 'Dialog') || endsWith(name, 'Control'))
                name = name.substr(0, name.length - 6);
            else if (endsWith(name, 'Panel'))
                name = name.substr(0, name.length - 5);
            return (this._entityType = name);
        };
        EntityDialog.prototype.getFormKey = function () {
            if (this._formKey != null)
                return this._formKey;
            var attributes = this.attrs(FormKeyAttribute);
            if (attributes.length >= 1)
                return (this._formKey = attributes[0].value);
            return (this._formKey = this.getEntityType());
        };
        EntityDialog.prototype.getLocalTextDbPrefix = function () {
            var _a;
            if (this._localTextDbPrefix != null)
                return this._localTextDbPrefix;
            this._localTextDbPrefix = (_a = this.getLocalTextPrefix()) !== null && _a !== void 0 ? _a : '';
            if (this._localTextDbPrefix.length > 0 && !endsWith(this._localTextDbPrefix, '.'))
                this._localTextDbPrefix = 'Db.' + this._localTextDbPrefix + '.';
            return this._localTextDbPrefix;
        };
        EntityDialog.prototype.getLocalTextPrefix = function () {
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return rowDefinition.localTextPrefix;
            var attr = this.attrs(LocalTextPrefixAttribute);
            if (attr.length >= 1)
                return attr[0].value;
            return this.getEntityType();
        };
        EntityDialog.prototype.getEntitySingular = function () {
            if (this._entitySingular != null)
                return this._entitySingular;
            var attributes = this.attrs(ItemNameAttribute);
            if (attributes.length >= 1) {
                this._entitySingular = attributes[0].value;
                this._entitySingular = LT.getDefault(this._entitySingular, this._entitySingular);
            }
            else {
                var es = tryGetText(this.getLocalTextDbPrefix() + 'EntitySingular');
                if (es == null)
                    es = this.getEntityType();
                this._entitySingular = es;
            }
            return this._entitySingular;
        };
        EntityDialog.prototype.getNameProperty = function () {
            var _a, _b;
            if (this._nameProperty != null)
                return this._nameProperty;
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return this._nameProperty = (_a = rowDefinition.nameProperty) !== null && _a !== void 0 ? _a : '';
            var attributes = this.attrs(NamePropertyAttribute);
            if (attributes.length >= 1)
                return this._nameProperty = (_b = attributes[0].value) !== null && _b !== void 0 ? _b : '';
            return this._nameProperty = 'Name';
        };
        EntityDialog.prototype.getIdProperty = function () {
            var _a, _b;
            if (this._idProperty != null)
                return this._idProperty;
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return this._idProperty = (_a = rowDefinition.idProperty) !== null && _a !== void 0 ? _a : '';
            var attr = this.attrs(IdPropertyAttribute);
            if (attr.length === 1)
                return this._idProperty = (_b = attr[0].value) !== null && _b !== void 0 ? _b : '';
            return this._idProperty = 'ID';
        };
        EntityDialog.prototype.getIsActiveProperty = function () {
            var _a, _b;
            if (this._isActiveProperty != null)
                return this._isActiveProperty;
            var rowDefinition = this.getRowDefinition();
            if (rowDefinition)
                return this._isActiveProperty = (_a = rowDefinition.isActiveProperty) !== null && _a !== void 0 ? _a : '';
            var attr = this.attrs(IsActivePropertyAttribute);
            if (attr.length === 1)
                return this._isActiveProperty = (_b = attr[0].value) !== null && _b !== void 0 ? _b : '';
            return this._isActiveProperty = '';
        };
        EntityDialog.prototype.getIsDeletedProperty = function () {
            var _a;
            return (_a = this.getRowDefinition()) === null || _a === void 0 ? void 0 : _a.isDeletedProperty;
        };
        EntityDialog.prototype.getService = function () {
            if (this._service != null)
                return this._service;
            var attributes = this.attrs(ServiceAttribute);
            if (attributes.length >= 1)
                this._service = attributes[0].value;
            else
                this._service = replaceAll(this.getEntityType(), '.', '/');
            return this._service;
        };
        EntityDialog.prototype.load = function (entityOrId, done, fail) {
            var _this = this;
            var action = function () {
                if (entityOrId == null) {
                    _this.loadResponse({});
                    done && done();
                    return;
                }
                var scriptType = typeof (entityOrId);
                if (scriptType === 'string' || scriptType === 'number') {
                    var entityId = entityOrId;
                    _this.loadById(entityId, function (response) {
                        if (done)
                            window.setTimeout(done, 0);
                    }, null);
                    return;
                }
                var entity = entityOrId || new Object();
                _this.loadResponse({ Entity: entity });
                done && done();
            };
            if (fail == null) {
                action();
                return;
            }
            try {
                action();
            }
            catch (ex1) {
                var ex = Exception.wrap(ex1);
                fail(ex);
            }
        };
        EntityDialog.prototype.loadNewAndOpenDialog = function (asPanel) {
            this.loadResponse({});
            this.dialogOpen(asPanel);
        };
        EntityDialog.prototype.loadEntityAndOpenDialog = function (entity, asPanel) {
            this.loadResponse({ Entity: entity });
            this.dialogOpen(asPanel);
        };
        EntityDialog.prototype.loadResponse = function (data) {
            data = data || {};
            this.onLoadingData(data);
            var entity = data.Entity || new Object();
            this.beforeLoadEntity(entity);
            this.loadEntity(entity);
            this.set_entity(entity);
            this.afterLoadEntity();
        };
        EntityDialog.prototype.loadEntity = function (entity) {
            var idField = this.getIdProperty();
            if (idField != null)
                this.set_entityId(entity[idField]);
            this.set_entity(entity);
            if (this.propertyGrid != null) {
                this.propertyGrid.set_mode((this.isEditMode() ?
                    exports.PropertyGridMode.update : exports.PropertyGridMode.insert));
                this.propertyGrid.load(entity);
            }
        };
        EntityDialog.prototype.beforeLoadEntity = function (entity) {
            this.localizationPendingValue = null;
            this.localizationLastValue = null;
        };
        EntityDialog.prototype.afterLoadEntity = function () {
            this.updateInterface();
            this.updateTitle();
        };
        EntityDialog.prototype.loadByIdAndOpenDialog = function (entityId, asPanel) {
            var _this = this;
            this.loadById(entityId, function (response) { return window.setTimeout(function () { return _this.dialogOpen(asPanel); }, 0); }, function () {
                if (!_this.element.is(':visible')) {
                    _this.element.remove();
                }
            });
        };
        EntityDialog.prototype.onLoadingData = function (data) {
        };
        EntityDialog.prototype.getLoadByIdOptions = function (id, callback) {
            return {};
        };
        EntityDialog.prototype.getLoadByIdRequest = function (id) {
            var request = {};
            request.EntityId = id;
            return request;
        };
        EntityDialog.prototype.reloadById = function () {
            this.loadById(this.get_entityId());
        };
        EntityDialog.prototype.loadById = function (id, callback, fail) {
            var _this = this;
            var baseOptions = {
                service: this.getService() + '/Retrieve',
                blockUI: true,
                request: this.getLoadByIdRequest(id),
                onSuccess: function (response) {
                    _this.loadResponse(response);
                    callback && callback(response);
                },
                onCleanup: function () {
                    if (_this.validator != null) {
                        validatorAbortHandler(_this.validator);
                    }
                }
            };
            var thisOptions = this.getLoadByIdOptions(id, callback);
            var finalOptions = extend(baseOptions, thisOptions);
            this.loadByIdHandler(finalOptions, callback, fail);
        };
        EntityDialog.prototype.loadByIdHandler = function (options, callback, fail) {
            var request = serviceCall(options);
            fail && request.fail(fail);
        };
        EntityDialog.prototype.initLocalizationGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.initLocalizationGridCommon(pgOptions);
        };
        EntityDialog.prototype.initLocalizationGridCommon = function (pgOptions) {
            var pgDiv = this.byId('PropertyGrid');
            if (!any(pgOptions.items, function (x) { return x.localizable === true; }))
                return;
            var localGridDiv = $('<div/>')
                .attr('id', this.idPrefix + 'LocalizationGrid')
                .hide().insertAfter(pgDiv);
            pgOptions.idPrefix = this.idPrefix + 'Localization_';
            var items = [];
            for (var _i = 0, _a = pgOptions.items; _i < _a.length; _i++) {
                var item1 = _a[_i];
                var langs = null;
                if (item1.localizable === true) {
                    var copy = extend({}, item1);
                    copy.oneWay = true;
                    copy.readOnly = true;
                    copy.required = false;
                    copy.defaultValue = null;
                    items.push(copy);
                    if (langs == null)
                        langs = this.getLangs();
                    for (var _b = 0, langs_1 = langs; _b < langs_1.length; _b++) {
                        var lang = langs_1[_b];
                        copy = extend({}, item1);
                        copy.name = lang[0] + '$' + copy.name;
                        copy.title = lang[1];
                        copy.cssClass = [copy.cssClass, 'translation'].join(' ');
                        copy.insertable = true;
                        copy.updatable = true;
                        copy.oneWay = false;
                        copy.required = false;
                        copy.localizable = false;
                        copy.defaultValue = null;
                        items.push(copy);
                    }
                }
            }
            pgOptions.items = items;
            this.localizationGrid = (new PropertyGrid(localGridDiv, pgOptions)).init(null);
            localGridDiv.addClass('s-LocalizationGrid');
        };
        EntityDialog.prototype.isLocalizationMode = function () {
            return this.localizationButton != null && this.localizationButton.hasClass('pressed');
        };
        EntityDialog.prototype.isLocalizationModeAndChanged = function () {
            if (!this.isLocalizationMode()) {
                return false;
            }
            var newValue = this.getLocalizationGridValue();
            return JSON.stringify(this.localizationLastValue) != JSON.stringify(newValue);
        };
        EntityDialog.prototype.localizationButtonClick = function () {
            if (this.isLocalizationMode() && !this.validateForm()) {
                return;
            }
            if (this.isLocalizationModeAndChanged()) {
                var newValue = this.getLocalizationGridValue();
                this.localizationLastValue = newValue;
                this.localizationPendingValue = newValue;
            }
            this.localizationButton.toggleClass('pressed');
            this.updateInterface();
            if (this.isLocalizationMode()) {
                this.loadLocalization();
            }
        };
        EntityDialog.prototype.getLanguages = function () {
            if (EntityDialog_1.defaultLanguageList != null)
                return EntityDialog_1.defaultLanguageList() || [];
            return [];
        };
        // for compatibility with older getLanguages methods written in Saltaralle
        EntityDialog.prototype.getLangs = function () {
            var langsTuple = this.getLanguages();
            var langs = safeCast(langsTuple, Array);
            if (langs == null || langs.length === 0 ||
                langs[0] == null || !Array.isArray(langs[0])) {
                langs = Array.prototype.slice.call(langsTuple.map(function (x) {
                    return [x.item1, x.item2];
                }));
            }
            return langs;
        };
        EntityDialog.prototype.loadLocalization = function () {
            var _this = this;
            if (this.localizationLastValue == null && this.isNew()) {
                this.localizationGrid.load({});
                this.setLocalizationGridCurrentValues();
                this.localizationLastValue = this.getLocalizationGridValue();
                return;
            }
            if (this.localizationLastValue != null) {
                this.localizationGrid.load(this.localizationLastValue);
                this.setLocalizationGridCurrentValues();
                return;
            }
            var opt = {
                service: this.getService() + '/Retrieve',
                blockUI: true,
                request: {
                    EntityId: this.get_entityId(),
                    ColumnSelection: 'keyOnly',
                    IncludeColumns: ['Localizations']
                },
                onSuccess: function (response) {
                    var copy = extend(new Object(), _this.get_entity());
                    if (response.Localizations) {
                        for (var _i = 0, _a = Object.keys(response.Localizations); _i < _a.length; _i++) {
                            var language = _a[_i];
                            var entity = response.Localizations[language];
                            for (var _b = 0, _c = Object.keys(entity); _b < _c.length; _b++) {
                                var key = _c[_b];
                                copy[language + '$' + key] = entity[key];
                            }
                        }
                    }
                    _this.localizationGrid.load(copy);
                    _this.setLocalizationGridCurrentValues();
                    _this.localizationPendingValue = null;
                    _this.localizationLastValue = _this.getLocalizationGridValue();
                }
            };
            serviceCall(opt);
        };
        EntityDialog.prototype.setLocalizationGridCurrentValues = function () {
            var _this = this;
            var valueByName = {};
            this.localizationGrid.enumerateItems(function (item, widget) {
                if (item.name.indexOf('$') < 0 && widget.element.is(':input')) {
                    valueByName[item.name] = _this.byId(item.name).val();
                    widget.element.val(valueByName[item.name]);
                }
            });
            this.localizationGrid.enumerateItems(function (item1, widget1) {
                var idx = item1.name.indexOf('$');
                if (idx >= 0 && widget1.element.is(':input')) {
                    var hint = valueByName[item1.name.substr(idx + 1)];
                    if (hint != null && hint.length > 0) {
                        widget1.element.attr('title', hint).attr('placeholder', hint);
                    }
                }
            });
        };
        EntityDialog.prototype.getLocalizationGridValue = function () {
            var value = {};
            this.localizationGrid.save(value);
            for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.indexOf('$') < 0) {
                    delete value[k];
                }
            }
            return value;
        };
        EntityDialog.prototype.getPendingLocalizations = function () {
            if (this.localizationPendingValue == null) {
                return null;
            }
            var result = {};
            var idField = this.getIdProperty();
            var langs = this.getLangs();
            for (var _i = 0, langs_2 = langs; _i < langs_2.length; _i++) {
                var pair = langs_2[_i];
                var language = pair[0];
                var entity = {};
                if (idField != null) {
                    entity[idField] = this.get_entityId();
                }
                var prefix = language + '$';
                for (var _a = 0, _b = Object.keys(this.localizationPendingValue); _a < _b.length; _a++) {
                    var k = _b[_a];
                    if (startsWith(k, prefix))
                        entity[k.substr(prefix.length)] = this.localizationPendingValue[k];
                }
                result[language] = entity;
            }
            return result;
        };
        EntityDialog.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        EntityDialog.prototype.getPropertyItems = function () {
            var _a;
            return ((_a = this.propertyItemsData) === null || _a === void 0 ? void 0 : _a.items) || [];
        };
        EntityDialog.prototype.getPropertyItemsData = function () {
            var formKey = this.getFormKey();
            if (this.getFormKey === EntityDialog_1.prototype.getFormKey &&
                this.getPropertyItems !== EntityDialog_1.prototype.getPropertyItems &&
                !exports.ScriptData.canLoad('Form.' + formKey)) {
                return {
                    items: this.getPropertyItems(),
                    additionalItems: []
                };
            }
            if (!isEmptyOrNull(formKey)) {
                return getFormData(formKey);
            }
            return { items: [], additionalItems: [] };
        };
        EntityDialog.prototype.getPropertyItemsDataAsync = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                var formKey;
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            formKey = this.getFormKey();
                            if (!!isEmptyOrNull(formKey)) return [3 /*break*/, 2];
                            return [4 /*yield*/, getFormDataAsync(formKey)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/, { items: [], additionalItems: [] }];
                    }
                });
            });
        };
        EntityDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getPropertyItems(),
                mode: exports.PropertyGridMode.insert,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.',
                useCategories: true
            };
        };
        EntityDialog.prototype.validateBeforeSave = function () {
            return true;
        };
        EntityDialog.prototype.getSaveOptions = function (callback) {
            var _this = this;
            var opt = {};
            opt.service = this.getService() + '/' + (this.isEditMode() ? 'Update' : 'Create'),
                opt.onSuccess = function (response) {
                    _this.onSaveSuccess(response);
                    callback && callback(response);
                    var typ = (_this.isEditMode() ? 'update' : 'create');
                    var ent = opt.request == null ? null : opt.request.Entity;
                    var eid = _this.isEditMode() ? _this.get_entityId() :
                        (response == null ? null : response.EntityId);
                    var dci = {
                        type: typ,
                        entity: ent,
                        entityId: eid
                    };
                    _this.element.triggerHandler('ondatachange', [dci]);
                };
            opt.onCleanup = function () {
                _this.validator && validatorAbortHandler(_this.validator);
            };
            opt.request = this.getSaveRequest();
            return opt;
        };
        EntityDialog.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid != null) {
                this.propertyGrid.save(entity);
            }
            if (this.isEditMode()) {
                var idField = this.getIdProperty();
                if (idField != null && entity[idField] == null) {
                    entity[idField] = this.get_entityId();
                }
            }
            return entity;
        };
        EntityDialog.prototype.getSaveRequest = function () {
            var entity = this.getSaveEntity();
            var req = {};
            req.Entity = entity;
            if (this.isEditMode()) {
                var idField = this.getIdProperty();
                if (idField != null) {
                    req.EntityId = this.get_entityId();
                }
            }
            if (this.localizationPendingValue != null) {
                req.Localizations = this.getPendingLocalizations();
            }
            return req;
        };
        EntityDialog.prototype.onSaveSuccess = function (response) {
        };
        EntityDialog.prototype.save_submitHandler = function (callback) {
            var options = this.getSaveOptions(callback);
            this.saveHandler(options, callback);
        };
        EntityDialog.prototype.save = function (callback) {
            var _this = this;
            return exports.ValidationHelper.submit(this.byId('Form'), function () { return _this.validateBeforeSave(); }, function () { return _this.save_submitHandler(callback); });
        };
        EntityDialog.prototype.saveHandler = function (options, callback) {
            serviceCall(options);
        };
        EntityDialog.prototype.initToolbar = function () {
            _super.prototype.initToolbar.call(this);
            if (!this.toolbar)
                return;
            this.saveAndCloseButton = this.toolbar.findButton('save-and-close-button');
            this.applyChangesButton = this.toolbar.findButton('apply-changes-button');
            this.deleteButton = this.toolbar.findButton('delete-button');
            this.undeleteButton = this.toolbar.findButton('undo-delete-button');
            this.editButton = this.toolbar.findButton('edit-button');
            this.cloneButton = this.toolbar.findButton('clone-button');
            this.localizationButton = this.toolbar.findButton('localization-button');
        };
        EntityDialog.prototype.showSaveSuccessMessage = function (response) {
            notifySuccess(localText('Controls.EntityDialog.SaveSuccessMessage'), '', null);
        };
        EntityDialog.prototype.getToolbarButtons = function () {
            var _this = this;
            var list = [];
            list.push({
                title: localText('Controls.EntityDialog.SaveButton'),
                action: 'save-and-close',
                cssClass: 'save-and-close-button',
                icon: 'fa-check-circle text-purple',
                hotkey: 'alt+s',
                onClick: function () {
                    _this.save(function (response) {
                        _this.dialogClose();
                    });
                },
                visible: function () { return !_this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasSavePermission() || _this.readOnly; }
            });
            list.push({
                title: '',
                hint: localText('Controls.EntityDialog.ApplyChangesButton'),
                action: 'apply-changes',
                cssClass: 'apply-changes-button',
                icon: 'fa-clipboard-check text-purple',
                hotkey: 'alt+a',
                onClick: function () {
                    _this.save(function (response1) {
                        if (_this.isEditMode()) {
                            var id1 = response1.EntityId;
                            if (id1 == null) {
                                id1 = _this.get_entityId();
                            }
                            _this.loadById(id1);
                        }
                        else {
                            _this.loadById(response1.EntityId);
                        }
                        _this.showSaveSuccessMessage(response1);
                    });
                },
                visible: function () { return !_this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasSavePermission() || _this.readOnly; }
            });
            list.push({
                title: localText('Controls.EntityDialog.DeleteButton'),
                cssClass: 'delete-button',
                icon: 'fa-trash-o text-red',
                hotkey: 'alt+x',
                onClick: function () {
                    confirmDialog(localText('Controls.EntityDialog.DeleteConfirmation'), function () {
                        _this.doDelete(function () { return _this.dialogClose(); });
                    });
                },
                visible: function () { return _this.isEditMode() && !_this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasDeletePermission() || _this.readOnly; }
            });
            list.push({
                title: localText('Controls.EntityDialog.UndeleteButton'),
                action: 'undo-delete',
                cssClass: 'undo-delete-button',
                onClick: function () {
                    if (_this.isDeleted()) {
                        confirmDialog(localText('Controls.EntityDialog.UndeleteConfirmation'), function () {
                            _this.undelete(function () { return _this.loadById(_this.get_entityId()); });
                        });
                    }
                },
                visible: function () { return _this.isEditMode() && _this.isDeleted() && !_this.isViewMode(); },
                disabled: function () { return !_this.hasDeletePermission() || _this.readOnly; }
            });
            if (this.useViewMode()) {
                list.push({
                    title: localText('Controls.EntityDialog.EditButton'),
                    action: 'delete',
                    cssClass: 'edit-button',
                    icon: 'fa-edit',
                    onClick: function () {
                        if (!_this.isEditMode())
                            return;
                        _this.editClicked = true;
                        _this.updateInterface();
                        _this.updateTitle();
                    },
                    visible: function () { return _this.isViewMode(); },
                    disabled: function () { return !_this.hasSavePermission() || _this.readOnly; }
                });
            }
            list.push({
                title: localText('Controls.EntityDialog.LocalizationButton'),
                action: 'localization',
                cssClass: 'localization-button',
                onClick: function () { return _this.localizationButtonClick(); }
            });
            list.push({
                title: localText('Controls.EntityDialog.CloneButton'),
                action: 'clone',
                cssClass: 'clone-button',
                icon: 'fa-clone',
                onClick: function () {
                    if (!_this.isEditMode()) {
                        return;
                    }
                    var cloneEntity = _this.getCloningEntity();
                    Widget.create({
                        type: getInstanceType(_this),
                        init: function (w) { return exports.SubDialogHelper.bubbleDataChange(exports.SubDialogHelper.cascade(w, _this.element), _this, true)
                            .loadEntityAndOpenDialog(cloneEntity, null); }
                    });
                },
                visible: function () { return false; },
                disabled: function () { return !_this.hasInsertPermission() || _this.readOnly; }
            });
            return list;
        };
        EntityDialog.prototype.getCloningEntity = function () {
            var clone = new Object();
            clone = extend(clone, this.get_entity());
            var idField = this.getIdProperty();
            if (!isEmptyOrNull(idField)) {
                delete clone[idField];
            }
            var isActiveField = this.getIsActiveProperty();
            if (!isEmptyOrNull(isActiveField)) {
                delete clone[isActiveField];
            }
            var isDeletedField = this.getIsDeletedProperty();
            if (!isEmptyOrNull(isDeletedField)) {
                delete clone[isDeletedField];
            }
            return clone;
        };
        EntityDialog.prototype.updateInterface = function () {
            exports.EditorUtils.setContainerReadOnly(this.byId('Form'), false);
            var isLocalizationMode = this.isLocalizationMode();
            var hasSavePermission = this.hasSavePermission();
            var viewMode = this.isViewMode();
            var readOnly = this.readOnly;
            this.toolbar.updateInterface();
            if (this.tabs != null) {
                exports.TabsExtensions.setDisabled(this.tabs, 'Log', this.isNewOrDeleted());
            }
            if (this.propertyGrid != null) {
                this.propertyGrid.element.toggle(!isLocalizationMode);
            }
            if (this.localizationGrid != null) {
                this.localizationGrid.element.toggle(isLocalizationMode);
            }
            if (this.localizationButton != null) {
                this.localizationButton.toggle(this.localizationGrid != null);
                this.localizationButton.find('.button-inner')
                    .text((this.isLocalizationMode() ?
                    localText('Controls.EntityDialog.LocalizationBack') :
                    localText('Controls.EntityDialog.LocalizationButton')));
            }
            if (isLocalizationMode) {
                if (this.toolbar != null)
                    this.toolbar.findButton('tool-button')
                        .not('.localization-hidden')
                        .addClass('.localization-hidden').hide();
                this.localizationButton && this.localizationButton.show();
                return;
            }
            this.toolbar.findButton('localization-hidden')
                .removeClass('localization-hidden').show();
            if (!hasSavePermission || viewMode || readOnly)
                exports.EditorUtils.setContainerReadOnly(this.byId("Form"), true);
        };
        EntityDialog.prototype.getUndeleteOptions = function (callback) {
            return {};
        };
        EntityDialog.prototype.undeleteHandler = function (options, callback) {
            serviceCall(options);
        };
        EntityDialog.prototype.undelete = function (callback) {
            var _this = this;
            var baseOptions = {};
            baseOptions.service = this.getService() + '/Undelete';
            var request = {};
            request.EntityId = this.get_entityId();
            baseOptions.request = request;
            baseOptions.onSuccess = function (response) {
                callback && callback(response);
                _this.element.triggerHandler('ondatachange', [{
                        entityId: _this.get_entityId(),
                        entity: _this.entity,
                        type: 'undelete'
                    }]);
            };
            var thisOptions = this.getUndeleteOptions(callback);
            var finalOptions = extend(baseOptions, thisOptions);
            this.undeleteHandler(finalOptions, callback);
        };
        Object.defineProperty(EntityDialog.prototype, "readOnly", {
            get: function () {
                return this.get_readOnly();
            },
            set: function (value) {
                this.set_readOnly(value);
            },
            enumerable: false,
            configurable: true
        });
        EntityDialog.prototype.get_readOnly = function () {
            return !!this._readonly;
        };
        EntityDialog.prototype.set_readOnly = function (value) {
            if (!!this._readonly != !!value) {
                this._readonly = !!value;
                this.updateInterface();
                this.updateTitle();
            }
        };
        EntityDialog.prototype.getInsertPermission = function () {
            var _a;
            return (_a = this.getRowDefinition()) === null || _a === void 0 ? void 0 : _a.insertPermission;
        };
        EntityDialog.prototype.getUpdatePermission = function () {
            var _a;
            return (_a = this.getRowDefinition()) === null || _a === void 0 ? void 0 : _a.updatePermission;
        };
        EntityDialog.prototype.getDeletePermission = function () {
            var _a;
            return (_a = this.getRowDefinition()) === null || _a === void 0 ? void 0 : _a.deletePermission;
        };
        EntityDialog.prototype.hasDeletePermission = function () {
            var deletePermission = this.getDeletePermission();
            return deletePermission == null || exports.Authorization.hasPermission(deletePermission);
        };
        EntityDialog.prototype.hasInsertPermission = function () {
            var insertPermission = this.getInsertPermission();
            return insertPermission == null || exports.Authorization.hasPermission(insertPermission);
        };
        EntityDialog.prototype.hasUpdatePermission = function () {
            var updatePermission = this.getUpdatePermission();
            return updatePermission == null || exports.Authorization.hasPermission(updatePermission);
        };
        EntityDialog.prototype.hasSavePermission = function () {
            return this.isNew() ? this.hasInsertPermission() : this.hasUpdatePermission();
        };
        EntityDialog.prototype.isViewMode = function () {
            return this.useViewMode() && this.isEditMode() && !this.editClicked;
        };
        EntityDialog.prototype.useViewMode = function () {
            return false;
        };
        EntityDialog.prototype.getFallbackTemplate = function () {
            return "<div class=\"s-DialogContent\">\n    <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n    </div>\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div class=\"fieldset\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n        </form> \n    </div>\n</div>";
        };
        var EntityDialog_1;
        EntityDialog = EntityDialog_1 = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.EntityDialog', [IEditDialog, IReadOnly])
        ], EntityDialog);
        return EntityDialog;
    }(TemplatedDialog));

    function _widgetFactory(props) {
        var widget = Widget.create({
            type: this,
            element: function (el$) {
                var el = el$[0];
                if (props.id != null)
                    el.id = props.id;
                if (props.name != null)
                    el.setAttribute('name', props.name);
                if (props.placeholder != null)
                    el.setAttribute("placeholder", props.placeholder);
                if (props.className != null)
                    el.className = props.className;
                else if (props.class != null)
                    el.className = props.class;
                if (props.oneWay)
                    el.dataset.oneWay = "1";
                if (props.maxLength != null)
                    el.setAttribute("maxLength", props.maxLength || 0);
                else if (props.maxlength != null)
                    el.setAttribute("maxLength", props.maxlength || 0);
            }
        });
        if (props.required != null)
            exports.EditorUtils.setRequired(widget, props.required);
        if (props.readOnly !== null)
            exports.EditorUtils.setReadOnly(widget, props.readOnly);
        else if (props.readonly !== null)
            exports.EditorUtils.setReadOnly(widget, props.readonly);
        if (props.setOptions != props.setOptions)
            exports.ReflectionOptionsSetter.set(widget, props.setOptions);
        if (props.value !== undefined)
            exports.EditorUtils.setValue(widget, props.value);
        else if (props.initialValue != undefined)
            exports.EditorUtils.setValue(widget, props.initialValue);
        if (props.onChange != null)
            widget.element.on('change', props.onChange);
        else if (props.onchange != null)
            widget.element.on('change', props.onchange);
        if (props.onChangeSelect2 != null)
            widget.changeSelect2(props.onChangeSelect2);
        if (props.ref)
            props.ref(widget);
        return widget.element[0];
    }
    function jsxDomWidget(type) {
        return _widgetFactory.bind(type);
    }

    exports.Reporting = void 0;
    (function (Reporting) {
        var ReportDialog = /** @class */ (function (_super) {
            tslib.__extends(ReportDialog, _super);
            function ReportDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (opt.reportKey) {
                    _this.loadReport(opt.reportKey);
                }
                return _this;
            }
            ReportDialog.prototype.createPropertyGrid = function () {
                if (this.propertyGrid) {
                    this.byId('PropertyGrid').html('').attr('class', '');
                    this.propertyGrid = null;
                }
                this.propertyGrid = (new PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.propertyItems
                })).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                serviceCall({
                    service: 'Report/Retrieve', request: { ReportKey: reportKey },
                    onSuccess: function (response) {
                        var _a;
                        _this.reportKey = (_a = response.ReportKey) !== null && _a !== void 0 ? _a : reportKey;
                        _this.propertyItems = response.Properties || [];
                        _this.dialogTitle = response.Title;
                        _this.createPropertyGrid();
                        var set = response.InitialSettings;
                        if (set == null) {
                            set = new Object();
                        }
                        _this.propertyGrid.load(set);
                        _this.toolbar.findButton('print-preview-button').toggle(!response.IsDataOnlyReport);
                        _this.toolbar.findButton('export-pdf-button').toggle(!response.IsDataOnlyReport);
                        _this.toolbar.findButton('export-docx-button').toggle(!response.IsDataOnlyReport);
                        _this.dialogOpen(null);
                    }
                });
            };
            ReportDialog.prototype.executeReport = function (targetFrame, exportType) {
                if (!this.validateForm()) {
                    return;
                }
                var parameters = new Object();
                this.propertyGrid.save(parameters);
                postToService({
                    service: 'Report/Execute',
                    request: {
                        ReportKey: this.reportKey,
                        DesignId: 'Default',
                        ExportType: exportType,
                        Parameters: parameters
                    }, target: targetFrame
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push({
                    title: 'Önizleme', cssClass: 'print-preview-button', onClick: function () {
                        _this.executeReport('_blank', null);
                    }
                });
                buttons.push({
                    title: 'PDF', cssClass: 'export-pdf-button', onClick: function () {
                        _this.executeReport('', 'Pdf');
                    }
                });
                buttons.push({
                    title: 'Excel', cssClass: 'export-xlsx-button', onClick: function () {
                        _this.executeReport('', 'Xlsx');
                    }
                });
                buttons.push({
                    title: 'Word', cssClass: 'export-docx-button', onClick: function () {
                        _this.executeReport('', 'Docx');
                    }
                });
                return buttons;
            };
            ReportDialog = tslib.__decorate([
                exports.Decorators.registerClass('Serenity.Reporting.ReportDialog')
            ], ReportDialog);
            return ReportDialog;
        }(TemplatedDialog));
        Reporting.ReportDialog = ReportDialog;
        var ReportPage = /** @class */ (function (_super) {
            tslib.__extends(ReportPage, _super);
            function ReportPage(div) {
                var _this = _super.call(this, div) || this;
                $('.report-link').click(function (e) { return _this.reportLinkClick(e); });
                $('div.line').click(function (e) { return _this.categoryClick(e); });
                var self = _this;
                new QuickSearchInput($('#QuickSearchInput'), {
                    onSearch: function (field, text, done) {
                        self.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('#ReportList').find('li').removeClass('non-match');
                text = trimToNull(text);
                if (text == null) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ');
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (i1, e) {
                    var _a;
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(((_a = x.text()) !== null && _a !== void 0 ? _a : '').toUpperCase());
                    for (var $t1 = 0; $t1 < parts.length; $t1++) {
                        var p = parts[$t1];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new ReportDialog({ reportKey: $(e.target).data('key') });
            };
            ReportPage = tslib.__decorate([
                exports.Decorators.registerClass('Serenity.Reporting.ReportPage')
            ], ReportPage);
            return ReportPage;
        }(Widget));
        Reporting.ReportPage = ReportPage;
    })(exports.Reporting || (exports.Reporting = {}));

    var ScriptContext = /** @class */ (function () {
        function ScriptContext() {
        }
        ScriptContext = tslib.__decorate([
            exports.Decorators.registerClass('Serenity.ScriptContext')
        ], ScriptContext);
        return ScriptContext;
    }());

    var IAsyncInit = /** @class */ (function () {
        function IAsyncInit() {
        }
        IAsyncInit = tslib.__decorate([
            exports.Decorators.registerInterface('Serenity.IAsyncInit')
        ], IAsyncInit);
        return IAsyncInit;
    }());

    exports.WX = void 0;
    (function (WX) {
        function getWidget(element, type) {
            return element.getWidget(type);
        }
        WX.getWidget = getWidget;
        WX.getWidgetName = Widget.getWidgetName;
        function hasOriginalEvent(e) {
            return !!!(typeof (e.originalEvent) === 'undefined');
        }
        WX.hasOriginalEvent = hasOriginalEvent;
        function change(widget, handler) {
            widget.change(handler);
        }
        WX.change = change;
        function changeSelect2(widget, handler) {
            widget.changeSelect2(handler);
        }
        WX.changeSelect2 = changeSelect2;
        function getGridField(widget) {
            return widget.getGridField();
        }
        WX.getGridField = getGridField;
    })(exports.WX || (exports.WX = {}));

    var GoogleMap = /** @class */ (function (_super) {
        tslib.__extends(GoogleMap, _super);
        function GoogleMap(container, opt) {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g;
            _this = _super.call(this, container, opt) || this;
            // @ts-ignore
            var center = (_a = new google.m) !== null && _a !== void 0 ? _a : s.LatLng((_b = _this.options.latitude) !== null && _b !== void 0 ? _b : 0, (_c = _this.options.longitude) !== null && _c !== void 0 ? _c : 0);
            var mapOpt = new Object();
            mapOpt.center = center;
            mapOpt.mapTypeId = (_d = _this.options.mapTypeId) !== null && _d !== void 0 ? _d : 'roadmap';
            mapOpt.zoom = (_e = _this.options.zoom) !== null && _e !== void 0 ? _e : 15;
            mapOpt.zoomControl = true;
            // @ts-ignore
            _this.map = new google.maps.Map(container[0], mapOpt);
            if (_this.options.markerTitle != null) {
                var markerOpt = new Object();
                var lat = _this.options.markerLatitude;
                if (lat == null) {
                    lat = (_f = _this.options.latitude) !== null && _f !== void 0 ? _f : 0;
                }
                var lon = _this.options.markerLongitude;
                if (lon == null) {
                    lon = (_g = _this.options.longitude) !== null && _g !== void 0 ? _g : 0;
                }
                // @ts-ignore
                markerOpt.position = new google.maps.LatLng(lat, lon);
                markerOpt.map = _this.map;
                markerOpt.title = _this.options.markerTitle;
                markerOpt.animation = 2;
                // @ts-ignore
                new google.maps.Marker(markerOpt);
            }
            exports.LazyLoadHelper.executeOnceWhenShown(container, function () {
                // @ts-ignore
                google.maps.event.trigger(_this.map, 'resize', []);
                _this.map.setCenter(center);
                // in case it wasn't visible (e.g. in dialog)
            });
            return _this;
        }
        GoogleMap.prototype.get_map = function () {
            return this.map;
        };
        GoogleMap = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.GoogleMap', []),
            exports.Decorators.element('<div/>')
        ], GoogleMap);
        return GoogleMap;
    }(Widget));

    var Select2AjaxEditor = /** @class */ (function (_super) {
        tslib.__extends(Select2AjaxEditor, _super);
        function Select2AjaxEditor(hidden, opt) {
            var _this = _super.call(this, hidden, opt) || this;
            _this.pageSize = 50;
            var emptyItemText = _this.emptyItemText();
            if (emptyItemText != null)
                hidden.attr("placeholder", emptyItemText);
            hidden.select2(_this.getSelect2Options());
            hidden.attr("type", "text"); // jquery validate to work
            hidden.on("change." + _this.uniqueName, function (e, x) {
                if (exports.WX.hasOriginalEvent(e) || !x) {
                    if (exports.ValidationHelper.getValidator(hidden) != null)
                        hidden.valid();
                }
            });
            return _this;
        }
        Select2AjaxEditor.prototype.emptyItemText = function () {
            var txt = this.element.attr('placeholder');
            if (txt == null) {
                txt = localText('Controls.SelectEditor.EmptyItemText');
            }
            return txt;
        };
        Select2AjaxEditor.prototype.getService = function () {
            throw new Error("Not implemented!");
        };
        Select2AjaxEditor.prototype.query = function (request, callback) {
            var options = {
                blockUI: false,
                service: this.getService() + '/List',
                request: request,
                onSuccess: function (response) {
                    callback(response);
                }
            };
            this.executeQuery(options);
        };
        Select2AjaxEditor.prototype.executeQuery = function (options) {
            serviceCall(options);
        };
        Select2AjaxEditor.prototype.queryByKey = function (key, callback) {
            var options = {
                blockUI: false,
                service: this.getService() + '/Retrieve',
                request: { EntityId: key },
                onSuccess: function (response) {
                    callback(response.Entity);
                }
            };
            this.executeQueryByKey(options);
        };
        Select2AjaxEditor.prototype.executeQueryByKey = function (options) {
            serviceCall(options);
        };
        Select2AjaxEditor.prototype.getItemKey = function (item) {
            return null;
        };
        Select2AjaxEditor.prototype.getItemText = function (item) {
            return null;
        };
        Select2AjaxEditor.prototype.getTypeDelay = function () {
            return 200;
        };
        Select2AjaxEditor.prototype.getSelect2Options = function () {
            var _this = this;
            var emptyItemText = this.emptyItemText();
            var queryTimeout = 0;
            return {
                minimumResultsForSearch: 10,
                placeHolder: (!isEmptyOrNull(emptyItemText) ? emptyItemText : null),
                allowClear: isValue(emptyItemText),
                query: function (query) {
                    var request = {
                        ContainsText: trimToNull(query.term), Skip: (query.page - 1) * _this.pageSize, Take: _this.pageSize + 1
                    };
                    if (queryTimeout !== 0) {
                        window.clearTimeout(queryTimeout);
                    }
                    var select2 = $(_this.element).data('select2');
                    select2 && select2.search && select2.search.removeClass('select2-active').parent().removeClass('select2-active');
                    queryTimeout = window.setTimeout(function () {
                        select2 && select2.search.addClass('select2-active').parent().addClass('select2-active');
                        _this.query(request, function (response) {
                            query.callback({
                                results: response.Entities.slice(0, _this.pageSize).map(function (x) {
                                    return { id: _this.getItemKey(x), text: _this.getItemText(x), source: x };
                                }), more: response.Entities.length >= _this.pageSize
                            });
                        });
                    }, _this.getTypeDelay());
                },
                initSelection: function (element, callback) {
                    var val = element.val();
                    if (isEmptyOrNull(val)) {
                        callback(null);
                        return;
                    }
                    _this.queryByKey(val, function (result) {
                        callback((result == null ? null : {
                            id: _this.getItemKey(result),
                            text: _this.getItemText(result),
                            source: result
                        }));
                    });
                }
            };
        };
        Select2AjaxEditor.prototype.addInplaceCreate = function (title) {
            var self = this;
            $('<a><b/></a>').addClass('inplace-button inplace-create')
                .attr('title', title).insertAfter(this.element).click(function (e) {
                self.inplaceCreateClick(e);
            });
            this.get_select2Container().add(this.element)
                .addClass('has-inplace-button');
        };
        Select2AjaxEditor.prototype.inplaceCreateClick = function (e) {
        };
        Select2AjaxEditor.prototype.get_select2Container = function () {
            return this.element.prevAll('.select2-container');
        };
        Select2AjaxEditor.prototype.get_value = function () {
            return safeCast(this.element.select2('val'), String);
        };
        Object.defineProperty(Select2AjaxEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: false,
            configurable: true
        });
        Select2AjaxEditor.prototype.set_value = function (value) {
            if (value !== this.get_value()) {
                var el = this.element;
                el.select2('val', value);
                el.data('select2-change-triggered', true);
                try {
                    el.triggerHandler('change', [true]); // valueSet: true
                }
                finally {
                    el.data('select2-change-triggered', false);
                }
            }
        };
        Select2AjaxEditor = tslib.__decorate([
            exports.Decorators.registerEditor('Serenity.Select2AjaxEditor', [IStringValue]),
            exports.Decorators.element('<input type="hidden" />')
        ], Select2AjaxEditor);
        return Select2AjaxEditor;
    }(Widget));

    exports.ArgumentNullException = ArgumentNullException;
    exports.BaseEditorFiltering = BaseEditorFiltering;
    exports.BaseFiltering = BaseFiltering;
    exports.BooleanEditor = BooleanEditor;
    exports.BooleanFiltering = BooleanFiltering;
    exports.BooleanFormatter = BooleanFormatter;
    exports.CascadedWidgetLink = CascadedWidgetLink;
    exports.CategoryAttribute = CategoryAttribute;
    exports.CheckLookupEditor = CheckLookupEditor;
    exports.CheckTreeEditor = CheckTreeEditor;
    exports.CheckboxFormatter = CheckboxFormatter;
    exports.ColumnPickerDialog = ColumnPickerDialog;
    exports.ColumnsBase = ColumnsBase;
    exports.ColumnsKeyAttribute = ColumnsKeyAttribute;
    exports.Config = Config;
    exports.Criteria = Criteria;
    exports.CriteriaBuilder = CriteriaBuilder;
    exports.CssClassAttribute = CssClassAttribute;
    exports.Culture = Culture;
    exports.DataGrid = DataGrid;
    exports.DateEditor = DateEditor;
    exports.DateFiltering = DateFiltering;
    exports.DateFormatter = DateFormatter;
    exports.DateTimeEditor = DateTimeEditor;
    exports.DateTimeFiltering = DateTimeFiltering;
    exports.DateTimeFormatter = DateTimeFormatter;
    exports.DateYearEditor = DateYearEditor;
    exports.DecimalEditor = DecimalEditor;
    exports.DecimalFiltering = DecimalFiltering;
    exports.DefaultValueAttribute = DefaultValueAttribute;
    exports.DialogTypeAttribute = DialogTypeAttribute;
    exports.DisplayNameAttribute = DisplayNameAttribute;
    exports.EditorAttribute = EditorAttribute;
    exports.EditorFiltering = EditorFiltering;
    exports.EditorOptionAttribute = EditorOptionAttribute;
    exports.EditorTypeAttribute = EditorTypeAttribute;
    exports.EditorTypeAttributeBase = EditorTypeAttributeBase;
    exports.ElementAttribute = ElementAttribute;
    exports.EmailAddressEditor = EmailAddressEditor;
    exports.EmailEditor = EmailEditor;
    exports.EntityDialog = EntityDialog;
    exports.EntityGrid = EntityGrid;
    exports.EntityTypeAttribute = EntityTypeAttribute;
    exports.EnumEditor = EnumEditor;
    exports.EnumFiltering = EnumFiltering;
    exports.EnumFormatter = EnumFormatter;
    exports.EnumKeyAttribute = EnumKeyAttribute;
    exports.Exception = Exception;
    exports.FileDownloadFormatter = FileDownloadFormatter;
    exports.FileUploadEditor = FileUploadEditor;
    exports.FilterDialog = FilterDialog;
    exports.FilterDisplayBar = FilterDisplayBar;
    exports.FilterPanel = FilterPanel;
    exports.FilterStore = FilterStore;
    exports.FilterWidgetBase = FilterWidgetBase;
    exports.FilterableAttribute = FilterableAttribute;
    exports.Flexify = Flexify;
    exports.FlexifyAttribute = FlexifyAttribute;
    exports.FormKeyAttribute = FormKeyAttribute;
    exports.GeneratedCodeAttribute = GeneratedCodeAttribute;
    exports.GoogleMap = GoogleMap;
    exports.GridRadioSelectionMixin = GridRadioSelectionMixin;
    exports.GridRowSelectionMixin = GridRowSelectionMixin;
    exports.HiddenAttribute = HiddenAttribute;
    exports.HintAttribute = HintAttribute;
    exports.HtmlContentEditor = HtmlContentEditor;
    exports.HtmlNoteContentEditor = HtmlNoteContentEditor;
    exports.HtmlReportContentEditor = HtmlReportContentEditor;
    exports.IAsyncInit = IAsyncInit;
    exports.IBooleanValue = IBooleanValue;
    exports.IDialog = IDialog;
    exports.IDoubleValue = IDoubleValue;
    exports.IEditDialog = IEditDialog;
    exports.IFiltering = IFiltering;
    exports.IGetEditValue = IGetEditValue;
    exports.IInitializeColumn = IInitializeColumn;
    exports.IQuickFiltering = IQuickFiltering;
    exports.IReadOnly = IReadOnly;
    exports.ISetEditValue = ISetEditValue;
    exports.ISlickFormatter = ISlickFormatter;
    exports.IStringValue = IStringValue;
    exports.IValidateRequired = IValidateRequired;
    exports.IdPropertyAttribute = IdPropertyAttribute;
    exports.ImageUploadEditor = ImageUploadEditor;
    exports.InsertableAttribute = InsertableAttribute;
    exports.IntegerEditor = IntegerEditor;
    exports.IntegerFiltering = IntegerFiltering;
    exports.InvalidCastException = InvalidCastException;
    exports.Invariant = Invariant;
    exports.IsActivePropertyAttribute = IsActivePropertyAttribute;
    exports.ItemNameAttribute = ItemNameAttribute;
    exports.LT = LT;
    exports.LocalTextPrefixAttribute = LocalTextPrefixAttribute;
    exports.Lookup = Lookup;
    exports.LookupEditor = LookupEditor;
    exports.LookupEditorBase = LookupEditorBase;
    exports.LookupFiltering = LookupFiltering;
    exports.MaskedEditor = MaskedEditor;
    exports.MaxLengthAttribute = MaxLengthAttribute;
    exports.MaximizableAttribute = MaximizableAttribute;
    exports.MinuteFormatter = MinuteFormatter;
    exports.MultipleFileUploadEditor = MultipleFileUploadEditor;
    exports.MultipleImageUploadEditor = MultipleImageUploadEditor;
    exports.NamePropertyAttribute = NamePropertyAttribute;
    exports.NumberFormatter = NumberFormatter;
    exports.OneWayAttribute = OneWayAttribute;
    exports.OptionAttribute = OptionAttribute;
    exports.OptionsTypeAttribute = OptionsTypeAttribute;
    exports.PanelAttribute = PanelAttribute;
    exports.PasswordEditor = PasswordEditor;
    exports.PlaceholderAttribute = PlaceholderAttribute;
    exports.PopupMenuButton = PopupMenuButton;
    exports.PopupToolButton = PopupToolButton;
    exports.PrefixedContext = PrefixedContext;
    exports.PropertyDialog = PropertyDialog;
    exports.PropertyGrid = PropertyGrid;
    exports.PropertyPanel = PropertyPanel;
    exports.QuickFilterBar = QuickFilterBar;
    exports.QuickSearchInput = QuickSearchInput;
    exports.RadioButtonEditor = RadioButtonEditor;
    exports.ReadOnlyAttribute = ReadOnlyAttribute;
    exports.Recaptcha = Recaptcha;
    exports.RemoteView = RemoteView;
    exports.RequiredAttribute = RequiredAttribute;
    exports.ResizableAttribute = ResizableAttribute;
    exports.ResponsiveAttribute = ResponsiveAttribute;
    exports.ScriptContext = ScriptContext;
    exports.Select2AjaxEditor = Select2AjaxEditor;
    exports.Select2Editor = Select2Editor;
    exports.SelectEditor = SelectEditor;
    exports.ServiceAttribute = ServiceAttribute;
    exports.ServiceLookupEditor = ServiceLookupEditor;
    exports.ServiceLookupEditorBase = ServiceLookupEditorBase;
    exports.ServiceLookupFiltering = ServiceLookupFiltering;
    exports.SlickPager = SlickPager;
    exports.StringEditor = StringEditor;
    exports.StringFiltering = StringFiltering;
    exports.TemplatedDialog = TemplatedDialog;
    exports.TemplatedPanel = TemplatedPanel;
    exports.TemplatedWidget = TemplatedWidget;
    exports.TextAreaEditor = TextAreaEditor;
    exports.TimeEditor = TimeEditor;
    exports.Toastr = Toastr;
    exports.Toolbar = Toolbar;
    exports.TreeGridMixin = TreeGridMixin;
    exports.URLEditor = URLEditor;
    exports.UpdatableAttribute = UpdatableAttribute;
    exports.UrlFormatter = UrlFormatter;
    exports.Widget = Widget;
    exports.addAttribute = addAttribute;
    exports.addEmptyOption = addEmptyOption;
    exports.addOption = addOption;
    exports.addTypeMember = addTypeMember;
    exports.addValidationRule = addValidationRule;
    exports.alert = alert;
    exports.alertDialog = alertDialog;
    exports.any = any;
    exports.attrEncode = attrEncode;
    exports.baseValidateOptions = baseValidateOptions;
    exports.blockUI = blockUI;
    exports.blockUndo = blockUndo;
    exports.bsModalMarkup = bsModalMarkup;
    exports.canLoadScriptData = canLoadScriptData;
    exports.cast = cast;
    exports.centerDialog = centerDialog;
    exports.clearKeys = clearKeys;
    exports.clearOptions = clearOptions;
    exports.closePanel = closePanel;
    exports.coalesce = coalesce;
    exports.compareStringFactory = compareStringFactory;
    exports.confirm = confirm;
    exports.confirmDialog = confirmDialog;
    exports.count = count;
    exports.datePickerIconSvg = datePickerIconSvg;
    exports.dbText = dbText;
    exports.dbTryText = dbTryText;
    exports.debounce = debounce;
    exports.deepClone = deepClone;
    exports.defaultNotifyOptions = defaultNotifyOptions;
    exports.delegateCombine = delegateCombine;
    exports.delegateRemove = delegateRemove;
    exports.dialogButtonToBS = dialogButtonToBS;
    exports.dialogButtonToUI = dialogButtonToUI;
    exports.endsWith = endsWith;
    exports.executeEverytimeWhenVisible = executeEverytimeWhenVisible;
    exports.executeOnceWhenVisible = executeOnceWhenVisible;
    exports.extend = extend;
    exports.fieldsProxy = fieldsProxy;
    exports.findElementWithRelativeId = findElementWithRelativeId;
    exports.first = first;
    exports.format = format;
    exports.formatDate = formatDate;
    exports.formatDayHourAndMin = formatDayHourAndMin;
    exports.formatISODateTimeUTC = formatISODateTimeUTC;
    exports.formatNumber = formatNumber;
    exports.getAttributes = getAttributes;
    exports.getBaseType = getBaseType;
    exports.getColumns = getColumns;
    exports.getColumnsAsync = getColumnsAsync;
    exports.getColumnsData = getColumnsData;
    exports.getColumnsDataAsync = getColumnsDataAsync;
    exports.getCookie = getCookie;
    exports.getForm = getForm;
    exports.getFormAsync = getFormAsync;
    exports.getFormData = getFormData;
    exports.getFormDataAsync = getFormDataAsync;
    exports.getGlobalThis = getGlobalThis;
    exports.getHighlightTarget = getHighlightTarget;
    exports.getInstanceType = getInstanceType;
    exports.getLookup = getLookup;
    exports.getLookupAsync = getLookupAsync;
    exports.getMembers = getMembers;
    exports.getNested = getNested;
    exports.getRemoteData = getRemoteData;
    exports.getRemoteDataAsync = getRemoteDataAsync;
    exports.getStateStore = getStateStore;
    exports.getTemplate = getTemplate;
    exports.getTemplateAsync = getTemplateAsync;
    exports.getType = getType;
    exports.getTypeFullName = getTypeFullName;
    exports.getTypeNameProp = getTypeNameProp;
    exports.getTypeShortName = getTypeShortName;
    exports.getTypes = getTypes;
    exports.groupBy = groupBy;
    exports.htmlEncode = htmlEncode;
    exports.iframeDialog = iframeDialog;
    exports.indexOf = indexOf;
    exports.information = information;
    exports.informationDialog = informationDialog;
    exports.initFormType = initFormType;
    exports.initFullHeightGridPage = initFullHeightGridPage;
    exports.initializeTypes = initializeTypes;
    exports.insert = insert;
    exports.isArray = isArray;
    exports.isAssignableFrom = isAssignableFrom;
    exports.isBS3 = isBS3;
    exports.isBS5Plus = isBS5Plus;
    exports.isEmptyOrNull = isEmptyOrNull;
    exports.isEnum = isEnum;
    exports.isInstanceOfType = isInstanceOfType;
    exports.isMobileView = isMobileView;
    exports.isTrimmedEmpty = isTrimmedEmpty;
    exports.isValue = isValue;
    exports.jsxDomWidget = jsxDomWidget;
    exports.keyOf = keyOf;
    exports.layoutFillHeight = layoutFillHeight;
    exports.layoutFillHeightValue = layoutFillHeightValue;
    exports.loadValidationErrorMessages = loadValidationErrorMessages;
    exports.localText = localText;
    exports.localeFormat = localeFormat;
    exports.newBodyDiv = newBodyDiv;
    exports.notifyError = notifyError;
    exports.notifyInfo = notifyInfo;
    exports.notifySuccess = notifySuccess;
    exports.notifyWarning = notifyWarning;
    exports.openPanel = openPanel;
    exports.outerHtml = outerHtml;
    exports.padLeft = padLeft;
    exports.parseCriteria = parseCriteria;
    exports.parseDate = parseDate;
    exports.parseDayHourAndMin = parseDayHourAndMin;
    exports.parseDecimal = parseDecimal;
    exports.parseHourAndMin = parseHourAndMin;
    exports.parseISODateTime = parseISODateTime;
    exports.parseInteger = parseInteger;
    exports.parseQueryString = parseQueryString;
    exports.positionToastContainer = positionToastContainer;
    exports.postToService = postToService;
    exports.postToUrl = postToUrl;
    exports.prefixedText = prefixedText;
    exports.prop = prop;
    exports.proxyTexts = proxyTexts;
    exports.reactPatch = reactPatch;
    exports.registerClass = registerClass;
    exports.registerEditor = registerEditor;
    exports.registerEnum = registerEnum;
    exports.registerInterface = registerInterface;
    exports.reloadLookup = reloadLookup;
    exports.reloadLookupAsync = reloadLookupAsync;
    exports.removeValidationRule = removeValidationRule;
    exports.replaceAll = replaceAll;
    exports.resolveUrl = resolveUrl;
    exports.round = round;
    exports.safeCast = safeCast;
    exports.serviceCall = serviceCall;
    exports.serviceRequest = serviceRequest;
    exports.setEquality = setEquality;
    exports.setTypeNameProp = setTypeNameProp;
    exports.single = single;
    exports.splitDateString = splitDateString;
    exports.startsWith = startsWith;
    exports.success = success;
    exports.successDialog = successDialog;
    exports.text = text;
    exports.toGrouping = toGrouping;
    exports.toId = toId;
    exports.toSingleLine = toSingleLine;
    exports.today = today;
    exports.toggleClass = toggleClass;
    exports.triggerLayoutOnShow = triggerLayoutOnShow;
    exports.trim = trim;
    exports.trimEnd = trimEnd;
    exports.trimStart = trimStart;
    exports.trimToEmpty = trimToEmpty;
    exports.trimToNull = trimToNull;
    exports.trunc = trunc;
    exports.tryFirst = tryFirst;
    exports.tryGetText = tryGetText;
    exports.turkishLocaleCompare = turkishLocaleCompare;
    exports.turkishLocaleToLower = turkishLocaleToLower;
    exports.turkishLocaleToUpper = turkishLocaleToUpper;
    exports.useIdPrefix = useIdPrefix;
    exports.validateForm = validateForm;
    exports.validateOptions = validateOptions;
    exports.validatorAbortHandler = validatorAbortHandler;
    exports.warning = warning;
    exports.warningDialog = warningDialog;
    exports.zeroPad = zeroPad;

    Object.defineProperty(exports, '__esModule', { value: true });

})(this.Serenity = this.Serenity || {}, this.window || this, this.Slick = this.Slick || {});
(function (me) {
    if (!me.Q)
        me.Q = me.Serenity;
    else if (me.Q !== me.Serenity) {
        Object.keys(me.Q).forEach(function(key) {
            if (me.Q[key] != null &&
                me.Serenity[key] == null) {
                me.Serenity[key] = me.Q[key];
            }
        });
        me.Q = me.Serenity;
    }
    me.Slick = me.Slick || {};
    ['Aggregators', 'AggregateFormatting'].forEach(function(x) {
        me.Slick[x] = me.Slick[x] || {};
        Object.assign(me.Slick[x], Serenity[x]);
    });
    ['RemoteView'].forEach(function(x) {
        me.Slick[x] = Serenity[x];
    });
})(this);
//# sourceMappingURL=Serenity.CoreLib.js.map
