import React from "react";
import EmployeeData from "./employeedata";
import Navbar from "./navbar";
import SearchBox from "./searchbox";
import API from "../utils/API";

/*

 sortingByName: {},
        searchingByName: {}
*/


class MainPage extends React.Component {

    //what is a good strategy for know what key:value pairs to put into your state object? How do you know what to keep track of?
    //modify the state that I get back from the API call by sorting by name and searching by name
    state = {

        result: [],
        resultOriginal:[],
        sortingByName: [],
        searchingByName:[],
        count: -1,
        fullName: "",
        
        
       
    }

    //Why is it we have to handle all the queries here and we can't pass queries like props?
    componentDidMount() {
        this.searchEmployees();
    }

      //how come you can't write this in the format function searchEmployees (){...}?
    searchEmployees = ()=>{
        //how come you don't have to return the query below, but we return values from other functions?
        //inside of classess setState merges state property nicely*
        API.getUsers()
            .then(res=>this.setState({result: res.data.results,resultOriginal:res.data.results,searchingByName:res.data.results}))
            .catch(err=>{console.log("The query threw an err: ",err)})

    }

    sortEmployeesByName = ()=>{
        
        console.log("This is the count state: ",this.state.count)
        switch(this.state.count){
            case -1:
                this.setState({result:this.state.result
                    .sort(function(a, b) {
                        var nameA = a.name.first.toUpperCase()+a.name.last.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.name.first.toUpperCase()+b.name.last.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                      
                        // names must be equal
                        return 0;
                      })
                });

                this.setState({count:1})

                break;
            case 1:

                this.setState({result:this.state.result
                    .sort(function(a, b) {
                        var nameA = a.name.first.toUpperCase()+a.name.last.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.name.first.toUpperCase()+b.name.last.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                          return 1;
                        }
                        if (nameA > nameB) {
                          return -1;
                        }
                      
                        // names must be equal
                        return 0;
                      })
                });

                this.setState({count:-1})


                break;
            default:
                break;
        }

  
    }


    handleInputChange = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })


        this.setState({searchingByName: this.state.resultOriginal.filter(employee => employee.name.first.includes(value)||employee.name.last.includes(value))})

        
    };

    render () {

        if(this.state.fullName.length>0&&this.state.searchingByName.length>0){
            return (
                <>
                    <Navbar />
                    <SearchBox fullName={this.state.fullName} handleChange={this.handleInputChange}/>
                    <EmployeeData data={this.state.searchingByName} sortByName={this.sortEmployeesByName} dataSearch={this.state.searchingByName}  fullName={this.state.fullName} />
                </>
            ) 
        }


        return (
            <>
                <Navbar />
                <SearchBox fullName={this.state.fullName} handleChange={this.handleInputChange}/>
                <EmployeeData data={this.state.result} sortByName={this.sortEmployeesByName} dataSearch={this.state.searchingByName}  fullName={this.state.fullName} />
            </>
        ) 


    }


}

export default MainPage;