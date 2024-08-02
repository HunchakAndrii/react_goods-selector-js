import "bulma/css/bulma.css";
import "./App.scss";
import { useState } from "react";
import classNames from "classnames";

export const goods = [
  "Dumplings",
  "Carrot",
  "Eggs",
  "Ice cream",
  "Apple",
  "Bread",
  "Fish",
  "Honey",
  "Jam",
  "Garlic",
];

export const App = () => {
  const [value, setValue] = useState("Jam");

  return (
    <main className="section container">
      {value ? (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue("");
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {goods.map((good) => (
        <table className="table" key={good}>
          <tbody>
            <tr
              data-cy="Good"
              className={classNames({
                "has-background-success-light": good === value,
              })}
            >
              <td>
                <button
                  data-cy={good === value ? "RemoveButton" : "AddButton"}
                  type="button"
                  className={`button ${good === value && "is-info"}`}
                  onClick={() => {
                    setValue(good === value ? "" : good);
                  }}
                >
                  {good === value ? "-" : "+"}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </main>
  );
};
