import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from "axios";

const Example = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("data from useState--->",data);

    useEffect(()=>{
      setTimeout(() => {
        getData();
      }, 1000);
    },[]);

    const getData=()=>{
      
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            setData(response.data);
            setLoading(false); 
          })
          .catch(error => {
            console.log("error", error);
            setLoading(false);
          });
    };


  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'username', //normal accessorKey
        header: 'Username',
        size: 200,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'address.city',
        header: 'City',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return(
    <>
      <MaterialReactTable
      columns={columns}
      data={data}
      state={{ isLoading: loading }}
      muiCircularProgressProps={{
        color: 'secondary',
        thickness: 5,
        size: 55,
      }}
      muiSkeletonProps={{
        animation: 'pulse',
        height: 28,
      }}
    />  

{/* {!loading &&( */}
  
{/* <MaterialReactTable table={table} 
    state={{
      isLoading: loading, // Show loader when data is loading
      showSkeleton: loading,
    }}
    muiTablePaperProps={{
      elevation: 3,
    }}
    /> */}
{/* )}      */}




  
    </>
  );
};

export default Example;
