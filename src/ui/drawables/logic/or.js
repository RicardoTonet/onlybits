/**
 * @module Or
 *
 * Represents the OR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "OR_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/OR_ANSI.svg",
            endpoints: [
                { anchor: [0, 0.30, -1, 0, 0, 0] },
                { anchor: [0, 0.70, -1, 0, 0, 0] },
                { anchor: [1, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();