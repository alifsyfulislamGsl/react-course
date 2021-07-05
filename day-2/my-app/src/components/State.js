import React from 'react'
// import ReactDom from 'react-dom'

class State extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : 1,
            name : 'Syful Islam',
            email : 'alifsyfulislam@gmail.com'
        }
    }

    //before return double render
    /*componentDidMount() {
        console.log("after HTML read!");
        this.setState({
            id : 1,
            name : 'Syful Islam Alif',
            email : 'alifsyfulislam@gmail.com'
        })

        //state not changed! after render it will be!
        console.log(this.state)
    }*/

    //after gettting new value!
    componentWillMount() {
        console.log("after HTML read!");
        setTimeout(()=>{
            this.setState({
                id : 1,
                name : 'Syful Islam Alif',
                email : 'alifsyfulislam@gmail.com'
            })
        },5e3)

        //state not changed! after render it will be!
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        console.log("before HTML read!");

        return (
            <>
                <h1>Hello from state! {this.props.msg}</h1>

                <p>
                    Hi! {this.state.name}.
                    Your id is {this.state.id} and
                    your account is registered through {this.state.email}!
                </p>
            </>
        )
    }
}

export default State;