import React, { PureComponent } from "react";
import { GridRow, GridColumn, Carousel, Utils, LazyImg, Button } from "..";

class CarouselTest extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.items = [
      {
        id: "zsfef",
        image:
          "https://cdn04.nnnow.com/web-images/medium/styles/7AZZWRHJ7WR/1473936756887/2.jpg",
      },
      {
        id: "afaf",
        image:
          "https://cdn02.nnnow.com/web-images/medium/styles/GE1QP56A4BB/1487854795485/2.jpg",
      },
      {
        id: "fafa",
        image:
          "https://cdn17.nnnow.com/web-images/medium/styles/MA8M6WD5PAL/1473157768702/2.jpg",
      },
      {
        id: "sggaf",
        image:
          "https://cdn16.nnnow.com/web-images/medium/styles/V4XYIADIQ9C/1481106617805/2.jpg",
      },
    ];

    this.renderItems = this.renderItems.bind(this);
    this.setParent = this.setParent.bind(this);
  }

  setIndex(index) {
    this.setState({
      index,
    });
  }

  setParent() {
    const [carouselContainer] = document.querySelectorAll(
      ".nw-carouselexample",
    );

    this.carouselContainer = carouselContainer;
  }

  renderItems(item) {
    return (
      <div
        key={item.id}
        role="presentation"
        className="nw-carouselexample-item"
        onKeyDown={Utils.noop}
      >
        <LazyImg
          index={this.state.index}
          className="nw-carouselexample-img"
          src={item.image}
          offset={300}
          parentElement={this.carouselContainer}
        />
      </div>
    );
  }

  render() {
    const { index } = this.state;

    const nextIndex = index + 1;
    const limitNextIndex = nextIndex >= this.items.length ? index : nextIndex;

    const prevIndex = index - 1;
    const limitPrevIndex = prevIndex < 0 ? index : prevIndex;

    return (
      <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
        <h1>Carousel</h1>
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
            <Carousel
              ref={this.setParent}
              className="nw-carouselexample"
              index={index}
              items={this.items}
              renderItems={this.renderItems}
            />
            <Button
              className="nw-carouseltest-btnprev"
              onClick={() => {
                this.setIndex(limitPrevIndex);
              }}
            >
              &lt;
            </Button>
            <Button
              className="nw-carouseltest-btnnext"
              onClick={() => {
                this.setIndex(limitNextIndex);
              }}
            >
              &gt;
            </Button>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default CarouselTest;
