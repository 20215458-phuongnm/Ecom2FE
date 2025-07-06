import { useEffect, useRef } from 'react';
import { UseFormReturnType } from '@mantine/form/lib/use-form';

// Hook để quản lý việc chọn địa chỉ (tỉnh, quận, phường) trong biểu mẫu
// Khi người dùng chọn tỉnh, quận và phường sẽ được reset về null và tương tự
function useSelectAddress<T>(
  form: UseFormReturnType<T>,
  provinceIdKey: keyof T,
  districtIdKey: keyof T,
  wardIdKey: keyof T
) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      form.values[districtIdKey] !== null && form.setFieldValue(districtIdKey, null as T[keyof T]);
      form.values[wardIdKey] !== null && form.setFieldValue(wardIdKey, null as T[keyof T]);
    }
  }, [form.values[provinceIdKey]]);

  useEffect(() => {
    if (!firstRender.current) {
      form.values[wardIdKey] !== null && form.setFieldValue(wardIdKey, null as T[keyof T]);
    }
  }, [form.values[districtIdKey]]);

  useEffect(() => {
    firstRender.current = false;
  }, []);
}

export default useSelectAddress;
