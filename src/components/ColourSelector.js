import React from 'react';
import '../styles/Child.css';
import '../styles/App.css';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={config.classname} onClick={() => selectNextBackground({background: background})}>
      {config.label}
      {/* {console.log(config)} */}
    </button>
  )
}
export default ColourSelector;
