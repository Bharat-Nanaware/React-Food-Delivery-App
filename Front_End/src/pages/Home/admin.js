import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiurl } from '../../components/env/env';
import UserDetails from '../../pages/Home/userfoodDeatil';
import '../../styles/admin.css';
import ExportButton from "./ExportButton";

export default function Admin() {
  const [userdata, setuserdata] = useState(null);
  const [users, setUsers] = useState([]);
  const [userFood, setUserFood] = useState([]);


  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    console.log("bharat")
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...users].sort((a, b) => {
      if (direction === 'ascending') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setUsers(sortedData);
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onRowClick = async (data) => {
    setuserdata(data);
    if (data) {
      const res = await axios.get(
        apiurl + "/GetOrderDetails?id=" + data.userID
      );
      setUserFood(res.data);
      console.log(res.data);
    }
  };

  const loadUsers = async () => {
    const res = await axios.get(apiurl + "/GetUserData");
    setUsers(res.data);
  };
  return (
    <>
      <div className="container my-5">
        <ExportButton data={users} fileName="exported_data" />
        <table class="fl-table">
          <thead >
            <th onClick={() => handleSort('name')}>User Name</th>
            <th onClick={() => handleSort('street')}>Street</th>
            <th onClick={() => handleSort('postalCode')}>Postal Code</th>
            <th onClick={() => handleSort('city')}>City</th>
            <th onClick={() => handleSort('totalAmount')}>Total Amount</th>
          </thead>
          <tbody>
            {users.map((userDetails) => (
              <tr
                key={userDetails.name}
                onClick={() => onRowClick(userDetails)}
              >
                <td >{userDetails.name}</td>
                <td >{userDetails.street}</td>
                <td >{userDetails.postalCode}</td>
                <td >{userDetails.city}</td>
                <td >{userDetails.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {userdata && (
        <UserDetails userData={userdata} food={userFood} onClose={onRowClick} />
      )}
    </>
  );
}