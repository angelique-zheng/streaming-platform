import { Movie } from '../models/movie';
import { Serie } from '../models/serie';

export type Cinematography = Movie | Serie;

export type ValueOf<T> = T[keyof T];
