import { Fragment } from "react";
import ScrollNavbar from "../components/layout/ScrollNavbar";
import Button from "../components/ui/button";

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../data/photos";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import Photo from "./Photo";
import { saveAs } from "file-saver";

const SortablePhoto = SortableElement((item) => (
  <Photo {...item} direction="column" />
));
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
    direction="column"
    columns={3}
  />
));
const SortableGallerySmall = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
    direction="column"
    columns={1}
  />
));

function portfolioEdit() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);
  };

  const downloadSequence = () => {
    var filename = "photos.txt";
    const output = JSON.stringify(items);

    var blob = new Blob([output], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, filename);
  };

  return (
    <Fragment>
      <ScrollNavbar fade={false} />
      <div className="mx-auto max-w-3xl text-center my-12 lg:my-24">
        <div className="border-b-2 border-brown-pale inline-block sm:px-10 my-6">
          <h2 className="title-2 leading-tight">Portfolio</h2>
        </div>
        <p className="mb-6 mx-2">
          Kijk rond en krijg een beeld van mijn fotografie stijl. Wil je graag
          foto’s laten maken? Neem vrijblijvend contact met mij op en we plannen
          samen een afspraak!
        </p>
        <Button
          link="/over-mij#contact"
          button="button-1"
          text="Neem contact op"
        />
      </div>
      <div className="hidden md:block">
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </div>
      <div className="md:hidden">
        <SortableGallerySmall items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </div>
      <div className="fixed bottom-0 right-0">
      <button className=" bg-green-600 hover:bg-green-500 m-2 p-2 px-4 rounded-3xl text-white" onClick={downloadSequence}>Download volgorde</button>
      </div>
    </Fragment>
  );
}

export default portfolioEdit;
