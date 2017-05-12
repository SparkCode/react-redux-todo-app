import React, {Component} from 'react';
import {Button, Col} from "react-bootstrap";

class TodoCreator extends Component {
    componentDidMount(){
        this.refs.text.focus();
    }

    onSubmit(e){
        e.preventDefault();
        let textElement = this.refs.text;
        this.props.addRecord({text: textElement.value});
        textElement.value = "";
    }

    onSubmitButton(e) {
        debugger;
        let submitButton = e.target;
        setTimeout(submitButton.blur.bind(submitButton), 100);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={e => this.onSubmit(e)}>
                <div className="row" style={{margin: "10px auto 20px auto"}}>
                    <Col md={9} style={{paddingLeft: 0}}>
                        <input style={{width: "100%" }}
                               className="form-control"
                               name="newTodo" ref="text"
                               placeholder="Just write down your todo"/>
                    </Col>
                    <div className="col-md-3 text-right" style={{paddingRight: 0}}>
                        <Button bsStyle="primary" type="submit" onClick={this.onSubmitButton}>Create new</Button>
                    </div>
                </div>
            </form>
        );
    }
}

TodoCreator.propTypes = {};
TodoCreator.defaultProps = {};

export default TodoCreator;
