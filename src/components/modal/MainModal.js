import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, Button } from '@windmill/react-ui';
import { FiTrash2 } from 'react-icons/fi';

import UserServices from '../../services/UserServices';
import AdminServices from '../../services/AdminServices';
import CouponServices from '../../services/CouponServices';
import ProductServices from '../../services/ProductServices';
import CategoryServices from '../../services/CategoryServices';
import { SidebarContext } from '../../context/SidebarContext';
import { notifySuccess, notifyError } from '../../utils/toast';
import DistrictsServices from '../../services/DistrictsServices';
import ZonesServices from '../../services/ZonesServices';
import AreaServices from '../../services/AreaServices';
import PickupLocationServices from '../../services/PickupLocationServices';
import ProductTypeServices from '../../services/ProductTypeServices';
import ServiceTypeServices from '../../services/ServiceTypeServices';
import WeightServices from '../../services/WeightServices';
import MerchantcostServices from '../../services/MerchantcostServices';
import RidercostServices from '../../services/RidercostServices';
import HubServices from '../../services/HubServices';
import ZoneinHubServices from '../../services/ZoneinHubServices';

const MainModal = ({ id }) => {
  const { isModalOpen, closeModal, setIsUpdate } = useContext(SidebarContext);
  const location = useLocation();

  const handleDelete = () => {
    if (location.pathname === '/products') {
      ProductServices.deleteProduct(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/category') {
      CategoryServices.deleteCategory(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === '/merchants') {
      UserServices.deleteUser(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/coupons') {
      CouponServices.deleteCoupon(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/districts') {
      DistrictsServices.deleteDistrict(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/zones') {
      ZonesServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/areas') {
      AreaServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/pickup-location') {
      PickupLocationServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/producttypes') {
      ProductTypeServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/servicetypes') {
      ServiceTypeServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/weights') {
      WeightServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }    

    if (location.pathname === '/merchantcosts') {
      MerchantcostServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/ridercosts') {
      RidercostServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/hubs') {
      HubServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/zoneinhub') {
      ZoneinHubServices.deleteItem(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }

    if (location.pathname === '/our-rider') {
      AdminServices.deleteStaff(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
          <span className="flex justify-center text-3xl mb-6 text-red-500">
            <FiTrash2 />
          </span>
          <h2 className="text-xl font-medium mb-1">
            Are You Sure! Want to Delete This Record?
          </h2>
          <p>
            Do you really want to delete these records? You can't view this in
            your list anymore if you delete!
          </p>
        </ModalBody>
        <ModalFooter className="justify-center">
          <Button
            className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
            layout="outline"
            onClick={closeModal}
          >
            No, Keep It
          </Button>
          <Button onClick={handleDelete} className="w-full sm:w-auto">
            Yes, Delete It
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default React.memo(MainModal);
