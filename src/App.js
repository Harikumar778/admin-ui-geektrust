import { useEffect, useState } from "react";
import Search from "./Search";
import "./styles.css";

export default function App() {
  const [values, setValues] = useState([]);

  async function getData() {
    const data = await fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
    );
    const res = await data.json();
    setValues(res);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(idValues) {
    let userAfterDeletion = values.filter((user) => {
      return user.id !== idValues;
    });

    setValues(userAfterDeletion);
  }

  return (
    <div className="App">
      <Search values={values} setValues={setValues} />
      <table>
        <thead>
          <tr>
            <th>CustomerId</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {values &&
            values.map((customer) => (
              <tr key={customer.id}>
                <td contentEditable="true">{customer.name}</td>
                <td contentEditable="true">{customer.email}</td>
                <td contentEditable="true">{customer.role}</td>
                <button>Edit</button>
                <button onClick={() => handleDelete(customer.id)}>
                  delete
                </button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
