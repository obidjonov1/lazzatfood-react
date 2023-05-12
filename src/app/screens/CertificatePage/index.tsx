import React from "react";
import { Container } from "@mui/system";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import "../../../css/sertificate.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  outline: "none",
};

export function CertificatePage(props: any) {
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleOpen = (id: string) => {
    setSelectedImage(id);
  };

  const handleClose = () => {
    setSelectedImage("");
  };

  const certificates = [
    {
      id: "sertificate1",
      image: "./images/sertificate1.jpeg",
    },
    {
      id: "sertificate2",
      image: "./images/sertificate2.jpeg",
    },
  ];

  const certificates_meat = [
    {
      id: "sertificate1",
      image: "./images/sertificate3.jpeg",
    },
    {
      id: "sertificate2",
      image: "./images/sertificate4.jpeg",
    },
    {
      id: "sertificate3",
      image: "./images/sertificate5.jpeg",
    },
    {
      id: "sertificate4",
      image: "./images/sertificate6.jpeg",
    },
    {
      id: "sertificate5",
      image: "./images/sertificate7.jpeg",
    },
    {
      id: "sertificate6",
      image: "./images/sertificate8.jpeg",
    },
    {
      id: "sertificate7",
      image: "./images/sertificate9.jpeg",
    },
    {
      id: "sertificate8",
      image: "./images/sertificate10.jpeg",
    },
    {
      id: "sertificate9",
      image: "./images/sertificate13.jpeg",
    },
    {
      id: "sertificate10",
      image: "./images/sertificate12.jpeg",
    },
  ];

  // const certificates_other = [
  //   {
  //     id: "sertificate1",
  //     image: "./images/sertificate15.jpeg",
  //   },
  //   {
  //     id: "sertificate2",
  //     image: "./images/sertificate16.jpeg",
  //   },
  // ];

  return (
    <Container>
      <div className="sertificates">
        <div className="container sertificate-container">
          <div className="sertificate-title">
            <h2>Certificates</h2>
            <p>
              All Sausages, Meat and Dairy products sold by us have a halal
              certificate, and we will link the corresponding certificates
              below.
            </p>
          </div>
          <div className="sertificate">
            <h4>Sausage products certificate</h4>
            <div className="sertificate-meal">
              {certificates.map((certificate) => (
                <Box key={certificate.id}>
                  <img
                    className="sertificate-image"
                    src={certificate.image}
                    alt="sertificate"
                    onClick={() => handleOpen(certificate.id)}
                  />
                  <Modal
                    open={selectedImage === certificate.id}
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                      <img
                        className="sertificate-modal_image"
                        src={certificate.image}
                        alt="sertificate"
                      />
                    </Box>
                  </Modal>
                </Box>
              ))}
            </div>
          </div>

          <div className="sertificate">
            <h4>Meat products certificate</h4>
            <div className="sertificate-images">
              {certificates_meat.map((certificate) => (
                <div className="sertificate-img">
                  <img
                    className="sertificate-image"
                    src={certificate.image}
                    alt="sertificate"
                    onClick={() => handleOpen(certificate.id)}
                  />
                  <Modal
                    open={selectedImage === certificate.id}
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                      <img
                        className="sertificate-modal_image"
                        src={certificate.image}
                        alt="sertificate"
                      />
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </div>

          <div className="sertificate">
            <h4>Diary products certificate</h4>
            <div className="sertificate-meal">
              {certificates.map((certificate) => (
                <Box key={certificate.id}>
                  <img
                    className="sertificate-image"
                    src={certificate.image}
                    alt="sertificate"
                    onClick={() => handleOpen(certificate.id)}
                  />
                  <Modal
                    open={selectedImage === certificate.id}
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                      <img
                        className="sertificate-modal_image"
                        src={certificate.image}
                        alt="sertificate"
                      />
                    </Box>
                  </Modal>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
