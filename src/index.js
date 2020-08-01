import React from 'react';
import ReactDOM from 'react-dom';

class OrderComponent extends React.Component{

  constructor(props){

    super(props);

    this.state={quantity:'',address:''};

  } 

  orderInfoChanged=val=>{
    this.setState({quantity:val});
  }

  addressChanged=val=>{
    this.setState({address:val});
  }

  render(){

    return(

      // <div>  //without using fragment
      //using fragment 
      <>  
        <h1>Product Order Screen...</h1>

        <ProductInformationComponent quantity={this.state.quantity}

                            onQuantityChange={this.orderInfoChanged}></ProductInformationComponent>



        <AddressComponent address={this.state.address} 

                      onAddressChange={this.addressChanged}></AddressComponent>

    

        <SummaryComponent quantity={this.state.quantity} address={this.state.address} 

                      onQuantityChange={this.orderInfoChanged}></SummaryComponent>

      {/* </div> */}
      </>
    );

  }

}



class ProductInformationComponent extends React.Component{

  constructor(props){

    super(props);

  }



  handleChange=e=>{

    this.props.onQuantityChange(e.target.value);

  }

  render(){

    return (

      <div style={{border:'3px solid red'}}>

       <h2>Product Information...</h2>

       <p>

         <label>Product Name : 

           <select>

             <option value="Product-1">Product-1</option>

             <option value="Product-2">Product-2</option>

             <option value="Product-3">Product-3</option>

           </select> </label>

       </p>

       <p>

         <label>Enter Quantity : <input type="text" value={this.props.quantity}

                                        onChange={this.handleChange} ></input></label>

       </p>

     </div>

    );

    

  }

}



class AddressComponent extends React.Component{

  constructor(props){

    super(props);

  }



  handleChange=e=>{

    this.props.onAddressChange(e.target.value);

  };



  render(){

    return (

      <div style={{border:'3px solid red'}}>

        <h2>Address Information...</h2>

        <p>

          <label>Address : <textarea value={this.props.address} 

                            onChange={this.handleChange}></textarea></label>

        </p>

        

        <CustomErrorBoundary>

        <UserPreferredAddressList/>        

        </CustomErrorBoundary>

        

        

      </div>

    );

  }

}

class CustomErrorBoundary extends React.Component {

  constructor(props) {

    super(props);

    this.state = { hasError: null };

  }



  static getDerivedStateFromError(error) {

    return { hasError: true };

  }



  componentDidCatch(error, errorInfo) {

    console.log(error);

    console.log(errorInfo);

  }



  render() {

    if (this.state.hasError) {

      // Error path

      return (

        <div>

          <h2>We are having Problems to Load your Preferred Addresses. Please Select...</h2>

          

        </div>

      );

    }

    // Normally, just render children

    return this.props.children;

  }

}

class UserPreferredAddressList extends React.Component{

  constructor(props){

    super(props);

  }

  render(){

    throw new Error("Not able to Fetch the Addresses at this moment");

      return (

      <div>

        <h2>Your Existing Addresses...</h2>

        <p>

          Office<br></br>

          Marathahalli, Bangalore-560037

        </p>

      </div>     

    );

  }

}

class SummaryComponent extends React.Component{

  constructor(props){

    super(props);

  }

  handleChange=e=>{

    this.props.onQuantityChange(e.target.value);

  }



  render(){

    return (

      <div style={{border:'3px solid red'}}>

        <h2>Summary Information...</h2>

        <p>

          <label>Product Name : <b>Product - 1</b></label>

        </p>

        <p>

         <label>Enter Quantity : <input type="text" value={this.props.quantity}

                                        onChange={this.handleChange} ></input></label>

       </p>

       <p>

         <label>Address : <b>{this.props.address}</b></label>

       </p>

       <button>Place Order</button>

      </div>

    )

  }

}

const element=<OrderComponent></OrderComponent>

ReactDOM.render(element,document.getElementById("root"));