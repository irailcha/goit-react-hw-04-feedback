import React from 'react';
import PropTypes from 'prop-types';
import './Section.styled';

import {SectionStyle, TitleStyle} from './Section.styled'

const Section = ({ title, children }) => (
  <SectionStyle className='section'>
    <TitleStyle className='section-title'>{title}</TitleStyle>
    {children}
  </SectionStyle>
);

Section.propTypes = {
  
  title: PropTypes.string.isRequired,


};


export default Section;