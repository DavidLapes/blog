package org.dtsolutions.blog.rest.entity;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class SubscriberDTO {

    private Long id;
    private String email;
    private Timestamp timeSubscribeRegistered;
    private Timestamp timeSubscribeStarted;
    private Timestamp timeSubscribeEnded;
}
