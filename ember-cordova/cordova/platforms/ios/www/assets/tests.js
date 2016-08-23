define('taedova/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('taedova/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('taedova/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('taedova/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'taedova/tests/helpers/start-app', 'taedova/tests/helpers/destroy-app'], function (exports, _qunit, _taedovaTestsHelpersStartApp, _taedovaTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _taedovaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _taedovaTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('taedova/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('taedova/tests/helpers/resolver', ['exports', 'ember/resolver', 'taedova/config/environment'], function (exports, _emberResolver, _taedovaConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _taedovaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _taedovaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('taedova/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('taedova/tests/helpers/start-app', ['exports', 'ember', 'taedova/app', 'taedova/config/environment'], function (exports, _ember, _taedovaApp, _taedovaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _taedovaConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _taedovaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('taedova/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('taedova/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('taedova/tests/test-helper', ['exports', 'taedova/tests/helpers/resolver', 'ember-qunit'], function (exports, _taedovaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_taedovaTestsHelpersResolver['default']);
});
define('taedova/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('taedova/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map