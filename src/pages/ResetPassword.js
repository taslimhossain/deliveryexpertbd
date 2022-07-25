import Cookies from 'js-cookie';
import { Button, Input } from '@windmill/react-ui';
import React, { useContext, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Error from '../components/form/Error';
import LabelArea from '../components/form/LabelArea';
import AdminServices from '../services/AdminServices';
import { notifyError, notifySuccess } from '../utils/toast';
import ImageLight from '../assets/img/forgot-password-office.jpeg';
import ImageDark from '../assets/img/forgot-password-office-dark.jpeg';
import { AdminContext } from '../context/AdminContext';

const ResetPassword = () => {
  const { token } = useParams();
  const password = useRef('');
  const { dispatch } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  password.current = watch('password');

  const submitHandler = ({ password, password_confirmation }) => {
    setLoading(true);

    AdminServices.resetPassword({ password, password_confirmation, token })
      .then((res) => {
        setLoading(false);
        notifySuccess(res.message);
        dispatch({ type: 'USER_LOGIN', payload: res });
        Cookies.set('adminInfo', JSON.stringify(res));
        history.replace('/');
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err ? err.response.data.message : err.message);
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Reset password
              </h1>

              <form onSubmit={handleSubmit(submitHandler)}>
                <LabelArea label="Password" />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                    required: 'You must specify a password',
                    minLength: {
                      value: 6,
                      message: 'Password must have at least 6 characters',
                    },
                  })}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
                <Error errorName={errors.password} />
                <div className="mt-6"></div>
                <LabelArea label="Confirm Password" />
                <Input
                  label="Confirm Password"
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                  {...register('password_confirmation', {
                    validate: (value) =>
                      value === password.current ||
                      'The passwords do not match',
                  })}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
                <Error errorName={errors.password_confirmation} />

                <Button
                  disabled={loading}
                  type="submit"
                  block
                  className="mt-4 h-12"
                >
                  Reset
                </Button>
              </form>
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-green-500 dark:text-green-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
