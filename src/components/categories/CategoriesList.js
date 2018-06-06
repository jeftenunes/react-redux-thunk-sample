import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { categoriesFetchData } from '../../actions/categories';

class CategoriesList extends Component {
    componentDidMount() {
        this.props.fetchData('https://maximusmaisapiwebapi20180531101119.azurewebsites.net/api/categories');
    }

    render() {
        if(this.props.hasErrored) {
            return <p>
                Error while loading categories.
            </p>;
        }

        if(this.props.isLoading) {
            return <p>Loading...</p>
        }

        return(<ul>
            {this.props.categories.map((item) => (
                    <li key={item.Id}>
                        {item.Name}
                    </li>
                ))}
        </ul>);
    }
}

CategoriesList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        hasErrored: state.categoriesHasErrored,
        isLoading: state.categoriesAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(categoriesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);