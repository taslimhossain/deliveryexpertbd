import React, { useContext } from 'react';
import { Button } from '@windmill/react-ui';

import Error from '../components/form/Error';
import LabelArea from '../components/form/LabelArea';
import InputArea from '../components/form/InputArea';
import { AdminContext } from '../context/AdminContext';
import SelectRole from '../components/form/SelectRole';
import PageTitle from '../components/Typography/PageTitle';
import Uploader from '../components/image-uploader/Uploader';
import SelectDistrictOption from '../components/form/SelectDistrictOption';
import SelectZoneOption from '../components/form/SelectZoneOption';
import SelectAreaOption from '../components/form/SelectAreaOption';
import SelectPickupOption from '../components/form/SelectPickupOption';
import SelectProductOption from '../components/form/SelectProductOption';
import SelectWeightOption from '../components/form/SelectWeightOption';
import SelectServiceOption from '../components/form/SelectServiceOption';
import useOrderSubmit from '../hooks/useOrderSubmit';

const CreateOrder = () => {
  const {
    state: { adminInfo },
  } = useContext(AdminContext);

  const { register, handleSubmit, onSubmit, errors, imageUrl, setImageUrl } =
  useOrderSubmit(adminInfo._id);

  return (
    <>
      <PageTitle>Order</PageTitle>
      <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <h3 className='text-2xl'>Pickup Information</h3>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select Pickup location" />
                  <SelectPickupOption
                    register={register}
                    label="Select District"
                    name="pickup_id"
                    placeholder="Select District"
                  />
                  <Error errorName={errors.pickup_id} />
              </div>
            </div>
            
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Note" />
                <InputArea
                  register={register}
                  label="Note"
                  name="note"
                  type="text"
                  placeholder="Note"
                />
                <Error errorName={errors.note} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <h3 className='text-2xl'>Delivery Contact Information</h3>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Contact Person name" />
                <InputArea
                  register={register}
                  label="Contact Person"
                  name="contact_person"
                  type="text"
                  placeholder="Contact Person"
                />
                <Error errorName={errors.contact_person} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Mobile number" />
                <InputArea
                  register={register}
                  label="Mobile number"
                  name="mobile_number"
                  type="text"
                  placeholder="Mobile number"
                />
                <Error errorName={errors.mobile_number} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Delivery Note" />
                <InputArea
                  register={register}
                  label="Delivery Note"
                  name="delivery_note"
                  type="text"
                  placeholder="Delivery Note"
                />
                <Error errorName={errors.delivery_note} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select District" />
                  <SelectDistrictOption
                    register={register}
                    label="Select District"
                    name="district_id"
                    placeholder="Select District"
                  />
                  <Error errorName={errors.district_id} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select Zone" />
                  <SelectZoneOption
                    register={register}
                    label="Select Zone"
                    name="zone_id"
                    placeholder="Select Zone"
                  />
                  <Error errorName={errors.zone_id} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select Area" />
                  <SelectAreaOption
                    register={register}
                    label="Select Area"
                    name="area_id"
                    placeholder="Select Area"
                  />
                  <Error errorName={errors.area_id} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Delivery Address" />
                <InputArea
                  register={register}
                  label="Delivery Address"
                  name="delivery_address"
                  type="text"
                  placeholder="Delivery Address"
                />
                <Error errorName={errors.delivery_address} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <h3 className='text-2xl'>Delivery Information</h3>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Receivable Money" />
                <InputArea
                  register={register}
                  label="Receivable Money"
                  name="receivable_money"
                  type="text"
                  placeholder="Receivable Money"
                />
                <Error errorName={errors.receivable_money} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select product type" />
                  <SelectProductOption
                    register={register}
                    label="Select Product type"
                    name="product_typeid"
                    placeholder="Select Zone"
                  />
                  <Error errorName={errors.product_typeid} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select weight type" />
                  <SelectWeightOption
                    register={register}
                    label="Select weight"
                    name="weight"
                    placeholder="Select Weight"
                  />
                  <Error errorName={errors.product_typeid} />
              </div>
            </div>   

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <LabelArea label="Select service" />
                  <SelectServiceOption
                    register={register}
                    label="Select service"
                    name="service_id"
                    placeholder="Select service"
                  />
                  <Error errorName={errors.service_id} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4">
                <h3 className='font-black text-2xl'>Service Charge: 00Taka</h3>
              </div>
            </div>            


          </div>

          <div className="flex flex-row-reverse pr-6 pb-6">
            <Button type="submit" className="h-12 px-6">
              {' '}
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateOrder;
