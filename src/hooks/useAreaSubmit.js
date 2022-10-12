import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import AreaServices from '../services/AreaServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useAreaSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ItemData = {
      name: data.areaName,
      zone_id: data.areaZone,
      pickup_accept: data.pickup_accept ? '1' : '0',
      delivery_accept: data.delivery_accept ? '1' : '0',
      status: data.itemStatus,
    };

    if (id) {
      AreaServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      AreaServices.addItem(ItemData)
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
      setValue('areaName');
      setValue('areaZone');
      setValue('pickup_accept');
      setValue('delivery_accept');
      setValue('itemStatus');
      return;
    }
    if (id) {
      AreaServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('areaName', res.data.name);
            setValue('areaZone', res.data.zone_id);
            setValue('is_insidecity', res.data.is_insidecity == 1 ? 1 : 0);
            setValue('pickup_accept', res.data.pickup_accept == 1 ? 1 : 0);
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

export default useAreaSubmit;
