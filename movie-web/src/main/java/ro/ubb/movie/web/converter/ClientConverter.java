package ro.ubb.movie.web.converter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import ro.ubb.movie.core.model.Client;
import ro.ubb.movie.web.dto.ClientDto;

/**
 * Created by radu.
 */

@Component
public class ClientConverter extends BaseConverter<Client, ClientDto> {


    @Override
    public Client convertDtoToModel(ClientDto dto) {
        Client client = new Client(dto.getName(), dto.getPhone());
        client.setId(dto.getId());
        return client;
    }

    @Override
    public ClientDto convertModelToDto(Client client) {
        ClientDto clientDto = new ClientDto(client.getName(),
               client.getPhone());
        clientDto.setId(client.getId());
        return clientDto;
    }
}
