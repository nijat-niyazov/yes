import { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from '../data/columns';
import DATA from '../data/data.json';
import '../table.css';

const SortedTable = () => {
  console.log(COLUMNS);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const {
    getTableProps, // table itself
    getTableBodyProps, //body
    headerGroups, // headers from columns js
    footerGroups, //  footers from columns js
    rows, // mock data
    prepareRow,
  } = tableInstance;

  console.log(headerGroups);
  console.log(footerGroups);

  return (
    <table {...getTableProps()}>
      {/* table props ⤴ */}
      <thead>
        {headerGroups.map(group => {
          // multiple headers ↖
          return (
            <tr {...group.getHeaderGroupProps()}>
              {/* groupheaders props  */}
              {group.headers.map(col => (
                // return subHeadersOfGroup
                <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                  {col.render('Header')}
                  <span>
                    {col.isSorted && (col.isSortedDesc ? ' 🔽' : ' 🔼')}
                  </span>
                </th>
                // it is header(key) of column js
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                // it is key word
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map(footer => {
          return (
            <tr {...footer.getFooterGroupProps()}>
              {footer.headers.map(column => {
                return (
                  <td {...column.getFooterProps(column.getSortByToggleProps())}>
                    {column.render('Footer')}
                    {/* it is key word of exported js */}
                    <span>
                    {column.isSorted && (column.isSortedDesc ? ' 🔽' : ' 🔼')}
                  </span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    </table>
  );
};

export default SortedTable;
