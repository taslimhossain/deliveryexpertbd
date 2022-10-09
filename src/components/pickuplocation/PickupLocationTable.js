import React from 'react';
import { TableCell, TableBody, TableRow, Badge } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import PickupLocationDrawer from '../drawer/PickupLocationDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const PickupLocationTable = ({ pickuplocations }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <PickupLocationDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {pickuplocations.map((item, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {item.id}
              </span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm"> {item.name} </span>{' '}
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm font-semibold">
                {' '}
                {item.phone}
              </span>{' '}
            </TableCell>

            <TableCell>
              {' '}
              <p className="text-sm"> <span className="font-semibold">Distric : </span> {item.district_name} <br/> <span className="font-semibold">Zone : </span> {item.zone_name} <br/> <span className="font-semibold">Area : </span> {item.area_name} <br/> <span className="font-semibold">Details : </span> {item.address} </p>{' '}
            </TableCell>

            <TableCell className="align-middle ">
              { item.status === false ? (
                <Badge type="danger">InActive</Badge>
              ) : (
                <Badge type="success">Active</Badge>
              )}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={item.id}
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

export default PickupLocationTable;
