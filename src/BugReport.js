import React from 'react';

class BugReport extends React.Component {
    thisWontWork = ({ color }) => (data) => {
        return <div color={ color }>does not reference data</div>;
    };

    thisWorks = ({ color }) => (data) => {
        return <div color={ color }>{ data }</div>;
    };

    render() {
        return <div />
    }
}