import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: '',
            dataArray: [
                { id: 1, content: "morning vibes" }, { id: 2, content: "evening vibes" }
            ]
        }
    }
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({ content: e.target.value })
    }
    submitHandler = () => {
        const dataArray = this.state.dataArray.concat({ id: Math.random(), content: this.state.content })
        this.setState({ dataArray: dataArray })
        this.setState({ content: '' })
    }
    deleteHandler = (index) => e => {
        console.log(index)
        e.preventDefault()
        const dataArray = this.state.dataArray
        const data = dataArray.filter(data => data.id !== index && data)
        this.setState({ dataArray: data })
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.content} onChange={this.changeHandler} />
                <button onClick={this.submitHandler}>submit</button>
                {this.state.dataArray.map(content => <p onClick={this.deleteHandler(content.id)}>{content.content}</p>)}
            </div>
        )
    }
}

export default Todo
