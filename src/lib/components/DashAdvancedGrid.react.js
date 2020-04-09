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
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.props.data.header,
            rowData: this.props.data.rows
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="ag-theme-balham" style={{ height: '200px', width: '600px' }}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
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

    data: PropTypes.object
};
