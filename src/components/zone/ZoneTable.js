import React from 'react';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow, Badge } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import DistrictDrawer from '../drawer/DistrictDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const ZoneTable = ({ zones }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <DistrictDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {zones.map((zone, i) => (
      
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {zone.id}
              </span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm"> {zone.name}</span>{' '}
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm font-semibold">
                {zone.district_name}
              </span>{' '}
            </TableCell>
            <TableCell className="align-middle ">
              { zone.status === false ? (
                <Badge type="danger">InActive</Badge>
              ) : (
                <Badge type="success">Active</Badge>
              )}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={zone.id}
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

export default ZoneTable;
