const ComponentWithModal = ({ isModalOpen, modalContent, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30'>
          <div className='bg-[#f7f7f7] w-[97%]  h-[80vh] rounded-lg p-4 relative overflow-y-auto shadow-lg'>
            <h2 className='text-lg font-bold mb-4 text-center border-b pb-2'>
              {modalContent?.title}
            </h2>
            <div className='space-y-4'>
              <p>
                <strong>Name:</strong> {modalContent?.details.name}
              </p>
              <p>
                <strong>Category:</strong> {modalContent?.details.category}
              </p>
              <p>
                <strong>Price:</strong> {modalContent?.details.price}
              </p>
              <p>
                <strong>Weight:</strong> {modalContent?.details.weight}
              </p>
              <div className='flex justify-center'>
                <img
                  src={modalContent?.details.image_url}
                  alt={modalContent?.details.name}
                  className='w-60 h-96 object-cover  rounded-lg'
                />
              </div>
            </div>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-black hover:text-red-600 text-2xl font-bold'
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentWithModal;
