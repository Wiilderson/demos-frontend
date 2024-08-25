import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import '../App.css';
import { Frame } from '../Interfaces/Interface';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';

function Frames() {
  const selectedDemo = useSelector(
    (state: RootState) => state.demo.selectedDemo
  );
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFrameHtml, setCurrentFrameHtml] = useState('');
  const [idFrameHtml, setIdFrameHtml] = useState('');

  const handleFrameClick = (frame: Frame) => {
    setSelectedFrame(frame);
  };

  const handleOpenModal = (frame: Frame) => {
    setCurrentFrameHtml(frame.html);
    setIdFrameHtml(frame.id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="back cursor">
        <Link to="/">
          <button className=" text-white rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-200 ease-in-out hover:border-[#646cff]">
            Voltar
          </button>
        </Link>
      </div>
      <div className="demons-frames mb-7">
        {selectedDemo ? (
          selectedDemo.frames.map((frame) => (
            <div
              className="block w-[256px] text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              onDoubleClick={() => handleOpenModal(frame)}
            >
              <div key={frame.id} className="frame">
                <h5 className="mb-2 text-2xl font-bold p-3 tracking-tight text-gray-900 dark:text-white">
                  Frame {frame.order}
                </h5>
                <button
                  className="mb-3 rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-200 ease-in-out  hover:border-[#646cff]"
                  onClick={() => handleFrameClick(frame)}
                >
                  Visualizar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No demo selected</p>
        )}
      </div>
      <div className="">
        {isModalOpen && (
          <Modal
            frameHtml={currentFrameHtml}
            onClose={handleCloseModal}
            idFrameHtml={idFrameHtml}
          />
        )}
      </div>
      {selectedFrame && (
        <div className="iframe-container">
          <h3 className="mb-2 text-xl font-bold">
            Frame selecionado: {selectedFrame.order}
          </h3>
          <iframe
            srcDoc={selectedFrame.html}
            title={`Frame ${selectedFrame.order}`}
            className="frame-iframe"
          />
        </div>
      )}
    </>
  );
}

export default Frames;
