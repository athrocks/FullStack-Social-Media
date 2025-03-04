package com.atharva.SocialMediaAPI.report;

import com.atharva.SocialMediaAPI.user.AppUser;
import com.atharva.SocialMediaAPI.ReportType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="report")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String reportID;

    private String content;

    @Enumerated(EnumType.STRING)
    private ReportType typeReport;

    private String idTarget;

    @ManyToOne
    @JoinColumn(name = "userReportID", referencedColumnName = "userID")
    private AppUser userReport;

}