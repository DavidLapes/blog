package org.dtsolutions.blog.mapper;

import org.dtsolutions.blog.model.User;
import org.dtsolutions.blog.rest.entity.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

    UserDTO map(User source);
    User map(UserDTO source);

    static UserMapper getInstance() {
        return Mappers.getMapper(UserMapper.class);
    }
}
