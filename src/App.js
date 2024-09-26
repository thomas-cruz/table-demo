import React from "react";
import { Table } from "./Table/index";
import { useMockAPI } from "./mockAPI";
import { usePagination } from "./usePagination";
import { useSorting } from "./useSorting";
import "./styles.css";

const cols = [
  { id: "id", header: "Ep. overall", enableSorting: true },
  {
    id: "episode",
    header: "Ep. in season",
    enableSorting: false,
  },
  { id: "title", header: "Title", enableSorting: true },
];

export const App = () => {
  const { limit, onPaginationChange, skip, pagination } = usePagination();

  const { sorting, onSortingChange, field, order } = useSorting();

  const [data, count, loading] = useMockAPI("/episodes", {
    pagination: { skip, limit },
    sort: { field, order },
  });

  return (
    <>
      <h1>Attack on TanStack Table</h1>
      <Table
        cols={cols}
        data={data}
        loading={loading}
        onPaginationChange={onPaginationChange}
        onSortingChange={onSortingChange}
        rowCount={count}
        pagination={pagination}
        sorting={sorting}
      />
    </>
  );
};
