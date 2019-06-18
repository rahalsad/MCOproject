
  package com.example.mco.dao;
  
  import org.springframework.data.domain.Page; import
  org.springframework.data.domain.Pageable; import
  org.springframework.data.jpa.repository.JpaRepository; import
  org.springframework.data.jpa.repository.Query; import
  org.springframework.data.repository.query.Param;

import com.example.mco.entities.Documentation;
import com.example.mco.entities.ResponsableMCO;
  
  
  
  
  public interface DocumentationRepository extends
  JpaRepository<Documentation, Long>{
  
  @Query("select dc from Documentation dc where dc.docName like:x") public
  Page<Documentation> chercher(@Param("x")String mc, Pageable pageable );
  
  }
 