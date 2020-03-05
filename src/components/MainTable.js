import React from "react";
import API from "../utils/API"

const columns = [
  {id: 1, label: "img"},
  {id: 2, label: "name"},
  {id: 3, label: "phone"},
  {id: 4, label: "email"},
  {id: 5, label: "DOB"},
]

class MainTable extends React.Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmployee()
  }

  searchEmployee = query => {
    API.getRandomEmployee(query)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }


render() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <table className="table">
              <thead>
                <tr>
                  { columns.map(column => (
                  <th key={column.id}>{column.label}</th> ))}
                </tr>
              </thead>
              <tbody>
                { this.state.results.map(person => (
                <tr>
                  <td><img src={person.picture.thumbnail} /></td>
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
      </div>
    </>
    )
  }
}
export default MainTable