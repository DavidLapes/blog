package org.dtsolutions.blog.rest.service;

import org.dtsolutions.blog.rest.entity.UserDTO;

public interface UserService {

    void signUp(UserDTO user);
    UserDTO get(Long id);
    UserDTO getCurrent();
}
