import React from 'react';
import { useGetAllOrgnizationQuery } from '../redux/api/orgAPI';

const Test = () => {
  const { data } = useGetAllOrgnizationQuery();

  return (
    <>
      {data &&  (
        data.map((org) => (
          <div key={org._id}> {/* Assuming each organization has a unique _id */}
            <h3>{org.name}</h3>
            <p>{org.city}</p>
          </div>
        ))
      )}
     
    </>
  );
};

export default Test;