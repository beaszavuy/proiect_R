package ro.ubb.movie.web.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class MovieDto extends BaseDto{
    private String title;
    private String director;
    private String year;
    private double price;
}
