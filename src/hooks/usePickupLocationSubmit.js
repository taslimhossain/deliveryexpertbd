import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import PickupLocationServices from '../services/PickupLocationServices';
import { notifyError, notifySuccess } from '../utils/toast';

const usePickupLocationSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ItemData = {
      name: data.pickupLocationName,
      phone: data.phone,
      email: data.email,
      address: data.address,
      district_id: data.pickupLocationDistric,
      zone_id: data.pickupLocationZone,
      area_id: data.pickupLocationArea,
      status: data.itemStatus,
    };

    if (id) {
      PickupLocationServices.updateItem(id, ItemData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      PickupLocationServices.addItem(ItemData)
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
      setValue('pickupLocationName');
      setValue('phone');
      setValue('email');
      setValue('address');
      setValue('pickupLocationDistric');
      setValue('pickupLocationZone');
      setValue('pickupLocationArea');
      setValue('itemStatus');
      return;
    }
    if (id) {
      PickupLocationServices.getItemById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('pickupLocationName', res.data.name);
            setValue('phone', res.data.phone);
            setValue('email', res.data.email);
            setValue('address', res.data.address);
            setValue('pickupLocationDistric', res.data.district_id);
            setValue('pickupLocationZone', res.data.zone_id);
            setValue('pickupLocationArea', res.data.area_id);
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

export default usePickupLocationSubmit;
