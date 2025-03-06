import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const MenuItem = ({ route, label, subMenus, isCollapsed }) => {
  if (subMenus?.length > 0) {
    return (
      <li>
        <details open={!isCollapsed}>
          <summary className="text-base">{label}</summary>
          <ul>
            {subMenus.map((menu) => (
              <MenuItem {...menu} key={menu.label} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <Link to={route} className="text-base">
        {label}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string.isRequired,
  subMenus: PropTypes.arrayOf(PropTypes.shape(this)),
  isCollapsed: PropTypes.bool,
};

export default MenuItem;
