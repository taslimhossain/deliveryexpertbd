import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import DistrictsServices from '../services/DistrictsServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useDistrictSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('datadatadata', data)
    const CouponData = {
      name: data.districtName,
      insidecity: data.insidecity,
      samedistrict: data.samedistrict,
      outside: data.outside,
      status: data.districtStatus,
    };

    if (id) {
      DistrictsServices.updateDistrict(id, CouponData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      DistrictsServices.addDistrict(CouponData)
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
      setValue('districtName');
      setValue('insidecity');
      setValue('samedistrict');
      setValue('outside');
      setValue('districtStatus');
      return;
    }
    if (id) {
      DistrictsServices.getDistrictById(id)
        .then((res) => {
          if (res && res.status === 'success') {
            setValue('districtName', res.data.name);
            setValue('insidecity', res.data.insidecity);
            setValue('samedistrict', res.data.samedistrict);
            setValue('outside', res.data.outside);
            setValue('districtStatus', res.data.status === true ? 1 : 0);
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

export default useDistrictSubmit;
