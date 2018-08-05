"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AController = /** @class */ (function () {
    function AController() {
    }
    Object.defineProperty(AController.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    AController.prototype.render = function (model) {
        this._model = model;
        this._renderer.renderScene(model);
    };
    AController.prototype.init = function (renderer) {
        if (renderer == null) {
            throw new Error('The renderer parameter can not be null!');
        }
        this._renderer = renderer;
        this._model = this.createInitialModel();
        return this._model;
    };
    return AController;
}());
exports.AController = AController;
//# sourceMappingURL=AController.js.map