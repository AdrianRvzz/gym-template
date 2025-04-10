import "../App.css";
import Layout from "../components/Layout";
import { Col, Dropdown, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import Fancybox from "../components/FancyBox";

export interface Image {
  id: string;
  src: string;
  title: string;
  category: string;
}

export interface GalleryProps {
  route: string;
  images: Image[];
}

function GalleryPage({ route, images }: GalleryProps): React.JSX.Element {
  const [originalData, setOriginalData] = useState<Image[]>(images);
  const [data, setData] = useState<Image[]>(images);
  const [categories, setCategories] = useState<string[]>([]);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(images.map((image) => image.category)),
    ];
    setCategories(uniqueCategories);
    setOriginalData(images);
    setData(images);
  }, [route]);

  const gallery_filter = (itemData: string) => {
    const filterData = originalData.filter(
      (item) => item.category === itemData
    );
    setIsHiding(true);
    setTimeout(() => {
      setData(filterData);
      setIsHiding(false);
    }, 150);
  };

  return (
    <Layout
      children={
        <div className="galleryWrapper container  gallery-navbar ">
          <Row className="py-2  ">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setData(originalData)}
                  className="btn-clicked"
                >
                  All
                </Dropdown.Item>
                {categories.map((item, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => gallery_filter(item)}
                    className="btn-clicked"
                  >
                    {item.toLocaleUpperCase()}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Row>

          <Fancybox>
            <Row
              className={`galleryContainer d-flex align-items-center justify-content-center ${
                isHiding ? "hide" : ""
              }`}
            >
              {data.map((item, index) => (
                <Col
                  sm={6}
                  md={4}
                  lg={4}
                  key={item.id || `${item.src}-${index}`}
                  className="mb-2"
                >
                  <a
                    data-fancybox="gallery"
                    href={item.src}
                    className="fancybox"
                    data-caption={item.title}
                  >
                    <img
                      src={item.src}
                      title={item.title}
                      className="rounded w-100"
                    />
                  </a>
                </Col>
              ))}
            </Row>
          </Fancybox>
        </div>
      }
    />
  );
}

export default GalleryPage;
