/**
 * @module Utils
 *
 * Set of utility functions.
 *
 * @return {Object} Public methods.
 */
module.exports = (function () {

    /**
     * Checks if object is empty, i.e, has no properties.
     *
     * @private
     * @param  {Object}  obj Object to check.
     * @return {Boolean}
     */
    function isEmpty (obj) {
        return Object.keys(obj).length === 0;
    }

    /**
     * Validates an object against a "default" one. Check if new properties exist
     * on "default" object and changes to new value.
     *
     * @private
     * @param  {Object} default_obj "Default" object. Has the valid properties.
     * @param  {Object} obj         Object to be whitelisted.
     * @return {null}
     */
    function whiteListObject (default_obj, obj) {
        if (typeof obj === "object" && !isEmpty(obj)) {
            for (var prop in obj) {
                // Check if property exist and the new value is of the same type.
                if (default_obj.hasOwnProperty(prop) &&
                    typeof default_obj[prop] === typeof obj[prop]){

                    // If property value is also an object, go recursive.
                    if (typeof obj[prop] === "object") {
                        if (!isEmpty(obj[prop])) {
                            whiteListObject(default_obj[prop], obj[prop]);
                        }
                    } else {
                        default_obj[prop] = obj[prop];
                    }
                }
            }
        }
    }

    return {
        isEmpty: isEmpty,

        whiteListObject: whiteListObject
    }
})();