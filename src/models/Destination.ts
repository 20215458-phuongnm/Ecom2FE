import BaseResponse from './BaseResponse';
import { AddressRequest, AddressResponse } from './Address';

export interface DestinationResponse extends BaseResponse {
  contactFullname: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  address: AddressResponse;
  status: number;
}

export interface DestinationRequest {
  contactFullname: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  address: AddressRequest;
  status: number;
}
