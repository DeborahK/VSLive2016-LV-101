System.register(['angular2/core', './movieFilter.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movieFilter_pipe_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movieFilter_pipe_1_1) {
                movieFilter_pipe_1 = movieFilter_pipe_1_1;
            }],
        execute: function() {
            MovieListComponent = (function () {
                function MovieListComponent() {
                    this.pageTitle = "Movie List";
                    this.showImage = false;
                }
                MovieListComponent.prototype.ngOnInit = function () { this.getMovies(); };
                MovieListComponent.prototype.getMovies = function () {
                    this.movies = [
                        {
                            "director": "Peter Jackson",
                            "imageurl": "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg",
                            "movieId": 1,
                            "mpaa": "pg-13",
                            "releaseDate": "2001-12-19T00:00:00",
                            "title": "The Lord of the Rings: The Fellowship of the Ring",
                            "price": 12.95,
                            "starRating": 4.88,
                            "approvalRating": 0.97
                        },
                        {
                            "director": "Fred Wolf",
                            "imageurl": null,
                            "movieId": 4,
                            "mpaa": "nr",
                            "releaseDate": "1971-02-02T00:00:00",
                            "title": "The Point",
                            "price": 9.95,
                            "starRating": 4.9,
                            "approvalRating": 0.9295
                        }
                    ];
                };
                MovieListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                MovieListComponent.prototype.convertToDate = function (dateString) {
                    return new Date(dateString);
                };
                MovieListComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-movies',
                        templateUrl: 'app/movies/movie-list.component.html',
                        styleUrls: ['app/movies/movie-list.component.css'],
                        pipes: [movieFilter_pipe_1.MovieFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieListComponent);
                return MovieListComponent;
            })();
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map