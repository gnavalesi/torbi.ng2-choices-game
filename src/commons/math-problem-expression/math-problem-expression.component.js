"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MathProblemExpression = (function () {
    function MathProblemExpression() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MathProblemExpression.prototype, "problemExpression", void 0);
    MathProblemExpression = __decorate([
        core_1.Component({
            selector: 'math-problem-expression',
            template: "\n  <div style=\"margin-top: -10px; color: white\">\n\t<h3 [MathJax]=\"'$$'+problemExpression+'$$'\"></h3>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MathProblemExpression);
    return MathProblemExpression;
}());
exports.MathProblemExpression = MathProblemExpression;
//# sourceMappingURL=math-problem-expression.component.js.map