import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TableSortLabel,
  Box,
  TablePagination,
} from "@mui/material";
import { formatTableName, getComparator } from "../../utils/table";
import { IDataType, TableOrder } from "../../interface/common";
import { visuallyHidden } from "@mui/utils";
import { ROWS_PER_PAGE } from "../../constant/TableConst";

interface CustomSimpleTableProps<T> {
  data: T[];
}

const CustomeSimpleTable = <T extends IDataType>({ data }: CustomSimpleTableProps<T>) => {
  const [order, setOrder] = React.useState<TableOrder>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof T>("name");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id as string);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const createSortHandler = (property: keyof IDataType) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * ROWS_PER_PAGE - data.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      data
        .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
        .sort(getComparator(order, orderBy)),

    [order, orderBy, page, ROWS_PER_PAGE]
  );

  const columns = Object.keys(data[0] || {}).filter((key) => key !== "id");

  return (
    <Box width={"100%"}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {columns.map((column, index) => (
                <TableCell key={index} sortDirection={orderBy === column ? order : false}>
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : "asc"}
                    onClick={createSortHandler(column)}
                  >
                    {formatTableName(column)}
                    {orderBy === column ? (
                      <Box component={"span"} sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id as string);

              return (
                <TableRow
                  hover
                  onClick={(event: any) => handleClick(event, row.id as string)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={index}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" checked={isItemSelected} />
                  </TableCell>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{row[column]}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default CustomeSimpleTable;
