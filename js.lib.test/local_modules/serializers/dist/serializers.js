"use strict";var _stream=_interopRequireDefault(require("stream")),_readline=_interopRequireDefault(require("readline")),_fs=require("fs"),_util=require("util"),_os=_interopRequireDefault(require("os"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function asyncGeneratorStep(e,r,t,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function o(e){asyncGeneratorStep(i,n,a,o,u,"next",e)}function u(e){asyncGeneratorStep(i,n,a,o,u,"throw",e)}o(void 0)}))}}function _asyncIterator(e){var r;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(r=e[Symbol.asyncIterator]))return r.call(e);if(Symbol.iterator&&null!=(r=e[Symbol.iterator]))return r.call(e)}throw new TypeError("Object is not async iterable")}var Readable=_stream.default.Readable,pipeline=(0,_util.promisify)(_stream.default.pipeline);function writeStringToFile(e,r,t){return _writeStringToFile.apply(this,arguments)}function _writeStringToFile(){return(_writeStringToFile=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,writeStringArrayToFile([r],t,n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function writeStringArrayToFile(e,r,t){return _writeStringArrayToFile.apply(this,arguments)}function _writeStringArrayToFile(){return(_writeStringArrayToFile=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||(t=_os.default.tmpdir()),a=Readable.from(r,{encoding:"utf8"}),i=(0,_fs.createWriteStream)(t+"/"+n),e.next=5,pipeline(a,i);case 5:i.end();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function readStringFmFile(e,r,t){return _readStringFmFile.apply(this,arguments)}function _readStringFmFile(){return(_readStringFmFile=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t,n){var a,i,o,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(u.length>3&&void 0!==u[3])||u[3],t||(t=_os.default.tmpdir()),i=(0,_fs.createReadStream)(t+"/"+n,{encoding:"utf8"}),e.next=5,readableToString(r,i);case 5:a&&(o=r.reduce((function(e,r){return e+r})),r.length=0,r.push(o));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function readableToString(e,r){var t,n,a,i,o,u,s;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:t=!0,n=!1,c.prev=2,i=_asyncIterator(r[Symbol.asyncIterator]());case 4:return c.next=6,regeneratorRuntime.awrap(i.next());case 6:return o=c.sent,t=o.done,c.next=10,regeneratorRuntime.awrap(o.value);case 10:if(u=c.sent,t){c.next=17;break}s=u,e.push(s);case 14:t=!0,c.next=4;break;case 17:c.next=23;break;case 19:c.prev=19,c.t0=c.catch(2),n=!0,a=c.t0;case 23:if(c.prev=23,c.prev=24,t||null==i.return){c.next=28;break}return c.next=28,regeneratorRuntime.awrap(i.return());case 28:if(c.prev=28,!n){c.next=31;break}throw a;case 31:return c.finish(28);case 32:return c.finish(23);case 33:case"end":return c.stop()}}),null,null,[[2,19,23,33],[24,,28,32]],Promise)}function makeIterator(e){var r=0;return{next:function(){return r<e.length&&e[r++]},hasNext:function(){return r<e.length}}}var rl=_readline.default.createInterface({input:process.stdin,output:process.stdout});module.exports={writeStringToFile:writeStringToFile,readStringFmFile:readStringFmFile,makeIterator:makeIterator,rl:rl};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcmlhbGl6ZXJzLmpzIl0sIm5hbWVzIjpbIl9zdHJlYW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFkbGluZSIsIl9mcyIsIl91dGlsIiwiX29zIiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwidGhpcyIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIl9hc3luY0l0ZXJhdG9yIiwiaXRlcmFibGUiLCJtZXRob2QiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwiY2FsbCIsIml0ZXJhdG9yIiwiVHlwZUVycm9yIiwiUmVhZGFibGUiLCJwaXBlbGluZSIsInByb21pc2lmeSIsIndyaXRlU3RyaW5nVG9GaWxlIiwiX3giLCJfeDIiLCJfeDMiLCJfd3JpdGVTdHJpbmdUb0ZpbGUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImxzIiwiYmFzZSIsImZpbGUiLCJ3cmFwIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJ3cml0ZVN0cmluZ0FycmF5VG9GaWxlIiwic3RvcCIsIl94NCIsIl94NSIsIl94NiIsIl93cml0ZVN0cmluZ0FycmF5VG9GaWxlIiwiX2NhbGxlZTIiLCJzYSIsInJlYWRhYmxlIiwid3JpdGFibGUiLCJfY29udGV4dDMiLCJ0bXBkaXIiLCJmcm9tIiwiZW5jb2RpbmciLCJjcmVhdGVXcml0ZVN0cmVhbSIsImVuZCIsInJlYWRTdHJpbmdGbUZpbGUiLCJfeDciLCJfeDgiLCJfeDkiLCJfcmVhZFN0cmluZ0ZtRmlsZSIsIl9jYWxsZWUzIiwiYkZsYXQiLCJyZWFkYWJsZVN0cmVhbSIsImZsYXQiLCJfYXJnczQiLCJfY29udGV4dDQiLCJsZW5ndGgiLCJjcmVhdGVSZWFkU3RyZWFtIiwicmVhZGFibGVUb1N0cmluZyIsInJlZHVjZSIsIm0iLCJzIiwicHVzaCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfdmFsdWUiLCJjaHVuayIsImFzeW5jIiwiX2NvbnRleHQiLCJhd3JhcCIsInNlbnQiLCJ0MCIsImZpbmlzaCIsIm1ha2VJdGVyYXRvciIsImFycmF5IiwibmV4dEluZGV4IiwiaGFzTmV4dCIsInJsIiwiY3JlYXRlSW50ZXJmYWNlIiwiaW5wdXQiLCJwcm9jZXNzIiwic3RkaW4iLCJvdXRwdXQiLCJzdGRvdXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUVBLElBQUlBLFFBQVVDLHVCQUF1QkMsUUFBUSxXQUV6Q0MsVUFBWUYsdUJBQXVCQyxRQUFRLGFBRTNDRSxJQUFNRixRQUFRLE1BRWRHLE1BQVFILFFBQVEsUUFFaEJJLElBQU1MLHVCQUF1QkMsUUFBUSxPQUV6QyxTQUFTRCx1QkFBdUJNLEdBQU8sT0FBT0EsR0FBT0EsRUFBSUMsV0FBYUQsRUFBTSxDQUFFRSxRQUFXRixHQUV6RixTQUFTRyxtQkFBbUJDLEVBQUtDLEVBQVNDLEVBQVFDLEVBQU9DLEVBQVFDLEVBQUtDLEdBQU8sSUFBTSxJQUFJQyxFQUFPUCxFQUFJSyxHQUFLQyxHQUFVRSxFQUFRRCxFQUFLQyxNQUFTLE1BQU9DLEdBQXdCLFlBQWZQLEVBQU9PLEdBQXNCRixFQUFLRyxLQUFRVCxFQUFRTyxHQUFpQkcsUUFBUVYsUUFBUU8sR0FBT0ksS0FBS1QsRUFBT0MsR0FFN1AsU0FBU1Msa0JBQWtCQyxHQUFNLE9BQU8sV0FBYyxJQUFJQyxFQUFPQyxLQUFNQyxFQUFPQyxVQUFXLE9BQU8sSUFBSVAsU0FBUSxTQUFVVixFQUFTQyxHQUFVLElBQUlGLEVBQU1jLEVB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QW9ELE1BQXZCRyxFQUFrQixPQUFZLENBQ2hFSyxFQUFTM0MsS0FBTyxHQUNoQixNQUlGLE9BREEyQyxFQUFTM0MsS0FBTyxHQUNUVCxtQkFBbUJxRCxNQUFNTixFQUFrQixVQUVwRCxLQUFLLEdBR0gsR0FGQUssRUFBUzVDLEtBQU8sSUFFWHFDLEVBQW1CLENBQ3RCTyxFQUFTM0MsS0FBTyxHQUNoQixNQUdGLE1BQU1xQyxFQUVSLEtBQUssR0FDSCxPQUFPTSxFQUFTSSxPQUFPLElBRXpCLEtBQUssR0FDSCxPQUFPSixFQUFTSSxPQUFPLElBRXpCLEtBQUssR0FDTCxJQUFLLE1BQ0gsT0FBT0osRUFBU3pDLFVBR3JCLEtBQU0sS0FBTSxDQUFDLENBQUMsRUFBRyxHQUFJLEdBQUksSUFBSyxDQUFDLEdBQUcsQ0FBRSxHQUFJLEtBQU10QyxTQUduRCxTQUFTb0YsYUFBYUMsR0FDcEIsSUFBSUMsRUFBWSxFQUNoQixNQUFPLENBQ0xsRCxLQUFNLFdBQ0osT0FBT2tELEVBQVlELEVBQU1yQixRQUFTcUIsRUFBTUMsTUFFMUNDLFFBQVMsV0FDUCxPQUFPRCxFQUFZRCxFQUFNckIsU0FLL0IsSUFBSXdCLEdBQUszRyxVQUFtQixRQUFFNEcsZ0JBQWdCLENBQzVDQyxNQUFPQyxRQUFRQyxNQUNmQyxPQUFRRixRQUFRRyxTQUdsQkMsT0FBT0MsUUFBVSxDQUNmMUUsa0JBQW1CQSxrQkFDbkIrQixpQkFBa0JBLGlCQUNsQitCLGFBQWNBLGFBQ2RJLEdBQUlBIiwiZmlsZSI6InNlcmlhbGl6ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogICBzZXJpYWxpemVycy5qc1xuKlxuKlxuKiAgIEFydCBCcm93biwgYXJ0LmJyb3duQHF1dGV0LmNvbVxuKi9cbmltcG9ydCBzdHJlYW0gZnJvbSBcInN0cmVhbVwiO1xuaW1wb3J0IHJlYWRsaW5lIGZyb20gJ3JlYWRsaW5lJztcbmltcG9ydCB7Y3JlYXRlV3JpdGVTdHJlYW0sIGNyZWF0ZVJlYWRTdHJlYW19IGZyb20gXCJmc1wiO1xuaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuY29uc3Qge1JlYWRhYmxlfSA9IHN0cmVhbTtcbmNvbnN0IHBpcGVsaW5lID0gcHJvbWlzaWZ5KHN0cmVhbS5waXBlbGluZSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlU3RyaW5nVG9GaWxlKGxzLCBiYXNlLCBmaWxlKSB7XG4gIGF3YWl0IHdyaXRlU3RyaW5nQXJyYXlUb0ZpbGUoW2xzXSwgYmFzZSwgZmlsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlU3RyaW5nQXJyYXlUb0ZpbGUoc2EsIGJhc2UsIGZpbGUpIHtcbiAgaWYgKCFiYXNlKVxuICAgIGJhc2UgPSBvcy50bXBkaXIoKTtcbiAgY29uc3QgcmVhZGFibGUgPSBSZWFkYWJsZS5mcm9tKHNhLCB7ZW5jb2Rpbmc6ICd1dGY4J30pO1xuICBjb25zdCB3cml0YWJsZSA9IGNyZWF0ZVdyaXRlU3RyZWFtKGJhc2UgKyBcIi9cIiArIGZpbGUpO1xuICBhd2FpdCBwaXBlbGluZShyZWFkYWJsZSwgd3JpdGFibGUpO1xuICB3cml0YWJsZS5lbmQoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZFN0cmluZ0ZtRmlsZShscywgYmFzZSwgZmlsZSwgYkZsYXQgPSB0cnVlKSB7XG4gIGlmICghYmFzZSlcbiAgICBiYXNlID0gb3MudG1wZGlyKCk7XG4gIGNvbnN0IHJlYWRhYmxlU3RyZWFtID0gY3JlYXRlUmVhZFN0cmVhbShiYXNlICsgXCIvXCIgKyBmaWxlLCB7ZW5jb2Rpbmc6ICd1dGY4J30pO1xuICBhd2FpdCByZWFkYWJsZVRvU3RyaW5nKGxzLCByZWFkYWJsZVN0cmVhbSk7XG4gIGlmIChiRmxhdCkge1xuICAgIGxldCBmbGF0ID0gbHMucmVkdWNlKChtLCBzKSA9PiBtICs9IHMpO1xuICAgIGxzLmxlbmd0aCA9IDA7XG4gICAgbHMucHVzaChmbGF0KTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkYWJsZVRvU3RyaW5nKGxzLCByZWFkYWJsZSkge1xuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlYWRhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpKSB7XG4gICAgbHMucHVzaChjaHVuayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKGFycmF5KSB7XG4gIGxldCBuZXh0SW5kZXggPSAwO1xuICByZXR1cm4ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGhcbiAgICAgICAgPyBhcnJheVtuZXh0SW5kZXgrK11cbiAgICAgICAgOiBmYWxzZTtcbiAgICB9LFxuICAgIGhhc05leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdyaXRlU3RyaW5nVG9GaWxlOiB3cml0ZVN0cmluZ1RvRmlsZSxcbiAgcmVhZFN0cmluZ0ZtRmlsZTogcmVhZFN0cmluZ0ZtRmlsZSxcbiAgbWFrZUl0ZXJhdG9yOiBtYWtlSXRlcmF0b3IsXG4gIHJsOiBybCxcbn07XG4iXX0=
