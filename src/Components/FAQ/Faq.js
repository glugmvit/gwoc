import React, { Component } from 'react';
import Panels from './Panels';
import './Faq.css';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      panels: [],
    };
  }

  componentDidMount = () => {
    this.setState({ panels: require('../../faq.json') });
  };

  activateTab = (index) => {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  };

  render() {
    const { activeTab, panels } = this.state;
    return (
      <section id="faq" className="accordionWrapper">
        <h1
          className="responsive-headline"
          style={{ textAlignVertical: 'center', textAlign: 'center' }}
        >
          FAQ
        </h1>
        <div className="accordion" role="tablist">
          {panels.map((panel, index) => (
            <Panels
              key={index}
              activeTab={activeTab}
              index={index}
              {...panel}
              activateTab={this.activateTab.bind(null, index)}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Accordion;
