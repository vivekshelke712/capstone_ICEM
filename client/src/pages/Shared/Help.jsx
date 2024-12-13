import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGetAllOrgnizationQuery } from '../../redux/api/orgAPI';
import { useAddHelpRequestMutation } from '../../redux/api/helpApi';
import LoginPrompt from './LoginPrompt';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const [availableOrganizations, setAvailableOrganizations] = useState([]);
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [availableAreas, setAvailableAreas] = useState([]);
  const [liveLocation, setLiveLocation] = useState({ latitude: '', longitude: '' });
  // const [AddHelp,{isSuccess}] = useAddHelpRequestMutation(); 
  
  const { data: allOrganizations } = useGetAllOrgnizationQuery();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate() // Get the user from Redux store
// console.log(user.id);
  // Fetch live location of the user
  const [AddHelp,{isSuccess}] = useAddHelpRequestMutation(); 
  useEffect(() => {
   if(isSuccess){
    navigate('/')
   }
  }, [isSuccess])
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLiveLocation({ latitude, longitude });
          formik.setFieldValue('latitude', latitude); // Update formik latitude
          formik.setFieldValue('longitude', longitude); // Update formik longitude
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email:'',
      needType: '',
      contact: '',
      description: '',
      city: '',
      area: '',
      organization: '',
      latitude: liveLocation.latitude,
      longitude: liveLocation.longitude,
      isApproved: false,
      orgId: '', // Organization ID field
      userId: user?.id || '', // User ID field from Redux store
    },
    // console.log();
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      age: Yup.number()
        .required('Age is required')
        .min(1, 'Age must be at least 1')
        .max(100, 'Age must be below 100'),
      email:Yup.string().required('eamilis Required'),
      needType: Yup.string().required('Need Type is required'),
      contact: Yup.string().required('Contact number is required'),
      description: Yup.string().required('Description is required'),
      city: Yup.string().required('City is required'),
      area: Yup.string().required('Area is required'),
      organization: Yup.string().required('Organization is required'),
    }),
    onSubmit: async (values) => {
      console.log('Form Values:', values);
      // Call the mutation to add the help request
      console.log(values);
      AddHelp(values);
      
    },
  });

  // Handle city change and update formik values
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);

    // Filter areas based on selected city
    const areas = allOrganizations
      ?.filter((org) => org.city === selectedCity)
      .map((org) => org.area)
      .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

    setAvailableAreas(areas || []);
    setAvailableOrganizations([]); // Reset organizations when city changes
    setArea(''); // Reset area when city changes
    formik.setFieldValue('city', selectedCity);
    formik.setFieldValue('area', '');
    formik.setFieldValue('organization', '');
  };

  // Handle need type change and filter organizations
  const handleNeedTypeChange = (e) => {
    const selectedNeedType = e.target.value;
    formik.setFieldValue('needType', selectedNeedType);
    formik.setFieldValue('city', ''); // Reset city
    formik.setFieldValue('area', ''); // Reset area

    const filteredOrganizations = allOrganizations?.filter(
      (org) => org.orgType === selectedNeedType
    );

    setAvailableOrganizations(filteredOrganizations || []);
    formik.setFieldValue('organization', ''); // Reset organization field when need type changes
  };

  // Handle area change and filter organizations based on selected city, area, and need type
  const handleAreaChange = (e) => {
    const selectedArea = e.target.value;
    setArea(selectedArea);

    const filteredOrganizations = allOrganizations?.filter(
      (org) =>
        org.city === city &&
        org.area === selectedArea &&
        org.orgType === formik.values.needType
    );

    setAvailableOrganizations(filteredOrganizations || []);
    formik.setFieldValue('area', selectedArea);
    formik.setFieldValue('organization', '');
  };
  return (
    <>
    
      {user ? (
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Help Request Form</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Form fields here (same as before) */}
            <div>
<label htmlFor="name" className="block text-sm font-semibold">
  Name:
</label>
<input
  id="name"
  name="name"
  type="text"
  value={formik.values.name}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className="w-full p-2 border border-gray-300 rounded"
/>
{formik.touched.name && formik.errors.name && (
  <div className="text-red-500 text-sm">{formik.errors.name}</div>
)}
</div>

{/* Contact and Description Fields */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
  <label htmlFor="contact" className="block text-sm font-semibold">
    Contact Number:
  </label>
  <input
    type="text"
    id="contact"
    name="contact"
    value={formik.values.contact}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="w-full p-2 border border-gray-300 rounded"
  />
  {formik.touched.contact && formik.errors.contact && (
    <div className="text-red-500 text-sm">{formik.errors.contact}</div>
  )}
</div>

<div>
  <label htmlFor="description" className="block text-sm font-semibold">
    Description:
  </label>
  <textarea
    id="description"
    name="description"
    value={formik.values.description}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="w-full p-2 border border-gray-300 rounded"
    rows="4"
  />
  {formik.touched.description && formik.errors.description && (
    <div className="text-red-500 text-sm">{formik.errors.description}</div>
  )}
</div>
</div>

{/* Other fields (age, contact, description, etc.) */}
{/* Other fields (age, contact, description, etc.) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label htmlFor="age" className="block text-sm font-semibold">
Age:
</label>
<input
id="age"
name="age"
type="number"
value={formik.values.age}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
className="w-full p-2 border border-gray-300 rounded"
/>
{formik.touched.age && formik.errors.age && (
<div className="text-red-500 text-sm">{formik.errors.age}</div>
)}
</div>

<div>
<label htmlFor="needType" className="block text-sm font-semibold">
Need Type:
</label>
<select
id="needType"
name="needType"
value={formik.values.needType}
onChange={handleNeedTypeChange}
onBlur={formik.handleBlur}
className="w-full p-2 border border-gray-300 rounded"
>
<option value="">Select Need Type</option>
<option value="AnimalShelter">Animal Shelter</option>
<option value="OldAgeHome">Old Age Home</option>
<option value="EducationalHelp">Educational Help</option>
</select>
{formik.touched.needType && formik.errors.needType && (
<div className="text-red-500 text-sm">{formik.errors.needType}</div>
)}
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
  <label htmlFor="city" className="block text-sm font-semibold">
    City:
  </label>
  <select
    id="city"
    name="city"
    value={formik.values.city}
    onChange={handleCityChange}
    onBlur={formik.handleBlur}
    className="w-full p-2 border border-gray-300 rounded"
  >
    <option value="">Select City</option>
    <option value="Pune">Pune</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Delhi">Delhi</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Chennai">Chennai</option>
  </select>
  {formik.touched.city && formik.errors.city && (
    <div className="text-red-500 text-sm">{formik.errors.city}</div>
  )}
</div>

<div>
  <label htmlFor="area" className="block text-sm font-semibold">
    Area:
  </label>
  <select
    id="area"
    name="area"
    value={formik.values.area}
    onChange={handleAreaChange}
    onBlur={formik.handleBlur}
    className="w-full p-2 border border-gray-300 rounded"
    disabled={!availableAreas.length}
  >
    <option value="">Select Area</option>
    {availableAreas.map((area) => (
      <option key={area} value={area}>
        {area}
      </option>
    ))}
  </select>
  {formik.touched.area && formik.errors.area && (
    <div className="text-red-500 text-sm">{formik.errors.area}</div>
  )}
</div>
</div>
            {/* Organization Selection */}
          {/* Organization Selection */}
<div>
  <label htmlFor="organization" className="block text-sm font-semibold">
    Organization:
  </label>
  <select
    id="organization"
    name="organization"
    value={formik.values.organization}
    onChange={(e) => {
      const selectedOrgId = e.target.value; // Get the selected organization ID
      formik.setFieldValue('organization', selectedOrgId); // Set the organization ID in Formik
      const selectedOrg = availableOrganizations.find(org => org._id === selectedOrgId); // Find the selected organization
      if (selectedOrg) {
        formik.setFieldValue('orgId', selectedOrg._id); 
        console.log();
        formik.setFieldValue('email' ,selectedOrg.orgEmail)// Set the orgId in Formik
      }
    }}
    onBlur={formik.handleBlur}
    className="w-full p-2 border border-gray-300 rounded"
    disabled={!availableOrganizations.length}
  >
    <option value="">Select Organization</option>
    {availableOrganizations.map((org) => (
      <option key={org._id} value={org._id}> {/* Use org._id here */}
        {org.orgName}
      </option>
    ))}
  </select>
  {formik.touched.organization && formik.errors.organization && (
    <div className="text-red-500 text-sm">{formik.errors.organization}</div>
  )}
</div>

            {/* Latitude and Longitude */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label htmlFor="latitude" className="block text-sm font-semibold">
      Latitude:
    </label>
    <input
      id="latitude"
      name="latitude"
      type="text"
      value={formik.values.latitude}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full p-2 border border-gray-300 rounded"
      readOnly
    />
  </div>

  <div>
    <label htmlFor="longitude" className="block text-sm font-semibold">
      Longitude:
    </label>
    <input
      id="longitude"
      name="longitude"
      type="text"
      value={formik.values.longitude}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full p-2 border border-gray-300 rounded"
      readOnly
    />
  </div>
</div>


            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      ) : (
        <LoginPrompt />
      )}
    </>
  );
};

export default Help;
