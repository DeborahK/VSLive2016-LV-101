System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MovieService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieService = (function () {
                function MovieService() {
                }
                MovieService.prototype.getMovies = function () {
                    return [
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
                            "director": "Peter Jackson",
                            "imageurl": "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers_small.jpg",
                            "movieId": 2,
                            "mpaa": "pg-13",
                            "releaseDate": "2002-12-18T00:00:00",
                            "title": "The Lord of the Rings: The Two Towers",
                            "price": 14.95,
                            "starRating": 4.2,
                            "approvalRating": 0.94
                        },
                        {
                            "director": "Peter Jackson",
                            "imageurl": "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Return-Of-The-King_small.jpg",
                            "movieId": 3,
                            "mpaa": "pg-13",
                            "releaseDate": "2003-12-17T00:00:00",
                            "title": "The Lord of the Rings: The Return of the King",
                            "price": 15.95,
                            "starRating": 4.5,
                            "approvalRating": 0.9895
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
                MovieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MovieService);
                return MovieService;
            }());
            exports_1("MovieService", MovieService);
        }
    }
});
//# sourceMappingURL=movie.service.js.map