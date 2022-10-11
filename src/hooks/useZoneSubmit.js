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
      is_insidecity: data.is_insidecity ? '1' : '0',
      pickup_accept: data.pickup_accept ? '1' : '0',
      delivery_accept: data.delivery_accept ? '1' : '0',
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
      setValue('is_insidecity');
      setValue('pickup_accept');
      setValue('delivery_accept');
      setValue('zoneStatus');
      return;
    }
    if (id) {
      ZonesServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('zoneName', res.data.name);
            setValue('zonedistrict', res.data.district_id);
            setValue('is_insidecity', res.data.is_insidecity == 1 ? 1 : 0);
            setValue('pickup_accept', res.data.pickup_accept == 1 ? 1 : 0);
            setValue('delivery_accept', res.data.delivery_accept == 1 ? 1 : 0);
            setValue('zoneStatus', res.data.status == true ? 1 : 0);
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
