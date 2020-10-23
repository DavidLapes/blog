package org.dtsolutions.blog.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Getter
@Setter
@Entity
@Table(name = "subscribers")
public class Subscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String email;

    @Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean isSubscribing;

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Timestamp timeSubscribeRegistered;

    @Column(columnDefinition = "DATETIME")
    private Timestamp timeSubscribeStarted;

    @Column(columnDefinition = "DATETIME")
    private Timestamp timeSubscribeEnded;
}
