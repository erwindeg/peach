package nl.edegier.peach.repository;

import nl.edegier.peach.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by Erwin on 18/08/16.
 */
public interface MessageRepository extends MongoRepository<Message, String> {

    public Message findBymessage(String message);

}
