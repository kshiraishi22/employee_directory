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
        console.log(res);
        this.setState({
          results: res.data.results,
          filtered: res.data.results
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleFilter = event => {
    const { value } = event.target;

    const filtered = this.state.results.filter(person => {
      if (person.name.last.includes(value)) {
        return true;
      } else {
        return false;
      }
    });

    if(filtered.length === 1){
      console.log(Object.values(filtered[0]))
    }

    this.setState({ filter: value, filtered: filtered });
  };

  render() {
    // var data = {
    //   name: "ben",
    //   age: 31
    // };

    // var myArr = ["dog", "cat"];
    // console.log(myArr[0]);
    // var key = "name";
    // console.log(data[key]);
    // key = "age";
    // console.log(data[key]);

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
                {this.state.filtered.map(person => (
                  <tr>
                    <td><img src={person.picture.thumbnail} alt="#" /></td>
                    <td>{person.name.first} {person.name.last}</td>
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
