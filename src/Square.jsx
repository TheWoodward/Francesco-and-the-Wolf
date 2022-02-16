const Square = ({ row, column, borders }) => {
  const getDirectionString = (border) => {
    console.log(border);
    switch (border) {
      case "L":
        return "left";
      case "R":
        return "right";
      case "T":
        return "top";
      case "B":
        return "bottom";
      default:
        break;
    }
  };

  const createCssBorders = () => {
    if (borders) {
      const styles = {};
      borders.split("").forEach((border) => {
        styles["border-" + getDirectionString(border)] = "1px solid black";
      });
      return styles;
    }
  };

  return (
    <td style={createCssBorders()}>
      <h1>{row.toString() + column.toString()}</h1>
    </td>
  );
};

export default Square;
