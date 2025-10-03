import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    setUser({
      name: "",
      last_name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  const handleOk = async () => {
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: {
            ...user,
            is_active: true,
          }, // Add this if your backend requires it
        }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser({
          name: "",
          last_name: "",
          email: "",
          address: "",
          phone: "",
        });
        setIsModalOpen(false);
        toast.success("Contact created successfully 🎉", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        return data;
      } else {
        toast.error("Houston, we have a problem 🚨");
      }
    } catch (e) {
      console.log("Error:", e);
      toast.error("Houston contact creation has failed 🚨");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        color="cyan"
        variant="filled"
        onClick={showModal}
        style={{ fontSize: "1.1rem" }}
      >
        Add Contact
      </Button>
      <Modal
        title="Add Contact"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#344e41",
            fontSize: "1.1rem",
            padding: "10px",
          },
        }}
        okText="Save Contact"
        cancelButtonProps={{
          style: {
            fontSize: "1.1rem",
          },
        }}
      >
        <Input
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Last Name"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <br />
        <br />
        <Input
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
      </Modal>
      <ToastContainer />
    </>
  );
};

export default App;
