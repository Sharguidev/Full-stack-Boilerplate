import React, { useState } from "react";
import { Button, Modal } from "antd";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button color="danger" variant="outlined" onClick={showModal}>
        <i className="fa-solid fa-trash"></i>
      </Button>
      <Modal
        title="Delete Contact"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
        okButtonProps={{ danger: true }}
        okText="Delete"
      >
        <p>Are you sure you want to delete this contact?</p>
      </Modal>
    </>
  );
};

export default App;
