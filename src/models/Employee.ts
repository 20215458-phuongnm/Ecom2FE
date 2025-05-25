import BaseResponse from './BaseResponse';
import { UserRequest, UserResponse } from './User';
import { OfficeResponse } from './Office';
import { DepartmentResponse } from './Department';
import { JobTypeResponse } from './JobType';
import { JobLevelResponse } from './JobLevel';
import { JobTitleResponse } from './JobTitle';

export interface EmployeeResponse extends BaseResponse {
  user: UserResponse;
  office: OfficeResponse;
  department: DepartmentResponse;
  jobType: JobTypeResponse;
  jobLevel: JobLevelResponse;
  jobTitle: JobTitleResponse;
}

export interface EmployeeRequest {
  user: UserRequest;
  officeId: number;
  departmentId: number;
  jobTypeId: number;
  jobLevelId: number;
  jobTitleId: number;
}
