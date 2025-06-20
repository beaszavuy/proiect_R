package ro.ubb.movie.core.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import ro.ubb.movie.core.model.BaseEntity;

import java.io.Serializable;

@NoRepositoryBean
@Transactional
public interface RentRepository<T extends BaseEntity<ID>, ID extends Serializable>
        extends JpaRepository<T, ID> {
}
