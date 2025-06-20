package ro.ubb.movie.core.model;

import jakarta.persistence.Entity;
import lombok.*;



@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
public class Client extends BaseEntity<Long> {
    private String name;
    private String phone;


}
