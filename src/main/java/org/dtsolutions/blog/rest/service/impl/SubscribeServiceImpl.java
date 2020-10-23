package org.dtsolutions.blog.rest.service.impl;

import org.dtsolutions.blog.repository.SubscriberRepository;
import org.dtsolutions.blog.rest.entity.SubscriberDTO;
import org.dtsolutions.blog.rest.service.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscribeServiceImpl implements SubscribeService {

    private final SubscriberRepository repository;

    @Autowired
    public SubscribeServiceImpl(final SubscriberRepository repository) {
        this.repository = repository;
    }


    @Override
    public void subscribe(SubscriberDTO subscriber) {

    }

    @Override
    public void unsubscribe(SubscriberDTO subscriber) {

    }
}
