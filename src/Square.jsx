const Square = ({ row, column, borders, wolf, francesco }) => {
  const getDirectionString = (border) => {
    switch (border) {
      case "L":
        return "Left";
      case "R":
        return "Right";
      case "T":
        return "Top";
      case "B":
        return "Bottom";
      default:
        break;
    }
  };

  const getColor = () => {
    if (wolf) {
      return "red";
    }
    if (francesco) {
      return "green";
    }
    return "white";
  };

  const createCssBorders = () => {
    if (borders) {
      const styles = {
        backgroundColor: getColor(),
      };
      borders.split("").forEach((border) => {
        styles["border" + getDirectionString(border)] = "1px solid black";
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
