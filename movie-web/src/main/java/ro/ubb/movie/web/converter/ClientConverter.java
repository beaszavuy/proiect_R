package ro.ubb.movie.web.converter;


import org.springframework.stereotype.Component;
import ro.ubb.movie.core.model.Client;
import ro.ubb.movie.web.dto.ClientDto;

@Component
public class ClientConverter extends BaseConverter<Client, ClientDto> {


    @Override
    public Client convertDtoToModel(ClientDto dto) {
        Client client = new Client(dto.getName(), dto.getPhone());
        if (dto.getId() != null) {
            client.setId(dto.getId()); // csak akkor állítjuk be, ha nem új rekord
        }

        return client;
    }

    @Override
    public ClientDto convertModelToDto(Client client) {
        ClientDto clientDto = new ClientDto(client.getName(),client.getPhone());
        clientDto.setId(client.getId());
        return clientDto;
    }
}
