import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { toast } from "react-toastify";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    last_name: "",
    email: "",
    address: "",
    phone: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const response = await fetch("http://127.0.0.1:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      toast.success("Contact created successfully 🎉");
      setIsModalOpen(false);
    } else {
      toast.error("Houston, we have a problem 🚨");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button color="cyan" variant="filled" onClick={showModal}>
        Add Contact
      </Button>
      <Modal
        title="Add Contact"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#344e41" } }}
        okText="Save Contact"
      >
        <Input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
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
