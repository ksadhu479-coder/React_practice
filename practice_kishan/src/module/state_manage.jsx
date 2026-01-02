import React,{Component} from 'react';

//react page ke re-rendering(refres) ke uper kam karta he par,
//jab hame ui me changes ke karne he run time so we use the state

//its called conditional rendering



class First extends Component{
    constructor(){
        super();//its use the seuper class functions and variables
        this.state = {//using state we can change value at run time
            name : "",
            ison : false,
            changecolor: false
        }
    }
    //e tab pass karo jab value input lena he agar pehlese hi input he to mat lo (like ON OFF)
    changeName = (e) =>{
        this.setState({name : e.target.value})
    }

    changeMethod = () => {
        this.setState({ison : !this.state.ison}) //iska matlab ye he ki jo value he uska ulta kardega agar ye nahi kiya to ye value same hi rahegi(NOT OPRATOR)
    }

    changeColor = () =>{
        this.setState({changecolor : !this.state.changecolor})
    }




    render(){
        return(
            <>
                    <input type="text" value={this.state.name} onChange={this.changeName} /><br></br>
                    <h4>Name : {this.state.name} </h4>


                    <br></br>
                    <br></br>

                    <button onClick={this.changeMethod}> {this.state.ison ? "on" : "off" } </button>


                    <br></br><br></br>

                    <h4
                      style={{
                            color: this.state.changecolor ? "black" : "white",
                            backgroundColor: this.state.changecolor ? "red" : "blue"
                        }}

                    >this is text </h4>
                    {/* <body style={{
                            color: this.state.changecolor ? "blue" : "red",
                            backgroundColor: this.state.changecolor ? "black" : "blue"
                        }}></body> */}

                    <button onClick={this.changeColor}> {this.state.changecolor ? " bgblue" : "bgblack"} </button>

            </>
        );
    }


}

export default First;