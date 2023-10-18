package com.manjunath.course.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manjunath.course.Entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>
{
    
}
