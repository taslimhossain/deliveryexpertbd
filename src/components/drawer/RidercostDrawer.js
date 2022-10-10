import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import useRidercostSubmit from '../../hooks/useRidercostSubmit';
import SelectStatusOption from '../form/SelectStatusOption';
import SelectRiderOption from '../form/SelectRiderOption';


const MerchantcostDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = useRidercostSubmit(id);
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Rider fee category"
            description="Updated your Merchant fee category and necessary information from here"
          />
        ) : (
          <Title
            title="Add Rider fee category"
            description="Add your Merchant fee category and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Name" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                  <Error errorName={errors.name} />
                </div>
              </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Pickup amount" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Pickup amount"
                    name="pickup_amount"
                    type="text"
                    placeholder="Pickup amount"
                  />
                  <Error errorName={errors.pickup_amount} />
                </div>
              </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Delivery amount" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Delivery amount"
                    name="delivery_amount"
                    type="text"
                    placeholder="Delivery amount"
                  />
                  <Error errorName={errors.delivery_amount} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Sallery Amount" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Sallery Amount"
                    name="sallery_amount"
                    type="text"
                    placeholder="Sallery Amount"
                  />
                  <Error errorName={errors.discount_amount} />
                </div>
              </div>
         
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Rider pay type" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectRiderOption
                    register={register}
                    label="Rider pay tipe"
                    name="ridertype"
                  />
                  <Error errorName={errors.ridertype} />
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Status" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectStatusOption
                    register={register}
                    label="Item Status"
                    name="itemStatus"
                  />
                  <Error errorName={errors.itemStatus} />
                </div>
              </div>

          </div>

          <DrawerButton id={id} title="Zone" />
        </form>
      </Scrollbars>
    </>
  );
};

export default MerchantcostDrawer;
