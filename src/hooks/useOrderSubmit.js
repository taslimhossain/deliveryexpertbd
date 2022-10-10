import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import AdminServices from '../services/AdminServices';
import { AdminContext } from '../context/AdminContext';
import { SidebarContext } from '../context/SidebarContext';
import { notifyError, notifySuccess } from '../utils/toast';

const useOrderSubmit = (id) => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  const location = useLocation();
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
    const OrderData = {
      name        : data.name,
      email       : data.email,
      password    : data.password,
      phone       : data.phone,
      joiningDate : data.joiningDate,
      role        : data.role,
    };

    if (id) {
      AdminServices.updateStaff(id, { email: adminInfo.email, data: OrderData })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess('Staff Updated Successfully!');
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      AdminServices.addStaff({ email: adminInfo.email, data: OrderData })
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
      setValue('email');
      setValue('password');
      setValue('phone');
      setValue('joiningDate');
      setValue('role');
      clearErrors('name');
      clearErrors('email');
      clearErrors('password');
      clearErrors('phone');
      clearErrors('joiningDate');
      clearErrors('role');
      return;
    }
    if (id) {
      AdminServices.getStaffById(id, { email: adminInfo.email })
        .then((res) => {
          if (res) {
            setValue('name', res.name);
            setValue('email', res.email);
            setValue('password', res.password);
            setValue('phone', res.phone);
            setValue('joiningDate', res.joiningData);
            setValue('role', res.role);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen, adminInfo.email]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  };
};

export default useOrderSubmit;
