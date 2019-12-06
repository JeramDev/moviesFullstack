import { Document, Schema, Model, model } from 'mongoose';

export interface IMovieModel extends Document {
  title: string,
  description: string,
  likes: number,
  updated: Date,
  created: Date
}

const MovieSchema:Schema = new Schema ({
  title: { type:String, required:true },
  description: String,
  likes: Number,
  updated: { type: Date, default: Date.now() },
  created: { type: Date, default: Date.now() }
});

export const Movie: Model<IMovieModel> = model<IMovieModel>('movies', MovieSchema);