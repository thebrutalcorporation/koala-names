import React from "react";
import { useHistory } from "react-router-dom";

const CHARACTERISTICS_OPTIONS = [
  { name: "elegant", icon: "🕊" },
  { name: "sporty", icon: "🏃🏻‍♂️" },
  { name: "sensitive", icon: "❤️" },
  { name: "insistent", icon: "🏔" },
  { name: "confident", icon: "💪🏼" },
  { name: "honest", icon: "🤝" },
  { name: "clever", icon: "🎓" },
  { name: "creative", icon: "💡" },
  { name: "optimistic", icon: "🙂" },
  { name: "reliable", icon: "⛓" },
  { name: "keen", icon: "👁" },
  { name: "empathetic", icon: "💕" },
];

const Characteristics = ({
  gender,
  limit,
  setLimit,
  setGender,
  characteristics,
  setCharacteristics,
}) => {
  const history = useHistory();

  const handleSelection = (event, characteristicName) => {
    const characteristicsCopy = characteristics;

    // Find index
    const findIdx = characteristics.indexOf(characteristicName);

    if (findIdx > -1) {
      characteristicsCopy.splice(findIdx, 1);
      setLimit(false);
    } else if (characteristicsCopy.length >= 5) {
      setLimit(true);
      return;
    } else if (!limit) {
      characteristicsCopy.push(characteristicName);
    }

    setCharacteristics(() => [...characteristicsCopy]);
  };

  const handleSubmit = () => {
    console.log("in handle submit");
    return history.push("/analyze");
  };

  return (
    <>
      {limit && <div>You can only choose 5!!!</div>}
      {gender && (
        <div>Selected characteristics: {JSON.stringify(characteristics)}</div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(gender);
          console.log(characteristics);
          handleSubmit();
        }}
      >
        {!gender && (
          <div>
            <button
              onClick={() => {
                setGender("boy");
              }}
            >
              boy
            </button>
            <button onClick={() => setGender("girl")}>girl</button>
          </div>
        )}
        {gender &&
          CHARACTERISTICS_OPTIONS.map((characteristic) => (
            <label key={characteristic.name}>
              {characteristic.icon}
              {characteristic.name}
              <input
                disabled={
                  limit && !characteristics.includes(characteristic.name)
                }
                type="checkbox"
                onChange={(event) =>
                  handleSelection(event, characteristic.name)
                }
                selected={characteristics.includes(characteristic.name)}
              />
            </label>
          ))}
        {characteristics.length === 5 && <button type="submit">Submit</button>}
      </form>
    </>
  );
};

export default Characteristics;
