package org.dtsolutions.blog.rest.service.impl;

import org.dtsolutions.blog.repository.UserRepository;
import org.dtsolutions.blog.security.SecurityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository repository;

    @Autowired
    public UserDetailsServiceImpl(final UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public SecurityUser loadUserByUsername(final String username) throws UsernameNotFoundException {
        final org.dtsolutions.blog.model.User model = repository.findByUsername(username);
        if( model == null ) {
            throw new UsernameNotFoundException("User - {" + username + "} was not found in the database");
        }

        final SecurityUser securityUser = new SecurityUser(model.getUsername(), model.getPassword(), Collections.emptyList());
        securityUser.setId(model.getId());

        return securityUser;
    }
}
