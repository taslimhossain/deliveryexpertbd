import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import RidercostServices from '../services/RidercostServices';

import { notifyError, notifySuccess } from '../utils/toast';

const useRidercostSubmit = (id) => {
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
      sallery_amount: data.sallery_amount,
      ridertype: data.ridertype,
      status: data.itemStatus,
    };

    if (id) {
      RidercostServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      RidercostServices.addItem(ItemData)
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
      setValue('sallery_amount');
      setValue('ridertype');
      setValue('itemStatus');
      return;
    }
    if (id) {
      RidercostServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('name', res.data.name);
            setValue('pickup_amount', res.data.pickup_amount);
            setValue('delivery_amount', res.data.delivery_amount);
            setValue('sallery_amount', res.data.sallery_amount);
            setValue('ridertype', res.data.ridertype);
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

export default useRidercostSubmit;
