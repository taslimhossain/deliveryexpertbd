import React from 'react';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow, Badge } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import AreaDrawer from '../drawer/AreaDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const AreaTable = ({ tdata }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <AreaDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {tdata.map((item, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {item.id}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {' '}
                {item.name}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {' '}
                {item.zone_name}
              </span>
            </TableCell>

            <TableCell className="align-middle ">
              { item.pickup_accept == 1 ? (
                <Badge type="success">Yes</Badge>
              ) : (
                <Badge type="danger">No</Badge>
              )}
            </TableCell>

            <TableCell className="align-middle ">
              { item.delivery_accept == 1 ? (
                <Badge type="success">Yes</Badge>
              ) : (
                <Badge type="danger">No</Badge>
              )}
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

export default AreaTable;
