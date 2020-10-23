package org.dtsolutions.blog.repository;

import org.dtsolutions.blog.model.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {

}
