package ro.ubb.movie.web.converter;

import org.springframework.stereotype.Component;
import ro.ubb.movie.core.model.Movie;
import ro.ubb.movie.web.dto.MovieDto;

@Component
public class MovieConverter extends BaseConverter<Movie, MovieDto> {
    @Override
    public Movie convertDtoToModel(MovieDto dto) {
        Movie movie = new Movie(dto.getTitle(), dto.getDirector(), dto.getYear(), dto.getPrice());
        movie.setId(dto.getId());
        return movie;
    }

    @Override
    public MovieDto convertModelToDto(Movie movie) {
        MovieDto dto = new MovieDto(movie.getTitle(), movie.getDirector(), movie.getYear(), movie.getPrice());
        dto.setId(movie.getId());
        return dto;
    }
}
