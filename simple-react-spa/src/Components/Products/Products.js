import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Products = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const handleClick = (card) => {
    const newCart = [...cart, card];
    setCart(newCart);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <section>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {cart.map((ct) => (
            <h2>{ct.name}</h2>
          ))}
        </Modal>
      </section>

      <section className="product__container container">
        {guns.map((gun) => {
          return <Product key={gun.id} data={gun} handleClick={handleClick} />;
        })}
      </section>
    </>
  );
};

export default Products;
