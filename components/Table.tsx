import {DataGrid , GridRowsProp} from '@mui/x-data-grid';

const Table = ({data, columns, handleRowClick, height = '80vh'}: any) => {
    const rows: GridRowsProp = data;

    return <div style={{height: height}}>
        <DataGrid
            getRowId={(row) => row.project_id}
            rows={rows}
            columns={columns}
            onRowClick={handleRowClick}
        />
    </div>
}

export default Table;