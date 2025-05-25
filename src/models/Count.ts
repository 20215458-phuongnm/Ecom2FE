import BaseResponse from './BaseResponse';
import { WarehouseResponse } from './Warehouse';
import { CountVariantRequest, CountVariantResponse } from './CountVariant';

export interface CountResponse extends BaseResponse {
  code: string;
  warehouse: WarehouseResponse;
  countVariants: CountVariantResponse[];
  note: string | null;
  status: number;
}

export interface CountRequest {
  code: string;
  warehouseId: number;
  countVariants: CountVariantRequest[];
  note: string | null;
  status: number;
}
