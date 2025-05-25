import BaseResponse from './BaseResponse';
import { UserRequest, UserResponse } from './User';
import { CustomerResourceResponse } from './CustomerResource';
import { CustomerGroupResponse } from './CustomerGroup';
import { CustomerStatusResponse } from './CustomerStatus';

export interface CustomerResponse extends BaseResponse {
  user: UserResponse;
  customerGroup: CustomerGroupResponse;
  customerStatus: CustomerStatusResponse;
  customerResource: CustomerResourceResponse;
}

export interface CustomerRequest {
  user: UserRequest;
  customerGroupId: number;
  customerStatusId: number;
  customerResourceId: number;
}
