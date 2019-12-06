import mongoose from 'mongoose';
import { IMovieModel } from './movieModel';

export default class Helper {

  static connectDatabase():void {
    const uri:string = 'mongodb://127.0.0.1:27017/movies';
    mongoose.connect(uri, { useNewUrlParser: true });
  }

  static isValid (input:unknown, validators:Array<Function>):boolean {
    try {
      return validators.every((validator:Function) => validator(input));
    }  catch (error) {
      return false;
    }
  }

  static validateIdStringIsNumeric (id:string):boolean {
    const regExp:RegExp = /^\d+$/;
    if (!id.match(regExp)) {
      return false;
    }
    return true;
  }

  static hasTitle (movie:IMovieModel):boolean {
    if (movie && movie.title) {
      return true;
    }
    throw new Error('Error: Película sin título');
  }
}