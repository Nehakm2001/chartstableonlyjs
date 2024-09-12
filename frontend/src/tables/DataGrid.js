import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './Datagrid.css';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '11px', borderRadius: '10px' }}>
        <strong style={{ fontSize: '1.0rem', fontWeight: 'bold' }}>Id</strong>
      </div>
    ),
  },
  {
    field: 'first_name', headerName: 'First Name', width: 150,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '11px', borderRadius: '10px' }}>
        <strong>First Name</strong>
      </div>
    ),
  },
  {
    field: 'last_name', headerName: 'Last Name', width: 150,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '11px', borderRadius: '10px' }}>
        <strong>Last Name</strong>
      </div>
    ),
  },
  {
    field: 'email', headerName: 'Email', width: 200,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
        <strong>Email</strong>
      </div>
    ),
  },
  {
    field: 'gender', headerName: 'Gender', width: 120,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
        <strong>Gender</strong>
      </div>
    ),
  },
  {
    field: 'country', headerName: 'Country', width: 150,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
        <strong>Country</strong>
      </div>
    ),
  },
  {
    field: 'phone', headerName: 'Phone', width: 150,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
        <strong>Phone</strong>
      </div>
    ),
  },
  {
    field: 'date_of_birth', headerName: 'Date of Birth', width: 150,
    renderHeader: () => (
      <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
        <strong>Date of Birth</strong>
      </div>
    ),
  },
];

export default function SimpleDataGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tableData')
      .then(response => {
        console.log("Data from backend is fetched for datagrid table")
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='title'>
        <h1>DATAGRID TABLE</h1>
      </div>
      <div className="data-grid-container" style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </div>
    </>
  );
}






// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import MOCK_DATA from './MOCK_DATA.json'; // Adjust path as per your project structure
// import './Datagrid.css';


// const columns = [
//   {
//     field: 'id',
//     headerName: 'ID',
//     width: 90,
//     // headerAlign: 'center',
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '11px', borderRadius: '10px' }}>
//         <strong style={{ fontSize: '1.0rem', fontWeight: 'bold' }}>Id</strong>
//       </div>
//     ),
//   },

//   {
//     field: 'first_name', headerName: 'First Name', width: 150,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '11px', borderRadius: '10px' }}>
//         <strong>First Name</strong>
//       </div>
//     ),
//   },

//   {
//     field: 'last_name', headerName: 'Last Name', width: 150,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '11px', borderRadius: '10px' }}>
//         <strong>Last Name</strong>
//       </div>
//     ),
//   },
//   {
//     field: 'email', headerName: 'Email', width: 200,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
//         <strong>Email</strong>
//       </div>
//     ),
//   },
//   {
//     field: 'gender', headerName: 'Gender', width: 120,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
//         <strong>Gender</strong>
//       </div>
//     ),
//   },
//   {
//     field: 'country', headerName: 'Country', width: 150,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
//         <strong>Country</strong>
//       </div>
//     ),
//   },
//   {
//     field: 'phone', headerName: 'Phone', width: 150,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
//         <strong>Phone</strong>
//       </div>
//     ),
//   },
//   {
//     field: 'date_of_birth', headerName: 'Date of Birth', width: 150,
//     renderHeader: () => (
//       <div style={{ backgroundColor: '#ddecfa', padding: '8px', borderRadius: '6px' }}>
//         <strong>Date of Birth</strong>
//       </div>
//     ),
//   },
// ];

// export default function SimpleDataGrid() {
//   return (


//     <><div className='title'>
//       <h1>DATAGRID TABLE</h1>
//     </div>

//       <div className="data-grid-container"
//         style={{ height: 400, width: '100%' }}
//       >
//      <DataGrid
//           rows={MOCK_DATA}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 5,
//               },
//             },
//           }} />
//       </div>
//       </>
//   );
// } 
