import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ServiceTypeServices from '../services/ServiceTypeServices';

import { notifyError, notifySuccess } from '../utils/toast';

const useServiceTypeSubmit = (id) => {
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
      amount: data.amount,
      status: data.itemStatus,
    };

    if (id) {
      ServiceTypeServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ServiceTypeServices.addItem(ItemData)
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
      setValue('amount');
      setValue('itemStatus');
      return;
    }
    if (id) {
      ServiceTypeServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('name', res.data.name);
            setValue('amount', res.data.amount);
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

export default useServiceTypeSubmit;
