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
import InputTextArea from '../components/form/InputTextArea';

const CreateOrder = () => {
  const {
    state: { adminInfo },
  } = useContext(AdminContext);

  const { register, handleSubmit, onSubmit, errors, imageUrl, setImageUrl } =
  useOrderSubmit(adminInfo._id);

  return (
    <>
      <PageTitle>New Delivery</PageTitle>
      <div className="container mx-auto dark:text-gray-200 rounded-lg">
        <div className="md:grid md:grid-cols-3 md:gap-6">

          {/* start form */}
          <div className="mt-5 md:col-span-3 md:mt-0 bg-white dark:bg-gray-800">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                      <LabelArea label="Store" />
                      <SelectPickupOption
                        register={register}
                        label="Select Store"
                        name="store_id"
                        placeholder="Select Store"
                      />
                      <Error errorName={errors.store_id} />
                  </div>
                  <div className="md:col-span-1">
                      <LabelArea label="Product Type" />
                      <SelectProductOption
                        register={register}
                        label="Select Product type"
                        name="product_typeid"
                        placeholder="Select Product type"
                      />
                      <Error errorName={errors.product_typeid} />
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
                          <SelectDistrictOption
                            register={register}
                            label="Select District"
                            name="district_id"
                            placeholder="Select District"
                          />
                          <Error errorName={errors.district_id} />
                        </div>
                        <div className="md:col-span-1">
                          <LabelArea label="Zone" />
                          <SelectZoneOption
                            register={register}
                            label="Select Zone"
                            name="zone_id"
                            placeholder="Select Zone"
                          />
                          <Error errorName={errors.zone_id} />
                        </div>
                    </div>
                    <span className='block mb-5'></span>

                      <LabelArea label="Select Area" />
                      <SelectAreaOption
                        register={register}
                        label="Select Area"
                        name="area_id"
                        placeholder="Select Area"
                      />
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
                      <SelectServiceOption
                        register={register}
                        label="Delivery Type"
                        name="service_id"
                        placeholder="Delivery Type"
                      />
                      <Error errorName={errors.service_id} />
                      <span className='block mb-5'></span>

                      <LabelArea label="Total Weight" />
                      <SelectWeightOption
                        register={register}
                        label=""
                        name="weight_id"
                        placeholder=""
                      />
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
                            <div class="flex-1">Delivery Fee</div>
                            <div className="w-16 text-right">৳285</div>
                          </div>
                          <div className="delivery-cost-row flex flex-1 mb-1">
                            <div class="flex-1">Discount</div>
                            <div className="w-16 text-right text-red-600">-৳25</div>
                          </div>
                          <div className="delivery-cost-row flex flex-1 mb-1">
                            <div class="flex-1">Additional Charge</div>
                            <div className="w-16 text-right">৳25</div>
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
