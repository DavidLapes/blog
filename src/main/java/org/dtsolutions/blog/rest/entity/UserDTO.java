package org.dtsolutions.blog.rest.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String username;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private Timestamp timeRegistered;
    private Timestamp timeEdited;
    private Timestamp timeDeleted;
}
