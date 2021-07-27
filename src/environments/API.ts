
export class API {
  static SERVER = 'https://cs-project-back.herokuapp.com/freelork/';
  // static SERVER = '';
  static API = 'api/v1/';

  static LOGIN = 'login';
  static POST_TASK = 'register/';
  static GET_STUDENT = 'student/';
  static GET_TEACHER = 'teacher/';
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

  // Student
  static STUDENT_SUMMARY = 'student/summary/';
  static GET_STUDENT_PROJECTS = 'student/projects/';
  static GET_COMPANY_PROJECT = 'student/projects/company/';
  static POST_PROJECT = 'student/';
  static POST_PROJECT2 = 'project/';
  static DELETE_PROJECT = 'student/delete/';
  static DELETE_PROJECT2 = 'project/';


}
