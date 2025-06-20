package ro.ubb.movie.core.model;

import jakarta.persistence.Entity;
import lombok.*;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Movie extends BaseEntity<Long> {
    private String title;
    private String director;
    private String year;
    private double price;
}
