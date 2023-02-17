import React from 'react';
import './sidebar.css';
import { BsFillCalendarWeekFill, BsFillDiscFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Siderbar = () => {
  return (
    <div className="">
      <div
        className="d-flex px-10px flex-column flex-shrink-0 siderbar"
        style={{ width: '4.5rem' }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item  pb-10 ">
            <NavLink
              to="/"
              className="nav-link "
              title="Home"
              style={{
                fontSize: '38px',
              }}
            >
              <BsFillDiscFill className="text-white" />
            </NavLink>
          </li>
          <span className="border-bottom w-50 mx-auto"></span>
          <li className="nav-item  py-10 ">
            <NavLink
              to="product"
              className="nav-link "
              activeclassname="active--link"
            >
              <BsFillCalendarWeekFill className="text-white" />
            </NavLink>
          </li>
          <span className="border-bottom w-50 mx-auto"></span>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
