import { useEffect, useMemo, useState } from 'react';
import TableService from '../services/tableServices/tableService';
import CustomTable from './customTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../folderRedux/saga/actions';


const Table = () => {

  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.auth);

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  console.log("data from useState--->",data);

  const columnConfig = [
    {accessorKey: 'id', header: 'ID', size: 150},
    {accessorKey: 'name', header: 'Name', size: '150'},
    { accessorKey: 'username', header: 'Username', size: 200 },
    { accessorKey: 'email', header: 'Email', size: 150 },
    { accessorKey: 'address.city', header: 'City', size: 150 },
  ];


  useEffect(()=>{
    // dispatch(fetchUserData('https://jsonplaceholder.typicode.com/users'));

    const table_Key = process.env.REACT_APP_TABLE_API_KEY;
    dispatch(fetchUserData(table_Key));

  },[dispatch]);

    // useEffect(()=>{
    //   setTimeout(() => {
    //     fetchData();
    //   }, 1000);
    // },[]);


    // const fetchData= async ()=>{
    //     try {
    //       const response = await TableService.getUserData();
    //       setData(response.data);
    //       setLoading(false);
    //     } catch (error) {
    //       console.log("error", error);
    //       setLoading(false);
    //     }
    // };


  const columns = useMemo(()=>
    columnConfig.map((col)=>({
      accessorKey: col.accessorKey,
      header: col.header,
      size: col.size
    }))
  ,[columnConfig],
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
