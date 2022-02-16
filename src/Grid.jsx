import Square from "./Square";

const Grid = ({ data }) => (
  <table>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {row.map(({ row, column, borders, wolf, francesco }, index) => (
            <Square
              row={row}
              column={column}
              borders={borders}
              wolf={wolf}
              francesco={francesco}
              key={index}
            ></Square>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
