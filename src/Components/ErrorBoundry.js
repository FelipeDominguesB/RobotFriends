import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(properties){
        super(properties);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(erro, informacoes)
    {
        
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError)
        {
            return <h1>Houve um erro, abra o console para visualizar e resolver;</h1>
        }
        return this.props.children;
    }
}


export default ErrorBoundry;