import React from 'react';
import { TableCell, TableBody, TableRow, Badge } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import ZoneinHubDrawer from '../drawer/ZoneinHubDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const HubinZoneTable = ({ zoneinhubs }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <ZoneinHubDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {zoneinhubs.map((item, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {item.id}
              </span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm"> {item.hub_name} </span>{' '}
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm"> {item.zone_name} </span>{' '}
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

export default HubinZoneTable;
