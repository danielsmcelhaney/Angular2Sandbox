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
/*@Component({
  selector: 'hello-world',
  template: '<h1>Hello {{name}}</h1>'
})*/
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.addArticle = function (title, link) {
        console.log('Adding article title: ', title.value, ' and link: ', link.value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'reddit',
            template: "\n   <form class=\"ui large form segment\">\n   <h3 class=\"ui header\">Add a Link</h3>\n  \n   <div class=\"field\">\n   <label for=\"title\">Title:</label>\n   <input name=\"title\" #newtitle>\n   </div>\n   <div class=\"field\">\n   <label for=\"link\">Link:</label>\n   <input name=\"link\" #newlink>\n   </div>\n   <button (click)=\"addArticle(newtitle, newlink)\">Submit button</button>\n   </form>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map