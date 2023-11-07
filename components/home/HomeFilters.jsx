import { HomePageFilters } from '@/constants/filters';
import React from 'react';
import Button from '../ui/button';

const HomeFilters = () => {
  return (
    <div className="mt-10 flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button></Button>
      ))}
    </div>
  );
};

export default HomeFilters;
