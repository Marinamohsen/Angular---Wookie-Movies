export interface IMovie {
    backdrop: string;
    cast: ICast;
    classification: string;
    director: string;
    genres: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    released_on: string;
    slug: string;
    title: string;

}

export interface ICast {
    cast: string;
}


