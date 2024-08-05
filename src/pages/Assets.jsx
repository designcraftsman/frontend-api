import React from 'react';
import PropTypes from 'prop-types';
import { assetShape } from '../types/types.js';
import AssetCard from '../components/AssetCard.jsx';
import AssetModal from '../components/AssetModal.jsx';

const Assets = ({ assets }) => {
  return (
    <div   className="assets dashboard">
      <div>
        <h4   className="mt-2">Assets</h4>
        <div   className="row">
          {assets.map((asset, index) => (
            <div   className="col-12 col-sm-6 col-md-3 mb-3" key={index}>
              <a href="#" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${index}`}>
                <AssetCard {...asset} />
              </a>
              <AssetModal {...asset} modalId={`staticBackdrop${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Assets.propTypes = {
  assets: PropTypes.arrayOf(assetShape).isRequired,
};

export default Assets;

