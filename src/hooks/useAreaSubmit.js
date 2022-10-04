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
      setValue('itemStatus');
      return;
    }
    if (id) {
      AreaServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('areaName', res.data.name);
            setValue('areaZone', res.data.zone_id);
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
