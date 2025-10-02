import React, { useState } from "react";
import { Button, Modal, Input } from "antd";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button color="danger" variant="outlined" onClick={showModal}>
        <i className="fa-solid fa-pen"></i>
      </Button>
      <Modal
        title="Edit Contact"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#fca311" } }}
        okText="Update"
      >
        <Input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Address"
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Phone"
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
      </Modal>
    </>
  );
};

export default App;
