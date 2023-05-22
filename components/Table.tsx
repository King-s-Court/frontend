import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';

export type TableProps = {
    rows: GridRowsProp,
    columns: GridColDef[],
    height?: string,
    handleRowClick: () => void,
}

const   Table = ({rows, columns, handleRowClick, height = '80vh'}: TableProps) => {
    
    return <div style={{height: height}}>
        <DataGrid
            getRowId={(row) => row.id}
            rows={rows}
            columns={columns}
            onRowClick={handleRowClick}
        />
    </div>
}

export default Table;