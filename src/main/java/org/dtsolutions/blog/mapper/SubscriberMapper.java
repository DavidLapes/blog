package org.dtsolutions.blog.mapper;

import org.dtsolutions.blog.model.Subscriber;
import org.dtsolutions.blog.rest.entity.SubscriberDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface SubscriberMapper {

    SubscriberDTO map(Subscriber source);
    Subscriber map(SubscriberDTO source);

    static SubscriberMapper getInstance() {
        return Mappers.getMapper(SubscriberMapper.class);
    }
}
