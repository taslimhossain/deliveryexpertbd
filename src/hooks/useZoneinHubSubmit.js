import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ZoneinHubServices from '../services/ZoneinHubServices';

import { notifyError, notifySuccess } from '../utils/toast';

const useZoneinHubSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ItemData = {
      zone_id: data.zone_id,
      hub_id: data.hub_id,
      status: data.itemStatus,
    };

    if (id) {
      ZoneinHubServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ZoneinHubServices.addItem(ItemData)
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
      setValue('zone_id');
      setValue('hub_id');
      setValue('itemStatus');
      return;
    }
    if (id) {
      ZoneinHubServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('zone_id', res.data.zone_id);
            setValue('hub_id', res.data.hub_id);
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

export default useZoneinHubSubmit;
