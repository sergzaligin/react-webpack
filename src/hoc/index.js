import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class WithAuth extends Component{

  render(){

    if(this.props.isAuth) return <Redirect to="/" />;

    return (

      <>
        { this.props.children }
      </>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {})(WithAuth);
