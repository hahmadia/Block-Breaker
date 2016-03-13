
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'Block Breaker Web GL.data';
    var REMOTE_PACKAGE_BASE = 'Block Breaker Web GL.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
    var REMOTE_PACKAGE_SIZE = 12154686;
    var PACKAGE_UUID = 'ab912202-0c04-425f-85ac-ea3ba4d206b5';
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'Il2CppData', true, true);
Module['FS_createPath']('/Il2CppData', 'Metadata', true, true);
Module['FS_createPath']('/', 'Resources', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 23432, 0, 0).open('GET', '/level0');
    new DataRequest(23432, 49352, 0, 0).open('GET', '/level1');
    new DataRequest(49352, 89904, 0, 0).open('GET', '/level10');
    new DataRequest(89904, 97308, 0, 0).open('GET', '/level11');
    new DataRequest(97308, 104712, 0, 0).open('GET', '/level12');
    new DataRequest(104712, 112488, 0, 0).open('GET', '/level13');
    new DataRequest(112488, 151248, 0, 0).open('GET', '/level2');
    new DataRequest(151248, 188800, 0, 0).open('GET', '/level3');
    new DataRequest(188800, 250496, 0, 0).open('GET', '/level4');
    new DataRequest(250496, 302440, 0, 0).open('GET', '/level5');
    new DataRequest(302440, 358424, 0, 0).open('GET', '/level6');
    new DataRequest(358424, 416224, 0, 0).open('GET', '/level7');
    new DataRequest(416224, 456360, 0, 0).open('GET', '/level8');
    new DataRequest(456360, 571296, 0, 0).open('GET', '/level9');
    new DataRequest(571296, 600232, 0, 0).open('GET', '/mainData');
    new DataRequest(600232, 600716, 0, 0).open('GET', '/methods_pointedto_by_uievents.xml');
    new DataRequest(600716, 1502176, 0, 0).open('GET', '/sharedassets0.assets');
    new DataRequest(1502176, 2739278, 0, 0).open('GET', '/sharedassets0.resource');
    new DataRequest(2739278, 4401578, 0, 0).open('GET', '/sharedassets1.assets');
    new DataRequest(4401578, 4409745, 0, 0).open('GET', '/sharedassets1.resource');
    new DataRequest(4409745, 4414201, 0, 0).open('GET', '/sharedassets10.assets');
    new DataRequest(4414201, 4421681, 0, 0).open('GET', '/sharedassets11.assets');
    new DataRequest(4421681, 4426037, 0, 0).open('GET', '/sharedassets12.assets');
    new DataRequest(4426037, 4463601, 0, 0).open('GET', '/sharedassets12.resource');
    new DataRequest(4463601, 4467961, 0, 0).open('GET', '/sharedassets13.assets');
    new DataRequest(4467961, 4520962, 0, 0).open('GET', '/sharedassets13.resource');
    new DataRequest(4520962, 4877930, 0, 0).open('GET', '/sharedassets14.assets');
    new DataRequest(4877930, 6240786, 0, 0).open('GET', '/sharedassets2.assets');
    new DataRequest(6240786, 7544706, 0, 0).open('GET', '/sharedassets3.assets');
    new DataRequest(7544706, 7549162, 0, 0).open('GET', '/sharedassets4.assets');
    new DataRequest(7549162, 8932598, 0, 0).open('GET', '/sharedassets5.assets');
    new DataRequest(8932598, 8937078, 0, 0).open('GET', '/sharedassets6.assets');
    new DataRequest(8937078, 8941558, 0, 0).open('GET', '/sharedassets7.assets');
    new DataRequest(8941558, 8946038, 0, 0).open('GET', '/sharedassets8.assets');
    new DataRequest(8946038, 8950458, 0, 0).open('GET', '/sharedassets9.assets');
    new DataRequest(8950458, 10076998, 0, 0).open('GET', '/Il2CppData/Metadata/global-metadata.dat');
    new DataRequest(10076998, 11652034, 0, 0).open('GET', '/Resources/unity_default_resources');
    new DataRequest(11652034, 12154686, 0, 0).open('GET', '/Resources/unity_builtin_extra');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // Reuse the bytearray from the XHR as the source for file reads.
      DataRequest.prototype.byteArray = byteArray;
          DataRequest.prototype.requests["/level0"].onload();
          DataRequest.prototype.requests["/level1"].onload();
          DataRequest.prototype.requests["/level10"].onload();
          DataRequest.prototype.requests["/level11"].onload();
          DataRequest.prototype.requests["/level12"].onload();
          DataRequest.prototype.requests["/level13"].onload();
          DataRequest.prototype.requests["/level2"].onload();
          DataRequest.prototype.requests["/level3"].onload();
          DataRequest.prototype.requests["/level4"].onload();
          DataRequest.prototype.requests["/level5"].onload();
          DataRequest.prototype.requests["/level6"].onload();
          DataRequest.prototype.requests["/level7"].onload();
          DataRequest.prototype.requests["/level8"].onload();
          DataRequest.prototype.requests["/level9"].onload();
          DataRequest.prototype.requests["/mainData"].onload();
          DataRequest.prototype.requests["/methods_pointedto_by_uievents.xml"].onload();
          DataRequest.prototype.requests["/sharedassets0.assets"].onload();
          DataRequest.prototype.requests["/sharedassets0.resource"].onload();
          DataRequest.prototype.requests["/sharedassets1.assets"].onload();
          DataRequest.prototype.requests["/sharedassets1.resource"].onload();
          DataRequest.prototype.requests["/sharedassets10.assets"].onload();
          DataRequest.prototype.requests["/sharedassets11.assets"].onload();
          DataRequest.prototype.requests["/sharedassets12.assets"].onload();
          DataRequest.prototype.requests["/sharedassets12.resource"].onload();
          DataRequest.prototype.requests["/sharedassets13.assets"].onload();
          DataRequest.prototype.requests["/sharedassets13.resource"].onload();
          DataRequest.prototype.requests["/sharedassets14.assets"].onload();
          DataRequest.prototype.requests["/sharedassets2.assets"].onload();
          DataRequest.prototype.requests["/sharedassets3.assets"].onload();
          DataRequest.prototype.requests["/sharedassets4.assets"].onload();
          DataRequest.prototype.requests["/sharedassets5.assets"].onload();
          DataRequest.prototype.requests["/sharedassets6.assets"].onload();
          DataRequest.prototype.requests["/sharedassets7.assets"].onload();
          DataRequest.prototype.requests["/sharedassets8.assets"].onload();
          DataRequest.prototype.requests["/sharedassets9.assets"].onload();
          DataRequest.prototype.requests["/Il2CppData/Metadata/global-metadata.dat"].onload();
          DataRequest.prototype.requests["/Resources/unity_default_resources"].onload();
          DataRequest.prototype.requests["/Resources/unity_builtin_extra"].onload();
          Module['removeRunDependency']('datafile_Block Breaker Web GL.data');

    };
    Module['addRunDependency']('datafile_Block Breaker Web GL.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
