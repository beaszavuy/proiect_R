package ro.ubb.catalog.core.service;

import ro.ubb.catalog.core.model.Discipline;

import java.util.List;

public interface DisciplineService {
    List<Discipline> getAllDisciplines();

    Discipline saveDiscipline(Discipline discipline);

    void deleteDiscipline(Long id);
}
