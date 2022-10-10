import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import HubServices from '../services/HubServices';

import { notifyError, notifySuccess } from '../utils/toast';

const useHubSubmit = (id) => {
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
      status: data.itemStatus,
    };

    if (id) {
      HubServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      HubServices.addItem(ItemData)
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
      setValue('itemStatus');
      return;
    }
    if (id) {
      HubServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('name', res.data.name);
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

export default useHubSubmit;
