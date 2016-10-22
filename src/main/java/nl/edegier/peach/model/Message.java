package nl.edegier.peach.model;

import org.springframework.data.annotation.Id;

/**
 * Created by Erwin on 18/08/16.
 */
public class Message {

    @Id
    private String id;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    String message;

    public Message(){

    }

    public Message(String message){
        this.message = message;
    }
}
