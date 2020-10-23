package org.dtsolutions.blog.exceptions;

public class NoSuchEntityException extends RuntimeException {

    private Long entityId;

    public NoSuchEntityException(final Long entityId) {
        this.entityId = entityId;
    }

    @Override
    public String getMessage() {
        return "No entity with ID '" + entityId + "' found";
    }
}
