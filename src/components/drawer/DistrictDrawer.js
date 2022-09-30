import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import InputValue from '../form/InputValue';
import DrawerButton from '../form/DrawerButton';
import useDistrictSubmit from '../../hooks/useDistrictSubmit';
import SelectStatusOption from '../form/SelectStatusOption';

const DistrictDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = useDistrictSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update District"
            description="Updated your District and necessary information from here"
          />
        ) : (
          <Title
            title="Add District"
            description="Add your District and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="District Name" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="District name"
                    name="districtName"
                    type="text"
                    placeholder="District name"
                  />
                  <Error errorName={errors.districtName} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Cost" />
                <div className="col-span-8 sm:col-span-4">
                  <InputValue
                    register={register}
                    label="cost"
                    name="districtCost"
                    type="number"
                    placeholder="Cost"
                  />
                  <Error errorName={errors.districtCost} />
                </div>
              </div>
         
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Status" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectStatusOption
                    register={register}
                    label="District Status"
                    name="districtStatus"
                  />
                  <Error errorName={errors.districtStatus} />
                </div>
              </div>
          </div>

          <DrawerButton id={id} title="District" />
        </form>
      </Scrollbars>
    </>
  );
};

export default DistrictDrawer;
