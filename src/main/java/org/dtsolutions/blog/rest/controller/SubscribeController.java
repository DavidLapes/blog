package org.dtsolutions.blog.rest.controller;

import org.dtsolutions.blog.rest.entity.SubscriberDTO;
import org.dtsolutions.blog.rest.service.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SubscribeController {

    private SubscribeService service;

    @Autowired
    public SubscribeController(final SubscribeService service) {
        this.service = service;
    }

    @PostMapping("/subscribe")
    public void subscribe(@RequestBody final SubscriberDTO subscriber) {
        this.service.subscribe(subscriber);
    }

    @PostMapping("/unsubscribe")
    public void unsubscribe(@RequestBody final SubscriberDTO subscriber) {
        this.service.unsubscribe(subscriber);
    }
}
