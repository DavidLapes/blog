package org.dtsolutions.blog.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Getter
@Setter
@Entity
@Table(name = "article_comments")
public class ArticleComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(
            optional = false,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "article_id",
            referencedColumnName = "id"
    )
    private Article article;

    @NotNull
    @ManyToOne(
            optional = false,
            fetch = FetchType.EAGER

    )
    @JoinColumn(
            name = "user_id",
            referencedColumnName ="id"
    )
    private User owner;

    @NotNull
    private String text;

    @Column(
            columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP",
            insertable = false,
            updatable = false
    )
    private Timestamp timeCreated;

    @Column(
            columnDefinition = "DATETIME",
            insertable = false,
            updatable = false
    )
    private Timestamp timeEdited;
}
