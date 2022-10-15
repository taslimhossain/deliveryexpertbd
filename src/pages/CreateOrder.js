import React, { useContext, useState } from 'react';
import { Button, Select } from '@windmill/react-ui';

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
import InputTextArea from '../components/form/InputTextArea';
import OrderServices from '../services/OrderServices';
import useAsync from '../hooks/useAsync';
import ParentCategory from '../components/category/ParentCategory';
import StoreOptions from '../components/optionsdata/StoreOptions';
import ProductTypeOptions from '../components/optionsdata/ProductTypeOptions';
import ServiceOptions from '../components/optionsdata/ServiceOptions';
import DistrictOptions from '../components/optionsdata/DistrictOptions';
import ZoneOptions from '../components/optionsdata/ZoneOptions';
import AreaOptions from '../components/optionsdata/AreaOptions';
import { notifyError } from '../utils/toast';
import WeightOptions from '../components/optionsdata/WeightOptions';

const CreateOrder = () => {
  const [orderCost, setorderCost] = useState({});
  const [getCost, setGetCost] = useState({
    delivery_fee : 0,
    additional_charge : 0
  });
  
  const handleOrderCalculate = (e) => {

    const field = e.target.name;
    const value = e.target.value;
    const newOrderCost = { ...orderCost }
    newOrderCost[field] = value;
    setorderCost(newOrderCost);

    const ItemData = {
      store_id: newOrderCost.store_id,
      district_id: newOrderCost.district_id,
      product_typeid: newOrderCost.product_typeid,
      service_id: newOrderCost.service_id,
      weight_id: newOrderCost.weight_id,
      zone_id: newOrderCost.zone_id
    };
    OrderServices.getOrderCost(ItemData)
    .then((res) => {
      setGetCost(res.data)
    })
    .catch((err) => notifyError(err.message));
  };


  const {
    state: { adminInfo },
  } = useContext(AdminContext);

  const { register, handleSubmit, onSubmit, errors, imageUrl, setImageUrl } = useOrderSubmit(adminInfo._id);

  return (
    <>
      <PageTitle>New Delivery</PageTitle>
      <div className="container mx-auto dark:text-gray-200 rounded-lg">
        <div className="md:grid md:grid-cols-3 md:gap-6">

          {/* start form */}
          <div className="mt-5 md:col-span-3 md:mt-0 bg-white dark:bg-gray-800">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
                <div className="md:grid md:grid-cols-1">
                    <LabelArea label="Merchant" />
                      <Select
                      className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                      name="merchant_id"
                      {...register('merchant_id', {
                        onChange: (e) => { handleOrderCalculate(e) },
                        required: 'Merchant is required!',
                      })} >
                        <option value="All" defaultValue hidden></option>
                      <StoreOptions />
                    </Select>
                    <Error errorName={errors.merchant_id} />
                </div>
                <span className='block mb-5'></span>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                      <LabelArea label="Store" />
                      <Select
                      className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                      name="store_id"
                      {...register('store_id', {
                        onChange: (e) => { handleOrderCalculate(e) },
                        required: 'Store is required!',
                      })} >
                        <option value="All" defaultValue hidden></option>
                      <StoreOptions />
                    </Select>
                    <Error errorName={errors.store_id} />
                  </div>
                  <div className="md:col-span-1">
                      <LabelArea label="Product Type" />
                      <Select
                      className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                      name="product_typeid"
                      {...register('product_typeid', {
                        onChange: (e) => { handleOrderCalculate(e) },
                        required: 'Store is required!',
                      })} >
                        <option value="All" defaultValue hidden></option>
                      <ProductTypeOptions />
                    </Select>
                  </div>
                  <div className="md:col-span-1">
                      <LabelArea label="Merchant Order ID" />
                      <InputArea
                        register={register}
                        label="Type ID (Optional)"
                        name="merchant_order_id"
                        type="text"
                        placeholder="Type ID (Optional)"
                      />
                      <Error errorName={errors.merchant_order_id} />
                  </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-2">
                    <h3 className='my-6 text-lg font-bold text-gray-700 dark:text-gray-300'>Recipient Details</h3>
                    <LabelArea label="Contact Person name" />
                    <InputArea
                      register={register}
                      label="Contact Person"
                      name="contact_person"
                      type="text"
                      placeholder="Contact Person"
                    />
                    <Error errorName={errors.contact_person} />
                    <span className='block mb-5'></span>

                    <LabelArea label="Recipient’s Phone" />
                    <InputArea
                      register={register}
                      label="Enter phone number"
                      name="recipientsphone"
                      type="text"
                      placeholder="Enter phone number"
                    />
                    <Error errorName={errors.recipientsphone} />
                    <span className='block mb-5'></span>
                    
                    <div className="md:grid md:grid-cols-2 md:gap-6">
                        <div className="md:col-span-1">
                          <LabelArea label="District" />


                          <Select className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                            name="district_id"
                            {...register('district_id', {
                              onChange: (e) => { handleOrderCalculate(e) },
                              required: 'Select District',
                            })} >
                              <option value="All" defaultValue hidden></option>
                            <DistrictOptions />
                          </Select>
                        </div>
                        <div className="md:col-span-1">
                          <LabelArea label="Zone" />
                          <Select className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                            name="zone_id"
                            {...register('zone_id', {
                              onChange: (e) => { handleOrderCalculate(e) },
                              required: 'Select Zone',
                            })} >
                              <option value="All" defaultValue hidden></option>
                            <ZoneOptions />
                          </Select>
                          <Error errorName={errors.zone_id} />
                        </div>
                    </div>
                    <span className='block mb-5'></span>

                      <LabelArea label="Select Area" />
                      <Select className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                            name="area_id"
                            {...register('area_id', {
                              onChange: (e) => { handleOrderCalculate(e) },
                              required: 'Select area',
                            })} >
                            <option value="All" defaultValue hidden></option>
                            <AreaOptions />
                      </Select>
                      <Error errorName={errors.area_id} />
                      <span className='block mb-5'></span>

                      <LabelArea label="Delivery Address" />
                      <InputTextArea
                        register={register}
                        label="Delivery Address"
                        name="delivery_address"
                        rows="3"
                        placeholder="Delivery Address"
                      />
                      <Error errorName={errors.delivery_address} />

                  </div>
                  <div className="md:col-span-1">
                    <h3 className='my-6 text-lg font-bold text-gray-700 dark:text-gray-300'>Delivery Details</h3>

                    <LabelArea label="Delivery Type" />
                      <Select
                      className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                      name="service_id"
                      {...register('service_id', {
                        onChange: (e) => { handleOrderCalculate(e) },
                        required: 'Store is required!',
                      })} >
                        <option value="All" defaultValue hidden></option>
                      <ServiceOptions />
                    </Select>
                    <Error errorName={errors.service_id} />

                    <span className='block mb-5'></span>


                    <LabelArea label="Total Weight" />
                      <Select
                      className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                      name="weight_id"
                      {...register('weight_id', {
                        onChange: (e) => { handleOrderCalculate(e) },
                        required: 'Wight is required!',
                      })} >
                        <option value="All" defaultValue hidden></option>
                      <WeightOptions />
                    </Select>
                    <Error errorName={errors.weight_id} />

                      <span className='block mb-5'></span>

                      <LabelArea label="Amount to Collect" />
                      <InputArea
                        register={register}
                        label="Amount to Collect"
                        name="amount_to_Collect"
                        type="text"
                        placeholder="Amount to Collect"
                      />
                      <Error errorName={errors.amount_to_Collect} />

                      <div className="px-4 sm:px-0">
                        <h3 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Cost Of Delivery</h3>
                          <div className="delivery-cost-row flex flex-1 mb-1">
                            <div className="flex-1">Delivery Fee</div>
                            <div className="w-16 text-right">৳{getCost.delivery_fee}</div>
                          </div>
                          <div className="delivery-cost-row flex flex-1 mb-1">
                            <div className="flex-1">Discount</div>
                            <div className="w-16 text-right text-red-600">-৳0</div>
                          </div>
                          <div className="delivery-cost-row flex flex-1 mb-1">
                            <div className="flex-1">Additional Charge</div>
                            <div className="w-16 text-right">৳{getCost.additional_charge}</div>
                          </div>
                          <div className="border border-black flex"></div>
                          <div className="delivery-cost-row total flex flex-1 font-bold text-gray-700 dark:text-gray-300">
                            <div className="flex-1">Total Cost</div>
                            <div className="w-40 text-right">৳260</div>
                          </div>
                      </div>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <div className="col-span-8 sm:col-span-4">
                    <span className='block mt-5'></span>
                    <LabelArea label="Delivery Note" />
                    <InputTextArea
                      register={register}
                      label="Delivery Note"
                      name="delivery_note"
                      rows="3"
                      placeholder="Delivery Note"
                    />
                    <Error errorName={errors.delivery_note} />
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
          {/* end form */}


        </div>
      </div>
    </>
  );
};

export default CreateOrder;
