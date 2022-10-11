import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import WeightServices from '../services/WeightServices';

import { notifyError, notifySuccess } from '../utils/toast';

const useWeightSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ItemData = {
      from: data.from,
      to: data.to,
      inside_amount: data.inside_amount,
      outside_amount: data.outside_amount,
      status: data.itemStatus,
    };

    if (id) {
      WeightServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      WeightServices.addItem(ItemData)
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
      setValue('from');
      setValue('to');
      setValue('inside_amount');
      setValue('outside_amount');
      setValue('itemStatus');
      return;
    }
    if (id) {
      WeightServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('from', res.data.from);
            setValue('to', res.data.to);
            setValue('outside_amount', res.data.outside_amount);
            setValue('inside_amount', res.data.inside_amount);
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

export default useWeightSubmit;
