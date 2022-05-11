import * as React from 'react';
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';

function getFullName(params) {
  return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns = [
  { field: 'firstName', headerName: 'First name', width: 400,editable:true },
  { field: 'lastName', headerName: 'Last name', width: 400 ,editable:true},
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 400,
    valueGetter: getFullName,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
];

export default function ValueGetterGrid() {
    const [pageSize, setPageSize] = React.useState(2);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} components={{
          Toolbar: GridToolbar,
        }}
        checkboxSelection={true}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination />
    </div>
  );
}
