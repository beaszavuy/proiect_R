package ro.ubb.catalog.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.ubb.catalog.core.model.Discipline;
import ro.ubb.catalog.core.service.DisciplineService;
import ro.ubb.catalog.web.converter.DisciplineConverter;
import ro.ubb.catalog.web.dto.DisciplineDto;

import java.util.List;
import java.util.Set;

@RestController
public class DisciplineController {
    private static final Logger log = LoggerFactory.getLogger(DisciplineController.class);

    @Autowired
    private DisciplineService disciplineService;

    @Autowired
    DisciplineConverter disciplineConverter;

    @RequestMapping(value = "/disciplines")
    Set<DisciplineDto> getAllDisciplines() {
        return disciplineConverter.convertModelsToDtos(
                disciplineService.getAllDisciplines()
        );
    }

    @RequestMapping(value = "/disciplines", method = RequestMethod.POST)
    DisciplineDto saveDiscipline(@RequestBody DisciplineDto dto) {
        log.trace("saveDiscipline - method entered: dto={}", dto);

        Discipline discipline = disciplineConverter.convertDtoToModel(dto);
        discipline.setId(null);
        return disciplineConverter.convertModelToDto(
                disciplineService.saveDiscipline(
                        discipline
                )
        );
    }

    @RequestMapping(value = "disciplines/{id}", method = RequestMethod.DELETE)
    ResponseEntity<?> deleteDiscipline(@PathVariable("id") Long id) {
        disciplineService.deleteDiscipline(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
