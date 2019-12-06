import { Movie, IMovieModel } from './movieModel';
import DBManager from '../../DBManager';

export default class MoviesController {
  static async getAllMovies(): Promise<IMovieModel[]> {
    await DBManager.connectDatabase();
    const users = await Movie.find();
    return users;
  }

  static async getMovie(id: string): Promise<IMovieModel> {
    await DBManager.connectDatabase();
    const user = await Movie.findById(id);
    return user;
  }

  static async addMovie(body): Promise<IMovieModel> {
    await DBManager.connectDatabase();
    const { username, email, password } = body;
    const user: IMovieModel = new Movie({
      username,
      email,
      password
    });
    await user.save();
    return user;
  }

  static async deleteUser(id: string): Promise<IMovieModel> {
    await DBManager.connectDatabase();
    const user = await User.findByIdAndDelete(id);
    return user;
  }

  static async updateUser(id: string, body): Promise<IMovieModel> {
    await DBManager.connectDatabase();
    const user = await User.findByIdAndUpdate(id, body);
    return user;
  }
}
