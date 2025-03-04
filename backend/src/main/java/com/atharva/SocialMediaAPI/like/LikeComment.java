package com.atharva.SocialMediaAPI.like;

import com.atharva.SocialMediaAPI.comment.Comment;
import com.atharva.SocialMediaAPI.user.AppUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="like_comment", uniqueConstraints = {
        @UniqueConstraint(columnNames = "likeCommentID")
})
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LikeComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeCommentID;

    @ManyToOne
    @JoinColumn(name = "commentID")
    private Comment comment;

    @ManyToOne
    @JoinColumn(name = "userID")
    private AppUser user;
}
