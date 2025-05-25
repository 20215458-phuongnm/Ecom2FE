import BaseResponse from './BaseResponse';
import { DocketReasonResponse } from './DocketReason';
import { WarehouseResponse } from './Warehouse';
import { DocketVariantRequest, DocketVariantResponse } from './DocketVariant';

export interface DocketResponse extends BaseResponse {
  type: number;
  code: string;
  reason: DocketReasonResponse;
  warehouse: WarehouseResponse;
  docketVariants: DocketVariantResponse[];
  purchaseOrder: PurchaseOrderResponse | null;
  order: OrderResponse | null;
  note: string | null;
  status: number;
}

interface PurchaseOrderResponse extends BaseResponse {
  code: string;
  status: number;
}

interface OrderResponse extends BaseResponse {
  code: string;
  status: number;
}

export interface DocketRequest {
  type: number;
  code: string;
  reasonId: number;
  warehouseId: number;
  docketVariants: DocketVariantRequest[];
  purchaseOrderId: number | null;
  orderId: number | null;
  note: string | null;
  status: number;
}
