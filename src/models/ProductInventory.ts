import BaseResponse from './BaseResponse';
import { BrandResponse } from './Brand';
import { SupplierResponse } from './Supplier';
import { DocketVariantExtendedResponse } from './DocketVariantExtended';

export interface ProductInventoryResponse {
  product: ProductResponse;
  transactions: DocketVariantExtendedResponse[];
  inventory: number;
  waitingForDelivery: number;
  canBeSold: number;
  areComing: number;
}

interface ProductResponse extends BaseResponse {
  name: string;
  code: string;
  slug: string;
  brand: BrandResponse | null;
  supplier: SupplierResponse | null;
}
