import React from "react";

const Footer = ({ items }) => {
  if (!items.length)
    return <p className="footer">Dodaj rzeczy do listy podróży!</p>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="footer">
      {packedPercentage === 100
        ? "Masz spakowane wszysko, ruszaj w drogę"
        : `Masz ${numItems} rzeczy na liście, i zapakowane ${packedItems} (
      ${packedPercentage}%)`}
      ;
    </footer>
  );
};

export default Footer;
