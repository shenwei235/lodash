define(['./_apply', './_assignInDefaults', './assignInWith', './rest'], function(apply, assignInDefaults, assignInWith, rest) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = rest(function(args) {
    args.push(undefined, assignInDefaults);
    return apply(assignInWith, undefined, args);
  });

  return defaults;
});
