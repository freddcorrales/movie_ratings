webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var parent_component_1 = __webpack_require__("./src/app/parent/parent.component.ts");
var movie_list_component_1 = __webpack_require__("./src/app/parent/movie-list/movie-list.component.ts");
var movie_new_component_1 = __webpack_require__("./src/app/parent/movie-new/movie-new.component.ts");
var movie_display_component_1 = __webpack_require__("./src/app/parent/movie-display/movie-display.component.ts");
var movie_review_component_1 = __webpack_require__("./src/app/parent/movie-review/movie-review.component.ts");
var routes = [
    {
        path: "", component: parent_component_1.ParentComponent, children: [
            { path: "", component: movie_list_component_1.MovieListComponent },
            { path: "new", component: movie_new_component_1.MovieNewComponent },
            //{path:"edit/:id",component: RestEditComponent},
            { path: "display/:id", component: movie_display_component_1.MovieDisplayComponent },
            { path: "review/:id", component: movie_review_component_1.MovieReviewComponent }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var parent_component_1 = __webpack_require__("./src/app/parent/parent.component.ts");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var rev_service_1 = __webpack_require__("./src/app/rev.service.ts");
var movie_list_component_1 = __webpack_require__("./src/app/parent/movie-list/movie-list.component.ts");
var movie_new_component_1 = __webpack_require__("./src/app/parent/movie-new/movie-new.component.ts");
var movie_display_component_1 = __webpack_require__("./src/app/parent/movie-display/movie-display.component.ts");
var movie_review_component_1 = __webpack_require__("./src/app/parent/movie-review/movie-review.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                parent_component_1.ParentComponent,
                movie_list_component_1.MovieListComponent,
                movie_new_component_1.MovieNewComponent,
                movie_display_component_1.MovieDisplayComponent,
                movie_review_component_1.MovieReviewComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            providers: [
                movie_service_1.MovieService,
                rev_service_1.RevService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/movie.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var MovieService = /** @class */ (function () {
    function MovieService(_http) {
        this._http = _http;
    }
    MovieService.prototype.getMovies = function () {
        return this._http.get("/movies")
            .map(function (data) { return data.json(); }).toPromise();
    };
    MovieService.prototype.createMovie = function (movie) {
        return this._http.post("/movies/new", movie)
            .map(function (data) { return data.json(); }).toPromise();
    };
    MovieService.prototype.update = function (movie, id) {
        console.log("eo", movie);
        return this._http.post("/movies/" + id, movie)
            .map(function (data) { return data.json(); }).toPromise(); //we are also passing the user object as a post data so the put of the post request it recludes the id in the URL and it also includes the object there
    };
    MovieService.prototype.getMovieById = function (id) {
        return this._http.get("/movie/" + id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    MovieService.prototype.destroy = function (id) {
        return this._http.delete("/movie/" + id + "/destroy")
            .map(function (data) { return data.json(); }).toPromise();
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;


/***/ }),

/***/ "./src/app/parent/movie-display/movie-display.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/movie-display/movie-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movies.data\">\n\n\n    <h2 *ngIf=\"movies.data.movie_name\">Reviews for {{movies.data.movie_name}}</h2>\n\n</div>\n\n<button (click)=\"deleteMovie()\">Delete</button><br><br>\n\n<div>\n        <Table border=\"1\">\n            <tr>\n                <th>Name</th>\n                <th>Stars</th>\n                <th>Description</th>\n                <th>Delete Review</th>\n            </tr>\n          \n            <tr *ngFor=\"let review of reviews\">\n                <td>{{review.name}}</td>\n                <td>{{review.stars}}</td>\n                <td>{{review.description}}</td>\n                <td><button (click)=\"deleteRev(review._id)\">Delete</button></td>\n        </Table>\n    </div><br>\n\n<button [routerLink]=\"['/']\">Home Page</button><br><br>\n"

/***/ }),

/***/ "./src/app/parent/movie-display/movie-display.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var rev_service_1 = __webpack_require__("./src/app/rev.service.ts");
var MovieDisplayComponent = /** @class */ (function () {
    function MovieDisplayComponent(_MovieService, _route, _Router, _RevService) {
        this._MovieService = _MovieService;
        this._route = _route;
        this._Router = _Router;
        this._RevService = _RevService;
        this.movies = [];
    } //connects to the service that connects to the backend
    MovieDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.movieId = params.id; });
        this._MovieService.getMovieById(this.movieId).then(function (movies) { return _this.movies = movies; });
        this.getOne();
        this.getReviews();
    };
    MovieDisplayComponent.prototype.getReviews = function () {
        var _this = this;
        this._RevService.getRevs(this.movieId).then(function (review) { _this.reviews = review; console.log(review); })
            .catch(function (err) { return console.log(err); });
    };
    MovieDisplayComponent.prototype.getOne = function () {
        var _this = this;
        this._MovieService.getMovieById(this.movieId).then(function (movies) { return _this.movies = movies; })
            .catch(function (err) { return console.log(err); });
        //the orange rests is what we are getting from the back abd setting it to the array variable rests
    };
    MovieDisplayComponent.prototype.deleteMovie = function () {
        var _this = this;
        this._MovieService.destroy(this.movieId).then(function (movie) { return _this._Router.navigateByUrl("/"); })
            .catch(function (err) { return console.log(err); });
    };
    MovieDisplayComponent.prototype.deleteRev = function (id) {
        var _this = this;
        console.log(id);
        this._RevService.destroy(id).then(function (review) { return _this._Router.navigateByUrl("/"); })
            .catch(function (err) { return console.log(err); });
        this.getReviews();
    };
    MovieDisplayComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-display',
            template: __webpack_require__("./src/app/parent/movie-display/movie-display.component.html"),
            styles: [__webpack_require__("./src/app/parent/movie-display/movie-display.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.ActivatedRoute,
            router_1.Router,
            rev_service_1.RevService])
    ], MovieDisplayComponent);
    return MovieDisplayComponent;
}());
exports.MovieDisplayComponent = MovieDisplayComponent;


/***/ }),

/***/ "./src/app/parent/movie-list/movie-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Movie List</h2>\n\n<a [routerLink]=\"['new']\">Add a new movie</a><br><br>\n\n\n<table border=\"1\">\n  <tr>\n    <th>Movie Title</th>\n    <th>Action</th>\n    <!-- <th>Avg Star Rating</th> -->\n  </tr>\n  <tr *ngFor= \"let movie of movies\">\n    <td>{{movie.movie_name}}</td>\n    <td> <button [routerLink]=\"['display', movie._id]\">Read Reviews</button> | \n      <button [routerLink]=\"['review', movie._id]\">Write a Review</button>\n    <!-- <td><button>Average: {{calculatedAverage(MyData)}}</button></td>  -->\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/parent/movie-list/movie-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var rev_service_1 = __webpack_require__("./src/app/rev.service.ts");
var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(_MovieService, _route, _Router, _RevService) {
        this._MovieService = _MovieService;
        this._route = _route;
        this._Router = _Router;
        this._RevService = _RevService;
        this.movies = [];
    } //connects to the service that connects to the backend
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.movieId = params.id; });
        this._MovieService.getMovieById(this.movieId).then(function (movie) { return _this.movie = movie; });
        this.getAllRests();
    };
    MovieListComponent.prototype.getAllRests = function () {
        var _this = this;
        this._MovieService.getMovies().then(function (movies) { return _this.movies = movies; })
            .catch(function (err) { return console.log(err); });
        //the orange rests is what we are getting from the back abd setting it to the array variable rests
    };
    // deleteRest(id){
    //   console.log(id)
    //   this._RestService.destroy(id).then( rest => this._Router.navigateByUrl("/")) 
    //   .catch(err => console.log(err)
    // );
    // this.getAllRests() 
    // }
    MovieListComponent.prototype.getReviews = function () {
        var _this = this;
        this._RevService.getRevs(this.movieId).then(function (review) { _this.reviews = review; console.log(review); })
            .catch(function (err) { return console.log(err); });
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-list',
            template: __webpack_require__("./src/app/parent/movie-list/movie-list.component.html"),
            styles: [__webpack_require__("./src/app/parent/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.ActivatedRoute,
            router_1.Router,
            rev_service_1.RevService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;


/***/ }),

/***/ "./src/app/parent/movie-new/movie-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/movie-new/movie-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Submit a movie and your review</h2>\n<p *ngIf=\"errors\" class=\"errors\">{{errors}}</p>\n    \n    \n<form (submit)=\"createNew()\" *ngIf=\"newMovie\"  name=\"movForm\" #movForm=\"ngForm\">\n      \n  Movie Name:<input type=\"text\" name=\"newMovie.movie_name\" [(ngModel)]=\"newMovie.movie_name\" placeholder=\"Movie name\" class=\"form-control\" required minlength=\"3\" #rMName=\"ngModel\"><br><br>\n  <div *ngIf=\"rMName.invalid && (rMName.dirty || rMName.touched)\" class=\"alert alert-danger\">\n    <div *ngIf=\"rMName.errors.required\">\n      <p>Yo the movie name is missing bro!</p>\n    </div>\n    <div *ngIf=\"rMName.errors.minlength\">\n      <p>Must be at least 3 characters long</p>\n    </div>\n  </div>\n\n  Name:<input type=\"text\" name=\"newMovie.name\" [(ngModel)]=\"newMovie.name\" placeholder=\"Name\" class=\"form-control\" required minlength=\"3\" #rName=\"ngModel\"><br><br>\n  <div *ngIf=\"rName.invalid && (rName.dirty || rName.touched)\" class=\"alert alert-danger\">\n    <div *ngIf=\"rName.errors.required\">\n      <p>Your name is missing bro!</p>\n    </div>\n    <div *ngIf=\"rName.errors.minlength\">\n      <p>Must be at least 3 characters long</p>\n    </div>\n  </div>\n\n  Stars:<input type=\"number\" min=\"1\" max=\"5\" value=\"1\" name=\"newMovie.movie_stars\" [(ngModel)]=\"newMovie.movie_stars\" class=\"form-control\" required minlength=\"1\" #rStars=\"ngModel\"><br><br>\n  <div *ngIf=\"rStars.invalid && (rStars.dirty || rStars.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"rStars.errors.required\">\n        <p>Yo the Stars type is missing bro!</p>\n      </div>\n      <div *ngIf=\"rStars.errors.minlength\">\n        <p>Must be at least 1 characters long dude!</p>\n      </div>\n  </div>\n\n  Review:<input type=\"text\" name=\"newMovie.description\" [(ngModel)]=\"newMovie.description\" placeholder=\"description\" class=\"form-control\" required minlength=\"3\" #rReview=\"ngModel\"><br><br>\n  <div *ngIf=\"rReview.invalid && (rReview.dirty || rReview.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"rReview.errors.required\">\n        <p>Yo the description is missing bro!</p>\n      </div>\n      <div *ngIf=\"rReview.errors.minlength\">\n        <p>Must be at least 3 characters long dude!</p>\n      </div>\n  </div>\n\n  <div *ngIf= \"movForm.invalid\">\n    <input type=\"submit\" value=\"Submit\" disabled >\n  </div>\n\n  <div *ngIf= \"movForm.valid\">\n    <input type=\"submit\" value=\"submit\">\n  </div>\n      \n</form>\n<button [routerLink]=\"['/']\">Cancel</button>\n    \n    \n    \n    "

/***/ }),

/***/ "./src/app/parent/movie-new/movie-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MovieNewComponent = /** @class */ (function () {
    function MovieNewComponent(_MovieService, _Router) {
        this._MovieService = _MovieService;
        this._Router = _Router;
    }
    MovieNewComponent.prototype.init = function () {
        this.newMovie = {
            movie_name: "",
            name: "",
            movie_stars: Number,
            description: "",
        };
    };
    MovieNewComponent.prototype.ngOnInit = function () {
        this.init();
    };
    MovieNewComponent.prototype.createNew = function () {
        var _this = this;
        this._MovieService.createMovie(this.newMovie).then(function (movie) {
            if (movie.error) {
                _this.errors = movie.error;
            }
            else {
                _this._Router.navigateByUrl("/");
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    MovieNewComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-new',
            template: __webpack_require__("./src/app/parent/movie-new/movie-new.component.html"),
            styles: [__webpack_require__("./src/app/parent/movie-new/movie-new.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router])
    ], MovieNewComponent);
    return MovieNewComponent;
}());
exports.MovieNewComponent = MovieNewComponent;


/***/ }),

/***/ "./src/app/parent/movie-review/movie-review.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/movie-review/movie-review.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"movies\">\n    <h2>Write a review for {{movies.data.movie_name}}</h2>\n    </div>\n    \n    <p *ngIf=\"errors\" class=\"errors\">{{errors}}</p>\n    \n    \n    <form (submit)=\"createNew()\" *ngIf=\"newRev\"  name=\"revForm\" #revForm=\"ngForm\">\n      \n        Name:<input type=\"text\" name=\"newRev.name\" [(ngModel)]=\"newRev.name\" placeholder=\"Name\" class=\"form-control\" required minlength=\"3\" #rName=\"ngModel\"><br><br>\n        <div *ngIf=\"rName.invalid && (rName.dirty || rName.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"rName.errors.required\">\n            <p>Yo the restaurant name is missing bro!</p>\n          </div>\n          <div *ngIf=\"rName.errors.minlength\">\n            <p>Must be at least 3 characters long</p>\n          </div>\n        </div>\n      \n      \n      \n      \n      \n      \n        Review:<input type=\"text\" name=\"newRev.description\" [(ngModel)]=\"newRev.description\" placeholder=\"description\" class=\"form-control\" required minlength=\"3\" #rReview=\"ngModel\"><br><br>\n        <div *ngIf=\"rReview.invalid && (rReview.dirty || rReview.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"rReview.errors.required\">\n              <p>Yo the food type is missing bro!</p>\n            </div>\n            <div *ngIf=\"rReview.errors.minlength\">\n              <p>Must be at least 3 characters long dude!</p>\n            </div>\n        </div>\n    \n    \n        Stars:\n        <!-- <input type=\"number\" min=\"1\" max=\"5\" value=\"1\" name=\"newRev.stars\" [(ngModel)]=\"newRev.stars\" class=\"form-control\" required minlength=\"1\" #rStars=\"ngModel\">\n        <div *ngIf=\"rStars.invalid && (rStars.dirty || rStars.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"rStars.errors.required\">\n              <p>Yo the Stars type is missing bro!</p>\n            </div>\n            <div *ngIf=\"rStars.errors.minlength\">\n              <p>Must be at least 1 characters long dude!</p>\n            </div>\n        </div> -->\n\n        <select type=\"number\" name=\"newRev.stars\" [(ngModel)]=\"newRev.stars\" class=\"form-control\" required minlength=\"1\" #rStars=\"ngModel\" >\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n          </select>\n        \n      \n        \n        <div *ngIf=\"revForm.invalid\">\n          <input type=\"submit\" value=\"Submit\" disabled>\n        </div>\n      \n        <div *ngIf=\"revForm.valid\">\n            <input type=\"submit\" value=\"submit\">\n        </div>\n      \n      \n      </form>\n      \n      <button [routerLink]=\"['/']\">Cancel</button>\n    \n    \n    \n    "

/***/ }),

/***/ "./src/app/parent/movie-review/movie-review.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rev_service_1 = __webpack_require__("./src/app/rev.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var MovieReviewComponent = /** @class */ (function () {
    function MovieReviewComponent(_RevService, _Router, _MovieService, _route) {
        this._RevService = _RevService;
        this._Router = _Router;
        this._MovieService = _MovieService;
        this._route = _route;
    }
    MovieReviewComponent.prototype.init = function () {
        this.newRev = {
            name: "",
            stars: Number,
            reviews: "",
            movie_id: this.movieId
        };
    };
    MovieReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.movieId = params.id; });
        this._MovieService.getMovieById(this.movieId).then(function (movies) { return _this.movies = movies; });
        this.init();
        this.getOne();
    };
    MovieReviewComponent.prototype.createNew = function () {
        var _this = this;
        this._RevService.createRev(this.newRev).then(function (movie) {
            if (movie.error) {
                _this.errors = movie.error;
            }
            else {
                _this._Router.navigateByUrl("/");
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    MovieReviewComponent.prototype.getOne = function () {
        var _this = this;
        this._MovieService.getMovieById(this.movieId).then(function (movies) { return _this.movies = movies; })
            .catch(function (err) { return console.log(err); });
    };
    MovieReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-review',
            template: __webpack_require__("./src/app/parent/movie-review/movie-review.component.html"),
            styles: [__webpack_require__("./src/app/parent/movie-review/movie-review.component.css")]
        }),
        __metadata("design:paramtypes", [rev_service_1.RevService,
            router_1.Router,
            movie_service_1.MovieService,
            router_1.ActivatedRoute])
    ], MovieReviewComponent);
    return MovieReviewComponent;
}());
exports.MovieReviewComponent = MovieReviewComponent;


/***/ }),

/***/ "./src/app/parent/parent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Squishy Tomatoes</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.movies = [];
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'app-parent',
            template: __webpack_require__("./src/app/parent/parent.component.html"),
            styles: [__webpack_require__("./src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;


/***/ }),

/***/ "./src/app/rev.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var RevService = /** @class */ (function () {
    function RevService(_http) {
        this._http = _http;
    }
    RevService.prototype.createRev = function (reviewNew) {
        return this._http.post("/reviews/new/", reviewNew)
            .map(function (data) { return data.json(); }).toPromise();
    };
    RevService.prototype.getRevs = function (restId) {
        console.log(restId);
        return this._http.get("/reviews/all/" + restId)
            .map(function (data) { return data.json(); }).toPromise();
    };
    RevService.prototype.destroy = function (id) {
        return this._http.delete("/review/" + id + "/destroy")
            .map(function (data) { return data.json(); }).toPromise();
    };
    RevService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RevService);
    return RevService;
}());
exports.RevService = RevService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map