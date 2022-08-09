import React from 'react';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow, Badge } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import CouponDrawer from '../drawer/CouponDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const DistrictTable = ({ districts }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  console.log('districtsdistrictsdistrictsdistricts', districts)
  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <CouponDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {districts.map((district, i) => (
      
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {district.id}
              </span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm"> {district.name}</span>{' '}
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm font-semibold">
                {Math.round(district.cost)}.00 ৳
              </span>{' '}
            </TableCell>
            <TableCell className="align-middle ">
              { district.status === 0 ? (
                <Badge type="danger">Expired</Badge>
              ) : (
                <Badge type="success">Active</Badge>
              )}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={district.id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default DistrictTable;
