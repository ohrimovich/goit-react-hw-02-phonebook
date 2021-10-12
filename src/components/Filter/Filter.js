import React, { Component } from "react";
import PropTypes from "prop-types";
import s from './Filter.module.scss'


class  Filter extends Component {
  

    handlerChange = e => {
        const filteredValue = e.currentTarget.value;
        this.props.onChange(filteredValue);
    }
    render() {
        return (
            <label className={s.label}>
                Find contact by name
                 <input className={s.input} type="text" autoComplete="off"
             onChange={this.handlerChange} />
         </label>
        
    )  
   } 
}

Filter.propTypes = {
   handlerChange: PropTypes.func
}
export default Filter;