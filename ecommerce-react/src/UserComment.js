import React, {Component} from 'react';

class UserComment extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            items: {}
        };
    }

    componentDidMount() {
        postData("http://localhost:1337/comments/")
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    function postData(url = "http://localhost:1337/comments/", data = {data}) {
        return fetch(url, {
            method: "POST",
        })
    }
    }


    onSubmit(e) {
        e.preventDefault();
        const newComment = { text: this.refs.input.value };
        if(this.refs.input.value.trim() === '') {
            return alert ('This is an empty field')
        }
        this.refs.input.value = '';
        console.log(newComment);



    };

    render() {
        const addNewComment = this.refs.newComment;
        return (
            <div>
                <div>{addNewComment}</div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input placeholder='Enter comment..' ref="input"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserComment;