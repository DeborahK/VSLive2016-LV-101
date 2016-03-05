System.register(['angular2/core', 'angular2/router', './movie.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, movie_service_1;
    var MovieDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            }],
        execute: function() {
            MovieDetailComponent = (function () {
                function MovieDetailComponent(_movieService, _router, _routeParams) {
                    this._movieService = _movieService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = "Movie Detail";
                }
                MovieDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.getMovie(id);
                };
                MovieDetailComponent.prototype.getMovie = function (id) {
                    this.movie = this._movieService.getMovie(id);
                };
                MovieDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Movies']);
                };
                MovieDetailComponent.prototype.convertToDate = function (dateString) {
                    return new Date(dateString);
                };
                MovieDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/movies/movie-detail.component.html',
                        styleUrls: ['app/movies/movie-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.Router, router_1.RouteParams])
                ], MovieDetailComponent);
                return MovieDetailComponent;
            }());
            exports_1("MovieDetailComponent", MovieDetailComponent);
        }
    }
});
//# sourceMappingURL=movie-detail.component.js.map