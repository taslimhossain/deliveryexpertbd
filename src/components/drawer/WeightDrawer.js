import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import useWeightSubmit from '../../hooks/useWeightSubmit';
import SelectStatusOption from '../form/SelectStatusOption';


const WeightDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = useWeightSubmit(id);
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Weight"
            description="Updated your Weight type and necessary information from here"
          />
        ) : (
          <Title
            title="Add Weight"
            description="Add your Weight type and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="From" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="From"
                    name="from"
                    type="text"
                    placeholder="From"
                  />
                  <Error errorName={errors.name} />
                </div>
              </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="To" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="To"
                    name="to"
                    type="text"
                    placeholder="To"
                  />
                  <Error errorName={errors.name} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Inside Amount" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="0"
                    name="inside_amount"
                    type="text"
                    placeholder="0"
                  />
                  <Error errorName={errors.inside_amount} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Outside Amount" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="0"
                    name="outside_amount"
                    type="text"
                    placeholder="0"
                  />
                  <Error errorName={errors.outside_amount} />
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

export default WeightDrawer;
