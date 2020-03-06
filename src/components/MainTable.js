import React from "react";
import API from "../utils/API";

const columns = [
  { id: 1, label: "image" },
  { id: 2, label: "name" },
  { id: 3, label: "phone" },
  { id: 4, label: "email" },
  { id: 5, label: "DOB" }
];

class MainTable extends React.Component {
  state = {
    results: [],
    filtered: [],
    filter: ""
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = query => {
    API.getRandomEmployee(query)
      .then(res => {
        const mapped = res.data.results.map(person => ({
          first: person.name.first,
          last: person.name.last,
          phone: person.phone,
          email: person.email,
          dob: person.dob.date,
          thumbnail: person.picture.thumbnail
        }));

        console.log(mapped);
        this.setState({
          results: mapped,
          filtered: mapped
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleFilter = event => {
    const { value } = event.target;

    const filtered = this.state.results.filter(person => {
      const stringVal = JSON.stringify(person).toLowerCase();
      if (stringVal.includes(value.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      filter: value,
      filtered: filtered
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <input
            type="text"
            className="form-control"
            onChange={this.handleFilter}
            value={this.state.filter}
            placeholder="Search"
          />
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  {columns.map(column => (
                    <th key={column.id}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.filtered.map((person, i) => (
                  <tr key={i + "-tableRow"}>
                    <td>
                      <img src={person.thumbnail} alt="#" />
                    </td>
                    <td>
                      {person.first} {person.last}
                    </td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td>{person.dob.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
export default MainTable;
