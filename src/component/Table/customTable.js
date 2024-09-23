import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const CustomTable = ({data, columns, loading})=>{
    // const memoizedColumns = useMemo(()=> columns, [columns]);

    return(
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
    );
};

export default CustomTable;