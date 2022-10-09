import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import usePickupLocationSubmit from '../../hooks/usePickupLocationSubmit';
import SelectStatusOption from '../form/SelectStatusOption';
import SelectZoneOption from '../form/SelectZoneOption';
import SelectDistrictOption from '../form/SelectDistrictOption';
import SelectAreaOption from '../form/SelectAreaOption';


const PickupLocationDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = usePickupLocationSubmit(id);
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Pickup Location"
            description="Updated your Pickup Location and necessary information from here"
          />
        ) : (
          <Title
            title="Add Pickup Location"
            description="Add your Pickup Location and necessary information from here"
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
                    name="pickupLocationName"
                    type="text"
                    placeholder="Name"
                  />
                  <Error errorName={errors.pickupLocationName} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Phone" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Phone"
                    name="phone"
                    type="text"
                    placeholder="Phone"
                  />
                  <Error errorName={errors.phone} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Email" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <Error errorName={errors.email} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Address" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Address"
                  />
                  <Error errorName={errors.address} />
                </div>
              </div>
       

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Distric" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectDistrictOption
                    register={register}
                    label="Select District"
                    name="pickupLocationDistric"
                    placeholder="Select District"
                  />
                  <Error errorName={errors.pickupDistric} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Zone" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectZoneOption
                    register={register}
                    label="Select Zone"
                    name="pickupLocationZone"
                    placeholder="Select Zone"
                  />
                  <Error errorName={errors.pickupLocationZone} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Area" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectAreaOption
                    register={register}
                    label="Select Area"
                    name="pickupLocationArea"
                    placeholder="Select Area"
                  />
                  <Error errorName={errors.pickupLocationArea} />
                </div>
              </div>
         
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Status" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectStatusOption
                    register={register}
                    label="Zone Status"
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

export default PickupLocationDrawer;
