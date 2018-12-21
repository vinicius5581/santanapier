import React from 'react';
import Select from 'react-select';
import './About.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const About = () => (
    <div>
        <h1>About</h1>
        <Select
          className="selectAbout"
          classNamePrefix="selectAbout"
          defaultValue={options[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name="flavor"
          options={options}
          backspaceRemovesValue={true}
          onChange={(value)=>console.log(value)}
        />
    </div>
)

export default About;