import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import useAreaSubmit from '../../hooks/useAreaSubmit';
import SelectStatusOption from '../form/SelectStatusOption';
import SelectZoneOption from '../form/SelectZoneOption';


const AreaDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = useAreaSubmit(id);
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Area"
            description="Updated your Area and necessary information from here"
          />
        ) : (
          <Title
            title="Add Area"
            description="Add your Area and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Area Name" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Zone name"
                    name="areaName"
                    type="text"
                    placeholder="Zone name"
                  />
                  <Error errorName={errors.areaName} />
                </div>
              </div>
       
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Zone" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectZoneOption
                    register={register}
                    label="Select Zone"
                    name="areaZone"
                    placeholder="Select Zone"
                  />
                  <Error errorName={errors.areaZone} />
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

export default AreaDrawer;
