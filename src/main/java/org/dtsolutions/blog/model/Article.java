package org.dtsolutions.blog.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String text;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "article"
    )
    private List<ArticleComment> comments;
}
