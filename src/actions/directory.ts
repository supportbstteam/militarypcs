const directory = async () => {
  try {
    const res = await fetch('https://teamwebdevelopers.com/MilitaryPCS/api/directory', {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('❌ API responded with status:', res.status);
      return [];
    }

    const json = await res.json();

    // console.log('✅ Directory fetched:', json);

    return json;
  } catch (error) {
    console.error('❌ Fetch error:', error);
    return [];
  }
};

export default directory