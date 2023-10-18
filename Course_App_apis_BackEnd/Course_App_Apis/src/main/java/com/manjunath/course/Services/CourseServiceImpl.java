package com.manjunath.course.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manjunath.course.Dao.CourseDao;
import com.manjunath.course.Entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;  
	@Override
	public List<Course> getCourses() {

		return courseDao.findAll();
	}
	
	@Override
	public Course getCourse(long courseId) {
		return courseDao.getOne(courseId);
	}
	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;
	}
	
	@Override
   public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(long parseLong) {
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
	}
	
//	List<Course> list;
//
//	public CourseServiceImpl()
//	{
//		list = new ArrayList<>();
//		list.add(new Course(146,"Java Course","this course containg basics of java"));
//		list.add(new Course(147,"SpringBoot","creating rest api using springboot"));
//	}
//	@Override
//	public List<Course> getCourses() {
//
//		return list;
//	}
//	@Override
//	public Course getCourse(long courseId) {
//		Course c = null;
//		for(Course course:list )
//		{
//			if(course.getId()==courseId)
//			{
//				c = course;
//				break;
//			}
//		}
//		return c;
//	}
//	@Override
//	public Course addCourse(Course course) {
//		list.add(course);
//		return course;
//	}
//	@Override
//	public Course updateCourse(Course course) {
//		list.forEach(e -> {
//			if(e.getId() == course.getId())
//			{
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
//		return course;
//	}
//	@Override
//	public void deleteCourse(long parseLong) {
//		list = this.list.stream().filter(e -> e.getId()!=parseLong).collect(Collectors.toList());
//
//	}

}
