package org.dtsolutions.blog.rest.service.impl;

import org.dtsolutions.blog.rest.service.UserService;
import org.dtsolutions.blog.mapper.UserMapper;
import org.dtsolutions.blog.model.User;
import org.dtsolutions.blog.repository.UserRepository;
import org.dtsolutions.blog.rest.entity.UserDTO;
import org.dtsolutions.blog.security.SecurityContext;
import org.dtsolutions.blog.security.SecurityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private static final UserMapper MAPPER = UserMapper.getInstance();
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(final UserRepository repository, final BCryptPasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public void signUp(final UserDTO user) {
        final String encodedPassword = passwordEncoder.encode(user.getPassword());
        final User model = MAPPER.map(user);
        model.setPassword(encodedPassword);
        repository.saveAndFlush(model);
    }

    @Override
    @Transactional
    public UserDTO get(final Long id) {
        final User model = repository.getOne(id);
        return MAPPER.map(model);
    }

    @Override
    @Transactional
    public UserDTO getCurrent() {
        final SecurityUser currentUser = SecurityContext.getAuthenticatedUser();
        return get(currentUser.getId());
    }
}
