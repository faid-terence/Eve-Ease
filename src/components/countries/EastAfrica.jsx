import React from "react";

const EastAfricanCountries = [
  { code: "BI", label: "Burundi" },
  { code: "KE", label: "Kenya" },
  { code: "RW", label: "Rwanda" },
  { code: "TZ", label: "Tanzania" },
  { code: "UG", label: "Uganda" },
];

const EastAfricanFlags = ({ selected, onSelect }) => {
  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="flag-select"
      style={{ height: "40px", width: "96%" }} // Adjust the height value as per your requirement
    >
      {EastAfricanCountries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.label}
        </option>
      ))}
    </select>
  );
};

export default EastAfricanFlags;
