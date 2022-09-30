import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import AdminServices from '../services/AdminServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useLoginSubmit = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AdminContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, email, password_confirmation, signuppage, login, mobile_no, verifyLogin, password }) => {
    setLoading(true);

    if (verifyLogin) {
      AdminServices.forgetPassword({ verifyLogin })
        .then((res) => {
          setLoading(false);
          notifySuccess(res.message);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    } else if (name) {
        console.log('hello', signuppage)

      if(signuppage === 'riderpage'){
        AdminServices.registerRider({ name, mobile_no, email, password, password_confirmation, signuppage })
        .then((res) => {
          if (res) {
            setLoading(false);
            notifySuccess('Register Success!');
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('adminInfo', JSON.stringify(res));
            history.replace('/');
          }
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
          setLoading(false);
        });        
      }

      if(signuppage === 'merchantpage'){
        AdminServices.registerMerchant({ name, mobile_no, email, password, password_confirmation, signuppage })
        .then((res) => {
          if (res) {
            setLoading(false);
            notifySuccess('Register Success!');
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('adminInfo', JSON.stringify(res));
            history.replace('/');
          }
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
          setLoading(false);
        });        
      }

      if(signuppage === 'adminpage'){
          AdminServices.registerAdmin({ name, mobile_no, email, password, password_confirmation, signuppage })
          .then((res) => {
            if (res) {
              setLoading(false);
              notifySuccess('Register Success!');
              dispatch({ type: 'USER_LOGIN', payload: res });
              Cookies.set('adminInfo', JSON.stringify(res));
              history.replace('/');
            }
          })
          .catch((err) => {
            notifyError(err ? err.response.data.message : err.message);
            setLoading(false);
          });
      }

        
    } else {
      AdminServices.loginAdmin({ login, password })
        .then((res) => {
          if (res) {
            setLoading(false);
            notifySuccess('Login Success!');
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('adminInfo', JSON.stringify(res));
            history.replace('/');
          }
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
          setLoading(false);
        });
    }
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
