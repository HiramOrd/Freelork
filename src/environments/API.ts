
export class API {
  static SERVER = 'https://cs-project-back.herokuapp.com/freelork/';
  // static SERVER = '';
  static API = 'api/v1/';

  static LOGIN = 'login';
  static POST_TASK = 'register/';
  static GET_STUDENT = 'student/';
  static GET_TEACHER = 'teacher/';
  static GET_COMPANY = 'company/';
  static UPDATE_STUDENT = 'student/update';

  // Register Account
  static POST_ADMIN = 'register/admin';
  static POST_STUDENT = 'register/student';
  static POST_TEACHER = 'register/teacher';
  static POST_COMPANY = 'register/company';

  // Task
  static GET_TASK_LIST = 'register/list/';
  static GET_TASK = 'register/';


  // Teacher
  static GET_SUMMARY_LIST = 'summary/';
  static GET_GROUPS = 'classrooms/';
  static GET_ALL_STUDENTS = 'students/';
  static CLASS = 'class/';
  static DELETE_GROUP_TEACHER = 'teacher/delete/classroom/';
  static POST_CLASSROOM = 'classroom';
  static TEACHER_PROFILE = 'teacher/profile/';

  // Student
  static STUDENT_SUMMARY = 'student/summary/';
  static GET_STUDENT_PROJECTS = 'student/projects/';
  static GET_COMPANY_PROJECT = 'student/projects/company/';
  static POST_PROJECT = 'student/';
  static POST_PROJECT2 = '/project/';
  static DELETE_PROJECT = 'student/delete/';
  static DELETE_PROJECT2 = '/project/';
  static DELETE_REGISTER = 'register/delete/';
  static GET_STUDENT_COMPANY = 'student/company/';
  static POST_STUDENT_COMPANY = 'student/';
  static POST_STUDENT_COMPANY2 = 'company/';
  static DELETE_STUDENT_COMPANY = 'student/delete/';
  static DELETE_STUDENT_COMPANY2 = 'company/';
  static GET_STUDENT_CLASSROOM = 'student/classroom';
  static POST_STUDENT_CLASSROOM = 'student/';
  static POST_STUDENT_CLASSROOM2 = 'classroom/';
  static DELETE_STUDENT_CLASSROOM = 'student/delete/classroom/';



  // Company
  static UPDATE_COMPANY = 'update';
  static GET_COMPANY_SUMMARY = 'summary/';
  static GET_COMPANY_PROJECTS = 'projects/';
  static POST_COMPANY_PROJECT = 'project';
}
