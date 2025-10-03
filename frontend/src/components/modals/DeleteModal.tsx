import React, { useState } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface deleteContactProps {
  contactId: string;
  onDelete?: (id: string) => void;
}

const DeleteModal: React.FC<deleteContactProps> = ({ contactId, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/contact/${contactId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: contactId }),
        }
      );

      if (!response.ok) {
        console.log("Failed To Delete Contact");
        toast.error("Houston, deleting contact has failed");
      }

      const result = await response.json();

      if (onDelete) {
        onDelete(contactId);
      }

      toast.success("Houston, contact deleted successfully");
      window.location.reload();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Failed to delete contact. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        color="danger"
        variant="outlined"
        onClick={showModal}
        style={{ fontSize: "1.1rem", padding: "20px" }}
      >
        <i className="fa-solid fa-trash"></i>
      </Button>
      <Modal
        title={<span style={{ fontSize: "1.2rem" }}>Delete Contact</span>}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#c1121f",
            fontSize: "1.1rem",
            padding: "10px",
          },
        }}
        okText="Delete"
        cancelButtonProps={{
          style: {
            fontSize: "1.1rem",
          },
        }}
      >
        <p style={{ fontSize: "1rem" }}>
          Are you sure you want to delete this contact?
        </p>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default DeleteModal;
