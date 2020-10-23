package org.dtsolutions.blog.repository;

import org.dtsolutions.blog.model.Article;
import org.dtsolutions.blog.model.ArticleComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ArticleCommentRepository extends JpaRepository<ArticleComment, Long> {

    @Query("SELECT t FROM ArticleComment t WHERE t.article = ?1")
    List<ArticleComment> findByArticle(Article article);
}
