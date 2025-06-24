package ro.ubb.movie.web.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.ubb.movie.core.model.Client;
import ro.ubb.movie.core.service.ClientService;
import ro.ubb.movie.web.converter.ClientConverter;
import ro.ubb.movie.web.dto.ClientDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ClientController {

    private static final Logger log = LoggerFactory.getLogger(ClientController.class);

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientConverter clientConverter;


    @RequestMapping(value = "/clients", method = RequestMethod.GET)
    public List<ClientDto> getClients() {
        log.trace("getClients");

        List<Client> clients = clientService.findAll();

        log.trace("getClients: clients={}", clients);

        return new ArrayList<>(clientConverter.convertModelsToDtos(clients));
    }
    @RequestMapping(value = "/clients", method = RequestMethod.POST)
    ClientDto saveClient(@RequestBody ClientDto dto) {
        log.trace("saveClient - method entered: dto={}", dto);

        Client client = clientConverter.convertDtoToModel(dto);
        client.setId(null);
        return clientConverter.convertModelToDto(
                clientService.saveClient(
                        client
                )
        );
    }
    @RequestMapping(value = "/clients/{clientId}", method = RequestMethod.PUT)
    public ClientDto updateClient(@PathVariable("clientId") final Long clientId, @RequestBody final ClientDto clientDto) {
        log.trace("updateClient: clientId={}, clientDtoMap={}", clientId, clientDto);

        Client client = clientService.updateClient(clientId, clientDto.getName(), clientDto.getPhone());

        ClientDto result = clientConverter.convertModelToDto(client);

        log.trace("updateClient: result={}", result);

        return result;
    }
//    @PutMapping("/{clientId}")
//    public ClientDto updateClient(@PathVariable("clientId") Long clientId, @RequestBody ClientDto clientDto) {
//        log.trace("updateClient: clientId={}, clientDtoMap={}", clientId, clientDto);
//
//        Client client = clientService.updateClient(clientId, clientDto.getName(), clientDto.getPhone());
//        return clientConverter.convertModelToDto(client);
//    }

        @GetMapping("/clients/{id}")
        public ResponseEntity<ClientDto> getClientById(@PathVariable Long id) {
        log.trace("getClientById: id={}", id);

        Optional<Client> client = clientService.findAll().stream()
                .filter(c -> c.getId().equals(id))
                .findFirst();

        if (client.isPresent()) {
            return ResponseEntity.ok(clientConverter.convertModelToDto(client.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
