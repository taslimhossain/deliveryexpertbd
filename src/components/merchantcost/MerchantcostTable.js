import React from 'react';
import { TableCell, TableBody, TableRow, Badge } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import MerchantcostDrawer from '../drawer/MerchantcostDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const MerchantcostTable = ({ merchantcosts }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <MerchantcostDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {merchantcosts.map((item, i) => (
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
              <span className="text-sm"> {item.pickup_amount} </span>{' '}
            </TableCell>

            <TableCell>
              {' '}
              <span className="text-sm"> {item.delivery_amount} </span>{' '}
            </TableCell>

            <TableCell>
              {' '}
              <span className="text-sm"> {item.discount_amount} </span>{' '}
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

export default MerchantcostTable;
