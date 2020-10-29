import React, { Component } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
// Timeline vertical
class Timeline extends Component {
  render() {
    return (
      <div className="row banner" id="schedule" style={{ paddingTop: '80px' }}>
        <div className="banner-text">
          <h1
            className="responsive-headline"
            style={{ textAlignVertical: 'center', textAlign: 'center' }}
          >
            SCHEDULE
          </h1>
        </div>

        <br></br>

        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>Event 1</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  Nov 2020 - Present
                </span>
              </div>
              <h2>desc</h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>Event 2</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  Nov 2020 - Present
                </span>
              </div>
              <h2>desc</h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>Event 3</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  Nov 2020 - Present
                </span>
              </div>
              <h2>desc</h2>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>Event 4</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  Nov 2020 - Present
                </span>
              </div>
              <h2>desc</h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>Event 5</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  Nov 2020 - Present
                </span>
              </div>
              <h2>desc</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Timeline;
