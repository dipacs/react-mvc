"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AScene = /** @class */ (function (_super) {
    __extends(AScene, _super);
    function AScene(props) {
        var _this = _super.call(this, props) || this;
        _this._controller = _this.createControlller();
        _this._model = _this._controller.init(_this);
        _this.state = { version: 0 };
        return _this;
    }
    Object.defineProperty(AScene.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AScene.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    AScene.prototype.renderScene = function (model) {
        this._model = model;
        this.setState({ version: this.state.version + 1 });
    };
    return AScene;
}(React.Component));
exports.AScene = AScene;
var SceneState = /** @class */ (function () {
    function SceneState() {
    }
    return SceneState;
}());
exports.SceneState = SceneState;
//# sourceMappingURL=AScene.js.map