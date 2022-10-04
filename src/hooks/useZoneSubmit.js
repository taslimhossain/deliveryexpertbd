import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ZonesServices from '../services/ZonesServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useZoneSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ZoneData = {
      name: data.zoneName,
      district_id: data.zonedistrict,
      status: data.zoneStatus,
    };

    if (id) {
      ZonesServices.updateItem(id, ZoneData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ZonesServices.addItem(ZoneData)
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
      setValue('zoneName');
      setValue('zonedistrict');
      setValue('zoneStatus');
      return;
    }
    if (id) {
      ZonesServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('zoneName', res.data.name);
            setValue('zonedistrict', res.data.district_id);
            setValue('zoneStatus', res.data.status === true ? 1 : 0);
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

export default useZoneSubmit;
