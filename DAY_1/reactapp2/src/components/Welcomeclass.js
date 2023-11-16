import {Component} from 'react'
class Helloworld extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:this.props.name,
            city:"Paradis",
        }
    }
    render()
    {
        return(
        <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.city}</h1>
        </div>)
    }

}
export default Helloworld