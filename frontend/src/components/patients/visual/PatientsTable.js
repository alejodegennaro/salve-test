import React, { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table'
import { Typography} from '@mui/material';


 const PatientsTable = ({data}) => {
  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Clinic ID',
        accessor: 'clinic_id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Date of Birth',
        accessor: 'date_of_birth',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData }, useSortBy)

    return (<>
      {tableData.length ? 
      <>
      <Typography variant="caption" component="p" sx={{ textAlign: 'center'}}>
          Click on the header to sort
      </Typography>
        <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                 <span>
                     {column.isSorted
                       ? column.isSortedDesc
                         ? ' 🔽'
                         : ' 🔼'
                       : ''}
                   </span>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      </>
        
        : null }
    </>

    )
}

export default PatientsTable;