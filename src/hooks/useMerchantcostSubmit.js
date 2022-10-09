import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import MerchantcostServices from '../services/MerchantcostServices';

import { notifyError, notifySuccess } from '../utils/toast';

const useMerchantcostSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ItemData = {
      name: data.name,
      pickup_amount: data.pickup_amount,
      delivery_amount: data.delivery_amount,
      discount_amount: data.discount_amount,
      status: data.itemStatus,
    };

    if (id) {
      MerchantcostServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      MerchantcostServices.addItem(ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('name');
      setValue('pickup_amount');
      setValue('delivery_amount');
      setValue('discount_amount');
      setValue('itemStatus');
      return;
    }
    if (id) {
      MerchantcostServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('name', res.data.name);
            setValue('pickup_amount', res.data.pickup_amount);
            setValue('delivery_amount', res.data.delivery_amount);
            setValue('discount_amount', res.data.discount_amount);
            setValue('itemStatus', res.data.status === true ? 1 : 0);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  };
};

export default useMerchantcostSubmit;
