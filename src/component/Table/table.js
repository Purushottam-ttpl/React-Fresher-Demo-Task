import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from "axios";

//example data type
// const Person = {
//   name: {
//     firstName: "",
//     lastName: "",
//   },
//   address: "",
//   city: "",
//   state: "",
// };

//nested data is ok, see accessorKeys in ColumnDef below
// const data = [
//   {
//     name: {
//       firstName: 'John',
//       lastName: 'Doe',
//     },
//     address: '261 Erdman Ford',
//     city: 'East Daphne',
//     state: 'Kentucky',
//   },
//   {
//     name: {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//     address: '769 Dominic Grove',
//     city: 'Columbus',
//     state: 'Ohio',
//   },
//   {
//     name: {
//       firstName: 'Joe',
//       lastName: 'Doe',
//     },
//     address: '566 Brakus Inlet',
//     city: 'South Linda',
//     state: 'West Virginia',
//   },
//   {
//     name: {
//       firstName: 'Kevin',
//       lastName: 'Vandy',
//     },
//     address: '722 Emie Stream',
//     city: 'Lincoln',
//     state: 'Nebraska',
//   },
//   {
//     name: {
//       firstName: 'Joshua',
//       lastName: 'Rolluffs',
//     },
//     address: '32188 Larkin Turnpike',
//     city: 'Omaha',
//     state: 'Nebraska',
//   },
 
// ];

const Example = () => {
  //should be memoized or stable

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
console.log("data from useState--->",data);

    useEffect(()=>{
        getData();
    },[]);

    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
                console.log("data", response);
                console.log("respons data--->", response.data);
                setData(response.data);
                setLoading(false);
            })
            .catch(error=>{
                console.log("error", error);
            })

       
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
    {!loading &&(
         <MaterialReactTable table={table} />
    )}     
    </>
  );
};

export default Example;
