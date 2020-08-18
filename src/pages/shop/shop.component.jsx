import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import './shop.styles.scss';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {
      collections.map(({ id, ...otherCollectionProps}) => (
        <CollectionPreview key={ id } { ...otherCollectionProps }/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
