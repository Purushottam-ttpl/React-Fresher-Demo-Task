import { useEffect, useMemo, useState } from 'react';
import CustomTable from './customTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../folderRedux/saga/actions';
import { patientColumns } from './tableConstants';


const Table = () => {

  const dispatch = useDispatch();
  const {data, loading}  = useSelector((state) => state.auth);

  console.log("state from useState--->",data);


  useEffect(()=>{

    // dispatch(fetchUserData('https://jsonplaceholder.typicode.com/users'));

    const table_Key = process.env.REACT_APP_TABLE_API_KEY;
    dispatch(fetchUserData(table_Key));

  },[dispatch]);


  const columns = useMemo(()=>
    patientColumns.map((col)=>({
      accessorKey: col.accessorKey,
      header: col.header,
      size: col.size
    }))
  ,[patientColumns],
);

  return(
    <CustomTable
    data={data}
    columns={columns}
    loading={loading}
    />
  );
};

export default Table;
