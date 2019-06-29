import React from "react";
//import "./Cources.css"

class Courcesels extends React.Component{
    
    sumPrice = (price) =>{
        this.setState({
            total : this.state.total + price
        })
    }

    constructor(props){
        super(props);

        this.state={
            total : 0
        };
    }
    
    render(){
        console.log(this.props.items); //this is the propes which is pass from the app.js

        var cources = this.props.items.map((item, i)=>{
            return <Cource name={item.name} price={item.price} key={i}
                    sumPrice={this.sumPrice} active={item.active}/>
        })

        return(
            <div>
                <h1>You Can buy any Courses</h1>
                <div className="courses">
                    {cources}
                    <p className="total">Total: <b>{this.state.total}</b></p>
                </div>
                <div className="ttt">
                    <p>Note: 
                        Click any course it will add on total</p>
                    <p>If you double click on any course, it will subtracted from total</p>
                    <p>© 2019
                    Created by
                    <a href="https://www.codeingschool.com/" target="_blank"> Subham Roy</a>
                    </p>
                </div>
            </div>
        )
    }
}






class Cource extends React.Component{

    clicker = () =>{
        console.log("Click");
        var active = !this.state.active
        //When any click, 1st we need to the active to true
        this.setState({
            active : active
        })
        // now add the price
        // this.props.sumPrice(this.props.price); //this only add the proces
        this.props.sumPrice(active ? this.props.price : -this.props.price); // this subtract one item, which is 2nd time clicked
    }

    constructor(props){
        super(props);

        this.state={
            active:false //Inisially anyone doesn't bye anything
        }
    }

    render(){
        return(
            <div>
                <p onClick={this.clicker}> {this.props.name} <b>{this.props.price}</b></p>
            </div>
        )
    }
}



export default Courcesels;