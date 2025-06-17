package ro.ubb.catalog.core.model;

import jakarta.persistence.Entity;
import lombok.*;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Discipline extends BaseEntity<Long> {
    private String title;
    private String teacher;
    private int credits;
}
