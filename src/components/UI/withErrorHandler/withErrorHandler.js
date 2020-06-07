import React, { Component } from 'react';

import Modal from '../Modal/Modal';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponenet, axios) => {
  return class extends Component {
    state = {
      err: null,
    };
    componentWillMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ err: null });
      });
      axios.interceptors.response.use(null, (err) => {
        this.setState({ err: err });
      });
    }
    render() {
      return (
        <Aux>
          <Modal show={this.state.err}>{this.state.err}</Modal>
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
