// Generated by CoffeeScript 1.8.0

/*
   To define your AngularJS extensions for the custom templates in Mindbender,
   your own JavaScript/CoffeeScript code can be put at mindbender/extensions.js
   or mindbender/extensions.coffee file under the working directory where you
   start `mindbender gui`.  All files under the mindbender/ directory will be
   available under the same relative path, e.g., an AngularJS template stored
   in mindbender/foo.html will be available as "mindbender/foo.html".  Hence,
   you can use arbitrary number of files to define your extensions.
 */

(function() {
  angular.module("mindbender.extensions", ["mindbender.search"]).directive("mbSearchLink", function($location, DeepDiveSearch) {
    return {
      link: function($scope, $element, $attrs) {
        return $scope.$watch((function() {
          return $attrs.mbSearchLink;
        }), function() {
          var k, params, v;
          params = _.extend({}, DeepDiveSearch.params);
          params.s = $attrs.mbSearchLink;
          params.t = $attrs.mbSearchOnly;
          params.p = 1;
          return $element.attr("href", "#/search/" + (DeepDiveSearch.index == null ? "" : encodeURIComponent(DeepDiveSearch.index)) + "?" + (((function() {
            var _results;
            _results = [];
            for (k in params) {
              v = params[k];
              _results.push("" + (encodeURIComponent(k)) + "=" + (encodeURIComponent(v != null ? v : "")));
            }
            return _results;
          })()).join("&")));
        });
      }
    };
  }).directive("mbView", function(DeepDiveSearch) {
    return {
      scope: {
        mbView: "=",
        mbViewType: "@"
      },
      link: function($scope, $element, $attrs) {
        return $element.attr("href", "#/view/" + (encodeURIComponent(DeepDiveSearch.index)) + "/" + (encodeURIComponent($scope.mbViewType)) + "/?id=" + (encodeURIComponent($scope.mbView)) + (DeepDiveSearch.routing == null ? "" : "&routing=" + DeepDiveSearch.routing));
      }
    };
  }).filter("uri", function() {
    return function(s) {
      return encodeURIComponent(s);
    };
  });

}).call(this);

//# sourceMappingURL=extensions.js.map
