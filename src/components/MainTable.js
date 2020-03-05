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
    result: {},
    search: ""
  };

  componentDidMount() {
    console.log(columns);
    this.searchEmployee()
  }

  searchEmployee = query => {
    API.getRandomEmployee(query)
      .then(res => console.log(res))
      // this.setState({ result: res.data}))
      // .catch(err => console.log(err));
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
                {/* { this.state.results.map(row => {
                  <th key={row.id}> */}

                  {/* </th> */}
                {/* })} */}
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