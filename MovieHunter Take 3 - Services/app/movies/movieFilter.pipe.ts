import {Pipe, PipeTransform} from 'angular2/core';
import {IMovie} from './movie';

@Pipe({
    name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

    transform(value: any, args: string[]): any {
        let filter = args[0].toLocaleLowerCase();
        return filter ? value.filter((movie:IMovie)=> movie.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}