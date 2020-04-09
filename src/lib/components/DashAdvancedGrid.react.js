import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashAdvancedGrid extends Component {
    render() {
        return (
            <div id={this.props.id} className="ag-theme-balham" style={this.props.style}>
                <AgGridReact
                    columnDefs={this.props.header}
                    rowData={this.props.rows}>
                </AgGridReact>
            </div>
        );
    }
}

DashAdvancedGrid.defaultProps = {};

DashAdvancedGrid.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    data: PropTypes.object,
    header: PropTypes.array,
    rows: PropTypes.array,
    style: PropTypes.object
};
