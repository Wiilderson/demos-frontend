import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  idFrameHtml: string;
  frameHtml: string;
  onClose: () => void;
};

function Modal({ frameHtml, onClose, idFrameHtml }: ModalProps) {
  const navigate = useNavigate();
  const API_URL = `${
    import.meta.env.VITE_PUBLIC_API_URL
  }/frames/${idFrameHtml}`;
  const [localFrameHtml, setLocalFrameHtml] = useState(frameHtml);

  useEffect(() => {
    setLocalFrameHtml(frameHtml);
  }, [frameHtml]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: localFrameHtml }),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
      onClose();
      navigate('/');
      toast.success(`Frame atualizado!`, {
        style: { whiteSpace: 'pre-line' },
      });
    } catch (error) {
      toast.error('Não foi possivel atualizar');
      console.log(error, 'ocorreu um erro ao atualizar!');
    }
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="w-1/2 relative rounded-lg shadow dark:bg-gray-700">
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Editar Frame Html
                </label>
                <textarea
                  id="description"
                  value={localFrameHtml}
                  onChange={(e) => setLocalFrameHtml(e.target.value)}
                  rows={15}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Insira o Frame em Html"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Atualizar
              </button>
              <button
                onClick={onClose}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
