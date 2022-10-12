import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import useZoneSubmit from '../../hooks/useZoneSubmit';
import SelectStatusOption from '../form/SelectStatusOption';
import SelectDistrictOption from '../form/SelectDistrictOption';
import InputCheckbox from '../form/InputCheckbox';


const ZoneDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = useZoneSubmit(id);
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Zone"
            description="Updated your Zone and necessary information from here"
          />
        ) : (
          <Title
            title="Add Zone"
            description="Add your Zone and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Zone Name" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label="Zone name"
                    name="zoneName"
                    type="text"
                    placeholder="Zone name"
                  />
                  <Error errorName={errors.zoneName} />
                </div>
              </div>
       
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Distric" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectDistrictOption
                    register={register}
                    label="Select District"
                    name="zonedistrict"
                    placeholder="Select District"
                  />
                  <Error errorName={errors.zonedistrict} />
                </div>
              </div>
         
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Is it inside city?" />
                <div className="col-span-8 sm:col-span-4">
                  <InputCheckbox
                    register={register}
                    label="Yes"
                    defaultValue="1"
                    name="is_insidecity"
                    required={true}
                  />
                  <Error errorName={errors.is_insidecity} />
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Status" />
                <div className="col-span-8 sm:col-span-4">
                  <SelectStatusOption
                    register={register}
                    label="Zone Status"
                    name="zoneStatus"
                  />
                  <Error errorName={errors.zoneStatus} />
                </div>
              </div>

          </div>

          <DrawerButton id={id} title="Zone" />
        </form>
      </Scrollbars>
    </>
  );
};

export default ZoneDrawer;
