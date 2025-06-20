package ro.ubb.movie.core.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.ubb.movie.core.model.Client;
import ro.ubb.movie.core.repository.ClientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService {
    private static final Logger log = LoggerFactory.getLogger(ClientServiceImpl.class);

    @Autowired
    private ClientRepository clientRepository;


    @Override
    public List<Client> findAll() {
        log.trace("findAll --- method entered");

        List<Client> clients = clientRepository.findAll();

        log.trace("findAll: clients={}", clients);

        return clients;
    }

    @Override
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }


    @Override
    @Transactional
    public Client updateClient(Long clientId, String name, String phone) {
        log.trace("updateClient: name={}, phone={}", name, phone);

        Optional<Client> client = clientRepository.findById(clientId);

//        student.ifPresent(s->{
//            s.setSerialNumber(serialNumber);
//            s.setName(name);
//            s.setGroupNumber(groupNumber);
//        });

        log.trace("updateClient: student={}", client.get());

        return client.orElse(null);
    }

}
