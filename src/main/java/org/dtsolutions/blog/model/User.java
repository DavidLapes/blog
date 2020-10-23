package org.dtsolutions.blog.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false)
    private Long id;

    @Size(min = 3, max = 32)
    @NotNull
    @Column(unique = true, length = 32)
    private String username;

    @Size(max = 256)
    @NotNull
    private String password;

    @Size(min = 3, max = 32)
    @NotNull
    private String firstName;

    @Size(min = 3, max = 32)
    @NotNull
    private String lastName;

    @Size(min = 5, max = 64)
    @NotNull
    private String email;

    @Column(
            columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP",
            insertable = false,
            updatable = false
    )
    private Timestamp timeRegistered;

    @Column(
            columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP",
            insertable = false,
            updatable = false
    )
    private Timestamp timeEdited;

    @Column(
            columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP",
            insertable = false,
            updatable = false
    )
    private Timestamp timeDeleted;
}
