import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectDemo } from '../Redux/DemoSlice';
import { Demo } from '../Interfaces/Interface';

function Demos() {
  const API_URL = `${import.meta.env.VITE_PUBLIC_API_URL}/demos`;
  const [demos, setDemos] = useState<Demo[]>([]);
  const dispatch = useDispatch();

  const handleSelectDemo = (demo: Demo) => {
    dispatch(selectDemo(demo));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL, {
        method: 'GET',
      });
      setDemos(await response.json());
    };

    fetchData();
  }, [API_URL]);
  return (
    <>
      <div>
        <div className="demons">
          {demos &&
            demos.map(
              (demo) => (
                demo.frames.sort((a, b) => a.order - b.order),
                (
                  <div
                    key={demo.id}
                    className="block w-[256px] text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold p-3 tracking-tight text-gray-900 dark:text-white">
                      {demo.name}
                    </h5>
                    <Link to="/frames" onClick={() => handleSelectDemo(demo)}>
                      <button className="mb-3 text-white rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-200 ease-in-out hover:border-[#646cff]">
                        Visualizar
                      </button>
                    </Link>
                  </div>
                )
              )
            )}
        </div>
      </div>
    </>
  );
}

export default Demos;
