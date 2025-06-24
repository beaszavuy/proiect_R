package ro.ubb.movie.core.service;

import org.springframework.transaction.annotation.Transactional;
import ro.ubb.movie.core.model.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    List<Client> findAll();

    Client saveClient(Client client);

    @Transactional
    Client updateClient(Long clientId, String name, String phone);
    Optional<Client> findById(Long id); // most már minden rendben

}
