package org.dtsolutions.blog.rest.controller;

import org.dtsolutions.blog.rest.entity.UserDTO;
import org.dtsolutions.blog.rest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private final UserService service;

    @Autowired
    public UserController(final UserService service) {
        this.service = service;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody final UserDTO user) {
        service.signUp(user);
    }

    @GetMapping("/{id}")
    public UserDTO get(@PathVariable final Long id) {
        return service.get(id);
    }

    @GetMapping("/current")
    public UserDTO getCurrent() {
        return service.getCurrent();
    }
}
