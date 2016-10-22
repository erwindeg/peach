/**
 * Created by Erwin on 18/08/16.
 */
package nl.edegier.peach;

import nl.edegier.peach.repository.MessageRepository;
import nl.edegier.peach.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class MainServer implements CommandLineRunner {

    @Bean
    RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Autowired
    private MessageRepository repository;

    public static void main(String[] args) throws Exception {
        SpringApplication.run(MainServer.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        repository.deleteAll();
        repository.save(new Message("test"));

        System.out.println("-------------------------------");
        for (Message message : repository.findAll()) {
            System.out.println(message);
        }
    }
}
