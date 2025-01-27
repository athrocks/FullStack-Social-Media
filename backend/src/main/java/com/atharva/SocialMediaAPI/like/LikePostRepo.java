package com.atharva.SocialMediaAPI.like;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikePostRepo extends JpaRepository<LikePost, Long> {
}
