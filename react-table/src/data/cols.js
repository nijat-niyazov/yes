import { format } from 'date-fns';
import FilterByCol from '../tables/FilterByCol';

export const cols = [
  // {
  //   Header: 'Main',
  //   foot: 'Esas',
  //   columns: [
      {
        Header: 'ID',
        foot: 'Kimlik',
        accessor: 'id', // accessor is the "key" in the data
        Filter: FilterByCol
      },
      {
        Header: 'First Name',
        foot: 'Ad',
        accessor: 'first_name', // accessor is the "key" in the data
        Filter: FilterByCol
      },
      {
        Header: 'Last Name',
        foot: 'Soyad',
        accessor: 'last_name',
        Filter: FilterByCol
      },
  //   ],
  // },
  // {
  //   Header: 'Others',
  //   foot: 'Digerleri',
  //   columns: [
      {
        Header: 'Email',
        foot: 'E-poct',
        accessor: 'email',
        Filter: FilterByCol
      },
      {
        Header: 'Birth Date',
        foot: 'Dogum-tarixi',
        accessor: 'date_of_birth',

        Cell: (data) => {
          // console.log(data);
          return format(new Date(data.value), 'dd/MM/yyyy');
        },
        Filter: FilterByCol
      },
      {
        Header: 'Age',
        foot: 'Yash',
        accessor: 'age',
        Filter: FilterByCol
      },
      {
        Header: 'Country',
        foot: 'Olke',
        accessor: 'country',
        Filter: FilterByCol
      },
      {
        Header: 'Phone',
        foot: 'Telefon',
        accessor: 'phone',
        Filter: FilterByCol
      },
  //   ],
  // },
];
