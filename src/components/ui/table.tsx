const Table = ({
  columns = [],
  items,
  name = '',
  onClick,
}: {
  columns: TableColumnType[];
  items: any[];
  name?: string;
  onClick?: any;
}) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse bg-white shadow-sm">
        <thead>
          <tr className="bg-blue-500 text-white uppercase text-sm leading-normal">
            {columns.map((column, columnKey) => (
              <th
                key={`${name}_COLUMNS_HEADER_${columnKey}`}
                className="py-3 px-4 text-left border-b"
              >
                {column.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {items.map((item, itemKey) => (
            <tr
              key={`${name}_BODY_${itemKey}`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                if (onClick) onClick(item);
              }}
              className={`border-b hover:bg-blue-100 transition-all ${
                onClick ? 'cursor-pointer' : ''
              }`}
            >
              {columns.map((column, columnKey) => (
                <td
                  key={`${name}_BODY_${itemKey}_${columnKey}`}
                  className="py-2 px-4 border-b"
                >
                  {item[column.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
