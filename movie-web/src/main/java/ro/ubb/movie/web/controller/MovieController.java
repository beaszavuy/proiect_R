package ro.ubb.movie.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.ubb.movie.core.model.Movie;
import ro.ubb.movie.core.service.MovieService;
import ro.ubb.movie.web.converter.MovieConverter;
import ro.ubb.movie.web.dto.MovieDto;

import java.util.Set;

@RestController
public class MovieController {
    private static final Logger log = LoggerFactory.getLogger(MovieController.class);

    @Autowired
    private MovieService movieService;

    @Autowired
    MovieConverter movieConverter;

    @RequestMapping(value = "/movies")
    Set<MovieDto> getAllMovies() {
        return movieConverter.convertModelsToDtos(
                movieService.getAllMovies()
        );
    }

    @RequestMapping(value = "/movies", method = RequestMethod.POST)
    MovieDto saveMovie(@RequestBody MovieDto dto) {
        log.trace("saveMovie - method entered: dto={}", dto);
        Movie movie = movieConverter.convertDtoToModel(dto);
        movie.setId(null);
        return movieConverter.convertModelToDto(
                movieService.saveMovie(
                        movie
                )
        );
    }

    @RequestMapping(value = "movies/{id}", method = RequestMethod.DELETE)
    ResponseEntity<?> deleteMovie(@PathVariable("id") Long id) {
        movieService.deleteMovie(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
