import React from "react";

export const TaskTableRow = () => {
  return (
      <tr className="custom-table-row hover:bg-gray-50">
          <td className="text-gray-800 text-center p-4 text-sm">
              Opening Meeting
          </td>
          <td className="text-gray-800 text-center p-4 text-sm">
              Joe
          </td>
          <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-red-500 w-max text-white rounded">High</div>
          </td>
          <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">Done</div>
          </td>
          <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                  <div className="w-4/5 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">80%</p>
          </td>
      </tr>

  );
};
