import React from 'react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';

const organizations = [
  { name: 'Red Cross', description: 'Providing emergency assistance, disaster relief, and education.', image: 'https://via.placeholder.com/150x150?text=Red+Cross' },
  { name: 'World Wildlife Fund', description: 'Conserving nature and reducing the most pressing threats to the diversity of life on Earth.', image: 'https://via.placeholder.com/150x150?text=WWF' },
  { name: 'Doctors Without Borders', description: 'Providing medical care to people affected by crises and conflict.', image: 'https://via.placeholder.com/150x150?text=Doctors+Without+Borders' },
  { name: 'Save the Children', description: 'Fighting for children’s rights and helping them reach their potential.', image: 'https://via.placeholder.com/150x150?text=Save+The+Children' },
  { name: 'Habitat for Humanity', description: 'Building homes and communities for those in need.', image: 'https://via.placeholder.com/150x150?text=Habitat+for+Humanity' },
  { name: 'United Nations Children’s Fund', description: 'Providing humanitarian aid to children worldwide.', image: 'https://via.placeholder.com/150x150?text=UNICEF' },
  { name: 'Oxfam', description: 'Working to end poverty and injustice around the world.', image: 'https://via.placeholder.com/150x150?text=Oxfam' },
  { name: 'Greenpeace', description: 'Campaigning to protect the environment and promote peace.', image: 'https://via.placeholder.com/150x150?text=Greenpeace' },
  { name: 'Amnesty International', description: 'Protecting human rights and preventing injustice worldwide.', image: 'https://via.placeholder.com/150x150?text=Amnesty+International' },
  { name: 'World Food Programme', description: 'Fighting hunger and promoting food security in crisis areas.', image: 'https://via.placeholder.com/150x150?text=World+Food+Programme' },
  // Add more dummy organizations here to make it a total of 50
  { name: 'International Red Cross', description: 'Humanitarian aid in conflict and disaster areas.', image: 'https://via.placeholder.com/150x150?text=Red+Cross+Intl' },
  { name: 'CARE International', description: 'Fighting global poverty and providing disaster relief.', image: 'https://via.placeholder.com/150x150?text=CARE+Intl' },
  { name: 'Plan International', description: 'Helping children around the world realize their potential.', image: 'https://via.placeholder.com/150x150?text=Plan+Intl' },
  { name: 'GlobalGiving', description: 'Connecting donors with grassroots organizations worldwide.', image: 'https://via.placeholder.com/150x150?text=GlobalGiving' },
  { name: 'Mercy Corps', description: 'Empowering people to recover from crisis and build better lives.', image: 'https://via.placeholder.com/150x150?text=Mercy+Corps' },
  { name: 'ActionAid', description: 'Fighting poverty and social injustice in developing countries.', image: 'https://via.placeholder.com/150x150?text=ActionAid' },
  { name: 'The Nature Conservancy', description: 'Protecting the lands and waters on which all life depends.', image: 'https://via.placeholder.com/150x150?text=Nature+Conservancy' },
  { name: 'Global Fund for Women', description: 'Advocating for women’s rights and gender equality globally.', image: 'https://via.placeholder.com/150x150?text=Global+Fund+For+Women' },
  { name: 'Fondo de Acción', description: 'Environmental organization protecting wildlife and ecosystems.', image: 'https://via.placeholder.com/150x150?text=Fondo+De+Accion' },
  { name: 'Human Rights Watch', description: 'Defending human rights and promoting justice for all.', image: 'https://via.placeholder.com/150x150?text=Human+Rights+Watch' },
  // Add more dummy organizations until you have 50 total
];

const Organizations = () => {
  return <>
  <Navbar />
    <div className="bg-gray-50 min-h-screen py-8">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-purple-600">Our Partner Organizations</h1>
        <p className="text-lg mt-2 text-gray-600">Here are some of the NGOs and organizations working with us to make a difference.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 border lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {organizations.map((org, index) => (
          <div key={index} className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src={org.image} alt={org.name} className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{org.name}</h3>
            <p className="text-gray-600 mt-2">{org.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  <Footer />
  </>
};

export default Organizations;