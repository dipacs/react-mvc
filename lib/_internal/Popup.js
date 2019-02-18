"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.onFadeClicked = _this.onFadeClicked.bind(_this);
        return _this;
    }
    Popup.prototype.onFadeClicked = function () {
        if (this.props.onFadeClicked != null) {
            this.props.onFadeClicked();
        }
    };
    Popup.prototype.render = function () {
        return (React.createElement("div", { style: this.createFadeStyle(), onClick: this.onFadeClicked },
            React.createElement("div", { style: { display: "table", width: "100%", minHeight: "100%", height: '100%' } },
                React.createElement("div", { style: { display: "table-row", height: "40px" } },
                    React.createElement("div", { style: { display: "table-cell" } })),
                React.createElement("div", { style: { display: "table-row" } },
                    React.createElement("div", { style: { display: "table-cell", textAlign: "center", verticalAlign: "middle" } },
                        React.createElement("div", { style: { display: "inline-block" } },
                            React.createElement("div", { style: { display: 'inline-block', textAlign: 'left' }, onClick: function (e) { e.stopPropagation(); } }, this.props.children)))),
                React.createElement("div", { style: { display: "table-row", height: "40px" } },
                    React.createElement("div", { style: { display: "table-cell" } })))));
    };
    Popup.prototype.createFadeStyle = function () {
        return {
            position: "fixed",
            backgroundColor: this.props.fadeColor == null ? "rgba(0,0,0, 0.7)" : this.props.fadeColor,
            overflow: "auto",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px",
            zIndex: this.props.zIndex ? this.props.zIndex : 10000,
        };
    };
    return Popup;
}(React.Component));
exports.Popup = Popup;
var PopupProps = /** @class */ (function () {
    function PopupProps() {
    }
    return PopupProps;
}());
exports.PopupProps = PopupProps;
//# sourceMappingURL=Popup.js.map