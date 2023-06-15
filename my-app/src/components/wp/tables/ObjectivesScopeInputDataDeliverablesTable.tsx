import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

  const handleNameChange = (event: any, editor: any, row: TableRowData) => {
    const updatedData = editor.getData();
    // Update the row.name value here if needed
    // For example, row.name = updatedData;
    console.log(updatedData);
  };

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        {/* ... */}
      </thead>
      <tbody>
        {tableData.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              {/* ... */}
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <CKEditor
                  editor={ClassicEditor}
                  data={row.name}
                  onChange={(event: any, editor: any) => handleNameChange(event, editor, row)}
                />
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor!</p>"
                  onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log(data);
                  }}
                />
              </td>
              {/* ... */}
            </tr>
            {/* ... */}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ObjectivesScopeInputDataDeliverables;
