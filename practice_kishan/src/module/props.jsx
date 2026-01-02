import React,{Component} from 'react';
// import PropTypes from 'prop-type';

//props = data jo parent component child component ko deta hai


class First extends Component{
    render(){
        //destructure props
        const {img,price} = this.props;
        return(
            <>
                 <h1>this is example of the props  <u>{this.props.name}</u> </h1>

                 <h4>Name : {this.props.name}</h4>
                 <img src={img} alt="" height={100} width={100} />
                 <h4>Price : {price}</h4>
            </>
        );
    }
}


// default props
First.defaultProps = {
    name : "sadhu",
    img : "https://tse4.mm.bing.net/th/id/OIP.dYEt7HJ1fMzkjAdyU8hLdwHaFj?pid=Api&P=0&h=180",
    price : "20000"
}


//props types to check the type of data
// First.PropTypes = {
//     name : PropTypes.string.isRequired,
//     img : PropTypes.string.isRequired,
//     price : PropTypes.string.isRequired
// }

export default First;