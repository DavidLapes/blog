package org.dtsolutions.blog.rest.service;

import org.dtsolutions.blog.rest.entity.SubscriberDTO;

public interface SubscribeService {

    void subscribe(SubscriberDTO subscriber);
    void unsubscribe(SubscriberDTO subscriber);
}
