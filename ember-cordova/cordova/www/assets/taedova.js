"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('taedova/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'taedova/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _taedovaConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _taedovaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _taedovaConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _taedovaConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('taedova/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'taedova/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _taedovaConfigEnvironment) {

  var name = _taedovaConfigEnvironment['default'].APP.name;
  var version = _taedovaConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('taedova/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('taedova/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('taedova/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'taedova/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _taedovaConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_taedovaConfigEnvironment['default'].APP.name, _taedovaConfigEnvironment['default'].APP.version)
  };
});
define('taedova/initializers/export-application-global', ['exports', 'ember', 'taedova/config/environment'], function (exports, _ember, _taedovaConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_taedovaConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _taedovaConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_taedovaConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('taedova/router', ['exports', 'ember', 'taedova/config/environment'], function (exports, _ember, _taedovaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _taedovaConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('taedova/services/cordova', ['exports', 'ember-cordova/services/cordova'], function (exports, _emberCordovaServicesCordova) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesCordova['default'];
    }
  });
});
define('taedova/services/device/platform', ['exports', 'ember-cordova/services/device/platform'], function (exports, _emberCordovaServicesDevicePlatform) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDevicePlatform['default'];
    }
  });
});
define('taedova/services/device/splashscreen', ['exports', 'ember-cordova/services/device/splashscreen'], function (exports, _emberCordovaServicesDeviceSplashscreen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDeviceSplashscreen['default'];
    }
  });
});
define("taedova/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "taedova/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('taedova/config/environment', ['ember'], function(Ember) {
  var prefix = 'taedova';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("taedova/app")["default"].create({"name":"taedova","version":"0.0.0+978ad012"});
}

/* jshint ignore:end */
//# sourceMappingURL=taedova.map