import React, { useState } from "react";

interface TableRowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const ObjectivesScopeInputDataDeliverables: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const tableData: TableRowData[] = [
    { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
    { id: 3, name: "Mark Johnson", age: 35, email: "mark.johnson@example.com" },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}></th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Rate Table Table
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Category Type
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            DNA internal category
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Bill rate category
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Curr</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Bill Rate
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            BIll Rate Criteria
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Yrs Exp Start
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Yrs Exp End
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Valid from
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Valid To</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.id}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.age}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.email}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.id}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.age}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.email}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.id}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row.age}
              </td>
            </tr>
            {isCollapsed && (
              <tr>
                <td
                  colSpan={4}
                  style={{ border: "1px solid #ccc", padding: "8px" }}
                >
                  Additional information for {row.name}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ObjectivesScopeInputDataDeliverables;
